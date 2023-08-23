import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "../stripe.utils";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

const PaymentForm = () => {
    const { id } = useParams();
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        console.log(`on-client--clientSecret: ${clientSecret}`)
        console.log(`type: ${typeof clientSecret}`)
    }, [clientSecret])

    useEffect(() => {
        console.log(`before fetch ${clientSecret}`)
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:3000/payment/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="App">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise} key={clientSecret}>
                    <CheckoutForm id={id} />
                </Elements>
            )}
        </div>
    );
}

export default PaymentForm;