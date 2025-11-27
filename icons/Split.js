'use strict';

var React = require('react');

function Split(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19 10V7C19 5.89543 19.8954 5 21 5H41C42.1046 5 43 5.89543 43 7V29C43 30.1046 42.1046 31 41 31H37"/><rect x="5" y="18" width="24" height="24" rx="2"/>' : '<path d="M19 10V7C19 5.89543 19.8954 5 21 5H41C42.1046 5 43 5.89543 43 7V29C43 30.1046 42.1046 31 41 31H37"/><rect x="5" y="18" width="24" height="24" rx="2"/>';

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

module.exports = Split;
