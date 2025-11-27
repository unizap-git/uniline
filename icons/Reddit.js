'use strict';

var React = require('react');

function Reddit(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M40.4,30.4c0,6.6-7.3,11.9-16.4,11.9h0c-9.1,0-16.4-5.3-16.4-11.9.2-6.6,7.7-11.7,16.8-11.5,8.8,0,15.9,5.3,16.1,11.5Z"/>   <path d="M30.4,32.8c-1.8,1.5-4,2.2-6.4,2.2s-4.6-.7-6.4-2.2"/>   <path d="M40.4,9.4c0,2-1.6,3.7-3.7,3.7s-3.7-1.6-3.7-3.7,1.6-3.7,3.7-3.7,3.7,1.6,3.7,3.7Z"/>   <path d="M35,20.5c.7-1.3,2-2,3.5-2,2.2,0,3.8,1.6,3.8,3.8s-.9,2.7-2.2,3.5"/>   <path d="M13,20.5c-.7-1.3-2-2-3.5-2-2.2,0-3.8,1.6-3.8,3.8h0c0,1.5.9,2.7,2.2,3.5"/>   <path d="M24,18.5v-5.5c0-2,1.6-3.7,3.7-3.7h5.5"/>   <path d="M18.5,25.8h0"/>   <path d="M29.5,25.8h0"/>' : '<path d="M40.4,30.4c0,6.6-7.3,11.9-16.4,11.9h0c-9.1,0-16.4-5.3-16.4-11.9.2-6.6,7.7-11.7,16.8-11.5,8.8,0,15.9,5.3,16.1,11.5Z"/>   <path d="M30.4,32.8c-1.8,1.5-4,2.2-6.4,2.2s-4.6-.7-6.4-2.2"/>   <path d="M40.4,9.4c0,2-1.6,3.7-3.7,3.7s-3.7-1.6-3.7-3.7,1.6-3.7,3.7-3.7,3.7,1.6,3.7,3.7Z"/>   <path d="M35,20.5c.7-1.3,2-2,3.5-2,2.2,0,3.8,1.6,3.8,3.8s-.9,2.7-2.2,3.5"/>   <path d="M13,20.5c-.7-1.3-2-2-3.5-2-2.2,0-3.8,1.6-3.8,3.8h0c0,1.5.9,2.7,2.2,3.5"/>   <path d="M24,18.5v-5.5c0-2,1.6-3.7,3.7-3.7h5.5"/>   <path d="M18.5,25.8h0"/>   <path d="M29.5,25.8h0"/>';

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

module.exports = Reddit;
