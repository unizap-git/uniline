'use strict';

var React = require('react');

function BellRing(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.1,12.6v-1.8c0-2.5-1.7-4.7-4.2-5.3,0,0,0,0,0-.1v-2.4c0-.6-.4-1-1-1s-1,.4-1,1v2.4s0,0,0,.1c-2.4.6-4.2,2.8-4.2,5.3v1.8c0,2.4-1.9,3-1.9,4.2s0,1.2.5,1.2h12.9c.5,0,.5-.6.5-1.2,0-1.2-1.9-1.8-1.9-4.2ZM6,6c-.3,0-.5-.1-.7-.3l-1-1c-.4-.4-.4-1,0-1.4.4-.4,1-.4,1.4,0l1,1c.4.4.4,1,0,1.4-.2.2-.4.3-.7.3ZM4,10h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM18,6c-.6,0-1-.4-1-1,0-.3.1-.5.3-.7l1-1c.4-.4,1-.4,1.4,0,.4.4.4,1,0,1.4,0,0,0,0,0,0l-1,1c-.2.2-.4.3-.7.3ZM21,10h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM8.8,19c.7,1.8,2.8,2.6,4.5,1.8.8-.3,1.5-1,1.8-1.8h-6.4Z"/>' : '<circle cx="20" cy="20" r="16"/><path d="M44 18V20H42V18H44Z"/><path d="M42 20H44V18H42V20ZM42 20C42 29.1371 36.4299 36.9732 28.5 40.2978"/><path d="M14 35L10 44H30L26 35"/><circle cx="20" cy="20" r="4"/><path d="M10 20C10 14.4772 14.4772 10 20 10"/>';

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
