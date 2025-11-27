'use strict';

var React = require('react');

function KitchenKnife(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7,15v5c0,3,4,3,4,0v-5"/>   <path d="M11,18.5h-4"/>   <path d="M20,6.9c-.4-3.6-2-5.1-2.6-5.5-.3-.2-.7-.3-1-.3h-8.3c-1.1,0-2,.9-2,2v13h10.9c.8,0,1.5-.5,1.8-1.2.5-1.3,1.7-4.6,1.3-7.9ZM11,6c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M14 30C14 30 14 34 14 40C14 46 22 46 22 40C22 34 22 30 22 30"/><path d="M22 37H14"/><path d="M14 6C14 4.89543 14.8954 4 16 4H32.6349C32.9537 4 33.2672 4.07486 33.5228 4.26546C34.5417 5.0254 37.1977 7.58171 38 14C38.7728 20.1822 36.6313 26.3644 35.6182 28.8547C35.3295 29.5645 34.6334 30 33.8672 30H14V6Z"/><circle cx="22" cy="10" r="2"/>';

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

module.exports = KitchenKnife;
