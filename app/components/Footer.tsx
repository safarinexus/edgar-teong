import ContactBar from "./ContactBar";

const Footer = () => {
    return (
        <div id="footer" className="mt-10 w-full">
            <hr className="w-[80%] mx-auto" style={{ color: "#737373", opacity: '50%' }}/>
            <div className="space-y-3 my-4">
                <div className="w-full flex justify-center">
                    <a 
                        href="https://github.com/safarinexus/edgar-teong"
                        className="font-light text-sm w-fit leading-[1.2] z-10"
                        style={{ color: "#a3a3a3" }}
                    >
                        Made by Edgar Russell Teong Kai Han
                    </a>
                </div>
                <div className="w-full flex justify-center">
                    <ContactBar main={false}/>
                </div>
            </div>
        </div>
    )
}

export default Footer