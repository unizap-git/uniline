'use strict';

var React = require('react');

function ArrowCircleUp(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM17.2,13c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-2.8-2.8v6.6c0,.6-.4,1-1,1s-1-.4-1-1v-6.6l-2.8,2.8c-.4.4-1,.4-1.4,0s-.4-1,0-1.4l4.5-4.5c0,0,.2-.2.3-.2.2-.1.5-.1.8,0,.1,0,.2.1.3.2l4.5,4.5c.4.4.4,1,0,1.4Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M24 33.5V15.5"/><path d="M33 24.5L24 15.5L15 24.5"/>';

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

module.exports = ArrowCircleUp;
