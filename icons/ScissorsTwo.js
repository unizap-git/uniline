'use strict';

var React = require('react');

function ScissorsTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8.1,9.2c-1.3,1.6-3.7,1.8-5.3.5-1.6-1.3-1.8-3.7-.5-5.3,1.3-1.6,3.7-1.8,5.3-.5,1.2,1,1.6,2.5,1.2,4l1.1.7c.4.2.5.7.3,1,0,0,0,0,0,0h0c-.2.3-.7.4-1,.2,0,0,0,0-.1,0,0,0-.9-.5-.9-.5ZM3.3,5.6c.6-1.1,2-1.4,3.1-.8,1,.6,1.4,1.8.9,2.9,0,0,0,.1-.1.2-.6,1.1-2,1.4-3.1.8-1.1-.6-1.4-2-.8-3.1ZM13.3,8.3c-1.7.5-3,1.9-3.4,3.6-.1.4-.2.8-.2,1.2,0,.5-.3,1-.7,1.2l-1,.6c-1.4-1.6-3.7-1.7-5.3-.4-1.6,1.4-1.7,3.7-.4,5.3,1.4,1.6,3.7,1.7,5.3.4,1.1-1,1.6-2.5,1.1-4l13.7-7.9c.4-.2.5-.7.3-1,0-.2-.3-.3-.5-.3l-.8-.2c-1-.3-2-.2-2.9,0,0,0-5.3,1.6-5.3,1.6ZM4.1,15.3c-1.1.6-1.5,2-.8,3.1s2,1.5,3.1.8c0,0,0,0,0,0,1.1-.6,1.4-2,.8-3.1-.6-1.1-2-1.4-3.1-.8ZM12,12.8c.4,0,.8-.3.8-.8s-.3-.8-.8-.8-.8.3-.8.8.3.8.8.8Z" fill-rule="evenodd"/>   <path d="M16.4,12.6c.2-.1.5-.1.8,0l5.4,3.1c.4.2.5.7.3,1,0,.2-.3.3-.5.3l-.8.2c-1,.3-2,.2-2.9,0l-5.1-1.6c-.4-.1-.6-.5-.5-.9,0-.2.2-.3.3-.4l3-1.7h0Z"/>' : '<path d="M16.2,17.1l2.8,1.6M16.2,17.1c-1.5,2.7-4.9,3.6-7.6,2.1s-3.6-4.9-2.1-7.6c0,0,0,0,0,0,1.5-2.6,4.9-3.5,7.6-2,2.6,1.5,3.5,4.9,2,7.5ZM19,18.7c1.2.7,2,2,2,3.4,0,.6,0,1.3.3,1.9M19,18.7l3.8,2.2M16.2,30.9l2.8-1.6M16.2,30.9c1.5,2.6.7,6-2,7.6-2.6,1.5-6,.7-7.6-2,0,0,0,0,0,0-1.5-2.7-.6-6,2.1-7.6,2.6-1.5,6-.6,7.5,2ZM19,29.3c1.2-.7,2-2,2-3.4,0-.6,0-1.3.3-1.9M19,29.3l3.8-2.2M22.8,20.9c1-1.2,2.3-2.1,3.8-2.5l9.8-3c1.5-.5,3.1-.5,4.6,0l1.5.4-14.4,8.3M22.8,20.9c-.7.9-1.3,1.9-1.6,3.1M28.2,24l14.4,8.3-1.5.4c-1.5.4-3.1.4-4.6,0l-9.8-3c-1.5-.5-2.8-1.3-3.8-2.5M28.2,24l-5.3,3.1"/>';

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

module.exports = ScissorsTwo;
