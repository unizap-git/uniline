'use strict';

var React = require('react');

function Scan(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7 24L41 24"/><path d="M24 7L24 41"/><rect x="5" y="5" width="4" height="4"/><rect x="14" y="5" width="4" height="4"/><rect x="30" y="5" width="4" height="4"/><rect x="39" y="5" width="4" height="4"/><rect x="39" y="14" width="4" height="4"/><rect x="5" y="14" width="4" height="4"/><rect x="5" y="39" width="4" height="4"/><rect x="14" y="39" width="4" height="4"/><rect x="30" y="39" width="4" height="4"/><rect x="39" y="39" width="4" height="4"/><rect x="39" y="30" width="4" height="4"/><rect x="5" y="30" width="4" height="4"/>' : '<path d="M7 24L41 24"/><path d="M24 7L24 41"/><rect x="5" y="5" width="4" height="4"/><rect x="14" y="5" width="4" height="4"/><rect x="30" y="5" width="4" height="4"/><rect x="39" y="5" width="4" height="4"/><rect x="39" y="14" width="4" height="4"/><rect x="5" y="14" width="4" height="4"/><rect x="5" y="39" width="4" height="4"/><rect x="14" y="39" width="4" height="4"/><rect x="30" y="39" width="4" height="4"/><rect x="39" y="39" width="4" height="4"/><rect x="39" y="30" width="4" height="4"/><rect x="5" y="30" width="4" height="4"/>';

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

module.exports = Scan;
