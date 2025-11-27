'use strict';

var React = require('react');

function Turkey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,18h20l-2.5,4H4.5l-2.5-4Z"/>   <path d="M18.3,11.4c.5-.9.8-1.8.6-2.7-.1-.8-.6-1.5-1.4-2-1.5-1-3.2-.7-4.5.8-1.2,0-4.2,0-6.3,1.9-1.5,1.3-2.2,3.2-2.2,5.6v3c0,.6.4,1,1,1h13c.6,0,1-.4,1-1v-2.5c0-2.1-.7-3.4-1.2-4.1ZM11,12.9s-.3.2-.6.7-.3.9-.3.9c0,.6-.4,1-1,1s-1-.4-1-1,0-1.1.7-2.1c.6-.9,1.3-1.3,1.4-1.3.5-.2,1.1,0,1.3.4.2.5,0,1.1-.4,1.3Z"/>   <path d="M19.5,4.5c-.3.3-1.8,2.1-2.5,3" stroke-miterlimit="2"/>   <circle cx="19.2" cy="3.7" r="1.2"/>   <circle cx="20.4" cy="4.6" r="1.3"/>' : '<path d="M4 36H44L39 44H9L4 36Z"/><path d="M11 30.0001V36.0001H37L37 31.0001C37 25.0001 34 23.0001 34 23.0001C36 20.5001 37 17.0001 34 15.0001C31 13.0001 28.5 15.0001 27 17.0001C27 17.0001 11 15.0001 11 30.0001Z"/><path d="M21 24C21 24 20 24.5 19 26C18 27.5 18 29 18 29"/><path d="M39 9C38.4667 9.64 35.4444 13.2667 34 15"/><circle cx="38.3557" cy="7.48259" r="2.5" transform="rotate(35.0717 38.3557 7.48259)"/><circle cx="40.8108" cy="9.20646" r="2.5" transform="rotate(35.0717 40.8108 9.20646)"/>';

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

module.exports = Turkey;
