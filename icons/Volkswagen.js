'use strict';

var React = require('react');

function Volkswagen(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM7.6,2.1c.5-.2,1.1,0,1.3.5l2.7,5.9h.7l2.7-5.9c.2-.5.8-.7,1.3-.5.5.2.7.8.5,1.3l-3,6.5c-.2.4-.5.6-.9.6h-2c-.4,0-.7-.2-.9-.6l-3-6.5c-.2-.5,0-1.1.5-1.3ZM16.9,18.9c-.1.4-.5.6-.9.6,0,0,0,0,0,0-.4,0-.7-.2-.9-.5l-2.7-5h-.8l-2.7,5c-.2.3-.6.5-.9.5-.4,0-.7-.3-.9-.6L2.6,7.4c-.2-.5,0-1.1.6-1.3.5-.2,1.1,0,1.3.6l3.7,9.5,2-3.6c.2-.3.5-.5.9-.5h2c.4,0,.7.2.9.5l2,3.6,3.7-9.5c.2-.5.8-.8,1.3-.6.5.2.8.8.6,1.3l-4.5,11.5Z"/>   <path d="M22,13c-.6,0-1-.4-1-1,0-2.6-1.1-5-3-6.8-1.6-1.5-3.8-2.2-6-2.2s-4.3.8-6,2.2c-1.9,1.7-3,4.2-3,6.8s-.4,1-1,1-1-.4-1-1c0-3.2,1.4-6.2,3.7-8.2,2-1.8,4.6-2.8,7.3-2.8s5.3,1,7.3,2.8c2.4,2.1,3.7,5.1,3.7,8.2s-.4,1-1,1Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M7 14L16 37L22 26H26L32 37L41 14"/><path d="M16 6L22 19H26L32 6"/><path d="M44 24C44 18.0265 41.3812 12.6647 37.2291 9C33.7035 5.88818 29.0722 4 24 4C18.9278 4 14.2965 5.88818 10.7709 9C6.61877 12.6647 4 18.0265 4 24"/>';

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

module.exports = Volkswagen;
