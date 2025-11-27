'use strict';

var React = require('react');

function ProjectorThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3,19v-3h18v3h-3v-3H6v3h-3Z"/>   <path d="M21,19v-3h-3v3h3Z"/>   <path d="M3,19v-3h3v3h-3Z"/>   <path d="M12,8H2v8h20v-8h-3"/>   <path d="M5,12h4"/>   <path d="M15.5,3.5c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5,4.5-2,4.5-4.5-2-4.5-4.5-4.5ZM15.5,9.5c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5,1.5.7,1.5,1.5-.7,1.5-1.5,1.5Z"/>' : '<path d="M6 38V32H12H36H42V38H36V32H12V38H6Z"/><path d="M42 38V32H36V38H42Z"/><path d="M6 38V32H12V38H6Z"/><path d="M24 16H4V32H6H12H36H42H44V16H38"/><path d="M10 24H18"/><path d="M31 23C34.866 23 38 19.866 38 16C38 12.134 34.866 9 31 9C27.134 9 24 12.134 24 16C24 19.866 27.134 23 31 23Z"/><path d="M31 19C32.6569 19 34 17.6569 34 16C34 14.3431 32.6569 13 31 13C29.3431 13 28 14.3431 28 16C28 17.6569 29.3431 19 31 19Z"/>';

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

module.exports = ProjectorThree;
