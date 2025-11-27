'use strict';

var React = require('react');

function FloorTile(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M28 6L6 28"/><path d="M42 20L20 42"/><path d="M40 8L8 40"/><path d="M12 22L19 29"/><path d="M29 19L36 26"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M28 6L6 28"/><path d="M42 20L20 42"/><path d="M40 8L8 40"/><path d="M12 22L19 29"/><path d="M29 19L36 26"/>';

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

module.exports = FloorTile;
