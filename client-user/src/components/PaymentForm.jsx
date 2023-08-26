import { useState, useEffect, useCallback } from "react";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "../stripe.utils";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import axios from "axios";

const PaymentForm = () => {
    const { id } = useParams();
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        console.log(`on-client--clientSecret: ${clientSecret}`)
        console.log(`type: ${typeof clientSecret}`)
    }, [clientSecret])

    const paymentHandler = useCallback(async () => {
        try {
            // get the price first 
            const res = await axios.get(`http://localhost:3000/users/courses/${id}`, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                }
            });
            console.log('res1: ', res.data.course.price)
            const p = res.data.course.price;
            // next create the payment intent
            try {
                const res2 = await axios
                    .post("http://localhost:3000/payment/create-payment-intent", {
                        course: { price: p }
                    }, {
                        headers: { "Content-Type": "application/json" }
                    });
                console.log('res2: ', res2.data);
                setClientSecret(res2.data.clientSecret)
            } catch (error) {
                console.log(`error creating payment intent ${error}`)
            }

        } catch (error) {
            console.log(`error fetching course data ${error}`)
        }

    }, [id])

    useEffect(() => {
        console.log(`before fetch ${clientSecret}`)
        paymentHandler()
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