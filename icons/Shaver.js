'use strict';

var React = require('react');

function Shaver(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.3,11.2c.2-.2.2-.5,0-.6l-7.9-7.9c-.2-.2-.5-.2-.6,0l-.4.4c-2.3,2.3-2.3,6.1,0,8.5h0c2.3,2.3,6.1,2.3,8.5,0l.4-.4Z" stroke-miterlimit="2"/>   <path d="M15.3,12.4l-3.7-3.7c-.5-.5-1.4-.5-1.9,0l-5.8,5.8c-.8.8-1.2,1.8-1.2,2.8s.4,2.1,1.2,2.8c.8.8,1.8,1.2,2.8,1.2s2-.4,2.8-1.2l5.8-5.8c.3-.3.4-.6.4-1,0-.4-.1-.7-.4-1ZM10.6,14.8l-.7.7c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l.7-.7c.4-.4,1-.4,1.4,0s.4,1,0,1.4Z"/>   <path d="M13.8,8.8l1.4,1.4"/>' : '<path d="M20.7847 18.7299C21.0654 18.4492 21.5205 18.4492 21.8012 18.7299L29.27 26.1987C29.5507 26.4794 29.5507 26.9345 29.27 27.2152L17.7574 38.7278C15.4143 41.0709 11.6153 41.0709 9.27215 38.7278C6.92901 36.3846 6.92901 32.5856 9.27215 30.2425L20.7847 18.7299Z"/><path d="M42.5813 22.389C42.9302 22.04 42.9302 21.4742 42.5813 21.1252L26.8745 5.4184C26.5255 5.06942 25.9597 5.06942 25.6107 5.4184L24.8284 6.20073C20.1421 10.887 20.1421 18.485 24.8284 23.1713V23.1713C29.5146 27.8576 37.1126 27.8576 41.7989 23.1713L42.5813 22.389Z"/><path d="M19.8787 28.1211L18.4644 29.5353"/><path d="M27.657 17.5146L30.4854 20.3431"/>';

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

module.exports = Shaver;
