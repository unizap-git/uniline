'use strict';

var React = require('react');

function TicketsOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4.5,8l11.5-5.5,2.5,5.5"/>   <path d="M20.5,7H3.5c-1.1,0-2,.9-2,2v11c0,1.1.9,2,2,2h17c1.1,0,2-.9,2-2v-11c0-1.1-.9-2-2-2ZM6.5,18.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM6.5,15.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM6.5,12.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM18.7,12.2l-5.5,6c-.2.2-.5.3-.7.3h-2c-.6,0-1-.4-1-1s.4-1,1-1h1.6l.9-1h-1c-.6,0-1-.4-1-1s.4-1,1-1h2.8l2.5-2.7c.4-.4,1-.4,1.4,0,.4.4.4,1,0,1.4Z"/>' : '<rect x="5" y="42" width="26" height="38" rx="2" transform="rotate(-90 5 42)"/><path d="M9.00002 16L32 4.99999L37 16"/><circle cx="13" cy="23" r="2"/><circle cx="13" cy="29" r="2"/><circle cx="13" cy="35" r="2"/><path d="M21 35H25L36 23"/><path d="M24 29H30"/>';

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

module.exports = TicketsOne;
