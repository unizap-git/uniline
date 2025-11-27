'use strict';

var React = require('react');

function TrousersBellBottoms(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19,20.3l-2-8.4v-5.9c0,0,0-.2,0-.2l-1-4c-.1-.4-.5-.8-1-.8h-6c-.5,0-.9.3-1,.8l-1,4c0,0,0,.2,0,.2v5.9l-2,8.4c-.1.5.2,1.1.7,1.2l6,1.5c0,0,.2,0,.2,0-.6,0-1-.4-1-1v-14c0-.6.4-1,1-1s1,.4,1,1v14c0,.6-.4,1-1,1,0,0,.2,0,.2,0l6-1.5c.5-.1.9-.7.7-1.2Z"/>   <path d="M12,23c0,0-.2,0-.2,0l-6-1.5c-.5-.1-.9-.7-.7-1.2.1-.5.7-.9,1.2-.7l5.8,1.4,5.8-1.4c.5-.1,1.1.2,1.2.7.1.5-.2,1.1-.7,1.2l-6,1.5c0,0-.2,0-.2,0Z"/>' : '<path d="M16 12L18 4H30L32 12V24L36 41L24 44L12 41L16 24V12Z"/><path d="M24 44V16"/><path d="M12 41L24 44L36 41"/>';

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

module.exports = TrousersBellBottoms;
