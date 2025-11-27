'use strict';

var React = require('react');

function Razor(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19,3.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <g>     <path d="M16,12.5v-2h-8v2c0,.6-.4,1-1,1h10c-.6,0-1-.4-1-1Z"/>     <path d="M6,12.5v-2h-3.5c-.6,0-1-.4-1-1v2c0,1.1.9,2,2,2h3.5c-.6,0-1-.4-1-1Z"/>     <path d="M2.5,4.5h3.5v-2c0-.6.4-1,1-1h-3.5c-1.1,0-2,.9-2,2v2c0-.6.4-1,1-1Z"/>     <path d="M8,2.5v2h8v-2c0-.6.4-1,1-1H7c.6,0,1,.4,1,1Z"/>     <path d="M2.5,8.5h3.5v-2h-3.5c-.6,0-1-.4-1-1v4c0-.6.4-1,1-1Z"/>     <rect x="8" y="6.5" width="8" height="2"/>     <path d="M20.5,1.5h-3.5c.6,0,1,.4,1,1v2h3.5c.6,0,1,.4,1,1v-2c0-1.1-.9-2-2-2Z"/>     <path d="M21.5,10.5h-3.5v2c0,.6-.4,1-1,1h3.5c1.1,0,2-.9,2-2v-2c0,.6-.4,1-1,1Z"/>     <path d="M21.5,6.5h-3.5v2h3.5c.6,0,1,.4,1,1v-4c0,.6-.4,1-1,1Z"/>   </g>   <path d="M2.5,11.5c-.6,0-1-.4-1-1v-6c0-.6.4-1,1-1s1,.4,1,1v6c0,.6-.4,1-1,1Z"/>   <path d="M21.5,11.5c-.6,0-1-.4-1-1v-6c0-.6.4-1,1-1s1,.4,1,1v6c0,.6-.4,1-1,1Z"/>   <path d="M9,3.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M19,13.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M9,13.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M12,17.5c-2.8,0-5-2.2-5-5s.4-1,1-1,1,.4,1,1c0,1.7,1.3,3,3,3s3-1.3,3-3,.4-1,1-1,1,.4,1,1c0,2.8-2.2,5-5,5Z"/>   <path d="M13.5,23c-.6,0-1-.4-1-1v-3.5c0,0,0-.1,0-.2l.5-2.5c.1-.5.6-.9,1.2-.8.5.1.9.6.8,1.2l-.5,2.4v3.4c0,.6-.4,1-1,1Z"/>   <path d="M10.5,23c-.6,0-1-.4-1-1v-3.4l-.5-2.4c-.1-.5.2-1.1.8-1.2.5-.1,1.1.2,1.2.8l.5,2.5c0,0,0,.1,0,.2v3.5c0,.6-.4,1-1,1Z"/>' : '<rect x="5" y="5" width="38" height="20" rx="2"/><path d="M14 5V25"/><path d="M34 5V25"/><path d="M30 5H38"/><path d="M5 11L43 11"/><path d="M5 19L43 19"/><path d="M5 21V9"/><path d="M43 21V9"/><path d="M10 5H18"/><path d="M30 25H38"/><path d="M10 25H18"/><path d="M32 25C32 29.4183 28.4183 33 24 33C19.5817 33 16 29.4183 16 25"/><path d="M28 32L27 37V44"/><path d="M20 32L21 37V44"/>';

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

module.exports = Razor;
