'use strict';

var React = require('react');

function BellSnooze(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,2.2c-3.7,0-6.8,3-6.8,6.8v.8c0,2-.8,4-2.1,5.5-.3.3-.3.8,0,1.1,0,0,.2.1.2.1,1.5.6,3.2,1,4.8,1.2-.2,2.1,1.4,3.9,3.5,4s3.9-1.4,4-3.5c0-.2,0-.4,0-.5,1.6-.2,3.3-.7,4.8-1.2.4-.1.6-.6.4-1,0,0,0-.2-.1-.2-1.4-1.5-2.1-3.5-2.1-5.5v-.8c0-3.7-3-6.8-6.8-6.8ZM9.8,18s0,0,0-.1c1.5.1,3,.1,4.5,0h0c0,1.3-1,2.4-2.2,2.4s-2.2-1-2.2-2.2ZM10.5,7.5c-.4,0-.8.3-.8.8s.3.8.8.8h1.6l-2.2,3.3c-.2.3-.1.8.2,1,.1,0,.3.1.4.1h3c.4,0,.8-.3.8-.8s-.3-.8-.8-.8h-1.6l2.2-3.3c.2-.3.1-.8-.2-1-.1,0-.3-.1-.4-.1h-3Z" fill-rule="evenodd"/>' : '<path d="M29.8,34.4c3.8-.5,7.6-1.4,11.2-2.7-3-3.4-4.7-7.8-4.7-12.3v-1.5c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3v1.5c0,4.6-1.7,8.9-4.7,12.3,3.5,1.3,7.3,2.2,11.2,2.7M29.8,34.4c-3.9.5-7.8.5-11.7,0M29.8,34.4c1,3.2-.7,6.7-4,7.7-3.2,1-6.7-.7-7.7-4-.4-1.2-.4-2.5,0-3.7M20.9,16.3h6.1l-6.1,9.2h6.1"/>';

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

module.exports = BellSnooze;
