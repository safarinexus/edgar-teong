import Headshot from "./Headshot"

const Landing = () => {
    return (
        <div 
            id="landing" 
            className=" w-full h-full flex flex-col
                sm:grid sm:gap-4 sm:items-center sm:grid-cols-[60%_40%] sm:grid-rows-[10%_auto_20%]
            "
        >
            {/*consider adding a hover effect to your headshot and text that pops out from behind that for the homepage contact link*/}
            <Headshot />
            
            <h1 id="hey-there"className="font-light text-[5vw] xs:text-2xl sm:text-2xl mt-4 sm:mt-0 sm:col-start-1 sm:row-start-1 sm:self-end">
                <span className="animate-wave inline-block">👋</span> 
                &nbsp;Hey there!
            </h1>

            <h3 id="my-name-is" className="font-domine text-[7vw] xs:text-3xl leading-none sm:col-start-1 sm:row-start-3 mt-4 sm:mt-0">
                My name is&nbsp;
                <span className="relative bg-gradient-to-r from-amber-600 via-green-500 to-sky-400 inline-block text-transparent bg-clip-text">
                    Edgar Teong
                    <svg className="absolute -bottom-3 w-full scale-0 origin-left transition-transfor ease-out animate-highlight left-0 h-auto -z-10 transform translate-y-1/3 saturate-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 20">
                        <path d="M0,5 C50,7 150,7 200,5" stroke="#F2CD02" fill="none" stroke-width="9" stroke-linecap="round"/>
                    </svg>
                </span>
                .
            </h3>

            <p className="tracking-wide leading-[19px] sm:text-left font-light text-[4vw] xs:text-base sm:text-[2vw] md:text-base lg:text-xl sm:row-start-2 animate-textFadeIn mt-4 sm:mt-0">
                I&#39;m a passionate & dedicated <span className="font-bold">Full Stack Developer</span> who discovered my love for programming <span className="font-bold">on my own</span> while pursuing accountancy at&nbsp;
                <span className="font-bold">Singapore Management University</span> &#40;SMU&#41;. 
                <br /><br />
                With a drive to <span className="font-bold">continually learn and grow</span>, I&#39;m committed to becoming an expert software engineer, all through&nbsp;
                <span className="font-bold">my own hard work & self-directed learning</span>. 
                <br /><br />
                I bring <span className="font-bold">enthusiasm</span>, <span className="font-bold">creativity</span>,
                and a <span className="font-bold">strong work ethic</span> to every project.
                I&#39;m excited to share my journey and expertise with the world!
            </p>

        </div>
    )
}

export default Landing;

/**/ 