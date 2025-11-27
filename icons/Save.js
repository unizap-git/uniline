'use strict';

var React = require('react');

function Save(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.1,4H4.5c-.6,0-1-.4-1-1s.4-1,1-1h12.6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M21.7,5.9l-3.9-3.6c-.2-.2-.4-.3-.7-.3h-5.1c.3,0,.5.1.7.3.2.2.3.4.3.7v3.7c0,.7-.7,1.3-1.5,1.3h-4c-.8,0-1.5-.6-1.5-1.3v-3.7c0-.6.4-1,1-1h-2.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V6.6c0-.3-.1-.5-.3-.7ZM12,18h-5c-.6,0-1-.4-1-1s.4-1,1-1h5c.6,0,1,.4,1,1s-.4,1-1,1ZM17,14H7c-.6,0-1-.4-1-1s.4-1,1-1h10c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6"/><path d="M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z"/><path d="M9 6H34.2814"/><path d="M14 26H34"/><path d="M14 34H24.0083"/>';

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

module.exports = Save;
