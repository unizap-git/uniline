'use strict';

var React = require('react');

function Carousel(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M2,13.5h3v-4h-3c-.6,0-1-.4-1-1v6c0-.6.4-1,1-1Z"/>     <path d="M22,9.5h-3v4h3c.6,0,1,.4,1,1v-6c0,.6-.4,1-1,1Z"/>     <path d="M21,3.5H3c-1.1,0-2,.9-2,2v3c0-.6.4-1,1-1h4c.6,0,1,.4,1,1v6c0,.6-.4,1-1,1H2c-.6,0-1-.4-1-1v3c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2v-3c0,.6-.4,1-1,1h-4c-.6,0-1-.4-1-1v-6c0-.6.4-1,1-1h4c.6,0,1,.4,1,1v-3c0-1.1-.9-2-2-2ZM15,14.5c0,.6-.4,1-1,1h-4c-.6,0-1-.4-1-1v-6c0-.6.4-1,1-1h4c.6,0,1,.4,1,1v6Z"/>   </g>   <path d="M2,17.5c-.6,0-1-.4-1-1V6.5c0-.6.4-1,1-1s1,.4,1,1v10c0,.6-.4,1-1,1Z"/>   <path d="M22,17.5c-.6,0-1-.4-1-1V6.5c0-.6.4-1,1-1s1,.4,1,1v10c0,.6-.4,1-1,1Z"/>' : '<path d="M4 11C4 9.89543 4.89543 9 6 9H42C43.1046 9 44 9.89543 44 11V35C44 36.1046 43.1046 37 42 37H6C4.89543 37 4 36.1046 4 35V11Z"/><path d="M28 17H20V29H28V17Z"/><path d="M44 17H36V29H44"/><path d="M4 17H12V29H4"/><path d="M4 13V33"/><path d="M44 13V33"/>';

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

module.exports = Carousel;
