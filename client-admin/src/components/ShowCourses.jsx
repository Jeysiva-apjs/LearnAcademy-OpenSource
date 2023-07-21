import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { Typography } from "@mui/material";
import "../index.css";
import { atom, useRecoilState } from "recoil";
import axios from "axios";
import { Main, openState } from "./AppNavBar";
import "./coursesStyles.css";

const coursesState = atom({
  key: "coursesState",
  default: [],
});

function ShowCourses() {
  const [courses, setCourses] = useRecoilState(coursesState);
  const [open] = useRecoilState(openState);

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/courses/", {
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
        Courses
      </Typography>
      <div className="all-courses">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </Main>
  );
}

export default ShowCourses;
export { coursesState };
