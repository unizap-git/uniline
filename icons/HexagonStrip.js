'use strict';

var React = require('react');

function HexagonStrip(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.0002 4H29.0002V15.3397L38.8207 9.66982L43.8207 18.3301L34.0002 24L43.8207 29.6698L38.8207 38.3301L29.0002 32.6602V44H19.0002V32.6602L9.17969 38.3301L4.17969 29.6698L14.0002 24L4.17969 18.3301L9.17969 9.66982L19.0002 15.3397V4Z"/>' : '<path d="M19.0002 4H29.0002V15.3397L38.8207 9.66982L43.8207 18.3301L34.0002 24L43.8207 29.6698L38.8207 38.3301L29.0002 32.6602V44H19.0002V32.6602L9.17969 38.3301L4.17969 29.6698L14.0002 24L4.17969 18.3301L9.17969 9.66982L19.0002 15.3397V4Z"/>';

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

module.exports = HexagonStrip;
