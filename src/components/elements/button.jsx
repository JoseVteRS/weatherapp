import style from "./button.module.css";

const Button = ({ label, ...props }) => {
    return (
        <button className={style.button} {...props}>
            {label}
        </button>
    );
};

export default Button;
