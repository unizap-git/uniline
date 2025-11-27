'use strict';

var React = require('react');

function Gamepad(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,3.5v3M12,3.5v3"/>   <path d="M15,5.5h-6C4.6,5.5,1,9.1,1,13.5s3.6,8,8,8h6c4.4,0,8-3.6,8-8s-3.6-8-8-8ZM11,14.5h-1.5v1.5c0,.6-.4,1-1,1s-1-.4-1-1v-1.5h-1.5c-.6,0-1-.4-1-1s.4-1,1-1h1.5v-1.5c0-.6.4-1,1-1s1,.4,1,1v1.5h1.5c.6,0,1,.4,1,1s-.4,1-1,1ZM15.5,12c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM17.5,14.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<rect x="4" y="13" width="40" height="28" rx="14"/><circle cx="31" cy="22" r="2"/><circle cx="35" cy="27" r="2"/><path d="M12 27H22M12 27H22"/><path d="M24 7V13M24 7V13"/><path d="M17 22V32"/>';

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

module.exports = Gamepad;
