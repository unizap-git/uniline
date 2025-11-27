'use strict';

var React = require('react');

function LockOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15.5,9v-3.5c0-1.9-1.6-3.5-3.5-3.5h0c-1.9,0-3.5,1.6-3.5,3.5v3.5"/>   <path d="M12,7c-4.4,0-8,3.6-8,8s3.6,8,8,8,8-3.6,8-8-3.6-8-8-8ZM13,17c0,.6-.4,1-1,1s-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4Z"/>' : '<circle cx="24" cy="30" r="14"/><path d="M31 18V11C31 7.13401 27.866 4 24 4V4C20.134 4 17 7.13401 17 11V18"/><path d="M24 26L24 34"/>';

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

module.exports = LockOne;
