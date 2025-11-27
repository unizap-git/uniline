'use strict';

var React = require('react');

function Makeups(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4"/><path d="M37.6098 9.47214L37.8652 10.2582H38.6917L38.023 10.744L38.2784 11.5301L37.6098 11.0443L36.9411 11.5301L37.1965 10.744L36.5278 10.2582H37.3543L37.6098 9.47214Z"/><path d="M16 31C16 31 18 35 24 35C30 35 32 31 32 31"/><circle cx="17" cy="22" r="3"/><circle cx="31" cy="22" r="3"/>' : '<path d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4"/><path d="M37.6098 9.47214L37.8652 10.2582H38.6917L38.023 10.744L38.2784 11.5301L37.6098 11.0443L36.9411 11.5301L37.1965 10.744L36.5278 10.2582H37.3543L37.6098 9.47214Z"/><path d="M16 31C16 31 18 35 24 35C30 35 32 31 32 31"/><circle cx="17" cy="22" r="3"/><circle cx="31" cy="22" r="3"/>';

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

module.exports = Makeups;
