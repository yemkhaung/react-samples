import React, {Component} from 'react';

export const DEFAULT_HEADER_TEXT = 'Default header';

const headerStyle = {
    fontSize: '16px',
    fontWeight: '300',
    display: 'inline-block',
    margin: '20px 10px'
};

const Header = ({text}) => (
    <h2 style={headerStyle}>{text}</h2>
);

Header.defaultProps = {
    text: DEFAULT_HEADER_TEXT
}

export default Header;  