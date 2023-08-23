import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const ConfirmPayment = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // prevent SSR
            // This code will only run on the client side
            axios
                .post(
                    `http://localhost:3000/users/courses/${id}`,
                    {},
                    {
                        headers: {
                            Authorization:
                                "Bearer " + localStorage.getItem("token"),
                        },
                    }
                )
                .then((res) => {
                    toast.success(res.data.message);
                    navigate('/courses/purchased')
                })
                .catch((err) => console.log(err));
        }
    }, [])
    return (
        <></>
    )
}

export default ConfirmPayment;