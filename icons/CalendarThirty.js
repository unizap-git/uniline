'use strict';

var React = require('react');

function CalendarThirty(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,12.5c-.6,0-1-.4-1-1v-6c0-.6.4-1,1-1s1,.4,1,1v6c0,.6-.4,1-1,1Z"/>   <path d="M22,12.5c-.6,0-1-.4-1-1v-6c0-.6.4-1,1-1s1,.4,1,1v6c0,.6-.4,1-1,1Z"/>   <g>     <path d="M22,8H2c-.6,0-1-.4-1-1v14c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V7c0,.6-.4,1-1,1ZM11,18c0,.6-.4,1-1,1h-4c-.6,0-1-.4-1-1s.4-1,1-1h3v-1.5h-2c-.6,0-1-.4-1-1s.4-1,1-1h2v-1.5h-3c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1v7ZM19,18c0,.6-.4,1-1,1h-4c-.6,0-1-.4-1-1v-7c0-.6.4-1,1-1h4c.6,0,1,.4,1,1v7Z"/>     <rect x="15" y="12" width="2" height="5"/>     <path d="M21,1H3c-1.1,0-2,.9-2,2v4c0-.6.4-1,1-1h20c.6,0,1,.4,1,1V3c0-1.1-.9-2-2-2Z"/>   </g>' : '<rect x="4" y="4" width="40" height="40" rx="2"/><path d="M4 14H44"/><line x1="4" y1="11" x2="4" y2="23"/><line x1="44" y1="11" x2="44" y2="23"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28 22V36H36V22H28Z"/><path d="M12 22H20V36H12"/><path d="M20 29H14"/>';

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

module.exports = CalendarThirty;
