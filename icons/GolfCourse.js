'use strict';

var React = require('react');

function GolfCourse(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,11c-6.2,0-11,2.6-11,6s4.8,6,11,6,11-2.6,11-6-4.8-6-11-6ZM16,19c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z"/>   <path d="M12,4.5l-5.5-2.5v5l5.5-2.5Z"/>   <path d="M6.5,17V7M6.5,7V2l5.5,2.5-5.5,2.5Z"/>' : '<ellipse cx="24" cy="34" rx="20" ry="10"/><circle cx="32" cy="34" r="2"/><path d="M24 9L13 4V14L24 9Z"/><path d="M13 34V14M13 14V4L24 9L13 14Z"/>';

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

module.exports = GolfCourse;
