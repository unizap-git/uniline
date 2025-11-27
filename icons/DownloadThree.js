'use strict';

var React = require('react');

function DownloadThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM16.7,14.7l-4,4c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-4-4c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l2.3,2.3v-5.6c0-.6.4-1,1-1s1,.4,1,1v5.6l2.3-2.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4ZM16,8h-8c-.6,0-1-.4-1-1s.4-1,1-1h8c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path d="M32 28L24 36L16 28"/><path d="M24 20V35.5"/><path d="M16 14H32"/>';

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

module.exports = DownloadThree;
