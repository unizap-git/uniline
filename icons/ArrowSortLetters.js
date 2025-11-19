'use strict';

var React = require('react');

function ArrowSortLetters(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,21c-.4,0-.7-.2-.9-.6l-.7-1.4h-3.8l-.7,1.4c-.2.5-.8.7-1.3.4-.5-.2-.7-.8-.4-1.3l3.5-7c.3-.7,1.4-.7,1.8,0l3.5,7c.2.5,0,1.1-.4,1.3-.1,0-.3.1-.4.1ZM15.1,17h1.8l-.9-1.8-.9,1.8ZM7,21c-.6,0-1-.4-1-1V6.4l-1.3,1.3c-.4.4-1,.4-1.4,0s-.4-1,0-1.4l3-3c0,0,.2-.2.3-.2.1,0,.2,0,.4,0h0c.1,0,.3,0,.4,0,.1,0,.2.1.3.2l3,3c.4.4.4,1,0,1.4s-1,.4-1.4,0l-1.3-1.3v13.6c0,.6-.4,1-1,1ZM19,11h-6c-.4,0-.8-.2-.9-.6-.2-.4,0-.8.2-1.1l4.3-4.3h-3.6c-.6,0-1-.4-1-1s.4-1,1-1h6c.4,0,.8.2.9.6.2.4,0,.8-.2,1.1l-4.3,4.3h3.6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = ArrowSortLetters;
