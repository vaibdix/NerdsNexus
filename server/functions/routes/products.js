const router = require('express').Router();
const admin = require('firebase-admin');
const db = admin.firestore()
db.settings({ ignoreUndefinedProperties: true })
const stripe = require('stripe')(process.env.STRIPE_KEY)

router.post('/create', async (req,res) => {
    try {
        const id = Date.now()
        const data = {
            productId: id,
            product_name: req.body.product_name,
            product_category: req.body.product_category,
            product_price: req.body.product_price,
            imageURL: req.body.imageURL,
          }
          const response = await db.collection('products').doc(`/${id}/`).set(data)
          return res.status(200).send({ success:true, data: response })
    } catch (err) {
        return res.send({ success:false, msg: `Error: ${err}` })
    }
})


// getall the products
router.get("/all", async (req, res) => {
    (async () => {
      try {
        let query = db.collection("products");
        let response = [];
        await query.get().then((querysnap) => {
          let docs = querysnap.docs;
          docs.map((doc) => {
            response.push({ ...doc.data() });
          });
          return response;
        });
        return res.status(200).send({ success: true, data: response });
      } catch (err) {
        return res.send({ success: false, msg: `Error :${err}` });
      }
    })();
  });
  // delete a product
router.delete("/delete/:productId", async (req, res) => {
  const productId = req.params.productId;
  try {
    await db
      .collection("products")
      .doc(`/${productId}/`)
      .delete()
      .then((result) => {
        return res.status(200).send({ success: true, data: result });
      });
  } catch (err) {
    return res.send({ success: false, msg: `Error :${err}` });
  }
});


// create a cart
router.post('/addToCart/:userId', async (req, res) => {
  const userId = req.params.userId
  const productId = req.body.productId
  try {
    const doc = await db
      .collection('cartItems')
      .doc(`/${userId}/`)
      .collection('items')
      .doc(`/${productId}/`)
      .get();

      if (doc.data()) {
        const quantitly = doc.data().quantitly + 1
        const updatedItem = await db
        .collection('cartItems')
        .doc(`/${userId}/`)
        .collection('items')
        .doc(`/${productId}/`)
        .update({quantitly});
        return res.status(200).send({ success: true, data: updatedItem })
      } else {
        const data = {
          productId: productId,
          product_name: req.body.product_name,
          product_category: req.body.product_category,
          product_price: req.body.product_price,
          imageURL: req.body.imageURL,
          quantitly: 1
        };
        const addItems = await db
        .collection('cartItems')
        .doc(`/${userId}/`)
        .collection('items')
        .doc(`/${productId}/`)
        .set(data);
        return res.status(200).send({ success: true, data: addItems })
      }
  } catch (err) {
    return res.send({ success: false, msg: `Error :${err}` });
  }
})

// update cart to increase and decrease the quantity
router.post("/updateCart/:user_id", async (req, res) => {
  const userId = req.params.user_id;
  const productId = req.query.productId;
  const type = req.query.type;

  try {
    const doc = await db
      .collection("cartItems")
      .doc(`/${userId}/`)
      .collection("items")
      .doc(`/${productId}/`)
      .get();

    if (doc.data()) {
      if (type === "increment") {
        const quantity = doc.data().quantity + 1;
        const updatedItem = await db
          .collection("cartItems")
          .doc(`/${userId}/`)
          .collection("items")
          .doc(`/${productId}/`)
          .update({ quantity });
        return res.status(200).send({ success: true, data: updatedItem });
      } else {
        if (doc.data().quantity === 1) {
          await db
            .collection("cartItems")
            .doc(`/${userId}/`)
            .collection("items")
            .doc(`/${productId}/`)
            .delete()
            .then((result) => {
              return res.status(200).send({ success: true, data: result });
            });
        } else {
          const quantity = doc.data().quantity - 1;
          const updatedItem = await db
            .collection("cartItems")
            .doc(`/${userId}/`)
            .collection("items")
            .doc(`/${productId}/`)
            .update({ quantity });
          return res.status(200).send({ success: true, data: updatedItem });
        }
      }
    }
  } catch (err) {
    return res.send({ success: false, msg: `Error :${err}` });
  }
});


// get all the cartitems for that user
router.get("/getCartItems/:user_id", async (req, res) => {
  const userId = req.params.user_id;
  (async () => {
    try {
      let query = db
        .collection("cartItems")
        .doc(`/${userId}/`)
        .collection("items");
      let response = [];

      await query.get().then((querysnap) => {
        let docs = querysnap.docs;

        docs.map((doc) => {
          response.push({ ...doc.data() });
        });
        return response;
      });
      return res.status(200).send({ success: true, data: response });
    } catch (er) {
      return res.send({ success: false, msg: `Error :,${er}` });
    }
  })();
});

router.post('/create-checkout-session', async (req, res) => {

  const line_items = req.body.data.cart.map((item) => {
    return {
      price_data: {
        currency: "inr",
        product_data: {
          name: item.product_name,
          images: [item.imageURL],
          metadata: {
            id: item.productId,
          },
        },
        unit_amount: item.product_price * 100,
      },
      // quantity: item.quantity,
      quantity: 1,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: { allowed_countries: ["IN"] },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 0, currency: "inr" },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: { unit: "hour", value: 2 },
            maximum: { unit: "hour", value: 4 },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    line_items,
    // customer: customer.id,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/`,
  });

  res.send({url : session.url});
});

module.exports = router;