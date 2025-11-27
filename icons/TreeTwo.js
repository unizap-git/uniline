'use strict';

var React = require('react');

function TreeTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11 24C11 24 8.00001 26 8 30C7.99998 36 18 38 18 38"/><path d="M37 24C37 24 40 26 40 30C40 36 30 38 30 38"/><path d="M24 15.999L24 43.999"/><path d="M19.126 13.5C18.4174 12.5149 18 11.3062 18 10C18 6.68629 20.6863 4 24 4C27.3137 4 30 6.68629 30 10C30 11.3062 29.5826 12.5149 28.874 13.5"/><path d="M13 13C13 13 9 15.5 9 19C9 22.5 12 25 12 25"/><path d="M35 13C35 13 39 15.5 39 19C39 22.5 36 25 36 25"/>' : '<path d="M11 24C11 24 8.00001 26 8 30C7.99998 36 18 38 18 38"/><path d="M37 24C37 24 40 26 40 30C40 36 30 38 30 38"/><path d="M24 15.999L24 43.999"/><path d="M19.126 13.5C18.4174 12.5149 18 11.3062 18 10C18 6.68629 20.6863 4 24 4C27.3137 4 30 6.68629 30 10C30 11.3062 29.5826 12.5149 28.874 13.5"/><path d="M13 13C13 13 9 15.5 9 19C9 22.5 12 25 12 25"/><path d="M35 13C35 13 39 15.5 39 19C39 22.5 36 25 36 25"/>';

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

module.exports = TreeTwo;
