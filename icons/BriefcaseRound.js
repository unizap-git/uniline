'use strict';

var React = require('react');

function BriefcaseRound(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7.5,5.2c0-1.7,1.3-3,3-3h3c1.7,0,3,1.3,3,3v.2c.9,0,1.9.2,2.8.3,1.5.2,2.5,1.5,2.5,2.9v3c0,1.2-.7,2.4-1.9,2.8-2.5.8-5.2,1.3-7.8,1.3-2.7,0-5.4-.4-7.8-1.3-1.2-.4-1.9-1.5-1.9-2.8v-3c0-1.4,1-2.7,2.5-2.9.9-.1,1.8-.2,2.8-.3v-.2ZM15,5.2h0c-2,0-4,0-6,0h0c0-.9.7-1.6,1.5-1.6h3c.8,0,1.5.7,1.5,1.5ZM12,13.5c.4,0,.8-.3.8-.8s-.3-.8-.8-.8-.8.3-.8.8.3.8.8.8Z" fill-rule="evenodd"/>   <path d="M3,18.4v-2.8c.2.1.5.2.7.3,2.7.9,5.5,1.3,8.3,1.3,2.9,0,5.7-.5,8.3-1.3.3,0,.5-.2.7-.3v2.8c0,1.5-1,2.7-2.5,2.9-2.1.3-4.3.4-6.5.4-2.2,0-4.3-.1-6.5-.4-1.5-.2-2.5-1.5-2.5-2.9Z"/>' : '<path d="M40.5,28.3v8.5c0,2.2-1.6,4.1-3.7,4.4-4.2.6-8.4.8-12.8.8s-8.6-.3-12.8-.8c-2.2-.3-3.7-2.2-3.7-4.4v-8.5M40.5,28.3c1-.8,1.5-2.1,1.5-3.3v-7.6c0-2.2-1.5-4-3.7-4.4-2.3-.3-4.5-.6-6.8-.8M40.5,28.3c-.4.3-.8.6-1.3.8-4.9,1.6-10,2.4-15.2,2.4-5.3,0-10.4-.9-15.2-2.4-.5-.2-1-.4-1.3-.8M7.5,28.3c-1-.8-1.5-2.1-1.5-3.3v-7.6c0-2.2,1.5-4,3.7-4.4,2.3-.3,4.5-.6,6.8-.8M31.5,12.3v-1.8c0-2.5-2-4.5-4.5-4.5h-6c-2.5,0-4.5,2-4.5,4.5v1.8M31.5,12.3c-5-.4-10-.4-15,0M24,25.5h0s0,0,0,0h0Z"/>';

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

module.exports = BriefcaseRound;
