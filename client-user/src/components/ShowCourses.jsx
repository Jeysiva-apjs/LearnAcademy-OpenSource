import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import Button from "@mui/material/Button";

import { Typography } from "@mui/material";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { atom, useRecoilState } from "recoil";
import axios from "axios";
import { Main, openState } from "./AppNavBar";
import "./coursesStyles.css";

const coursesState = atom({
  key: "coursesState",
  default: [],
});

function ShowCourses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useRecoilState(coursesState);
  const [open] = useRecoilState(openState);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/courses/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCourses(res.data.courses);
      })
      .catch((err) => console.log(err));
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
          marginLeft: "210px",
        }}
      >
        All Courses
      </Typography>
      <div className="all-courses">
        {courses.length > 0
          ? courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))
          : "Oops! No course is currently offered. Return later!"}
      </div>
    </Main>
  );
}

export default ShowCourses;
