'use strict';

var React = require('react');

function MisalignedSemicircle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20 30C13.3726 30 8 24.6274 8 18C8 11.3726 13.3726 6 20 6"/><path d="M20 22C17.7909 22 16 20.2091 16 18C16 15.7909 17.7909 14 20 14"/><path d="M28 34C30.2091 34 32 32.2091 32 30C32 27.7909 30.2091 26 28 26"/><path d="M28 42C34.6274 42 40 36.6274 40 30C40 23.3726 34.6274 18 28 18"/>' : '<path d="M20 30C13.3726 30 8 24.6274 8 18C8 11.3726 13.3726 6 20 6"/><path d="M20 22C17.7909 22 16 20.2091 16 18C16 15.7909 17.7909 14 20 14"/><path d="M28 34C30.2091 34 32 32.2091 32 30C32 27.7909 30.2091 26 28 26"/><path d="M28 42C34.6274 42 40 36.6274 40 30C40 23.3726 34.6274 18 28 18"/>';

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

module.exports = MisalignedSemicircle;
