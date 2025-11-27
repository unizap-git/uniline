'use strict';

var React = require('react');

function HammerAndAnvil(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 14C6 4 14 4 14 4V24H6C6 24 6 24 6 14Z"/><rect x="14" y="10" width="28" height="6"/><path d="M6 30H42C42 30 42 38 36 38C30 38 29 38 29 38L31 44H13L15 38H6V30Z"/>' : '<path d="M6 14C6 4 14 4 14 4V24H6C6 24 6 24 6 14Z"/><rect x="14" y="10" width="28" height="6"/><path d="M6 30H42C42 30 42 38 36 38C30 38 29 38 29 38L31 44H13L15 38H6V30Z"/>';

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

module.exports = HammerAndAnvil;
