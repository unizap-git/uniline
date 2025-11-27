'use strict';

var React = require('react');

function Oven(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,3H3c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM18.5,6.5c.6,0,1,.4,1,1s-.4,1-1,1-1-.4-1-1,.4-1,1-1ZM15,13.5c0,.8-.7,1.5-1.5,1.5h-7c-.8,0-1.5-.7-1.5-1.5v-5c0-.8.7-1.5,1.5-1.5h7c.8,0,1.5.7,1.5,1.5v5ZM19,15.5h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM19,12h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M6,18v3"/>   <path d="M18,18v3"/>' : '<rect x="4" y="8" width="40" height="28" rx="2"/><rect x="12" y="16" width="16" height="12" rx="1"/><circle cx="37" cy="15" r="2"/><path d="M36 22H38"/><path d="M36 29H38"/><path d="M12 36L12 42"/><path d="M36 36L36 42"/>';

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

module.exports = Oven;
