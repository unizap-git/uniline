'use strict';

var React = require('react');

function FaceExplode(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.972 11.517a.527.527 0 0 0-1.034-.105 1.377 1.377 0 0 1-1.324 1.01 1.467 1.467 0 0 1-1.4-1.009.526.526 0 0 0-1.015 0 1.467 1.467 0 0 1-2.737.143l-.049-.204.021-.146V9.369h2.304a2.632 2.632 0 0 0 2.631-2.632 2.678 2.678 0 0 0-2.654-2.632l-.526.022-.13-.369A2.632 2.632 0 0 0 13.579 2c-.461 0-.915.124-1.313.358L12 2.513l-.266-.155A2.603 2.603 0 0 0 10.422 2a2.632 2.632 0 0 0-2.483 1.759l-.13.37-.518-.024a2.681 2.681 0 0 0-2.66 2.632A2.632 2.632 0 0 0 7.264 9.37H9.61v1.887l-.007.09-.028.08a1.328 1.328 0 0 1-1.301.996 1.632 1.632 0 0 1-1.502-1.024.526.526 0 0 0-1.01.013 1.474 1.474 0 0 1-1.404 1.01 1.381 1.381 0 0 1-1.325-1.01.547.547 0 0 0-.569-.382h-.008a.526.526 0 0 0-.456.526v.446a10.012 10.012 0 0 0 10 10 9.904 9.904 0 0 0 7.067-2.94A10.019 10.019 0 0 0 22 11.966l-.028-.449ZM8.316 15.685a1.053 1.053 0 1 1 2.105 0 1.053 1.053 0 0 1-2.105 0Zm1.58 3.684a2.105 2.105 0 0 1 4.21 0h-4.21Zm4.736-2.631a1.052 1.052 0 1 1 0-2.105 1.052 1.052 0 0 1 0 2.105Z"/>' : '<path d="M12,17c1.1,0,2,.9,2,2h-4c0-1.1.9-2,2-2Z" stroke-miterlimit="10"/>   <path d="M13.8,9h2.7c1.1,0,2-.9,2-2s-.9-2-2-2c-.4,0-.7,0-1.1.3,0,0,0-.2,0-.3,0-1.1-.9-2-2-2-.6,0-1.1.2-1.5.7-.7-.8-2-.9-2.8-.2-.4.4-.7.9-.7,1.5,0,0,0,.2,0,.3-.9-.6-2.2-.3-2.7.7-.6.9-.3,2.2.7,2.7.3.2.7.3,1.1.3h3.4M13.8,8v3.6M10.2,9v2.6M21,11.6c-.2.8-.9,1.3-1.7,1.3-.8,0-1.6-.5-1.8-1.3-.3,1-1.4,1.6-2.4,1.2-.6-.2-1-.6-1.2-1.2-.2.8-.9,1.3-1.7,1.3-.8,0-1.6-.5-1.9-1.3-.2.8-.9,1.3-1.7,1.3-.8,0-1.6-.5-1.9-1.3-.3.8-1,1.3-1.8,1.3-.8,0-1.5-.5-1.7-1.3v.4c0,5,4,9,9,9s9-4,9-9c0,0,0-.4,0-.4ZM15.3,16c0,.2-.1.3-.3.3s-.3-.1-.3-.3.1-.3.3-.3.3.1.3.3ZM9.1,16c0,.2-.1.3-.3.3s-.3-.1-.3-.3.1-.3.3-.3.3.1.3.3Z"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = FaceExplode;
