'use strict';

var React = require('react');

function Bird(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M23,12.9c-.4-.8-1.4-1-2.2-.9h-.3c2.6-4.3,2.4-5.7,1.8-6.5-.2-.3-.9-.9-2.1-.5,0,0,0,0-.1,0l-4.6,2c-2.6,1.4-3.4.5-3.8.2l-1.5-1.5c-2.4-2.1-5.2-.8-6.4.6,0,0,0,0,0,0l-2.5,3c-.2.2-.3.6-.2.9,0,.2,1,3.8,3.8,6.4,2.1,2.1,4.6,2.8,7,2.8,4,0,7.7-2,9.3-3.2,1.1-.9,2.4-2.2,1.8-3.4ZM7,11c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M9 14.0003L4 20.0689C4 20.0689 5.84913 27.035 11 32.0006C20.8896 41.5344 35.3341 35.304 41 31.0006C46.3568 26.6309 43.7169 25.6695 42 26.0006L37 27.0006C46.0654 12.6997 43.5754 11.173 41 12.0006L32 16.0006C26.2311 19.1785 23.5 17.5006 22 16.0006L19 13.0002C14.5 9 10.0302 12.8417 9 14.0003Z"/><circle cx="14" cy="20" r="2"/>';

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

module.exports = Bird;
