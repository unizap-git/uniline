'use strict';

var React = require('react');

function ClothesGloves(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.5,13.5v-5M17.5,8.5v-2.5c0-1.9,0-2.8-.6-3.4-.6-.6-1.5-.6-3.4-.6h-6c-1.9,0-2.8,0-3.4.6-.6.6-.6,1.5-.6,3.4v16h14v-3.5s3.5,0,3.5-3v-4c0-3-3.5-3-3.5-3Z"/>   <path d="M17.5,8.5v-2.5c0-1.9,0-2.8-.6-3.4s-1-.5-1.9-.6v9c0,.6-.4,1-1,1s-1-.4-1-1V2h-1.5v9c0,.6-.4,1-1,1s-1-.4-1-1V2h-1.5v9c0,.6-.4,1-1,1s-1-.4-1-1V2c-.9,0-1.5.2-1.9.6-.6.6-.6,1.5-.6,3.4v16h14v-3.5s3.5,0,3.5-3v-4c0-3-3.5-3-3.5-3Z"/>   <path d="M6,2h9"/>' : '<path d="M27 4H15C11.2288 4 9.34315 4 8.17157 5.17157C7 6.34315 7 8.22876 7 12V44H35V37C35 37 42 37 42 31V23C42 17 35 17 35 17V12C35 8.22876 35 6.34315 33.8284 5.17157C32.6569 4 30.7712 4 27 4Z"/><path d="M35 27V17M35 17V12C35 8.22876 35 6.34315 33.8284 5.17157C32.6569 4 30.7712 4 27 4H15C11.2288 4 9.34315 4 8.17157 5.17157C7 6.34315 7 8.22876 7 12V44H35V37C35 37 42 37 42 31C42 29 42 26 42 23C42 17 35 17 35 17Z"/><path d="M14 22V4"/><path d="M21 22V4"/><path d="M28 22V4"/><path d="M12 4H30"/>';

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

module.exports = ClothesGloves;
