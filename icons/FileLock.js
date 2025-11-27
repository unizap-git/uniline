'use strict';

var React = require('react');

function FileLock(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15,2l5,5"/>   <g>     <path d="M13,11.5c0-.3,0-1-1-1s-1,.7-1,1v1h2v-1Z"/>     <path d="M20,6h-4V2c0-.6-.4-1-1-1H5c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V7c0-.6-.4-1-1-1ZM16.5,17.5c0,.6-.4,1-1,1h-7c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1h.5v-1c0-1.5,1-3,3-3s3,1.5,3,3v1h.5c.6,0,1,.4,1,1v4Z"/>   </g>' : '<path d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"/><path d="M30 4L40 14"/><rect x="17" y="27" width="14" height="8"/><path d="M28 27V23C28 21.3431 27 19 24 19C21 19 20 21.3431 20 23V27"/>';

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

module.exports = FileLock;
