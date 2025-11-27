'use strict';

var React = require('react');

function Backpack(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9.5,4.8v-2.8h-3v5"/>   <path d="M14.5,4.8v-2.8h3v5"/>   <path d="M5.5,14.5h-3v5h3"/>   <path d="M18.5,14.5h3v5h-3"/>   <path d="M13.5,4h-3c-3.3,0-6,2.7-6,6v10c0,1.7,1.3,3,3,3h9c1.7,0,3-1.3,3-3v-10c0-3.3-2.7-6-6-6ZM15.5,12.5h-.5v1c0,.6-.4,1-1,1s-1-.4-1-1v-1h-4.5c-.6,0-1-.4-1-1s.4-1,1-1h7c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M19 9.55556V4H13V14"/><path d="M29 9.55556V4H35V14"/><path d="M11 20C11 14.4772 15.4772 10 21 10H27C32.5228 10 37 14.4772 37 20V40C37 42.2091 35.2091 44 33 44H15C12.7909 44 11 42.2091 11 40V20Z"/><path d="M11 29H5V39H11"/><path d="M37 29H43V39H37"/><path d="M28 23V27"/><path d="M17 23H27.5H31"/>';

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

module.exports = Backpack;
