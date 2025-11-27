'use strict';

var React = require('react');

function StockMarket(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="6" y="20" width="8" height="14"/><rect x="20" y="14" width="8" height="26"/><path d="M24 44V40"/><rect x="34" y="12" width="8" height="9"/><path d="M10 20V10"/><path d="M38 34V21"/><path d="M38 12V4"/>' : '<rect x="6" y="20" width="8" height="14"/><rect x="20" y="14" width="8" height="26"/><path d="M24 44V40"/><rect x="34" y="12" width="8" height="9"/><path d="M10 20V10"/><path d="M38 34V21"/><path d="M38 12V4"/>';

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

module.exports = StockMarket;
