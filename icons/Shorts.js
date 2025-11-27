'use strict';

var React = require('react');

function Shorts(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.9,16.1l-3.4-8.3V3c0-.6-.4-1-1-1H5.5c-.6,0-1,.4-1,1v4.8l-3.4,8.3c-.2.5,0,1,.4,1.2l7.5,4.5c.4.3,1,.2,1.3-.2l1.7-2.1,1.7,2.1c.2.2.5.4.8.4s.4,0,.5-.1l7.5-4.5c.4-.3.6-.8.4-1.2ZM18.5,9H5.5c-.6,0-1-.4-1-1s.4-1,1-1h13c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M19.4,11.1c-.4,0-.8-.2-.9-.6l-.9-2.1c0-.1,0-.2,0-.4v-1c0-.6.4-1,1-1s1,.4,1,1v.8l.8,1.9c.2.5,0,1.1-.5,1.3-.1,0-.3,0-.4,0Z"/>   <path d="M4.6,11.1c-.1,0-.3,0-.4,0-.5-.2-.8-.8-.5-1.3l.8-1.9v-.8c0-.6.4-1,1-1s1,.4,1,1v1c0,.1,0,.3,0,.4l-.9,2.1c-.2.4-.5.6-.9.6Z"/>' : '<path d="M37 6H11V16L4 33L19 42L24 36L29 42L44 33L37 16V6Z"/><path d="M11 14C9.89543 14 9 14.8954 9 16C9 17.1046 9.89543 18 11 18V14ZM37 18C38.1046 18 39 17.1046 39 16C39 14.8954 38.1046 14 37 14V18ZM11 18L37 18V14L11 14V18Z"/><path d="M37 14V16L38.75 20.25"/><path d="M11 14V16L9.25 20.25"/>';

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

module.exports = Shorts;
