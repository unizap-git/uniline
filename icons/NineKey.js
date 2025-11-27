'use strict';

var React = require('react');

function NineKey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="12.2" cy="9.8" r="1.7"/>   <path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM16,10v3.5c0,2.2-1.7,4-3.8,4s-3.1-1-3.7-2.7c-.2-.5,0-1.1.6-1.3.5-.2,1.1,0,1.3.6.3.9.9,1.3,1.8,1.3s1.8-.9,1.8-2v-.5c-.5.3-1.1.5-1.8.5-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8,3.8,1.7,3.8,3.8,0,.1,0,.2c0,0,0,0,0,0Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M24.5 14C21.4624 14 19 16.4624 19 19.5C19 22.5376 21.4624 25 24.5 25C27.5376 25 30 22.5376 30 19.5C30 16.4624 27.5376 14 24.5 14Z"/><path d="M19 29C19.8184 31.1932 21.5476 33 24.5 33C27.5376 33 30 30.3137 30 27V20"/>';

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

module.exports = NineKey;
