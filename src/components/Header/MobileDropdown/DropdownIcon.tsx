interface Props {
    open: boolean;
}
//guess where i got this from
const DropdownIcon = ({ open }: Props) => {
    return (
        <div className="w-8 h-8 flex flex-col justify-evenly items-center">
            <div
            className={`w-full h-[3px] bg-black dark:bg-white transform transition-transform duration-300 ${
                open ? 'rotate-45 translate-y-[6px]' : ''
            }`}
            />
            <div
            className={`w-full h-[3px] bg-black dark:bg-white transform transition-transform duration-300 ${
                open ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
            />
        </div>
    )
}

export default DropdownIcon