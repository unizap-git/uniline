'use strict';

var React = require('react');

function WatermelonOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.4,16.5L12.9,1.5c-.4-.6-1.4-.6-1.7,0L2.6,16.5c-.2.4-.1,1,.2,1.3.1,0,2.8,2.3,9.1,2.3s9-2.2,9.1-2.3c.4-.3.5-.8.2-1.3ZM10.5,12.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM11,8.5c0-.6.4-1,1-1s1,.4,1,1-.4,1-1,1-1-.4-1-1ZM13.5,12.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>   <path d="M20.5,20s-2.5,2-8.5,2-8.5-2-8.5-2" stroke-miterlimit="2"/>' : '<path d="M24 4L41 33.92C41 33.92 36.0457 38 24 38C11.9543 38 7 33.92 7 33.92L24 4Z"/><circle cx="24" cy="17" r="2"/><circle cx="27" cy="23" r="2"/><circle cx="21" cy="23" r="2"/><path d="M41 39.9199C41 39.9199 36.0457 43.9999 24 43.9999C11.9543 43.9999 7 39.9199 7 39.9199"/>';

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

module.exports = WatermelonOne;
