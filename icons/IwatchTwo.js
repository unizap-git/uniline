'use strict';

var React = require('react');

function IwatchTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7.7,5.2c1.4-1.4,3.3-2.2,5.3-2.2,4.4,0,8,4,8,9s-3.6,9-8,9-3.9-.8-5.3-2.2" stroke-miterlimit="2"/>   <path d="M7,4h-3c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h3c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2ZM5.5,14.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM5.5,11c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M15.4167 10.5C18.2373 7.69936 21.9423 6 26 6C34.8366 6 42 14.0589 42 24C42 33.9411 34.8366 42 26 42C21.9423 42 18.2373 40.3006 15.4167 37.5"/><rect x="6" y="10" width="10" height="28" rx="2"/><rect x="13" y="18" width="4" height="4" rx="2" transform="rotate(90 13 18)"/><rect x="13" y="25" width="4" height="4" rx="2" transform="rotate(90 13 25)"/>';

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

module.exports = IwatchTwo;
