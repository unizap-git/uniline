'use strict';

var React = require('react');

function Snowman(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6,12l-4-2"/>   <path d="M4,11v-2"/>   <path d="M20,11v-2"/>   <circle cx="12" cy="5" r="3" stroke-miterlimit="2"/>   <path d="M12,7c-4.1,0-7.5,3.6-7.5,8s3.4,8,7.5,8,7.5-3.6,7.5-8-3.4-8-7.5-8ZM12,19c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM12,16.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM12,14c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>   <path d="M22,10l-4,2"/>' : '<path d="M12 24L4 20"/><path d="M8 22V18"/><path d="M40 22L40 18"/><circle cx="24" cy="10" r="6"/><ellipse cx="24" cy="30" rx="13" ry="14"/><circle cx="24" cy="26" r="2"/><circle cx="24" cy="31" r="2"/><circle cx="24" cy="36" r="2"/><path d="M44 20L36 24"/>';

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

module.exports = Snowman;
