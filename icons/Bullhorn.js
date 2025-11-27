'use strict';

var React = require('react');

function Bullhorn(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.5,3.1c.3.2.5.5.5.9v16c0,.6-.4,1-1,1-.2,0-.4,0-.6-.2l-5.4-3.9V7.1l5.4-3.9c.3-.2.7-.2,1,0ZM22,12c0,1.5-.8,2.8-2,3.5v-6.9c1.2.7,2,2,2,3.5ZM10,8h-6c-.6,0-1,.4-1,1v6c0,.6.4,1,1,1h6v-8ZM10,17h-5v3c0,.6.4,1,1,1h3c.6,0,1-.4,1-1v-3Z" fill-rule="evenodd"/>' : '<path d="M21.3,17.1h-12.7c-1.2,0-2.1,1-2.1,2.1v8.5c0,1.2,1,2.1,2.1,2.1h12.7M21.3,17.1v12.7M21.3,17.1l11.5-8.2c1-.7,2.3-.5,3,.5.3.4.4.8.4,1.2v25.7c0,1.2-1,2.1-2.1,2.1-.4,0-.9-.1-1.2-.4l-11.5-8.2M36.2,29.8c3.5,0,6.4-2.9,6.4-6.4s-2.9-6.4-6.4-6.4M10.7,29.8h6.4v10.6h-6.4v-10.6Z"/>';

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

module.exports = Bullhorn;
