import {courseData} from "./data.js"
// prev-year-que js
const url=new URLSearchParams(window.location.search);
const course=url.get("course")
const sem=url.get("sem")
const subject=url.get("subject")
console.log(course,sem,subject)

for (let key in courseData) {
  // check course
  if(course==key){
    // visit semesters 
    for (let semester in courseData[key]. semesters) {
      // check semester
    if (sem==semester) {
    console.log(sem)
    
    // visit the subjects 
    for (let index in courseData[key]. semesters[sem].subjects) {
      
  // check subject
        if(courseData[key]. semesters[sem].subjects[index].id==subject){
          // display Heading course semester subject
              document.getElementById("sub-sem").textContent=`${courseData[key].name}  Semester-${sem} ${courseData[key]. semesters[sem].subjects[index].name}`;
              // display years or links to download 
              for (let year in courseData[key]. semesters[sem].subjects[index].papers) {
                
                  document.getElementById("prev-papers").innerHTML+=`<li><a href="" download>${courseData[key]. semesters[sem].subjects[index].papers[year]} </a></li>`
                
              }
              
              
              
              break;
        }
        
    }
    break;
    
    }
     
    }
   break 
  }
  
}