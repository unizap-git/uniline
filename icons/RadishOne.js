'use strict';

var React = require('react');

function RadishOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,7.5c1.1.3,2,.8,2,2s-1.5,1.5-2.5,1.5"/>   <path d="M13,5c0-1.5.9-2.5,2-2.5s1.5.3,2,1.5"/>   <path d="M15.5,6s.5-1.1,1.1-1.5c.9-.6,2.2-.7,2.9,0,.8.8.8,2.1,0,2.9-.8.8-1.4,1.1-1.4,1.1"/>   <path d="M17.5,6.6c-1.9-1.9-4.1-2.9-6.6-2.9s-4.9.9-6.7,2.6c-2,2-2.9,4.8-2.7,7.4,0-.4.4-.6.8-.7,1.1-.2,3.5,0,4.6,2,.2.5,0,1.1-.4,1.3-.1,0-.3.1-.4.1-.4,0-.7-.2-.9-.6-.6-1.3-2.3-1-2.4-1-.4,0-.8-.1-1.1-.5.1.8.3,1.5.6,2.2-.8,4.2-.2,4.8,0,5,.3.3.8.9,5,0,1.1.5,2.4.8,3.6.8,2.5,0,5-1,6.8-2.8,1.7-1.7,2.6-4,2.6-6.6s-.9-4.6-2.8-6.5ZM10,21.2c-.1.5-.5.8-1,.8s-.2,0-.2,0c-.5-.1-.9-.7-.7-1.2.1-.5.2-1.6-.2-2.1-.4-.4-.4-1,0-1.4s1-.4,1.4,0c1.4,1.4.8,3.7.8,3.9Z"/>   <path d="M10.9,21.5c-1.2,0-2.4-.3-3.5-.8"/>   <path d="M3.3,16.6c-1.5-3.1-.8-7,1.7-9.6"/>' : '<path d="M39 15C41.1831 15.5549 43 16.5 43 19C43 21.5 40 22 38 22"/><path d="M26 10C26 7 27.7487 5 30 5C32 5 33.048 5.61995 34 8"/><path d="M31 11.9999C31 11.9999 31.9511 9.86821 33.1227 9.08969C34.9926 7.84723 37.5 7.71826 38.8715 9.08969C40.4633 10.6815 40.4633 13.2466 38.8715 14.8384C37.2796 16.4302 35.9971 16.9999 35.9971 16.9999"/><path d="M10.0009 13.9999C4.91623 19.0846 3.58302 26.9134 6.58928 33.1033C6.58928 33.1033 5.00095 40.9999 6.00095 41.9999C7.00095 42.9999 14.8622 41.4081 14.8622 41.4081C17.0725 42.4677 19.4148 42.9999 21.8025 42.9999C26.1362 42.9999 30.7718 41.1471 34.0009 37.9999C37.1846 34.8162 38.6075 30.702 38.6075 26.2358C38.6075 21.7287 37.0005 17.9999 33.6547 14.5246C30.3089 11.0492 26.4006 9.3125 21.8889 9.3125C17.3818 9.3125 13.1846 10.8162 10.0009 13.9999Z"/><path d="M5 27.9998C5 27.9998 10 26.9998 12 30.9998"/><path d="M18 42C18 42 19 38 17 36"/><path d="M21.8026 43C19.4149 43 17.0727 42.4679 14.8623 41.4082"/><path d="M6.58928 33.1034C3.58302 26.9136 4.91623 19.0847 10.0009 14"/>';

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

module.exports = RadishOne;
