'use strict';

var React = require('react');

function TheSingleShoulderBag(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M28 27C28 18.1813 26.7806 4 24 4C20.5714 4 20 18.1813 20 27"/><rect x="15" y="27" width="18" height="17"/><path d="M15 27H33L27.7059 36H19.7647L15 27Z"/>' : '<path d="M28 27C28 18.1813 26.7806 4 24 4C20.5714 4 20 18.1813 20 27"/><rect x="15" y="27" width="18" height="17"/><path d="M15 27H33L27.7059 36H19.7647L15 27Z"/>';

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

module.exports = TheSingleShoulderBag;
