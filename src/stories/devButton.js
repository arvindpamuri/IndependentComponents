import React from 'react';
import propTypes from 'prop-types';
import './devButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export const DevButton = ({variant, title, boxShadow, iconPosition, color, size, ...props}) => {

    return (

        <button 
        type="button"
        className={`dev-button 
            ${variant} 
            ${boxShadow ? 'boxShadow' : ''}
            ${color}
            ${size}          
            `}
        {...props}
        >
            {(iconPosition === 'left') ? <FontAwesomeIcon icon={faShoppingCart}/> : ""} 
            <span>{title}</span>
            {(iconPosition === 'right') ? <FontAwesomeIcon icon={faShoppingCart}/> : ""} 
        </button>
    );
};

DevButton.propTypes = {

    variant: propTypes.oneOf(['default', 'outline', 'text']),

    title: propTypes.string,

    boxShadow: propTypes.bool,

    disabled: propTypes.bool,

    iconPosition: propTypes.oneOf(['left', 'right']),

    color: propTypes.oneOf(['primary', 'secondary','danger']),

    size: propTypes.oneOf(['sm', 'md', 'lg' ])

};


DevButton.defaultProps = {
    title: 'Button',
    boxShadow: false,
    variant: 'default',
    leftIcon: false,
    rightIcon: false    
}