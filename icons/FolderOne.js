'use strict';

var React = require('react');

function FolderOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8,1.5H3c-.8,0-1.5.7-1.5,1.5v18c0,.8.7,1.5,1.5,1.5h5c.8,0,1.5-.7,1.5-1.5V3c0-.8-.7-1.5-1.5-1.5ZM5.5,18.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM6.5,12.5c0,.6-.4,1-1,1s-1-.4-1-1v-7c0-.6.4-1,1-1s1,.4,1,1v7Z"/>   <path d="M22.3,18.3l-3.8-14.5c-.2-.8-1-1.3-1.8-1.1l-5,1.3c-.4,0-.7.3-.9.7s-.3.8-.2,1.1l3.7,14.5c.2.7.8,1.1,1.5,1.1s.2,0,.4,0l5-1.3c.4,0,.7-.3.9-.7.2-.3.3-.8.2-1.1ZM15.8,13.2l-1.2-5c-.1-.5.2-1.1.7-1.2.5-.1,1.1.2,1.2.7l1.2,5c.1.5-.2,1.1-.7,1.2,0,0-.2,0-.2,0-.4,0-.9-.3-1-.8ZM17.5,17c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M5 6C5 5.44772 5.44772 5 6 5L16 5C16.5523 5 17 5.44772 17 6L17 42C17 42.5523 16.5523 43 16 43H6C5.44772 43 5 42.5523 5 42L5 6Z"/><circle cx="11" cy="34.9999" r="2"/><path d="M11 10.9999V24.9999"/><path d="M23.9775 9.75562L34.0372 7.24071C34.5701 7.10747 35.1107 7.42907 35.248 7.96097L42.7482 37.0244C42.887 37.562 42.5611 38.1097 42.0225 38.2444L31.9628 40.7593C31.4299 40.8925 30.8893 40.5709 30.752 40.039L23.2518 10.9756C23.113 10.438 23.4389 9.89029 23.9775 9.75562Z"/><circle cx="35" cy="32" r="2"/><path d="M31 16L33.5 26"/>';

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

module.exports = FolderOne;
