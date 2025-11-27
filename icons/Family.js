'use strict';

var React = require('react');

function Family(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10 19C10 19 4.85714 21 4 28"/><path d="M38 19C38 19 43.1429 21 44 28"/><path d="M18 19C18 19 22.8 20.1667 24 26"/><path d="M30 19C30 19 25.2 20.1667 24 26"/><path d="M20 34C20 34 15.8 34.75 14 40"/><path d="M28 34C28 34 32.2 34.75 34 40"/><circle cx="24" cy="31" r="5"/><circle cx="34" cy="14" r="6"/><circle cx="14" cy="14" r="6"/>' : '<path d="M10 19C10 19 4.85714 21 4 28"/><path d="M38 19C38 19 43.1429 21 44 28"/><path d="M18 19C18 19 22.8 20.1667 24 26"/><path d="M30 19C30 19 25.2 20.1667 24 26"/><path d="M20 34C20 34 15.8 34.75 14 40"/><path d="M28 34C28 34 32.2 34.75 34 40"/><circle cx="24" cy="31" r="5"/><circle cx="34" cy="14" r="6"/><circle cx="14" cy="14" r="6"/>';

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

module.exports = Family;
