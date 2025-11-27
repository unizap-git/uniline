'use strict';

var React = require('react');

function ProjectorTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7,20v-3"/>   <path d="M17,20v-3"/>   <path d="M21,4H3c-1.1,0-2,.9-2,2v10c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2ZM8,13.5h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1ZM9,10.5h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1ZM15.5,14.5c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5,3.5,1.6,3.5,3.5-1.6,3.5-3.5,3.5Z"/>' : '<path d="M4 12C4 10.8954 4.89543 10 6 10H42C43.1046 10 44 10.8954 44 12V32C44 33.1046 43.1046 34 42 34H6C4.89543 34 4 33.1046 4 32V12Z"/><path d="M12 19H18"/><path d="M12 25H16"/><path d="M14 40L14 34"/><path d="M34 40V34"/><circle cx="31" cy="22" r="5"/>';

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

module.exports = ProjectorTwo;
