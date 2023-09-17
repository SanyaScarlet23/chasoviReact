import PropTypes from "prop-types";

export const User = (props) => {
    console.log(props);
    return (
        <>
        {!props.shouldShowUser ? (
            <div>
                <h1>User:</h1>
                <p>Name: {props.user.name} </p>
                <p>Adress: {props.user.adress} </p>
                <p>Age: {props.user.age} </p>
            </div>
        ) : (
            <div>
                <h1>User1:</h1>
                <p>Name: {props.user1.name} </p>
                <p>Adress: {props.user1.adress} </p>
                <p>Age: {props.user1.age} </p>
            </div>

        )}
        </>
    );
};

User.propTypes = {
    user: PropTypes.object,
    user1: PropTypes.object,
    shouldShowUser: PropTypes.bool,
};

User.defaultProps = {
    shouldShowUser: false,
    user: { name: "John Doe", adress: "Leninova", age: 55 },
};