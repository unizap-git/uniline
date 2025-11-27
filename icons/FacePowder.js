'use strict';

var React = require('react');

function FacePowder(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C7,1,3,3.6,3,7s4,6,9,6,9-2.6,9-6S17,1,12,1ZM9,7.5c-.3,0-.7-.2-.9-.5-.3-.5-.1-1.1.3-1.4l2.5-1.5c.5-.3,1.1-.1,1.4.3s.1,1.1-.3,1.4l-2.5,1.5c-.2,0-.3.1-.5.1ZM15.5,7.9l-2.5,1.5c-.2,0-.3.1-.5.1-.3,0-.7-.2-.9-.5-.3-.5-.1-1.1.3-1.4l2.5-1.5c.5-.3,1.1-.1,1.4.3.3.5.1,1.1-.3,1.4Z"/>   <path d="M20,19c0,1.7-3.6,3-8,3s-8-1.3-8-3"/>   <path d="M20,19v-4"/>   <path d="M4,19v-4"/>   <path d="M12,11c-4.5,0-9,1.4-9,4s4.5,4,9,4,9-1.4,9-4-4.5-4-9-4ZM12,16c-1.9,0-3.5-.4-3.5-1s1.6-1,3.5-1,3.5.4,3.5,1-1.6,1-3.5,1Z"/>' : '<ellipse cx="24" cy="30" rx="16" ry="6"/><ellipse cx="24" cy="14" rx="16" ry="10"/><path d="M23 10L18 13"/><path d="M30 14L25 17"/><path d="M40 38C40 41.3137 32.8366 44 24 44C15.1634 44 8 41.3137 8 38"/><path d="M40 38V30"/><path d="M8 38V30"/><ellipse cx="24" cy="30" rx="7" ry="2"/>';

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

module.exports = FacePowder;
