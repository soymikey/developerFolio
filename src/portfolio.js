/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Maoqiang Zheng",
  title: "Hi all, I'm Maoqiang",
  subTitle: emoji(
    "A passionate Full Stack Software Engineer 🚀 with experience building scalable web and mobile applications using TypeScript, React, Next.js, Node.js, and modern development tools."
  ),
  resumeLink: "Frontend_Engineering_Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/soymikey",
  linkedin: "",
  gmail: "michael.zheng.usa@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  youtube: "https://www.youtube.com/@ByteGen",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK SOFTWARE ENGINEER SPECIALIZING IN SCALABLE WEB AND MOBILE APPLICATIONS",
  skills: [
    emoji(
      "⚡ Develop high-performance frontend applications using React, Next.js, and modern JavaScript/TypeScript"
    ),
    emoji("⚡ Architect scalable backend systems with Node.js, PostgreSQL, and RESTful APIs"),
    emoji(
      "⚡ Build cross-platform mobile and desktop applications with React Native and Electron"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // Languages
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },

    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // Frontend Ecosystem
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "TanStack Query",
      fontAwesomeClassname: "fas fa-sync-alt"
    },
    {
      skillName: "Immer",
      fontAwesomeClassname: "fas fa-snowflake"
    },
    {
      skillName: "Electron",
      fontAwesomeClassname: "fas fa-desktop"
    },
    // Backend & API
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Prisma",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "RESTful API",
      fontAwesomeClassname: "fas fa-server"
    },
    // DevOps & Performance
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Jest",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Udacity",
      logo: require("./assets/images/udacity.webp"),
      subHeader: "Front-End Web Nanodegree",
      duration: "June 2018",
      desc: "Completed comprehensive frontend development program covering modern web technologies and best practices.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Full Stack Architecture",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Boostcamp",
      companylogo: require("./assets/images/boostcamp.webp"),
      date: "Feb 2023 – Dec 2025",
      desc: "Elevated Lighthouse performance scores from 50 to 90+ by implementing advanced Next.js rendering strategies (SSR, SSG, and ISR), significantly optimizing Core Web Vitals and organic search rankings (SEO).",
      descBullets: [
        "Architected a complex Workout Creator and Management system, leveraging Immer to manage deeply nested immutable states, ensuring bug-free data manipulation and high-performance UI updates",
        "Scaled user subscription and authentication modules to support 500,000+ users, architecting Stripe Webhook event handlers on the backend to ensure robust payment synchronization and subscription lifecycle management"
      ]
    },
    {
      role: "Software Engineer",
      company: "Compass",
      companylogo: require("./assets/images/compass.webp"),
      date: "Dec 2021 – Jan 2023",
      desc: "Scaled the core property listing infrastructure to support 18% of the US residential real estate sales volume, ensuring high availability and seamless UX for the nation's top-performing agent teams.",
      descBullets: [
        "Optimized search interface performance by re-architecting complex state management with Redux and TanStack Query, reducing data synchronization latency by 40% across dynamic filter conditions",
        "Architected a comprehensive testing strategy (Unit/Integration), increasing code coverage and reducing post-release defects by 20% within a fast-paced, remote collaborative environment",
        "Developed a schema-agnostic Data Layer using the Adapter Pattern, decoupling frontend rendering from backend API changes and accelerating feature delivery cycles by 50%"
      ]
    },
    {
      role: "Software Engineer (Frontend)",
      company: "Zixun",
      companylogo: require("./assets/images/zixun.webp"),
      date: "Nov 2018 – Dec 2021",
      desc: "Developed and optimized a cross-platform desktop accelerator using Electron and React, ensuring consistent performance and UI/UX across Windows and macOS for a global user base of 800,000+.",
      descBullets: [
        "Integrated C++ dynamic libraries via node-ffi and managed complex Node.js child processes to execute high-performance network acceleration logic and UDP services",
        "Architected secure and embedded page communication protocols, implementing HTTPS encryption, code obfuscation, and ASAR encryption to protect intellectual property and user data"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PERSONAL PROJECTS AND APPLICATIONS I'VE DEVELOPED",
  projects: [
    {
      image: require("./assets/images/contractAssistant.png"), // Placeholder image
      projectName: "Contract Assistant",
      projectDesc: "A cross-platform mobile application using React Native that leverages AI to analyze legal documents and provide actionable contract advice, enhancing user decision-making efficiency. Built with Supabase for authentication/database and RevenueCat for in-app purchases.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://contractassistant.migaox.com"
        }
      ]
    },
    {
      image: require("./assets/images/popask.png"),
      projectName: "PopAsk",
      projectDesc: "A cross-platform desktop utility using Wails and Go, enabling users to execute AI prompts on highlighted text via globally registered keyboard shortcuts. Features high-performance backend logic in Go to manage system-level event listeners and asynchronous AI API integrations.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/soymikey/PopAsk"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "michael.zheng.usa@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

// YouTube Section

const youtubeSection = {
  title: emoji("YouTube Videos 🎥"),
  subtitle: "Check out my latest videos and tutorials",
  videos: [
    {
      url: "https://www.youtube.com/watch?v=Dr4PlIMhMa8",
      title: "" // Will be fetched automatically
    },
    {
      url: "https://www.youtube.com/watch?v=yaWhJJMNTZI&list=PLtT039PePiVLFjWQtF6zoBkKBLbo3qKMN",
      title: "" // Will be fetched automatically
    },
    {
      url: "https://www.youtube.com/watch?v=xHa-E8vmzKs&list=PLtT039PePiVJHFvq4LCqHcKOcOLw4akP1",
      title: "" // Will be fetched automatically
    },
    {
      url: "https://www.youtube.com/watch?v=HCsRo4jw0KI&list=PLtT039PePiVIRxxz4bynAnwARKbcbRUPx",
      title: "" // Will be fetched automatically
    },
    {
      url: "https://www.youtube.com/watch?v=QoGqD9EVnAo&list=PLtT039PePiVKOpU9NGmDAdbGa3ISz8Za3",
      title: "" // Will be fetched automatically
    },
    {
      url: "https://www.youtube.com/watch?v=furpDpRvzGc&list=PLtT039PePiVLEVSX34aaT7G78WOl7MQ5v",
      title: "" // Will be fetched automatically
    },
    {
      url: "https://www.youtube.com/watch?v=7EIg3Xy95oY&list=PLtT039PePiVI2aIPxca6399RmiX6hHeCM",
      title: "" // Will be fetched automatically
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  youtubeSection
};
