'use strict';

var React = require('react');

function Elevator(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,3.5v17M21,3.5H2h1v17M21,3.5h1M21,20.5h1M21,20.5H3M3,20.5h-1"/>   <path d="M12,3.5v17"/>   <path d="M3,3.5v17h18V3.5H3ZM9.7,13.2l-1.5,1.5c0,0-.2.2-.3.2-.1,0-.3,0-.4,0s-.3,0-.4,0c-.1,0-.2-.1-.3-.2l-1.5-1.5c-.4-.4-.4-1,0-1.4s.8-.4,1.2-.1v-1.7c0-.6.4-1,1-1s1,.4,1,1v1.7c.4-.2.9-.2,1.2.1s.4,1,0,1.4ZM18.7,12.2c-.2.2-.5.3-.7.3s-.3,0-.5-.2v1.7c0,.6-.4,1-1,1s-1-.4-1-1v-1.7c-.4.2-.9.2-1.2-.1s-.4-1,0-1.4l1.5-1.5c0,0,.2-.2.3-.2.2-.1.5-.1.8,0,.1,0,.2.1.3.2l1.5,1.5c.4.4.4,1,0,1.4Z"/>' : '<path d="M42 41V7H6V41H42Z"/><path d="M42 7V41M42 7H4H6V41M42 7H44M42 41H44M42 41H6M6 41H4"/><path d="M24 7V41"/><path d="M33 20V28"/><path d="M30 23L33 20L36 23"/><path d="M15 28V20"/><path d="M12 25L15 28L18 25"/>';

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

module.exports = Elevator;
