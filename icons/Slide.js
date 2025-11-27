'use strict';

var React = require('react');

function Slide(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8,20.8l4-4,4,4"/>   <path d="M20.5,1.8H3.5c-.6,0-1,.4-1,1v14c0,.6.4,1,1,1h17c.6,0,1-.4,1-1V2.8c0-.6-.4-1-1-1ZM17.7,7.5l-5,5c-.4.4-1,.4-1.4,0l-1.5-1.5-2.1,2.1c-.2.2-.4.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1,0-1.4l2.8-2.8c.4-.4,1-.4,1.4,0l1.5,1.5,4.3-4.3c.4-.4,1-.4,1.4,0,.4.4.4,1,0,1.4Z"/>   <path d="M2,2.8h20"/>' : '<path d="M41 5.5H7V33.5H41V5.5Z"/><path d="M16 41.5L24 33.5L32 41.5"/><path d="M13.9239 24.6628L19.5664 19.155L24.0083 23.4999L33.9669 13.5208"/><path d="M4 5.5H44"/>';

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

module.exports = Slide;
