'use strict';

var React = require('react');

function CameraFive(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1.5C7,1.5,3,5.5,3,10.5s4,9,9,9,9-4,9-9S17,1.5,12,1.5ZM12,15c-2.5,0-4.5-2-4.5-4.5s2-4.5,4.5-4.5,4.5,2,4.5,4.5-2,4.5-4.5,4.5Z"/>   <path d="M8,21.5h8"/>   <path d="M12,18.5v3"/>' : '<circle cx="24" cy="21" r="16"/><circle cx="24" cy="21" r="7"/><path d="M16 43L32 43"/><path d="M24 37V43"/>';

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

module.exports = CameraFive;
