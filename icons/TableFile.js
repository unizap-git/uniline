'use strict';

var React = require('react');

function TableFile(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M14.2,21v-5h-4.5v5c0,.6-.4,1-1,1h6.5c-.6,0-1-.4-1-1Z"/>     <path d="M7.8,21v-5H2c-.6,0-1-.4-1-1v5c0,1.1.9,2,2,2h5.8c-.6,0-1-.4-1-1Z"/>     <path d="M2,14h5.8v-4H2c-.6,0-1-.4-1-1v6c0-.6.4-1,1-1Z"/>     <path d="M22,16h-5.8v5c0,.6-.4,1-1,1h5.8c1.1,0,2-.9,2-2v-5c0,.6-.4,1-1,1Z"/>     <rect x="9.8" y="10" width="4.5" height="4"/>     <path d="M21,2H3c-1.1,0-2,.9-2,2v5c0-.6.4-1,1-1h20c.6,0,1,.4,1,1v-5c0-1.1-.9-2-2-2Z"/>     <path d="M22,10h-5.8v4h5.8c.6,0,1,.4,1,1v-6c0,.6-.4,1-1,1Z"/>   </g>   <path d="M21,22H3c-1.1,0-2-.9-2-2V4c0-.6.4-1,1-1s1,.4,1,1v16h18V4c0-.6.4-1,1-1s1,.4,1,1v16c0,1.1-.9,2-2,2Z"/>' : '<path d="M42 6H6C4.89543 6 4 6.89543 4 8V40C4 41.1046 4.89543 42 6 42H42C43.1046 42 44 41.1046 44 40V8C44 6.89543 43.1046 6 42 6Z"/><path d="M4 18H44"/><path d="M17.5 18V42"/><path d="M30.5 18V42"/><path d="M4 30H44"/><path d="M44 8V40C44 41.1046 43.1046 42 42 42H6C4.89543 42 4 41.1046 4 40V8"/>';

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

module.exports = TableFile;
