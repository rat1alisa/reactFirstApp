import PropTypes from "prop-types";
import Button from "../common/Button/Button";
import Counter from "../Counter/Counter";
import "./MyComponent.css";

const MyComponent = ({title, description})  => {
    /*const MyCompProps = { 
        title : "Заголовок по умолчанию",
        description : "Описание по умолчанию" 
    };*/
    return (
        <div className="container">
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>

            <Button
                onClick={() => alert('Clicked!')}
            >
                Click me!!
            </Button>

            <Counter />


        </div>
    );
};

MyComponent.propTypes = {
    title: PropTypes . string,
    description: PropTypes . string,
};

export default MyComponent;