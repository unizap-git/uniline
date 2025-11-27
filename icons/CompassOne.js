'use strict';

var React = require('react');

function CompassOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9.5,2h5"/>   <g>     <path d="M20.5,14.5h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1,0-5.2-4.3-9.5-9.5-9.5.6,0,1,.4,1,1v2c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1-5.2,0-9.5,4.3-9.5,9.5,0-.6.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1h-2c-.6,0-1-.4-1-1,0,5.2,4.3,9.5,9.5,9.5-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2c0,.6-.4,1-1,1,5.2,0,9.5-4.3,9.5-9.5,0,.6-.4,1-1,1ZM14.9,14l-2,3.5c-.2.3-.5.5-.9.5s-.7-.2-.9-.5l-2-3.5c-.2-.3-.2-.7,0-1l2-3.5c.4-.6,1.4-.6,1.7,0l2,3.5c.2.3.2.7,0,1Z"/>     <polygon points="11.2 13.5 12 15 12.8 13.5 12 12 11.2 13.5"/>   </g>   <path d="M12,23c-1.3,0-2.5-.2-3.6-.7-.5-.2-.8-.8-.5-1.3.2-.5.8-.8,1.3-.5,1.8.8,3.9.8,5.7,0,.5-.2,1.1,0,1.3.5.2.5,0,1.1-.5,1.3-1.2.5-2.4.7-3.6.7Z"/>   <path d="M4.1,17.8c-.4,0-.8-.2-.9-.6-.5-1.2-.7-2.4-.7-3.6s.2-2.5.7-3.6c.2-.5.8-.8,1.3-.5.5.2.8.8.5,1.3-.4.9-.6,1.9-.6,2.9s.2,2,.6,2.9c.2.5,0,1.1-.5,1.3-.1,0-.3,0-.4,0Z"/>   <path d="M19.9,17.8c-.1,0-.3,0-.4,0-.5-.2-.8-.8-.5-1.3.4-.9.6-1.9.6-2.9s-.2-2-.6-2.9c-.2-.5,0-1.1.5-1.3.5-.2,1.1,0,1.3.5.5,1.2.7,2.4.7,3.6s-.2,2.5-.7,3.6c-.2.4-.5.6-.9.6Z"/>   <path d="M8.5,5.8c1.1-.5,2.2-.8,3.5-.8s2.4.3,3.5.8"/>' : '<path d="M24 44C33.3888 44 41 36.3888 41 27C41 17.6112 33.3888 10 24 10C14.6112 10 7 17.6112 7 27C7 36.3888 14.6112 44 24 44Z"/><path d="M19 4H29"/><path d="M20 27L24 20L28 27L24 34L20 27Z"/><path d="M7 27H11"/><path d="M37 27H41"/><path d="M24 10L24 14"/><path d="M24 40L24 44"/><path d="M17.5 42.7131C19.5024 43.5424 21.6978 44 24 44C26.3022 44 28.4976 43.5424 30.5 42.7131"/><path d="M8.28691 20.5C7.45764 22.5024 7 24.6978 7 27C7 29.3022 7.45764 31.4976 8.28691 33.5"/><path d="M39.7129 20.5C40.5422 22.5024 40.9998 24.6978 40.9998 27C40.9998 29.3022 40.5422 31.4976 39.7129 33.5"/><path d="M17.0078 11.5C19.1405 10.5364 21.5077 10 24.0001 10C26.4925 10 28.8597 10.5364 30.9924 11.5"/>';

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

module.exports = CompassOne;
