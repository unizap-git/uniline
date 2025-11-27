'use strict';

var React = require('react');

function Record(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4,6h16"/>   <path d="M7.5,3h9"/>   <g>     <path d="M10,16.4v.2c0,.2.2.4.4.4h1.1c.2,0,.4-.2.4-.4v-.6h-1.6c-.2,0-.4.2-.4.4Z"/>     <path d="M20.5,8H3.5c-1.1,0-2,.9-2,2v10c0,1.1.9,2,2,2h17c1.1,0,2-.9,2-2v-10c0-1.1-.9-2-2-2ZM15.5,13.5c0,0-.1,0-.2,0l-1.3-.3v3.4c0,1.3-1.1,2.4-2.4,2.4h-1.1c-1.3,0-2.4-1.1-2.4-2.4v-.2c0-1.3,1.1-2.4,2.4-2.4h1.6v-2s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.1,0-.2,0,0,0-.1.1-.2,0,0,0,0,.1-.1,0,0,.1,0,.2-.1,0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0l2.5.5c.5.1.9.6.8,1.2,0,.5-.5.8-1,.8Z"/>   </g>' : '<rect x="5" y="18" width="38" height="24" rx="2"/><path d="M8 12H40"/><path d="M15 6L33 6"/><path d="M26 24V30"/><path d="M18 32.7491C18 31.2308 19.2894 30 20.88 30H26V33.2509C26 34.7692 24.7106 36 23.12 36H20.88C19.2894 36 18 34.7692 18 33.2509V32.7491Z"/><path d="M31 25L26 24"/>';

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

module.exports = Record;
