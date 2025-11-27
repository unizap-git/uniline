'use strict';

var React = require('react');

function AlignRightOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42 42V6"/><path d="M16 6H32V12H16V6Z"/><path d="M12 21H32V27H12V21Z"/><path d="M6 36H32V42H6V36Z"/>' : '<path d="M42 42V6"/><path d="M16 6H32V12H16V6Z"/><path d="M12 21H32V27H12V21Z"/><path d="M6 36H32V42H6V36Z"/>';

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

module.exports = AlignRightOne;
