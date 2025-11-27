'use strict';

var React = require('react');

function Acoustic(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 3.99976V43.9998"/><path d="M34 11.9998V35.9998"/><path d="M4 17.9998V29.9998"/><path d="M44 17.9998V29.9998"/><path d="M14 11.9998V35.9998"/>' : '<path d="M24 3.99976V43.9998"/><path d="M34 11.9998V35.9998"/><path d="M4 17.9998V29.9998"/><path d="M44 17.9998V29.9998"/><path d="M14 11.9998V35.9998"/>';

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

module.exports = Acoustic;
