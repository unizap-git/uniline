'use strict';

var React = require('react');

function ChalkboardUser(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6,2c-1.1,0-2,.9-2,2v4c0,.6.4,1,1,1s1-.4,1-1v-4h12v7h-2c-.6,0-1,.4-1,1v2h-1c-.6,0-1,.4-1,1s.4,1,1,1h5c.6,0,1-.4,1-1V3.9c0-.9-.6-1.9-1.7-1.9H6Z"/>   <path d="M6,11.5c0-1.9,1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5-1.6,3.5-3.5,3.5-3.5-1.6-3.5-3.5ZM4,20c0-2.2,1.8-4,4-4h3c2.2,0,4,1.8,4,4s-.9,2-2,2h-7c-1.1,0-2-.9-2-2Z"/>' : '<path d="M28.8,30.1h8.7c.8,0,1.5-.8,1.5-1.7V7.5c0-1-.7-1.7-1.5-1.7H12.5c-1.1,0-2,.9-2,2v8.1M32.8,30.1v-6.1h6.1v6.1h-6.1ZM26.7,42.3h-14.2c-1.1,0-2-.9-2-2,0-3.4,2.7-6.1,6.1-6.1h6.1c3.4,0,6.1,2.7,6.1,6.1s-.9,2-2,2ZM24.7,23c0,2.8-2.3,5.1-5.1,5.1s-5.1-2.3-5.1-5.1,2.3-5.1,5.1-5.1,5.1,2.3,5.1,5.1Z"/>';

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

module.exports = ChalkboardUser;
