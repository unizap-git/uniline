'use strict';

var React = require('react');

function Ad(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM11.3,16.5c0,0-.2,0-.3,0-.4,0-.8-.3-1-.7l-.2-.8h-1.6l-.2.8c-.2.5-.7.8-1.2.7-.5-.2-.8-.7-.7-1.2l.4-1.5s0,0,0,0l1.6-5.5c.1-.4.5-.7,1-.7s.8.3,1,.7l1.6,5.5s0,0,0,0l.4,1.5c.2.5-.2,1.1-.7,1.2ZM13.5,16.5c-.6,0-1-.4-1-1v-7c0-.6.4-1,1-1,3.1,0,5,1.7,5,4.5s-1.9,4.5-5,4.5Z"/>   <path d="M14.5,9.6v4.8c1.3-.3,2-1.1,2-2.4s-.7-2.2-2-2.4Z"/>   <polygon points="8.8 13 9.2 13 9 12.1 8.8 13"/>' : '<circle cx="24" cy="24" r="20"/><path d="M38 38L35 35"/><path d="M10 10L13 13"/><path d="M21.1429 28L18 17L14.8571 28H21.1429Z"/><path d="M14 31L14.8571 28M22 31L21.1429 28M21.1429 28L18 17L14.8571 28M21.1429 28H14.8571"/><path d="M35 24C35 29 31.4183 31 27 31V17C31.4183 17 35 19 35 24Z"/>';

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

module.exports = Ad;
