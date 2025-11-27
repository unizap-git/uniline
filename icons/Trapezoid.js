'use strict';

var React = require('react');

function Trapezoid(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M31.7944 8H16.2056C14.8934 8 13.7335 8.85275 13.3421 10.1052L5.21713 36.1052C4.61345 38.037 6.05665 40 8.08057 40H39.9194C41.9433 40 43.3866 38.037 42.7829 36.1052L34.6579 10.1052C34.2665 8.85275 33.1066 8 31.7944 8Z"/>' : '<path d="M31.7944 8H16.2056C14.8934 8 13.7335 8.85275 13.3421 10.1052L5.21713 36.1052C4.61345 38.037 6.05665 40 8.08057 40H39.9194C41.9433 40 43.3866 38.037 42.7829 36.1052L34.6579 10.1052C34.2665 8.85275 33.1066 8 31.7944 8Z"/>';

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

module.exports = Trapezoid;
