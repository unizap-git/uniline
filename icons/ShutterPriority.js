'use strict';

var React = require('react');

function ShutterPriority(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7.5,6l1.5-3h6l1.5,3H7.5Z"/>   <path d="M20.5,5H3.5c-1.4,0-2.5,1.1-2.5,2.4v12.2c0,1.3,1.1,2.4,2.5,2.4h17c1.4,0,2.5-1.1,2.5-2.4V7.4c0-1.3-1.1-2.4-2.5-2.4ZM9.5,18s0,0,0,0c-.5,0-1-.4-1-1,0-.6.4-1,1-1,2,0,3.6-.6,4-.9-.3-.2-1.2-.5-1.7-.6-1.4-.4-3.2-.9-3.2-2.5,0-2.6,4.5-2.9,5.5-2.9.6,0,1,.4,1,1,0,.6-.4,1-1,1-1.8,0-3.2.6-3.5.9.3.2,1.2.5,1.7.6,1.4.4,3.2.9,3.2,2.5,0,2.5-4.6,2.9-6,2.9Z"/>' : '<path d="M15 12L18 6H30L33 12H15Z"/><path d="M41 12H7C5.34315 12 4 13.2536 4 14.8V39.2C4 40.7464 5.34315 42 7 42H41C42.6569 42 44 40.7464 44 39.2V14.8C44 13.2536 42.6569 12 41 12Z"/><path d="M28 20C25 20.1296 19 21.0889 19 23.8889C19 27.3889 29 26.6111 29 30.1111C29 32.9111 22.3333 33.8704 19 34"/>';

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

module.exports = ShutterPriority;
