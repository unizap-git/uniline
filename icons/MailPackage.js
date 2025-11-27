'use strict';

var React = require('react');

function MailPackage(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 42H44V30V18H24H4V30V42Z"/><path d="M4 18L24 33L44 18"/><path d="M24 18H4V33"/><path d="M44 33V18H24"/><path d="M12 12H36"/><path d="M16 6H32"/>' : '<path d="M4 42H44V30V18H24H4V30V42Z"/><path d="M4 18L24 33L44 18"/><path d="M24 18H4V33"/><path d="M44 33V18H24"/><path d="M12 12H36"/><path d="M16 6H32"/>';

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

module.exports = MailPackage;
