'use strict';

var React = require('react');

function VolumeMute(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect opacity="0.01" x="30" y="18" width="13" height="13"/><mask id="icon-9fa2260e6a0e536" maskUnits="userSpaceOnUse" x="30" y="18" width="13" height="13" style="mask-type: alpha"><rect x="30" y="18" width="13" height="13"/></mask><g mask="url(#icon-9fa2260e6a0e536)"><path d="M40.7348 20.2858L32.2495 28.7711"/><path d="M32.2496 20.2858L40.7349 28.7711"/></g><path d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z"/>' : '<g>     <path d="M41.2,20.3l-8.3,8.3"/>     <path d="M32.9,20.3l8.3,8.3"/>   </g>   <path d="M24.8,6.3v35.4c-6.9,0-12-9-12-9h-5.7c-1.1,0-2-.9-2-2v-13.6c0-1.1.9-2,2-2h5.7s5.1-8.9,12-8.9Z"/>';

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

module.exports = VolumeMute;
