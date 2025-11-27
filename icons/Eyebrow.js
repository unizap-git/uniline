'use strict';

var React = require('react');

function Eyebrow(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.8,14.4c-.2-.2-4.4-5.4-9.8-5.4S2.4,14.2,2.2,14.4c-.3.4-.3.9,0,1.3.2.2,4.4,5.4,9.8,5.4s9.6-5.2,9.8-5.4c.3-.4.3-.9,0-1.3ZM12,18c-1.7,0-3-1.3-3-3s1.3-3,3-3,3,1.3,3,3-1.3,3-3,3Z"/>   <path d="M14,3c-3.5,0-9,1.8-10.5,3-1.5,1.2-.5,3.5.5,3,1-.5,7.6-2.9,10-3.5s5.8.4,7,1c-1.2-1-3.5-3.5-7-3.5Z"/>' : '<path d="M24 40C33.9411 40 42 30 42 30C42 30 33.9411 20 24 20C14.0589 20 6 30 6 30C6 30 14.0589 40 24 40Z"/><path d="M24 34C26.2091 34 28 32.2091 28 30C28 27.7909 26.2091 26 24 26C21.7909 26 20 27.7909 20 30C20 32.2091 21.7909 34 24 34Z"/><path d="M28.0001 6C21 6 10.0001 9.5 7.00005 12C4.00005 14.5 5.99999 19 8.00005 18C10.0001 17 23.2001 12.2 28.0001 11C32.8001 9.8 39.6667 11.8333 42 13C39.6667 11 35.0001 6 28.0001 6Z"/>';

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

module.exports = Eyebrow;
