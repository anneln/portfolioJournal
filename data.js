const twimbaimg = new URL("./images/twimba.jpg", import.meta.url).href;
const orderimg = new URL("./images/orderfood.jpg", import.meta.url).href;
const passimg = new URL("./images/pass.jpg", import.meta.url).href;
const schemeimg = new URL("./images/colorScheme.jpg", import.meta.url).href;
const leadsimg = new URL("./images/leadstrack.jpg", import.meta.url).href;
const wargameimg = new URL("./images/wargame.jpg", import.meta.url).href;
const memeimg = new URL("./images/meme.jpg", import.meta.url).href;
const portfolioimg = new URL("./images/portfolio.jpg", import.meta.url).href;

const postsArray = [
  {
    name: "Twimba",
    image: twimbaimg,
    subtitle: "This is a solo project to clone twitter and Scrimba.",
    id: 0,
    date: "August 05, 2025",
    description:
      "The app shoud render tweet from some pre-prepared data and add new tweets.</br> Each tweet will be likable and unlikable. <br>Users can reply to a tweet<br> Technical requirements : use data attributes | Use CDN for add icons | Use CDN for generate UUiDs | Deploy the project using Netlify and Github",
    link: "https://twimbanneln.netlify.app/",
  },
  {
    name: "Mobile Ordering App",
    image: orderimg,
    subtitle:
      "This is a solo project to create a mobile restaurant ordering application.",
    id: 1,
    date: "September 11, 2025",
    description:
      "The app shoud display menu, render an order section, display a payment modal and finally show a confirmation message.<br>Technical requirements : Follow design spec on Figma | Render the menu option using Javascript | Be able to add and remove items | Have a payment modal with compulsory form inputs | Deploying with Netlify and Github desktop",
    link: "https://mobilerestorderingapp.netlify.app",
  },
  {
    name: "Pass Generator",
    image: passimg,
    subtitle: "It's a solo project to generate random secured passwords",
    id: 2,
    date: "August 12, 2022",
    description:
      "App to generate random secured passwords, users can copy pass for use it ",
    link: "https://anneln.github.io/PassGenerator/",
  },
  {
    name: "Color Scheme Generator",
    image: schemeimg,
    subtitle: "Generate color palettes from a base color",
    id: 3,
    date: "September 22, 2022",
    description:
      "Make a color scheme generator from scratch in HTML, CSS and JS. <br>Use API 'the color api' and Deploy on Netlify ",
    link: "https://color-scheme-generator-ahb.netlify.app/",
  },
  {
    name: "Mobile Leads Tracker 📱",
    image: leadsimg,
    subtitle: "Build a mobile app",
    id: 4,
    date: "May 6, 2025",
    description:
      "This mobile app is useful to save favorite links <br> To built it I used Firebase and web application manifest to install app on mobile screen then I deploy it on Netlify ",
    link: "https://leads-tracker-ahb.netlify.app/",
  },
  {
    name: "War game",
    image: wargameimg,
    subtitle: "Build a war game",
    id: 5,
    date: "September 28, 2022",
    description:
      "Do a war game using deck of cards API, callbacks and Promises",
    link: "https://anneln.github.io/War-game/",
  },
  {
    name: "Meme Generator",
    image: memeimg,
    subtitle: "Do a meme generator",
    id: 6,
    date: "November 25, 2022",
    description:
      " Learn react basis with building a Meme Generator using imgflip API, controlled components (forms), functional programming in REACT, fetching data and view side effects",
    link: "https://incredible-cactus-bacac7.netlify.app/",
  },
  {
    name: "Portfolio Journal",
    image: portfolioimg,
    subtitle: "Do a responsive blog for a solo project",
    id: 7,
    date: "October 12, 2025",
    description:
      "Developing a responsive portfolio blog with a mobile-first design approach. The most recent articles are displaying first.",
    link: "https://portfolio-anne-helene.netlify.app/",
  },
];
export default postsArray;
