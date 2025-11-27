'use strict';

var React = require('react');

function SixKey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="12.2" cy="13.8" r="1.7"/>   <path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM12.2,17.5c-2.1,0-3.8-1.7-3.8-3.8s0-.1,0-.2c0,0,0,0,0,0v-3.5c0-2.2,1.7-4,3.8-4s2.9,1,3.5,2.5c.2.5,0,1.1-.6,1.3-.5.2-1.1,0-1.3-.6-.3-.7-.9-1.2-1.6-1.2s-1.8.9-1.8,2v.5c.5-.3,1.1-.5,1.8-.5,2.1,0,3.8,1.7,3.8,3.8s-1.7,3.8-3.8,3.8Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M24.5 33C27.5376 33 30 30.5376 30 27.5C30 24.4624 27.5376 22 24.5 22C21.4624 22 19 24.4624 19 27.5C19 30.5376 21.4624 33 24.5 33Z"/><path d="M29.5962 17.7392C28.7778 15.5461 26.8044 14 24.5 14C21.4624 14 19 16.6863 19 20V27"/>';

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

module.exports = SixKey;
