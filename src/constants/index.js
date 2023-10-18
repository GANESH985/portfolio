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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
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
    name: "Bootstrap",
    icon: figma,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  /*{
    name: "TypeScript",
    icon: typescript,
  },*/
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "BharatIntern | Remote",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2023 - Aug 2023",
    points: [
      "Developing and maintaining web applications using React.js, Node.js and other related technologies.",
      "Collaborating with cross-functional teams, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "iNeuron | Remote",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
    name: "E-commerce",
    description:
      "Developed an Online Shopping project withReact.js, REST API integration, and user authentication, Proficientin React-router-components for smooth navigation and login page redirection. Skilled in utilizing AuthandotherReact components to enhance user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },{
        name:"Live Link",
        link:'https://eshutrends.netlify.app/',
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/GANESH985/etrends-applications",

  },
  {
    name: "Video Call Conferencing",
    description:
      "You can try your hands on the video conferencing website and application projects and help develop features like textual chatting, audio-video interactions, video recording,etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest-api Zego-cloud",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },{
        name:"Live Link",
        link:'https://videocallcon.netlify.app/',
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/GANESH985/video_call_conferen",
  },
  {
    name: "Online Food Order",
    description:
      "Experienced in developing a responsive Food Store website featuring food item listings, detailed information, and offers. Bootstrap components for design and mobile-first responsiveness. integrated product YouTube videos using Bootstrap's embedandmodal elements.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name:"Live Link",
        link:'https://southcenterfood.ccbp.tech/',
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/GANESH985/South-Center-Food-Project",
  },
];

export { services, technologies, experiences, testimonials, projects };
