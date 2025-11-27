'use strict';

var React = require('react');

function VoiceMessage(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM8.5,12.9c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM11.7,15.1c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4.5-.5.7-1.1.7-1.8s-.3-1.3-.7-1.8c-.4-.4-.4-1,0-1.4s1-.4,1.4,0c.9.9,1.3,2,1.3,3.2s-.5,2.3-1.3,3.2ZM14.2,17.6c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4,1.1-1.1,1.8-2.6,1.8-4.2s-.6-3.1-1.8-4.2c-.4-.4-.4-1,0-1.4.4-.4,1-.4,1.4,0,1.5,1.5,2.3,3.5,2.3,5.7s-.8,4.1-2.3,5.7Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M17 25.8994C18.1046 25.8994 19 25.004 19 23.8994C19 22.7948 18.1046 21.8994 17 21.8994C15.8954 21.8994 15 22.7948 15 23.8994C15 25.004 15.8954 25.8994 17 25.8994Z"/><path d="M21.9497 28.8492C23.2165 27.5825 24 25.8325 24 23.8995C24 21.9665 23.2165 20.2165 21.9497 18.9497"/><path d="M26.8994 33.799C29.4329 31.2655 30.9999 27.7655 30.9999 23.8995C30.9999 20.0335 29.4329 16.5335 26.8994 14"/>';

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

module.exports = VoiceMessage;
