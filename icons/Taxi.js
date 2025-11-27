'use strict';

var React = require('react');

function Taxi(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9,5.5h6l-.5-2.5c0-.3-.3-.5-.6-.5h-3.8c-.3,0-.5.2-.6.5l-.5,2.5Z"/>   <path d="M20.8,10.3l-1-3.5c-.3-1.4-1.5-2.3-2.9-2.3H7.1c-1.4,0-2.6,1-2.9,2.3l-1,3.5c-1.3.7-2.2,2-2.2,3.6v3.6c0,1.4,1.1,2.5,2.5,2.5h0c.2,1.4,1.5,2.5,3,2.5s2.7-1.1,3-2.5h5.1c.2,1.4,1.5,2.5,3,2.5s2.7-1.1,3-2.5h0c1.4,0,2.5-1.1,2.5-2.5v-3.6c0-1.5-.8-2.9-2.2-3.5ZM6.8,16.5c-.7,0-1.2-.6-1.2-1.2s.6-1.2,1.2-1.2,1.2.6,1.2,1.2-.6,1.2-1.2,1.2ZM7.5,12.5c-.6,0-1-.4-1-1s.4-1,1-1h9c.6,0,1,.4,1,1s-.4,1-1,1H7.5ZM17.2,16.5c-.7,0-1.2-.6-1.2-1.2s.6-1.2,1.2-1.2,1.2.6,1.2,1.2-.6,1.2-1.2,1.2Z"/>' : '<path d="M4 35V27.7097C4 25.4363 5.28486 23.3581 7.3186 22.3422L8.00053 22.0015L10.3105 14.0919C10.7326 12.2812 12.3467 11 14.206 11H33.8943C35.7675 11 37.3899 12.3 37.7981 14.1282L40.0031 22.0015L40.6834 22.3416C42.716 23.358 44 25.4355 44 27.7081V35C44 36.6569 42.6569 38 41 38H39.0031V39C39.0031 41.2091 37.2123 43 35.0031 43C32.7909 43 31 41.2091 31 39V38H17V39.0003C17 41.2093 15.2093 43 13.0003 43C10.7913 43 9.00053 41.2093 9.00053 39.0003V38H7C5.34315 38 4 36.6569 4 35Z"/><path d="M13.5 33C14.8807 33 16 31.8807 16 30.5C16 29.1193 14.8807 28 13.5 28C12.1193 28 11 29.1193 11 30.5C11 31.8807 12.1193 33 13.5 33Z"/><path d="M34.5 33C35.8807 33 37 31.8807 37 30.5C37 29.1193 35.8807 28 34.5 28C33.1193 28 32 29.1193 32 30.5C32 31.8807 33.1193 33 34.5 33Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18 11H30L29.0088 6.04409C28.8868 5.43404 28.3998 5 27.8374 5H20.1626C19.6002 5 19.1132 5.43404 18.9912 6.04409L18 11Z"/><path d="M15 23H33"/>';

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

module.exports = Taxi;
