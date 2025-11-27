'use strict';

var React = require('react');

function Other(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.7,10.6L13.5,1.4c-.8-.8-2.1-.8-2.8,0L1.5,10.6c-.8.8-.8,2,0,2.8l9.2,9.2c.4.4.9.6,1.4.6s1-.2,1.4-.6l9.2-9.2c.8-.8.8-2,0-2.8ZM15,13h-2v2c0,.6-.4,1-1,1s-1-.4-1-1v-2h-2c-.6,0-1-.4-1-1s.4-1,1-1h2v-2c0-.6.4-1,1-1s1,.4,1,1v2h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M22.799 4.20101L4.41421 22.5858C3.63317 23.3668 3.63316 24.6332 4.41421 25.4142L22.799 43.799C23.58 44.58 24.8464 44.58 25.6274 43.799L44.0122 25.4142C44.7932 24.6332 44.7932 23.3668 44.0122 22.5858L25.6274 4.20101C24.8464 3.41996 23.58 3.41996 22.799 4.20101Z"/><path d="M18 24H30"/><path d="M24 18V30"/>';

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

module.exports = Other;
