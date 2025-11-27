'use strict';

var React = require('react');

function FacialCleanser(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7.5,17v5h9v-5"/>   <g>     <path d="M12.2,8.4c-.3.6-.7,1.2-1.2,1.8-.2.2-.1.5,0,.8.2.4.7.8,1.1.8s1-.3,1.3-.7c0-.1.2-.4.1-.6-.2-.5-.7-1.3-1.2-2Z"/>     <path d="M19.8,2.5c-.8-1-2-1.5-3.8-1.5h-8c-2.2,0-3.3.8-3.8,1.6-1,1.3-.6,2.8-.5,3.2l3.1,12.2h10.5l.2-.7c0,0,2.3-8.9,2.9-11.5.3-1.2,0-2.4-.6-3.3ZM15,12.1c-.6,1-1.8,1.6-2.9,1.6s-2.3-.8-2.9-1.9c-.5-1-.3-2.1.3-2.9.7-.9,1.4-2.2,1.7-2.8.1-.3.4-.5.8-.6.3,0,.7,0,.9.4.6.7,2,2.7,2.5,3.8.3.8.2,1.7-.3,2.5Z"/>   </g>' : '<path d="M15 34V44H33V34"/><path d="M31.935 4.00006L15.9855 4.00006C9.04201 4.00006 8.51255 8.60541 9.24893 11.0399L14.9891 34H32.9312C32.9312 34 37.5745 16.1827 38.8188 11.0399C39.4079 8.60542 38.9097 3.98264 31.935 4.00006Z"/><path d="M20.4876 19.0909C22.1273 17.1458 23.3912 14.4588 24.0744 13C25.27 14.4588 27.8662 18.1184 28.686 20.0634C29.7109 22.4947 27.1488 25.4122 24.0744 25.4122C21 25.4122 18.4379 21.5222 20.4876 19.0909Z"/>';

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

module.exports = FacialCleanser;
