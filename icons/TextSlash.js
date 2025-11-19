'use strict';

var React = require('react');

function TextSlash(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9.6,20h-2.6c-.6,0-1-.4-1-1s.4-1,1-1h1.8l.8-3.2c.1-.5.7-.9,1.2-.7s.9.7.7,1.2l-.7,2.8h2.1c.6,0,1,.4,1,1s-.4,1-1,1h-3.4ZM19,20c-.3,0-.5,0-.7-.3l-7.5-7.5s0,0,0,0l-6.5-6.5c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l.4.4c.1-.4.5-.6.9-.6h6.2s0,0,0,0h5.8c.6,0,1,.4,1,1v1.2c0,.6-.4,1-1,1s-1-.4-1-1v-.2h-4l-1.3,5.2,7.1,7.1c.4.4.4,1,0,1.4s-.5.3-.7.3ZM7.9,6.5l3,3,.9-3.6h-3.9v.2c0,.1,0,.2,0,.3Z"/>' : '<path d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.677 6.523M9.6 19l1.029-4M5 5l6.523 6.523M19 19l-7.477-7.477"/>';

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

module.exports = TextSlash;
