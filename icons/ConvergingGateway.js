'use strict';

var React = require('react');

function ConvergingGateway(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.7,10.6L13.5,1.4c-.8-.8-2-.8-2.8,0L1.5,10.6c-.8.8-.8,2,0,2.8l9.2,9.2c.4.4.9.6,1.4.6s1-.2,1.4-.6l9.2-9.2c.8-.8.8-2,0-2.8ZM16.3,13h-1.8l1.3,1.3c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-1.3-1.3v1.8c0,.6-.4,1-1,1s-1-.4-1-1v-1.8l-1.3,1.3c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l1.3-1.3h-1.8c-.6,0-1-.4-1-1s.4-1,1-1h1.8l-1.3-1.3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.3,1.3v-1.8c0-.6.4-1,1-1s1,.4,1,1v1.8l1.3-1.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-1.3,1.3h1.8c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M22.7992 4.20102L4.4144 22.5858C3.63336 23.3668 3.63335 24.6332 4.4144 25.4142L22.7992 43.799C23.5802 44.58 24.8466 44.58 25.6276 43.799L44.0124 25.4142C44.7934 24.6332 44.7934 23.3668 44.0124 22.5858L25.6276 4.20102C24.8466 3.41997 23.5802 3.41997 22.7992 4.20102Z"/><path d="M24.0428 15.5342V32.4778"/><path d="M15.5713 24.0059H32.5149"/><path d="M30.0336 18.0151L18.0527 29.9961"/><path d="M18.0527 18.0151L30.0337 29.996"/>';

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

module.exports = ConvergingGateway;
