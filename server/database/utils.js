const { Course } = require("../database/models");

const getACourse = async (courseId) => {
    try {
        const course = await Course.findById(courseId);
        return course
    } catch (error) {
        return null;
    }
}

module.exports = {
    getACourse
}