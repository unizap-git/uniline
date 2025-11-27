'use strict';

var React = require('react');

function ExclusiveGateway(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.7,10.6L13.5,1.4c-.8-.8-2-.8-2.8,0L1.5,10.6c-.8.8-.8,2,0,2.8l9.2,9.2c.4.4.9.6,1.4.6s1-.2,1.4-.6l9.2-9.2c.8-.8.8-2,0-2.8ZM15.7,14.3c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-2.3-2.3-2.3,2.3c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l2.3-2.3-2.3-2.3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l2.3,2.3,2.3-2.3c.4-.4,1-.4,1.4,0,.4.4.4,1,0,1.4l-2.3,2.3,2.3,2.3Z"/>' : '<path d="M22.7992 4.20102L4.4144 22.5858C3.63336 23.3668 3.63335 24.6332 4.4144 25.4142L22.7992 43.799C23.5802 44.58 24.8466 44.58 25.6276 43.799L44.0124 25.4142C44.7934 24.6332 44.7934 23.3668 44.0124 22.5858L25.6276 4.20102C24.8466 3.41997 23.5802 3.41997 22.7992 4.20102Z"/><path d="M18.043 29.9871L30.0427 18.0249"/><path d="M18.0527 18.0156L30.0337 29.9965"/>';

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

module.exports = ExclusiveGateway;
