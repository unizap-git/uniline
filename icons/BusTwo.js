'use strict';

var React = require('react');

function BusTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8,20h-4v2h4v-2Z"/>   <path d="M20,20h-4v2h4v-2Z"/>   <g>     <path d="M22,13.5H2c-.6,0-1-.4-1-1v6.5c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2v-6.5c0,.6-.4,1-1,1ZM6,18h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM14.5,18h-5c-.6,0-1-.4-1-1s.4-1,1-1h5c.6,0,1,.4,1,1s-.4,1-1,1ZM19,18h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>     <path d="M22,6H2c-.6,0-1-.4-1-1v7.5c0-.6.4-1,1-1h20c.6,0,1,.4,1,1v-7.5c0,.6-.4,1-1,1ZM13.5,9h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>     <path d="M21,1H3c-1.1,0-2,.9-2,2v2c0-.6.4-1,1-1h20c.6,0,1,.4,1,1v-2c0-1.1-.9-2-2-2Z"/>   </g>   <path d="M2,8c-.6,0-1-.4-1-1V3c0-.6.4-1,1-1s1,.4,1,1v4c0,.6-.4,1-1,1Z"/>   <path d="M22,8c-.6,0-1-.4-1-1V3c0-.6.4-1,1-1s1,.4,1,1v4c0,.6-.4,1-1,1Z"/>   <path d="M2,15.5c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4c0,.6-.4,1-1,1Z"/>   <path d="M22,15.5c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4c0,.6-.4,1-1,1Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H42C43.1046 4 44 4.89543 44 6V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V6Z"/><path d="M16 40H8V44H16V40Z"/><path d="M40 40H32V44H40V40Z"/><path d="M21 16H27"/><path d="M10 34H12"/><path d="M19 34H29"/><path d="M4 25H44"/><path d="M4 10H44"/><path d="M36 34H38"/><path d="M4 6V14"/><path d="M44 6V14"/><path d="M4 21V29"/><path d="M44 21V29"/>';

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

module.exports = BusTwo;
