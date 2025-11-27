'use strict';

var React = require('react');

function SoundOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18,1H6c-1.4,0-2.5,1.1-2.5,2.5v17c0,1.4,1.1,2.5,2.5,2.5h12c1.4,0,2.5-1.1,2.5-2.5V3.5c0-1.4-1.1-2.5-2.5-2.5ZM10.5,19h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM14.5,19h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM12,15.5c-2.5,0-4.5-2-4.5-4.5s2-4.5,4.5-4.5,4.5,2,4.5,4.5-2,4.5-4.5,4.5ZM16,6c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M9 7C9 5.34315 10.3431 4 12 4H36C37.6569 4 39 5.34315 39 7V41C39 42.6569 37.6569 44 36 44H12C10.3431 44 9 42.6569 9 41L9 7Z"/><path d="M24 29C27.866 29 31 25.866 31 22C31 18.134 27.866 15 24 15C20.134 15 17 18.134 17 22C17 25.866 20.134 29 24 29Z"/><rect x="30" y="8" width="4" height="4" rx="2"/><path d="M27 36H29"/><path d="M19 36H21"/>';

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

module.exports = SoundOne;
