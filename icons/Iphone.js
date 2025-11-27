'use strict';

var React = require('react');

function Iphone(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17,1H7c-1.4,0-2.5,1.1-2.5,2.5v17c0,1.4,1.1,2.5,2.5,2.5h10c1.4,0,2.5-1.1,2.5-2.5V3.5c0-1.4-1.1-2.5-2.5-2.5ZM11,4h2c.6,0,1,.4,1,1s-.4,1-1,1h-2c-.6,0-1-.4-1-1s.4-1,1-1ZM14,20h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="11" y="4" width="26" height="40" rx="3"/><path d="M22 10L26 10"/><path d="M20 38H28"/>';

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

module.exports = Iphone;
