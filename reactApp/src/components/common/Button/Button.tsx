import "./Button.css";

const Button = ({onClick, children})  => {
    return <button className="boton-elegante" onClick={onClick}>{children}</button>
}
;

export default Button;
