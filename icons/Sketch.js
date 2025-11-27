'use strict';

var React = require('react');

function Sketch(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM17.3,11l-4.5,5.6c-.2.2-.5.4-.8.4s-.6-.1-.8-.4l-4.5-5.6c-.3-.4-.3-.9,0-1.2l1.8-2.4c.2-.2.5-.4.8-.4h5.4c.3,0,.6.1.8.4l1.8,2.4c.3.4.3.9,0,1.2Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M18.6 16H29.4L33 20.7059L24 32L15 20.7059L18.6 16Z"/>';

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

module.exports = Sketch;
