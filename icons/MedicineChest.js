'use strict';

var React = require('react');

function MedicineChest(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9.5,4h5v-2h-5v2ZM15,4.5v3.5h2v-3.5h-2ZM9,8v-3.5h-2v3.5h2ZM14.5,4c.3,0,.5.2.5.5h2c0-1.4-1.1-2.5-2.5-2.5v2ZM9.5,2c-1.4,0-2.5,1.1-2.5,2.5h2c0-.3.2-.5.5-.5v-2Z"/>   <path d="M20,7H4c-1.4,0-2.5,1.1-2.5,2.5v10c0,1.4,1.1,2.5,2.5,2.5h16c1.4,0,2.5-1.1,2.5-2.5v-10c0-1.4-1.1-2.5-2.5-2.5ZM15,15.5h-2v2c0,.6-.4,1-1,1s-1-.4-1-1v-2h-2c-.6,0-1-.4-1-1s.4-1,1-1h2v-2c0-.6.4-1,1-1s1,.4,1,1v2h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="5" y="16" width="38" height="26" rx="3"/><path d="M19 8H29V4H19V8ZM30 9V16H34V9H30ZM18 16V9H14V16H18ZM29 8C29.5523 8 30 8.44772 30 9H34C34 6.23858 31.7614 4 29 4V8ZM19 4C16.2386 4 14 6.23858 14 9H18C18 8.44772 18.4477 8 19 8V4Z"/><path d="M18 29L30 29"/><path d="M24 23V35"/>';

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

module.exports = MedicineChest;
