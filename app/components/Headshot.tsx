import Image from "next/image"

const Headshot = () => {

  return (
      <div id="headshot-container" className="relative flex justify-center items-center">
        <div id="headshot" className="relative max-w-20 lg:max-w-28 border-black border-[1px] bg-white rounded-full overflow-hidden saturate-150 hover:animate-spin hover:saturate-200">
          <Image
            src="/headshot.webp"
            width={1244}
            height={1243}
            alt="Headshot Photo"
            className="w-full h-full select-none"
            draggable="false"
            priority
          />
        </div>
      </div>
  );
};

export default Headshot;
