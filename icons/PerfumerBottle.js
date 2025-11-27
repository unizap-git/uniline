'use strict';

var React = require('react');

function PerfumerBottle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <rect x="7" y="3.5" width="10" height="5"/>     <path d="M17,9.5H7c-.6,0-1-.4-1-1V3.5c0-.6.4-1,1-1h10c.6,0,1,.4,1,1v5c0,.6-.4,1-1,1ZM8,7.5h8v-3h-8v3Z"/>   </g>   <g>     <path d="M20.5,7.5H3.5c-1.1,0-2,.9-2,2v5c0-.6.4-1,1-1h5.5v-1c0-.6.4-1,1-1h6c.6,0,1,.4,1,1v1h5.5c.6,0,1,.4,1,1v-5c0-1.1-.9-2-2-2Z"/>     <path d="M21.5,15.5h-5.5v1c0,.6-.4,1-1,1h-6c-.6,0-1-.4-1-1v-1H2.5c-.6,0-1-.4-1-1v5c0,1.1.9,2,2,2h17c1.1,0,2-.9,2-2v-5c0,.6-.4,1-1,1Z"/>   </g>   <path d="M2.5,18c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5c0,.6-.4,1-1,1Z"/>   <path d="M21.5,18c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5c0,.6-.4,1-1,1Z"/>' : '<rect x="5" y="17" width="38" height="24" rx="2"/><rect x="14" y="7" width="20" height="10"/><rect x="18" y="25" width="12" height="8"/><path d="M30 29H43"/><path d="M5 29H18"/><path d="M5 24V34"/><path d="M43 24V34"/>';

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

module.exports = PerfumerBottle;
