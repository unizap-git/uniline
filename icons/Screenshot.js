'use strict';

var React = require('react');

function Screenshot(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10 42C13.3137 42 16 39.3137 16 36C16 32.6863 13.3137 30 10 30C6.68629 30 4 32.6863 4 36C4 39.3137 6.68629 42 10 42Z"/><path d="M40.0615 8C24 28.4331 15.8047 38.6805 14.2426 40.2426C11.8995 42.5858 8.10047 42.5858 5.75732 40.2426"/><path d="M38 42C41.3137 42 44 39.3137 44 36C44 32.6863 41.3137 30 38 30C34.6863 30 32 32.6863 32 36C32 39.3137 34.6863 42 38 42Z"/><path d="M42.2424 40.2426C39.8993 42.5858 36.1003 42.5858 33.7571 40.2426C32.195 38.6805 23.9998 28.446 8.00049 8"/>' : '<path d="M10 42C13.3137 42 16 39.3137 16 36C16 32.6863 13.3137 30 10 30C6.68629 30 4 32.6863 4 36C4 39.3137 6.68629 42 10 42Z"/><path d="M40.0615 8C24 28.4331 15.8047 38.6805 14.2426 40.2426C11.8995 42.5858 8.10047 42.5858 5.75732 40.2426"/><path d="M38 42C41.3137 42 44 39.3137 44 36C44 32.6863 41.3137 30 38 30C34.6863 30 32 32.6863 32 36C32 39.3137 34.6863 42 38 42Z"/><path d="M42.2424 40.2426C39.8993 42.5858 36.1003 42.5858 33.7571 40.2426C32.195 38.6805 23.9998 28.446 8.00049 8"/>';

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

module.exports = Screenshot;
