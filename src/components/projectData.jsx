import getJoke from "../images/1.png";
import todoList from "../images/2.png";
import blogSite from "../images/3.png";
import drumGame from "../images/4.png";
import BulletAccessories from "../images/5.png";

const projectData = [
    {
        imgsrc: getJoke,
        title: "getJoke",
        description:"A Random Joke Generator Web-App, used Node.js for API call to get the Jokes from end point.",
        repolink:"https://github.com/mdozairq/getJokes",
        livelink:"https://getjoke.herokuapp.com/"
    },
    {
        imgsrc: blogSite,
        title: "Your Blogs Site",
        description:"A Blog Site developed using EJS for Frontend, Node.Js with Express.Js as Backend and MongoDB for Database.Server deployed on Herokuapp. In this CRUD operation feature is give to User with Authentication",
        repolink:"https://github.com/mdozairq/blogSite",
        livelink:"https://salty-stream-15965.herokuapp.com/"
    },
    {
        imgsrc: todoList,
        title: "To-Do List",
        description:"A functional To-Do List with Custom creation Option, developed using EJS for Frontend, Node.Js with Express.Js as Backend and MongoDB for Database.Server deployed on Herokuapp ",
        repolink:"https://github.com/mdozairq/ToDo-List",
        livelink:"https://thawing-journey-06340.herokuapp.com/"
    },
    {
        imgsrc: drumGame,
        title: "Drum Game",
        description:"A Drum Playing Game Webpage,Developed using HTML, CSS and JS. Here the concept of Event-Listener is used",
        repolink:"https://github.com/mdozairq/DrumGame",
        livelink:"https://mdozairq.github.io/DrumGame/"
    },
    {
        imgsrc: BulletAccessories,
        title: "Royal Bullet Accessories loacal Service center site",
        description:"A Frontend WebPage is developed using HTML5, CSS3, Vanilla JS and BootStrap5",
        repolink:"https://github.com/mdozairq/RoyalBulletAccessories",
        livelink:"https://mdozairq.github.io/RoyalBulletAccessories"
    },
]

export default projectData;