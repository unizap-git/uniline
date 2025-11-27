'use strict';

var React = require('react');

function Browser(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,9v11c0,.6-.4,1-1,1H4c-.6,0-1-.4-1-1v-11"/>   <path d="M20,2H4c-1.1,0-2,.9-2,2v5c0,.6.4,1,1,1h18c.6,0,1-.4,1-1v-5c0-1.1-.9-2-2-2ZM6,7c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM9,7c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM12,7c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M42 18V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V18"/><path d="M6 8C6 6.89543 6.89543 6 8 6H40C41.1046 6 42 6.89543 42 8V18H6V8Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 14C25.1046 14 26 13.1046 26 12C26 10.8954 25.1046 10 24 10C22.8954 10 22 10.8954 22 12C22 13.1046 22.8954 14 24 14Z"/>';

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

module.exports = Browser;
