'use strict';

var React = require('react');

function XiaoduHome(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.6,9.2L12.6,2.2c-.3-.2-.8-.2-1.1,0L1.4,9.2c-.3.2-.4.5-.4.8v11c0,.6.4,1,1,1h20c.6,0,1-.4,1-1v-11c0-.3-.2-.6-.4-.8ZM15.5,16.9c-.4.4-1,.4-1.4,0-.3-.3-.6-.5-1-.6-.7-.3-1.6-.3-2.3,0-.4.2-.7.4-1,.7-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4.5-.5,1-.8,1.6-1.1,1.2-.5,2.6-.5,3.8,0,.6.3,1.2.6,1.6,1.1.4.4.4,1,0,1.4ZM18.4,14c-.4.4-1,.4-1.4,0-.7-.7-1.4-1.2-2.3-1.5-1.7-.7-3.6-.7-5.4,0-.9.4-1.6.9-2.3,1.5s-.5.3-.7.3-.5,0-.7-.3c-.4-.4-.4-1,0-1.4.8-.8,1.8-1.5,2.9-2,2.2-.9,4.7-.9,6.9,0,1.1.5,2.1,1.1,2.9,2,.4.4.4,1,0,1.4Z"/>' : '<path d="M4 20L24 6L44 20V42H4V20Z"/><path d="M12.6865 26.6863C14.1723 25.2006 15.9361 24.022 17.8773 23.2179C19.8185 22.4139 21.8991 22 24.0002 22C26.1014 22 28.182 22.4139 30.1232 23.2179C32.0644 24.022 33.8282 25.2006 35.314 26.6863"/><path d="M18.3428 32.3431C19.0856 31.6003 19.9676 31.011 20.9382 30.609C21.9088 30.2069 22.9491 30 23.9996 30C25.0502 30 26.0905 30.2069 27.0611 30.609C28.0317 31.011 28.9136 31.6003 29.6565 32.3431"/>';

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

module.exports = XiaoduHome;
