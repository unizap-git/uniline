'use strict';

var React = require('react');

function Tv(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="5" y="14" width="38" height="28" rx="2"/><path d="M24 14L38 6"/><path d="M23 14L10 6"/><path d="M35 20L35 26"/><rect x="33" y="32" width="4" height="4" rx="2"/>' : '<rect x="5" y="14" width="38" height="28" rx="2"/><path d="M24 14L38 6"/><path d="M23 14L10 6"/><path d="M35 20L35 26"/><rect x="33" y="32" width="4" height="4" rx="2"/>';

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

module.exports = Tv;
