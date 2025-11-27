'use strict';

var React = require('react');

function MoveIn(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20 12L24 16L28 12"/><path d="M24 16V4"/><path d="M20 36L24 32L28 36"/><path d="M24 32V44"/><path d="M36 20L32 24L36 28"/><path d="M32 24H44"/><path d="M12 20L16 24L12 28"/><path d="M16 24H4"/><path d="M24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26Z"/>' : '<path d="M20 12L24 16L28 12"/><path d="M24 16V4"/><path d="M20 36L24 32L28 36"/><path d="M24 32V44"/><path d="M36 20L32 24L36 28"/><path d="M32 24H44"/><path d="M12 20L16 24L12 28"/><path d="M16 24H4"/><path d="M24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26Z"/>';

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

module.exports = MoveIn;
