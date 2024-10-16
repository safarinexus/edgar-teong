import HeadshotPhoto from "../../assets/headshot.jpeg"

const Headshot = () => {
  return (
      <div id="headshot-container" className="relative flex justify-center items-center animate-fadeIn opacity-0 mt-4 sm:mt-0 sm:col-start-2 sm:row-start-2">
        <div className="relative size-48 md:size-5/6 lg:size-80 border-purpley dark:border-white border-2 bg-white rounded-full overflow-hidden">
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
