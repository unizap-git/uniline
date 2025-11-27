'use strict';

var React = require('react');

function Increase(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M41 25C41 34.9411 32.9411 43 23 43C13.0589 43 5 34.9411 5 25C5 15.0589 13.0589 7 23 7"/><path d="M12 28.5C20.5 28.5 24 28 31 19"/><path d="M23 19H31V27"/><path d="M31 5V9.5"/><path d="M43.5 17L39 17"/><path d="M40.8892 7L37.0001 10.8891"/>' : '<path d="M41 25C41 34.9411 32.9411 43 23 43C13.0589 43 5 34.9411 5 25C5 15.0589 13.0589 7 23 7"/><path d="M12 28.5C20.5 28.5 24 28 31 19"/><path d="M23 19H31V27"/><path d="M31 5V9.5"/><path d="M43.5 17L39 17"/><path d="M40.8892 7L37.0001 10.8891"/>';

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

module.exports = Increase;
