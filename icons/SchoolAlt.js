'use strict';

var React = require('react');

function SchoolAlt(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,12c-.6,0-1,.4-1,1s.4,1,1,1,1-.4,1-1-.4-1-1-1Z"/>   <path d="M6.7,11.6l5.3-6.6,5.3,6.6c.2.2.5.4.8.4h2.9v7c0,.6-.4,1-1,1H4c-.6,0-1-.4-1-1v-7h2.9c.3,0,.6-.1.8-.4ZM9,13c0-1.7,1.3-3,3-3s3,1.3,3,3-1.3,3-3,3-3-1.3-3-3Z" fill-rule="evenodd"/>   <path d="M2.5,10l2.7-3.6c.2-.3.5-.4.8-.4h2.6l-3.2,4h-2.9ZM15.4,6l3.2,4h2.9l-2.7-3.6c-.2-.3-.5-.4-.8-.4h-2.6Z"/>' : '<path d="M14.1,22l10-12,10,12M14.1,22h-6v16h32.1v-16h-6M14.1,22H6.1l6-8h8.7s-6.7,8-6.7,8ZM34.2,22h8l-6-8h-8.7l6.7,8ZM28.1,26c0,2.2-1.8,4-4,4s-4-1.8-4-4,1.8-4,4-4,4,1.8,4,4Z"/>';

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

module.exports = SchoolAlt;
