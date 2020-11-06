import React from 'react';
import propTypes from 'prop-types';
import './devButton.css';

export const DevButton = ({variant, title, enableBoxShadow, ...props}) => {
    let str = 'dev-button';
    str += ' ' + variant
    console.log(enableBoxShadow)
    if(enableBoxShadow)
        str += ' boxShadow'
    console.log(str)
    return (
        <button 
        type="button"
        className={str}
        {...props}
        >
            {title}
        </button>
    );
};

DevButton.propTypes = {

    variant: propTypes.oneOf(['default', 'outline', 'text']),

    title: propTypes.string,

    boxShadowDisabled: propTypes.bool

};


DevButton.defaultProps = {
    title: 'Button',
    boxShadowDisabled: false,
    variant: 'default'
}