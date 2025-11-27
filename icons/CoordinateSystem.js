'use strict';

var React = require('react');

function CoordinateSystem(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M5.5,9.1l6.5,3.7,6.5-3.7c.3-.2.8-.2,1.1,0,0,0,0,0,0,0l-6.5-3.7v-2.4c0-.6-.4-1-1-1s-1,.4-1,1v2.4l-6.5,3.7s0,0,0,0c.3-.2.7-.2,1.1,0Z"/>     <path d="M4.4,9.2c0,0-.2.2-.2.3,0-.1.1-.2.2-.3Z"/>     <path d="M19.9,9.5c0,.1,0,.2.1.3,0-.1,0-.2-.1-.3Z"/>     <path d="M19.9,9.5c0-.1-.1-.2-.2-.3,0,0,.2.2.2.3Z"/>     <path d="M11,22v-7.4l-6.5-3.7c-.3-.2-.5-.6-.5-.9,0,0,0,0,0,0v7.4l-2.4,1.2c-.5.2-.7.8-.4,1.3s.5.6.9.6.3,0,.4-.1l2.5-1.3,6.5,3.7s0,0,0,0c-.3-.2-.6-.5-.6-.9Z"/>     <path d="M22.4,18.6l-2.4-1.2v-7.4s0,0,0,0c0,.4-.1.7-.5.9l-6.5,3.7v7.4c0,.4-.2.7-.6.9,0,0,0,0,0,0l6.5-3.7,2.5,1.3c.1,0,.3.1.4.1.4,0,.7-.2.9-.6.2-.5,0-1.1-.4-1.3Z"/>     <path d="M12,23c.1,0,.2,0,.3,0-.1,0-.2,0-.3,0Z"/>     <path d="M4,9.8c0-.1,0-.2.1-.3,0,0,0,.2-.1.3Z"/>     <path d="M12,23c-.1,0-.2,0-.3,0,.1,0,.2,0,.3,0Z"/>   </g>   <path d="M12,23c-.2,0-.3,0-.5-.1l-3.5-2,1-1.7,3,1.7,3-1.7,1,1.7-3.5,2c-.2,0-.3.1-.5.1ZM20,14h-2v-3.4l-3-1.7,1-1.7,3.5,2c.3.2.5.5.5.9v4ZM6,14h-2v-4c0-.4.2-.7.5-.9l3.5-2,1,1.7-3,1.7v3.4Z"/>' : '<path d="M24 12L38 20V36L24 44L10 36V20L24 12Z"/><path d="M24 6V12"/><path d="M10 20L24 28L38 20"/><path d="M38 36L44 39"/><path d="M4 39L10 36"/><path d="M24 28V44"/><path d="M31 16L38 20V28M17 16L10 20V28M17 40L24 44L31 40"/>';

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

module.exports = CoordinateSystem;
