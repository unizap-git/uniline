'use strict';

var React = require('react');

function CubesStacked(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11.5039 3.13176c.3074-.17568.6848-.17568.9923 0l3.5554 2.0317L12 7.42604 7.94841 5.16346l3.55549-2.0317Zm-4.50388 3.7928L7 10.2768l-3.15822 1.8047 4.14118 2.205L11 12.5625V9.15832L7.00002 6.92456ZM3 13.8991v3.8152c0 .3588.19229.6902.50386.8682l3.49615 1.9978V16.029L3 13.8991Zm6.00001 6.6812L12 18.866l3 1.7143v-4.5714l-3-1.7143-2.99999 1.7142v4.5715Zm7.99999 0 3.4961-1.9978c.3116-.178.5039-.5094.5039-.8682v-3.8152l-4 2.1299v4.5513Zm3.1582-8.4988L17 10.2768V6.92457l-4 2.23375v3.40418l3.0171 1.724 4.1411-2.205Z"/>' : '<path d="M15,21.4l9,5.1M15,21.4l-9,5.1M15,21.4v-10.3M24,26.6v10.3M24,26.6l-9,5.1M24,26.6l9-5.1M24,26.6v-10.3M24,26.6l9,5.1M24,36.9l-9,5.1M24,36.9l9,5.1M15,42l-9-5.1v-10.3M15,42v-10.3M6,26.6l9,5.1M33,11.1l-9-5.1-9,5.1M33,11.1v10.3M33,11.1l-9,5.1M33,21.4l9,5.1M15,11.1l9,5.1M42,26.6v10.3l-9,5.1M42,26.6l-9,5.1M33,42v-10.3"/>';

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

module.exports = CubesStacked;
