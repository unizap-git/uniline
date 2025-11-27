'use strict';

var React = require('react');

function Sparkles(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9,4.5c.3,0,.6.2.7.5l.8,2.8c.4,1.2,1.3,2.2,2.6,2.6l2.8.8c.4.1.6.5.5.9,0,.2-.3.4-.5.5l-2.8.8c-1.2.4-2.2,1.3-2.6,2.6l-.8,2.8c-.1.4-.5.6-.9.5-.2,0-.4-.3-.5-.5l-.8-2.8c-.4-1.2-1.3-2.2-2.6-2.6l-2.8-.8c-.4-.1-.6-.5-.5-.9,0-.2.3-.4.5-.5l2.8-.8c1.2-.4,2.2-1.3,2.6-2.6l.8-2.8c0-.3.4-.5.7-.5ZM18,1.5c.3,0,.6.2.7.6l.3,1c.2.9,1,1.7,1.9,1.9l1,.3c.4,0,.6.5.5.9,0,.3-.3.5-.5.5l-1,.3c-.9.2-1.7,1-1.9,1.9l-.3,1c0,.4-.5.6-.9.5-.3,0-.5-.3-.5-.5l-.3-1c-.2-.9-1-1.7-1.9-1.9l-1-.3c-.4,0-.6-.5-.5-.9,0-.3.3-.5.5-.5l1-.3c.9-.2,1.7-1,1.9-1.9l.3-1c0-.3.4-.6.7-.6ZM16.5,15c.3,0,.6.2.7.5l.4,1.2c.1.4.5.8.9.9l1.2.4c.4.1.6.6.5.9,0,.2-.2.4-.5.5l-1.2.4c-.4.1-.8.5-.9.9l-.4,1.2c-.1.4-.6.6-.9.5-.2,0-.4-.2-.5-.5l-.4-1.2c-.1-.4-.5-.8-.9-.9l-1.2-.4c-.4-.1-.6-.6-.5-.9,0-.2.2-.4.5-.5l1.2-.4c.4-.1.8-.5.9-.9l.4-1.2c.1-.3.4-.5.7-.5Z" fill-rule="evenodd"/>' : '<path d="M19.9,31.4l-1.5,5.4-1.5-5.4c-.8-2.8-3-5-5.8-5.8l-5.4-1.5,5.4-1.5c2.8-.8,5-3,5.8-5.8l1.5-5.4,1.5,5.4c.8,2.8,3,5,5.8,5.8l5.4,1.5-5.4,1.5c-2.8.8-5,3-5.8,5.8h0ZM35.8,17.8l-.5,2-.5-2c-.6-2.3-2.4-4.1-4.6-4.6l-2-.5,2-.5c2.3-.6,4.1-2.4,4.6-4.6l.5-2,.5,2c.6,2.3,2.4,4.1,4.6,4.6l2,.5-2,.5c-2.3.6-4.1,2.4-4.6,4.6ZM33.2,40.2l-.7,2.2-.7-2.2c-.4-1.3-1.4-2.3-2.7-2.7l-2.2-.7,2.2-.7c1.3-.4,2.3-1.4,2.7-2.7l.7-2.2.7,2.2c.4,1.3,1.4,2.3,2.7,2.7l2.2.7-2.2.7c-1.3.4-2.3,1.4-2.7,2.7Z"/>';

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

module.exports = Sparkles;
