'use strict';

var React = require('react');

function PlaybackProgress(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,1.5H2c-.6,0-1,.4-1,1v13c0,.6.4,1,1,1h20c.6,0,1-.4,1-1V2.5c0-.6-.4-1-1-1ZM14.6,9.8l-3,2c-.2.1-.4.2-.6.2s-.3,0-.5-.1c-.3-.2-.5-.5-.5-.9v-4c0-.4.2-.7.5-.9.3-.2.7-.2,1,0l3,2c.3.2.4.5.4.8s-.2.6-.4.8Z"/>   <path d="M5.5,20h-2.5"/>   <path d="M8.5,20h12.5"/>   <path d="M8.5,20c0,.8-.7,1.5-1.5,1.5s-1.5-.7-1.5-1.5.7-1.5,1.5-1.5,1.5.7,1.5,1.5Z"/>' : '<rect x="4" y="5" width="40" height="26"/><path d="M22 14L28 18L22 22V14Z"/><path d="M11 40H6"/><path d="M17 40H42"/><path d="M17 40C17 41.6569 15.6569 43 14 43C12.3431 43 11 41.6569 11 40C11 38.3431 12.3431 37 14 37C15.6569 37 17 38.3431 17 40Z"/>';

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

module.exports = PlaybackProgress;
