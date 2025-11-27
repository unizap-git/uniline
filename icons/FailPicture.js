'use strict';

var React = require('react');

function FailPicture(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="7" y="7" width="34" height="34" rx="3"/><path d="M41 26L34.3877 21.0408C33.5914 20.4436 32.4772 20.5228 31.7735 21.2265L27 26"/><path d="M7 28L18 18"/><path d="M6 6L42 42"/>' : '<rect x="7" y="7" width="34" height="34" rx="3"/><path d="M41 26L34.3877 21.0408C33.5914 20.4436 32.4772 20.5228 31.7735 21.2265L27 26"/><path d="M7 28L18 18"/><path d="M6 6L42 42"/>';

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

module.exports = FailPicture;
