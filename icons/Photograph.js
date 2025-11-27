'use strict';

var React = require('react');

function Photograph(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-9f63030ac380f88)"><path d="M34 13L34 6C34 4.89543 33.1046 4 32 4L8 4C6.89543 4 6 4.89543 6 6L6 34C6 35.1046 6.89543 36 8 36L23 36"/><path d="M28.0005 42C21 38 24.3318 32.2257 22.9772 31C21.3247 29.5046 20.3874 28.1121 19.9996 26C19.6118 23.8878 21.0701 21.4737 22.9774 23C24.8847 24.5263 28 31 28 31L30 29L31 18C31 18 30 14 30 12C30 9.99999 34 13 36 16C36 26.4418 37.4995 36 41.9992 44"/><path d="M25 17.4L21 11L13 27H20"/><path d="M6 22L12 11L17 18"/></g><defs><clipPath id="icon-9f63030ac380f88"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-68cd7dbac380f88)"><path d="M34 13L34 6C34 4.89543 33.1046 4 32 4L8 4C6.89543 4 6 4.89543 6 6L6 34C6 35.1046 6.89543 36 8 36L23 36"/><path d="M28.0005 42C21 38 24.3318 32.2257 22.9772 31C21.3247 29.5046 20.3874 28.1121 19.9996 26C19.6118 23.8878 21.0701 21.4737 22.9774 23C24.8847 24.5263 28 31 28 31L30 29L31 18C31 18 30 14 30 12C30 9.99999 34 13 36 16C36 26.4418 37.4995 36 41.9992 44"/><path d="M25 17.4L21 11L13 27H20"/><path d="M6 22L12 11L17 18"/></g><defs><clipPath id="icon-68cd7dbac380f88"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = Photograph;
