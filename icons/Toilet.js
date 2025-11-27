'use strict';

var React = require('react');

function Toilet(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.999 10H27.999V22H19.999V10Z"/><path d="M17.0001 35L12.0001 44H11.999H35.999L31.0001 35"/><path d="M33.999 22V5C33.999 4.44772 33.5513 4 32.999 4H14.999C14.4467 4 13.999 4.44772 13.999 5V22"/><path d="M6.07992 22.364C6.0384 22.1772 6.18056 22 6.37194 22H41.6261C41.8175 22 41.9596 22.1772 41.9181 22.3641V22.3641C40.6941 27.8723 37.2835 32.8158 31.9187 34.5641C29.4348 35.3735 26.6549 36 24.0001 36C21.3449 36 18.5642 35.3733 16.0797 34.5637C10.7148 32.8154 7.30395 27.8722 6.07992 22.364V22.364Z"/>' : '<path d="M19.999 10H27.999V22H19.999V10Z"/><path d="M17.0001 35L12.0001 44H11.999H35.999L31.0001 35"/><path d="M33.999 22V5C33.999 4.44772 33.5513 4 32.999 4H14.999C14.4467 4 13.999 4.44772 13.999 5V22"/><path d="M6.07992 22.364C6.0384 22.1772 6.18056 22 6.37194 22H41.6261C41.8175 22 41.9596 22.1772 41.9181 22.3641V22.3641C40.6941 27.8723 37.2835 32.8158 31.9187 34.5641C29.4348 35.3735 26.6549 36 24.0001 36C21.3449 36 18.5642 35.3733 16.0797 34.5637C10.7148 32.8154 7.30395 27.8722 6.07992 22.364V22.364Z"/>';

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

module.exports = Toilet;
