'use strict';

var React = require('react');

function Aries(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5.50934 19.0293C3.08128 15.2358 2.82341 7.06076 10.5522 6.02314C15.8552 5.45972 23.1035 15.1207 24 42C24.8965 15.1207 32.1448 5.45972 37.4478 6.02314C45.1766 7.06076 44.9187 15.2358 42.4907 19.0293"/>' : '<path d="M5.50934 19.0293C3.08128 15.2358 2.82341 7.06076 10.5522 6.02314C15.8552 5.45972 23.1035 15.1207 24 42C24.8965 15.1207 32.1448 5.45972 37.4478 6.02314C45.1766 7.06076 44.9187 15.2358 42.4907 19.0293"/>';

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

module.exports = Aries;
