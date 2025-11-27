'use strict';

var React = require('react');

function DiamondNecklace(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17 32.4091L24 29L31 32.4091V39.9091L24 44L17 39.9091V32.4091Z"/><path d="M8 4C8.45455 12.3333 14 29 24 29C34 29 40 12.7838 40 4"/>' : '<path d="M17 32.4091L24 29L31 32.4091V39.9091L24 44L17 39.9091V32.4091Z"/><path d="M8 4C8.45455 12.3333 14 29 24 29C34 29 40 12.7838 40 4"/>';

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

module.exports = DiamondNecklace;
