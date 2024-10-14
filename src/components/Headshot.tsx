import HeadshotPhoto from "../assets/headshot.jpeg"

const Headshot = () => {
  return (
      <div id="headshot-container" className="relative flex justify-center items-center animate-fadeIn opacity-0">
        {/* Outer circle */}
        <div className="absolute size-56 bg-gradient-to-br from-amber-700 to-lime-600 rounded-full animate-breathing"></div>
        
        {/* Inner circle with profile image */}
        <div className="relative size-52 border-black dark:border-white border-2 bg-white rounded-full overflow-hidden">
          <img
            src={HeadshotPhoto} 
            alt="Headshot Photo"
            className="w-full h-full select-none"
            draggable="false"
          />
        </div>
      </div>
  );
};

export default Headshot;
