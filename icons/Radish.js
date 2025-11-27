'use strict';

var React = require('react');

function Radish(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,2v3"/>   <path d="M9,2.5l2,2.5"/>   <path d="M15,2.5l-2,2.5"/>   <path d="M12,4c-4.1,0-7.5,3.4-7.5,7.6s6.5,10.9,6.8,11.1c.2.2.4.3.7.3s.5,0,.7-.3c.3-.3,6.8-6.4,6.8-11.1s-3.4-7.6-7.5-7.6ZM5,10c0-.6.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1h-4c-.6,0-1-.4-1-1ZM11,18h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1ZM18,14.5h-3.5c-.6,0-1-.4-1-1s.4-1,1-1h3.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M10,20.9c-.3,0-.5-.1-.7-.3-2.2-2.4-4.8-6-4.8-9s.6-3.4,1.6-4.7c.3-.4,1-.5,1.4-.2.4.3.5,1,.2,1.4-.8,1-1.2,2.2-1.2,3.5,0,1.9,1.5,4.6,4.2,7.7.4.4.3,1,0,1.4-.2.2-.4.3-.7.3Z"/>   <path d="M17,17c-.2,0-.4,0-.5-.1-.5-.3-.6-.9-.3-1.4.9-1.5,1.4-2.8,1.4-3.9s.4-1,1-1,1,.4,1,1c0,1.4-.6,3.1-1.7,4.9-.2.3-.5.5-.9.5Z"/>' : '<path d="M37 23.2C37 32 24 44 24 44C24 44 11 32 11 23.2C11 15.9098 16.8203 10 24 10C31.1797 10 37 15.9098 37 23.2Z"/><path d="M24 4V10" stroke-miterlimit="2"/><path d="M18 5L22 10" stroke-miterlimit="2"/><path d="M30 5L26 10" stroke-miterlimit="2"/><path d="M12 20H20" stroke-miterlimit="2"/><path d="M29 27H36" stroke-miterlimit="2"/><path d="M16 34H22" stroke-miterlimit="2"/><path d="M13.812 15C12.0515 17.2521 11 20.1014 11 23.2C11 28.7547 16.1797 35.5844 20 39.8663"/><path d="M37.0005 23.2C37.0005 25.974 35.7087 29.066 33.9395 31.9999"/>';

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

module.exports = Radish;
