'use strict';

var React = require('react');

function ScanSetting(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,1.5H4c-1.4,0-2.5,1.1-2.5,2.5v16c0,1.4,1.1,2.5,2.5,2.5h16c1.4,0,2.5-1.1,2.5-2.5V4c0-1.4-1.1-2.5-2.5-2.5ZM7.7,12.8c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-1.5-1.5c-.4-.4-.4-1,0-1.4l1.5-1.5c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-.8.8.8.8ZM14.2,17.7l-1.5,1.5c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-1.5-1.5c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l.8.8.8-.8c.4-.4,1-.4,1.4,0s.4,1,0,1.4ZM14.2,7.7c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-.8-.8-.8.8c-.4.4-1,.4-1.4,0s-.4-1,0-1.4l1.5-1.5c.4-.4,1-.4,1.4,0l1.5,1.5c.4.4.4,1,0,1.4ZM19.2,12.7l-1.5,1.5c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l.8-.8-.8-.8c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.5,1.5c.4.4.4,1,0,1.4Z"/>' : '<rect x="5" y="5" width="38" height="38" rx="3"/><path d="M34 21L37 24L34 27"/><path d="M14 21L11 24L14 27"/><path d="M27 14L24 11L21 14"/><path d="M27 34L24 37L21 34"/>';

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

module.exports = ScanSetting;
