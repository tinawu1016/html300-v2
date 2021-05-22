//create card infomation//
const cardInfo = [
  {
    "name": "Paolo Maldini",
    "jobTitle": "Front End Developer",
    "company": "Web Weavers",
    "experience": "3 years",
    "school": "University of Washington",
    "major": "Marketing",
    "email": "paolo@example.com",
    "linkedInUrl": "paolo.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Node", "Express"
    ]
  },
  {
    "name": "Barbara Bonansea",
    "jobTitle": "Software Engineer",
    "company": "Excellence in the Cloud",
    "experience": "12 years",
    "school": "University of Southern California",
    "major": "Computer Science",
    "email": "barbara@example.com",
    "linkedInUrl": "barbara.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "JavaScript", "C", "Go"
    ]
  },
  {
    "name": "Javier Hernandez",
    "jobTitle": "User Experience Engineer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "Seattle University",
    "major": "Performing Arts",
    "email": "javier@example.com",
    "linkedInUrl": "javier.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS"
    ]
  },
  {
    "name": "Maribel Dominguez",
    "jobTitle": "Front End Engineer",
    "company": "Bits and Bytes",
    "experience": "6 years",
    "school": "University of Washington",
    "major": "Mechanical Engineering",
    "email": "maribel@example.com",
    "linkedInUrl": "maribel.linkedinprofile.com",
    "codeLanguages": [
       "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
    ]
  }
 ]

// add map function//
let cardInfoHTML = cardInfo.map(function(el){
  return `
    <main class="main">
      <div class="left">
        <img class="pic" src="img/headshot.jpg" alt="Paolo Maldini photo">
        <p class="name">${el.name}</p>
        <p class="job">${el.jobTitle}</p>

      </div>
      <div class="right">
        <ul>
          <li><span>Company: </span> ${el.company}</li>
          <li><span>Experience: </span>${el.experience}</li>
          <li><span>School: </span>${el.school}</li>
          <li><span>Major: </span>${el.major}</li>
          <li><span>Email: </span>${el.email}</li>
        </ul>

        <div class="link">
          <img class="icon" src="img/linkedin.svg" alt="linkedin logo">
          <a href="${el.linkedInUrl}">${el.linkedInUrl}</a>
        </div>

      </div>
    </main>
  `;
});

//put into html//
document.querySelector(".container").innerHTML = cardInfoHTML;
