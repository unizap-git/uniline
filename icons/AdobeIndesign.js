'use strict';

var React = require('react');

function AdobeIndesign(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM9,16.5c0,.6-.4,1-1,1s-1-.4-1-1V7.5c0-.6.4-1,1-1s1,.4,1,1v9ZM17,12.5v4c0,.6-.4,1-1,1h-2c-1.8,0-3-1.2-3-3s1.2-3,3-3h1v-3c0-.6.4-1,1-1s1,.4,1,1v4Z"/>   <path d="M15,13.5h-1c-.7,0-1,.3-1,1s.3,1,1,1h1v-2Z"/>' : '<path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path d="M16 15L16 33"/><path d="M32 17L32 33"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28 33C25.5 33 24 31.4 24 29C24 26.6 25.5 25 28 25C30.5 25 32 25 32 25V33H28Z"/>';

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

module.exports = AdobeIndesign;
