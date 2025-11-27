'use strict';

var React = require('react');

function VipOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.5,7.5l-4-4.3c-.4-.4-.9-.7-1.5-.7H7c-.6,0-1.1.2-1.5.7L1.5,7.5h0c-.7.8-.7,1.9,0,2.6l9.4,10.6c.3.3.7.5,1.1.5s.8-.2,1.1-.5l9.3-10.6c.7-.8.7-1.9,0-2.7ZM16.7,10.7l-4,4.5c-.2.2-.5.3-.7.3s-.6-.1-.7-.3l-4-4.5c-.4-.4-.3-1,0-1.4.4-.4,1-.3,1.4,0l3.3,3.7,3.3-3.7c.4-.4,1-.5,1.4,0,.4.4.5,1,0,1.4Z"/>' : '<path d="M4.50326 16.3661L12.5158 7.67177C12.909 7.2452 13.4807 7 14.0821 7H33.9179C34.5193 7 35.091 7.2452 35.4842 7.67177L43.4967 16.3661C44.1809 17.1084 44.1659 18.2125 43.4618 18.9383L24.7499 40.1499C24.3518 40.6012 23.6482 40.6012 23.2501 40.1499L4.5382 18.9383C3.83415 18.2125 3.81915 17.1084 4.50326 16.3661Z"/><path d="M16 20L24 29L32 20"/>';

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

module.exports = VipOne;
