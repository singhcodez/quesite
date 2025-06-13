import {courseData} from "./data.js"
// prev-year-que js
const url=new URLSearchParams(window.location.search);
const course=url.get("course")
const sem=url.get("sem")
const subject=url.get("subject")
console.log(course,sem,subject)

for (let key in courseData) {
  
  if(course==key){
    
    for (let semester in courseData[key]. semesters) {
      // Tab to edit
    if (sem==semester) {
    console.log(sem)
    
    
    for (let index in courseData[key]. semesters[sem].subjects) {
      // Tab to edit
  
        if(courseData[key]. semesters[sem].subjects[index].id==subject){
          
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