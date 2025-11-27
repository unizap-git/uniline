'use strict';

var React = require('react');

function BaggageDelay(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18,13v-6c0-.6-.4-1-1-1H5c-.6,0-1,.4-1,1v12c0,.6.4,1,1,1h8.5"/>   <path d="M8,6v14"/>   <path d="M14,6v8.5"/>   <path d="M14,6v-3c0-.6-.4-1-1-1h-4c-.6,0-1,.4-1,1v3"/>   <path d="M17.5,12c-3,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5,5.5-2.5,5.5-5.5-2.5-5.5-5.5-5.5ZM19,19h-2c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M6.5,20v2" stroke-miterlimit="2"/>' : '<path d="M36 26V14C36 12.8954 35.1046 12 34 12H10C8.89543 12 8 12.8954 8 14V38C8 39.1046 8.89543 40 10 40H27"/><path d="M16 12V40"/><path d="M28 12V29"/><path d="M28 12V6C28 4.89543 27.1046 4 26 4H18C16.8954 4 16 4.89543 16 6V12"/><path d="M35 44C39.9706 44 44 39.9706 44 35C44 30.0294 39.9706 26 35 26C30.0294 26 26 30.0294 26 35C26 39.9706 30.0294 44 35 44Z"/><path d="M34 32V36H38"/><path d="M13 40V44"/>';

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

module.exports = BaggageDelay;
