import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect, useRef } from "react";

const AddCourse = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const sendRequest = useRef(true); // this is used to make sure that the api request is sent once

    const purchaseCourse = async () => {
        if (sendRequest.current) {
            sendRequest.current = false;
            try {
                const res = await axios.post(`http://localhost:3000/users/courses/${id}`, {},
                    {
                        headers: {
                            Authorization:
                                "Bearer " + localStorage.getItem("token"),
                        },
                    }
                );
                if (res?.data?.message) {
                    toast.success(res.data.message);
                    navigate('/courses/purchased')
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    // React 18 causes useEffect to fire twice
    useEffect(() => {
        purchaseCourse()
    }, [])

    return (
        <></>
    )
}

export default AddCourse;