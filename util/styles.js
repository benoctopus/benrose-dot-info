import { withStyles as _withStyles } from '@material-ui/core';
import { prefix as _prefix } from 'inline-style-prefixer';
import { resolveArrayValue } from 'css-in-js-utils';
import Theme from './Theme';


const findAndFixArray = (prefixed) => {
  let styles;

  if (typeof styles === 'function') {
    styles = prefixed(Theme);
  } else {
    styles = prefixed;
  }

  const keys = Object.keys(styles);
  const len = keys.length;

  for (let i = 0; i < len; i += 1) {
    const prop = keys[i];
    const value = styles[prop];

    if (value instanceof Object) {
      if (value instanceof Array) {
        styles[prop] = resolveArrayValue(prop, value);
      } else {
        findAndFixArray(value);
      }
    }
  }

  return styles;
};

export const withStyles = styles => Component => (
  _withStyles(findAndFixArray(_prefix(styles)))(Component)
);

export const prefix = styles => findAndFixArray(_prefix(styles));
