'use strict';

var React = require('react');

function CurrencyEuro(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,2.2C6.6,2.2,2.2,6.6,2.2,12s4.4,9.8,9.8,9.8,9.8-4.4,9.8-9.8S17.4,2.2,12,2.2ZM10.1,9.3c1-1,2.5-1.4,3.9-.9.4.1.8,0,1-.5s0-.8-.5-1h0c-2.5-.9-5.3.3-6.5,2.7h-.5c-.4,0-.8.3-.8.8s.3.8.8.8h0c0,.5,0,1,0,1.5h0c-.4,0-.8.3-.8.8s.3.8.8.8h.5c1.2,2.4,4,3.6,6.5,2.7.4-.1.6-.6.5-1-.1-.4-.6-.6-1-.5-1.5.5-3.3,0-4.3-1.3h3c.4,0,.8-.3.8-.8s-.3-.8-.8-.8h-3.7c-.1-.5-.1-1,0-1.5h3.7c.4,0,.8-.3.8-.8s-.3-.8-.8-.8h-3c.1-.1.2-.3.3-.4Z" fill-rule="evenodd"/>' : '<path d="M28.5,15.5c-4.7-1.7-9.8.8-11.5,5.5-1.7,4.7.8,9.8,5.5,11.5,1.9.7,4.1.7,6,0M15,21h10.5M15,27h10.5M42,24c0,10-8.1,18-18,18S6,34,6,24,14,6,24,6s18,8.1,18,18Z"/>';

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

module.exports = CurrencyEuro;
