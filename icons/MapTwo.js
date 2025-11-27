'use strict';

var React = require('react');

function MapTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,4H2c-.6,0-1,.4-1,1v15c0,.6.4,1,1,1h20c.6,0,1-.4,1-1V5c0-.6-.4-1-1-1ZM19.5,16.2c.5.3.6.9.3,1.4-.2.3-.5.5-.8.5s-.4,0-.5-.2l-3.7-2.4-1.9,2.6c-.2.3-.5.4-.8.4s-.4,0-.6-.2c-.4-.3-.5-1-.2-1.4l1.9-2.5-3.2-2-4.1,5.3c-.2.3-.5.4-.8.4s-.4,0-.6-.2c-.4-.3-.5-1-.2-1.4l4-5.1-3.7-2.4c-.5-.3-.6-.9-.3-1.4.3-.5.9-.6,1.4-.3l3.9,2.5,1.8-2.3c.3-.4,1-.5,1.4-.2.4.3.5,1,.2,1.4l-1.7,2.1,3.1,2,3.9-5.4c.3-.4,1-.5,1.4-.2.4.3.5,1,.2,1.4l-3.9,5.2,3.6,2.3Z"/>' : '<path d="M44 10H4V40H44V10Z"/><path d="M10 16L38 34"/><path d="M38 16L24 35"/><path d="M24 16L10 34"/>';

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

module.exports = MapTwo;
