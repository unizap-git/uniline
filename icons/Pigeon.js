'use strict';

var React = require('react');

function Pigeon(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7,13c-.5-.9-1.1-2.8,1-5.1.6-.6,1.4-1.3,2.9-1.7,1.6-.7,2.3-1.9,1.3-3.7.8.5,2.3,2.3,2.3,5.9"/>   <path d="M21.8,13c-.6-.3-1.2-.2-1.8.2,0,0,0,0-.1.1-2.1,2.5-3.2,3-3.5,3-.1,0-.2,0-.3,0,3.1-3.1,3.2-8.9,2.7-11.9,0-.4-.4-.8-.9-.8-.5,0-.9.2-1,.6-1.1,2.6-2.9,3.6-3.4,3.8-4.1,1.1-5.8,3-6.2,4.6-1.6-.5-2.8-.2-3.5.2-1.7.9-2.5,2.7-2.7,4,0,.3,0,.6.2.8.2.2.5.3.8.3,1.7,0,3.7,1.3,4.6,2.5,2.2,2.8,5.6,2.2,7.1,1.5,2.1-1.1,3.3-1.4,3.8-1.5.4,1.8,1.4,2.1,1.8,2.1,0,0,.2,0,.3,0,.7,0,1.3-.2,1.8-.7,1.3-1.1,1.5-3.1,1.5-3.4.3-3.2,0-4.9-1.1-5.5ZM6,16.7c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M13.9995 26C12.9602 24.2074 11.8506 20.4489 16.008 15.7556C17.2206 14.6148 18.8143 13.1156 21.7244 12.3333C24.8424 10.8667 26.4014 8.52 24.3227 5C25.8817 5.97778 28.9997 9.69333 28.9997 16.7333"/><path d="M16.2527 27.9296C8 23.5714 4.51053 30.1954 4 33.7547C8 33.7547 12.679 36.6663 14.7211 39.5785C18.3969 44.238 24.0807 43.1379 26.4632 42.0053C33.8148 38.1223 36.3334 38.4459 36.6737 39.0931C37.0822 42.1995 38.2053 42.9761 38.7159 42.9761C42.3917 43.3644 43.651 38.9313 43.8211 36.6662C44.638 27.3471 42.4597 26.9588 41.2685 27.9296C36.3674 33.7541 33.4404 34.8866 32.5895 34.7247C28.9137 33.9481 29.3562 32.4597 30.0369 31.8125C36.5716 26.3763 36.5036 14.3391 35.6527 9C33.2022 14.8245 29.186 17.2513 27.4843 17.7367C17.2737 20.4548 15.7421 25.6645 16.2527 27.9296Z"/><circle cx="12" cy="31.4121" r="2"/>';

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

module.exports = Pigeon;
