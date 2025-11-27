'use strict';

var React = require('react');

function Bell(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.1,12.6v-1.8c0-2.5-1.7-4.7-4.2-5.3,0,0,0,0,0-.1v-2.4c0-.6-.4-1-1-1s-1,.4-1,1v2.4s0,0,0,.1c-2.4.6-4.2,2.8-4.2,5.3v1.8c0,2.4-1.9,3-1.9,4.2s0,1.2.5,1.2h12.9c.5,0,.5-.6.5-1.2,0-1.2-1.9-1.8-1.9-4.2ZM8.8,19c.7,1.8,2.8,2.6,4.5,1.8.8-.3,1.5-1,1.8-1.8h-6.4Z"/>' : '<path d="M24,10.7v-4.7M24,10.7c5.8.2,10.3,5,10.3,10.7v3.6c0,4.8,3.7,6,3.7,8.4s0,2.6-1.1,2.6H11.1c-1.1,0-1.1-1.4-1.1-2.6,0-2.4,3.7-3.6,3.7-8.4v-3.6c0-5.8,4.5-10.5,10.3-10.7ZM17.5,36c.2,1.7.6,3.1,1.9,4.2,2.6,2.4,6.6,2.4,9.3,0,1.3-1.1,2.5-2.5,2.7-4.2h-13.8Z"/>';

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

module.exports = Bell;
