'use strict';

var React = require('react');

function HairDryer(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9.6,10.8l1.2,9.3c.1,1-.7,2-1.7,2s-1.6-.7-1.7-1.5l-1.2-9.5"/>   <path d="M22,8.8l-6.2,1"/>   <path d="M22,4.2l-7.8-1.1"/>   <path d="M22.1,3.3L6.6,1s0,0-.1,0C3.5,1,1,3.5,1,6.5s2.2,5.2,5,5.5c.2,0,.3,0,.5,0,.8,0,1.9,0,3.3-.2l12.4-2c.5,0,.8-.5.8-1v-4.5c0-.5-.4-.9-.9-1ZM6.5,9c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5-1.1,2.5-2.5,2.5ZM19.5,8.9c0,.6-.4,1-1,1s-1-.4-1-1v-4.8c0-.6.4-1,1-1s1,.4,1,1v4.8Z"/>' : '<path d="M19.193 21.5439L21.512 40.0964C21.7711 42.1692 20.1548 44.0001 18.0659 44.0001C16.3144 44.0001 14.837 42.6959 14.6197 40.9579L12.2461 21.969"/><path d="M13 4C8.02944 4 4 8.02944 4 13C4 17.7167 7.62831 21.5859 12.2461 21.9689C12.4947 21.9895 12.7461 22 13 22C14.578 22 16.7395 21.8249 19.193 21.5438L31.5965 19.5219L44 17.5V8.5L28.5 6.25L13 4Z"/><path d="M37 8.20068V17.7996"/><path d="M44.0002 17.5L31.5967 19.5219"/><path d="M44 8.5L28.5 6.25"/><path d="M16 13C16 14.6569 14.6569 16 13 16C11.3431 16 10 14.6569 10 13C10 11.3431 11.3431 10 13 10C14.6569 10 16 11.3431 16 13Z"/>';

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

module.exports = HairDryer;
