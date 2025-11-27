'use strict';

var React = require('react');

function CurrencyRupee(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,2.2C6.6,2.2,2.2,6.6,2.2,12s4.4,9.8,9.8,9.8,9.8-4.4,9.8-9.8S17.4,2.2,12,2.2ZM9,7.5c-.4,0-.8.3-.8.8s.3.8.8.8h1.5c1,0,1.8.6,2.1,1.5h-3.6c-.4,0-.8.3-.8.8s.3.8.8.8h3.6c-.3.9-1.2,1.5-2.1,1.5h-1.5c-.4,0-.7.3-.7.8,0,.2,0,.4.2.5l3,3c.3.3.8.3,1.1,0,.3-.3.3-.8,0-1.1,0,0,0,0,0,0l-1.7-1.7c1.7-.1,3-1.4,3.4-3h.8c.4,0,.8-.3.8-.8s-.3-.8-.8-.8h-.8c-.1-.5-.3-1.1-.7-1.5h1.5c.4,0,.8-.3.8-.8s-.3-.8-.8-.8h-6Z" fill-rule="evenodd"/>' : '<path d="M30,16.5h-12M30,22.5h-12M24,34.5l-6-6h3c3.3,0,6-2.7,6-6s-2.7-6-6-6M42,24c0,9.9-8.1,18-18,18S6,33.9,6,24,14.1,6,24,6s18,8.1,18,18Z"/>';

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

module.exports = CurrencyRupee;
