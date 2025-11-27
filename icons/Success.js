'use strict';

var React = require('react');

function Success(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.6,12l.9-2.8c.1-.4,0-.9-.4-1.1l-2.4-1.7-.9-2.8c-.1-.4-.5-.7-1-.7h-2.9s-2.4-1.7-2.4-1.7c-.4-.3-.8-.3-1.2,0l-2.4,1.7h-2.9s0,0,0,0c-.4,0-.8.3-1,.7l-.9,2.8-2.4,1.7c-.4.3-.5.7-.4,1.1l.9,2.8-.9,2.8c-.1.4,0,.9.4,1.1l2.4,1.7.9,2.8c.1.4.5.7,1,.7h2.9s2.4,1.7,2.4,1.7c.2.1.4.2.6.2s.4,0,.6-.2l2.4-1.7h2.9s0,0,0,0c.4,0,.8-.3,1-.7l.9-2.8,2.4-1.7c.4-.3.5-.7.4-1.1l-.9-2.8ZM16.7,10.2l-5,5c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-2.5-2.5c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.8,1.8,4.3-4.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4Z"/>' : '<path d="M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z"/><path d="M17 24L22 29L32 19"/>';

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

module.exports = Success;
