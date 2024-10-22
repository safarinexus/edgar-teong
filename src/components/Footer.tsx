import ContactBar from "./ContactBar";

const Footer = () => {
    return (
        <div id="footer" className="mt-10 w-full space-y-2">
            <hr className="w-[80%] mx-auto"/>
            <div className="w-full flex justify-center">
                <a 
                    href="https://github.com/safarinexus/edgar-teong"
                    className="font-light text-sm w-fit leading-[1.2] z-10"
                >
                    Made by Edgar Russell Teong Kai Han
                </a>
            </div>
            <div className="w-full flex justify-center">
                <ContactBar />
            </div>
        </div>
    )
}

export default Footer