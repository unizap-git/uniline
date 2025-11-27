'use strict';

var React = require('react');

function CpuChip(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16.5,7.5H7.5v9h9V7.5Z"/>   <path d="M8.2,2.2c.4,0,.8.3.8.8v.8h2.2v-.8c0-.4.3-.8.8-.8s.8.3.8.8v.8h2.2v-.8c0-.4.3-.8.8-.8s.8.3.8.8v.8h.8c1.7,0,3,1.3,3,3v.8h.8c.4,0,.8.3.8.8s-.3.8-.8.8h-.8v2.2h.8c.4,0,.8.3.8.8s-.3.8-.8.8h-.8v2.2h.8c.4,0,.8.3.8.8s-.3.8-.8.8h-.8v.8c0,1.7-1.3,3-3,3h-.8v.8c0,.4-.3.8-.8.8s-.8-.3-.8-.8v-.8h-2.2v.8c0,.4-.3.8-.8.8s-.8-.3-.8-.8v-.8h-2.2v.8c0,.4-.3.8-.8.8s-.8-.3-.8-.8v-.8h-.8c-1.7,0-3-1.3-3-3v-.8h-.8c-.4,0-.8-.3-.8-.8s.3-.8.8-.8h.8v-2.2h-.8c-.4,0-.8-.3-.8-.8s.3-.8.8-.8h.8v-2.2h-.8c-.4,0-.8-.3-.8-.8s.3-.8.8-.8h.8v-.8c0-1.7,1.3-3,3-3h.8v-.8c0-.4.3-.8.8-.8ZM6,6.8c0-.4.3-.8.8-.8h10.5c.4,0,.8.3.8.8v10.5c0,.4-.3.8-.8.8H6.8c-.4,0-.8-.3-.8-.8V6.8Z" fill-rule="evenodd"/>' : '<path d="M16.5,5.9v3M8.9,16.5h-3M42.1,16.5h-3M8.9,24h-3M42.1,24h-3M8.9,31.5h-3M42.1,31.5h-3M16.5,39.1v3M24,5.9v3M24,39.1v3M31.5,5.9v3M31.5,39.1v3M13.4,39.1h21.1c2.5,0,4.5-2,4.5-4.5V13.4c0-2.5-2-4.5-4.5-4.5H13.4c-2.5,0-4.5,2-4.5,4.5v21.1c0,2.5,2,4.5,4.5,4.5ZM14.9,14.9h18.1v18.1H14.9V14.9Z"/>';

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

module.exports = CpuChip;
