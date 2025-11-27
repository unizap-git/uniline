'use strict';

var React = require('react');

function Pumpkin(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="4" y="14" width="40" height="26" rx="13"/><ellipse cx="24" cy="27" rx="8" ry="13"/><path d="M30 6H27C25.3431 6 24 7.34315 24 9V14"/>' : '<rect x="4" y="14" width="40" height="26" rx="13"/><ellipse cx="24" cy="27" rx="8" ry="13"/><path d="M30 6H27C25.3431 6 24 7.34315 24 9V14"/>';

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

module.exports = Pumpkin;
