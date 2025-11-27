'use strict';

var React = require('react');

function Orange(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13,6.5l1.5-2h-1.5l-1-1-1,1h-1.5l1.5,2"/>   <path d="M19.8,7.5c-1.6-2.4-3.7-2.2-5.9-2.1-1.2,0-2.6,0-3.9,0-2.2-.2-4.3-.3-5.9,2.1-1.1,1.6-1.7,3.6-1.7,5.5,0,6,3.8,10,9.5,10s9.5-4,9.5-10-.6-3.9-1.7-5.5ZM9,9c.6,0,1,.4,1,1s-.4,1-1,1-1-.4-1-1,.4-1,1-1ZM6.5,13.5c0-.6.4-1,1-1s1,.4,1,1-.4,1-1,1-1-.4-1-1ZM9,17c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM10.5,13.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M41 25.9999C41 35.9411 35 43.9999 24 43.9999C13 43.9999 7 35.9411 7 25.9999C7 22.3197 8.10446 18.8975 10 16.0465C13.2248 11.1965 17.7391 12.9999 24 12.9999C30.2609 12.9999 34.7752 11.1965 38 16.0465C39.8955 18.8975 41 22.3197 41 25.9999Z"/><path d="M26 13L29 9H26L24 7L22 9H19L22 13"/><circle cx="18" cy="20" r="2"/><circle cx="15" cy="27" r="2"/><circle cx="21" cy="25" r="2"/><circle cx="18" cy="32" r="2"/>';

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

module.exports = Orange;
