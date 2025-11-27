'use strict';

var React = require('react');

function MonitorCamera(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C7.3,1,3.5,4.8,3.5,9.5s3.8,8.5,8.5,8.5,8.5-3.8,8.5-8.5S16.7,1,12,1ZM12,13.5c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4Z"/>   <path d="M9.7,17l-1.7,5h8l-1.7-5h-4.6Z"/>   <path d="M6,22h12"/>' : '<path d="M24 34C32.2843 34 39 27.2843 39 19C39 10.7157 32.2843 4 24 4C15.7157 4 9 10.7157 9 19C9 27.2843 15.7157 34 24 34Z"/><path d="M24 25C27.3137 25 30 22.3137 30 19C30 15.6863 27.3137 13 24 13C20.6863 13 18 15.6863 18 19C18 22.3137 20.6863 25 24 25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.3686 34L16 44H32L28.6037 34H19.3686Z"/><path d="M12 44H36"/>';

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

module.exports = MonitorCamera;
