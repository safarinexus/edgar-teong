interface Work {
    dates: string, 
    company: string, 
    logo: {
        url: string,
        width: number, 
        height: number,
    } 
    link: string, 
    position: string, 
    description: string, 
    technologies?: string[],
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
        dates: "Jan. 2025 - Present", 
        company: "Central Provident Fund Board",
        logo: {
            url: "/work-logos/cpf.webp",
            width: 1122,
            height: 1205,
        },
        link: "https://www.cpf.gov.sg/member",
        position: "Software Engineer Intern", 
        description: `As part of the Business Incubator & Accelerator team, I worked on dev tools and internal solutions for the Singapore Government, 
                    including docCentral—a management portal and Microsoft Word Add-In that helps automating document generation across agencies, for which I helped to increased monthly usage from 60k to 80k. 
                    I debugged critical product issues, refactored code for maintainability, and implemented comprehensive tests, doubling test coverage. 
                    Additionally, I created a serverless API to integrate FormSG webhooks with Notion and Telegram, boosting team and product manager productivity by 20%.`, 
        technologies: ["Next.js", "Express/Node", "Python/Django", "AWS"]
    }, 
    {
        dates: "Jan. 2023", 
        company: "GovTech", 
        logo: {
            url: "/work-logos/govtech.webp",
            width: 400, 
            height: 448,
        },
        link: "https://www.tech.gov.sg/",
        position : "Software Engineer Intern", 
        description: `Worked on the Tech iOSH Refresh Project, developing and standardizing UI components.`,
        technologies: ["Figma", "React", "JavaScript"]   
    },
    {
        dates: "Aug. 2022 — Dec. 2022", 
        company: " Schneider Electric", 
        logo: {
            url: "/work-logos/se.webp",
            width: 225, 
            height: 225,
        },
        link: "https://www.se.com/sg/en/",
        position: "Data Analyst Intern", 
        description: `Led the data migration and adoption of version control with GitHub, improving workflow tracking and data retrieval across 300 SQL scripts. 
            I also automated complex SQL data-retrieval tasks by creating a script bank for the entire Internal Audit team, which resulted in a 30% reduction in data processing time. 
            Additionally, I developed a machine learning algorithm to automate fraud detection for each internal audit cycle, achieving 80% effectiveness.`, 
        technologies: ["SQL", "Python", "Seaborn", "Sci-kit Learn", "Pandas"],
    }, 
    {
        dates: "Jun. 2022 — Aug. 2022", 
        company: "Accenture", 
        logo: {
            url: "/work-logos/accenture.webp",
            width: 225, 
            height: 225,
        },
        link: "https://www.accenture.com/sg-en",
        position: "Software Development Engineer in Test Intern", 
        description: `I developed testing tools and performed UAT testing for the iHiS Billing Transform project, 
            which aimed at digitally transforming the nationwide healthcare billing solution. 
            I created test scripts and templates for testing cycles using SOAP APIs and Python, where I identified and documented over 60 critical defects, 
            improving overall software quality and reducing post-release issues by 30%.`, 
        technologies: ["Python", "SOAP APIs"],
    },
    {
       dates: "Dec. 2021 — Feb. 2022", 
        company: " EY", 
        logo: {
            url: "/work-logos/ey.jpeg",
            width: 100, 
            height: 100,
        },
        link: "https:www.ey.com/en_sg",
        position: "Audit & Assurance Intern",
        description: "Did auditing. Didn't like it."
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
        demoLink: "https://odin-fileuploader-production.up.railway.app",
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