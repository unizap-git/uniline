'use strict';

var React = require('react');

function HospitalTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16,5.5h4l2,5H2l2-5h4"/>   <g>     <rect x="13" y="15.5" width="2" height="5"/>     <rect x="9" y="15.5" width="2" height="5"/>     <path d="M20,9.5H4c-.6,0-1,.4-1,1v11c0,.6.4,1,1,1h4c-.6,0-1-.4-1-1v-7c0-.6.4-1,1-1h8c.6,0,1,.4,1,1v7c0,.6-.4,1-1,1h4c.6,0,1-.4,1-1v-11c0-.6-.4-1-1-1Z"/>   </g>   <path d="M18,21.5H6"/>   <path d="M16,1.5h-8c-.6,0-1,.4-1,1v8c0,.6.4,1,1,1h8c.6,0,1-.4,1-1V2.5c0-.6-.4-1-1-1ZM13.5,7.5h-.5v.5c0,.6-.4,1-1,1s-1-.4-1-1v-.5h-.5c-.6,0-1-.4-1-1s.4-1,1-1h.5v-.5c0-.6.4-1,1-1s1,.4,1,1v.5h.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M32 11H40L44 21H4L8 11H16"/><path d="M8 21H40V43H8V21Z"/><rect x="16" y="5" width="16" height="16"/><rect x="16" y="29" width="8" height="14"/><rect x="24" y="29" width="8" height="14"/><path d="M21 13H27"/><path d="M36 43H12"/><path d="M24 16L24 10"/>';

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

module.exports = HospitalTwo;
