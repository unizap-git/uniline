'use strict';

var React = require('react');

function ElectricWave(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM18.5,13.5h-1l-1.2,1.6c-.2.3-.5.4-.8.4-.3,0-.6-.2-.8-.4l-.9-1.4-1.8,4.7c-.1.4-.5.6-.9.6s0,0-.1,0c-.5,0-.8-.4-.9-.9l-1-7-.6,1.7c-.1.4-.5.7-.9.7h-1.5c-.6,0-1-.4-1-1s.4-1,1-1h.8l1.8-4.8c.2-.4.6-.7,1-.7.5,0,.8.4.9.9l1,7.1,1.1-2.9c.1-.3.5-.6.8-.6.4,0,.7.1.9.4l1.2,1.8.7-.9c.2-.3.5-.4.8-.4h1.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M12 25H15L19 14L22 36L27 23L31 29L34 25H37"/>';

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

module.exports = ElectricWave;
