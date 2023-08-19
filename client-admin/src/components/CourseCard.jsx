import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { coursesState } from "./ShowCourses";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";

function CourseCard(props) {
  const navigate = useNavigate();
  const [isMoveOver, setIsMoueOver] = useState(false);
  const [courses, setCourses] = useRecoilState(coursesState);

  function deleteCourse() {
    var userInput = window.prompt("Type DELETE to delete the course: ");
    const id = props.course._id;
    if (userInput === "DELETE") {
      axios
        .delete(`http://localhost:3000/admin/courses/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setCourses(courses.filter((course) => course._id !== id));
          toast.success(res.data.message);
          navigate("/courses");
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div>
      <Card
        sx={{ maxWidth: 345, height: 400 }}
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          border: isMoveOver ? "1px solid #bc1c44" : "1px solid lightsteelblue",
        }}
        onMouseOver={() => setIsMoueOver(true)}
        onMouseLeave={() => setIsMoueOver(false)}
      >
        <div>
          <CardMedia
            sx={{ height: 200, width: 350 }}
            image={props.course.imageLink}
            title={props.course.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{
                fontWeight: "700",
                color: isMoveOver && "#bc1c44",
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {props.course.title}
            </Typography>
            <Typography
              gutterBottom
              variant="h8"
              component="div"
              style={{
                fontWeight: "50",
                fontFamily: "inherit",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {props.course.description}
            </Typography>
            <br />
            <div style={{ display: "flex", gap: "10px" }}>
              <Button
                variant="contained"
                style={{ backgroundColor: "green", marginBottom: "10px" }}
                onClick={() => navigate(`/UpdateCourse/${props.course._id}`)}
              >
                update
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#bc1c44", marginBottom: "10px" }}
                onClick={() => deleteCourse()}
              >
                delete
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseCard;
