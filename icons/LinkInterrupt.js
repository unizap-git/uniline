'use strict';

var React = require('react');

function LinkInterrupt(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M27 14H42C43.1046 14 44 14.8954 44 16V30C44 31.1046 43.1046 32 42 32H38"/><path d="M11 14H6C4.89543 14 4 14.8954 4 16V30C4 31.1046 4.89543 32 6 32H21"/><path d="M14 6L34 40"/><path d="M32 23H36"/><path d="M12 23H16"/>' : '<path d="M27 14H42C43.1046 14 44 14.8954 44 16V30C44 31.1046 43.1046 32 42 32H38"/><path d="M11 14H6C4.89543 14 4 14.8954 4 16V30C4 31.1046 4.89543 32 6 32H21"/><path d="M14 6L34 40"/><path d="M32 23H36"/><path d="M12 23H16"/>';

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

module.exports = LinkInterrupt;
