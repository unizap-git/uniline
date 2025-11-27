'use strict';

var React = require('react');

function DizzyFace(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM8.2,11.7c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l.3-.3-.3-.3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l.3.3.3-.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-.3.3.3.3c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-.3-.3-.3.3ZM12,19c-1.7,0-3-1.3-3-3s1.3-3,3-3,3,1.3,3,3-1.3,3-3,3ZM17.2,10.3c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-.3-.3-.3.3c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l.3-.3-.3-.3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l.3.3.3-.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-.3.3.3.3Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M19 18L15 22"/><path d="M15 18L19 22"/><path d="M33 18L29 22"/><path d="M29 18L33 22"/><rect x="20" y="28" width="8" height="8" rx="4"/>';

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

module.exports = DizzyFace;
