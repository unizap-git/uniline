'use strict';

var React = require('react');

function Superscript(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13.1,19.7c-.3,0-.6-.1-.8-.4l-3.8-4.7-3.8,4.7c-.3.4-1,.5-1.4.2-.4-.3-.5-1-.2-1.4l4.1-5.1L3.2,7.9c-.3-.4-.3-1.1.2-1.4.4-.3,1.1-.3,1.4.2l3.8,4.7,3.8-4.7c.3-.4,1-.5,1.4-.2.4.3.5,1,.2,1.4l-4.1,5.1,4.1,5.1c.3.4.3,1.1-.2,1.4-.2.1-.4.2-.6.2ZM20,11h-4c-.6,0-1-.4-1-1v-.5c0-.3.1-.5.3-.7.4-.4.9-.8,1.5-1.2.6-.4,1.7-1.3,1.9-1.7v-.9h-1.8c0,.6-.4,1-1,1s-1-.4-1-1c0-1.1.9-2,2-2h1.8c1.1,0,2,.9,2,2v1c0,1.1-1.1,2-2.5,3h1.7c.6,0,1,.4,1,1s-.4,1-1,1ZM16,9.5h0,0Z"/>' : '<path d="M20 10h-4v-.5C17.0989 8.46711 19.75 7 19.75 6V4.99989c0-.55228-.4477-.99989-1-.99989H17c-.5523 0-1 .44772-1 1M4 7.30341l9.1221 11.39319m0-11.39319L4 18.6966"/>';

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

module.exports = Superscript;
