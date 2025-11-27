'use strict';

var React = require('react');

function Tower(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="17" y="31" width="14" height="13"/><rect x="19" y="17" width="10" height="14"/><rect x="21" y="4" width="6" height="13"/><path d="M4 44H44"/>' : '<rect x="17" y="31" width="14" height="13"/><rect x="19" y="17" width="10" height="14"/><rect x="21" y="4" width="6" height="13"/><path d="M4 44H44"/>';

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

module.exports = Tower;
