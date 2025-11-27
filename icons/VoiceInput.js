'use strict';

var React = require('react');

function VoiceInput(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 30C4 36.6274 9.37258 42 16 42C22.6274 42 26 38 27 35L28.5385 30L35 9L44 42"/><path d="M40.7274 30H28.5386"/><path d="M22 15C22 11.6863 19.3137 9 16 9C12.6863 9 10 11.6863 10 15V30C10 33.3137 12.6863 36 16 36C19.3137 36 22 33.3137 22 30V15Z"/>' : '<path d="M4 30C4 36.6274 9.37258 42 16 42C22.6274 42 26 38 27 35L28.5385 30L35 9L44 42"/><path d="M40.7274 30H28.5386"/><path d="M22 15C22 11.6863 19.3137 9 16 9C12.6863 9 10 11.6863 10 15V30C10 33.3137 12.6863 36 16 36C19.3137 36 22 33.3137 22 30V15Z"/>';

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

module.exports = VoiceInput;
