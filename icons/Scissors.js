'use strict';

var React = require('react');

function Scissors(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="8" cy="16" r="1"/>   <circle cx="8" cy="8" r="1"/>   <path d="M20,1.5H4c-1.4,0-2.5,1.1-2.5,2.5v16c0,1.4,1.1,2.5,2.5,2.5h16c1.4,0,2.5-1.1,2.5-2.5V4c0-1.4-1.1-2.5-2.5-2.5ZM18.6,16.2c.5.3.6.9.3,1.4-.2.3-.5.4-.8.4s-.4,0-.6-.2l-6.4-4.3c0,.3-.2.7-.4,1,.2.4.4.9.4,1.4,0,1.7-1.3,3-3,3s-3-1.3-3-3,1.3-3,3-3,.7,0,1,.2c.3-.8.3-1.6,0-2.4-.3.1-.7.2-1,.2-1.7,0-3-1.3-3-3s1.3-3,3-3,3,1.3,3,3-.1,1-.4,1.4c.2.3.3.7.4,1l6.4-4.3c.5-.3,1.1-.2,1.4.3.3.5.2,1.1-.3,1.4l-6.3,4.2,6.3,4.2Z"/>' : '<rect x="5" y="5" width="38" height="38" rx="3"/><path d="M19 19C21 22 21 26 19 29"/><path d="M36 14L21 24L36 34"/><circle cx="16" cy="16" r="4"/><circle cx="16" cy="32" r="4"/>';

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

module.exports = Scissors;
