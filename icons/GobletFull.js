'use strict';

var React = require('react');

function GobletFull(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16.5,22H6.5"/>   <path d="M11.5,14v8"/>   <path d="M18,4.7c-.6-1.9-1.6-3.3-1.6-3.3-.2-.3-.5-.4-.8-.4H7.5c-.3,0-.6.2-.8.4,0,0-.9,1.2-1.5,3-.4,1.2-.7,2.4-.7,3.6s.2,2.1.7,3.1c1.2,2.4,3.6,3.9,6.3,3.9s5.3-1.7,6.4-4.2c.4-.9.6-1.8.6-2.8s-.2-2.1-.5-3.3ZM17.9,8.9c-.1,0-1.8.7-3.7.7s-2.2-.2-3.2-.8c-2-1.2-5.1,0-5.1,0-.5.2-1.1,0-1.3-.5-.2-.5,0-1.1.5-1.3.2,0,4-1.7,6.9,0,2,1.2,5.1,0,5.1,0,.5-.2,1.1,0,1.3.5s0,1.1-.5,1.3Z"/>   <path d="M17,11.4c-.1,0-.3,0-.4,0-.5-.2-.7-.8-.5-1.3.3-.6.4-1.3.4-2s-.2-1.7-.5-2.6c-.2-.5.1-1.1.6-1.3.5-.2,1.1.1,1.3.6.4,1.1.5,2.2.5,3.3s-.2,1.9-.6,2.8c-.2.4-.5.6-.9.6Z"/>   <path d="M6.1,11.6c-.4,0-.7-.2-.9-.6-.5-1-.7-2-.7-3.1s.2-2.4.7-3.6c.2-.5.8-.8,1.3-.6.5.2.8.8.6,1.3-.4,1-.5,2-.5,2.9s.2,1.5.5,2.2c.2.5,0,1.1-.5,1.3-.1,0-.3.1-.4.1Z"/>' : '<path d="M33 44H23H13"/><path d="M23 28V44"/><path d="M35 16C35 17.6751 34.6432 19.2839 34 20.7491C32.1475 24.9696 27.9194 28 23 28C18.2583 28 14.159 25.2498 12.21 21.2576C11.435 19.6699 11 17.8857 11 16C11 13.6271 11.5331 11.3874 12.21 9.5C13.3874 6.21729 15 4 15 4H31C31 4 32.8152 6.49591 34 10.1121C34.574 11.8639 35 13.8787 35 16Z"/><path d="M35 15.9998C35 15.9998 28 18.9998 23 15.9998C18 12.9998 11 15.9998 11 15.9998"/><path d="M34 10.1123C34.574 11.8642 35 13.8789 35 16.0002C35 17.6754 34.6432 19.2841 34 20.7494"/><path d="M12.21 9.5C11.5331 11.3874 11 13.6271 11 16C11 17.8857 11.435 19.6699 12.21 21.2576"/>';

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

module.exports = GobletFull;
