'use strict';

var React = require('react');

function NotebookOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M19,1h-11c.6,0,1,.4,1,1v20c0,.6-.4,1-1,1h11c1.1,0,2-.9,2-2V3c0-1.1-.9-2-2-2ZM16,11h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1ZM16,7h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>     <path d="M7,22V2c0-.6.4-1,1-1h-3c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h3c-.6,0-1-.4-1-1Z"/>   </g>   <path d="M5,2h6"/>   <path d="M5,22h6"/>' : '<path d="M8 6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6Z"/><path d="M16 4V44"/><path d="M24 12H32"/><path d="M24 20H32"/><path d="M10 4H22"/><path d="M10 44H22"/>';

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

module.exports = NotebookOne;
