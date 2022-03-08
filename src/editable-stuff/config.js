// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Tobias",
  middleName: "",
  lastName: "Oberdoerfer",
  message: " Having a challenge to follow is the most fun! ",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://linkedin.com/in/tobias-oberdoerfer",
    },
    {
      image: "fa-github",
      url: "https://github.com/Toroto006?tab=repositories",
    },
    {
      image: "fa-comments",
      url: "https://matrix.to/#/@toroto008:matrx.me",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/toroto008",
    },
    {
      image: "fa-envelope",
      url: "mailto:tobias.ober@hotmail.com",
    },  
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  // TODO fix this picture!
  imageLink: "https://media-exp1.licdn.com/dms/image/C4D03AQGVaUMQ2AXq2A/profile-displayphoto-shrink_800_800/0/1641563399543?e=1652313600&v=beta&t=NzTd_rimEbBfPr3XS9rjs_g7z43NhWk4k50IBd177Cg",
  imageSize: 375,
  message:
    "My name is Tobias Oberdoerfer and I am currently doing my masters degree with Major in Cyber Security at ETH Zurich. I am passionate about anything that has to do with computer systems, from how kernel paging works over board management controllers to overall cyber security. In my free time I am currently most often occupied with playing CTFs as part of flagbot or organziers if I am not out in nature.",
  // TODO add more dynamic link!
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Toroto006", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: ["InfoSecLab-ETHZ-HS21", "AML-ETHZ-HS21", "routingSimEngine-ETHZ-FS20"],
};

// Leadership SECTION
// const leadership = {
//   show: false,
//   heading: "Leadership",
//   message:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
//   images: [
//     { 
//       img: require("../editable-stuff/hashirshoaeb.png"), 
//       label: "First slide label", 
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//     },
//     { 
//       img: require("../editable-stuff/hashirshoaeb.png"), 
//       label: "Second slide label", 
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//     },
//   ],
//   imageSize: {
//     width:"615",
//     height:"450"
//   }
// };

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "C", value: 80 },
    { name: "Haskell", value: 70 },
    { name: "Java", value: 65 },
    { name: "Data Structures", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "React", value: 50 },
    { name: "SQL", value: 45 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Problem Solving", value: 85 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 75 },
    //{ name: "Empathy", value: 70 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for an internship or part-time in the field of Cyber Security! If you know of any positions available, have any questions, or just want to say hi, please feel free to email me at",
  email: "tobias.ober@hotmail.com",
};

//TODO CTF
// const experiences = {
//   show: false,
//   heading: "Experiences",
//   data: [
//     {
//       role: 'Software Engineer',// Here Add Company Name
//       companylogo: require('../assets/img/dell.png'),
//       date: 'June 2018 – Present',
//     },
//     {
//       role: 'Front-End Developer',
//       companylogo: require('../assets/img/boeing.png'),
//       date: 'May 2017 – May 2018',
//     },
//   ]
// }

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, skills, repos, getInTouch };
