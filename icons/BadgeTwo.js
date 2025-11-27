'use strict';

var React = require('react');

function BadgeTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8,22l4-2,4,2v-9.5c-1.1,1-2.5,1.5-4,1.5s-2.9-.6-4-1.5v9.5Z"/>   <path d="M12,1c-3.9,0-7,3.1-7,7s.9,3.9,2.3,5.2c1.3,1.1,2.9,1.8,4.7,1.8s3.4-.6,4.7-1.8c1.5-1.3,2.3-3.2,2.3-5.2,0-3.9-3.1-7-7-7ZM13,11.5h-2c-.6,0-1-.4-1-1s.4-1,1-1v-2.5c-.4,0-.7-.2-.9-.6-.2-.5,0-1.1.4-1.3l1-.5c.3-.2.7-.1,1,0,.3.2.5.5.5.9v4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M16 43.9999L24 39.9999L32 43.9999V24.9443C29.877 26.8445 27.0734 27.9999 24 27.9999C20.9266 27.9999 18.123 26.8445 16 24.9443V43.9999Z"/><path d="M36 16C36 19.554 34.455 22.7471 32 24.9444C29.877 26.8446 27.0734 28 24 28C20.9266 28 18.123 26.8446 16 24.9444C13.545 22.7471 12 19.554 12 16C12 9.37258 17.3726 4 24 4C30.6274 4 36 9.37258 36 16Z"/><path d="M24 21V11L22 12M24 21H26M24 21H22"/>';

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

module.exports = BadgeTwo;
