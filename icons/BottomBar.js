'use strict';

var React = require('react');

function BottomBar(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M21,17H3c-.6,0-1-.4-1-1v3.5c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5v-3.5c0,.6-.4,1-1,1Z"/>     <path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v11.5c0-.6.4-1,1-1h18c.6,0,1,.4,1,1V4.5c0-1.4-1.1-2.5-2.5-2.5Z"/>   </g>   <path d="M3,18.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <path d="M21,18.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M6 32H42"/><path d="M6 29V35"/><path d="M42 29V35"/>';

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

module.exports = BottomBar;
