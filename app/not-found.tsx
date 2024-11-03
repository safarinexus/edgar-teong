import Image from "next/image"

export default function NotFound() {
    return (
        <div id="error-container" className="w-full h-svh px-2 pt-2">
            <div className="w-full max-w-[1192px] h-[400px] p-10 mx-auto flex flex-col justify-end rounded-[32px] bg-white border-[1px] 
            border-neutral-300 dark:border-neutral-800 shadow-custom dark:shadow-custom-dark dark:bg-black"
            >
                <h1 className="font-medium text-5xl">404 | Page not found</h1>
                <p className="font-light text-base mt-5">
                    Click my logo to head back 
                    <Image
                        alt="wink face emoji"
                        src="/emojis/wink.webp"
                        height={160}
                        width={160}
                        className="inline relative size-5 bottom-1 ml-1"
                    />
                </p>
            </div>
        </div>
    )
}