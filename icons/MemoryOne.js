'use strict';

var React = require('react');

function MemoryOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.5,2H2.5c-.6,0-1,.4-1,1v7c0,.6.4,1,1,1h19c.6,0,1-.4,1-1V3c0-.6-.4-1-1-1ZM6.5,7.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM10.5,7.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM17.5,7.5h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M21.5,13H2.5c-.6,0-1,.4-1,1v7c0,.6.4,1,1,1h19c.6,0,1-.4,1-1v-7c0-.6-.4-1-1-1ZM6.5,18.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM10.5,18.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM17.5,18.5h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="5" y="28" width="38" height="14"/><rect x="5" y="6" width="38" height="14"/><rect x="11" y="11" width="4" height="4" rx="2"/><rect x="11" y="33" width="4" height="4" rx="2"/><rect x="19" y="11" width="4" height="4" rx="2"/><rect x="19" y="33" width="4" height="4" rx="2"/><path d="M31 13H35"/><path d="M31 35H35"/>';

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

module.exports = MemoryOne;
