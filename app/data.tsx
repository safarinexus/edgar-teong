interface Work {
    dates: string, 
    company: string, 
    link: string, 
    position: string, 
    description: string, 
    technologies: string[],
}

interface Project { 
    title: string; 
    description: string; 
    technologies: string[];
    githubLink: string; 
    demoLink: string|false;
    image: {
        url: string,
        width: number, 
        height: number,
    };
}

export const works: Work[] = [
    {
     dates: "Jan. 2023", 
     company: "GovTech", 
     link: "https://www.tech.gov.sg/",
     position : "Software Engineer Intern", 
     description: "Developed & unit-tested components for revamped Tech iOSH portal, aimed at providing a more seamless registration portal for more than 2000 safety and health professionals to enhance UX through SEO optimisation and accessibility improvements. Improved UI with 70% higher user adoption rates.", 
     technologies: ["Figma", "React", "JavaScript"]   
    },
    {
        dates: "Aug. 2022 — Dec. 2022", 
        company: "Schneider Electric", 
        link: "https://www.se.com/sg/en/",
        position: "Data Analyst Intern", 
        description: "In charge of data migration and adoption of Github for SQL data retrieval scripts, where I also developed the comprehensive data retrieval scripts in SQL for use by the internal Audit Team. I also engaged in a project involving developing a machine learning algorithm to automate fraud detection.", 
        technologies: ["SQL", "Python", "Seaborn", "Sci-kit Learn", "Pandas"],
    }, 
    {
        dates: "Jun. 2022 — Aug. 2022", 
        company: "Accenture", 
        link: "https://www.accenture.com/sg-en",
        position: "Software Development Engineer in Test Intern", 
        description: "Developed testing tools for IHiS (now Synapxe) Billing Transform project, transforming nationwide healthcare billing solution, where I developed test scripts and templates for testing cycle using SOAP APIs and Python", 
        technologies: ["Python", "SOAP APIs"],
    },
]

export const projects:Project[] = [ 
    {
        title: "This Website!",
        description: "My own portfolio website made from scratch! To showcase my experience, projects & personality.", 
        technologies: ["Next.js", "TypeScript", "TailwindCSS", "GSAP", "Vercel"], 
        githubLink: "https://github.com/safarinexus/edgar-teong",
        demoLink: false,
        image: {
            url: "/project-thumbnails/portfolio.webp",
            width: 1622, 
            height: 1302, 
        }
    },
    {
        title: "Blog API",
        description: "My own full REST API for a blog, including two frontends, one for viewing posts and one for editing.", 
        technologies: ["JavaScript","React", "Node", "Express", "PostgreSQL" ,"TailwindCSS" , "Prisma", "Railway"], 
        githubLink: "https://github.com/safarinexus/edgr_odin_projects/tree/main/odin-node-express-REST-blog",
        demoLink: "https://edgr-odin-blog-access.vercel.app/",
        image: {
            url: "/project-thumbnails/blog.webp",
            width: 2356, 
            height: 1262,
        }
    },
    {
        title: "File Uploader",
        description: "A Google Drive clone built from scratch, with user auth and folder system.", 
        technologies: ["JavaScript", "Node", "Express", "PostgreSQL", "Prisma", "Railway", "Supabase"], 
        githubLink: "https://github.com/safarinexus/edgr_odin_projects/tree/main/odin-node-express-prisma-fileuploader",
        demoLink: "https://odin-file-uploader-production-11ed.up.railway.app/",
        image: {
            url: "/project-thumbnails/fileuploader.webp",
            width: 1516, 
            height: 1168, 
        }
    },
    {
        title: "Games Inventory App",
        description: "An inventory application using Node.js and PostgreSQL, for video games.", 
        technologies: ["JavaScript", "Node", "Express", "PostgreSQL", "Koyeb"], 
        githubLink: "https://github.com/safarinexus/edgr_odin_projects/tree/main/odin-node-express-postgres-inventory",
        demoLink: "https://edgrodinprojects-production.up.railway.app/",
        image: {
            url: "/project-thumbnails/inventory.webp",
            width: 1418, 
            height: 1170,
        }
    },
    {
        title: "Mini Message Board",
        description: "A simple mini message board website with a backend using MVC Pattern and Express", 
        technologies: ["JavaScript", "Node", "Express", "PostgreSQL"], 
        githubLink: "https://github.com/safarinexus/odin_projects/tree/main/odin-node-express-messageboard",
        demoLink: "https://overseas-phoebe-safarinexus-e4f74908.koyeb.app/",
        image: {
            url: "/project-thumbnails/msgboard.webp",
            width: 1422, 
            height: 1064,
        }
    },
    {
        title: "Memory Card",
        description: "The game of memory cards, made with React, right in the browser, built by me.", 
        technologies: ["HTML", "CSS", "JavaScript", "React", "Vercel"], 
        githubLink: "https://github.com/safarinexus/odin_projects/tree/main/odin-react-memorycard",
        demoLink: "https://odin-projects-nine.vercel.app/",
        image: {
            url: "/project-thumbnails/memorycard.webp",
            width: 2088, 
            height: 1640, 
        }
    }, 
    {
        title: "Shopping Page",
        description: "A frontend UI for a shopping page, built with React, by me.", 
        technologies: ["HTML", "CSS", "JavaScript", "React", "Vercel"], 
        githubLink: "https://github.com/safarinexus/odin_projects/tree/main/odin-react-shoppingcart",
        demoLink: "https://odin-shopping-page.vercel.app/",
        image: {
            url: "/project-thumbnails/shopping.webp",
            width: 2308, 
            height: 1368,
        }
    },
    {
        title: "Weather App",
        description: "My version of the classic weather app, built using WeatherAPI's free API, as well as JavaScript Promises.", 
        technologies: ["HTML", "CSS", "JavaScript"], 
        githubLink: "https://github.com/safarinexus/odin_projects/tree/main/odin-js-weatherapp",
        demoLink: "https://safarinexus.github.io/edgr-odinprojects/odin-js-weatherapp/index.html",
        image: {
            url: "/project-thumbnails/weather.webp",
            width: 2320, 
            height: 1762,
        }
    },
    {
        title: "Kyla's Birthday Website",
        description: "A website that I made for my partner's birthday, using pure vanilla HTML, CSS & JavaScript", 
        technologies: ["HTML", "CSS", "JavaScript"], 
        githubLink: "https://github.com/safarinexus/super-secret",
        demoLink: "https://super-secret-safarinexus-projects.vercel.app/",
        image: {
            url: "/project-thumbnails/supersecret.webp",
            width: 2126, 
            height: 1820,
        }
    },
    {
        title: "Projects from 'The Odin Project'", 
        description: "A series of projects that I created (from scratch) while learning full-stack development under The Odin Project", 
        technologies: ["HTML", "CSS", "JavaScript", "Jest", "Webpack", "React", "PostgreSQL", "Prisma", "Node", "Express", "Vitest", "RESTful APIs"], 
        githubLink: "https://github.com/safarinexus/edgr-odinprojects", 
        demoLink: "https://safarinexus.github.io/edgr-odinprojects/", 
        image: {
            url: "/project-thumbnails/top-projects.webp",
            width: 1900, 
            height: 1496,
        }
    }
]

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

{/*—*/}