import ContactBar from "./ContactBar";

const Footer = () => {
    return (
        <div id="footer" className="mt-10 w-full space-y-2">
            <hr className="w-[80%] mx-auto"/>
            <a 
                href="https://github.com/safarinexus/edgar-teong"
                className="block font-light text-sm w-full text-neutral-500 text-center"
            >
                Made by Edgar Russell Teong Kai Han
            </a>
            <ContactBar />
        </div>
    )
}

export default Footer