'use strict';

var React = require('react');

function TimedMail(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,17.5V4.5H2v14h11"/>   <path d="M17.5,12c-3,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5,5.5-2.5,5.5-5.5-2.5-5.5-5.5-5.5ZM19,19h-2c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M2,4.5l10,6.5,10-6.5"/>' : '<path d="M44 35V9H24H4V23V37H26"/><circle cx="35" cy="35" r="9"/><path d="M34 32V36H38"/><path d="M4 9L24 22L44 9"/>';

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

module.exports = TimedMail;
