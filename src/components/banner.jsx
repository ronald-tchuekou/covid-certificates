import React from 'react';
import PropTypes from 'prop-types';
import { NavBar } from './navBar';

export const Banner = (props) => {
    const { reverse } = props;
    return (
        <header className={`banner ${reverse ? 'reverse' : ''} banner-bg`}>
            <NavBar {...props} />
            <div className="container">
                <div className="banner-content">{props.children}</div>
            </div>
        </header>
    );
};
Banner.propTypes = {
    ...NavBar.propTypes,
    reverse: PropTypes.bool,
};
Banner.defaultProps = {
    ...NavBar.defaultProps,
    reverse: false,
};
