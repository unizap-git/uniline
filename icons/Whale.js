'use strict';

var React = require('react');

function Whale(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.7,6.1c-.2-.3-.5-.6-.9-.6-.4,0-.7.2-.9.5-.2.4-1.2.8-1.7,1-.5,0-1.2-.4-1.4-.6-.2-.3-.6-.5-1-.5-.4,0-.7.4-.8.8-.3,1.7,0,3,1,3.8.2.2.3.3.3.3,0,0,0,.1,0,.1-.2.2-.5.2-.7.2-.5,0-1-.4-1.4-.9-2.7-4.2-5.7-4.8-7.2-4.8s0,0,0,0c-2.2,0-3.8.8-5,2.1-1.2,1.4-1.5,3.2-1.5,4.5-.9,1.8-.6,2.6.4,3.6,2.1,2,5.4,2.8,8.4,2.8s3.7-.3,5-.8c2.9-1.2,4.7-3.4,5.2-5.1,2.6-2,2.9-5.2,2.3-6.5ZM6,11c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M16.0691 13C6.25336 13.3494 4.67583 21.0064 5.11403 24.7913C3.36116 27.9356 3.89597 28.7217 5.2104 30.0319C11.7835 36.1459 24.0534 35.7092 29.75 33.5256C35.7096 31.08 38.7486 26.4747 39.0407 24C44.2991 20.5063 44.4063 14.6013 43.676 13C42.896 14.3101 40.6474 15.2721 39.0407 16C37.2879 16.3494 34.7659 15.038 34.0355 13.8734C33.5343 16.5 34.0355 18.5 35.3501 19.5507C37.6376 21.2976 36.4754 23.0633 36.0372 23.5C34.1405 25.3902 30.5308 24.4905 28.7771 21.7343C24.0533 14.3101 18.9905 13 16.0691 13Z"/><path d="M5 28C7.83333 28.5321 13.4 29.5542 17 27"/><circle cx="12" cy="20" r="2"/>';

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

module.exports = Whale;
