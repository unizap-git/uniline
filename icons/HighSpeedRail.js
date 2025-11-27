'use strict';

var React = require('react');

function HighSpeedRail(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4.5,10v5c0,2.2,1.8,4,4,4h7c2.2,0,4-1.8,4-4v-5"/>   <path d="M17,19v2"/>   <path d="M7,19v2"/>   <path d="M10,22h4"/>   <path d="M10.2,16c0,.4-.3.8-.8.8s-.8-.3-.8-.8.3-.8.8-.8.8.3.8.8Z" stroke-miterlimit="2"/>   <path d="M15.2,16c0,.4-.3.8-.8.8s-.8-.3-.8-.8.3-.8.8-.8.8.3.8.8Z" stroke-miterlimit="2"/>   <path d="M12,1C6.8,1,3.5,6,3.5,8.2v1.8c0,.6.4,1,1,1h15c.6,0,1-.4,1-1v-1.8c0-2.1-3.3-7.2-8.5-7.2ZM13,6.5h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M9 20V30C9 34.4183 12.5817 38 17 38H31C35.4183 38 39 34.4183 39 30V20"/><path d="M34 38V42"/><path d="M14 38V42"/><path d="M20 44L28 44"/><path d="M9 16.3609C9 13 15 4 24 4C33 4 39 13 39 16.3609C39 19.7218 39 20 39 20H9C9 20 9 19.7218 9 16.3609Z"/><path d="M20.5 32C20.5 32.8284 19.8284 33.5 19 33.5C18.1716 33.5 17.5 32.8284 17.5 32C17.5 31.1716 18.1716 30.5 19 30.5C19.8284 30.5 20.5 31.1716 20.5 32Z"/><path d="M30.5 32C30.5 32.8284 29.8284 33.5 29 33.5C28.1716 33.5 27.5 32.8284 27.5 32C27.5 31.1716 28.1716 30.5 29 30.5C29.8284 30.5 30.5 31.1716 30.5 32Z"/><path d="M22 11L26 11"/>';

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

module.exports = HighSpeedRail;
