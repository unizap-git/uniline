'use strict';

var React = require('react');

function ManyToMany(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,2.5H3c-1.1,0-2,.9-2,2v15c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V4.5c0-1.1-.9-2-2-2ZM10,15c0,.4-.3.8-.7,1,0,0-.2,0-.3,0-.3,0-.6-.2-.8-.4l-2.2-3.3v2.7c0,.6-.4,1-1,1s-1-.4-1-1v-6c0-.4.3-.8.7-1,.4-.1.9,0,1.1.4l2.2,3.3v-2.7c0-.6.4-1,1-1s1,.4,1,1v6ZM13,14c0,.6-.4,1-1,1s-1-.4-1-1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5ZM13,10.5c0,.6-.4,1-1,1s-1-.4-1-1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5ZM20,15c0,.4-.3.8-.7,1,0,0-.2,0-.3,0-.3,0-.6-.2-.8-.4l-2.2-3.3v2.7c0,.6-.4,1-1,1s-1-.4-1-1v-6c0-.4.3-.8.7-1,.4-.1.9,0,1.1.4l2.2,3.3v-2.7c0-.6.4-1,1-1s1,.4,1,1v6Z"/>' : '<path d="M42 7H6C4.89543 7 4 7.89543 4 9V39C4 40.1046 4.89543 41 6 41H42C43.1046 41 44 40.1046 44 39V9C44 7.89543 43.1046 7 42 7Z"/><path d="M30 30V18L38 30V18"/><path d="M10 30V18L18 30V18"/><path d="M24 20V21"/><path d="M24 27V28"/>';

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

module.exports = ManyToMany;
