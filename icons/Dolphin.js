'use strict';

var React = require('react');

function Dolphin(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,16.5c.2-6.2-2.5-9.9-4.4-11.4.3-1,.5-1.3.5-1.3,0,0,0,0,0,0,.3-.2.4-.5.4-.9s-.2-.6-.5-.8c-1.7-.9-3.2-.3-4,.2C7,0,4.4,3.2,3.4,4.6c-.8.2-2,.6-2.1,1.8,0,1,.9,1.7,1.9,2.1l.7.2c.5.2,1.1.4,1.7.6.3,1.4.7,2.5.9,3l1-.3-.9.4c.2.4.6.7,1.1.6.5,0,.8-.5.8-1,0-.2.2-.6.5-1.2,3.1,1.6,5.4,4.8,6.9,6.8-.5,1.2-1.1,2.8-1.3,3.6-.1.4,0,.8.3,1.1.2.2.4.2.6.2s.3,0,.4-.1l2.7-1.3,3.1.9c.3,0,.6,0,.9-.2.2-.2.4-.5.4-.8,0-1.8-1.7-3.5-3-4.5ZM8,6.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M24.0002 7.00002C14.2305 1.61313 9.68601 8.63202 8.00016 11.0004C2.33569 12.2184 5.14579 14.3237 7.00023 15.0004C8.21404 15.4064 11.1458 16.3233 13.0002 16.9999C13.4048 20.248 14.6631 23.1541 15.0002 23.9999C15.0002 23.1879 16.3259 20.3533 17.0002 18.9999C25.0923 22.248 30.7971 30.6015 34.0002 34.9999C32.7864 37.436 31.506 41.3082 31.0002 42.9999L37.0002 40L44.0002 42C44.0002 38.7519 39.8547 35.3534 38.0002 34C38.8095 21.0076 32.7091 13.1993 29.0002 11C29.4048 9.37598 30.1573 6.67671 31.0002 6.00002C27.7634 4.37598 25.1803 6.15418 24.0002 7.00002Z"/><circle cx="16" cy="11" r="2"/>';

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

module.exports = Dolphin;
