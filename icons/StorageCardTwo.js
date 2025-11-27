'use strict';

var React = require('react');

function StorageCardTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="4" y="2" width="16" height="20" rx="1" ry="1" stroke-miterlimit="2"/>   <path d="M7,2v5h10V2"/>   <g>     <path d="M17,11H7c-.6,0-1,.4-1,1v4c0-.6.4-1,1-1h10c.6,0,1,.4,1,1v-4c0-.6-.4-1-1-1Z"/>     <path d="M17,17H7c-.6,0-1-.4-1-1v6c0,.6.4,1,1,1h10c.6,0,1-.4,1-1v-6c0,.6-.4,1-1,1Z"/>   </g>   <path d="M17,14.5v3"/>   <path d="M7,14.5v3"/>' : '<rect x="8" y="4" width="32" height="40" rx="2"/><path d="M14 4V14H34V4"/><rect x="14" y="24" width="20" height="20"/><path d="M14 32H34"/><path d="M34 29L34 35"/><path d="M14 29L14 35"/>';

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

module.exports = StorageCardTwo;
