'use strict';

var React = require('react');

function ConnectionBox(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7,8v4h10v4"/>   <path d="M21.5,15H2.5c-.8,0-1.5.7-1.5,1.5v4.9c0,.9.7,1.5,1.5,1.5h19c.8,0,1.5-.7,1.5-1.5v-4.9c0-.9-.7-1.5-1.5-1.5ZM15,20h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M21.5,1H2.5c-.8,0-1.5.7-1.5,1.5v4.9c0,.9.7,1.5,1.5,1.5h19c.8,0,1.5-.7,1.5-1.5V2.5c0-.9-.7-1.5-1.5-1.5ZM15,6h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M43 4H5C4.44772 4 4 4.48842 4 5.09091V14.9091C4 15.5116 4.44772 16 5 16H43C43.5523 16 44 15.5116 44 14.9091V5.09091C44 4.48842 43.5523 4 43 4Z"/><path d="M43 32H5C4.44772 32 4 32.4884 4 33.0909V42.9091C4 43.5116 4.44772 44 5 44H43C43.5523 44 44 43.5116 44 42.9091V33.0909C44 32.4884 43.5523 32 43 32Z"/><path d="M14 16V24.0083L34 24.0172V32"/><path d="M18 38H30"/><path d="M18 10H30"/>';

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

module.exports = ConnectionBox;
