'use strict';

var React = require('react');

function GrinningFaceWithTightlyClosedEyesOpenMouth(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM7.3,10.8l.8-.8-.8-.8c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.5,1.5c.4.4.4,1,0,1.4l-1.5,1.5c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4ZM16.4,15.9c0,.1-1.3,2.6-4.4,2.6s-4.3-2.4-4.4-2.6c-.2-.3-.1-.7,0-1s.5-.5.9-.5h7c.3,0,.7.2.9.5s.2.7,0,1ZM16.7,10.8c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-1.5-1.5c-.4-.4-.4-1,0-1.4l1.5-1.5c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-.8.8.8.8Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M24 35C29 35 31 31 31 31H17C17 31 19 35 24 35Z"/><path d="M32 17L29 20L32 23"/><path d="M16 17L19 20L16 23"/>';

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

module.exports = GrinningFaceWithTightlyClosedEyesOpenMouth;
