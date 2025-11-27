'use strict';

var React = require('react');

function ClothesPantsShort(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,5.9c0-.5-.5-.9-1-.9h-8s0,0,0,0c0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,.1,0,.2.1,0,0,0,.1.1.2,0,0,0,0,0,.1l1.5,3.5c.2.5,0,1.1-.5,1.3-.1,0-.3,0-.4,0-.4,0-.8-.2-.9-.6l-.7-1.6-1,1.9c-.2.3-.5.5-.9.5s-.3,0-.5-.1c-.5-.3-.7-.9-.4-1.4l2-3.8s0,0,0-.1c0,0,0-.1.1-.2,0,0,.1,0,.2-.1,0,0,0,0,.1,0s0,0,0,0c0,0,.1,0,.2,0,0,0,0,0,.1,0h-8c-.5,0-1,.4-1,.9l-1,12c0,.3,0,.6.3.8.2.2.5.3.7.3h7.6c.5,0,.9-.3,1-.8l.5-1.8.5,1.8c.1.4.5.8,1,.8h7.6c.3,0,.5-.1.7-.3.2-.2.3-.5.3-.8l-1-12Z"/>   <path d="M9,6h6"/>' : '<path d="M6 36L8.00001 12H40L42 36H26.8421L24 25L21.1579 36H6Z"/><path d="M24 12L27 19"/><path d="M24 12L20 19.5"/><path d="M18 12H30"/>';

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

module.exports = ClothesPantsShort;
