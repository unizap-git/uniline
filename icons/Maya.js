'use strict';

var React = require('react');

function Maya(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="4" y="34" width="40" height="8"/><rect x="7" y="27" width="34" height="7"/><rect x="10" y="21" width="28" height="6"/><rect x="13" y="15" width="22" height="6"/><rect x="20" y="7" width="8" height="8"/><path d="M20 15L14 42"/><path d="M28 15L34 42"/>' : '<rect x="4" y="34" width="40" height="8"/><rect x="7" y="27" width="34" height="7"/><rect x="10" y="21" width="28" height="6"/><rect x="13" y="15" width="22" height="6"/><rect x="20" y="7" width="8" height="8"/><path d="M20 15L14 42"/><path d="M28 15L34 42"/>';

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

module.exports = Maya;
