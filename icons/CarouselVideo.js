'use strict';

var React = require('react');

function CarouselVideo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="2" y="5.5" width="3.5" height="13"/>   <rect x="18.5" y="5.5" width="3.5" height="13"/>   <path d="M18.5,2.5H5.5c-.6,0-1,.4-1,1v17c0,.6.4,1,1,1h13c.6,0,1-.4,1-1V3.5c0-.6-.4-1-1-1ZM14.6,12.8l-3,2c-.2.1-.4.2-.6.2s-.3,0-.5-.1c-.3-.2-.5-.5-.5-.9v-4c0-.4.2-.7.5-.9.3-.2.7-.2,1,0l3,2c.3.2.4.5.4.8s-.2.6-.4.8Z"/>' : '<rect x="11" y="7" width="26" height="34"/><rect x="4" y="11" width="7" height="26"/><rect x="37" y="11" width="7" height="26"/><path d="M22 20L28 24L22 28V20Z"/>';

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

module.exports = CarouselVideo;
