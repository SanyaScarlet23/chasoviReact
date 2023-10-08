import PropTypes from "prop-types";

export const Semestar = (props) => {
    return(
        <>
        { props.shouldShowSemestar ? (<h3>Winter semester</h3>) : <h3>Summer semester</h3> };
        </>
    );
};

Semestar.propTypes = {
    shouldShowSemestar: PropTypes.bool,
};

Semestar.defaultProps = {
    shouldShowSemestar: true,
}