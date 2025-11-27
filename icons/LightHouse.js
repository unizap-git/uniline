'use strict';

var React = require('react');

function LightHouse(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3,22h18"/>   <path d="M8.5,10h7"/>   <path d="M9.5,4.5l1,5.5h3l1-5.5"/>   <path d="M16,6l-1.5-1.5-2.5-2.5-2.5,2.5-1.5,1.5"/>   <path d="M18.5,3.5l1.5-1.5"/>   <path d="M5.5,3.5l-1.5-1.5"/>   <path d="M18.5,9.5l1.5,1.5"/>   <path d="M5.5,9.5l-1.5,1.5"/>   <path d="M19,6.5h2"/>   <path d="M5,6.5h-2"/>   <path d="M15.5,9.9c0-.5-.5-.9-1-.9h-5c-.5,0-.9.4-1,.9l-1.5,12c0,.3,0,.6.2.8.2.2.5.3.7.3h8c.3,0,.6-.1.8-.3.2-.2.3-.5.2-.8l-1.5-12ZM9,13h6c.6,0,1,.4,1,1s-.4,1-1,1h-6c-.6,0-1-.4-1-1s.4-1,1-1ZM15.5,19h-7c-.6,0-1-.4-1-1s.4-1,1-1h7c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M14.5,10l1.5,12"/>   <path d="M9.5,10l-1.5,12"/>' : '<path d="M6 44H42"/><path d="M17 20H31"/><path d="M19 20H24H29L32 44H16L19 20Z"/><path d="M19 9L21 20H27L29 9"/><path d="M32 12L29 9L24 4L19 9L16 12"/><path d="M37 7L40 4"/><path d="M11 7L8 4"/><path d="M37 19L40 22"/><path d="M11 19L8 22"/><path d="M38 13H42"/><path d="M10 13H6"/><path d="M18 28L30 28"/><path d="M17 36H31"/><path d="M29 20L32 44"/><path d="M19 20L16 44"/>';

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

module.exports = LightHouse;
