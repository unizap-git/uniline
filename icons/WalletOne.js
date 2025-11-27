'use strict';

var React = require('react');

function WalletOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.5,10v-2.5c0-1.1-.9-2-2-2H3.5c-1.1,0-2,.9-2,2v11c0,1.1.9,2,2,2h17c1.1,0,2-.9,2-2v-3c0,.6-.4,1-1,1h-9c-.6,0-1-.4-1-1v-5.5c0-.6.4-1,1-1h9c.6,0,1,.4,1,1Z"/>   <path d="M21.5,17.5c-.6,0-1-.4-1-1v-7.5c0-.6.4-1,1-1s1,.4,1,1v7.5c0,.6-.4,1-1,1Z"/>   <path d="M16,6.5c0-2.5-1.8-3-2.5-3h-7.2c-1.8,0-2.2,1.4-2.2,2.1v.9"/>   <path d="M13.5,11v3.5h7v-3.5h-7ZM16.8,13.5c-.4,0-.8-.3-.8-.8s.3-.8.8-.8.8.3.8.8-.3.8-.8.8Z"/>' : '<rect x="5" y="13" width="38" height="26" rx="2"/><rect x="25" y="20" width="18" height="11"/><path d="M43 18L43 33"/><path d="M32 13C32 8 28.5 7 27 7C23.6667 7 16.1 7 12.5 7C8.9 7 8 9.86567 8 11.2985V13"/><circle cx="33.5" cy="25.5" r="1.5"/>';

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

module.exports = WalletOne;
