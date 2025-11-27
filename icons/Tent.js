'use strict';

var React = require('react');

function Tent(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5,6l-3,12h6"/>   <path d="M23,17.8l-3-12c-.1-.4-.5-.8-1-.8H5c-.3,0-.6.1-.8.4s-.3.6-.2.9l3,12c.1.4.5.8,1,.8h14c.3,0,.6-.1.8-.4.2-.2.3-.6.2-.9ZM19.5,10H6c-.6,0-1-.4-1-1s.4-1,1-1h13.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M5,6l1.5,6"/>   <path d="M19,6l1.5,6"/>' : '<path d="M10 12L4 36H16"/><path d="M38 12H10L16 36H44L38 12Z"/><path d="M12 18H39"/><path d="M10 12L13 24"/><path d="M38 12L41 24"/>';

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

module.exports = Tent;
