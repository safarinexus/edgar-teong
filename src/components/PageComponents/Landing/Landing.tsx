import Headshot from "../../Headshot"
import ScrollIndicator from "./ScrollIndicator";

const Landing = () => {
    //fix layout before adding content

    return (
        <div id="landing" className="w-full h-svh min-h-max pt-[110px] xs:pt-[120px] sm:pt-[140px] grid grid-cols-1 gap-1 items-center pr-5 pl-5">
            <Headshot />
            
            <h1 id="hey-there"className="text-center font-thin text-[5vw] xs:text-[5vw] sm:text-2xl">
                <span className="animate-wave inline-block">👋</span> 
                &nbsp;Hey there!
            </h1>
            <h3 id="my-name-is" className="font-domine text-[9vw] xs:text-[8vw] sm:text-5xl leading-none text-center">
                My name is&nbsp;
                <span className="bg-gradient-to-r from-amber-600 via-green-500 to-sky-400 inline-block text-transparent bg-clip-text">Edgar Teong</span>
                .
            </h3>
            <p className="tracking-wide text-center font-thin text-[3.5vw] xs:text-[3vw] sm:text-2xl">
                I&#39;m a passionate and dedicated <span className="font-bold">full-stack developer</span> who discovered my love for programming while pursuing accountancy at&nbsp;
                <span className="font-bold">Singapore Management University</span> &#40;SMU&#41;. 
                <br /><br />
                With a drive to <span className="font-bold">continually learn and grow</span>, I&#39;m committed to becoming an expert in the field, all through&nbsp;
                <span className="font-bold">my own hard work & self-directed learning</span>. 
                Whether it&#39;s front-end or back-end development, I bring enthusiasm, creativity, and a strong work ethic to every project.
                I&#39;m excited to share my journey and expertise with the world!
            </p>
            <ScrollIndicator /> 
        </div>
    )
}

export default Landing;