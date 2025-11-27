'use strict';

var React = require('react');

function Sofa(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12 21H4V35H12V21Z"/><path d="M44 21H36V35H44V21Z"/><path d="M36 27H12V35H36V27Z"/><path d="M8 20V8H40V20"/><path d="M8 36V40"/><path d="M40 36V40"/>' : '<path d="M12 21H4V35H12V21Z"/><path d="M44 21H36V35H44V21Z"/><path d="M36 27H12V35H36V27Z"/><path d="M8 20V8H40V20"/><path d="M8 36V40"/><path d="M40 36V40"/>';

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

module.exports = Sofa;
