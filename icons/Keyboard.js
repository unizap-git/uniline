'use strict';

var React = require('react');

function Keyboard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM12,7c.7,0,1.2.6,1.2,1.2s-.6,1.2-1.2,1.2-1.2-.6-1.2-1.2.6-1.2,1.2-1.2ZM12,11c.7,0,1.2.6,1.2,1.2s-.6,1.2-1.2,1.2-1.2-.6-1.2-1.2.6-1.2,1.2-1.2ZM7.5,7c.7,0,1.2.6,1.2,1.2s-.6,1.2-1.2,1.2-1.2-.6-1.2-1.2.6-1.2,1.2-1.2ZM6.2,12.2c0-.7.6-1.2,1.2-1.2s1.2.6,1.2,1.2-.6,1.2-1.2,1.2-1.2-.6-1.2-1.2ZM15.5,17.5h-7c-.6,0-1-.4-1-1s.4-1,1-1h7c.6,0,1,.4,1,1s-.4,1-1,1ZM16.5,13.5c-.7,0-1.2-.6-1.2-1.2s.6-1.2,1.2-1.2,1.2.6,1.2,1.2-.6,1.2-1.2,1.2ZM16.5,9.5c-.7,0-1.2-.6-1.2-1.2s.6-1.2,1.2-1.2,1.2.6,1.2,1.2-.6,1.2-1.2,1.2Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 19C16.3807 19 17.5 17.8807 17.5 16.5C17.5 15.1193 16.3807 14 15 14C13.6193 14 12.5 15.1193 12.5 16.5C12.5 17.8807 13.6193 19 15 19Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 27C16.3807 27 17.5 25.8807 17.5 24.5C17.5 23.1193 16.3807 22 15 22C13.6193 22 12.5 23.1193 12.5 24.5C12.5 25.8807 13.6193 27 15 27Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 19C25.3807 19 26.5 17.8807 26.5 16.5C26.5 15.1193 25.3807 14 24 14C22.6193 14 21.5 15.1193 21.5 16.5C21.5 17.8807 22.6193 19 24 19Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 27C25.3807 27 26.5 25.8807 26.5 24.5C26.5 23.1193 25.3807 22 24 22C22.6193 22 21.5 23.1193 21.5 24.5C21.5 25.8807 22.6193 27 24 27Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M33 19C34.3807 19 35.5 17.8807 35.5 16.5C35.5 15.1193 34.3807 14 33 14C31.6193 14 30.5 15.1193 30.5 16.5C30.5 17.8807 31.6193 19 33 19Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M33 27C34.3807 27 35.5 25.8807 35.5 24.5C35.5 23.1193 34.3807 22 33 22C31.6193 22 30.5 23.1193 30.5 24.5C30.5 25.8807 31.6193 27 33 27Z"/><path d="M17 33H31"/>';

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

module.exports = Keyboard;
