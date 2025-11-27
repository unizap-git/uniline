'use strict';

var React = require('react');

function MicroscopeOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M29.0026 18.3733L30.1075 17.2685L30.6378 16.7381C32.7857 14.5902 32.7857 11.1078 30.6378 8.95995V8.95995C28.4899 6.81207 25.0075 6.81207 22.8596 8.95995L9.17206 22.6475C9.11627 22.7033 9.11627 22.7938 9.17206 22.8496L16.1421 29.8196C16.5326 30.2101 17.1658 30.2101 17.5563 29.8196L21.2686 26.1073L22.3735 25.0024"/><path d="M28.1628 6.48535L29.9306 4.71758C31.2974 3.35075 33.5135 3.35075 34.8804 4.71758C36.2472 6.08442 36.2472 8.3005 34.8804 9.66733L33.1126 11.4351L28.1628 6.48535Z"/><path d="M10.4854 24.1631L6.24271 28.4057L11.1925 33.3555L15.4351 29.1128L10.4854 24.1631Z"/><circle cx="26.0415" cy="22.0417" r="4.5" transform="rotate(45 26.0415 22.0417)"/><path d="M6 20L18.7279 32.7279"/><path d="M10 44H42"/><path d="M31 22C35 22 39 26 39 32C39 38.4 33.8333 41.8333 31 44"/>' : '<path d="M29.0026 18.3733L30.1075 17.2685L30.6378 16.7381C32.7857 14.5902 32.7857 11.1078 30.6378 8.95995V8.95995C28.4899 6.81207 25.0075 6.81207 22.8596 8.95995L9.17206 22.6475C9.11627 22.7033 9.11627 22.7938 9.17206 22.8496L16.1421 29.8196C16.5326 30.2101 17.1658 30.2101 17.5563 29.8196L21.2686 26.1073L22.3735 25.0024"/><path d="M28.1628 6.48535L29.9306 4.71758C31.2974 3.35075 33.5135 3.35075 34.8804 4.71758C36.2472 6.08442 36.2472 8.3005 34.8804 9.66733L33.1126 11.4351L28.1628 6.48535Z"/><path d="M10.4854 24.1631L6.24271 28.4057L11.1925 33.3555L15.4351 29.1128L10.4854 24.1631Z"/><circle cx="26.0415" cy="22.0417" r="4.5" transform="rotate(45 26.0415 22.0417)"/><path d="M6 20L18.7279 32.7279"/><path d="M10 44H42"/><path d="M31 22C35 22 39 26 39 32C39 38.4 33.8333 41.8333 31 44"/>';

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

module.exports = MicroscopeOne;
