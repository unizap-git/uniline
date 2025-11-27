'use strict';

var React = require('react');

function ElectronicLocksOpen(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9,10v-3c0-1.8,1.3-3,3-3s1.8.4,2.3,1c.2.3.4.6.6,1"/>   <path d="M17,9H7c-1.1,0-2,.9-2,2v7c0,1.1.9,2,2,2h10c1.1,0,2-.9,2-2v-7c0-1.1-.9-2-2-2ZM13,15c0,.6-.4,1-1,1s-1-.4-1-1v-1c0-.6.4-1,1-1s1,.4,1,1v1Z"/>   <path d="M3,9v6"/>   <path d="M21,9v6"/>' : '<rect x="12" y="20" width="24" height="18" rx="2"/><path d="M18 20V14C18 10.3181 20.6863 8 24 8C25.8493 8 27.5032 8.72195 28.6038 10C29.0889 10.5634 29.4666 11.2348 29.7061 12"/><path d="M24 28V30"/><path d="M6 18V30"/><path d="M42 18V30"/>';

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

module.exports = ElectronicLocksOpen;
