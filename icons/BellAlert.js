'use strict';

var React = require('react');

function BellAlert(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5.8,3.5c.3-.3.2-.8,0-1.1-.3-.3-.8-.2-1,0-1.2,1.4-2,3.1-2.3,4.9,0,.4.2.8.6.9.4,0,.8-.2.8-.6.3-1.5.9-3,2-4.1ZM19.3,2.5c-.3-.3-.7-.3-1.1,0-.3.3-.3.7,0,1.1,0,0,0,0,0,0,1,1.2,1.7,2.6,2,4.1,0,.4.5.7.9.6.4,0,.7-.5.6-.9h0c-.3-1.8-1.1-3.5-2.3-4.9h0Z"/>   <path d="M12,2.2c-3.7,0-6.8,3-6.8,6.8v.8c0,2-.8,4-2.1,5.5-.3.3-.3.8,0,1.1,0,0,.2.1.2.1,1.5.6,3.2,1,4.8,1.2-.2,2.1,1.4,3.9,3.5,4s3.9-1.4,4-3.5c0-.2,0-.4,0-.5,1.6-.2,3.3-.7,4.8-1.2.4-.1.6-.6.4-1,0,0,0-.2-.1-.2-1.4-1.5-2.1-3.5-2.1-5.5v-.8c0-3.7-3-6.8-6.8-6.8ZM9.8,18s0,0,0-.1c1.5.1,3,.1,4.5,0h0c0,1.3-1,2.4-2.2,2.4s-2.2-1-2.2-2.2Z" fill-rule="evenodd"/>' : '<path d="M29.8,34.3c3.8-.4,7.5-1.3,11.1-2.7-3-3.3-4.7-7.7-4.7-12.2v-1.5c0-6.7-5.4-12.2-12.2-12.2s-12.2,5.4-12.2,12.2v1.5c0,4.5-1.7,8.9-4.7,12.2,3.5,1.3,7.2,2.2,11.1,2.7M29.8,34.3c-3.8.5-7.7.5-11.6,0M29.8,34.3c1,3.2-.7,6.6-3.9,7.6-3.2,1-6.6-.7-7.6-3.9-.4-1.2-.4-2.5,0-3.7M6,14.9c.6-3.4,2.1-6.6,4.4-9.1M37.6,5.7c2.3,2.6,3.8,5.7,4.4,9.1"/>';

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

module.exports = BellAlert;
