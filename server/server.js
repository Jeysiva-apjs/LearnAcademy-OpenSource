const express = require("express");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const paymentRouter = require("./routes/payment");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
require("./database/connect");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/admin", adminRouter);
app.use("/users", userRouter);
app.use("/payment", paymentRouter);


app.get('/', async (req, res) => {
    const { redirect_status } = req.query;

    try {
        // Retrieve the PaymentIntent using its client secret
        // const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent_client_secret);

        // Update the payment status based on the redirect_status query parameter
        if (redirect_status === "succeeded") {
            // Payment succeeded, update your database or perform other actions
            // You can use paymentIntent.payment_status or similar properties to update the status
            return res.json({ message: 'Payment Successful' })
            // res.redirect("http://localhost:3000/users/courses");
        } else {
            // Payment failed or other status, handle accordingly
            return res.status(404).json({ message: 'Payment failed' })
        }
    } catch (error) {
        console.error("Error handling payment redirect:", error);
        // Redirect to an error page or handle errors accordingly
        return res.status(500).json({ message: 'Payment failed' })
    }
})
app.listen(3000, () => console.log("Server running on port 3000"));
