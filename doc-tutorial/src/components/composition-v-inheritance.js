import PropTypes from 'prop-types';
import React from 'react';

const FancyBorder = props => {
    console.log(props);
    return (
        <div> {props.children} </div>
    )
};
const WelComeDialog = _ => {
    return (
        <FancyBorder fancy='fancy' onChange={_ => true}>
            <p> awerjlwerwljer </p>
        </FancyBorder>)
};

const SingleFather = ({ children, name }) => (
    <div>
        {children}
        {name}
    </div>
)

SingleFather.defaultProps = {
    name: 'Strange'
}

SingleFather.propTypes = {
    children: PropTypes.element.isRequired
}


export default _ => (
    <div>
        <WelComeDialog />
        <SingleFather ><p> 123 l </p></SingleFather>
    </div>
)
