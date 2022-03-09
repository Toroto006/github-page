// TODO FIX ALL DEPRECATED ISSUES!

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  // TODO change particle effect to network effect
  gradientColors: "#000022, #001242, #0094c6, #005e7c, #040f16",
  firstName: "Tobias",
  middleName: "",
  lastName: "Oberdörfer",
  message: " Having a challenge to follow is the most fun! ",
  icons: [
    {
      image: "fa fa-linkedin",
      url: "https://linkedin.com/in/tobias-oberdoerfer",
    },
    {
      image: "fa fa-github",
      url: "https://github.com/Toroto006",
    },
    {
      image: "fa fa-comments",
      url: "https://matrix.to/#/@toroto008:matrx.me",
    },
    {
      image: "fa fa-envelope",
      url: "mailto:tobias.ober@hotmail.com",
    },
    {
      image: "fa fa-twitter",
      url: "https://twitter.com/toroto008",
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
  imageLink: require("../editable-stuff/professional-2022-03-resized.jpg"),
  imageSize: 375,
  message:
    "My name is Tobias Oberdörfer and I am currently doing my masters degree with Major in Cyber Security at ETH Zurich. I am passionate about anything that has to do with computer systems, from how the linux kernel works over board management controllers to overall cyber security. In my free time I am currently most often occupied with playing CTFs as part of flagbot or organizers.",
  // TODO add more dynamic link!
  resume: "tobias-oberdoerfer-resume.pdf",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  //TODO prioritize specific repos!
  // TODO publicize "AML-ETHZ-HS21",
  specificRepos: ["InfoSecLab-ETHZ-HS21", "SysSec-ETHZ-HS21", "routingSimEngine-ETHZ-FS20", "IML-ETHZ-FS21"],
  gitHubUsername: "Toroto006", //i.e."johnDoe12Gh"
  reposLength: 4,
};

// Leadership SECTION
const leadership = {
   show: false,
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
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "C", value: 80 },
    { name: "Java", value: 70 },
    { name: "Haskell", value: 65 },
    { name: "IDA Pro", value: 65 },
    { name: "Data Structures", value: 60 },
    { name: "React", value: 50 },
    { name: "SQL", value: 45 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Communication", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Teamwork", value: 75 },
    { name: "Leadership", value: 75 },
    { name: "Adaptability", value: 70 },
    { name: "Time management", value: 65 },
    { name: "Creativity", value: 65 },
  ],
  // TODO add other skills like IDA and languages
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for an internship or part-time job in the field of Cyber Security! If you know of any positions available, have any questions, or just want to say hi, please feel free to email me at",
  // TODO remove the comma here
  email: "tobias.ober@hotmail.com",
};

//TODO CTF
const experiences = {
   show: false,
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
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, skills, repos, getInTouch, experiences, leadership };
