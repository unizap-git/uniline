'use strict';

var React = require('react');

function Thunderbolt(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,11H3c-1.1,0-2,.9-2,2v2.7c0,.8.5,1.6,1.3,2,.6.3,1,.9,1.1,1.5.2,1,1.1,1.8,2.1,1.8h13c1,0,1.8-.7,2.1-1.8.2-.7.5-1.2,1.1-1.5.8-.4,1.3-1.2,1.3-2v-2.7c0-1.1-.9-2-2-2ZM17,16.5H7c-.6,0-1-.4-1-1s.4-1,1-1h10c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M12.5,2l-3,3.5h5l-3,3.5"/>' : '<path d="M4 26C4 24.8954 4.89543 24 6 24H42C43.1046 24 44 24.8954 44 26V31.3604C44 32.3138 43.3167 33.1412 42.4802 33.5984C41.2932 34.2471 39.7561 35.5405 39.2065 38.0136C38.9669 39.0919 38.1046 40 37 40H11C9.89543 40 9.03308 39.0919 8.79348 38.0136C8.24394 35.5405 6.70677 34.2471 5.51983 33.5984C4.68326 33.1412 4 32.3138 4 31.3604V26Z"/><path d="M14 31H34"/><path d="M25 4L19 11H29L23 18"/>';

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

module.exports = Thunderbolt;
