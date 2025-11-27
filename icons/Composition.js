'use strict';

var React = require('react');

function Composition(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.9,10.9l-8.9,8.9c-1.7,1.7-4.5,1.7-6.3,0-1.8-1.8-1.8-4.6,0-6.3L13.6,4.5l6.4,6.4Z" stroke-miterlimit="2"/>   <path d="M13.6,4.5L4.6,13.5c-1.7,1.7-1.7,4.5,0,6.3s4.6,1.8,6.3,0l8.9-8.9-6.4-6.4ZM11.9,11.9c-.4.4-1,.4-1.4,0-.4-.4-.4-1,0-1.4.4-.4,1-.4,1.4,0,.4.4.4,1,0,1.4ZM13.3,10.5c-.4-.4-.4-1,0-1.4s1-.4,1.4,0c.4.4.4,1,0,1.4-.4.4-1,.4-1.4,0Z" fill-rule="evenodd"/>   <path d="M11.8,2.8l9.9,9.9" stroke-miterlimit="2"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M39.8281 21.7859L21.9686 39.6454C18.5544 43.0597 12.9373 42.9783 9.42255 39.4636C5.90784 35.9489 5.82643 30.3318 9.24073 26.9175L27.1002 9.05798"/><path d="M39.8281 21.7859L21.9686 39.6454C18.5544 43.0597 12.9373 42.9783 9.42255 39.4636C5.90784 35.9489 5.82643 30.3318 9.24073 26.9175L27.1002 9.05798"/><path d="M8.73438 27.4238L34.8784 26.7356"/><path d="M29.393 20.9069C30.1741 20.1258 30.1741 18.8595 29.393 18.0785C28.612 17.2974 27.3457 17.2974 26.5646 18.0785C25.7836 18.8595 25.7836 20.1258 26.5646 20.9069C27.3457 21.6879 28.612 21.6879 29.393 20.9069Z"/><path d="M23.7358 23.7355C24.5169 22.9545 24.5169 21.6881 23.7358 20.9071C22.9548 20.126 21.6884 20.126 20.9074 20.9071C20.1263 21.6881 20.1263 22.9545 20.9074 23.7355C21.6884 24.5166 22.9548 24.5166 23.7358 23.7355Z"/><path d="M23.5645 5.52246L43.3634 25.3215"/>';

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

module.exports = Composition;
