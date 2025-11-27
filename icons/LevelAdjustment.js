'use strict';

var React = require('react');

function LevelAdjustment(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11.1139 18L14.877 3.95581L41.9229 11.2027L40.1016 18M7.89848 30L6.07715 36.7973L33.1231 44.0442L36.8862 30"/><path d="M4 24H44" stroke-dasharray="2 6"/>' : '<path d="M11.1139 18L14.877 3.95581L41.9229 11.2027L40.1016 18M7.89848 30L6.07715 36.7973L33.1231 44.0442L36.8862 30"/><path d="M4 24H44" stroke-dasharray="2 6"/>';

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

module.exports = LevelAdjustment;
