'use strict';

var React = require('react');

function Selfie(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-3dcb8cf7e746d3d5)"><path d="M29.2336 6.97919C32.9477 5.4122 40.5099 4.51028 43.0279 12.8715C45.5458 21.2327 34.7205 27.4827 35.0016 20.9696C35.2827 14.4564 42.9968 19.8176 42.8317 24.5317C42.6666 29.2458 37.7695 29.7638 37.7695 29.7638"/><rect x="4.24121" y="15.7776" width="26" height="12" rx="2" transform="rotate(-30 4.24121 15.7776)"/><path d="M21.5 19.6699L29 32.6603"/><rect x="26.4014" y="34.1602" width="6" height="10" rx="3" transform="rotate(-30 26.4014 34.1602)"/><path d="M11.4014 8.1795L16.5975 5.1795"/><path d="M21.9014 26.366L27.0975 23.366"/></g><defs><clipPath id="icon-3dcb8cf7e746d3d5"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-a33c143e746d3d5)"><path d="M29.2336 6.97919C32.9477 5.4122 40.5099 4.51028 43.0279 12.8715C45.5458 21.2327 34.7205 27.4827 35.0016 20.9696C35.2827 14.4564 42.9968 19.8176 42.8317 24.5317C42.6666 29.2458 37.7695 29.7638 37.7695 29.7638"/><rect x="4.24121" y="15.7776" width="26" height="12" rx="2" transform="rotate(-30 4.24121 15.7776)"/><path d="M21.5 19.6699L29 32.6603"/><rect x="26.4014" y="34.1602" width="6" height="10" rx="3" transform="rotate(-30 26.4014 34.1602)"/><path d="M11.4014 8.1795L16.5975 5.1795"/><path d="M21.9014 26.366L27.0975 23.366"/></g><defs><clipPath id="icon-a33c143e746d3d5"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = Selfie;
