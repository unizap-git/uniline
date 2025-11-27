'use strict';

var React = require('react');

function MicroSlrCamera(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="4" y="4.5" width="4.5" height="2.5"/>   <path d="M22,9.1v-2.1c0-.6-.4-1-1-1h-2.1c-2.4-1.3-5.4-1.3-7.8,0H2c-.6,0-1,.4-1,1v12c0,.6.4,1,1,1h9.1c1.2.7,2.5,1,3.9,1s2.7-.3,3.9-1h2.1c.6,0,1-.4,1-1v-2.1c.7-1.2,1-2.5,1-3.9s-.3-2.7-1-3.9ZM6,15c0,.6-.4,1-1,1s-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4ZM13,13c0,.6-.4,1-1,1s-1-.4-1-1c0-2.2,1.8-4,4-4s1,.4,1,1-.4,1-1,1c-1.1,0-2,.9-2,2ZM15,17c-.6,0-1-.4-1-1s.4-1,1-1c1.1,0,2-.9,2-2s.4-1,1-1,1,.4,1,1c0,2.2-1.8,4-4,4Z"/>' : '<path d="M44 26C44 28.6393 43.2696 31.1081 42 33.2152C40.8198 35.1737 39.1737 36.8198 37.2152 38C35.1081 39.2696 32.6393 40 30 40C27.3607 40 24.8919 39.2696 22.7848 38C18.7192 35.5502 16 31.0927 16 26C16 20.9073 18.7192 16.4498 22.7848 14C24.8919 12.7304 27.3607 12 30 12C32.6393 12 35.1081 12.7304 37.2152 14C39.1737 15.1802 40.8198 16.8263 42 18.7848C43.2696 20.8919 44 23.3607 44 26Z"/><path d="M4 14V38H22.7848C18.7192 35.5502 16 31.0927 16 26C16 20.9073 18.7192 16.4498 22.7848 14H4Z"/><path d="M37.2152 14C35.1081 12.7304 32.6393 12 30 12C27.3607 12 24.8919 12.7304 22.7848 14M37.2152 14H42V18.7848M37.2152 14C39.1737 15.1802 40.8198 16.8263 42 18.7848M22.7848 14H4V38H22.7848M22.7848 14C18.7192 16.4498 16 20.9073 16 26C16 31.0927 18.7192 35.5502 22.7848 38M37.2152 38C35.1081 39.2696 32.6393 40 30 40C27.3607 40 24.8919 39.2696 22.7848 38M37.2152 38H42V33.2152M37.2152 38C39.1737 36.8198 40.8198 35.1737 42 33.2152M42 18.7848C43.2696 20.8919 44 23.3607 44 26C44 28.6393 43.2696 31.1081 42 33.2152"/><rect x="8" y="9" width="9" height="5"/><path d="M10 22V30"/><path d="M36 26C36 29.3137 33.3137 32 30 32M24 26C24 22.6863 26.6863 20 30 20"/>';

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

module.exports = MicroSlrCamera;
