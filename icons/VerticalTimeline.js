'use strict';

var React = require('react');

function VerticalTimeline(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3.99999 5H44"/><path d="M3.99999 43H44"/><path d="M7.99999 36V43"/><path d="M12 28H3.99999V36H12V28Z"/><path d="M28 20H20V28H28V20Z"/><path d="M44 12H36V20H44V12Z"/><path d="M40 20V43"/><path d="M7.99999 12V13"/><path d="M7.99999 20V21"/><path d="M23 12V13"/><path d="M24 28V43"/>' : '<path d="M3.99999 5H44"/><path d="M3.99999 43H44"/><path d="M7.99999 36V43"/><path d="M12 28H3.99999V36H12V28Z"/><path d="M28 20H20V28H28V20Z"/><path d="M44 12H36V20H44V12Z"/><path d="M40 20V43"/><path d="M7.99999 12V13"/><path d="M7.99999 20V21"/><path d="M23 12V13"/><path d="M24 28V43"/>';

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

module.exports = VerticalTimeline;
