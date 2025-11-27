'use strict';

var React = require('react');

function BottleTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M16.5,12.5h-3.5v5.5h3.5c.6,0,1,.4,1,1v-7.5c0,.6-.4,1-1,1Z"/>     <path d="M10,4h4c.6,0,1,.4,1,1v-3c0-.6-.4-1-1-1h-4c-.6,0-1,.4-1,1v3c0-.6.4-1,1-1Z"/>     <path d="M15,6v-1c0,.6-.4,1-1,1h-4c-.6,0-1-.4-1-1v1c-1.6,1.1-2.5,2.9-2.5,4.8v10.2c0,1.1.9,2,2,2h7c1.1,0,2-.9,2-2v-2c0,.6-.4,1-1,1h-4.5c-.6,0-1-.4-1-1v-7.5c0-.6.4-1,1-1h4.5c.6,0,1,.4,1,1v-.7c0-1.9-.9-3.7-2.5-4.8Z"/>   </g>   <path d="M16.5,21c-.6,0-1-.4-1-1v-9.5c0-.6.4-1,1-1s1,.4,1,1v9.5c0,.6-.4,1-1,1Z"/>   <path d="M10,7c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2c0,.6-.4,1-1,1Z"/>   <path d="M14,7c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2c0,.6-.4,1-1,1Z"/>' : '<path d="M15 21.5597C15 18.1105 16.8097 14.9142 19.7674 13.1395C19.9117 13.053 20 12.897 20 12.7288V4H28V12.7288C28 12.897 28.0883 13.053 28.2326 13.1395C31.1903 14.9142 33 18.1105 33 21.5597V42C33 43.1046 32.1046 44 31 44H17C15.8954 44 15 43.1046 15 42V21.5597Z"/><path d="M20 10L28 10"/><path d="M33 23H24V38H33"/><path d="M33 40V21"/><path d="M20 12V8"/><path d="M28 12V8"/>';

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

module.exports = BottleTwo;
