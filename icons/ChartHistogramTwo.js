'use strict';

var React = require('react');

function ChartHistogramTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 42H44H4Z"/><path d="M4 42H44"/><rect x="8" y="28" width="6" height="14"/><rect x="21" y="18" width="6" height="24"/><rect x="34" y="6" width="6" height="36"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 42H44H4Z"/><path d="M4 42H44"/><rect x="8" y="28" width="6" height="14"/><rect x="21" y="18" width="6" height="24"/><rect x="34" y="6" width="6" height="36"/>';

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

module.exports = ChartHistogramTwo;
