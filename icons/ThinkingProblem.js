'use strict';

var React = require('react');

function ThinkingProblem(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.4,14.5l-2.4-4.3c-.1-4.8-4.1-8.7-9-8.7S2,5.5,2,10.5s.9,4.6,2.6,6.3l.9,4.9c0,.5.5.8,1,.8h7.5c.5,0,.9-.4,1-.9l.4-2.5,2,.3c0,0,.1,0,.2,0h1.5c.6,0,1-.4,1-1v-2.2l1.7-.3c.3,0,.6-.3.7-.6.1-.3.1-.6,0-.9ZM12,17c0,.6-.4,1-1,1s-1-.4-1-1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5ZM12,12.9v.6c0,.6-.4,1-1,1s-1-.4-1-1v-1.5c0-.6.4-1,1-1,.8,0,1.5-.7,1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5,1.5-.4,1-1,1-1-.4-1-1c0-1.9,1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5-1.1,2.9-2.5,3.4Z"/>' : '<path d="M38 21L43 30L38 31V37H35L29 36L28 43H13L11 32.619C7.92077 29.7028 6 25.5757 6 21C6 12.1634 13.1634 5 22 5C30.8366 5 38 12.1634 38 21Z"/><path d="M17 19C17 16.2386 19.2386 14 22 14C24.7614 14 27 16.2386 27 19C27 21.7614 24.7614 24 22 24V27"/><path d="M22 33V34"/>';

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

module.exports = ThinkingProblem;
