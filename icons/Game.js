'use strict';

var React = require('react');

function Game(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,14c1.1,0,2-.9,2-2s-.9-2-2-2-2,.9-2,2,.9,2,2,2Z"/>   <path d="M20.2,18.8l-6.8-6.8,6.6-6.5c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-2.1-2-4.8-3-7.7-3C6,1,1,6,1,12.2s5,11.2,11.2,11.2,5.8-1.2,7.9-3.2c.2-.2.3-.4.3-.7,0-.3-.1-.5-.3-.7ZM10.5,9.5h-1v1c0,.6-.4,1-1,1s-1-.4-1-1v-1h-1c-.6,0-1-.4-1-1s.4-1,1-1h1v-1c0-.6.4-1,1-1s1,.4,1,1v1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M38.5121 9.5362C34.8466 6.10249 29.9188 4 24.5 4C13.1782 4 4 13.1782 4 24.5C4 35.8218 13.1782 45 24.5 45C30.1148 45 35.2024 42.7427 38.9048 39.0861L24 24L38.5121 9.5362Z"/><path d="M40 28C42.2091 28 44 26.2091 44 24C44 21.7909 42.2091 20 40 20C37.7909 20 36 21.7909 36 24C36 26.2091 37.7909 28 40 28Z"/><path d="M17 13V21"/><path d="M13 17H21"/>';

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

module.exports = Game;
