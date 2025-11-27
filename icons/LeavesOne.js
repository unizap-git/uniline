'use strict';

var React = require('react');

function LeavesOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M11,18V2c0-.3.1-.5.3-.7,0,0,0,0,0,0-.7.7-6.8,7-6.8,10.6s3.4,7.1,7.5,7.1c-.6,0-1-.4-1-1Z"/>     <path d="M12.7,1.3s0,0,0,0c.2.2.3.4.3.7v16c0,.6-.4,1-1,1,4.1,0,7.5-3.2,7.5-7.1S13.4,2,12.7,1.3Z"/>   </g>   <path d="M12,23c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4c0,.6-.4,1-1,1Z"/>   <path d="M12,19c-4.1,0-7.5-3.2-7.5-7.1h2c0,2.8,2.5,5.1,5.5,5.1s5.5-2.3,5.5-5.1h2c0,3.9-3.4,7.1-7.5,7.1Z"/>   <path d="M19.5,11.9h-2c0-1.9-3.1-5.9-5.5-8.5-2.4,2.5-5.5,6.6-5.5,8.5h-2c0-3.7,6.1-9.9,6.8-10.6.4-.4,1-.4,1.4,0,.7.7,6.8,7,6.8,10.6Z"/>' : '<path d="M37 23.8788C37 30.5731 31.1797 36 24 36C16.8203 36 11 30.5731 11 23.8788C11 17.1844 24 4 24 4C24 4 37 17.1844 37 23.8788Z"/><path d="M24 4V36"/><path d="M24 36V44"/><path d="M37 23.8789C37 30.5733 31.1797 36.0001 24 36.0001C16.8203 36.0001 11 30.5733 11 23.8789"/><path d="M37 23.8788C37 17.1844 24 4 24 4C24 4 11 17.1844 11 23.8788"/>';

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

module.exports = LeavesOne;
