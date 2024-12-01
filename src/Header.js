import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import { ThemeContext } from './ThemeContext';

import * as styles from './Header.scss';

console.log({styles})

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);
  
  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
      <Button onClick={onToggleTheme}>
        Mudar Tema
      </Button>
      {props.children}
      <hr />
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

Header.defaultProps = {
  title: `LFGuerino's Blog`
}

