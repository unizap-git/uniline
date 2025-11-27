'use strict';

var React = require('react');

function FileSettings(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15,2l5,5"/>   <path d="M20,6h-4V2c0-.6-.4-1-1-1H5c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V7c0-.6-.4-1-1-1ZM16,14.5h-.7c0,.2-.2.4-.3.7l.7.7c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-.7-.7c-.2.1-.4.2-.7.3v.7c0,.6-.4,1-1,1s-1-.4-1-1v-.7c-.2,0-.5-.2-.7-.3l-.7.7c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l.8-.8c0-.2-.2-.4-.2-.6h-.7c-.6,0-1-.4-1-1s.4-1,1-1h.7c0-.2.2-.4.3-.7l-.6-.6c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l.6.6c.2-.1.4-.2.7-.3v-.7c0-.6.4-1,1-1s1,.4,1,1v.7c.2,0,.4.1.6.2l.6-.6c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-.6.6c.1.2.2.5.3.7h.7c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"/><path d="M30 4L40 14"/><circle cx="24" cy="27" r="5"/><path d="M24 19V22"/><path d="M24 32V35"/><path d="M29.8281 21L27.7068 23.1213"/><path d="M19.8281 31L17.7068 33.1213"/><path d="M18 21L20.1213 23.1213"/><path d="M28 31L30.1213 33.1213"/><path d="M16 27H17.5H19"/><path d="M29 27H30.5H32"/>';

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

module.exports = FileSettings;
