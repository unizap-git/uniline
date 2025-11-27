'use strict';

var React = require('react');

function MailDownload(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5,9h-3v12h20v-12h-3"/>   <path d="M5,11.2l7,5.2,7-5.2M5,11.2V3h14v8.2M5,11.2l-3-2.2M19,11.2l3-2.2"/>   <path d="M5,3v8.2l7,5.2,7-5.2V3H5ZM15.2,10.2l-2.5,2.5c0,0-.2.2-.3.2-.1,0-.2,0-.4,0h0c-.1,0-.3,0-.4,0-.1,0-.2-.1-.3-.2l-2.5-2.5c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l.8.8v-3.1c0-.6.4-1,1-1s1,.4,1,1v3.1l.8-.8c.4-.4,1-.4,1.4,0s.4,1,0,1.4Z"/>' : '<path d="M10 18H4V42H44V18H38"/><path d="M38 6H10V22.5L24 33L38 22.5V6Z"/><path d="M10 22.5L24 33L38 22.5M10 22.5V6H38V22.5M10 22.5L4 18M38 22.5L44 18"/><path d="M19 19L24 24M24 24L29 19M24 24V13"/>';

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

module.exports = MailDownload;
