'use strict';

var React = require('react');

function FontFamily(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10.6,20h-1.1c-.6,0-1-.4-1-1s.4-1,1-1h.4l4-10.3c.2-.4.6-.7,1-.7s.9.3,1,.7l4,10.3h.4c.6,0,1,.4,1,1s-.4,1-1,1h-2.8c-.6,0-1-.4-1-1s.4-1,1-1h.2l-.8-2h-4.3l-.8,2h.2c.6,0,1,.4,1,1s-.4,1-1,1h-1.7ZM13.6,14h2.7l-1.4-3.5-1.4,3.5ZM3,17c-.1,0-.2,0-.4,0-.5-.2-.8-.8-.6-1.3l1.6-4s0,0,0,0l2.7-6.9c.2-.4.6-.7,1-.7.5,0,.9.3,1,.7l2.5,7c.1.3,0,.6-.1.9-.2.3-.5.4-.8.4h-4.8l-1.3,3.4c-.2.4-.5.6-.9.6ZM6,11h2.5l-1.2-3.4-1.3,3.4Z"/>' : '<path d="m10.5785 19 4.2979-10.92966c.0369-.09379.1674-.09379.2042 0L19.3785 19m-8.8 0H9.47851m1.09999 0h1.65m7.15 0h-1.65m1.65 0h1.1m-7.7-3.9846h4.4M3 16l1.56685-3.9846m0 0 2.73102-6.94506c.03688-.09379.16738-.09379.20426 0l2.50367 6.94506H4.56685Z"/>';

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

module.exports = FontFamily;
