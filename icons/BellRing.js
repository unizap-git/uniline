'use strict';

var React = require('react');

function BellRing(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,9v1h-1v-1h1Z"/>   <path d="M21,10h1v-1h-1v1ZM21,10c0,4.6-2.8,8.5-6.8,10.1"/>   <path d="M7,17.5l-2,4.5h10l-2-4.5"/>   <path d="M10,1C5,1,1,5,1,10s4,9,9,9,9-4,9-9S15,1,10,1ZM5,11c-.6,0-1-.4-1-1,0-3.3,2.7-6,6-6s1,.4,1,1-.4,1-1,1c-2.2,0-4,1.8-4,4s-.4,1-1,1ZM10,13c-1.7,0-3-1.3-3-3s1.3-3,3-3,3,1.3,3,3-1.3,3-3,3Z"/>' : '<circle cx="20" cy="20" r="16"/><path d="M44 18V20H42V18H44Z"/><path d="M42 20H44V18H42V20ZM42 20C42 29.1371 36.4299 36.9732 28.5 40.2978"/><path d="M14 35L10 44H30L26 35"/><circle cx="20" cy="20" r="4"/><path d="M10 20C10 14.4772 14.4772 10 20 10"/>';

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

module.exports = BellRing;
