'use strict';

var React = require('react');

function FZeroKey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15,9c-.6,0-1,.4-1,1v4c0,.6.4,1,1,1s1-.4,1-1v-4c0-.6-.4-1-1-1Z"/>   <path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM10.5,11c.6,0,1,.4,1,1s-.4,1-1,1h-2.5v3c0,.6-.4,1-1,1s-1-.4-1-1v-8c0-.6.4-1,1-1h3.5c.6,0,1,.4,1,1s-.4,1-1,1h-2.5v2h2.5ZM18,14c0,1.7-1.3,3-3,3s-3-1.3-3-3v-4c0-1.7,1.3-3,3-3s3,1.3,3,3v4Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><rect x="26" y="16" width="8" height="16" rx="4"/><path d="M21 16H14V32"/><path d="M14 24H21"/>';

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

module.exports = FZeroKey;
