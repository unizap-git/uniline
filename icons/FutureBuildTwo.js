'use strict';

var React = require('react');

function FutureBuildTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 44H44"/><ellipse cx="24.5" cy="7" rx="13.5" ry="3"/><path d="M16 9C16 9 20.1593 17.8828 21 24C22.0687 31.7763 20 44 20 44"/><path d="M32.2266 9C32.2266 9 28.0673 17.8828 27.2266 24C26.1578 31.7763 28.0006 44 28.0006 44"/>' : '<path d="M4 44H44"/><ellipse cx="24.5" cy="7" rx="13.5" ry="3"/><path d="M16 9C16 9 20.1593 17.8828 21 24C22.0687 31.7763 20 44 20 44"/><path d="M32.2266 9C32.2266 9 28.0673 17.8828 27.2266 24C26.1578 31.7763 28.0006 44 28.0006 44"/>';

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

module.exports = FutureBuildTwo;
