'use strict';

var React = require('react');

function DeleteTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,4.5H7c-.3,0-.6.1-.8.4L1.2,11.4c-.3.4-.3.9,0,1.2l5,6.5c.2.2.5.4.8.4h15c.6,0,1-.4,1-1V5.5c0-.6-.4-1-1-1ZM16.2,13.8c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-1.8-1.8-1.8,1.8c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l1.8-1.8-1.8-1.8c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.8,1.8,1.8-1.8c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-1.8,1.8,1.8,1.8Z"/>' : '<path d="M14 11L4 24L14 37H44V11H14Z"/><path d="M21 19L31 29"/><path d="M31 19L21 29"/>';

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

module.exports = DeleteTwo;
