'use strict';

var React = require('react');

function Panda(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.4,4.1c-.9-.9-2.3-1.4-3.8-1.4-1.4,0-2.7.6-3.6,1.4-.6-.1-1.3-.2-1.9-.2s-1.3,0-1.9.2c-2-1.9-5.6-1.9-7.4,0-1.8,1.8-1.8,4.6-.2,6.6-.3.9-.4,1.8-.4,2.7,0,5.2,4.5,9.5,10,9.5s10-4.3,10-9.5-.2-1.9-.4-2.7c1.6-2,1.6-4.9-.2-6.6ZM3.4,8.6c-.4-1.1-.2-2.3.6-3.1.8-.8,2.3-1,3.6-.6-1.7.8-3.2,2.1-4.2,3.6ZM7.7,15.2c-1.4-.4-2.1-1.9-1.6-3.5.4-1.6,1.8-2.6,3.2-2.3.7.2,1.3.7,1.5,1.4.3.6.3,1.4,0,2.1-.2.7-.6,1.4-1.1,1.8-.5.4-1,.5-1.5.5s-.4,0-.6,0ZM15.9,17.9c-.1.3-.6,1.3-1.7,1.6-.4.1-1,.1-1.8-.3-.5.3-.9.3-1.2.3s-.4,0-.5,0c-1.1-.3-1.6-1.3-1.7-1.6-.2-.5,0-1.1.6-1.3.5-.2,1.1,0,1.3.6,0,.2.2.3.3.4,0,0,.3,0,.6-.3.4-.3.9-.3,1.3,0,.3.3.5.3.6.3,0,0,.2-.2.3-.4.2-.5.8-.8,1.3-.6.5.2.8.8.6,1.3ZM16.2,15.2c-.2,0-.4,0-.6,0-.5,0-1-.2-1.5-.5-.5-.4-.9-1.1-1.1-1.8-.2-.7-.2-1.5,0-2.1.3-.7.9-1.2,1.5-1.4.7-.2,1.4,0,2.1.5.5.4.9,1.1,1.1,1.8.4,1.6-.3,3.2-1.6,3.5ZM20.5,8.6c-1-1.5-2.4-2.8-4.1-3.6.4-.1.8-.2,1.2-.2.9,0,1.8.3,2.3.8.8.8,1,2,.6,3.1Z"/>' : '<ellipse cx="24" cy="27" rx="18" ry="17"/><ellipse cx="16.9333" cy="24.6402" rx="3" ry="4" transform="rotate(15 16.9333 24.6402)"/><ellipse rx="3" ry="4" transform="matrix(-0.965926 0.258819 0.258819 0.965926 30.9329 24.6402)"/><path d="M40.9995 20.999C44.1237 17.8748 44.4376 12.7804 41.3134 9.65616C38.1892 6.53196 32.124 6.87507 28.9998 9.99927"/><path d="M7 20.9995C3.87581 17.8753 3.53224 12.7807 6.65644 9.65655C9.78063 6.53236 15.8758 6.87532 19 9.99951"/><path d="M20 35C20.5 36.2935 22.2 38.2769 25 35.8623C27.8 38.2769 29.5 36.2935 30 35"/>';

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

module.exports = Panda;
