'use strict';

var React = require('react');

function Luggage(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7.5,20v2"/>   <path d="M16.5,20v2"/>   <path d="M19,6H5c-1.1,0-2,.9-2,2v11c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2v-11c0-1.1-.9-2-2-2ZM11,15.5c0,.6-.4,1-1,1s-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4ZM15,15.5c0,.6-.4,1-1,1s-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4Z"/>   <path d="M9.5,2h5"/>   <path d="M12,2v5"/>' : '<rect x="8" y="14" width="32" height="26" rx="2"/><path d="M20 23L20 31"/><path d="M15 40V44"/><path d="M33 40V44"/><path d="M28 23V31"/><path d="M19 4H29"/><path d="M24 4L24 14"/>';

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

module.exports = Luggage;
