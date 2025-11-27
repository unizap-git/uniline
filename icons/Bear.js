'use strict';

var React = require('react');

function Bear(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.5,6.5c0-2.8-2.2-5-5-5s-3.2.9-4.1,2.4c-.9-.1-1.9-.1-2.9,0-.9-1.5-2.4-2.4-4.1-2.4C3.7,1.5,1.5,3.8,1.5,6.5s.4,2.2,1.3,3.2c-.4.9-.8,2.1-.8,3.3,0,5.1,4.6,9.5,10,9.5s10-4.4,10-9.5-.4-2.4-.8-3.3c.8-.9,1.3-2.1,1.3-3.2ZM10,8.5c.6,0,1,.4,1,1s-.4,1-1,1-1-.4-1-1,.4-1,1-1ZM14.7,17.2c-.8.8-1.7,1.1-2.7,1.1s-1.9-.4-2.7-1.1-.4-1,0-1.4c.4-.4,1-.4,1.4,0,0,0,.2.2.3.2v-1.9c-.3-.3-.5-.7-.5-1.1,0-.8.7-1.5,1.5-1.5s1.5.7,1.5,1.5-.2.8-.5,1.1v1.9c.1,0,.2-.2.3-.2.4-.4,1-.4,1.4,0s.4,1,0,1.4ZM14,10.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M5 13.0606C5 15.5392 6.29171 17.5214 8 19C6.92442 21.1464 6 23.4737 6 26C6 35.2215 14.1238 43 24 43C33.8762 43 42 35.2215 42 26C42 23.4737 41.0756 21.1464 40 19C41.7083 17.5214 43 15.4786 43 13C43 8.54825 39.3208 5 35 5C31.7266 5 29.167 7.06019 28 10C26.7347 9.73491 25.351 9.60606 24 9.60606C22.649 9.60606 21.2653 9.73491 20 10C18.833 7.06019 16.2734 5 13 5C8.67918 5 5 8.60886 5 13.0606Z"/><circle cx="20" cy="19" r="2"/><circle cx="28" cy="19" r="2"/><circle cx="24" cy="26" r="3"/><path d="M24 26V34"/><path d="M28 33C25.7238 35.2762 22.2762 35.2762 20 33"/>';

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

module.exports = Bear;
