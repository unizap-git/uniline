'use strict';

var React = require('react');

function HuntingGear(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 29H4V42H44V29Z"/><path d="M4 28.9998L9.03837 4.99902H39.0205L44 28.9998"/><path d="M19 12C16.2386 12 14 14.2386 14 17C14 19.7614 16.2386 22 19 22"/><path d="M29 22C31.7614 22 34 19.7614 34 17C34 14.2386 31.7614 12 29 12"/><path d="M20 17H28"/>' : '<path d="M44 29H4V42H44V29Z"/><path d="M4 28.9998L9.03837 4.99902H39.0205L44 28.9998"/><path d="M19 12C16.2386 12 14 14.2386 14 17C14 19.7614 16.2386 22 19 22"/><path d="M29 22C31.7614 22 34 19.7614 34 17C34 14.2386 31.7614 12 29 12"/><path d="M20 17H28"/>';

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

module.exports = HuntingGear;
