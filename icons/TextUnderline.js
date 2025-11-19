'use strict';

var React = require('react');

function TextUnderline(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19,20H5c-.6,0-1-.4-1-1s.4-1,1-1h14c.6,0,1,.4,1,1s-.4,1-1,1ZM16.4,17h-1.7c-.6,0-1-.4-1-1s.4-1,1-1h.2l-.8-2h-4.3l-.8,2h.2c.6,0,1,.4,1,1s-.4,1-1,1h-1.6s0,0,0,0h-1.1c-.6,0-1-.4-1-1s.4-1,1-1h.4l1.3-3.3c0,0,0-.1,0-.2l2.7-6.8c.2-.4.6-.7,1-.7s.9.3,1,.7l2.7,6.9h0s1.3,3.4,1.3,3.4h.4c.6,0,1,.4,1,1s-.4,1-1,1h-1.1ZM10.6,11h2.7l-1.4-3.5-1.4,3.5ZM11.2,5.4s0,0,0,0h0ZM12.8,5.4h0s0,0,0,0Z"/>' : '<path d="M5 19h14M7.6 16l4.2979-10.92963c.0368-.09379.1674-.09379.2042 0L16.4 16m-8.8 0H6.5m1.1 0h1.65m7.15 0h-1.65m1.65 0h1.1m-8.33315-4h5.66025"/>';

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

module.exports = TextUnderline;
