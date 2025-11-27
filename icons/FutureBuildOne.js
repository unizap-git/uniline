'use strict';

var React = require('react');

function FutureBuildOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13.9994 24C15.2168 15.7039 23.9994 5 23.9994 5C23.9994 5 32.7819 15.7039 33.9994 24C35.09 31.4323 30.9994 44 30.9994 44H16.9994C16.9994 44 12.9087 31.4323 13.9994 24Z"/><path d="M18 14H30"/><path d="M15 20H33"/><path d="M14 26L34 26"/><path d="M15 32H33"/><path d="M16 38H32"/><path d="M4 44H44"/><path d="M24 4V6"/>' : '<path d="M13.9994 24C15.2168 15.7039 23.9994 5 23.9994 5C23.9994 5 32.7819 15.7039 33.9994 24C35.09 31.4323 30.9994 44 30.9994 44H16.9994C16.9994 44 12.9087 31.4323 13.9994 24Z"/><path d="M18 14H30"/><path d="M15 20H33"/><path d="M14 26L34 26"/><path d="M15 32H33"/><path d="M16 38H32"/><path d="M4 44H44"/><path d="M24 4V6"/>';

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

module.exports = FutureBuildOne;
