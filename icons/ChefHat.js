'use strict';

var React = require('react');

function ChefHat(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="12" y="34" width="24" height="8"/><path d="M29 34V20"/><path d="M22 34V26"/><path d="M12 25V34H36V25C36 25 41 22 41 17C41 12 37 10 32 10C32 8 29 4 24 4C19 4 16 8 16 10C12 10 7 12 7 17C7 22 12 25 12 25Z"/>' : '<rect x="12" y="34" width="24" height="8"/><path d="M29 34V20"/><path d="M22 34V26"/><path d="M12 25V34H36V25C36 25 41 22 41 17C41 12 37 10 32 10C32 8 29 4 24 4C19 4 16 8 16 10C12 10 7 12 7 17C7 22 12 25 12 25Z"/>';

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

module.exports = ChefHat;
