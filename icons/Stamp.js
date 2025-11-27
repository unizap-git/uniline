'use strict';

var React = require('react');

function Stamp(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.3,11.4l-1-1.3,1-1.3c.3-.4.3-.8,0-1.2l-1-1.3,1-1.3c.3-.4.3-1,0-1.3l-1.9-1.9c-.4-.4-.9-.4-1.3,0l-1.3,1-1.3-1c-.4-.3-.8-.3-1.2,0l-1.3,1-1.3-1c-.4-.3-.8-.3-1.2,0l-1.3,1-1.3-1c-.4-.3-.8-.3-1.2,0l-1.3,1-1.3-1c-.4-.3-1-.3-1.3,0l-1.9,1.9c-.4.4-.4.9,0,1.3l1,1.3-1,1.3c-.3.4-.3.8,0,1.2l1,1.3-1,1.3c-.3.4-.3.8,0,1.2l1,1.3-1,1.3c-.3.4-.3.8,0,1.2l1,1.3-1,1.3c-.3.4-.3,1,0,1.3l1.9,1.9c.2.2.4.3.7.3s.4,0,.6-.2l1.3-1,1.3,1c.4.3.8.3,1.2,0l1.3-1,1.3,1c.4.3.8.3,1.2,0l1.3-1,1.3,1c.4.3.8.3,1.2,0l1.3-1,1.3,1c.4.3,1,.3,1.3,0l1.9-1.9c.4-.4.4-.9,0-1.3l-1-1.3,1-1.3c.3-.4.3-.8,0-1.2l-1-1.3,1-1.3c.3-.4.3-.8,0-1.2ZM12,17.5c-3,0-5.5-2.5-5.5-5.5s2.5-5.5,5.5-5.5,5.5,2.5,5.5,5.5-2.5,5.5-5.5,5.5Z"/>' : '<path d="M5 8.8L8.8 5L12.6 7.85L16.4 5L20.2 7.85L24 5L27.8 7.85L31.6 5L35.4 7.85L39.2 5L43 8.8L40.15 12.6L43 16.4L40.15 20.2L43 24L40.15 27.8L43 31.6L40.15 35.4L43 39.2L39.2 43L35.4 40.15L31.6 43L27.8 40.15L24 43L20.2 40.15L16.4 43L12.6 40.15L8.8 43L5 39.2L7.85 35.4L5 31.6L7.85 27.8L5 24L7.85 20.2L5 16.4L7.85 12.6L5 8.8Z"/><circle cx="24" cy="24" r="9"/>';

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

module.exports = Stamp;
