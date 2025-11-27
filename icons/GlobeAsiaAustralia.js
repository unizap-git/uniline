'use strict';

var React = require('react');

function GlobeAsiaAustralia(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M31.1,16.9c.8,0,1.4.6,1.4,1.4,0,2.1-.9,4-2.4,5.3-.6.5-1.5.5-2,0-.5-.6-.5-1.5,0-2h0c.9-.8,1.4-2,1.4-3.2s.6-1.4,1.4-1.4h.2Z"/>   <path d="M24,5.7C13.9,5.7,5.7,13.9,5.7,24s8.2,18.3,18.3,18.3,18.3-8.2,18.3-18.3S34.1,5.7,24,5.7ZM10,30.8c3.2,6.6,10.5,10,17.6,8.3-.5-1.4-1.9-2.4-3.5-2.4s-1.7-.7-1.8-1.5v-.8c-.3-1.1.3-2.1,1.4-2.4l1.9-.5c.8-.2,1.5-.8,1.8-1.5h0c.7-1.5,2.3-2,3.7-1.4.3.1.5.3.7.5l.6.6h1.2c1.6,0,3,.9,3.7,2.2,4.3-7.4,1.9-16.9-5.5-21.2-2-1.2-4.2-1.9-6.4-2.1,0,.5.3.9.7,1.3l2,1.7c.8.7,1,1.9.4,2.8l-1,1.4c-.5.8-1.3,1.4-2.2,1.7h-.3c-1.1.5-1.7,1.6-1.3,2.7,0,.2.1.3.2.5.7,1,.3,2.5-.8,3l-4.9,2.5.8,2c.4.9,0,2-1,2.3-.8.3-1.6,0-2.1-.6l-1.3-1.7c-.7-.9-2-1.1-3-.4-.3.2-.5.5-.6.7l-1.1,2.3h0Z" fill-rule="evenodd"/>' : '<path d="M25.5,6v1.1c0,.7.3,1.3.8,1.7l2.1,1.8c.9.7,1.1,2,.4,3l-1,1.5c-.6.8-1.4,1.5-2.3,1.8h-.3c-1.2.5-1.8,1.7-1.4,2.9,0,.2.1.4.3.5.7,1.1.3,2.6-.9,3.2l-5.3,2.6.9,2.1c.4,1,0,2.1-1.1,2.5-.8.3-1.7,0-2.2-.6l-1.4-1.8c-.8-1-2.2-1.2-3.2-.5-.3.2-.5.5-.7.8l-1.4,2.8-1.2.3M25.5,6c-10-.8-18.7,6.6-19.6,16.5-.3,3.2.3,6.5,1.7,9.4M25.5,6c10,.8,17.4,9.6,16.5,19.5-.3,3.1-1.3,6.1-3.1,8.7M39,34.2l-.4-1.1c-.6-1.8-2.3-3.1-4.3-3.1h-1.3l-.7-.7c-1.1-1.1-3-1.1-4.1,0-.2.2-.4.5-.5.8h0c-.4.9-1.1,1.5-2,1.8l-2,.6c-1.1.3-1.8,1.4-1.6,2.5v.9c.3,1,1.1,1.7,2.1,1.7,1.7,0,3.2,1.1,3.8,2.7l.4,1.3M39,34.2c-2.5,3.7-6.3,6.3-10.6,7.4M28.4,41.6c-8.3,2.1-16.9-2-20.7-9.7M31.5,18c0,1.8-.8,3.4-2,4.5"/>';

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

module.exports = GlobeAsiaAustralia;
