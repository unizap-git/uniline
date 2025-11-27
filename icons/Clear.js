'use strict';

var React = require('react');

function Clear(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10,3h4v4h7.5v4H2.5v-4h7.5V3Z"/>   <path d="M20,10H4c-.6,0-1,.4-1,1v9c0,.6.4,1,1,1h16c.6,0,1-.4,1-1v-9c0-.6-.4-1-1-1ZM9,19.9c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3ZM13,19.9c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3ZM17,19.9c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3Z"/>   <path d="M18,21H6c-.6,0-1-.4-1-1s.4-1,1-1h12c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.91406H28V13.9141H43V21.9141H5V13.9141H20V5.91406Z"/><path d="M8 40H40V22H8V40Z"/><path d="M16 39.8976V33.9141"/><path d="M24 39.8977V33.8977"/><path d="M32 39.8976V33.9141"/><path d="M12 40H36"/>';

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

module.exports = Clear;
