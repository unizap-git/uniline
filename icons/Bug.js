'use strict';

var React = require('react');

function Bug(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,4l3,3"/>   <path d="M22,4l-3,3"/>   <path d="M2,13.5h3"/>   <path d="M22,13.5h-3"/>   <path d="M3.5,22l3-3"/>   <path d="M20.5,22l-3-3"/>   <g>     <path d="M11,21V7c0-.6.4-1,1-1h-7c-.6,0-1,.4-1,1v7c0,2.8,1.7,8,8,8-.6,0-1-.4-1-1Z"/>     <path d="M19,6h-7c.6,0,1,.4,1,1v14c0,.6-.4,1-1,1,6.3,0,8-5.2,8-8v-7c0-.6-.4-1-1-1Z"/>   </g>   <path d="M12,22c-2.1,0-3.8-.6-5.2-1.7-.4-.4-.5-1-.1-1.4.4-.4,1-.5,1.4-.1,1,.8,2.3,1.2,3.9,1.2s2.9-.4,3.9-1.3c.4-.4,1.1-.3,1.4.1.4.4.3,1.1-.1,1.4-1.4,1.1-3.1,1.7-5.2,1.7Z"/>   <path d="M16,6.2c0-2.3-1.8-4.2-4-4.2s-4,1.9-4,4.2v.8h8v-.8Z"/>' : '<path d="M24 42C36 42 38 31.5324 38 28C38 24.8379 38 20.1712 38 14H10C10 17.4423 10 22.109 10 28C10 31.4506 12 42 24 42Z"/><path d="M4 8L10 14"/><path d="M44 8L38 14"/><path d="M4 27H10"/><path d="M44 27H38"/><path d="M7 44L13 38"/><path d="M41 44L35 38"/><path d="M24 42V14"/><path d="M14.9204 39.0407C17.0024 40.783 19.9244 41.9998 23.9999 41.9998C28.1112 41.9998 31.0487 40.7712 33.1341 39.0137"/><path d="M32 12.3333C32 7.73096 28.4183 4 24 4C19.5817 4 16 7.73096 16 12.3333V14H32V12.3333Z"/>';

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

module.exports = Bug;
