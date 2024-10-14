import Headshot from "../Headshot"

const Landing = () => {
    //fix layout before adding content

    return (
    <div id="landing" className="h-svh pt-[130px] sm:pt-[140px] flex flex-col items-center">
        <Headshot />
        <h1 className="mt-8 text-8xl font-bold text-center"><span className="block animate-wave sm:inline-block">👋</span> Hey there!</h1>
        <h3 className="mt-8 font-domine text-3xl text-center">My name is <span className="bg-gradient-to-r from-amber-600 via-green-500 to-sky-400 inline-block text-transparent bg-clip-text">Edgar Teong</span>.</h3>
      </div>
    )
}

export default Landing;