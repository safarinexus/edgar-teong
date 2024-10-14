import Headshot from "../Headshot"

const Landing = () => {
    //fix layout before adding content

    return (
    <div id="landing" className="h-[1000px] pt-20 flex flex-col items-center">
        <Headshot />
        <h1 className="mt-8 text-8xl font-bold text-center">👋 Hey there!</h1>
        <h3 className="mt-8 font-domine text-3xl text-center">My name is <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Edgar Teong</span>.</h3>
      </div>
    )
}

export default Landing;