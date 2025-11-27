'use strict';

var React = require('react');

function Snowflake(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 4V44"/><path d="M6.72461 14L41.3656 34"/><path d="M6.71923 33.9773L41.2814 14.0228"/><path d="M12 10L15 19L6 21"/><path d="M6 27L15 29L12 38"/><path d="M36 10L33 19L42 21"/><path d="M42 27L33 29L36 38"/><path d="M18 7L24 13L30 7"/><path d="M18 41L24 35L30 41"/>' : '<path d="M24 4V44"/><path d="M6.72461 14L41.3656 34"/><path d="M6.71923 33.9773L41.2814 14.0228"/><path d="M12 10L15 19L6 21"/><path d="M6 27L15 29L12 38"/><path d="M36 10L33 19L42 21"/><path d="M42 27L33 29L36 38"/><path d="M18 7L24 13L30 7"/><path d="M18 41L24 35L30 41"/>';

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

module.exports = Snowflake;
