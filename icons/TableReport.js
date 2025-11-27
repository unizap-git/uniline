'use strict';

var React = require('react');

function TableReport(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.5,10h-2V3.5c0-1.4-1.1-2.5-2.5-2.5H4c-1.4,0-2.5,1.1-2.5,2.5v17c0,1.4,1.1,2.5,2.5,2.5h16c1.4,0,2.5-1.1,2.5-2.5v-8.5c0-1.1-.9-2-2-2ZM5.5,5h4c.6,0,1,.4,1,1s-.4,1-1,1h-4c-.6,0-1-.4-1-1s.4-1,1-1ZM11.5,10.5h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1ZM20.5,20.5c0,.3-.2.5-.5.5h-1.5v-9h2v8.5Z"/>' : '<path d="M5 7C5 5.34315 6.34315 4 8 4H32C33.6569 4 35 5.34315 35 7V44H8C6.34315 44 5 42.6569 5 41V7Z"/><path d="M35 24C35 22.8954 35.8954 22 37 22H41C42.1046 22 43 22.8954 43 24V41C43 42.6569 41.6569 44 40 44H35V24Z"/><path d="M11 12H19"/><path d="M11 19H23"/>';

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

module.exports = TableReport;
