'use strict';

var React = require('react');

function RulerOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.5,20.5h-10"/>   <path d="M20.2,2c-.2-.3-.5-.5-.8-.5h-8.9c-.4,0-.8.2-.9.6L1.6,20.1c-.1.3-.1.7,0,1s.5.5.8.5h8.8c.4,0,.8-.2.9-.6L20.3,2.9c.1-.3.1-.7,0-1ZM9,15.9h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1ZM10.6,12.2h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1ZM12.4,8.3h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M10.5,2.5L2.5,20.5" stroke-miterlimit="2"/>' : '<path d="M43 41H23"/><path d="M38.7183 5H21L5 41H22.662L38.7183 5Z"/><path d="M9.95898 29.8823H17.9872"/><path d="M13.2646 22.4707H21.2928"/><path d="M16.7744 14.6H24.8026"/><path d="M21 5L5 41"/>';

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

module.exports = RulerOne;
