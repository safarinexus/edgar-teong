import top from "../assets/project-thumbnails/top-projects.webp"
import weather from "../assets/project-thumbnails/weather.webp"
import calc from "../assets/project-thumbnails/calc.webp"
import memorycard from "../assets/project-thumbnails/memorycard.webp"
import blog from "../assets/project-thumbnails/blog.webp"
import shopping from "../assets/project-thumbnails/shopping.webp"
import supersecret from "../assets/project-thumbnails/supersecret.webp"
import tictactoe from "../assets/project-thumbnails/tictactoe.webp"
import fileuploader from "../assets/project-thumbnails/fileuploader.webp"
import msgboard from "../assets/project-thumbnails/msgboard.webp"
import inventory from "../assets/project-thumbnails/inventory.webp"
import todo from "../assets/project-thumbnails/todo.webp"
import portfolio from "../assets/project-thumbnails/portfolio.webp"




interface project { 
    title: string; 
    description: string; 
    technologies: string[];
    githubLink: string; 
    demoLink: string|false;
    image: string;
}

const projects:project[] = [ 
    {
        title: "This Website!",
        description: "My own portfolio website! To showcase my experience, projects & personality.", 
        technologies: ["TypeScript","React + Vite", "TailwindCSS" ,"GSAP", "Vercel"], 
        githubLink: "https://github.com/safarinexus/edgar-teong",
        demoLink: false,
        image: portfolio,
    },
    {
        title: "Blog API",
        description: "A full REST API for a blog, including two frontends, one for viewing posts and one for editing.", 
        technologies: ["JavaScript","React", "Node", "Express", "PostgreSQL" ,"TailwindCSS" , "Prisma", "Railway"], 
        githubLink: "https://github.com/safarinexus/edgr_odin_projects/tree/main/odin-node-express-REST-blog",
        demoLink: "https://edgr-odin-blog-access.vercel.app/",
        image: blog,
    },
    {
        title: "File Uploader",
        description: "A Google Drive clone, with user auth and folder system.", 
        technologies: ["JavaScript", "Node", "Express", "PostgreSQL", "Prisma", "Railway", "Supabase"], 
        githubLink: "https://github.com/safarinexus/edgr_odin_projects/tree/main/odin-node-express-prisma-fileuploader",
        demoLink: "https://odin-file-uploader-production-11ed.up.railway.app/",
        image: fileuploader,
    },
    {
        title: "Games Inventory App",
        description: "An inventory application using Node.js and PostgreSQL, for video games.", 
        technologies: ["JavaScript", "Node", "Express", "PostgreSQL", "Koyeb"], 
        githubLink: "https://github.com/safarinexus/edgr_odin_projects/tree/main/odin-node-express-postgres-inventory",
        demoLink: "https://edgrodinprojects-production.up.railway.app/",
        image: inventory,
    },
    {
        title: "Mini Message Board",
        description: "A simple mini message board website with a backend using MVC Pattern and Express", 
        technologies: ["JavaScript", "Node", "Express", "PostgreSQL"], 
        githubLink: "https://github.com/safarinexus/odin_projects/tree/main/odin-node-express-messageboard",
        demoLink: "https://overseas-phoebe-safarinexus-e4f74908.koyeb.app/",
        image: msgboard,
    },
    {
        title: "Memory Card",
        description: "The game of memory cards, made with React, right in the browser.", 
        technologies: ["HTML", "CSS", "JavaScript", "React", "Vercel"], 
        githubLink: "https://github.com/safarinexus/odin_projects/tree/main/odin-react-memorycard",
        demoLink: "https://odin-projects-nine.vercel.app/",
        image: memorycard,
    }, 
    {
        title: "Shopping Page",
        description: "A frontend UI for a shopping page, built with React.", 
        technologies: ["HTML", "CSS", "JavaScript", "React", "Vercel"], 
        githubLink: "https://github.com/safarinexus/odin_projects/tree/main/odin-react-shoppingcart",
        demoLink: "https://odin-shopping-page.vercel.app/",
        image: shopping,
    },
    {
        title: "Weather App",
        description: "A functioning weather app, built using WeatherAPI's free API, as well as JavaScript Promises.", 
        technologies: ["HTML", "CSS", "JavaScript"], 
        githubLink: "https://github.com/safarinexus/odin_projects/tree/main/odin-js-weatherapp",
        demoLink: "https://safarinexus.github.io/edgr-odinprojects/odin-js-weatherapp/index.html",
        image: weather,
    },
    {
        title: "Todo List",
        description: "My version of a Todo List Web App using Vanilla HTML, CSS & JavaScript", 
        technologies: ["HTML", "CSS", "JavaScript"], 
        githubLink: "https://github.com/safarinexus/odin_projects/tree/main/odin-js-todo",
        demoLink: "https://safarinexus.github.io/edgr-odinprojects/odin-js-todo/dist/index.html",
        image: todo,
    },
    {
        title: "Calculator",
        description: "An on-screen calculator in your browser!", 
        technologies: ["HTML", "CSS", "JavaScript"], 
        githubLink: "https://github.com/safarinexus/odin_projects/tree/main/odin-calculator",
        demoLink: "https://safarinexus.github.io/edgr-odinprojects/odin-calculator/calculator.html",
        image: calc,
    },
    {
        title: "Tic-Tac-Toe",
        description: "A simple game of Tic-Tac-Toe played from your browser! Made Using JS IIFEs and Factory Functions.", 
        technologies: ["HTML", "CSS", "JavaScript"], 
        githubLink: "https://github.com/safarinexus/odin_projects/tree/main/odin-js-tictactoe",
        demoLink: "https://safarinexus.github.io/edgr-odinprojects/odin-js-tictactoe/jstictactoe.html",
        image: tictactoe,
    }, 
    {
        title: "Kyla's Birthday Website",
        description: "A website that I made for my partner's birthday, using plain & simple HTML, CSS & JavaScript", 
        technologies: ["HTML", "CSS", "JavaScript"], 
        githubLink: "https://github.com/safarinexus/super-secret",
        demoLink: "https://super-secret-safarinexus-projects.vercel.app/",
        image: supersecret,
    },
    {
        title: "Projects from 'The Odin Project'", 
        description: "A series of projects that I created while learning full-stack development under The Odin Project", 
        technologies: ["HTML", "CSS", "JavaScript", "Jest", "Webpack", "React", "PostgreSQL", "Prisma", "Node", "Express", "Vitest", "RESTful APIs"], 
        githubLink: "https://github.com/safarinexus/edgr-odinprojects", 
        demoLink: "https://safarinexus.github.io/edgr-odinprojects/", 
        image: top
    }
]

export default projects

{/*
    {
        title: "",
        description: "", 
        technologies: [""], 
        githubLink: "",
        demoLink: "",
        image: "",
    }, 
*/}