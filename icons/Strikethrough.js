'use strict';

var React = require('react');

function Strikethrough(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5 24H43"/><path d="M24 24C40 30 34 44 24 44C13.9999 44 12 36 12 36"/><path d="M35.9999 12C35.9999 12 33 4 23.9999 4C14.9999 4 11.4359 11.5995 15.6096 18"/><path d="M12 36C12 36 15.9999 44 24 44C32 44 36.564 36.4005 32.3903 30"/>' : '<path d="M5 24H43"/><path d="M24 24C40 30 34 44 24 44C13.9999 44 12 36 12 36"/><path d="M35.9999 12C35.9999 12 33 4 23.9999 4C14.9999 4 11.4359 11.5995 15.6096 18"/><path d="M12 36C12 36 15.9999 44 24 44C32 44 36.564 36.4005 32.3903 30"/>';

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

module.exports = Strikethrough;
