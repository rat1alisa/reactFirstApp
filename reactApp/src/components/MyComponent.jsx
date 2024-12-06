import PropTypes from "prop-types";
import "./MyComponent.css";


const MyComponent = (props)  => {
    /*const MyCompProps = { 
        title : "Заголовок по умолчанию",
        description : "Описание по умолчанию" 
    };*/
    
    return (
        <div className="container">
            <h1 className="title">{props.title}</h1>
            <p className="description">{props.description}</p>
        </div>
    );
};

MyComponent.propTypes = {
    title: PropTypes . string,
    description: PropTypes . string,
};

export default MyComponent;