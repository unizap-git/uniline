'use strict';

var React = require('react');

function Android(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7,10l-2-3.5"/>   <path d="M16.5,10l2-3.5"/>   <path d="M12,8c-5.7,0-10.4,4.3-10.9,9.9,0,.3,0,.6.3.8.2.2.5.3.7.3h19.9c.3,0,.6-.1.7-.3.2-.2.3-.5.3-.8-.6-5.6-5.3-9.9-10.9-9.9ZM7.5,15.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM16.5,15.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M43.9011 36H4.09863C5.10208 25.8934 13.6292 18 23.9999 18C34.3706 18 42.8977 25.8934 43.9011 36Z"/><path d="M14 20L10 13"/><path d="M33 20L37 13"/><circle cx="15" cy="29" r="2"/><circle cx="33" cy="29" r="2"/>';

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

module.exports = Android;
