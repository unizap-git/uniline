'use strict';

var React = require('react');

function ReadBook(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 21V44C20.7086 40 10.6286 40 6 40V18C15.8743 18 22.1143 20 24 21Z"/><path d="M24 21V44C27.2914 40 37.3714 40 42 40V18C32.1257 18 25.8857 20 24 21Z"/><circle cx="24" cy="12" r="8"/>' : '<path d="M24 21V44C20.7086 40 10.6286 40 6 40V18C15.8743 18 22.1143 20 24 21Z"/><path d="M24 21V44C27.2914 40 37.3714 40 42 40V18C32.1257 18 25.8857 20 24 21Z"/><circle cx="24" cy="12" r="8"/>';

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

module.exports = ReadBook;
