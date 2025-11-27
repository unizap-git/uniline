'use strict';

var React = require('react');

function Cooking(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3,21h18" stroke-miterlimit="2"/>   <path d="M3,18h18" stroke-miterlimit="2"/>   <path d="M12,4c-4.7,0-8.5,3.8-8.5,8.5v5.5c0,.6.4,1,1,1h15c.6,0,1-.4,1-1v-5.5c0-4.7-3.8-8.5-8.5-8.5ZM9.5,14.5c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2Z"/>   <path d="M14,5v-1c0-1.1-.9-2-2-2h0c-1.1,0-2,.9-2,2v1" stroke-miterlimit="2"/>' : '<path d="M6 42L42 42"/><path d="M6 36L42 36"/><path d="M9 25C9 16.7157 15.7157 10 24 10C32.2843 10 39 16.7157 39 25V36H9L9 25Z"/><path d="M17 25V29"/><path d="M28 10V8C28 5.79086 26.2091 4 24 4V4C21.7909 4 20 5.79086 20 8V10"/>';

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

module.exports = Cooking;
