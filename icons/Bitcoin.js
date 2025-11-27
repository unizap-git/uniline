'use strict';

var React = require('react');

function Bitcoin(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14.5,13h-3.5v2h3.5c.6,0,1-.4,1-1s-.4-1-1-1Z"/>   <path d="M14.5,10c0-.6-.4-1-1-1h-2.5v2h2.5c.6,0,1-.4,1-1Z"/>   <path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM14.5,17h-1v1c0,.6-.4,1-1,1s-1-.4-1-1v-1h-.5v1c0,.6-.4,1-1,1s-1-.4-1-1v-1h-1c-.6,0-1-.4-1-1s.4-1,1-1h1v-6h-1c-.6,0-1-.4-1-1s.4-1,1-1h1v-1c0-.6.4-1,1-1s1,.4,1,1v1h.5v-1c0-.6.4-1,1-1s1,.4,1,1v1c1.7,0,3,1.3,3,3s-.2,1-.4,1.5c.8.5,1.4,1.5,1.4,2.5,0,1.7-1.3,3-3,3Z"/>' : '<circle cx="24" cy="24" r="20"/><path d="M20 16H25H27C29.2091 16 31 17.7909 31 20C31 22.2091 29.2091 24 27 24H20V16Z"/><path d="M20 16V24H27C29.2091 24 31 22.2091 31 20V20C31 17.7909 29.2091 16 27 16H25M20 16H16M20 16V12M20 16H25M25 16V12"/><path d="M20 24H29C31.2091 24 33 25.7909 33 28C33 30.2091 31.2091 32 29 32H25H20V24Z"/><path d="M20 32V24H29C31.2091 24 33 25.7909 33 28V28C33 30.2091 31.2091 32 29 32H25M20 32V36M20 32H16H25M20 32H25M25 32V36"/>';

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

module.exports = Bitcoin;
