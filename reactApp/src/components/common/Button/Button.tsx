import { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
}

const Button = ({onClick, children}: ButtonProps)  => {
    return <button className="boton-elegante" onClick={onClick}>{children}</button>
}
;

export default Button;
