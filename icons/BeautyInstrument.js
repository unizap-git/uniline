'use strict';

var React = require('react');

function BeautyInstrument(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8.5,17h7"/>   <path d="M8,13.5h8"/>   <path d="M7,10l2.5,12h5l2.5-12"/>   <path d="M17.5,1H6.5c-1.7,0-3,1.3-3,3v4c0,1.7,1.3,3,3,3h11c1.7,0,3-1.3,3-3v-4c0-1.7-1.3-3-3-3ZM15,7h-6.5c-.6,0-1-.4-1-1s.4-1,1-1h6.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M17 34L31 34"/><path d="M16 27L32 27"/><rect x="9" y="4" width="30" height="16" rx="4"/><path d="M13.9999 20L18.9999 44H28.9999L33.9999 20"/><path d="M17 12L30 12"/>';

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

module.exports = BeautyInstrument;
