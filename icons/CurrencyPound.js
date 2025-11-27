'use strict';

var React = require('react');

function CurrencyPound(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,2.2C6.6,2.2,2.2,6.6,2.2,12s4.4,9.8,9.8,9.8,9.8-4.4,9.8-9.8S17.4,2.2,12,2.2ZM9.8,9.5c.1-1.2,1.2-2.1,2.5-2,.5,0,1,.3,1.4.6.3.3.8.3,1.1,0,.3-.3.3-.7,0-1-1.5-1.5-3.8-1.5-5.3,0-.6.6-1,1.4-1.1,2.3,0,.3,0,.6,0,.8l.2,1.1h-.2c-.4,0-.8.3-.8.8s.3.8.8.8h.4v1c.2.8.1,1.5-.2,2.2v.2c-.3.4-.2.8.2,1,.2,0,.4.1.6,0l1.5-.5c.3-.1.6-.1.9,0l.7.2c.8.3,1.6.2,2.3-.2l.7-.3c.4-.2.5-.6.3-1-.2-.4-.6-.5-1-.3,0,0,0,0,0,0l-.7.3c-.4.2-.8.2-1.1,0l-.7-.2c-.6-.2-1.3-.2-1.9,0h0c.1-.6.1-1.2,0-1.8v-.8c-.1,0,1.7,0,1.7,0,.4,0,.8-.3.8-.8s-.3-.8-.8-.8h-2l-.2-1.3c0-.1,0-.3,0-.5Z" fill-rule="evenodd"/>' : '<path d="M28.2,15.3c-2.3-2.3-6.1-2.3-8.5,0-1,1-1.6,2.2-1.7,3.6,0,.4,0,.9,0,1.3l1,7.1c.3,1.8,0,3.7-.9,5.3l-.2.5,3.1-1c.9-.3,1.9-.3,2.8,0l1.3.4c1.1.4,2.4.3,3.4-.2l1.3-.7M16.5,24h7.5M42,24c0,9.9-8.1,18-18,18S6,33.9,6,24,14.1,6,24,6s18,8.1,18,18Z"/>';

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

module.exports = CurrencyPound;
