'use strict';

var React = require('react');

function PizzaSlice(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8.9884 3.21891c3.0076.24714 5.945 1.51873 8.2417 3.8154 2.269 2.26907 3.5376 5.16369 3.806 8.13349.1181 1.3063-.817 2.3512-1.9748 2.5974-.3781.0805-.7426.0766-1.0826.0053-.0526-.9449-.1322-1.9863-.2259-2.7243-.2666-2.0994-1.0578-3.9824-2.805-5.72956-1.7428-1.74283-3.6864-2.60074-5.82006-2.9026-.44367-.06276-1.6162-.18893-2.69208-.26801-.06233-.34562-.05329-.7147.04516-1.0954.2799-1.0824 1.27852-1.93272 2.50758-1.83172Z"/>   <path fill-rule="evenodd" d="M15.7687 15.2981c.0789.6213.1481 1.4924.1977 2.3181L4.6757 20.8741c-.34909.1007-.72534.0042-.98281-.2521-.25747-.2564-.35564-.6322-.25642-.9817L6.69176 8.17203c.89043.07337 1.79027.17058 2.15583.2223 1.73781.24585 3.27301.92348 4.68601 2.33657 1.4054 1.4054 2.0192 2.8665 2.2351 4.5672Zm-4.3548-4.5789c-.0238-.5518-.4904-.97977-1.0422-.95597-.55178.02381-.97978.49037-.95598 1.04217l.00047.0108c.0238.5518.4904.9798 1.04221.956.5517-.0238.9797-.4904.9559-1.0422l-.0004-.0108Zm3.0873 3.0873c-.0238-.5518-.4904-.9798-1.0422-.956-.5518.0238-.9798.4904-.956 1.0422l.0005.0108c.0238.5518.4903.9798 1.0421.956.5518-.0238.9798-.4904.956-1.0421l-.0004-.0109Zm-4.58671 1.4994c-.02377-.5517-.49034-.9798-1.04211-.956-.55177.0238-.9798.4903-.95603 1.0421l.00046.0108c.02377.5518.49034.9798 1.04211.9561.55178-.0238.97981-.4904.95604-1.0421l-.00047-.0109Z" clip-rule="evenodd"/>' : '<defs>     <clipPath id="clippath">       <rect x="6" y="6" width="36" height="36"/>     </clipPath>   </defs>   <g clip-path="url(#clippath)">     <path d="M21.6,22.1h0M26.3,26.8h0M19.4,29h0M18.1,16.4l-5.5,19.5,19.4-5.6M30.8,17.6c3.1,3.1,4.9,7.2,5.3,11.3.1,1.1-.7,2.1-1.8,2.3-1.5.3-2.9-.9-3.1-2.4-.4-2.8-1.4-5.4-3.8-7.7-2.4-2.4-5-3.5-7.9-3.9-1.5-.2-2.7-1.7-2.3-3.2.3-1,1.2-1.7,2.2-1.6,4.2.3,8.2,2.1,11.4,5.3Z"/>   </g>';

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

module.exports = PizzaSlice;
