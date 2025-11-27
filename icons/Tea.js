'use strict';

var React = require('react');

function Tea(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11 18.1672C11 18.0749 11.0749 18 11.1672 18H34.8328C34.9251 18 35 18.0749 35 18.1672V30C35 36.6274 29.6274 42 23 42C16.3726 42 11 36.6274 11 30V18.1672Z"/><path d="M35 30C38.3137 30 41 27.3137 41 24C41 20.6863 38.3137 18 35 18"/><line x1="11" y1="8" x2="11" y2="11"/><line x1="35" y1="8" x2="35" y2="11"/><line x1="23" y1="5" x2="23" y2="11"/>' : '<path d="M11 18.1672C11 18.0749 11.0749 18 11.1672 18H34.8328C34.9251 18 35 18.0749 35 18.1672V30C35 36.6274 29.6274 42 23 42C16.3726 42 11 36.6274 11 30V18.1672Z"/><path d="M35 30C38.3137 30 41 27.3137 41 24C41 20.6863 38.3137 18 35 18"/><line x1="11" y1="8" x2="11" y2="11"/><line x1="35" y1="8" x2="35" y2="11"/><line x1="23" y1="5" x2="23" y2="11"/>';

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

module.exports = Tea;
