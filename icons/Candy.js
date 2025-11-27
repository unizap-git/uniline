'use strict';

var React = require('react');

function Candy(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,6c-3.3,0-6,2.7-6,6s2.7,6,6,6,6-2.7,6-6-2.7-6-6-6ZM12,15c-1.7,0-3-1.3-3-3s.4-1,1-1,1,.4,1,1,.4,1,1,1,1,.4,1,1-.4,1-1,1Z"/>   <path d="M8.3,8.4l-6.4-.9L7.4,2l.9,6.4Z"/>   <path d="M15.7,15.7l6.4.9-5.5,5.5-.9-6.4Z"/>' : '<circle cx="24" cy="24" r="10"/><path d="M24 28C21.7909 28 20 26.2091 20 24"/><path d="M16.6875 16.8125L3.90824 14.9668L14.8418 4.03324L16.6875 16.8125Z"/><path d="M31.3125 31.3125L44.0918 33.1582L33.1582 44.0918L31.3125 31.3125Z"/>';

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

module.exports = Candy;
