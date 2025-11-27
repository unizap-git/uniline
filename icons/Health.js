'use strict';

var React = require('react');

function Health(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM15.3,12c-.1,0-.2,0-.3,0s-.2,0-.3,0c-1.2-.4-3.7-2.1-3.7-4.3s1.2-2.6,2.7-2.6.9.1,1.3.4c.4-.2.9-.4,1.3-.4,1.5,0,2.7,1.2,2.7,2.6,0,2.2-2.4,3.9-3.7,4.3Z"/>' : '<path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path d="M27.3 12C25.4775 12 24 13.4347 24 15.2045C24 18.4091 27.9 21.3223 30 22C32.1 21.3223 36 18.4091 36 15.2045C36 13.4347 34.5225 12 32.7 12C31.5839 12 30.5972 12.538 30 13.3616C29.4028 12.538 28.4161 12 27.3 12Z"/>';

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

module.exports = Health;
