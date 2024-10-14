import Headshot from "../../Headshot"
import ScrollIndicator from "./ScrollIndicator";

const Landing = () => {
    //fix layout before adding content

    return (
        <div 
            id="landing" 
            className="w-full max-w-[1200px] h-[85svh] mb-[15svh] sm:mb-0 sm:h-svh min-h-max pt-[95px] xs:pt-[120px] sm:pt-[140px] pr-5 pl-5
                grid grid-cols-1 gap-5 items-center sm:grid-cols-[60%_40%] sm:grid-rows-[10%_auto_20%_52px]
                ml-auto mr-auto sm:p-24 sm:pb-1
            "
        >
            <Headshot />
            
            <h1 id="hey-there"className="text-center sm:text-left font-light text-[5vw] xs:text-[5vw] sm:text-2xl sm:col-start-1 sm:row-start-1 sm:self-end">
                <span className="animate-wave inline-block">👋</span> 
                &nbsp;Hey there!
            </h1>
            <h3 id="my-name-is" className="font-domine text-[7vw] sm:text-3xl leading-none text-center sm:text-left sm:col-start-1 sm:row-start-3 sm:self-start">
                My name is&nbsp;
                <span className="bg-gradient-to-r from-amber-600 via-green-500 to-sky-400 inline-block text-transparent bg-clip-text">Edgar Teong</span>
                .
            </h3>
            <p className="tracking-wide text-center leading-[19px] sm:text-left font-light text-[3.5vw] xs:text-[3vw] sm:text-[2vw] lg:text-2xl sm:row-start-2">
                I&#39;m a passionate and dedicated <span className="font-bold">full-stack developer</span> who discovered my love for programming <span className="font-bold">on my own</span> while pursuing accountancy at&nbsp;
                <span className="font-bold">Singapore Management University</span> &#40;SMU&#41;. 
                <br /><br />
                With a drive to <span className="font-bold">continually learn and grow</span>, I&#39;m committed to becoming an expert software engineer, all through&nbsp;
                <span className="font-bold">my own hard work & self-directed learning</span>. 
                <br /><br />
                I bring <span className="font-bold">enthusiasm</span>, <span className="font-bold">creativity</span>,
                and a <span className="font-bold">strong work ethic</span> to every project.
                I&#39;m excited to share my journey and expertise with the world!
            </p>
            <ScrollIndicator /> 
        </div>
    )
}

export default Landing;