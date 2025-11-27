'use strict';

var React = require('react');

function MallBag(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,6.3l-2.8-3.8H5.8l-2.8,3.8h0"/>   <path d="M21,5.3H3c-.6,0-1,.4-1,1v14.2c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2V6.3c0-.6-.4-1-1-1ZM12,14.4c-2.6,0-4.8-2.2-4.8-4.8s.4-1,1-1,1,.4,1,1c0,1.5,1.2,2.8,2.8,2.8s2.8-1.3,2.8-2.8.4-1,1-1,1,.4,1,1c0,2.6-2.1,4.8-4.8,4.8Z"/>' : '<path d="M6 12.6001V41.0001C6 42.1047 6.89543 43.0001 8 43.0001H40C41.1046 43.0001 42 42.1047 42 41.0001V12.6001H6Z"/><path d="M42 12.6L36.3333 5H11.6667L6 12.6V12.6"/><path d="M31.5554 19.2002C31.5554 23.3976 28.1727 26.8002 23.9999 26.8002C19.8271 26.8002 16.4443 23.3976 16.4443 19.2002"/>';

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

module.exports = MallBag;
