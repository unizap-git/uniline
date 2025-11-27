'use strict';

var React = require('react');

function HandleZ(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM17,17H7c-.4,0-.8-.3-.9-.7-.1-.4,0-.8.3-1.1l7.8-6.2h-7.1c-.6,0-1-.4-1-1s.4-1,1-1h10c.4,0,.8.3.9.7s0,.8-.3,1.1l-7.8,6.2h7.1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<circle cx="24" cy="24" r="20"/><path d="M14 16H34L14 32H34"/>';

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

module.exports = HandleZ;
