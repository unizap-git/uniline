'use strict';

var React = require('react');

function Cattle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.2,1.7c-1.8-1.8-4.8,0-6.3,1.4-1.2-.7-2.5-1.1-3.9-1.1s-2.7.4-3.9,1.1C6.6,1.7,3.6,0,1.8,1.7s-.9,1.9-.8,2.4c.3,1.1,1.3,1.8,2.2,2,.7.2,1.3.6,1.7,1.1-.3.9-.4,1.9-.3,2.8l.7,7.1c.4,3.3,3.2,5.9,6.5,5.9s6.2-2.5,6.5-5.9l.7-7.1c0-.9,0-1.9-.3-2.8.4-.4,1-.9,1.7-1.1.9-.2,1.9-.9,2.2-2,.1-.5.2-1.4-.8-2.4ZM14.5,8c.6,0,1,.4,1,1s-.4,1-1,1-1-.4-1-1,.4-1,1-1ZM9.5,8c.6,0,1,.4,1,1s-.4,1-1,1-1-.4-1-1,.4-1,1-1ZM3.8,4.2c-.3,0-.7-.4-.8-.6,0-.2.1-.4.2-.5.5-.5,2.1.2,3.3,1.3-.2.3-.5.6-.7.9-.5-.4-1.2-.9-2.1-1.1ZM10.5,18c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM13.5,18c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM17.8,16.1c-.2.2-.5.4-.8.4s-.5,0-.6-.2c-4.2-3.5-7.7-.9-8.7,0-.4.4-1,.3-1.4,0-.4-.4-.3-1,0-1.4,2.5-2.3,7-3.6,11.3,0,.4.4.5,1,.1,1.4ZM20.3,4.2c-.9.2-1.6.7-2.1,1.1-.2-.3-.4-.6-.7-.9,1.2-1,2.8-1.8,3.3-1.3.1.1.3.3.2.5,0,.2-.4.5-.8.6Z"/>   <rect x="5.2" y="12.5" width="2" height="4.8" transform="translate(-1.5 .7) rotate(-6)"/>   <rect x="15.4" y="13.9" width="4.8" height="2" transform="translate(1.1 31) rotate(-84)"/>' : '<path d="M11.4651 19.9231C10.6818 12.4814 16.5167 6 23.9995 6C31.4823 6 37.3173 12.4814 36.5339 19.9231L35.0464 34.055C34.4513 39.7083 29.6841 44 23.9995 44C18.315 44 13.5478 39.7083 12.9527 34.0549L11.4651 19.9231Z"/><path d="M13.9995 31C17.4916 27.8746 25.4281 23.8297 33.9995 31"/><circle cx="18.9995" cy="18" r="2"/><circle cx="20.9995" cy="34" r="2"/><circle cx="28.9995" cy="18" r="2"/><circle cx="26.9995" cy="34" r="2"/><path d="M33 7.91262C35.1667 5.91262 40.3923 2.30498 43 4.91262C45.6077 7.5203 43 9.9126 41 10.4126C38.5 11.0376 36.8 12.7128 36 13.9128"/><path d="M15.0962 7.91262C12.9295 5.91262 7.70391 2.30498 5.09619 4.91262C2.48848 7.5203 5.09619 9.9126 7.09619 10.4126C9.59619 11.0376 11.2962 12.7128 12.0962 13.9128"/><path d="M12 25L13 34.5"/><path d="M36 25L35 34.5"/>';

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

module.exports = Cattle;
