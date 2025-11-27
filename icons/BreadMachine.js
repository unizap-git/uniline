'use strict';

var React = require('react');

function BreadMachine(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17,9.5v-3.5c2.5,0,2.5-3.5,0-3.5H7c-2.5,0-2.5,3.5,0,3.5v3.5"/>   <path d="M11,5.5l-1,1"/>   <path d="M14,5.5l-1,1"/>   <path d="M16.5,8.5H7.5c-2.8,0-5,2.2-5,5v4c0,1.7,1.3,3,3,3h13c1.7,0,3-1.3,3-3v-4c0-2.8-2.2-5-5-5ZM12,17.5c-1.7,0-3-1.3-3-3s1.3-3,3-3,3,1.3,3,3-1.3,3-3,3Z"/>   <path d="M7.5,19.5v2"/>   <path d="M16.5,19.5v2"/>' : '<path d="M7 27C7 22.5817 10.5817 19 15 19H33C37.4183 19 41 22.5817 41 27V35C41 37.2091 39.2091 39 37 39H11C8.79086 39 7 37.2091 7 35V27Z"/><path d="M34.0002 19V12C39 12 39 5 34.0002 5C29.0004 5 19.0004 5 14.0002 5C9.00006 5 8.99979 12 14.0002 12V19"/><path d="M22 11L20 13"/><path d="M28 11L26 13"/><circle cx="24" cy="29" r="4"/><path d="M15 39V43"/><path d="M33 39V43"/>';

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

module.exports = BreadMachine;
