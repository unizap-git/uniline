'use strict';

var React = require('react');

function BatteryWorking(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,10h1c.6,0,1,.4,1,1v2c0,.6-.4,1-1,1h-1v-4Z"/>   <path d="M19,6H3c-1.1,0-2,.9-2,2v8c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2v-8c0-1.1-.9-2-2-2ZM7.5,13.5c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3ZM10.5,13.5c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3Z"/>' : '<path d="M38 14H6C4.89543 14 4 14.8954 4 16V32C4 33.1046 4.89543 34 6 34H38C39.1046 34 40 33.1046 40 32V16C40 14.8954 39.1046 14 38 14Z"/><path d="M42 20H44C45.1046 20 46 20.8954 46 22V26C46 27.1046 45.1046 28 44 28H42V20Z"/><path d="M13 21V27"/><path d="M19 21V27"/>';

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

module.exports = BatteryWorking;
