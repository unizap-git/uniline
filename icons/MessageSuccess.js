'use strict';

var React = require('react');

function MessageSuccess(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M25.5 36H21L11 41V36H4V6H44V17"/><path d="M12 14H15L18 14"/><path d="M12 20H18L24 20"/><path d="M29 30L35 35L44 24"/>' : '<path d="M25.5 36H21L11 41V36H4V6H44V17"/><path d="M12 14H15L18 14"/><path d="M12 20H18L24 20"/><path d="M29 30L35 35L44 24"/>';

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

module.exports = MessageSuccess;
