import {courseData} from "./data.js"

const url=new URLSearchParams(window.location.search);
const course=url.get("course")
const sem=url.get("sem")
const subject=url.get("subject")
console.log(course,sem,subject)