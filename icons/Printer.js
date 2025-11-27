'use strict';

var React = require('react');

function Printer(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M37 32H11V44H37V32Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 20H44V38H37.0173V32H10.9805V38H4V20Z"/><path d="M38 4H10V20H38V4Z"/>' : '<path d="M37 32H11V44H37V32Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 20H44V38H37.0173V32H10.9805V38H4V20Z"/><path d="M38 4H10V20H38V4Z"/>';

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

module.exports = Printer;
