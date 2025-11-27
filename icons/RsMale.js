'use strict';

var React = require('react');

function RsMale(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.4,6.7c-.4-.4-.9-.7-1.5-.7H3.1c-.6,0-1.1.2-1.5.7-.4.4-.6,1-.5,1.6l1.2,9c.1,1,1,1.7,2,1.7h15.3c1,0,1.8-.7,2-1.7l1.2-9c0-.6,0-1.2-.5-1.6ZM4.5,11c0-.6.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1h-1c-.6,0-1-.4-1-1ZM8.5,15h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM8.5,11c0-.6.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1h-1c-.6,0-1-.4-1-1ZM12.5,15h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM12.5,11c0-.6.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1h-1c-.6,0-1-.4-1-1ZM16.5,15h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM18.5,12h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M4.30958 16.2702C4.14582 15.0694 5.07926 14 6.29124 14H41.7088C42.9207 14 43.8542 15.0694 43.6904 16.2702L41.2359 34.2702C41.1007 35.2612 40.2544 36 39.2542 36H8.74578C7.74564 36 6.89925 35.2612 6.76412 34.2702L4.30958 16.2702Z"/><path d="M19 22H21"/><path d="M23 28H25"/><path d="M11 22H13"/><path d="M15 28H17"/><path d="M27 22H29"/><path d="M31 28H33"/><path d="M35 22H37"/>';

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

module.exports = RsMale;
