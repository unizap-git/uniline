'use strict';

var React = require('react');

function Subscript(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,21h-4c-.6,0-1-.4-1-1v-.5c0-.3.1-.5.3-.7.4-.4.9-.8,1.5-1.2.6-.4,1.7-1.3,1.9-1.7v-.9h-1.8c0,.6-.4,1-1,1s-1-.4-1-1c0-1.1.9-2,2-2h1.8c1.1,0,2,.9,2,2v1c0,1.1-1.1,2-2.5,3h1.7c.6,0,1,.4,1,1s-.4,1-1,1ZM16,19.5h0,0ZM18.8,15.9h0ZM13.1,16.4c-.3,0-.6-.1-.8-.4l-3.8-4.7-3.8,4.7c-.3.4-1,.5-1.4.2-.4-.3-.5-1-.2-1.4l4.1-5.1L3.2,4.6c-.3-.4-.3-1.1.2-1.4s1.1-.3,1.4.2l3.8,4.7,3.8-4.7c.3-.4,1-.5,1.4-.2.4.3.5,1,.2,1.4l-4.1,5.1,4.1,5.1c.3.4.3,1.1-.2,1.4-.2.1-.4.2-.6.2Z"/>' : '<path d="M20 20h-4v-.5c1.0989-1.0329 3.75-2.5 3.75-3.5v-1.0001c0-.5523-.4477-.9999-1-.9999H17c-.5522 0-1 .4477-1 1M4.00004 4l9.12206 11.3932m0-11.3932L4 15.3932"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = Subscript;
