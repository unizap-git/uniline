'use strict';

var React = require('react');

function PictureAlbum(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,6v13.5c0,.8-.7,1.5-1.5,1.5H6"/>   <path d="M17,2H4c-1.1,0-2,.9-2,2v13c0,1.1.9,2,2,2h13c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2ZM18.8,12.6c-.2.3-.5.4-.8.4s-.4,0-.6-.2l-3.4-2.5-1.6,1.3,1.3,1.1c.4.4.4,1,0,1.4-.2.2-.5.3-.7.3s-.5,0-.7-.3l-4.8-4.4-3.8,3.4c-.4.4-1,.3-1.4,0-.4-.4-.3-1,0-1.4l3.8-3.4c.8-.7,1.9-.7,2.7,0l2.1,1.9,1.8-1.5c.7-.6,1.7-.6,2.5,0l3.4,2.5c.4.3.5,1,.2,1.4Z"/>   <path d="M3,9.5v4"/>   <path d="M18,9.5v4"/>' : '<rect x="6" y="6" width="30" height="30" rx="2"/><path d="M42 12V39C42 40.6569 40.6569 42 39 42H12"/><path d="M6 25L13.6562 18.1944C14.4204 17.5152 15.5738 17.5216 16.3303 18.2094L26 27"/><path d="M22 23L26.7849 19.0125C27.4971 18.4191 28.5237 18.3928 29.2653 18.949L36 24"/><path d="M6 19L6 27"/><path d="M36 19V27"/>';

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

module.exports = PictureAlbum;
