'use strict';

var React = require('react');

function GoldMedal(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,2h-6.5l-2,5.2c2.2.5,4.1,1.9,5.1,3.8l3.4-9Z"/>   <path d="M8.5,2H2l3.4,9c1-2,2.9-3.4,5.1-3.8l-2-5.2Z"/>   <path d="M19.5,10.5c-1.2-2.3-3.3-3.9-5.8-4.4-1.1-.2-2.3-.2-3.4,0-2.5.5-4.6,2.1-5.8,4.4-.6,1.2-1,2.6-1,4,0,4.7,3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5-.3-2.8-1-4ZM14,18.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h1v-4.1h-.2c-.5.2-1.1,0-1.3-.6-.2-.5.1-1.1.6-1.3l1.5-.5c.3-.1.6,0,.9.1.3.2.4.5.4.8v5.5h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M44 4H31L27 14.3001C31.4614 15.2057 35.2038 18.0914 37.2699 22L44 4Z"/><path d="M17 4H4L10.7301 22C12.7962 18.0914 16.5386 15.2057 21 14.3001L17 4Z"/><path d="M39 29C39 37.2843 32.2843 44 24 44C15.7157 44 9 37.2843 9 29C9 26.4718 9.62546 24.0897 10.7301 22C12.7962 18.0914 16.5386 15.2057 21 14.3001C21.9693 14.1033 22.9726 14 24 14C25.0274 14 26.0307 14.1033 27 14.3001C31.4614 15.2057 35.2038 18.0914 37.2699 22C38.3745 24.0897 39 26.4718 39 29Z"/><path d="M24 35V22L21 23M24 35H28M24 35H20"/>';

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

module.exports = GoldMedal;
