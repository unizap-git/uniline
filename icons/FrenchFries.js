'use strict';

var React = require('react');

function FrenchFries(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10.5,11v-5c0-.6-.4-1-1-1h-1.5c-.6,0-1,.4-1,1v4.5"/>   <path d="M17.5,10.5v-3.5c0-.6-.4-1-1-1h-1.5c-.6,0-1,.4-1,1v4"/>   <path d="M14,11V3c0-.6-.4-1-1-1h-1.5c-.6,0-1,.4-1,1v8"/>   <path d="M21,8.2c-.3-.2-.8-.2-1.1,0,0,0-3.3,2.3-7.9,2.3s-7.9-2.3-7.9-2.3c-.3-.2-.8-.2-1.1,0-.3.2-.5.6-.4,1l2.4,13c0,.5.5.8,1,.8h12.2c.5,0,.9-.3,1-.8l2.4-13c0-.4-.1-.8-.4-1ZM12,19c-2.3,0-4-1.1-4-2.5s1.7-2.5,4-2.5,4,1.1,4,2.5-1.7,2.5-4,2.5Z"/>' : '<path d="M21 22V12C21 10.8954 20.1046 10 19 10H16C14.8954 10 14 10.8954 14 12V21"/><path d="M35 21V14C35 12.8954 34.1046 12 33 12H30C28.8954 12 28 12.8954 28 14V22"/><path d="M28 22V6C28 4.89543 27.1046 4 26 4H23C21.8954 4 21 4.89543 21 6V22"/><path d="M7 18C7 18 14 23 24 23C34 23 41 18 41 18L36.1819 44H11.8182L7 18Z"/><ellipse cx="24" cy="33" rx="6" ry="3"/>';

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

module.exports = FrenchFries;
