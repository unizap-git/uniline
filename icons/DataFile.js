'use strict';

var React = require('react');

function DataFile(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.8,6.6l-4.5-5.2c-.2-.2-.5-.3-.8-.3H4c-.6,0-1,.4-1,1v20c0,.6.4,1,1,1h16c.6,0,1-.4,1-1V7.2c0-.2,0-.5-.2-.7ZM17,18.5H7c-.6,0-1-.4-1-1s.2-.7.5-.8v-2.7c0-.6.4-1,1-1h2v-1.5c0-.6.4-1,1-1h2v-1.5c0-.6.4-1,1-1h3c.6,0,1,.4,1,1v7.7c.3.2.5.5.5.8,0,.6-.4,1-1,1Z"/>' : '<path d="M8 44V4H31L40 14.5V44H8Z"/><rect x="15" y="28" width="6" height="7"/><path d="M14 35H34"/><rect x="21" y="23" width="6" height="12"/><rect x="27" y="18" width="6" height="17"/>';

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

module.exports = DataFile;
