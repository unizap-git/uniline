'use strict';

var React = require('react');

function AlignTextMiddle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18 36L24 30L30 36"/><path d="M23.9999 30.9998V43.9998"/><path d="M18 12L24 18L30 12"/><path d="M23.9999 17.0002V4.00022"/><path d="M6 24.0004H42"/>' : '<path d="M18 36L24 30L30 36"/><path d="M23.9999 30.9998V43.9998"/><path d="M18 12L24 18L30 12"/><path d="M23.9999 17.0002V4.00022"/><path d="M6 24.0004H42"/>';

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

module.exports = AlignTextMiddle;
