import { useEffect, useState } from "react";
import {
    PaymentElement,
    LinkAuthenticationElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import Button from "@mui/material/Button";
import CircularProgress from '@mui/joy/CircularProgress';
import './checkoutFormStyles.css';

export default function CheckoutForm({ id }) {
    const stripe = useStripe();
    const elements = useElements();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`)
    }, [isLoading])

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    console.log('Payment succeeded');
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    console.log('Your payment is beign processed');
                    setMessage("Your payment is being processed.");
                    break;
                case "requires_payment_method":
                    console.log("Your payment was not successful, please try again.")
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    console.log("Something went wrong.")
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: `http://localhost:5173/courses/${id}/confirm-payment`,
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    return (
        <div className="checkoutFormContainer">
            <div className="checkoutForm">
                <form id="payment-form" onSubmit={handleSubmit}>
                    <LinkAuthenticationElement
                        id="link-authentication-element"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <PaymentElement id="payment-element" options={paymentElementOptions} />
                    <Button
                        disabled={isLoading || !stripe || !elements} type="submit"
                        variant="contained"
                        style={{ backgroundColor: "green", marginBottom: "10px" }}
                    >
                        {isLoading ? <CircularProgress size="sm" color="neutral" /> : "Pay now"}
                    </Button>
                    {/* Show any error or success messages */}
                    {message && <div id="payment-message">{message}</div>}
                </form>
            </div>
        </div>
    );
}