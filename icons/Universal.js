'use strict';

var React = require('react');

function Universal(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,4c-4.4,0-8,3.6-8,8s3.6,8,8,8,8-3.6,8-8-3.6-8-8-8ZM11.8,13.7c-1.1.2-1.9-.3-2.3-.6,0,.5,0,1.2-.6,1.8-.5.6-1.3.9-2.1.9s-1.2-.1-1.7-.4c-.5-.2-.8-.8-.5-1.3.2-.5.8-.8,1.3-.5.6.2,1.3.3,1.5,0,0,0,.1-.4.1-.6,0-.5,0-1.4.9-1.9.9-.5,1.7,0,2.1.3.4.3.6.4,1,.3.8-.1,1.5-1.6,1.5-2.3s0-.1-.2-.3c-.3-.3-.7-.7-.7-1.6,0-1.4.8-2.5,1.3-2.9.4-.3,1.1-.2,1.4.2.3.4.2,1.1-.2,1.4,0,0-.6.5-.5,1.2,0,.1,0,.1.2.4.3.3.7.8.7,1.7,0,1.3-1.1,3.9-3.2,4.2ZM17.4,16.3c-.7-.6-1.6-.9-2-1.1,0,0,0,0,0,0,0,.4-.2,1-.6,1.5s-.5.4-.7.5c0,0,.2.2.4.4h.2c.4.5.5,1.1.1,1.5-.2.2-.5.4-.8.4s-.5,0-.6-.2h-.1c-.5-.5-1.2-1.1-1.2-2.3,0-1.1.7-1.4,1.1-1.6.1,0,.2,0,.2-.1,0,0,0-.3,0-.4,0-.4.2-1.2.9-1.5,1.2-.6,3.3.5,4.3,1.4.4.3.5,1,.1,1.4-.3.4-1,.5-1.4.1Z"/>   <circle cx="12" cy="2" r="1"/>   <circle cx="12" cy="22" r="1"/>   <circle cx="22" cy="12" r="1"/>   <circle cx="19" cy="5" r="1"/>   <circle cx="5" cy="19" r="1"/>   <circle cx="2" cy="12" r="1"/>   <circle cx="5" cy="5" r="1"/>   <circle cx="19" cy="19" r="1"/>   <path d="M5,12c0,1.9.8,3.6,2,4.9"/>   <path d="M12,20c-.6,0-1-.4-1-1s.4-1,1-1c3.3,0,6-2.7,6-6s.4-1,1-1,1,.4,1,1c0,4.4-3.6,8-8,8Z"/>   <path d="M12,5c1.9,0,3.6.8,4.9,2"/>' : '<path d="M24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38Z"/><path d="M11 29C12.5089 29.6244 15 30 16.2586 28.5317C17.5171 27.0633 16.395 24.7522 17.7889 23.9682C19.317 23.1086 20.4203 26.0319 23.2912 25.516C26.162 25 28 21 28 19C28 17 26.2854 17 26.162 15.0542C26 12.5 28 11 28 11"/><path d="M27.9995 37C26.9137 36.091 25.9995 35.5 26.0001 34C26.0006 32.5 26.9995 33 27.9995 32C28.9996 31 28.4995 29 29.4999 28.5C30.5004 28 33.6075 29.0558 35.9998 31"/><circle cx="24" cy="4" r="2"/><circle cx="24" cy="44" r="2"/><circle cx="44" cy="24" r="2"/><circle cx="38" cy="10" r="2"/><circle cx="10" cy="38" r="2"/><circle cx="4" cy="24" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="38" cy="38" r="2"/><path d="M10 24C10 27.8146 11.5256 31.2729 14 33.798"/><path d="M24 38C31.732 38 38 31.732 38 24"/><path d="M24 10C27.8146 10 31.2729 11.5256 33.798 14"/>';

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

module.exports = Universal;
