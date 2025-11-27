'use strict';

var React = require('react');

function FileTips(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15,2l5,5"/>   <path d="M20,6h-4V2c0-.6-.4-1-1-1H5c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V7c0-.6-.4-1-1-1ZM11,9.5c0-.6.4-1,1-1s1,.4,1,1v5c0,.6-.4,1-1,1s-1-.4-1-1v-5ZM12,19.5c-.7,0-1.2-.6-1.2-1.2s.6-1.2,1.2-1.2,1.2.6,1.2,1.2-.6,1.2-1.2,1.2Z"/>' : '<path d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"/><path d="M30 4L40 14"/><path d="M24 19V29"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 39C25.3807 39 26.5 37.8807 26.5 36.5C26.5 35.1193 25.3807 34 24 34C22.6193 34 21.5 35.1193 21.5 36.5C21.5 37.8807 22.6193 39 24 39Z"/>';

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

module.exports = FileTips;
