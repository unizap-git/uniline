'use strict';

var React = require('react');

function DeleteFive(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4,5.5h16"/>   <path d="M9,2.5h6"/>   <path d="M18,7.5H6c-.6,0-1,.4-1,1v11.5c0,1.4,1.1,2.5,2.5,2.5h9c1.4,0,2.5-1.1,2.5-2.5v-11.5c0-.6-.4-1-1-1ZM14.7,15.8c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-1.3-1.3-1.3,1.3c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l1.3-1.3-1.3-1.3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.3,1.3,1.3-1.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-1.3,1.3,1.3,1.3Z"/>' : '<path d="M8 11L40 11"/><path d="M18 5L30 5"/><path d="M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z"/><path d="M20 25L28 33"/><path d="M28 25L20 33"/>';

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

module.exports = DeleteFive;
