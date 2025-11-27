'use strict';

var React = require('react');

function AddressBook(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 36V44H40V4H8V12"/><path d="M6 30H10"/><path d="M6 24H10"/><path d="M6 18H10"/><circle cx="24" cy="17" r="4"/><path d="M32 35C32 30.5817 28.4183 27 24 27C19.5817 27 16 30.5817 16 35"/>' : '<path d="M8 36V44H40V4H8V12"/><path d="M6 30H10"/><path d="M6 24H10"/><path d="M6 18H10"/><circle cx="24" cy="17" r="4"/><path d="M32 35C32 30.5817 28.4183 27 24 27C19.5817 27 16 30.5817 16 35"/>';

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

module.exports = AddressBook;
