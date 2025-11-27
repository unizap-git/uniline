'use strict';

var React = require('react');

function Train(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.5,20H5.5c-1.1,0-2-.9-2-2V4.4c0-.9.5-1.6,1.2-2,1.1-.5,3.4-1.4,7.3-1.4s6.3.9,7.3,1.4c.7.4,1.2,1.1,1.2,2v13.6c0,1.1-.9,2-2,2ZM12,3c-3.5,0-5.5.8-6.4,1.2,0,0,0,.1,0,.2v13.6h13V4.4c0,0,0-.2,0-.2-.9-.4-2.9-1.2-6.4-1.2Z"/>   <path d="M17,19v2"/>   <path d="M7,19v2"/>   <path d="M10.2,16c0,.4-.3.8-.8.8s-.8-.3-.8-.8.3-.8.8-.8.8.3.8.8Z" stroke-miterlimit="2"/>   <path d="M15.2,16c0,.4-.3.8-.8.8s-.8-.3-.8-.8.3-.8.8-.8.8.3.8.8Z" stroke-miterlimit="2"/>   <path d="M10,22h4"/>   <g>     <path d="M19.5,5h-7.5c.6,0,1,.4,1,1v7c0,.6-.4,1-1,1h7.5c.6,0,1-.4,1-1v-7c0-.6-.4-1-1-1Z"/>     <path d="M11,13v-7c0-.6.4-1,1-1h-7.5c-.6,0-1,.4-1,1v7c0,.6.4,1,1,1h7.5c-.6,0-1-.4-1-1Z"/>   </g>   <path d="M10,6h4"/>   <path d="M10,13h4"/>' : '<path d="M9 8.83932C9 7.90724 9.43829 7.03279 10.2715 6.61502C12.2462 5.62486 16.6123 4 24 4C31.3877 4 35.7538 5.62486 37.7285 6.61502C38.5617 7.0328 39 7.90724 39 8.83932V36C39 37.1046 38.1046 38 37 38H11C9.89543 38 9 37.1046 9 36V8.83932Z"/><path d="M34 38V42"/><path d="M14 38V42"/><path d="M20.5 32C20.5 32.8284 19.8284 33.5 19 33.5C18.1716 33.5 17.5 32.8284 17.5 32C17.5 31.1716 18.1716 30.5 19 30.5C19.8284 30.5 20.5 31.1716 20.5 32Z"/><path d="M30.5 32C30.5 32.8284 29.8284 33.5 29 33.5C28.1716 33.5 27.5 32.8284 27.5 32C27.5 31.1716 28.1716 30.5 29 30.5C29.8284 30.5 30.5 31.1716 30.5 32Z"/><path d="M20 44L28 44"/><rect x="9" y="12" width="30" height="14"/><path d="M24 12V26"/><path d="M20 12L28 12"/><path d="M20 26L28 26"/>';

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

module.exports = Train;
