'use strict';

var React = require('react');

function Deer(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,6.3c-.6-.6-1.4-.8-2.3-.6-.8.1-1.5.5-2.1,1.2-.3.3-.6.7-.8,1.1-.2-.1-.4-.2-.6-.3,1.7-1.3,2.9-3.3,2.9-5.6s-.4-1-1-1-1,.4-1,1c0,1.2-.5,2.4-1.2,3.2.1-.5.2-1.1.2-1.7s-.4-1-1-1-1,.4-1,1c0,2.1-1.1,3.5-2,3.5s-2-1.4-2-3.5-.4-1-1-1-1,.4-1,1,0,1.2.2,1.7c-.7-.9-1.2-2-1.2-3.2s-.4-1-1-1-1,.4-1,1c0,2.3,1.1,4.4,2.9,5.6-.2,0-.4.2-.6.3-.2-.4-.5-.8-.8-1.1h0c-1.4-1.4-3.3-1.6-4.4-.5-1.1,1.1-.9,3,.5,4.4.8.8,1.7,1.2,2.5,1.2,0,.5,0,1,0,1.6,0,3.8,2.8,9.5,7,9.5s7-5.7,7-9.5,0-1.1,0-1.6c.1,0,.2,0,.4,0,.8-.1,1.5-.5,2.1-1.2h0c1.4-1.4,1.6-3.3.5-4.4ZM10,14c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM12,18c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM14,14c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M36 27C36 34.2165 30.6274 44 24 44C17.3726 44 12 34.2165 12 27C12 19.7835 13.5 16 24 16C34.5 16 36 19.7835 36 27Z"/><ellipse rx="5" ry="3.5" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 38.9996 17.5003)"/><ellipse cx="8.99963" cy="17.4997" rx="5" ry="3.5" transform="rotate(45 8.99963 17.4997)"/><path d="M12 4C12 10.6274 17.3726 16 24 16C30.6274 16 36 10.6274 36 4"/><path d="M18 7C18 11.9706 20.6863 16 24 16C27.3137 16 30 11.9706 30 7"/><circle cx="19.9995" cy="26" r="2"/><circle cx="23.9995" cy="34" r="2"/><circle cx="27.9995" cy="26" r="2"/>';

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

module.exports = Deer;
