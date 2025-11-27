'use strict';

var React = require('react');

function FolderUpload(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.5,5h-8l-2.2-2.6c-.2-.2-.5-.4-.8-.4H3.5c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h17c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2ZM15.7,13.7c-.4.4-1,.4-1.4,0l-1.3-1.3v4.6c0,.6-.4,1-1,1s-1-.4-1-1v-4.6l-1.3,1.3c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l3-3c0,0,.2-.2.3-.2.2-.1.5-.1.8,0,.1,0,.2.1.3.2,0,0,0,0,0,0l3,3c.4.4.4,1,0,1.4Z"/>' : '<path d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"/><path d="M30 25.9867L24 20L18 26"/><path d="M24 20V34"/>';

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

module.exports = FolderUpload;
