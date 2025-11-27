'use strict';

var React = require('react');

function Receive(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="5.5" y="3.5" width="4" height="5"/>   <path d="M9.5,8.5l3.2-4.5,6.2,4.5"/>   <path d="M22.3,8.3c-.4-.5-1-.8-1.6-.8H3.3c-.6,0-1.2.3-1.6.8s-.5,1.1-.4,1.7l2.5,10.5c.2.9,1,1.5,1.9,1.5h12.4c.9,0,1.7-.6,1.9-1.5l2.5-10.5c.1-.6,0-1.2-.4-1.7ZM11.5,13.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M4.59202 19.4667C4.29018 18.2091 5.24343 17 6.53679 17H41.4632C42.7566 17 43.7098 18.2091 43.408 19.4667L38.368 40.4667C38.1522 41.366 37.348 42 36.4232 42H11.5768C10.652 42 9.84784 41.366 9.63202 40.4667L4.59202 19.4667Z"/><rect x="11" y="7" width="8" height="10"/><path d="M19 17L25.5 8L38 17"/><path d="M15 25H23"/>';

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

module.exports = Receive;
