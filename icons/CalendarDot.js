'use strict';

var React = require('react');

function CalendarDot(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<line x1="22" y1="5.5" x2="22" y2="11.5"/>   <g>     <path d="M22,8H2c-.6,0-1-.4-1-1v14c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V7c0,.6-.4,1-1,1ZM8,19h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1ZM8,15.5h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1ZM8,12h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1ZM13,19h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1ZM13,15.5h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1ZM13,12h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1ZM18,19h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1ZM18,15.5h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1ZM18,12h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>     <path d="M21,1H3c-1.1,0-2,.9-2,2v4c0-.6.4-1,1-1h20c.6,0,1,.4,1,1V3c0-1.1-.9-2-2-2Z"/>   </g>   <line x1="2" y1="5.5" x2="2" y2="11.5"/>' : '<rect x="4" y="4" width="40" height="40" rx="2"/><path d="M4 14H44"/><line x1="44" y1="11" x2="44" y2="23"/><path d="M12 22H16"/><path d="M22 22H26"/><path d="M32 22H36"/><path d="M12 29H16"/><path d="M22 29H26"/><path d="M32 29H36"/><path d="M12 36H16"/><path d="M22 36H26"/><path d="M32 36H36"/><line x1="4" y1="11" x2="4" y2="23"/>';

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

module.exports = CalendarDot;
