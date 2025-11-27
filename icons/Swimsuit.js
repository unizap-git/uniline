'use strict';

var React = require('react');

function Swimsuit(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14 4V11"/><path d="M34 4V11"/><path d="M12 31H36V36C33 36 26 39 26 44H21C21 39 15 36 12 36V31Z"/><circle cx="14" cy="18" r="7"/><circle cx="34" cy="18" r="7"/><path d="M21 18H27"/>' : '<path d="M14 4V11"/><path d="M34 4V11"/><path d="M12 31H36V36C33 36 26 39 26 44H21C21 39 15 36 12 36V31Z"/><circle cx="14" cy="18" r="7"/><circle cx="34" cy="18" r="7"/><path d="M21 18H27"/>';

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

module.exports = Swimsuit;
