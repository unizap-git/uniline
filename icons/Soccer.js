'use strict';

var React = require('react');

function Soccer(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.8172 4.97973C7.30905 8.38921 1.57007 19.6775 4.97947 30.1758C8.38886 40.6742 19.6769 46.4233 30.175 43.0139C40.6831 39.6044 46.4221 28.3161 43.0127 17.8178C39.6033 7.30937 28.3153 1.57026 17.8172 4.97973Z" stroke-miterlimit="2"/><path d="M34 21L24 13L14 21L18 33H30L34 21Z" stroke-miterlimit="2"/><path d="M34 21L43 18" stroke-miterlimit="2"/><path d="M36 40L30 33" stroke-miterlimit="2"/><path d="M18 33L12 40" stroke-miterlimit="2"/><path d="M14 21L5 18" stroke-miterlimit="2"/><path d="M24 13V4" stroke-miterlimit="2"/>' : '<path d="M17.8172 4.97973C7.30905 8.38921 1.57007 19.6775 4.97947 30.1758C8.38886 40.6742 19.6769 46.4233 30.175 43.0139C40.6831 39.6044 46.4221 28.3161 43.0127 17.8178C39.6033 7.30937 28.3153 1.57026 17.8172 4.97973Z" stroke-miterlimit="2"/><path d="M34 21L24 13L14 21L18 33H30L34 21Z" stroke-miterlimit="2"/><path d="M34 21L43 18" stroke-miterlimit="2"/><path d="M36 40L30 33" stroke-miterlimit="2"/><path d="M18 33L12 40" stroke-miterlimit="2"/><path d="M14 21L5 18" stroke-miterlimit="2"/><path d="M24 13V4" stroke-miterlimit="2"/>';

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

module.exports = Soccer;
