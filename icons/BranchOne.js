'use strict';

var React = require('react');

function BranchOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 33V15"/><rect x="10" y="9" width="28" height="6"/><path d="M8 32L14 25H33.9743L40 32"/><rect x="4" y="33" width="8" height="8"/><rect x="20" y="33" width="8" height="8"/><rect x="36" y="33" width="8" height="8"/>' : '<path d="M24 33V15"/><rect x="10" y="9" width="28" height="6"/><path d="M8 32L14 25H33.9743L40 32"/><rect x="4" y="33" width="8" height="8"/><rect x="20" y="33" width="8" height="8"/><rect x="36" y="33" width="8" height="8"/>';

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

module.exports = BranchOne;
