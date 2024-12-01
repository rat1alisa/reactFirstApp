import PropTypes from "prop-types";


export default function MyComponent (props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}