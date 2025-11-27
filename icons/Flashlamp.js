'use strict';

var React = require('react');

function Flashlamp(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM15.9,12.4l-2.5,5c-.2.4-.5.6-.9.6s-.3,0-.4-.1c-.5-.2-.7-.8-.4-1.3l1.8-3.6h-4.4c-.3,0-.7-.2-.9-.5-.2-.3-.2-.7,0-1l2.5-5c.2-.5.8-.7,1.3-.4.5.2.7.8.4,1.3l-1.8,3.6h4.4c.3,0,.7.2.9.5.2.3.2.7,0,1Z"/>' : '<circle cx="24" cy="24" r="20"/><path d="M23 14L18 24H30L25 34"/>';

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

module.exports = Flashlamp;
