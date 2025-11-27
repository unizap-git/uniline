'use strict';

var React = require('react');

function Blackboard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,3.5h20"/>   <path d="M7.5,20.5l4.5-5,4.5,5"/>   <path d="M20,2.5H4c-.6,0-1,.4-1,1v12c0,.6.4,1,1,1h16c.6,0,1-.4,1-1V3.5c0-.6-.4-1-1-1ZM11,13.5h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1ZM14,10.5h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1ZM16,7.5h-8c-.6,0-1-.4-1-1s.4-1,1-1h8c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="8" y="7" width="32" height="24"/><path d="M4 7H44"/><path d="M15 41L24 31L33 41"/><path d="M16 13H32"/><path d="M16 19H28"/><path d="M16 25H22"/>';

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

module.exports = Blackboard;
