'use strict';

var React = require('react');

function MassageChair(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="9" y="13" width="6" height="1"/>   <path d="M14,7.8c0-.2-.4-.8-2-.8s-2,.7-2,.8v3.2h4v-3.2Z"/>   <path d="M20,1.5H4c-1.4,0-2.5,1.1-2.5,2.5v16c0,1.4,1.1,2.5,2.5,2.5h16c1.4,0,2.5-1.1,2.5-2.5V4c0-1.4-1.1-2.5-2.5-2.5ZM19,12c0,.6-.4,1-1,1h-1v2c0,.6-.4,1-1,1h-3v1h2c.6,0,1,.4,1,1s-.4,1-1,1h-6c-.6,0-1-.4-1-1s.4-1,1-1h2v-1h-3c-.6,0-1-.4-1-1v-2h-1c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v1h1v-3.2c0-1,.8-2.8,4-2.8s4,1.8,4,2.8v3.2h1v-1c0-.6.4-1,1-1s1,.4,1,1v2Z"/>' : '<rect x="5" y="5" width="38" height="38" rx="3"/><path d="M18 24V15.6522C18 14.4348 19.2 12 24 12C28.8 12 30 14.4348 30 15.6522V24"/><path d="M16 24V30H32V24"/><path d="M12 20V24H36V20"/><path d="M18 36L30 36"/><path d="M24 30V36"/>';

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

module.exports = MassageChair;
