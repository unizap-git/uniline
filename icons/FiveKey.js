'use strict';

var React = require('react');

function FiveKey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM12.5,9c2,0,3,1.3,3,4s-1.9,4.5-3.5,4.5-3-1.2-3-3,.4-1,1-1,1,.4,1,1c0,.9.5,1,1,1s1.5,0,1.5-2.5-.5-2-1-2c-1.1,0-1.9.3-2,.4-.2,0-.3.1-.5.1-.6,0-1-.4-1-1v-3.5c0-.6.4-1,1-1h4.5c.6,0,1,.4,1,1s-.4,1-1,1h-3.5v1.1c.8-.1,1.5-.1,1.5-.1Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M29 14.0093H20V21.0341C20 21 22 20 25 20C28 20 29 22.0339 29 26C29 29.9661 28 33 24 33C21 33 20 31 20 29.0078"/>';

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

module.exports = FiveKey;
