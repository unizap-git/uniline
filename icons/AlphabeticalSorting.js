'use strict';

var React = require('react');

function AlphabeticalSorting(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M36 4V43.5"/><path d="M7 28H23L7 44H23"/><path d="M7 20L15.2759 4L23 20"/><path d="M44 36L36 44L28 36"/>' : '<path d="M36 4V43.5"/><path d="M7 28H23L7 44H23"/><path d="M7 20L15.2759 4L23 20"/><path d="M44 36L36 44L28 36"/>';

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

module.exports = AlphabeticalSorting;
