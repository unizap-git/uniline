'use strict';

var React = require('react');

function ShovelOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.3,1.3c-.2-.2-.5-.3-.8-.3H5.5c-.3,0-.6.1-.8.3s-.3.5-.2.8l1.4,10c0,.5.5.9,1,.9h10.2c.5,0,.9-.4,1-.9l1.4-10c0-.3,0-.6-.2-.8ZM11.5,8.5c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3ZM14.5,8.5c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3Z"/>   <path d="M12,12v10" stroke-miterlimit="2"/>' : '<path d="M11 4H37L34.1667 24H13.8333L11 4Z"/><path d="M21 11L21 17"/><path d="M27 11L27 17"/><path d="M24 24V44"/>';

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

module.exports = ShovelOne;
