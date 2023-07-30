import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  best,
  jio,
  php,
  xamp,
  ytplay,
  fitness,
  netflix,
  imagefinder,
  modernwebsite
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Xampp",
    icon: xamp,
  }
];

const experiences = [
  {
    title: "Android Developer - Internship || Sponsored Project",
    company_name: "B.E.S.T.",
    icon: best,
    iconBg: "#383E56",
    date: "March 2018 - April 2019",
    points: [
      "Successfully created a real time live project under BrihanMumnbai Electric Supply and Transportation (B.E.S.T - An organisation responsible for managing Power supply and public transportation)",
      "Used by 50000+ Employees of B.E.S.T.",
    ],
  },
  {
    title: "Assistant Manager",
    company_name: "Jio Platforms Limited",
    icon: jio,
    iconBg: "#E6DEDD",
    date: `Dec 2022 - ${new Date().getFullYear()} (present)`,
    points: [
      "Providing Best Customer experience by ensuring the end result and delivery of the Products under Jio.",
      "Automating the product and testing to ensure the best build quality ",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Youtube Player",
    description:
      "Web-based platform that allows users to search, play music and watch content from various providers across the globe ...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "contextApi",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: ytplay,
    source_code_link: "https://github.com/sktaukir04/Youtube-react-clone",
    project_link:'https://youtube-clone-st.netlify.app'
  },
  {
    name: "Fitness Club",
    description:
      "Web application that enables users to search for different Exercises, view Exercises/workouts ranges for different parts, and watch the respective videos ...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/sktaukir04/Gym-Exercise",
    project_link:'https://gym-exercise-st.netlify.app/'
  },
  {
    name: "Netflix Clone",
    description:
      "A web platform that fetches data from OMBD API and allows users to surf trending series/Movies and play the repective trailers of the content ...",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/sktaukir04/netflix-clone",
    project_link:'https://netflix-clone-5423c.web.app/'
  },
  {
    name: "Image Finder using API",
    description:
      "A web platform that fetches result from pixabay API and display its content, users can search and limit the number of content being displayed ...",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
    ],
    image: imagefinder,
    source_code_link: "https://github.com/sktaukir04/imagefinder-webclone",
    project_link:'https://image-finder-f8a31.web.app/'
  },
  {
    name: "Modern UI | UX Website",
    description:
      "A fully responsive modern website with modern User Interface and User Experience using React and ...",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "React Icons",
        color: "green-text-gradient",
      },
    ],
    image: modernwebsite,
    source_code_link: "https://github.com/sktaukir04/modern-website",
    project_link:'https://modern-website-st.netlify.app/'
  },
];

export { services, technologies, experiences, testimonials, projects };
