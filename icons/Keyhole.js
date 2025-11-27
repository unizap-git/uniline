'use strict';

var React = require('react');

function Keyhole(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM15,15.9c0,.3,0,.6-.2.8-.2.2-.5.3-.8.3h-4c-.3,0-.6-.1-.7-.3-.2-.2-.3-.5-.2-.8l.4-3.5c-.6-.6-.9-1.5-.9-2.4,0-1.9,1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5-.3,1.7-.9,2.4l.4,3.5Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M24 15C21.2386 15 19 17.2386 19 20C19 21.6358 19.7856 23.0882 21 24.0004L20 32H28L27.0005 24C28.2147 23.0878 29 21.6356 29 20C29 17.2386 26.7614 15 24 15Z"/>';

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

module.exports = Keyhole;
