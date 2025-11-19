'use strict';

var React = require('react');

function ShareAll(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15,18.6c-.3,0-.5-.1-.7-.3-.4-.4-.3-1,0-1.4l5.6-5.1-5.5-5c-.4-.4-.4-1,0-1.4.4-.4,1-.4,1.4,0l5.5,5c.4.4.6.9.7,1.4s-.2,1.1-.5,1.5c0,0-.1.1-.1.1l-5.6,5.1c-.2.2-.4.3-.7.3Z"/>   <path d="M8.8,14.8v2c0,.6.4,1.2,1,1.3.3,0,.6,0,.8-.2l6.2-5.2c.6-.5.6-1.3.1-1.9,0,0,0,0-.1-.1l-6.2-5.2c-.5-.4-1.2-.3-1.6.2-.2.2-.3.5-.2.8v2.1c-4,0-7.3,3.6-7.3,8.1v1.6c0,.5.3.9.7,1,.4,0,.8-.2.9-.5,1-2.3,3.2-3.8,5.7-3.9,0,0,0,0,0,0Z"/>' : '<path d="m15.141 6 5.518 4.95a1.05 1.05 0 0 1 0 1.549l-5.612 5.088m-6.154-3.214v1.615a.95.95 0 0 0 1.525.845l5.108-4.251a1.1 1.1 0 0 0 0-1.646l-5.108-4.251a.95.95 0 0 0-1.525.846v1.7c-3.312 0-6 2.979-6 6.654v1.329a.7.7 0 0 0 1.344.353 5.174 5.174 0 0 1 4.652-3.191l.004-.003Z"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = ShareAll;
