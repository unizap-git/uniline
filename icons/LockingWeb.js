'use strict';

var React = require('react');

function LockingWeb(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,20H3.5c-.8,0-1.5-.7-1.5-1.5V5.5c0-.8.7-1.5,1.5-1.5h17c.8,0,1.5.7,1.5,1.5v6"/>   <rect x="16" y="16.5" width="6" height="4" rx="1.5" ry="1.5"/>   <path d="M19,13.5c.8,0,1.5.7,1.5,1.5v1.5h-3v-1.5c0-.8.7-1.5,1.5-1.5h0Z"/>   <path d="M20.5,3H3.5c-1.4,0-2.5,1.1-2.5,2.5v5.5h22v-5.5c0-1.4-1.1-2.5-2.5-2.5ZM5,8c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM8,8c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M24 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V23.0588"/><path d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"/><rect x="32" y="33" width="12" height="8" rx="3"/><path d="M38 27C39.6569 27 41 28.3431 41 30L41 33L35 33L35 30C35 28.3431 36.3431 27 38 27V27Z"/><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)"/><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)"/>';

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

module.exports = LockingWeb;
