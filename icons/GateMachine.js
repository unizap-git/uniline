'use strict';

var React = require('react');

function GateMachine(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="6" y="42" width="8" height="6" transform="rotate(-90 6 42)"/><rect x="36" y="42" width="8" height="6" transform="rotate(-90 36 42)"/><path d="M24 14V17"/><path d="M24 6V8"/><path d="M24 26V30"/><path d="M9 6V34"/><path d="M39 6V34"/><path d="M24 38V42"/><path d="M20 21H9V30L20 21Z"/><path d="M28 21H39V30L28 21Z"/><path d="M18 15L9 15"/><path d="M30 15L39 15"/>' : '<rect x="6" y="42" width="8" height="6" transform="rotate(-90 6 42)"/><rect x="36" y="42" width="8" height="6" transform="rotate(-90 36 42)"/><path d="M24 14V17"/><path d="M24 6V8"/><path d="M24 26V30"/><path d="M9 6V34"/><path d="M39 6V34"/><path d="M24 38V42"/><path d="M20 21H9V30L20 21Z"/><path d="M28 21H39V30L28 21Z"/><path d="M18 15L9 15"/><path d="M30 15L39 15"/>';

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

module.exports = GateMachine;
