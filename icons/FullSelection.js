'use strict';

var React = require('react');

function FullSelection(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,6.5v14.5c0,.6-.4,1-1,1H6.5"/>   <path d="M17,1.5H4c-1.4,0-2.5,1.1-2.5,2.5v13c0,1.4,1.1,2.5,2.5,2.5h13c1.4,0,2.5-1.1,2.5-2.5V4c0-1.4-1.1-2.5-2.5-2.5ZM15.2,8.6l-5,5.1c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-3-2.8c-.4-.4-.4-1,0-1.4.4-.4,1-.4,1.4,0l2.3,2.1,4.3-4.4c.4-.4,1-.4,1.4,0,.4.4.4,1,0,1.4Z"/>' : '<path d="M48 0H0V48H48V0Z" fill-opacity="0.01"/><path d="M34 5H8C6.34315 5 5 6.34315 5 8V34C5 35.6569 6.34315 37 8 37H34C35.6569 37 37 35.6569 37 34V8C37 6.34315 35.6569 5 34 5Z"/><path d="M43.9998 13.002V42.0001C43.9998 43.1046 43.1044 44.0001 41.9998 44.0001H13.0034"/><path d="M13 20.4858L18.9997 26.0109L29 15.7192"/>';

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

module.exports = FullSelection;
