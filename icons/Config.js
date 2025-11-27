'use strict';

var React = require('react');

function Config(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.7,11.3l-2.7-2.7v-3.6c0-.6-.4-1-1-1h-3.6l-2.7-2.7c-.4-.4-1-.4-1.4,0l-2.7,2.7h-3.6c-.6,0-1,.4-1,1v3.6l-2.7,2.7c-.4.4-.4,1,0,1.4l2.7,2.7v3.6c0,.6.4,1,1,1h3.6l2.7,2.7c.2.2.5.3.7.3s.5,0,.7-.3l2.7-2.7h3.6c.6,0,1-.4,1-1v-3.6l2.7-2.7c.4-.4.4-1,0-1.4ZM12,16c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4Z"/>' : '<path d="M24 4L18 10H10V18L4 24L10 30V38H18L24 44L30 38H38V30L44 24L38 18V10H30L24 4Z"/><path d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"/>';

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

module.exports = Config;
