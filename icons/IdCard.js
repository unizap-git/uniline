'use strict';

var React = require('react');

function IdCard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,3H3c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM6,7h3c.6,0,1,.4,1,1s-.4,1-1,1h-3c-.6,0-1-.4-1-1s.4-1,1-1ZM6,11h3c.6,0,1,.4,1,1s-.4,1-1,1h-3c-.6,0-1-.4-1-1s.4-1,1-1ZM18,17H6c-.6,0-1-.4-1-1s.4-1,1-1h12c.6,0,1,.4,1,1s-.4,1-1,1ZM19,12c0,.6-.4,1-1,1h-4c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1h4c.6,0,1,.4,1,1v4Z"/>' : '<path d="M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z"/><path d="M36 16H28V24H36V16Z"/><path d="M12 32H36"/><path d="M12 16H18"/><path d="M12 24H18"/>';

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

module.exports = IdCard;
