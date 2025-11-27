'use strict';

var React = require('react');

function SchoolCheck(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11.4,3.2c.3-.2.8-.2,1.1,0l6,4c.5.3.6.9.3,1.4-.2.3-.5.4-.8.4-.2,0-.4,0-.5-.1,0,0,0,0,0,0l-1.4-1v8.6l-.2-.2c-1-1-2.6-1-3.5,0-1,1-1,2.6,0,3.5l1.2,1.2h-5.5V7.9l-1.4,1c-.5.3-1.1.2-1.4-.3-.3-.5-.2-1.1.3-1.4,0,0,6-4,6-4ZM11,11c-.6,0-1,.4-1,1s.4,1,1,1h2c.6,0,1-.4,1-1s-.4-1-1-1h-2ZM10,9c0-.6.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1h-2c-.6,0-1-.4-1-1Z" fill-rule="evenodd"/>   <path d="M21,13.7v-1.6c0-.4-.3-.8-.7-1l-2.3-.6v3.9l.2-.2c.7-.7,1.9-.9,2.8-.5ZM6,10.5l-2.3.6c-.4.1-.7.5-.7,1v7.9c0,.6.4,1,1,1h2v-10.5Z"/>   <path d="M20.7,15.3c.4.4.4,1,0,1.4l-4,4c-.4.4-1,.4-1.4,0l-2-2c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.3,1.3,3.3-3.3c.4-.4,1-.4,1.4,0Z" fill-rule="evenodd"/>' : '<path d="M15,42.3v-20.6l-9.2,2.6v18h9.2ZM15,42.3V11.8M15,42.3h6.9M33.3,21.7v-9.9M33.3,21.7l9.2,2.6v2M33.3,21.7v6.9M37.9,14.8l-13.7-9.2-13.7,9.2M21.9,17.1h4.6M21.9,24h4.6M28.7,37.7l4.6,4.6,9.2-9.2"/>';

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

module.exports = SchoolCheck;
