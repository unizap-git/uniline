'use strict';

var React = require('react');

function CrownThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13 42H35L41 21L31 26L24 12L17 26L7 21L13 42Z"/><circle cx="7" cy="18" r="3"/><circle cx="24" cy="9" r="3"/><circle cx="41" cy="18" r="3"/>' : '<path d="M13 42H35L41 21L31 26L24 12L17 26L7 21L13 42Z"/><circle cx="7" cy="18" r="3"/><circle cx="24" cy="9" r="3"/><circle cx="41" cy="18" r="3"/>';

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

module.exports = CrownThree;
