'use strict';

var React = require('react');

function Webcam(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3.9,14.9c1.8,2.5,4.8,4.1,8.1,4.1s6.3-1.6,8.1-4.1c1.8,1.9,2.9,4.4,2.9,7.1H1c0-2.7,1.1-5.2,2.9-7.1Z"/>   <path d="M12,1c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5,7.5-3.4,7.5-7.5-3.4-7.5-7.5-7.5ZM12,12c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5,3.5,1.6,3.5,3.5-1.6,3.5-3.5,3.5Z"/>' : '<path d="M7.82507 29.7656C11.4617 34.7565 17.352 38.0001 24 38.0001C30.648 38.0001 36.5383 34.7565 40.1749 29.7656C43.7911 33.5078 46 38.5077 46 44.0001H2C2 38.5077 4.20894 33.5078 7.82507 29.7656Z"/><path d="M24 30C31.1797 30 37 24.1797 37 17C37 9.8203 31.1797 4 24 4C16.8203 4 11 9.8203 11 17C11 24.1797 16.8203 30 24 30Z"/><path d="M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22Z"/>';

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

module.exports = Webcam;
