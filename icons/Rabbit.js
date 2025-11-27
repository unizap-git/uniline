'use strict';

var React = require('react');

function Rabbit(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.7,11.1c.7-1.9,1.7-5.6,1-8.4,0,0,0,0,0-.1-.2-.6-.7-1.2-1.4-1.4-.5-.2-1.2-.3-2.2.1-.4.2-1,.7-1.4,1.5-.5,1.1-.2,4.3.1,6.5-.9-.2-1.9-.3-2.9-.3s-1.9.1-2.8.3c.3-2.6.5-5.5,0-6.5-.3-.8-.9-1.3-1.4-1.5-1-.4-1.8-.3-2.2-.1-.6.3-1.1.8-1.4,1.4,0,0,0,0,0,.1-.7,2.7.3,6.5,1,8.3-1.7,1.3-2.8,3-2.8,4.9,0,3.9,4.3,7,9.5,7s9.5-3.1,9.5-7-1.1-3.7-2.8-4.9ZM7.1,10s0,0,0,0c-.7-1.9-1.4-4.8-.9-6.8,0,0,.1-.2.2-.2.2,0,.5,0,.6,0,0,0,.2.1.3.4,0,0,0,0,0,0,.2.6,0,3.7-.3,6.4ZM9,15.7c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM12,18.7c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM15,15.7c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM17,10c0,0,0-.1,0-.2-.4-2.5-.6-5.6-.4-6.2,0,0,0,0,0-.1.1-.3.3-.4.3-.4h0c.2,0,.5-.2.6,0,.1,0,.2.2.2.2.5,2-.2,4.9-.8,6.7Z"/>' : '<ellipse cx="24" cy="32" rx="17" ry="12"/><circle cx="18" cy="29.4121" r="2"/><circle cx="24" cy="35.4121" r="2"/><circle cx="30" cy="29.4121" r="2"/><path d="M12.6672 22C11.3521 18.8333 9.06034 11.1127 10.413 5.91273C10.7887 4.91273 12.2164 3.21273 14.9217 4.41273C15.2974 4.57935 16.1616 5.2126 16.6125 6.4126C17.7397 8.4126 16.0489 21 16.0489 21"/><path d="M35.3871 22C36.7025 18.8333 38.9324 11.1127 37.5793 5.91273C37.2035 4.91273 35.7754 3.21273 33.0693 4.41273C32.6935 4.57935 31.8291 5.2126 31.378 6.4126C30.2505 8.4126 32.0044 20 32.0044 20"/>';

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

module.exports = Rabbit;
