'use strict';

var React = require('react');

function SwitchThemes(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15.5,22h-6.2c-.9,0-1.9-.3-2.6-1.2-.5-.6-.8-1.5-.8-2.8v-5.5" stroke-miterlimit="2"/>   <path d="M2,16.5l4-4,4,4"/>   <path d="M22.7,1.3c-.2-.2-.4-.3-.7-.3h-10.5c-.6,0-1,.4-1,1v11.5c0,.6.4,1,1,1h10.5c.6,0,1-.4,1-1V2c0-.3-.1-.5-.3-.7ZM18.5,10.5h-3.5c-.6,0-1-.4-1-1s.4-1,1-1h3.5c.6,0,1,.4,1,1s-.4,1-1,1ZM18.5,7h-3.5c-.6,0-1-.4-1-1s.4-1,1-1h3.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M23 4V27H43.9933L44 4H23Z"/><path d="M31.0049 43.9998C24.6752 43.9998 20.5595 43.9998 18.6579 43.9998C16.9557 43.9998 14.9159 43.4318 13.5475 41.6126C12.6229 40.3832 12.0049 38.5826 12.0049 35.9998C12.0049 31.7298 12.0049 28.063 12.0049 24.9995"/><path d="M4 32.9998L12.0046 24.9995L20.0138 32.9998"/><path d="M30 19H37"/><path d="M30 12H37"/>';

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

module.exports = SwitchThemes;
