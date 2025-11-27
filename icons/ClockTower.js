'use strict';

var React = require('react');

function ClockTower(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 44H44"/><rect x="27" y="32" width="12" height="12"/><path d="M38 10V16"/><path d="M28 10V16"/><path d="M28 10L33 4L38 10H28Z"/><path d="M25 20H11C9.89543 20 9 20.8954 9 22V44"/><path d="M15 29L19 29"/><path d="M15 36L19 36"/><rect x="25" y="16" width="16" height="16" rx="1"/><circle cx="33" cy="24" r="3"/><path d="M33 32V42"/>' : '<path d="M4 44H44"/><rect x="27" y="32" width="12" height="12"/><path d="M38 10V16"/><path d="M28 10V16"/><path d="M28 10L33 4L38 10H28Z"/><path d="M25 20H11C9.89543 20 9 20.8954 9 22V44"/><path d="M15 29L19 29"/><path d="M15 36L19 36"/><rect x="25" y="16" width="16" height="16" rx="1"/><circle cx="33" cy="24" r="3"/><path d="M33 32V42"/>';

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

module.exports = ClockTower;
