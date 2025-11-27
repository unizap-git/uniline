'use strict';

var React = require('react');

function AlarmClock(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,2.8C6.4,2.8,1.8,7.4,1.8,13s4.6,10.2,10.2,10.2,10.2-4.6,10.2-10.2S17.6,2.8,12,2.8ZM16.5,17.8c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-3.9-3.9c-.2-.2-.3-.4-.3-.7v-5.5c0-.6.4-1,1-1s1,.4,1,1v5.1s3.6,3.6,3.6,3.6c.4.4.4,1,0,1.4Z"/>   <path d="M2,4.5l3.5-2.5"/>   <path d="M22,4.5l-3.5-2.5"/>' : '<path d="M23.9998 44.3332C34.1251 44.3332 42.3332 36.1251 42.3332 25.9999C42.3332 15.8747 34.1251 7.66656 23.9998 7.66656C13.8746 7.66656 5.6665 15.8747 5.6665 25.9999C5.6665 36.1251 13.8746 44.3332 23.9998 44.3332Z"/><path d="M23.7594 15.3536L23.7582 26.3624L31.5305 34.1347"/><path d="M4 9.00001L11 4.00001"/><path d="M44 9.00001L37 4.00001"/>';

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

module.exports = AlarmClock;
