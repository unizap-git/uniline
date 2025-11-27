'use strict';

var React = require('react');

function BlockTen(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 6H36V18H24V6Z"/><path d="M24 6H36V18H24V6Z"/><path d="M12 6H24V18H12V6Z"/><path d="M12 30H24V42H12V30Z"/><path d="M12 18H24V30H12V18Z"/>' : '<path d="M24 6H36V18H24V6Z"/><path d="M24 6H36V18H24V6Z"/><path d="M12 6H24V18H12V6Z"/><path d="M12 30H24V42H12V30Z"/><path d="M12 18H24V30H12V18Z"/>';

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

module.exports = BlockTen;
