'use strict';

var React = require('react');

function SlyFaceWhitSmile(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM6.6,10.9c-.2-.5,0-1.1.4-1.3l2-1c.5-.2,1.1,0,1.3.4s0,1.1-.4,1.3l-2,1c0,0-.3.1-.4.1-.4,0-.7,0-.9-.5h0ZM16.4,15.9c0,.1-1.3,2.6-4.4,2.6s-4.3-2.4-4.4-2.6c-.2-.5,0-1.1.4-1.3.5-.2,1.1,0,1.3.4,0,0,.8,1.4,2.6,1.4s2.6-1.4,2.6-1.5c.3-.5.9-.7,1.3-.4s.9.9.6,1.4h0ZM17.9,11c-.2.4-.5.5-.9.5s-.2,0-.4-.1l-2-1c-.5-.2-.7-.8-.4-1.3.2-.5.8-.7,1.3-.4l2,1c.5.2.7.8.4,1.3h0Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M34 21L30 19"/><path d="M19 19L15 21"/><path d="M31 31C31 31 29 35 24 35C19 35 17 31 17 31"/>';

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

module.exports = SlyFaceWhitSmile;
