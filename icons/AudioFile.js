'use strict';

var React = require('react');

function AudioFile(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.8,6.6l-4.5-5.2c-.2-.2-.5-.3-.8-.3H4c-.6,0-1,.4-1,1v20c0,.6.4,1,1,1h16c.6,0,1-.4,1-1V7.2c0-.2,0-.5-.2-.7ZM16.4,7.9l-2.4,1.2v6.6c0,2.1-1.7,3.8-3.8,3.8s-3.8-1.7-3.8-3.8,1.7-3.8,3.8-3.8,1.2.2,1.8.5v-4c0-.4.2-.7.6-.9l3-1.5c.5-.2,1.1,0,1.3.5.2.5,0,1.1-.5,1.3Z"/>' : '<path d="M8 44V4H31L40 14.5V44H8Z"/><path d="M32 14L26 16.9688V31.5"/><circle cx="20.5" cy="31.5" r="5.5"/>';

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

module.exports = AudioFile;
