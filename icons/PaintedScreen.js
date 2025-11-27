'use strict';

var React = require('react');

function PaintedScreen(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,4H4c-1.4,0-2.5,1.1-2.5,2.5v11c0,1.4,1.1,2.5,2.5,2.5h16c1.4,0,2.5-1.1,2.5-2.5V6.5c0-1.4-1.1-2.5-2.5-2.5ZM6.5,16.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM7.5,12c0,.6-.4,1-1,1s-1-.4-1-1v-3.5c0-.6.4-1,1-1s1,.4,1,1v3.5Z"/>' : '<rect x="5" y="10" width="38" height="28" rx="3"/><path d="M13 24L13 17"/><rect x="15" y="29" width="4" height="4" rx="2" transform="rotate(90 15 29)"/>';

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

module.exports = PaintedScreen;
