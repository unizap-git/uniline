'use strict';

var React = require('react');

function Box(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,5H4c-1.1,0-2,.9-2,2v13c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2ZM15,13h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M3,6.5l3.5-4h11l3.5,4"/>' : '<rect x="6" y="12" width="36" height="30" rx="2"/><path d="M17.9497 24.0083L29.9497 24.0083"/><path d="M6 13L13 5H35L42 13"/>';

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

module.exports = Box;
