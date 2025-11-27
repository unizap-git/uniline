'use strict';

var React = require('react');

function LinkLeft(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 12V4H40V12"/><path d="M40 36V44H24V36"/><path d="M24 24L4 24"/><path d="M32 34V14"/><path d="M12 16L4 24L12 32"/>' : '<path d="M24 12V4H40V12"/><path d="M40 36V44H24V36"/><path d="M24 24L4 24"/><path d="M32 34V14"/><path d="M12 16L4 24L12 32"/>';

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

module.exports = LinkLeft;
