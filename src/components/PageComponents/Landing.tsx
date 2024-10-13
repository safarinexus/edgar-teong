import Headshot from "../Headshot"

interface Props {
    width: number
}

const Landing = ({ width }: Props) => {
    //fix layout before adding content
    /*
    let nameClass = ""
    if (width > 640) { 
        //tablet and desktop layout
        nameClass = "h-svh p-[15%] pb-[40%] flex flex justify-around"
    } else {
        //mobile layout
        nameClass = "h-svh pt-[20%] pb-[40%] flex flex-col"
    }
    */

    return (
    <div id="landing" className="h-[1000px] pt-20 flex flex-col items-center">
        <Headshot />
        <h1 className="mt-8 font-inter text-8xl font-bold text-center">hello, world! 👋</h1>
        <h3 className="mt-8 font-domine text-3xl text-center">My name is <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Edgar Teong</span>.</h3>
      </div>
    )
}

export default Landing;