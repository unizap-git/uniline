'use strict';

var React = require('react');

function Merge(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="4" y="24" width="20" height="22" rx="2" transform="rotate(-45 4 24)"/><rect x="16" y="24" width="20" height="20" rx="2" transform="rotate(-45 16 24)"/>' : '<rect x="4" y="24" width="20" height="22" rx="2" transform="rotate(-45 4 24)"/><rect x="16" y="24" width="20" height="20" rx="2" transform="rotate(-45 16 24)"/>';

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

module.exports = Merge;
