'use strict';

var React = require('react');

function Compression(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,7.5c.8,1,1,3,1,4.5s-.2,3.5-1,4.5"/>   <path d="M19,12c0-2.3.9-5.6,1.5-7.3.2-.6,0-1.3-.3-1.8-.4-.5-1-.8-1.6-.8H5.4c-.6,0-1.2.3-1.6.8-.4.5-.5,1.2-.3,1.8.6,1.7,1.5,5,1.5,7.3s-.9,5.6-1.5,7.3c-.2.6,0,1.3.3,1.8.4.5,1,.8,1.6.8h13.1c.6,0,1.2-.3,1.6-.8.4-.5.5-1.2.3-1.8-.6-1.7-1.5-5-1.5-7.3ZM11,17h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1ZM15,13h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1ZM15,8.8h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M22,7.5c-.8,1-1,3-1,4.5s.2,3,1,4.5"/>' : '<path d="M8.91962 8.7141C8.49508 7.38938 9.47567 6 10.8668 6H37.1332C38.5243 6 39.5049 7.38938 39.0804 8.7141C37.8993 12.3995 36 19.0894 36 24C36 28.9106 37.8993 35.6005 39.0804 39.2859C39.5049 40.6106 38.5243 42 37.1332 42H10.8668C9.47567 42 8.49508 40.6106 8.91962 39.2859C10.1007 35.6005 12 28.9106 12 24C12 19.0894 10.1007 12.3995 8.91962 8.7141Z"/><path d="M4 15C5.5 17 5.99988 21 5.99988 24C5.99988 27 5.5 31 4 33"/><path d="M18 15.5H30"/><path d="M18 24H30"/><path d="M18 32H22"/><path d="M44 15C42.5 17 42.0001 21 42.0001 24C42.0001 27 42.5 30 44 33"/>';

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

module.exports = Compression;
