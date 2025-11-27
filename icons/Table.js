'use strict';

var React = require('react');

function Table(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19,1H5c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V3c0-1.1-.9-2-2-2ZM17,11c.6,0,1,.4,1,1s-.4,1-1,1h-7v2h7c.6,0,1,.4,1,1s-.4,1-1,1h-7v1c0,.6-.4,1-1,1s-1-.4-1-1v-1h-1c-.6,0-1-.4-1-1s.4-1,1-1h1v-2h-1c-.6,0-1-.4-1-1s.4-1,1-1h1v-2h-1c-.6,0-1-.4-1-1s.4-1,1-1h1v-1c0-.6.4-1,1-1s1,.4,1,1v1h7c.6,0,1,.4,1,1s-.4,1-1,1h-7v2h7Z"/>' : '<rect x="8" y="4" width="32" height="40" rx="2"/><path d="M14 16H34"/><path d="M14 24H34"/><path d="M14 32H34"/><path d="M18 12V36"/>';

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

module.exports = Table;
