'use strict';

var React = require('react');

function ReplyAll(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8.9,18.6c-.2,0-.5,0-.7-.3l-5.6-5.1s-.1-.1-.1-.1c-.4-.4-.6-.9-.5-1.5,0-.5.3-1.1.7-1.4l5.5-5c.4-.4,1-.3,1.4,0,.4.4.3,1,0,1.4l-5.5,5,5.6,5.2c.4.4.4,1,0,1.4-.2.2-.5.3-.7.3Z"/>   <path d="M14.7,14.8v1.9c0,.6-.4,1.2-1,1.2-.3,0-.6,0-.8-.2l-6.1-5c-.5-.5-.6-1.3-.1-1.8,0,0,0,0,.1-.1l6.1-5c.5-.4,1.2-.3,1.6.2.2.2.3.5.2.8v2c3.9,0,7.1,3.5,7.1,7.9v1.6c0,.5-.3.9-.7.9-.4,0-.7-.2-.9-.5-.9-2.2-3.1-3.7-5.5-3.8,0,0,0,0,0,0Z"/>' : '<path d="M8.757 6 3.24 10.95a1.05 1.05 0 0 0 0 1.549l5.611 5.088m5.73-3.214v1.615a.948.948 0 0 1-1.524.845l-5.108-4.251a1.1 1.1 0 0 1 0-1.646l5.108-4.251a.95.95 0 0 1 1.524.846v1.7c3.312 0 6 2.979 6 6.654v1.329a.7.7 0 0 1-1.345.353 5.174 5.174 0 0 0-4.652-3.191l-.003-.003Z"/>';

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

module.exports = ReplyAll;
