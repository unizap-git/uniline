'use strict';

var React = require('react');

function WaterBottle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9 3c0-.55228.44772-1 1-1h5c.5523 0 1 .44772 1 1v2c0 .55228-.4477 1-1 1h-5c-.55228 0-1-.44772-1-1V3Zm-.12662 5c-.79243.57264-1.76284 1.55553-1.86463 3H17.9913c-.1018-1.44447-1.0723-2.42736-1.8647-3H8.87338Zm8.88162 5H7.24496c.15128.4553.35264.7798.54427 1.0396.05399.0733.09613.1308.12882.1755l.04722.0644c-.03725.0584-.08278.1174-.15764.2145-.02941.0382-.06333.0822-.10306.1343-.22586.2965-.54312.7403-.6595 1.3717H17.9549c-.1163-.6314-.4336-1.0752-.6595-1.3717-.0397-.0521-.0736-.0961-.103-.1343-.0749-.0971-.1204-.1562-.1577-.2145l.0472-.0644c.0327-.0446.0749-.1022.1289-.1755.1916-.2598.393-.5843.5442-1.0396ZM18 18H7v1c0 1.611 1.57732 3 3.5 3 .8707 0 1.5288-.2471 2-.5549.4712.3078 1.1293.5549 2 .5549 1.9227 0 3.5-1.389 3.5-3v-1Z"/>' : '<path d="M21.5,12v4s-6,2-6,6.5,2,4.5,2,6-2,2.3-2,4.5v5c0,1.9,2,4,5,4s4-1.9,4-1.9c0,0,1,1.9,4,1.9s5-2.1,5-4v-5c0-2.3-2-3-2-4.5s2-1.5,2-6-6-6.5-6-6.5v-4M21.5,12h-2v-6h10v6h-2M21.5,12h6M15.6,24h17.8M15.5,34h18"/>';

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

module.exports = WaterBottle;
