'use strict';

var React = require('react');

function TopicDiscussion(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<polygon points="11.2 12.5 12.7 12.5 12.8 11 11.3 11 11.2 12.5"/>   <path d="M22,3H2c-.6,0-1,.4-1,1v15c0,.6.4,1,1,1h7.1l2.2,2.2c.2.2.5.3.7.3s.5,0,.7-.3l2.2-2.2h7.1c.6,0,1-.4,1-1V4c0-.6-.4-1-1-1ZM16.5,11h-1.7v1.5c0,0,1.2,0,1.2,0,.6,0,1,.4,1,1s-.4,1-1,1h-1.4v1.6c-.1.5-.6.9-1.1.9s0,0,0,0c-.6,0-1-.5-.9-1.1v-1.4c0,0-1.4,0-1.4,0v1.6c-.1.5-.6.9-1.1.9s0,0,0,0c-.6,0-1-.5-.9-1.1v-1.4c0,0-1.5,0-1.5,0-.6,0-1-.4-1-1s.4-1,1-1h1.7v-1.5c0,0-1.2,0-1.2,0-.6,0-1-.4-1-1s.4-1,1-1h1.4v-1.6c.1-.6.6-1,1.1-.9.6,0,1,.5.9,1.1v1.4c0,0,1.4,0,1.4,0v-1.6c.1-.6.6-1,1.1-.9.6,0,1,.5.9,1.1v1.4c0,0,1.5,0,1.5,0,.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M44 8H4V38H19L24 43L29 38H44V8Z"/><path d="M21 15L20 32"/><path d="M28 15L27 32"/><path d="M33 20L16 20"/><path d="M32 27L15 27"/>';

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

module.exports = TopicDiscussion;
