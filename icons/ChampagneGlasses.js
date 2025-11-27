'use strict';

var React = require('react');

function ChampagneGlasses(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M17.6647 3.69423c-.0811-.25251-.2591-.46247-.495-.58368-.2359-.12121-.5103-.14375-.7628-.06265l-5.7127 1.83462c-.1263.04057-.2389.10389-.3349.18397C10.2478 5.02354 10.1266 5 10 5H4c-.55228 0-1 .44772-1 1v6c0 1.8638 1.27477 3.4299 3 3.874V19H5c-.55228 0-1 .4477-1 1s.44772 1 1 1h4c.55228 0 1-.4477 1-1s-.44772-1-1-1H8v-3.126c1.72523-.4441 3-2.0102 3-3.874V9.10505l.8825 2.74795c.5699 1.7746 2.2625 2.8759 4.0409 2.7712l.9558 2.9763-.9521.3057c-.5258.1689-.8152.7321-.6463 1.2579.1689.5258.732.8152 1.2579.6463l3.8084-1.2231c.5258-.1688.8152-.732.6463-1.2578-.1688-.5259-.732-.8152-1.2578-.6464l-.9522.3058-.9558-2.9763c1.5068-.9503 2.2417-2.8312 1.6718-4.60574l-1.8347-5.71263ZM9 7v1H5V7h4Zm7.0663-1.74212.3058.9521-3.8085 1.22309-.3057-.95211 3.8084-1.22308Z" clip-rule="evenodd"/>' : '<path d="M12.7,30.8c3.7,0,6.8-3,6.8-6.8v-13.5H6v13.5c0,3.7,3,6.8,6.8,6.8ZM12.7,30.8v11.2M8.2,42h9M6,17.2h13.5M34.3,27.3c3.5-1.1,5.5-4.9,4.4-8.5l-4.1-12.9-12.9,4.1,4.1,12.9c1.1,3.5,4.9,5.5,8.5,4.4ZM34.3,27.3l3.4,10.7M33.5,39.4l8.6-2.8M23.8,16.6l12.9-4.1"/>';

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

module.exports = ChampagneGlasses;
