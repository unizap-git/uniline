'use strict';

var React = require('react');

function BellActive(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11.2,3.8c-.1-.5-.6-.9-1.2-.8s-.9.6-.8,1.2l.3,1.7c-2.1,1.1-3.3,3.4-2.8,5.8l.3,1.5v.3c.3,1.4-.2,2.3-.6,3-.3.5-.5,1-.4,1.4.1.6.2,1.2.8,1.1l12.7-2.4c.5-.1.4-.7.3-1.3-.1-.6-.6-1.1-1.2-1.7-.6-.6-1.2-1.3-1.4-2.1-.2-1.1-.3-1.4-.3-1.6,0,0,0-.1,0-.2-.5-2.6-2.7-4.4-5.4-4.4,0,0-.3-1.6-.3-1.6Z"/>   <path d="M6.5,4.3c.4.4.4,1,0,1.4-1.1,1.2-1.7,2.6-1.8,4.3,0,.6-.5,1-1.1.9-.6,0-1-.5-.9-1.1.2-2.1.9-3.9,2.3-5.5.4-.4,1-.4,1.4,0,0,0,0,0,0,0Z" fill-rule="evenodd"/>   <path d="M8.9,19.7c.7.8,1.7,1.3,2.8,1.3,1.6,0,2.9-1.1,3.3-2.5,0,0-6.1,1.2-6.1,1.2Z"/>' : '<path d="M21.8,10.7l-.9-4.7M21.8,10.7c5.8-.9,11.2,3,12.2,8.8l.7,3.6c.9,4.7,4.8,5.2,5.3,7.6.2,1.2.4,2.4-.6,2.6l-25.7,4.8c-1.1.2-1.3-1-1.5-2.2-.4-2.4,3-4.3,2.2-9-.4-2.4.4,2.4-.7-3.6-1.1-5.7,2.5-11.3,8.2-12.6h0ZM7.5,19.6c.3-3.8,1.7-7,4.2-9.8M17.1,37.4c1.3,3.7,5.3,5.6,9,4.3,2.6-.9,4.4-3.2,4.7-5.9l.2-1-13.8,2.6Z"/>';

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

module.exports = BellActive;
