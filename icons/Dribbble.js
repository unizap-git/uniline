'use strict';

var React = require('react');

function Dribbble(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5.8,3.1c-2.2,1.5-3.8,3.9-4.4,6.5l.7.2c1.2.3,2.4.4,3.7.4,2,0,4-.4,5.9-1.1-1.3-2.2-3.1-4.1-5.2-5.6h0s-.7-.5-.7-.5Z"/>   <path d="M12.4,10.5c-2.1.8-4.3,1.2-6.6,1.2-1.4,0-2.8-.2-4.1-.5h-.5c0,.1,0,.4,0,.7,0,3.3,1.4,6.2,3.7,8.1l.4-.6c2.1-2.9,4.9-5.1,8.1-6.3-.3-.9-.6-1.9-1.1-2.7"/>   <path d="M13.8,14.7c-2.9,1.1-5.4,3.1-7.3,5.7h0l-.4.6c1.7,1.1,3.8,1.7,5.8,1.7.6,0,1.2,0,1.7-.1l.2-.8c.2-1.2.4-2.4.4-3.6s-.1-2.4-.4-3.5"/>   <path d="M7.3,2.3h.1c2.3,1.7,4.3,3.8,5.7,6.3,2-1,3.8-2.4,5.3-4.1l.5-.7c-1.9-1.7-4.4-2.6-7-2.6-1.7,0-3.3.4-4.7,1.1"/>   <path d="M14.9,12.8c-.3-1-.7-2-1.1-2.9,2.2-1.1,4.1-2.6,5.7-4.5l.5-.6c1.9,2.1,2.9,4.9,2.7,7.8h-.6c0-.1,0-.1,0-.1-1-.2-2-.3-3-.3-1.4,0-2.8.2-4.2.5"/>   <path d="M15.3,22.2h0c.3-1.3.4-2.6.4-4s-.1-2.7-.4-4c2.1-.6,4.3-.7,6.5-.3h.7c-.8,3.9-3.5,7-7.2,8.2"/>' : '<path d="M22,12c0,5.5-4.5,10-10,10S2,17.5,2,12,6.5,2,12,2s10,4.5,10,10Z"/>   <path d="M22,13.3c-.9-.2-1.9-.3-2.9-.3-5.3,0-10.1,2.7-13.1,7"/>   <path d="M19,5c-3.1,3.7-7.8,6-13.1,6s-2.7-.2-3.9-.4"/>   <path d="M14.6,22c.3-1.2.4-2.5.4-3.8,0-6.3-3.2-11.9-8-15.2"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = Dribbble;
