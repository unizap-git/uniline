'use strict';

var React = require('react');

function Fill(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM18,17c0,.6-.4,1-1,1H7c-.6,0-1-.4-1-1V7c0-.6.4-1,1-1h10c.6,0,1,.4,1,1v10Z"/>   <path d="M11.5,18c-.3,0-.5,0-.7-.3-.4-.4-.4-1,0-1.4l5.5-5.5c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-5.5,5.5c-.2.2-.5.3-.7.3Z"/>   <path d="M7,13.5c-.3,0-.5,0-.7-.3-.4-.4-.4-1,0-1.4l5.5-5.5c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-5.5,5.5c-.2.2-.5.3-.7.3Z"/>   <path d="M7,18c-.3,0-.5,0-.7-.3-.4-.4-.4-1,0-1.4l10-10c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-10,10c-.2.2-.5.3-.7.3Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><rect x="14" y="14" width="20" height="20"/><path d="M34 23L23 34"/><path d="M25 14L14 25"/><path d="M34 14L14 34"/><path d="M14 22V34H26"/><path d="M22 14H34V26"/>';

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

module.exports = Fill;
