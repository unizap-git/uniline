'use strict';

var React = require('react');

function GiftBox(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3,16c-.6,0-1-.4-1-1v-6c0-.6.4-1,1-1s1,.4,1,1v6c0,.6-.4,1-1,1Z"/>   <path d="M21,16c-.6,0-1-.4-1-1v-6c0-.6.4-1,1-1s1,.4,1,1v6c0,.6-.4,1-1,1Z"/>   <path d="M15,21h-6"/>   <path d="M15,3h-6"/>   <g>     <path d="M8.2,15.8c.2.2.6.2.8,0,.2-.2.5-.9,1-1.7-.9.4-1.6.8-1.7,1,0,0-.2.2-.2.4s0,.3.2.4Z"/>     <path d="M15.8,8.2c-.1-.1-.2-.2-.4-.2s-.3,0-.4.2c-.2.2-.5.9-1,1.7.9-.4,1.6-.8,1.7-1,.2-.2.2-.5,0-.8Z"/>     <path d="M13.7,6.7c1-1,2.6-1,3.6,0,1,1,1,2.6,0,3.6-.2.2-.5.4-1,.7h5.7v-6.5c0-1.4-1.1-2.5-2.5-2.5h-6.5v5.7c.3-.4.5-.8.7-1Z"/>     <path d="M17.3,13.7c.4.4.4,1,0,1.4-.4.4-1,.4-1.4,0-.2-.2-.9-.5-1.7-1,.4.9.8,1.6,1,1.7.4.4.4,1,0,1.4-.4.4-1,.4-1.4,0-.2-.2-.4-.5-.7-1v5.7h6.5c1.4,0,2.5-1.1,2.5-2.5v-6.5h-5.7c.4.3.8.5,1,.7Z"/>     <path d="M6.7,10.3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0c.2.2.9.5,1.7,1-.4-.9-.8-1.6-1-1.7-.4-.4-.4-1,0-1.4.4-.4,1-.4,1.4,0,.2.2.4.5.7,1V2h-6.5c-1.4,0-2.5,1.1-2.5,2.5v6.5h5.7c-.4-.3-.8-.5-1-.7Z"/>     <path d="M10.3,17.3c-.5.5-1.1.7-1.8.7s-1.3-.2-1.8-.7c-.5-.5-.7-1.1-.7-1.8s.3-1.3.7-1.8c.2-.2.5-.4,1-.7H2v6.5c0,1.4,1.1,2.5,2.5,2.5h6.5v-5.7c-.3.4-.5.8-.7,1Z"/>   </g>' : '<path d="M6 9C6 7.34315 7.34315 6 9 6H24H39C40.6569 6 42 7.34315 42 9V24V39C42 40.6569 40.6569 42 39 42H24H9C7.34315 42 6 40.6569 6 39V24V9Z"/><path d="M4 24H44"/><path d="M24 44V4"/><path d="M6 30V18"/><path d="M42 30V18"/><path d="M30 42H18"/><path d="M30 6H18"/><path d="M24.0001 23.9999C24.0001 23.9999 31.8972 20.4542 33.0988 19.2526C34.3004 18.051 34.3004 16.1028 33.0988 14.9012C31.8972 13.6996 29.9489 13.6996 28.7473 14.9012C27.5457 16.1028 24.0001 23.9999 24.0001 23.9999ZM24.0001 23.9999C24.0001 23.9999 16.1027 20.4542 14.901 19.2526M24.0001 23.9999C24.0001 23.9999 20.4541 16.1028 19.2525 14.9012M24.0001 23.9999C24.0001 23.9999 31.897 27.5458 33.0986 28.7474M24.0001 23.9999C24.0001 23.9999 27.5455 31.8972 28.7472 33.0988M24.0001 23.9999C24.0001 23.9999 16.1028 27.5458 14.9012 28.7474C13.6996 29.949 13.6996 31.8972 14.9012 33.0988C16.1028 34.3004 18.0511 34.3004 19.2527 33.0988C20.4543 31.8972 24.0001 23.9999 24.0001 23.9999Z"/>';

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

module.exports = GiftBox;
