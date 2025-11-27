'use strict';

var React = require('react');

function GameHandle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,9c-.6,0-1-.4-1-1v-3.1c0-.6.4-1,1-1h3v-1.9c0-.6.4-1,1-1s1,.4,1,1v2.9c0,.6-.4,1-1,1h-3v2.1c0,.6-.4,1-1,1Z"/>   <path d="M16,8h-8c-3.9,0-7,3.1-7,7s3.1,7,7,7h8c3.9,0,7-3.1,7-7s-3.1-7-7-7ZM10,16h-1v1c0,.6-.4,1-1,1s-1-.4-1-1v-1h-1c-.6,0-1-.4-1-1s.4-1,1-1h1v-1c0-.6.4-1,1-1s1,.4,1,1v1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM16,18c-1.7,0-3-1.3-3-3s1.3-3,3-3,3,1.3,3,3-1.3,3-3,3Z"/>' : '<path d="M32 18H16C9.37258 18 4 23.3726 4 30C4 36.6274 9.37258 42 16 42H32C38.6274 42 44 36.6274 44 30C44 23.3726 38.6274 18 32 18Z"/><path d="M16 26V34"/><path d="M12 30H20"/><path d="M24 16V9.71429H32V4"/><path d="M32 34C34.2091 34 36 32.2091 36 30C36 27.7909 34.2091 26 32 26C29.7909 26 28 27.7909 28 30C28 32.2091 29.7909 34 32 34Z"/>';

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

module.exports = GameHandle;
