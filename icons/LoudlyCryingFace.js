'use strict';

var React = require('react');

function LoudlyCryingFace(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM6.5,13.5v-3.5h0c-.5,0-.9-.4-1-.9,0-.5.3-1.1.8-1.1l3.5-.5c.5,0,1.1.3,1.1.8s-.3,1.1-.8,1.1l-1.6.2v3.8c0,.6-.4,1-1,1s-1-.4-1-1h0ZM15.9,18.5c-.1,0-.3,0-.4,0-.4,0-.7-.2-.9-.5,0,0-.8-1.5-2.6-1.5s-2.6,1.4-2.6,1.5c-.3.5-.9.7-1.3.4s-.7-.8-.4-1.3,1.3-2.6,4.4-2.6,4.3,2.4,4.4,2.6c.2.5,0,1.1-.4,1.3h-.2ZM17.5,10h0v3.5c0,.6-.4,1-1,1s-1-.4-1-1v-3.8l-1.6-.2c-.5,0-.9-.6-.8-1.1,0-.5.6-.9,1.1-.8l3.5.5c.5,0,.9.6.8,1.1,0,.5-.5.9-1,.9h0Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M31 35C31 35 29 31 24 31C19 31 17 35 17 35"/><path d="M35 18L28 17"/><path d="M33 18V27"/><path d="M20 17L13 18"/><path d="M15 18V27"/>';

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

module.exports = LoudlyCryingFace;
