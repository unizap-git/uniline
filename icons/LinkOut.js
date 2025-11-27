'use strict';

var React = require('react');

function LinkOut(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16 12V4H32V12"/><path d="M32 36V44H16V36"/><path d="M18 24L4 24"/><path d="M44 24L30 24"/><path d="M24 34V14"/><path d="M39 19L44 24L39 29"/><path d="M9 19L4 24L9 29"/>' : '<path d="M16 12V4H32V12"/><path d="M32 36V44H16V36"/><path d="M18 24L4 24"/><path d="M44 24L30 24"/><path d="M24 34V14"/><path d="M39 19L44 24L39 29"/><path d="M9 19L4 24L9 29"/>';

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

module.exports = LinkOut;
