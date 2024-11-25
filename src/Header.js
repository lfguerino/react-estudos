import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <Button
        theme={props.theme}
        onClick={props.onToggleTheme}
      >
        Mudar Tema
      </Button>
      {props.children}
      <hr />
    </>
  );
}

Header.propTypes = {
  theme: PropTypes.string.isRequired, 
  onToggleTheme: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node
}

Header.defaultProps = {
  title: `LFGuerino's Blog`
}

