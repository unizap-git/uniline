'use strict';

var React = require('react');

function Egg(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,12c0,1.3-.3,2.6-.7,3.7-.5,1.2-2.1,0-3.7,1.8-1.6,1.7-.4,3.1-1.6,3.7-1.2.5-2.6.8-4,.8-5.5,0-10-4.5-10-10S6.5,2,12,2s10,4.5,10,10Z" stroke-miterlimit="2"/>   <path d="M12,6c-3.3,0-6,2.7-6,6s2.7,6,6,6,6-2.7,6-6-2.7-6-6-6ZM11.5,15c0,0-.1,0-.2,0-.2,0-.9-.2-1.5-.8s-.8-1.4-.8-1.5c0-.5.3-1.1.8-1.2.5,0,1.1.3,1.2.8,0,.1.1.4.2.5s.3.2.5.2c.5.1.9.6.8,1.2,0,.5-.5.8-1,.8Z"/>' : '<circle cx="24" cy="24" r="10"/><path d="M44.0001 24C44.0001 26.6325 43.4915 29.1463 42.5672 31.4483C41.6312 33.7794 38.4382 31.5194 35.2215 34.9695C32.0049 38.4196 34.5105 41.2363 32.017 42.3284C29.5627 43.4035 26.8511 44 24.0001 44C12.9544 44 4.00012 35.0457 4.00012 24C4.00012 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z"/><path d="M20 25C20 25 20.2109 26.2109 21 27C21.7891 27.7891 23 28 23 28"/>';

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

module.exports = Egg;
