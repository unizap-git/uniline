'use strict';

var React = require('react');

function AlphabeticalSortingTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M36 4V43.5"/><path d="M7 4H23L7 20H23"/><path d="M7 44L15.2759 28L23 44"/><path d="M44 36L36 44L28 36"/>' : '<path d="M36 4V43.5"/><path d="M7 4H23L7 20H23"/><path d="M7 44L15.2759 28L23 44"/><path d="M44 36L36 44L28 36"/>';

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

module.exports = AlphabeticalSortingTwo;
