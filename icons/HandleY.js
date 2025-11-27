'use strict';

var React = require('react');

function HandleY(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM17.3,8l-4.3,6.8v3.7c0,.6-.4,1-1,1s-1-.4-1-1v-3.7l-4.3-6.8c-.3-.5-.2-1.1.3-1.4.5-.3,1.1-.2,1.4.3l3.7,5.7,3.7-5.7c.3-.5.9-.6,1.4-.3.5.3.6.9.3,1.4Z"/>' : '<circle cx="24" cy="24" r="20"/><path d="M15 15L24 29L33 15"/><path d="M24 28V37"/>';

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

module.exports = HandleY;
