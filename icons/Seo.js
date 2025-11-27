'use strict';

var React = require('react');

function Seo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.2,3H2.8c-1,0-1.8.8-1.8,1.8v14.4c0,1,.8,1.8,1.8,1.8h18.4c1,0,1.8-.8,1.8-1.8V4.8c0-1-.8-1.8-1.8-1.8ZM7.1,11.2c.6.4,1.4,1,1.5,2.2,0,1.2-.6,2.3-1.7,2.7-.2,0-.5.1-.7.1-.8,0-1.5-.4-2-1.2-.3-.5-.2-1.1.3-1.4.5-.3,1.1-.2,1.4.3.2.2.3.3.5.3.2,0,.4-.3.3-.6,0-.3-.2-.4-.7-.8-.6-.4-1.4-1-1.5-2.2-.1-1.2.6-2.3,1.7-2.7,1-.4,2.1,0,2.8,1,.3.5.2,1.1-.3,1.4s-1.1.2-1.4-.3c-.2-.2-.3-.3-.5-.3-.2,0-.4.3-.3.6,0,.3.2.4.7.8ZM13,11.5c.6,0,1,.4,1,1s-.4,1-1,1h-1v1h1c.6,0,1,.4,1,1s-.4,1-1,1h-2c-.6,0-1-.4-1-1v-6.5c0-.6.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1h-1v1.5h1ZM20,14c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5v-3.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5v3.5Z"/>   <path d="M17.5,10c-.3,0-.5.2-.5.5v3.5c0,.3.2.5.5.5s.5-.2.5-.5v-3.5c0-.3-.2-.5-.5-.5Z"/>' : '<rect x="4" y="8" width="40" height="32" rx="1.63265"/><path d="M16 18.9479C14 15.9999 10.4978 17.9375 10.7489 20.9687C11 23.9999 15 23.9999 15.2498 27.0311C15.4997 30.0623 12 31.9999 10 29.0519"/><path d="M26 18H22V31H26"/><path d="M22 25H26"/><rect x="32" y="18" width="6" height="13" rx="3"/>';

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

module.exports = Seo;
