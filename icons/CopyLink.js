'use strict';

var React = require('react');

function CopyLink(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6,5v-1.5c0-.8.7-1.5,1.5-1.5h13c.8,0,1.5.7,1.5,1.5v13c0,.8-.7,1.5-1.5,1.5h-1.5" stroke-miterlimit="2"/>   <path d="M17.5,4H3.5c-1.4,0-2.5,1.1-2.5,2.5v14c0,1.4,1.1,2.5,2.5,2.5h14c1.4,0,2.5-1.1,2.5-2.5V6.5c0-1.4-1.1-2.5-2.5-2.5ZM11.9,16.3s0,0,0,0c0,0,0,0,0,0l-2.6,2.3c-.5.5-1.2.8-2,.8s-1.5-.3-2.1-.9c-.5-.5-.8-1.3-.8-2.1,0-.8.3-1.5.8-2.1,0,0,.5-.5.8-.8.4-.4,1-.4,1.4,0s.4,1,0,1.4-.8.8-.8.8c-.2.2-.2.4-.2.7s0,.5.3.7c.4.4.9.4,1.2,0l2.6-2.3c.2-.2.2-.4.2-.6,0-.2-.1-.5-.3-.6-.4-.4-.4-1,0-1.4.4-.4,1-.4,1.4,0,.5.5.9,1.3.9,2,0,.8-.3,1.5-.8,2ZM15.3,12.2l-.9,1c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l1-1c.2-.2.3-.4.3-.6,0-.2-.1-.5-.3-.6-.4-.4-.9-.4-1.3,0l-2.5,2.6s0,0,0,0c-.2.2-.3.4-.2.7,0,.2.1.4.3.6.4.4.4,1,0,1.4-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.5-.5-.8-1.2-.9-1.9,0-.7.2-1.4.6-1.9,0,0,0-.1.1-.2l2.6-2.8c1.1-1.1,3-1.1,4.1,0,.5.5.9,1.3.9,2,0,.8-.3,1.5-.8,2Z"/>' : '<path d="M12 9.92704V7C12 5.34315 13.3431 4 15 4H41C42.6569 4 44 5.34315 44 7V33C44 34.6569 42.6569 36 41 36H38.0174"/><rect x="4" y="10" width="34" height="34" rx="3"/><path d="M18.4394 23.1101L23.7319 17.6006C25.1835 16.1489 27.5691 16.1809 29.0602 17.672C30.5513 19.1631 30.5833 21.5487 29.1316 23.0003L27.2215 25.0231"/><path d="M13.4661 28.7472C12.9558 29.2575 11.9006 30.2765 11.9006 30.2765C10.4489 31.7281 10.4095 34.3155 11.9006 35.8066C13.3917 37.2977 15.7772 37.3296 17.2289 35.878L22.3931 31.1896"/><path d="M18.6626 28.3284C17.97 27.6358 17.5922 26.7502 17.5317 25.8548C17.4619 24.8226 17.8138 23.7774 18.5912 23.0001"/><path d="M22.3213 25.8613C23.8124 27.3524 23.8444 29.738 22.3927 31.1896"/>';

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

module.exports = CopyLink;
