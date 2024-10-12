import DropdownIcon from "./DropdownIcon"

interface Props {
    open: boolean;
    toggleDropdown: () => void;
}

const DropdownButton = ({ open, toggleDropdown }: Props) => {
    return (
        <div id="mobile-dropdown-header-container" className="ml-auto mr-5 flex justify-center items-center">
            <button 
                id="mobile-dropdown"
                className="hover:opacity-50 transition-opacity"
                type="button"
                onClick={toggleDropdown}
            >
                <DropdownIcon open={open} />
            </button>
        </div>
    )
}

export default DropdownButton;