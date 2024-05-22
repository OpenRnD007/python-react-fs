// Define a type for the Button props
type ButtonProps = {
    label: string;
    onclick?: React.MouseEventHandler<HTMLButtonElement>;
};

/**
* Button component that renders a button with an optional click handler.
* 
* @param {ButtonProps} props - The props for the Button component.
* @returns {React.ReactElement} The Button component.
*/
const Button: React.FC<ButtonProps> = ({ label, onclick }: ButtonProps): React.ReactElement => {
    return (
        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            <button className="text-sm" onClick={onclick}>{label}</button>
        </div>
    );
};
export default Button;