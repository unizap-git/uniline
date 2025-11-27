'use strict';

var React = require('react');

function Analysis(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,20.5l6.1-6.2,3.3,3.2,4-4,2.2,2.2"/>   <path d="M22,8.1v13" stroke-miterlimit="2"/>   <path d="M2,8.1v7" stroke-miterlimit="2"/>   <path d="M6.5,21.5h15.5" stroke-miterlimit="2"/>   <path d="M22,1.5H2c-.6,0-1,.4-1,1v6c0,.6.4,1,1,1h20c.6,0,1-.4,1-1V2.5c0-.6-.4-1-1-1ZM5.5,6.5h-.5c-.6,0-1-.4-1-1s.4-1,1-1h.5c.6,0,1,.4,1,1s-.4,1-1,1ZM19,6.5h-10.5c-.6,0-1-.4-1-1s.4-1,1-1h10.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M44 5H3.99998V17H44V5Z"/><path d="M3.99998 41.0301L16.1756 28.7293L22.7549 35.0301L30.7982 27L35.2786 31.368"/><path d="M44 16.1719V42.1719"/><path d="M3.99998 16.1719V30.1719"/><path d="M13.0155 43H44"/><path d="M17 11H38"/><path d="M9.99998 10.9966H11"/>';

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

module.exports = Analysis;
