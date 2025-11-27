'use strict';

var React = require('react');

function BirthdayCake(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,19h-1v-7c0-.6-.4-1-1-1H4c-.6,0-1,.4-1,1v7h-1c-.6,0-1,.4-1,1s.4,1,1,1h20c.6,0,1-.4,1-1s-.4-1-1-1ZM19,19H5v-6h14v6Z"/>   <g>     <path d="M5.6,15.1c.3-.1.6-.1.9,0l1.6.8,1.6-.8c.3-.1.6-.1.9,0l1.6.8,1.6-.8c.3-.1.6-.1.9,0l1.6.8,1.6-.8c.3-.1.6-.1.9,0l1.6.8v-3.9H4v3.9l1.6-.8Z"/>     <path d="M20,18c-.2,0-.3,0-.4-.1l-1.6-.8-1.6.8c-.3.1-.6.1-.9,0l-1.6-.8-1.6.8c-.3.1-.6.1-.9,0l-1.6-.8-1.6.8c-.3.1-.6.1-.9,0l-1.6-.8-1.6.8c-.1,0-.3,0-.4,0v2h16v-2s0,0,0,0Z"/>   </g>   <path d="M16,12v-4.5"/>   <path d="M12,12v-4.5"/>   <path d="M8,12v-4.5"/>   <path d="M16,5v-1"/>   <path d="M12,5v-1"/>   <path d="M8,5v-1"/>   <path d="M4,21c-.6,0-1-.4-1-1v-8c0-.6.4-1,1-1s1,.4,1,1v8c0,.6-.4,1-1,1Z"/>   <path d="M20,21c-.6,0-1-.4-1-1v-8c0-.6.4-1,1-1s1,.4,1,1v8c0,.6-.4,1-1,1Z"/>' : '<path d="M8 40H40V24H8V40Z"/><path d="M40 40H8M40 40H4H8M40 40H44M40 40V24H8V40"/><path d="M40 34L36 32L32 34L28 32L24 34L20 32L16 34L12 32L8 34"/><path d="M32 24V15"/><path d="M24 24V15"/><path d="M16 24V15"/><path d="M32 10V8"/><path d="M24 10V8"/><path d="M16 10V8"/><path d="M8 24V40"/><path d="M40 24V40"/>';

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

module.exports = BirthdayCake;
