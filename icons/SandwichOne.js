'use strict';

var React = require('react');

function SandwichOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8.9,20.1s2.1,2.1,4.3,1.5c2.2-.6,7.9-6.2,8.5-8.5.6-2.2-1.5-4.3-1.5-4.3"/>   <path d="M3.9,15.1s-2.1-2.1-1.5-4.3c.6-2.2,6.2-7.9,8.5-8.5,2.2-.6,4.3,1.5,4.3,1.5"/>   <path d="M19.9,4.2c-.8-.9-2-1.3-3.2-1.3s-2.3.5-3.2,1.3L4.3,13.4c-1.8,1.8-1.8,4.6,0,6.4s2,1.3,3.2,1.3,2.3-.4,3.2-1.3l9.2-9.2c1.8-1.8,1.8-4.6,0-6.4ZM17.3,8.6l-1,.3c-.4.1-.7.5-.9.9-.3.9-1,1.6-1.9,2l-.5.2c-.4.2-.7.5-.8.9-.3.9-1,1.7-1.9,2.1h-.2c-.5.3-.9.8-1.1,1.3l-.3.8c-.1.4-.5.7-.9.7s-.2,0-.3,0c-.5-.2-.8-.7-.6-1.3l.3-.8c.4-1.1,1.2-2,2.2-2.4h.2c.4-.3.7-.6.8-1,.3-.9,1-1.7,1.9-2.1l.5-.2c.4-.2.6-.5.8-.8.3-1,1.1-1.8,2.1-2.1l1-.3c.5-.2,1.1.1,1.3.6.2.5-.1,1.1-.6,1.3Z"/>' : '<g clip-path="url(#icon-231c978a64bd3f7c)"><path d="M17.7988 40.1421C17.7988 40.1421 21.9583 44.3015 26.4505 43.1369C30.9427 41.9722 42.2564 30.6585 43.4211 26.1663C44.5857 21.6741 40.4262 17.5147 40.4262 17.5147"/><path d="M7.89941 30.2427C7.89941 30.2427 3.73996 26.0832 4.90461 21.591C6.06926 17.0988 17.383 5.7851 21.8752 4.62045C26.3674 3.4558 30.5268 7.61526 30.5268 7.61526"/><rect x="5.07129" y="33.0713" width="40" height="14" rx="7" transform="rotate(-45 5.07129 33.0713)"/><path d="M15.6779 33.7785L16.2406 32.0902C16.7822 30.4655 17.9928 29.1498 19.567 28.4752L19.9866 28.2953C21.2939 27.7351 22.2992 26.6425 22.749 25.2932V25.2932C23.1987 23.9439 24.204 22.8513 25.5113 22.291L26.4608 21.8841C27.698 21.3539 28.6493 20.32 29.075 19.0431V19.0431C29.544 17.636 30.6481 16.5319 32.0552 16.0629L34.0627 15.3937"/></g><defs><clipPath id="icon-231c978a64bd3f7c"><rect width="48" height="48"/></clipPath></defs>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 48 48',
    fill: fill ? color : 'none',
    stroke: fill ? 'none' : color,
    strokeWidth: fill ? 0 : strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: className,
    style: style,
    dangerouslySetInnerHTML: { __html: svgContent }
  });
}

module.exports = SandwichOne;
