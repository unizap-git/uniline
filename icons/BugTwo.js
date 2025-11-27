'use strict';

var React = require('react');

function BugTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18,17h0c0-.3,0-.7,0-1v-1h1c.6,0,1-.4,1-1s-.4-1-1-1h-1.1c0-.3-.1-.7-.3-1h-.6c1.1,0,2-.9,2-2v-2c0-.6-.4-1-1-1s-1,.4-1,1v2h-.5c-.1-.2-.3-.3-.5-.5v-1.5c0-1-.4-1.9-1-2.6l.7-.7c.2-.2.3-.4.3-.7v-1c0-.6-.4-1-1-1s-1,.4-1,1v.6l-.7.7c-.9-.3-1.8-.3-2.7,0l-.7-.7v-.6c0-.6-.4-1-1-1s-1,.4-1,1v1c0,.3.1.5.3.7l.7.7c-.6.7-1,1.6-1,2.6v1.5c-.2.1-.3.3-.5.5h-.5v-2c0-.6-.4-1-1-1s-1,.4-1,1v2c0,1.1.9,2,2,2h-.7c-.1.3-.2.7-.3,1h-1.1c-.6,0-1,.4-1,1s.4,1,1,1h1v1c0,.3,0,.7,0,1h0c-1.1,0-2,.9-2,2v2c0,.6.4,1,1,1s1-.4,1-1v-2h.8c.9,1.5,2.4,2.6,4.2,2.9v-9.9c0-.6.4-1,1-1s1,.4,1,1v9.9c1.8-.3,3.3-1.4,4.2-2.9h.8v2c0,.6.4,1,1,1s1-.4,1-1v-2c0-1.1-.9-2-2-2ZM14,8.4c-.3-.1-.6-.2-.9-.3h-.1c-.6-.1-1.3-.1-1.9,0h-.1c-.3,0-.6.2-.9.3v-.4c0-1.1.9-2,2-2s2,.9,2,2v.4Z"/>' : '<path d="M20,9.9l-2-2v-2M28,9.9l2-2v-2M24,18v24.1M24,18c5.5,0,10,4.5,10,10M24,18c-5.5,0-10,4.5-10,10M24,18c2.2,0,4.2.7,6,2h0v-4c0-3.3-2.7-6-6-6s-6,2.7-6,6v4h0c1.7-1.3,3.8-2,6-2ZM13.9,28h-4M13.9,28v4c0,5.5,4.5,10,10,10s10-4.5,10-10v-4M38.1,28h-4.1M14,36h-2.1c-1.1,0-2,.9-2,2v4M34,36h2.1c1.1,0,2,.9,2,2v4M32,22h2c1.1,0,2-.9,2-2v-4M16,22h-2.1c-1.1,0-2-.9-2-2v-4"/>';

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

module.exports = BugTwo;
