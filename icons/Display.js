'use strict';

var React = require('react');

function Display(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,2H4c-1.1,0-2,.9-2,2v8c0,1.1.9,2,2,2h7v4h-4.6c-.3,0-.6.1-.8.4l-2.4,3c-.3.4-.3,1.1.1,1.4.2.2.4.2.6.2s.6-.1.8-.4l2.1-2.6h4.1v2c0,.6.4,1,1,1s1-.4,1-1v-2h3.9l2.4,2.7c.4.4,1,.5,1.4,0,.4-.4.5-1,0-1.4l-2.7-3c-.2-.2-.5-.3-.7-.3h-4.3v-4h7c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2ZM7,5.5h4c.6,0,1,.4,1,1s-.4,1-1,1h-4c-.6,0-1-.4-1-1s.4-1,1-1ZM17,10.5H7c-.6,0-1-.4-1-1s.4-1,1-1h10c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="6" y="6" width="36" height="20" rx="2"/><path d="M14 13L22 13"/><path d="M14 19L34 19"/><path d="M8 44L12.8889 38H34.6667L40 44"/><path d="M24 26L24 44"/>';

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

module.exports = Display;
