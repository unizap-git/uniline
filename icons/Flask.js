'use strict';

var React = require('react');

function Flask(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M37.845 35.0219L44 41.3158V44H4V41.3158L10.1184 35.0594L37.845 35.0219Z"/><path d="M10.104 35.0743L18.0002 27V6H30.0002V27L37.8727 35.0502"/><path d="M11 35H37"/><path d="M30 14H24"/><path d="M30 20H24"/>' : '<path d="M20,6v10c-5.4,1.9-10,6.5-10,12.4s6.3,13.6,14,13.6,14-6.1,14-13.6-4.6-10.5-10-12.4V6M20,6h8M20,6h-4M28.1,6h4M10.1,30h27.8"/>';

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

module.exports = Flask;
