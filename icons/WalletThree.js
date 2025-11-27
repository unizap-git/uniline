'use strict';

var React = require('react');

function WalletThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,8v-3.5c0-.8-.7-1.5-1.5-1.5H4.5c-.8,0-1.5.7-1.5,1.5v15c0,.8.7,1.5,1.5,1.5h13.5c.8,0,1.5-.7,1.5-1.5v-3.5"/>   <path d="M19.5,7h-7c-1.4,0-2.5,1.1-2.5,2.5v5c0,1.4,1.1,2.5,2.5,2.5h7c1.4,0,2.5-1.1,2.5-2.5v-5c0-1.4-1.1-2.5-2.5-2.5ZM15,13c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M39 16V9C39 7.34315 37.6569 6 36 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34314 42 9 42H36C37.6569 42 39 40.6569 39 39V32"/><rect x="22" y="16" width="20" height="16" rx="3"/><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 30 24)"/>';

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

module.exports = WalletThree;
