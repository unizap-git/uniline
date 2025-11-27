'use strict';

var React = require('react');

function ViewGridCard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM11.5,17.5c0,.6-.4,1-1,1h-4c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1h4c.6,0,1,.4,1,1v4ZM11.5,10.5c0,.6-.4,1-1,1h-4c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1h4c.6,0,1,.4,1,1v4ZM18.5,17.5c0,.6-.4,1-1,1h-4c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1h4c.6,0,1,.4,1,1v4ZM18.5,10.5c0,.6-.4,1-1,1h-4c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1h4c.6,0,1,.4,1,1v4Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><rect x="13" y="13" width="8" height="8"/><rect x="27" y="13" width="8" height="8"/><rect x="13" y="27" width="8" height="8"/><rect x="27" y="27" width="8" height="8"/>';

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

module.exports = ViewGridCard;
