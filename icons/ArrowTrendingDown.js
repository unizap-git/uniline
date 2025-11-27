'use strict';

var React = require('react');

function ArrowTrendingDown(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M1.7,5.5c.3-.3.8-.3,1.1,0l6.2,6.2,3.8-3.8c.3-.3.7-.3,1,0,2.2,1.7,3.8,4.1,4.6,6.8l.3,1.1,2.3-3.9c.2-.4.7-.5,1-.3s.5.7.3,1c0,0,0,0,0,0l-3.2,5.5c-.2.4-.7.5-1,.3,0,0,0,0,0,0l-5.5-3.2c-.4-.2-.5-.7-.3-1,.2-.4.7-.5,1-.3l3.9,2.3-.3-1.1c-.6-2.2-1.8-4.1-3.5-5.6l-3.8,3.8c-.3.3-.8.3-1.1,0L1.7,6.5c-.3-.3-.3-.8,0-1.1,0,0,0,0,0,0h0Z" fill-rule="evenodd"/>' : '<path d="M5.8,12.9l12.6,12.6,8-8c3.9,3,6.8,7.2,8.1,12l1.5,5.4M36,34.9l6-10.3M36,34.9l-10.3-6"/>';

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

module.exports = ArrowTrendingDown;
