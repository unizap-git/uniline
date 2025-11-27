'use strict';

var React = require('react');

function RadarChart(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M4.2,21.8l3.1-3.6-2.2-6.5-4.5-1.4c-.2,0-.4-.2-.5-.4l3.8,12.7s0,0,0,0c-.1-.3,0-.7.2-1Z"/>     <path d="M13,1.5v4.5l2.6,2,2.6,1.9,4.5-1.4c.3-.1.7,0,.9.2,0,0,0,0-.1-.1L12.6.7s0,0-.1,0c.3.2.5.5.5.9Z"/>     <path d="M4.4,23.3c0,0,.1,0,.2.1,0,0-.1,0-.2-.1Z"/>     <path d="M4.1,23c0,0,0,.1.2.2,0,0-.1-.1-.2-.2Z"/>     <path d="M1.3,8.5l4.5,1.4,2.6-1.9,2.6-2V1.5c0-.4.2-.7.5-.9,0,0,0,0-.1,0L.5,8.6c0,0,0,0-.1.1.3-.2.6-.3.9-.2Z"/>     <path d="M12,.5c.1,0,.2,0,.4,0-.2,0-.5,0-.7,0,.1,0,.2,0,.4,0Z"/>     <path d="M5,23.5c-.1,0-.2,0-.3,0,.1,0,.2,0,.3,0Z"/>     <path d="M23.3,10.5l-4.5,1.4-2.2,6.5,3.1,3.6c.3.3.3.7.2,1,0,0,0,0,0,0l3.8-12.7c-.1.2-.3.3-.5.4Z"/>     <path d="M15,19.5h-6.1l-3.2,3.7c-.2.2-.5.3-.8.3,0,0,0,0,0,0h14c-.3,0-.6-.1-.8-.3l-3.2-3.7Z"/>     <path d="M19.9,23c0,0,0,.1-.2.2,0,0,.1-.1.2-.2Z"/>     <path d="M19.4,23.4c0,0,.1,0,.2-.1,0,0-.1,0-.2.1Z"/>     <path d="M19,23.5c.1,0,.2,0,.3,0-.1,0-.2,0-.3,0Z"/>   </g>   <path d="M1.1,13L.1,9.7c-.1-.4,0-.8.4-1.1l2.7-2,1.2,1.6-2.2,1.6.8,2.6-1.9.6Z"/>   <path d="M8.5,23.5h-3.5c-.4,0-.8-.3-1-.7l-1-3.3,1.9-.6.8,2.6h2.8v2Z"/>   <path d="M19,23.5h-3.5v-2h2.8l.8-2.6,1.9.6-1,3.3c-.1.4-.5.7-1,.7Z"/>   <path d="M22.9,13l-1.9-.6.8-2.6-2.2-1.6,1.2-1.6,2.7,2c.3.2.5.7.4,1.1l-1,3.3Z"/>   <path d="M14.1,4.3l-2.1-1.6-2.1,1.6-1.2-1.6,2.7-2c.4-.3.8-.3,1.2,0l2.7,2-1.2,1.6Z"/>' : '<path d="M23.9998 3L45.8741 18.8926L38 45H10L2.12549 18.8926L23.9998 3Z"/><path d="M38 45L31 37"/><path d="M10 45L17 37"/><path d="M2 19L12 22"/><path d="M46 19L36 22"/><path d="M24 3V13"/><path d="M24 13L30.0073 17.5706L36 22L31 37H17L12 22L17.9927 17.5706L24 13Z"/><path d="M7.59406 14.9194L2.12549 18.8926L4.09412 25.4194"/><path d="M8.03125 38.4731L9.99988 45H16.9999"/><path d="M31 45H38L39.9685 38.4731"/><path d="M40.4053 14.9194L45.8738 18.8926L43.9053 25.4194"/><path d="M29.4684 6.97315L23.9998 3L18.5312 6.97315"/>';

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

module.exports = RadarChart;
