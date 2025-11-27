'use strict';

var React = require('react');

function BellActiveAlt(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.1,12.6v-1.8c0-2.5-1.7-4.7-4.2-5.3,0,0,0,0,0-.1v-2.4c0-.6-.4-1-1-1s-1,.4-1,1v2.4s0,0,0,.1c-2.4.6-4.2,2.8-4.2,5.3v1.8c0,2.4-1.9,3-1.9,4.2s0,1.2.5,1.2h12.9c.5,0,.5-.6.5-1.2,0-1.2-1.9-1.8-1.9-4.2ZM3.9,11.8c-.6,0-1-.4-1-1,0-2.4.9-4.7,2.5-6.4.4-.4,1-.4,1.4,0s.4,1,0,1.4c-1.3,1.4-2,3.2-2,5,0,.6-.4,1-1,1ZM20.1,11.8c-.6,0-1-.4-1-1,0-1.9-.7-3.7-2-5-.4-.4-.3-1,0-1.4.4-.3,1-.3,1.4,0,1.6,1.7,2.5,4,2.5,6.4,0,.6-.4,1-1,1ZM8.8,19c.7,1.8,2.8,2.6,4.5,1.8.8-.3,1.5-1,1.8-1.8h-6.4Z"/>' : '<path d="M24,11v-4.6M24,11c5.6.2,10.1,4.9,10,10.5v3.5c0,4.7,3.6,5.8,3.6,8.2s0,2.3-1.1,2.3H11.4c-1.1,0-1.1-1.2-1.1-2.3,0-2.3,3.6-3.5,3.6-8.2v-3.5c0-5.6,4.4-10.3,10-10.5ZM8.1,21.5c0-4.1,1.6-8.1,4.4-11.2M39.9,21.5c0-4.1-1.6-8.1-4.4-11.2M17.2,35.5c.4,3.7,3.8,6.4,7.5,6,3.2-.3,5.7-2.9,6-6h-13.5Z"/>';

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

module.exports = BellActiveAlt;
