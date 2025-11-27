'use strict';

var React = require('react');

function Ssd(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19,19V3c0-.6-.4-1-1-1H6c-.6,0-1,.4-1,1v16"/>   <path d="M12.5,7h-1"/>   <path d="M12.5,11h-1"/>   <path d="M16,15h-8c-2.2,0-4,1.8-4,4s1.8,4,4,4h.5c-.6,0-1-.4-1-1v-2.5c0-.6.4-1,1-1s1,.4,1,1v2.5c0,.6-.4,1-1,1h2.5c-.6,0-1-.4-1-1v-2.5c0-.6.4-1,1-1s1,.4,1,1v2.5c0,.6-.4,1-1,1h2.5c-.6,0-1-.4-1-1v-2.5c0-.6.4-1,1-1s1,.4,1,1v2.5c0,.6-.4,1-1,1h2.5c2.2,0,4-1.8,4-4s-1.8-4-4-4ZM16,20c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>   <path d="M14.5,23h-7c-.6,0-1-.4-1-1s.4-1,1-1h7c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M38 38V6C38 4.89543 37.1046 4 36 4H12C10.8954 4 10 4.89543 10 6V38"/><path d="M25 14H23"/><path d="M25 22H23"/><path d="M10 38C10 34.6863 12.6863 32 16 32H32C35.3137 32 38 34.6863 38 38C38 41.3137 35.3137 44 32 44H16C12.6863 44 10 41.3137 10 38Z"/><path d="M17 39V44"/><path d="M22 39V44"/><path d="M27 39V44"/><circle cx="32" cy="38" r="2"/><path d="M29 44H15"/>';

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

module.exports = Ssd;
