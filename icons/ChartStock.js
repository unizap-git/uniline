'use strict';

var React = require('react');

function ChartStock(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="6" y="16" width="8" height="16"/><path d="M10 6V16"/><path d="M10 32V42"/><rect x="34" y="16" width="8" height="16"/><path d="M38 6V16"/><path d="M38 32V42"/><rect x="20" y="14" width="8" height="16"/><path d="M24 4V14"/><path d="M24 30V40"/>' : '<rect x="6" y="16" width="8" height="16"/><path d="M10 6V16"/><path d="M10 32V42"/><rect x="34" y="16" width="8" height="16"/><path d="M38 6V16"/><path d="M38 32V42"/><rect x="20" y="14" width="8" height="16"/><path d="M24 4V14"/><path d="M24 30V40"/>';

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

module.exports = ChartStock;
