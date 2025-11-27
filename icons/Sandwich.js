'use strict';

var React = require('react');

function Sandwich(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M21,16H3c-.6,0-1-.4-1-1v3c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-3c0,.6-.4,1-1,1Z"/>     <path d="M21,10H3c-.6,0-1,.4-1,1v4c0-.6.4-1,1-1h18c.6,0,1,.4,1,1v-4c0-.6-.4-1-1-1Z"/>   </g>   <path d="M3,18c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4c0,.6-.4,1-1,1Z"/>   <path d="M21,13v4"/>   <path d="M3,11h18c0-1-5.9-5.3-9-7.3-3.1-2-5.6.8-7.7,3.3-1.6,2-1.3,3-1.3,4Z"/>' : '<path d="M42 36V22H6V36C6 38.2091 7.79086 40 10 40H38C40.2091 40 42 38.2091 42 36Z"/><path d="M6 30H42"/><path d="M6 26V34"/><path d="M42 26V34"/><path d="M6.06657 22H42C42 19.9844 30.1933 11.4184 24.0333 7.38735C17.8733 3.35628 12.7399 8.89906 8.6332 13.9379C5.34786 17.969 6.06659 19.9845 6.06657 22Z"/>';

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

module.exports = Sandwich;
