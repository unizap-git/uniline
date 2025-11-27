'use strict';

var React = require('react');

function Credit(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M38 15V7H10V15"/><path d="M43 27V15H5V41H43"/><path d="M29 27L24 34L43 34"/><path d="M26 21H22"/><path d="M16 21H12"/>' : '<path d="M38 15V7H10V15"/><path d="M43 27V15H5V41H43"/><path d="M29 27L24 34L43 34"/><path d="M26 21H22"/><path d="M16 21H12"/>';

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

module.exports = Credit;
