'use strict';

var React = require('react');

function FinancingOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,8c3.6,0,6.5-1.3,6.5-3s-2.9-3-6.5-3-6.5,1.3-6.5,3,2.9,3,6.5,3Z"/>   <path d="M22.3,15.9c-1.4-3.9-3.1-7-5-9.3-.3-.3-.7-.4-1.1-.3-1.9.7-4.1.7-4.1.7s-2.3,0-4.1-.7c-.4-.2-.8,0-1.1.3-2,2.3-3.7,5.5-5.1,9.3-.6,1.6-.3,3.4.6,4.7,1,1.5,2.8,2.4,4.7,2.4h10c1.9,0,3.7-.9,4.7-2.4,1-1.4,1.2-3.1.6-4.8ZM14.4,13.4h.7c.6,0,1,.4,1,1s-.4,1-1,1h-.7c-.4,1.5-1.6,2.7-3.2,3l1.5,1.5c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-3.1-3.1c-.3-.3-.4-.7-.2-1.1s.5-.6.9-.6h1.5c.8,0,1.5-.4,1.8-1.1h-3.4c-.6,0-1-.4-1-1s.4-1,1-1h3.4c-.4-.6-1-1.1-1.8-1.1h-1.5c-.6,0-1-.4-1-1s.4-1,1-1h6.2c.6,0,1,.4,1,1s-.4,1-1,1h-1.1c.2.3.3.7.4,1.1Z"/>' : '<path d="M15.8,15.3c3.7,1.5,8.2,1.5,8.2,1.5,0,0,4.4,0,8.2-1.5,4.1,4.8,6.9,11.1,8.8,16.3,1.9,5.4-2.3,10.5-8,10.5H15c-5.7,0-9.9-5.1-8-10.5,1.9-5.3,4.7-11.6,8.9-16.4Z"/>   <path d="M24,16.7c6.5,0,11.8-2.4,11.8-5.4s-5.3-5.4-11.8-5.4-11.8,2.4-11.8,5.4,5.3,5.4,11.8,5.4Z"/>   <path d="M29.4,22.5h-9.8M29.4,27.4h-9.8M24.5,37.1l-4.8-4.8h2.3c2.7,0,4.8-2.2,4.8-4.8s-2.2-4.8-4.8-4.8"/>';

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

module.exports = FinancingOne;
