'use strict';

var React = require('react');

function FileDateOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,11.5v-4.5l-4.5-5H5c-.6,0-1,.4-1,1v18c0,.6.4,1,1,1h6"/>   <path d="M17,13c-2.8,0-5,2.2-5,5s2.2,5,5,5,5-2.2,5-5-2.2-5-5-5ZM18.5,19.5h-2c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M15,2v5h5"/>' : '<path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"/><circle cx="34" cy="36" r="8"/><path d="M33 33V37H37"/><path d="M30 4V14H40"/>';

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

module.exports = FileDateOne;
