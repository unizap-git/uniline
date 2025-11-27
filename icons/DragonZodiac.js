'use strict';

var React = require('react');

function DragonZodiac(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-523c295674adb72)"><path d="M34.0214 42.4943L37.7612 38.7545C40.1043 36.4113 40.1043 32.6123 37.7612 30.2692V30.2692C35.418 27.926 31.6191 27.926 29.2759 30.2692L27.0449 32.5002"/><path d="M17.0746 25.5002L23.6191 18.9556C25.9623 16.6125 25.9623 12.8135 23.6191 10.4704V10.4704C21.276 8.12722 17.477 8.12722 15.1338 10.4704L8.06276 17.5414"/><path d="M17.0748 25.5002L8.76957 33.8055C6.42642 36.1486 6.42642 39.9476 8.76957 42.2907V42.2907C11.1127 44.6339 14.9117 44.6339 17.2548 42.2907L27.0211 32.5245"/><path d="M13 11.9999V3.99988"/><path d="M38 30L43 25"/></g><defs><clipPath id="icon-523c295674adb72"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-523c295674adb72)"><path d="M34.0214 42.4943L37.7612 38.7545C40.1043 36.4113 40.1043 32.6123 37.7612 30.2692V30.2692C35.418 27.926 31.6191 27.926 29.2759 30.2692L27.0449 32.5002"/><path d="M17.0746 25.5002L23.6191 18.9556C25.9623 16.6125 25.9623 12.8135 23.6191 10.4704V10.4704C21.276 8.12722 17.477 8.12722 15.1338 10.4704L8.06276 17.5414"/><path d="M17.0748 25.5002L8.76957 33.8055C6.42642 36.1486 6.42642 39.9476 8.76957 42.2907V42.2907C11.1127 44.6339 14.9117 44.6339 17.2548 42.2907L27.0211 32.5245"/><path d="M13 11.9999V3.99988"/><path d="M38 30L43 25"/></g><defs><clipPath id="icon-523c295674adb72"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = DragonZodiac;
