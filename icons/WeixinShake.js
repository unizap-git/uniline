'use strict';

var React = require('react');

function WeixinShake(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.7,8.8l-6.5-6.5c-.4-.4-1-.4-1.4,0L2.3,13.8c-.4.4-.4,1,0,1.4l6.5,6.5c.2.2.5.3.7.3s.5,0,.7-.3l11.5-11.5c.4-.4.4-1,0-1.4ZM10.2,16.7c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-1.5-1.5c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.5,1.5c.4.4.4,1,0,1.4Z"/>   <path d="M15,21l6-6"/>   <path d="M3,9l6-6"/>' : '<path d="M42 19L29 6L6 29L19 42L42 19Z"/><path d="M16 29L19 32"/><path d="M30 42L42 30"/><path d="M6 18L18 6"/>';

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

module.exports = WeixinShake;
