'use strict';

var React = require('react');

function FontHighlight(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13.5,21.9c-.3,0-.7-.2-.9-.4l-1.4-1.9c-.3-.4-.2-1.1.2-1.4.4-.3,1.1-.2,1.4.2l.7.9.7-.9c.3-.4,1-.5,1.4-.2.4.3.5,1,.2,1.4l-1.7,2.3h-.6ZM18.5,21h-.5c-.6,0-1-.4-1-1s.4-1,1-1v-2H6v2h3c.6,0,1,.4,1,1s-.4,1-1,1h-3.5c-.8,0-1.5-.7-1.5-1.5v-3c0-.8.7-1.5,1.5-1.5h13c.8,0,1.5.7,1.5,1.5v3c0,.8-.7,1.5-1.5,1.5ZM16,14h-1.5c-.6,0-1-.4-1-1s.4-1,1-1h0l-.4-1s0,0-.1,0h-4s0,0-.1,0l-.4,1h0c.6,0,1,.4,1,1s-.4,1-1,1h-1.5s0,0,0,0h-1c-.6,0-1-.4-1-1s.4-1,1-1h.3l3.7-9.1c.2-.4.6-.7,1-.7s.9.3,1,.7l3.7,9.1h.3c.6,0,1,.4,1,1s-.4,1-1,1h-1ZM10.7,9h2.6l-1.3-3.3-1.3,3.3Z"/>' : '<path d="M9 20H5.5c-.27614 0-.5-.2239-.5-.5v-3c0-.2761.22386-.5.5-.5h13c.2761 0 .5.2239.5.5v3c0 .2761-.2239.5-.5.5H18m-6-1 1.42 1.8933c.04.0534.12.0534.16 0L15 19m-7-6 3.9072-9.76789c.0335-.08381.1521-.08381.1856 0L16 13m-8 0H7m1 0h1.5m6.5 0h-1.5m1.5 0h1m-7-3.00001h4"/>';

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

module.exports = FontHighlight;
