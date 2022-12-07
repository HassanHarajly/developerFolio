
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Hassan Harajly",
  title: "Hi all, I'm Hassan",
  subTitle: emoji("A passionate Full Stack Software Engineer 🚀 who has a lot of experience with building Web and Mobile applications with Typescript / Angular/ Spring Boot/ Java/  Pivotal Cloud Foundry / NodeJS / some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1QOf88ejMvHXCFnwoo3ERxrPH603jiOp2/view"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/HassanHarajly?tab=repositories",
  linkedin: "https://www.linkedin.com/in/hassan-harajly-590b0864/",
  gmail: "harajlyhassan@gmail.com",
//  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/7696844/hassan-harajly",
  twitter:'https://twitter.com/HarajlyHassan'
  // Instagram and Twitter are also supported in the links!,

};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular ",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "My-sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Spring-Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",  
      company: "Ford Credit",
      companylogo: require("./assets/images/fordLogo.webp"),
      date: "September 2018 – Present",
      desc: "Full Stack Software Engineer for the Ford Credit Online Credit Application.",
      descBullets: [
        "Developed new features for the Ford Online Credit web application",
        "Provided production support for Legacy code base.",
        "Actively maintained and rewrote Legacy code to business specifications.",
        "Created new CI/CD pipelines to facilitate faster code deployment.",
        "Documented existing business logic of Legacy system.",
        "Developed secure Angular 9 web application."

      ]
    },
    {
      role: "Software Engineer Intern",  
      company: "Masco Cabinetry",
      companylogo: require("./assets/images/kraftmaidLogo.png"),
      date: "may 2018 – August 2018",
      desc: "Front-End Developer For Masco Cabinetry's subsidiary company KraftMaid",
      descBullets: [
        "Interfaced with design agency to clarify design choices and modify user experience to best fit business needs of a redesign.",
        "Built a new web application kitchen remodel price estimation tool for Kraftmaid.com.",
        "Built out a “My Project” page for Kraftmaid.com.",
        "Communicated business needs to team in India to build out a new API to support the price estimation tool."
            ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpawhsta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "below are some companies I have contributed to.",
  projects: [
    {
      image: require("./assets/images/fordLogo.webp"),
      link: "https://www.ford.com/finance/online-credit-application/apply#/"
    },

        {
          image: require("./assets/images/kraftmaidLogo.png"),
          link: "https://www.kraftmaid.com/getting-ready/setting-a-budget/project-estimator/"
        }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

//const talkSection = {
//  title: "TALKS",
//  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
//
//  talks: [
//    {
//      title: "Build Actions For Google Assistant",
//      subtitle: "Codelab at GDG DevFest Karachi 2019",
//      slides_url: "https://bit.ly/saadpasta-slides",
//      event_url: "https://www.facebook.com/events/2339906106275053/"
//    }
//  ]
//};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to discuss a project or just want to say hi? My Inbox is open for all.",
  number: "3139784945",
  email_address: "harajlyhassan@gmail.com"
};

//Twitter Sections

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, podcastSection, contactInfo , twitterDetails};
