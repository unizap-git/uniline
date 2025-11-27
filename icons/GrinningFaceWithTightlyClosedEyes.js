'use strict';

var React = require('react');

function GrinningFaceWithTightlyClosedEyes(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM7.3,10.3l.8-.8-.8-.8c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.5,1.5c.4.4.4,1,0,1.4l-1.5,1.5c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4ZM16.4,15.9c0,.1-1.3,2.6-4.4,2.6s-4.3-2.4-4.4-2.6c-.2-.5,0-1.1.4-1.3.5-.2,1.1,0,1.3.4,0,0,.8,1.5,2.6,1.5s2.6-1.4,2.6-1.5c.3-.5.9-.7,1.3-.4s.9.8.6,1.3h0ZM16.7,10.3c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-1.5-1.5c-.4-.4-.4-1,0-1.4l1.5-1.5c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-.8.8.8.8Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M17 31C17 31 19 35 24 35C29 35 31 31 31 31"/><path d="M16 16L19 19L16 22"/><path d="M32 16L29 19L32 22"/>';

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

module.exports = GrinningFaceWithTightlyClosedEyes;
