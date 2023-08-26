import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import "../index.css";
import { useRecoilState } from "recoil";
import axios from "axios";
import { Main, openState } from "./AppNavBar";
import "./coursesStyles.css";
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/joy/CircularProgress';

function PurchasedCourses() {
  const [open, setOpen] = useRecoilState(openState);
  const [purCourses, setPurchasedCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/purchasedCourses", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setPurchasedCourses(res.data.purchasedCourses);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false);
      });
  }, []);


  return (
    <Main open={open}>
      <Typography
        variant="h4"
        component="div"
        style={{
          flexGrow: 1,
          padding: "10px",
          borderRadius: "4px",
          fontWeight: "bold",
          color: "#101460",
          textAlign: "center",
          marginTop: "70px",
        }}
      >
        Purchased Courses
      </Typography>
      <div className="all-courses">
        {purCourses.length > 0
          ? purCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
          : isLoading
            ? <CircularProgress size="sm" color="neutral" />
            : "No course has yet been purchased"
        }
      </div>
    </Main>
  );
}



export default PurchasedCourses;
