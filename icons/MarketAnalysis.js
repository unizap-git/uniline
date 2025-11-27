'use strict';

var React = require('react');

function MarketAnalysis(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2.1,19.5l6.1-6.2,3.3,3.2,4-3.5,2.2,2.2"/>   <path d="M22,9v9.5c0,.8-.7,1.5-1.5,1.5H6"/>   <path d="M20.5,3H3.5c-1.4,0-2.5,1.1-2.5,2.5v4.5c0,.6.4,1,1,1h20c.6,0,1-.4,1-1v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM6.6,8h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM18.6,8h-9c-.6,0-1-.4-1-1s.4-1,1-1h9c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M2,9v4.5"/>' : '<path d="M44 11C44 9.34315 42.6569 8 41 8H7C5.34315 8 4 9.34315 4 11V20H44V11Z"/><path d="M4.1123 39.0301L16.2879 26.7293L22.8672 33.0301L30.9105 26L35.391 30.368"/><path d="M44 18V37C44 38.6569 42.6569 40 41 40H12"/><path d="M19.1118 14H37.1118"/><path d="M11.1108 14H13.1108"/><path d="M4 18V27"/>';

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

module.exports = MarketAnalysis;
