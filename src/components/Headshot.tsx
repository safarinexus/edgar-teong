import HeadshotPhoto from "../assets/headshot.jpeg"

const Headshot = () => {
  return (
      <div id="headshot-container" className="relative left-2 flex justify-center items-center animate-fadeIn opacity-0">
        <div className="relative size-3/6 xs:size-44 border-black dark:border-white border-2 bg-white rounded-full overflow-hidden">
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
