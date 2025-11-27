'use strict';

var React = require('react');

function Textarea(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16 4C23 4 24 10 24 12C24 14 24 34 24 36C24 38 23 44 16 44"/><path d="M32 4C26 4 24 10 24 12C24 14 24 34 24 36C24 38 25 44 32 44"/><path d="M17 24L31 24"/>' : '<path d="M16 4C23 4 24 10 24 12C24 14 24 34 24 36C24 38 23 44 16 44"/><path d="M32 4C26 4 24 10 24 12C24 14 24 34 24 36C24 38 25 44 32 44"/><path d="M17 24L31 24"/>';

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

module.exports = Textarea;
