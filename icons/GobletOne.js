'use strict';

var React = require('react');

function GobletOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-1e264df45e04bcb)"><path d="M5.73633 24.1211L10.6861 29.0709C15.7629 34.1477 23.9941 34.1477 29.0709 29.0709V29.0709C34.1477 23.994 34.1477 15.7629 29.0709 10.6861L24.1211 5.73632"/><path d="M30 29.9998L35.9998 35.9998" stroke-miterlimit="2"/><ellipse cx="13.9996" cy="13.9998" rx="13" ry="7" transform="rotate(-45 13.9996 13.9998)"/><ellipse cx="37.9997" cy="37.9998" rx="6" ry="3" transform="rotate(-45 37.9997 37.9998)"/></g><defs><clipPath id="icon-1e264df45e04bcb"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-6c7aab6645e04bcb)"><path d="M5.73633 24.1211L10.6861 29.0709C15.7629 34.1477 23.9941 34.1477 29.0709 29.0709V29.0709C34.1477 23.994 34.1477 15.7629 29.0709 10.6861L24.1211 5.73632"/><path d="M30 29.9998L35.9998 35.9998" stroke-miterlimit="2"/><ellipse cx="13.9996" cy="13.9998" rx="13" ry="7" transform="rotate(-45 13.9996 13.9998)"/><ellipse cx="37.9997" cy="37.9998" rx="6" ry="3" transform="rotate(-45 37.9997 37.9998)"/></g><defs><clipPath id="icon-6c7aab6645e04bcb"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = GobletOne;
