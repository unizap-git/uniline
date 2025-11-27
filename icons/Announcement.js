'use strict';

var React = require('react');

function Announcement(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,3.5l-4,4h8l-4-4Z"/>   <path d="M21,6.5H3c-1.1,0-2,.9-2,2v11c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2v-11c0-1.1-.9-2-2-2ZM10,17h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1ZM15,13H6c-.6,0-1-.4-1-1s.4-1,1-1h9c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="4" y="15" width="40" height="26" rx="2"/><path d="M24 7L16 15H32L24 7Z"/><path d="M12 24H30"/><path d="M12 32H20"/>';

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

module.exports = Announcement;
