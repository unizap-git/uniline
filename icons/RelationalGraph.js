'use strict';

var React = require('react');

function RelationalGraph(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 35H44"/><path d="M24 32C24 27.5817 20.1944 24 15.5 24C10.8056 24 7 27.5817 7 32"/><path d="M41 32C41 20.9543 33.3888 12 24 12C14.6112 12 7 20.9543 7 32"/><circle cx="41" cy="35" r="3"/><circle cx="24" cy="35" r="3"/><circle cx="7" cy="35" r="3"/>' : '<path d="M4 35H44"/><path d="M24 32C24 27.5817 20.1944 24 15.5 24C10.8056 24 7 27.5817 7 32"/><path d="M41 32C41 20.9543 33.3888 12 24 12C14.6112 12 7 20.9543 7 32"/><circle cx="41" cy="35" r="3"/><circle cx="24" cy="35" r="3"/><circle cx="7" cy="35" r="3"/>';

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

module.exports = RelationalGraph;
