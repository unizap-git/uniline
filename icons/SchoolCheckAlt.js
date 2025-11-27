'use strict';

var React = require('react');

function SchoolCheckAlt(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.7,14.3c.4.4.4,1,0,1.4l-4,4c-.4.4-1,.4-1.4,0l-2-2c-.4-.4-.4-1,0-1.4.4-.4,1-.4,1.4,0l1.3,1.3,3.3-3.3c.4-.4,1-.4,1.4,0Z" fill-rule="evenodd"/>   <path d="M6.7,11.6l5.3-6.6,5.3,6.6c.2.2.5.4.8.4h2.9c-.8,0-1.5.3-2.1.9l-1.9,1.9c-.6-.5-1.4-.8-2.2-.8.1-.3.2-.7.2-1,0-1.7-1.3-3-3-3s-3,1.3-3,3,1.3,3,3,3,.1,0,.2,0c-.4,1.1-.1,2.3.7,3.1l.9.9H4c-.6,0-1-.4-1-1v-7h2.9c.3,0,.6-.1.8-.4Z"/>   <path d="M12,12c-.6,0-1,.4-1,1s.4,1,1,1,1-.4,1-1-.4-1-1-1ZM2.5,10l2.7-3.6c.2-.3.5-.4.8-.4h2.6l-3.2,4h-2.9ZM15.4,6l3.2,4h2.9l-2.7-3.6c-.2-.3-.5-.4-.8-.4h-2.6Z"/>' : '<path d="M14.1,22l10.2-12.2,10.2,12.2M14.1,22h-6.1v16.3h16.3M14.1,22H5.9l6.1-8.2h8.9s-6.8,8.2-6.8,8.2ZM34.5,22h6.1v2M34.5,22h8.2l-6.1-8.2h-8.9l6.8,8.2ZM30.4,34.2l4.1,4.1,8.2-8.2M28.4,26c0,2.3-1.8,4.1-4.1,4.1s-4.1-1.8-4.1-4.1,1.8-4.1,4.1-4.1,4.1,1.8,4.1,4.1Z"/>';

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

module.exports = SchoolCheckAlt;
