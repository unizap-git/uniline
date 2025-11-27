'use strict';

var React = require('react');

function EthernetOn(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9.5,7.5v2c0,.6.4,1,1,1s1-.4,1-1v-2c0-.6-.4-1-1-1s-1,.4-1,1Z"/>   <path d="M12.5,7.5v2c0,.6.4,1,1,1s1-.4,1-1v-2c0-.6-.4-1-1-1s-1,.4-1,1Z"/>   <path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM18,13.5c0,.6-.4,1-1,1h-1.5v2c0,.6-.4,1-1,1h-5c-.6,0-1-.4-1-1v-2h-1.5c-.6,0-1-.4-1-1v-6c0-.6.4-1,1-1h10c.6,0,1,.4,1,1v6Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><rect x="19" y="27" width="10" height="6"/><rect x="14" y="15" width="20" height="12"/><path d="M21 19V15"/><path d="M27 19V15"/>';

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

module.exports = EthernetOn;
