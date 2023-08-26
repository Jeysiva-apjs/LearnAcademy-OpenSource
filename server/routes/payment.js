const express = require("express");
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const router = express.Router()
// app.use(express.static("public"));
// app.use(express.json());

const calculateOrderAmount = (price) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    const p = price * 100;
    return p;
};

router.post("/create-payment-intent", async (req, res) => {
    const { course } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(course.price),
        currency: "usd",
        // In the latest version of the API, 
        // specifying the `automatic_payment_methods` parameter 
        // is optional because Stripe 
        // enables its functionality by default.
        automatic_payment_methods: {
            enabled: true,
        },
    });

    console.log(`client-secret: ${paymentIntent.client_secret}`)
    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});


module.exports = router;