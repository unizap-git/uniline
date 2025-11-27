'use strict';

var React = require('react');

function BadgeCheck(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,2c-.8,0-1.6.3-2.1.9l-.9.9c-.2.2-.4.3-.7.3h-1.3c-1.6,0-3,1.3-3,3h0v1.3c0,.3-.1.5-.3.7l-.9.9c-1.2,1.2-1.2,3.1,0,4.2l.9.9c.2.2.3.4.3.7v1.3c0,1.6,1.3,3,3,3h1.3c.3,0,.5.1.7.3l.9.9c1.2,1.2,3.1,1.2,4.2,0l.9-.9c.2-.2.4-.3.7-.3h1.3c1.6,0,3-1.3,3-3v-1.3c0-.3.1-.5.3-.7l.9-.9c1.2-1.2,1.2-3.1,0-4.2l-.9-.9c-.2-.2-.3-.4-.3-.7v-1.3c0-1.6-1.3-3-3-3h-1.3c-.3,0-.5-.1-.7-.3l-.9-.9c-.6-.6-1.3-.9-2.1-.9ZM15.7,9.7c.4-.4.4-1,0-1.4-.4-.4-1-.4-1.4,0,0,0,0,0,0,0l-4.3,4.3-1.3-1.3c-.4-.4-1-.4-1.4,0-.4.4-.4,1,0,1.4l2,2c.4.4,1,.4,1.4,0l5-5h0Z" fill-rule="evenodd"/>' : '<path d="M16.1,24l4,4,9.9-9.9M39.1,28.6l1.8-1.8c1.5-1.5,1.5-4.1,0-5.6h0s-1.8-1.8-1.8-1.8c-.7-.7-1.2-1.8-1.2-2.8v-2.5c0-2.2-1.8-4-4-4h-2.5c-1.1,0-2.1-.4-2.8-1.2l-1.8-1.8c-1.5-1.5-4.1-1.5-5.6,0,0,0,0,0,0,0l-1.8,1.8c-.7.7-1.8,1.2-2.8,1.2h-2.5c-2.2,0-4,1.8-4,4,0,0,0,0,0,0v2.5c0,1.1-.4,2.1-1.2,2.8l-1.8,1.8c-1.5,1.5-1.5,4.1,0,5.6,0,0,0,0,0,0l1.8,1.8c.7.7,1.2,1.8,1.2,2.8v2.5c0,2.2,1.8,4,4,4h2.5c1.1,0,2.1.4,2.8,1.2l1.8,1.8c1.5,1.5,4.1,1.5,5.6,0h0s1.8-1.8,1.8-1.8c.7-.7,1.8-1.2,2.8-1.2h2.5c2.2,0,4-1.8,4-4v-2.5c0-1.1.4-2.1,1.2-2.8h0Z"/>';

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

module.exports = BadgeCheck;
