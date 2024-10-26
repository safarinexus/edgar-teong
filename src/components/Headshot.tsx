import HeadshotPhoto from "/headshot.webp"

const Headshot = () => {

  return (
      <div id="headshot-container" className="relative flex justify-center items-center">
        <div id="headshot" className="relative max-w-16 xs:max-w-20 lg:max-w-28 border-black dark:border-white border-[1px] bg-white rounded-full overflow-hidden">
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
