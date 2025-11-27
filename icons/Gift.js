'use strict';

var React = require('react');

function Gift(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M11,22v-12c0-.6.4-1,1-1H3.5c-.6,0-1,.4-1,1v12c0,.6.4,1,1,1h8.5c-.6,0-1-.4-1-1Z"/>     <path d="M20.5,9h-8.5c.6,0,1,.4,1,1v12c0,.6-.4,1-1,1h8.5c.6,0,1-.4,1-1v-12c0-.6-.4-1-1-1Z"/>   </g>   <path d="M20.5,23H3.5c-.6,0-1-.4-1-1s.4-1,1-1h17c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <rect x="2" y="6" width="20" height="4"/>   <path d="M8,2l4,4,4-4"/>' : '<path d="M41 44V20H7V44H41Z"/><path d="M24 44V20"/><path d="M41 44H7"/><rect x="4" y="12" width="40" height="8"/><path d="M16 4L24 12L32 4"/>';

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

module.exports = Gift;
