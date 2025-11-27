'use strict';

var React = require('react');

function BroadcastRadio(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,5H2c-.6,0-1,.4-1,1v14c0,.6.4,1,1,1h20c.6,0,1-.4,1-1V6c0-.6-.4-1-1-1ZM9,16h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1ZM9,12h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1ZM15.5,16.5c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5,3.5,1.6,3.5,3.5-1.6,3.5-3.5,3.5Z"/>   <path d="M4,20v2"/>   <path d="M20,20v2"/>   <path d="M4,6l14-4"/>' : '<rect x="4" y="12" width="40" height="28"/><path d="M31 31C33.7614 31 36 28.7614 36 26C36 23.2386 33.7614 21 31 21C28.2386 21 26 23.2386 26 26C26 28.7614 28.2386 31 31 31Z"/><path d="M12 22H18"/><path d="M12 30H18"/><path d="M8 40V44"/><path d="M40 40V44"/><path d="M8 12L36 4"/>';

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

module.exports = BroadcastRadio;
