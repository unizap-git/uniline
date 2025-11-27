'use strict';

var React = require('react');

function ArrowKeys(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,11h-4V2c0-.6-.4-1-1-1H7c-.6,0-1,.4-1,1v9H2c-.6,0-1,.4-1,1v10c0,.6.4,1,1,1h20c.6,0,1-.4,1-1v-10c0-.6-.4-1-1-1ZM9,18h-1.6l.3.3c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-2-2c0,0-.2-.2-.2-.3-.1-.2-.1-.5,0-.8,0-.1.1-.2.2-.3l2-2c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-.3.3h1.6c.6,0,1,.4,1,1s-.4,1-1,1ZM13,9c0,.6-.4,1-1,1s-1-.4-1-1v-1.6l-.3.3c-.4.4-1,.4-1.4,0s-.4-1,0-1.4l2-2c0,0,.2-.2.3-.2.2-.1.5-.1.8,0,.1,0,.2.1.3.2l2,2c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-.3-.3v1.6ZM19.7,17.7l-2,2c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l.3-.3h-1.6c-.6,0-1-.4-1-1s.4-1,1-1h1.6l-.3-.3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l2,2c0,0,.2.2.2.3.1.2.1.5,0,.8,0,.1-.1.2-.2.3Z"/>' : '<path d="M14 4H34V24H14V4Z"/><path d="M4 24H24V44H4V24Z"/><path d="M24 24H44V44H24V24Z"/><path d="M24 24H4V44H24V24ZM24 24V44V24ZM24 24H44V44H24V24ZM14 4H34V24H14V4Z"/><path d="M24 10V18"/><path d="M20 14L24 10L28 14"/><path d="M10 34H18"/><path d="M14 38L10 34L14 30"/><path d="M38 34H30"/><path d="M34 30L38 34L34 38"/>';

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

module.exports = ArrowKeys;
