'use strict';

var React = require('react');

function UpAndDown(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12 36V44H44V12H36V20H28V28H20V36H12Z"/><path d="M18 13L27 4"/><path d="M21 4H27V10"/><path d="M10 27H4V21"/><path d="M13 18L4 27"/>' : '<path d="M12 36V44H44V12H36V20H28V28H20V36H12Z"/><path d="M18 13L27 4"/><path d="M21 4H27V10"/><path d="M10 27H4V21"/><path d="M13 18L4 27"/>';

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

module.exports = UpAndDown;
