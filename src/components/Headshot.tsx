import HeadshotPhoto from "../assets/headshot.jpeg"

const Headshot = () => {
  return (
      <div id="headshot-container" className="relative flex justify-center items-center">
        {/* Outer circle */}
        <div className="absolute size-56 bg-gradient-to-br from-gray-500 to-rose-700 rounded-full animate-breathing"></div>
        
        {/* Inner circle with profile image */}
        <div className="relative size-52 border-black dark:border-white border-2 bg-white rounded-full overflow-hidden">
          <img
            src={HeadshotPhoto} 
            alt="Headshot Photo"
            className="w-full h-full"
          />
        </div>
      </div>
  );
};

export default Headshot;
