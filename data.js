const twimbaimg = new URL("./images/twimbajs.png", import.meta.url).href;
const orderimg = new URL("./images/jimmydiner.png", import.meta.url).href;
const passimg = new URL("./images/pass.jpg", import.meta.url).href;
const schemeimg = new URL("./images/colorScheme.jpg", import.meta.url).href;
const leadsimg = new URL("./images/leadstrack.jpg", import.meta.url).href;
const wargameimg = new URL("./images/wargame.jpg", import.meta.url).href;
const memeimg = new URL("./images/meme.jpg", import.meta.url).href;
const portfolioimg = new URL("./images/blog-image-05.png", import.meta.url)
  .href;
const whatchlistimg = new URL("./images/watchlist.png", import.meta.url).href;
const chefanneln = new URL("./images/chefai.png", import.meta.url).href;
const tenzies = new URL("./images/tenzies.png", import.meta.url).href;
const assemblygame = new URL("./images/assemblygame.png", import.meta.url).href;
const quizzical = new URL("./images/quizzical.png", import.meta.url).href;

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
      "Developing a responsive portfolio blog with a mobile-first design approach. The most recent articles are displayed first.",
    link: "https://portfolio-anne-helene.netlify.app/",
  },
  {
    name: "Movie WatchList",
    image: whatchlistimg,
    subtitle: "This is a solo project to create a movie watchlist.",
    id: 8,
    date: "March 26, 2026",
    description:
      "Developed a movie search application by following the Figma design.<br> Connected the app to the OMDb API to fetch movie data, saved the watchlist in Local Storage, and prevented duplicate entries. <br>Built the application using a mobile-first approach with responsive and accessible design, then deployed it on Netlify.",
    link: "https://movieswishlist.netlify.app/",
  },
  {
    name: "Chef AnneLn AI",
    image: chefanneln,
    subtitle:
      "It’s a solo project inspired by a Scrimba course. <br>The app collects ingredients from the user through a form, then sends them to an AI with a prompt asking for a recipe using those ingredients.",
    id: 9,
    date: "May 2, 2026",
    description:
      "AI Recipe Generator — A React-based application built with Vite.js that uses AI to generate recipes from user ingredients.<br> The app includes ingredient validation, multilingual support, Markdown rendering, responsive state management, and interactive animations to create a smooth user experience.",
    link: "https://chefannelnai.netlify.app/",
  },
  {
    name: "Dix Dice Game",
    image: tenzies,
    subtitle: "Tenzi — A simple dice game built with React.",
    id: 10,
    date: "June 9, 2026",
    description:
      "The goal of the game is to get all 10 dice to show the same value. Players can click on the dice to hold them between rolls and continue rolling until all the dice have the same number.<br>This project was developed using several technologies, including React and Vite for building the application. NanoID was used to generate unique IDs for each die, and React Confetti was integrated to create a celebration animation when the player wins.<br> The game includes several features such as rolling the dice, holding and unholding dice, detecting when the player has won, displaying a confetti animation after victory, starting a new game, and tracking the time with a timer.<br> The project is deployed on Netlify, allowing users to access and play the game online.",
    link: "https://dixdicegame.netlify.app/",
  },
  {
    name: "Assembly Hangman",
    image: assemblygame,
    subtitle:
      "A hangman-style game where every wrong guess 'eliminates' a programming language..",
    id: 11,
    date: "July 22, 2026",
    description:
      "A hangman-style game rebuilt from scratch from a Scrimba exercise — every wrong guess 'eliminates' a programming language. Guess the word letter by letter with a virtual keyboard before all languages are gone. Each wrong letter triggers a randomly selected farewell message ('Farewell, C++', 'Adios, Java'...) as another language bites the dust, with a confetti animation on victory. Built with React (useState, derived state), clsx, and react-confetti.",
    link: "https://presquependu.netlify.app/",
  },
  {
    name: "Quiz App",
    image: quizzical,
    subtitle:
      "A quiz app made with React. You can answer quiz questions, get your score and share it.",
    id: 12,
    date: "August 7, 2026",
    description:
      "Quizzical — A React quiz app fetching questions from the Open Trivia Database API. Following a Scrimba brief and design, I coded the entire application myself, adding an extra feature beyond the requirements: a difficulty selector (easy/medium/hard). Features randomized questions and answers, instant green/red feedback, automatic scoring, a WhatsApp score share, and a confetti celebration on a winning score.",
    link: "https://quizzbyanneln.netlify.app/",
  },
];
export default postsArray;
