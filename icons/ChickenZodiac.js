'use strict';

var React = require('react');

function ChickenZodiac(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M31 31C30 26.5 31.4 17.6 41 14"/><path d="M11 4L15 10"/><path d="M38 31C38 33.8889 34.24 38.5556 28 40L26 44"/><path d="M21 10.2738C15.1845 9.2518 3.86133 10.5366 5.09285 23.8519C5.09286 28.2319 7.37935 37.1968 16 40L18 44"/><path d="M19 18C19.6957 21.8333 22.5 31 31 31H38C37.3043 28.6667 37.1565 23.4 43 21"/>' : '<path d="M31 31C30 26.5 31.4 17.6 41 14"/><path d="M11 4L15 10"/><path d="M38 31C38 33.8889 34.24 38.5556 28 40L26 44"/><path d="M21 10.2738C15.1845 9.2518 3.86133 10.5366 5.09285 23.8519C5.09286 28.2319 7.37935 37.1968 16 40L18 44"/><path d="M19 18C19.6957 21.8333 22.5 31 31 31H38C37.3043 28.6667 37.1565 23.4 43 21"/>';

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

module.exports = ChickenZodiac;
