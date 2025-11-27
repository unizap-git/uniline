'use strict';

var React = require('react');

function HourglassFull(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.5,3H3.5c-.6,0-1-.4-1-1s.4-1,1-1h17c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M20.5,23H3.5c-.6,0-1-.4-1-1s.4-1,1-1h17c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M15,12c2-1.5,3.5-4.8,4.5-9.8,0-.3,0-.6-.2-.8-.2-.2-.5-.4-.8-.4H5.5c-.3,0-.6.1-.8.4-.2.2-.3.5-.2.8,1,5,2.5,8.3,4.5,9.8-2,1.5-3.5,4.8-4.5,9.8,0,.3,0,.6.2.8s.5.4.8.4h13c.3,0,.6-.1.8-.4.2-.2.3-.5.2-.8-1-5-2.5-8.3-4.5-9.8ZM10.5,6.5h3c.6,0,1,.4,1,1s-.4,1-1,1h-3c-.6,0-1-.4-1-1s.4-1,1-1ZM14.5,20h-5c-.6,0-1-.4-1-1s.4-1,1-1h5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M7 4H41"/><path d="M7 44H41"/><path d="M11 44C13.6667 30.6611 18 23.9944 24 24C30 24.0056 34.3333 30.6722 37 44H11Z"/><path d="M37 4C34.3333 17.3389 30 24.0056 24 24C18 23.9944 13.6667 17.3278 11 4H37Z"/><path d="M21 15H27"/><path d="M19 38H29"/>';

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

module.exports = HourglassFull;
