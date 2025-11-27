'use strict';

var React = require('react');

function MedicineBottleOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6.5,3.5c0-.8.7-1.5,1.5-1.5h8c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5h-8c-.8,0-1.5-.7-1.5-1.5Z"/>   <path d="M20.4,10.7l-2.2-2.8c-.5-.6-1.2-.9-1.9-.9H7.7c-.8,0-1.5.3-1.9.9l-2.2,2.8c-.4.4-.6,1-.6,1.6v8.2c0,1.4,1.1,2.5,2.5,2.5h13c1.4,0,2.5-1.1,2.5-2.5v-8.2c0-.6-.2-1.1-.6-1.6ZM15,16h-2v2c0,.6-.4,1-1,1s-1-.4-1-1v-2h-2c-.6,0-1-.4-1-1s.4-1,1-1h2v-2c0-.6.4-1,1-1s1,.4,1,1v2h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M13 7C13 5.34315 14.3431 4 16 4H32C33.6569 4 35 5.34315 35 7C35 8.65685 33.6569 10 32 10H16C14.3431 10 13 8.65685 13 7Z"/><path d="M13.0993 17.1208C13.6688 16.4122 14.5288 16 15.4379 16H32.5621C33.4712 16 34.3312 16.4122 34.9007 17.1208L39.3385 22.6435C39.7666 23.1763 40 23.8392 40 24.5227V41C40 42.6569 38.6569 44 37 44H11C9.34315 44 8 42.6569 8 41V24.5227C8 23.8392 8.23337 23.1763 8.66147 22.6435L13.0993 17.1208Z"/><path d="M18 30L30 30"/><path d="M24 24V36"/>';

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

module.exports = MedicineBottleOne;
