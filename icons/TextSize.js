'use strict';

var React = require('react');

function TextSize(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.5,20h-3c-.6,0-1-.4-1-1s.4-1,1-1h.5v-6h-2v.2c0,.6-.4,1-1,1s-1-.4-1-1v-1.2c0-.6.4-1,1-1h8c.6,0,1,.4,1,1v1.2c0,.6-.4,1-1,1s-1-.4-1-1v-.2h-2v6h.5c.6,0,1,.4,1,1s-.4,1-1,1ZM11,20h-6c-.6,0-1-.4-1-1s.4-1,1-1h2V6h-3v.2c0,.6-.4,1-1,1s-1-.4-1-1v-1.2c0-.6.4-1,1-1h11c.6,0,1,.4,1,1v1.2c0,.6-.4,1-1,1s-1-.4-1-1v-.2h-4v12h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = TextSize;
