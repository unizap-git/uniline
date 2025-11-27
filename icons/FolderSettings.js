'use strict';

var React = require('react');

function FolderSettings(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.5,5h-8l-2.2-2.6c-.2-.2-.5-.4-.8-.4H3.5c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h17c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2ZM15.5,15h-.7c0,0,0,.2-.1.3l.6.6c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-.6-.6c0,0-.2,0-.3.1v.7c0,.6-.4,1-1,1s-1-.4-1-1v-.7c-.1,0-.2,0-.3-.1l-.6.6c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l.6-.6c0,0,0-.2,0-.2h-.7c-.6,0-1-.4-1-1s.4-1,1-1h.7c0,0,0-.2.1-.3l-.5-.5c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l.5.5c0,0,.2,0,.3-.1v-.7c0-.6.4-1,1-1s1,.4,1,1v.7c0,0,.2,0,.2,0l.5-.5c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-.5.5c0,.1.1.2.1.3h.7c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"/><circle cx="24" cy="28" r="4"/><path d="M24 21V24"/><path d="M24 32V35"/><path d="M28.8281 23L26.7068 25.1213"/><path d="M20.8281 31L18.7068 33.1213"/><path d="M19 23L21.1213 25.1213"/><path d="M27 31L29.1213 33.1213"/><path d="M17 28H18.5H20"/><path d="M28 28H29.5H31"/>';

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

module.exports = FolderSettings;
