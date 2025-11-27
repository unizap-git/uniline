'use strict';

var React = require('react');

function Hippo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,12.1v-2.6c0-1.5-.8-2.7-2-3.4v-2.1c0-1.4-1.1-2.5-2.5-2.5s-2.5,1.1-2.5,2.5v1.5h-1v-1.5c0-1.4-1.1-2.5-2.5-2.5s-2.5,1.1-2.5,2.5v2.1c-1.2.7-2,2-2,3.4v2.6c-1.2.7-2,2-2,3.4v3c0,2.2,1.8,4,4,4h11c2.2,0,4-1.8,4-4v-3c0-1.5-.8-2.8-2-3.4ZM14,8.5c.6,0,1,.4,1,1s-.4,1-1,1-1-.4-1-1,.4-1,1-1ZM10,8.5c.6,0,1,.4,1,1s-.4,1-1,1-1-.4-1-1,.4-1,1-1ZM19.5,18.5c0,1.1-.9,2-2,2H6.5c-1.1,0-2-.9-2-2v-3c0-1.1.9-2,2-2h11c1.1,0,2,.9,2,2v3Z"/>   <circle cx="8.5" cy="17" r="2.5"/>   <circle cx="15.5" cy="17" r="2.5"/>' : '<rect x="7" y="25" width="34" height="18" rx="6"/><circle cx="17" cy="34" r="3"/><circle cx="31" cy="34" r="3"/><path d="M11 19C11 15.6863 13.6863 13 17 13H31C34.3137 13 37 15.6863 37 19V25H11V19Z"/><circle cx="20" cy="19" r="2"/><circle cx="28" cy="19" r="2"/><path d="M18 5C19.6569 5 21 6.34315 21 8L21 13L15 13L15 8C15 6.34315 16.3431 5 18 5Z"/><path d="M30 5C31.6569 5 33 6.34315 33 8L33 13L27 13L27 8C27 6.34315 28.3431 5 30 5Z"/>';

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

module.exports = Hippo;
