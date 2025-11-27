'use strict';

var React = require('react');

function Disk(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.5,1h-3.5c.6,0,1,.4,1,1v9c0,.6-.4,1-1,1H7.5c-.6,0-1-.4-1-1V2c0-.6.4-1,1-1H3.5c-1.4,0-2.5,1.1-2.5,2.5v17c0,1.4,1.1,2.5,2.5,2.5h17c1.4,0,2.5-1.1,2.5-2.5V3.5c0-1.4-1.1-2.5-2.5-2.5Z"/>   <path d="M14.5,8.5c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2c0,.6-.4,1-1,1Z"/>   <path d="M6,2h12.5" stroke-miterlimit="2"/>' : '<path d="M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z"/><path d="M34 4V22H15V4H34Z"/><path d="M29 11V15"/><path d="M11.9968 4H36.9984"/>';

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

module.exports = Disk;
