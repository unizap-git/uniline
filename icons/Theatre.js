'use strict';

var React = require('react');

function Theatre(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7.5,6.5s0,0,0,0c-1.4.4-2.6,1.2-3.4,1.9-.4.3-.8.7-1,.9-.1.1-.2.2-.3.3,0,0,0,0,0,0h0s0,0,0,0h0s0,0,0,0c-.2.3-.3.6-.2,1l1.9,6.2c.3.9.9,1.6,1.6,2.2.7.5,1.5.9,2.3,1.2.8.3,1.5.5,2.1.6.3,0,.6,0,.8.1.1,0,.2,0,.3,0,0,0,.2,0,.4,0,.2,0,.3-.1.4-.2,0,0,.2-.1.3-.2.2-.1.4-.3.6-.5,0,0-.2,0-.2-.1-.6-.3-1.3-.8-2.1-1.3-.5-.4-1-.8-1.5-1.3-.3.4-.9.6-1.3.3-.5-.3-.6-.9-.4-1.4,0,0,0,0,0-.1.1-.2.2-.4.4-.6-.3-.7-.6-1.5-.6-2.4v-6.5h0ZM5.7,11c-.5.2-.8.7-.7,1.2.2.5.7.8,1.2.7h0c.5-.2.8-.7.7-1.3-.2-.5-.7-.8-1.2-.7h0Z" fill-rule="evenodd"/>   <path d="M15,4c-1.4,0-2.8.4-3.8.8-.5.2-.9.4-1.2.6-.1,0-.3.1-.3.2,0,0,0,0,0,0h0s0,0,0,0h0s0,0,0,0c-.3.2-.5.5-.5.9v6.5c0,1,.4,1.8.9,2.5.5.7,1.2,1.3,1.8,1.8.6.5,1.3.9,1.8,1.2.3.1.5.3.7.3.1,0,.2,0,.3.1,0,0,.2,0,.4,0s.3,0,.4,0c.1,0,.2,0,.3-.1.2,0,.5-.2.7-.3.5-.3,1.2-.7,1.8-1.2.6-.5,1.3-1.1,1.8-1.8.5-.7.9-1.6.9-2.5v-6.5c0-.4-.2-.7-.5-.9h0s0,0,0,0h0s0,0,0,0c0,0,0,0,0,0,0,0-.2-.1-.3-.2-.3-.2-.7-.4-1.2-.6-1-.4-2.4-.8-3.8-.8ZM20,6.5l.5-.9s0,0-.5.9ZM13,7c-.6,0-1,.4-1,1s.4,1,1,1h0c.6,0,1-.4,1-1s-.4-1-1-1h0ZM17,7c-.6,0-1,.4-1,1s.4,1,1,1h0c.6,0,1-.4,1-1s-.4-1-1-1h0ZM12.3,11.3c-.4.4-.4,1,0,1.4,0,0,0,0,0,0,.5.5,1.2,1.3,2.6,1.3s2.1-.8,2.6-1.3c0,0,0,0,0,0,.4-.4.4-1,0-1.4s-1-.4-1.4,0c-.5.5-.8.8-1.3.8s-.8-.2-1.3-.8-1-.4-1.4,0Z" fill-rule="evenodd"/>' : '<path d="M13.9,23.8h0M26.2,39.4c-1.1,1.1-2,1.9-2.3,2-1.1.3-11.9-2.8-13.7-7.3-1.8-4.5-4-12.8-4.2-13.7-.1-.9,3.4-3.8,7.9-5.7M18.3,32.4c-.5.6-.9,1.2-1.2,1.9M27,24.1c1.1,1.1,2.2,2.3,4.4,2.3s3.3-1.2,4.4-2.3M27,15.3h0M35.8,15.3h0M20.4,9.8c0-.6,5.5-3.3,11-3.3s11,2.5,11,3.3v14.3c0,4.3-9.4,11-11,11s-11-6.7-11-11v-14.3Z"/>';

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

module.exports = Theatre;
