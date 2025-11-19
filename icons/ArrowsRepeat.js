'use strict';

var React = require('react');

function ArrowsRepeat(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8,21c-.3,0-.5,0-.7-.3l-3-3c0,0-.2-.2-.2-.3,0-.1,0-.2,0-.4h0c0-.1,0-.3,0-.4,0-.1.1-.2.2-.3l3-3c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-1.3,1.3h10.6v-2c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1H7.4l1.3,1.3c.4.4.4,1,0,1.4s-.5.3-.7.3ZM16,11c-.3,0-.5,0-.7-.3-.4-.4-.4-1,0-1.4l1.3-1.3H6v2c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1h11.6l-1.3-1.3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l3,3c0,0,.2.2.2.3,0,.1,0,.2,0,.4h0c0,.1,0,.3,0,.4,0,.1-.1.2-.2.3l-3,3c-.2.2-.5.3-.7.3Z"/>' : '<path d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"/>';

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

module.exports = ArrowsRepeat;
