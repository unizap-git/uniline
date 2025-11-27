'use strict';

var React = require('react');

function PlayCycle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 25C4 18.3502 9.39624 13 16 13H44"/><path d="M38 7L44 13L38 19"/><path d="M44 23C44 29.6498 38.6038 35 32 35H4"/><path d="M10 41L4 35L10 29"/>' : '<path d="M4 25C4 18.3502 9.39624 13 16 13H44"/><path d="M38 7L44 13L38 19"/><path d="M44 23C44 29.6498 38.6038 35 32 35H4"/><path d="M10 41L4 35L10 29"/>';

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

module.exports = PlayCycle;
