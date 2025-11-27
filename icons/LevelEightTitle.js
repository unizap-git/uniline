'use strict';

var React = require('react');

function LevelEightTitle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 8V40"/><path d="M24 8V40"/><path d="M7 24H23"/><path d="M37 29C39.2091 29 41 27.2091 41 25C41 22.7909 39.2091 21 37 21C34.7909 21 33 22.7909 33 25C33 27.2091 34.7909 29 37 29Z"/><path d="M37 40C39.7614 40 42 37.7614 42 35C42 32.2386 39.7614 30 37 30C34.2386 30 32 32.2386 32 35C32 37.7614 34.2386 40 37 40Z"/>' : '<path d="M6 8V40"/><path d="M24 8V40"/><path d="M7 24H23"/><path d="M37 29C39.2091 29 41 27.2091 41 25C41 22.7909 39.2091 21 37 21C34.7909 21 33 22.7909 33 25C33 27.2091 34.7909 29 37 29Z"/><path d="M37 40C39.7614 40 42 37.7614 42 35C42 32.2386 39.7614 30 37 30C34.2386 30 32 32.2386 32 35C32 37.7614 34.2386 40 37 40Z"/>';

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

module.exports = LevelEightTitle;
