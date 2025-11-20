'use strict';

var React = require('react');

function Palette(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M8.649 2.577A10.004 10.004 0 0 1 20.344 6.49a9.995 9.995 0 0 1 1.2 8.486l-.004.01-.005.015a2.958 2.958 0 0 1-2.836 2.001h-2.69a1.037 1.037 0 0 0-.95.68c-.047.13-.068.27-.06.409v.916A3.01 3.01 0 0 1 11.96 22a9.626 9.626 0 0 1-4.195-1l.009.005-.018-.009.01.004a10.1 10.1 0 0 1-5.716-7.996l-.001-.012a9.992 9.992 0 0 1 6.6-10.415Zm3.35 3.429a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12ZM8.53 7.518a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2h-.01Zm6.968 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM6.99 11.004a1 1 0 1 0 0 2H7a1 1 0 1 0 0-2h-.01Z" clip-rule="evenodd"/>' : '<path d="M16,16h2.7c.8,0,1.6-.5,1.9-1.3,1.5-4.7-1.2-9.8-5.9-11.3-4.7-1.5-9.8,1.2-11.3,5.9-.4,1.2-.5,2.4-.4,3.6.4,3.1,2.3,5.9,5.2,7.2,1.2.6,2.5.9,3.8.9,1.1,0,2-.9,2-2,0,0,0,0,0,0v-.9c0-1.1.8-2.1,1.9-2.1,0,0,0,0,0,0ZM7.3,13.1c0,.4-.3.7-.7.7s-.7-.3-.7-.7.3-.7.7-.7.7.3.7.7ZM8.6,8.7c0,.4-.3.7-.7.7s-.7-.3-.7-.7.3-.7.7-.7.7.3.7.7ZM12.4,6.3c0,.4-.3.7-.7.7s-.7-.3-.7-.7.3-.7.7-.7.7.3.7.7ZM16.3,7.3c0,.4-.3.7-.7.7s-.7-.3-.7-.7.3-.7.7-.7.7.3.7.7Z" stroke-miterlimit="10"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = Palette;
