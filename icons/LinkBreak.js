'use strict';

var React = require('react');

function LinkBreak(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M32 15H42C43.1046 15 44 15.8954 44 17V31C44 32.1046 43.1046 33 42 33H32"/><path d="M17 15H6C4.89543 15 4 15.8954 4 17V31C4 32.1046 4.89543 33 6 33H17"/><path d="M24 6V42"/><path d="M12 24H16"/><path d="M32 24H36"/>' : '<path d="M32 15H42C43.1046 15 44 15.8954 44 17V31C44 32.1046 43.1046 33 42 33H32"/><path d="M17 15H6C4.89543 15 4 15.8954 4 17V31C4 32.1046 4.89543 33 6 33H17"/><path d="M24 6V42"/><path d="M12 24H16"/><path d="M32 24H36"/>';

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

module.exports = LinkBreak;
