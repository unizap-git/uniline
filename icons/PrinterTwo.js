'use strict';

var React = require('react');

function PrinterTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M38 20V8C38 6.89543 37.1046 6 36 6H12C10.8954 6 10 6.89543 10 8V20"/><rect x="6" y="20" width="36" height="22" rx="2"/><path d="M20 34H35V42H20V34Z"/><path d="M12 26H15"/>' : '<path d="M38 20V8C38 6.89543 37.1046 6 36 6H12C10.8954 6 10 6.89543 10 8V20"/><rect x="6" y="20" width="36" height="22" rx="2"/><path d="M20 34H35V42H20V34Z"/><path d="M12 26H15"/>';

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

module.exports = PrinterTwo;
