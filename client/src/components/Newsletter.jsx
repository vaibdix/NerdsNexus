import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const validateEmail = (email) => {
    // A simple email validation regex
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail.trim() === "") {
      setEmailError("Email is required");
    } else if (!validateEmail(newEmail)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      fetch("https://formsubmit.co/ajax/vaibdix1@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: "Newsletter",
          message: "Sign me up for newsletter",
          email: email // Add the email to the JSON object
        })
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Response from FormSubmit:", data);

          if (data.success) {
            setSubscribed(true);
            console.log("Subscription successful");
          } else {
            // Handle error, if any
            console.error("Subscription failed:", data.message);
          }
        })
        .catch((error) => {
          // Handle network or other errors
          console.error("Network error:", error);
        });
    } else {
      setEmailError("Invalid email format");
    }
  };

  return (
    <div className="w-full rounded-md h-[60vh] py-12 md:py-24 lg:py-32 xl:py-48 bg-[#191414]">
      <div className="px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-2xl pb-3 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-[#d8fc6f] to-[#cbcbcb]">
                Sign up for Newsletter
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Join us and get to know more.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              {subscribed ? (
                <div className="text-green-500">Thank you for subscribing!</div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="md:flex flex-row mb-10">
                    <input
                      type="text"
                      className={`form-control w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 font-normal text-gray-700 bg-[#f3f3f3] rounded-sm border-purple-600 ${
                        emailError ? "border-red-500" : ""
                      }`}
                      placeholder="Enter your email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-[#d8fc6f] text-black font-medium leading-snug uppercase rounded-sm shadow-md"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Subscribe
                    </button>
                  </div>
                  {emailError && (
                    <p className="text-red-500 text-xs">{emailError}</p>
                  )}
                </form>
              )}
              <p className="text-xs text-zinc-200 dark:text-zinc-100">
                Get ready to redefine your email experience.{" "}
                <a className="underline underline-offset-2 text-white" href="#">
                  Terms & Conditions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
