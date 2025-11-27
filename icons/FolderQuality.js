'use strict';

var React = require('react');

function FolderQuality(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.5,5h-8l-2.2-2.6c-.2-.2-.5-.4-.8-.4H3.5c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h17c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2ZM16.3,12.9l-3.5,4.2c-.2.2-.5.4-.8.4s-.6-.1-.8-.4l-3.5-4.2c-.3-.4-.3-.9,0-1.3l1.4-1.8c.2-.2.5-.4.8-.4h4.2c.3,0,.6.1.8.4l1.4,1.8c.3.4.3.9,0,1.3Z"/>' : '<path d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"/><path d="M19.8 21H28.2L31 24.5294L24 33L17 24.5294L19.8 21Z"/>';

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

module.exports = FolderQuality;
