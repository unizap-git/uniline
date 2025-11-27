'use strict';

var React = require('react');

function HamburgerOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,11v-.5c0-4.4-3.6-8-8-8S4,6.1,4,10.5v.5"/>   <path d="M4,17s-1,2.5,1,3.5,12,1,14,0,1-3.5,1-3.5"/>   <path d="M18,9.5H6c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5h12c2.5,0,4.5-2,4.5-4.5s-2-4.5-4.5-4.5ZM19.4,14.9c-.2.4-.5.6-.9.6s-.3,0-.4-.1l-.9-.5c-.4-.2-.8-.2-1.2,0-.9.4-1.9.5-2.7.1l-.5-.2c-.4-.2-.8-.1-1.2,0-.9.4-1.9.5-2.9.1h-.2c-.5-.3-1.1-.3-1.6,0l-.8.4c-.5.2-1.1,0-1.3-.4-.2-.5,0-1.1.4-1.3l.8-.4c1-.5,2.2-.6,3.3-.1h.2c.4.2.8.2,1.2,0,.9-.4,1.9-.5,2.9-.1l.5.2c.4.1.8.1,1.1,0,.9-.5,2.1-.5,3,0l.9.5c.5.2.7.8.4,1.3Z"/>   <circle cx="8.5" cy="7.5" r="1.3"/>   <circle cx="11.9" cy="6.1" r="1.2"/>' : '<path d="M40 22V21C40 12.1634 32.8366 5 24 5C15.1634 5 8 12.1634 8 21V22"/><path d="M8 34C8 34 6 39 10 41C14 43 34 43 38 41C42 39 40 34 40 34"/><rect x="5" y="21" width="38" height="14" rx="7"/><path d="M11 29L12.5917 28.2042C14.1235 27.4382 15.9098 27.3639 17.5 28L17.9239 28.1695C19.2444 28.6978 20.7279 28.6361 22 28V28C23.2721 27.3639 24.7556 27.3022 26.0761 27.8305L27.0353 28.2141C28.285 28.714 29.6888 28.6556 30.8927 28.0537V28.0537C32.2193 27.3904 33.7807 27.3904 35.1073 28.0537L37 29"/><circle cx="17" cy="15.0498" r="2.5"/><circle cx="23.75" cy="12.2998" r="2.5"/>';

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

module.exports = HamburgerOne;
