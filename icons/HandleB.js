'use strict';

var React = require('react');

function HandleB(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14,9c0-.8-.7-1.5-1.6-1.5h-2.4v3h2.4c.9,0,1.6-.7,1.6-1.5Z"/>   <path d="M13.4,12.5h-3.4v4h3.4c.9,0,1.6-.9,1.6-2s-.7-2-1.6-2Z"/>   <path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM13.4,18.5h-4.4c-.6,0-1-.4-1-1V6.5c0-.6.4-1,1-1h3.4c2,0,3.6,1.6,3.6,3.5s-.3,1.5-.7,2.1c1,.7,1.7,2,1.7,3.4,0,2.2-1.6,4-3.6,4Z"/>' : '<circle cx="24" cy="24" r="20"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7918 23C27.6682 23 30 20.7614 30 18C30 15.2386 27.6682 13 24.7918 13H18V23H24.7918Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.831 35C29.6857 35 32 32.3137 32 29C32 25.6863 29.6857 23 26.831 23H18V35H26.831Z"/>';

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

module.exports = HandleB;
