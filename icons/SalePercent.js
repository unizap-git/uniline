'use strict';

var React = require('react');

function SalePercent(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.3,8.6c.1.3.3.6.6.9h0c1.4,1.3,1.5,3.6.2,5,0,0-.1.1-.2.2-.5.5-.8,1.2-.8,1.9,0,2-1.5,3.6-3.4,3.7,0,0-.2,0-.2,0-.7,0-1.4.3-1.9.8-1.3,1.4-3.6,1.5-5,.2,0,0-.1-.1-.2-.2-.5-.5-1.2-.8-1.9-.8-2,0-3.6-1.5-3.7-3.4,0,0,0-.2,0-.2,0-.7-.3-1.4-.8-1.9-1.4-1.3-1.5-3.6-.2-5,0,0,.1-.1.2-.2.5-.5.8-1.2.8-1.9,0-1,.3-1.9,1-2.6.7-.7,1.6-1.1,2.6-1,.7,0,1.4-.3,1.9-.8,1.3-1.4,3.6-1.5,5-.2,0,0,.1.1.2.2.5.5,1.2.8,1.9.8,1.9,0,3.6,1.5,3.7,3.4,0,0,0,.2,0,.2,0,.3,0,.7.2,1h0ZM9.9,7.4c-.6,0-1,.4-1,1s.4,1,1,1h0c.6,0,1-.4,1-1s-.4-1-1-1c0,0,0,0,0,0ZM15.8,9.6c.4-.4.4-1,0-1.4-.4-.4-1-.4-1.4,0l-6.2,6.2c-.4.4-.4,1,0,1.4.4.4,1,.4,1.4,0,0,0,6.2-6.2,6.2-6.2ZM13,14.6c-.6,0-1,.4-1,1s.4,1,1,1h0c.6,0,1-.4,1-1s-.4-1-1-1h0Z" fill-rule="evenodd"/>' : '<path d="M17.8,30.2l12.4-12.4M19.9,16.7h0M26.1,31.2h0M28.2,7.8c1.1,1.2,2.7,1.9,4.4,1.8,3.1-.1,5.8,2.4,5.9,5.5,0,.1,0,.3,0,.4,0,1.6.6,3.2,1.8,4.4,2.3,2.1,2.4,5.8.3,8,0,0-.2.2-.3.3-1.2,1.1-1.9,2.7-1.8,4.3.1,3.1-2.3,5.8-5.5,5.9-.1,0-.3,0-.4,0-1.6,0-3.2.6-4.4,1.8-2.1,2.3-5.8,2.4-8,.3,0,0-.2-.2-.3-.3-1.1-1.2-2.7-1.9-4.4-1.8-3.1.1-5.8-2.4-5.9-5.5,0-.1,0-.3,0-.4,0-1.6-.6-3.2-1.8-4.4-2.3-2.1-2.4-5.8-.3-8.1,0,0,.2-.2.3-.3,1.2-1.1,1.9-2.7,1.8-4.4-.1-3.1,2.4-5.8,5.5-5.9.1,0,.3,0,.4,0,1.6,0,3.2-.6,4.4-1.8,2.1-2.3,5.8-2.4,8-.3,0,0,.2.2.3.3Z"/>';

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

module.exports = SalePercent;
