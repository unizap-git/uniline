'use strict';

var React = require('react');

function Capricornus(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18 11C18 7.68629 15.3137 5 12 5C8.68629 5 6 7.68629 6 11"/><path d="M18 11V29"/><path d="M30 11C30 7.68629 27.3137 5 24 5C20.6863 5 18 7.68629 18 11"/><path d="M30 11V31V35.75C30 35.75 30 43 22 43"/><circle cx="36" cy="30" r="6"/>' : '<path d="M18 11C18 7.68629 15.3137 5 12 5C8.68629 5 6 7.68629 6 11"/><path d="M18 11V29"/><path d="M30 11C30 7.68629 27.3137 5 24 5C20.6863 5 18 7.68629 18 11"/><path d="M30 11V31V35.75C30 35.75 30 43 22 43"/><circle cx="36" cy="30" r="6"/>';

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

module.exports = Capricornus;
