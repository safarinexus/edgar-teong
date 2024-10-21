interface Work {
    dates: string, 
    company: string, 
    link: string, 
    position: string, 
    description: string, 
    technologies: string[],
}

const works: Work[] = [
    {
     dates: "Jan. 2023", 
     company: "GovTech", 
     link: "https://www.tech.gov.sg/",
     position : "Software Engineer Intern", 
     description: "Developed and unit-tested components for frontend portal components for the Tech iOSH Project aimed at providing a better UX for registration for safety and health professionals.", 
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

export default works

{/*—*/}