'use strict';

var React = require('react');

function FNKey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM10.5,11c.6,0,1,.4,1,1s-.4,1-1,1h-2.5v3c0,.6-.4,1-1,1s-1-.4-1-1v-8c0-.6.4-1,1-1h3.5c.6,0,1,.4,1,1s-.4,1-1,1h-2.5v2h2.5ZM18,16c0,.6-.4,1-1,1s-1-.4-1-1v-4.5c0-.7-.3-1-1-1s-1,.4-1,1v4.5c0,.6-.4,1-1,1s-1-.4-1-1v-7.5c0-.6.4-1,1-1s1,.4,1,1v.2c.3-.1.6-.2,1-.2,1.8,0,3,1.2,3,3v4.5Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M26 17V32"/><path d="M26 23C26 20.6214 27.6 19 30 19C32.4 19 34 20.5273 34 23C34 24.6484 34 28.707 34 32"/><path d="M21 16H14V32"/><path d="M14 24H21"/>';

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

module.exports = FNKey;
