;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-dingwei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M787.658752 340.26496c0-152.02304-123.31008-275.28192-275.310592-275.28192-152.044544 0-275.3536 123.25888-275.3536 275.28192 0 50.190336 13.705216 97.127424 37.085184 137.65632l-0.206848 0 238.368768 481.788928 238.507008-481.788928-0.275456 0C773.9904 437.392384 787.658752 390.455296 787.658752 340.26496zM512.310272 421.98016c-63.85664 0-115.657728-51.7632-115.657728-115.61984 0-63.893504 51.801088-115.69152 115.657728-115.69152 63.926272 0 115.687424 51.79904 115.687424 115.69152C627.997696 370.21696 576.236544 421.98016 512.310272 421.98016z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M334.792596 193.026672c-112.231356 50.208765-180.160861 168.347034-165.393577 289.43876 20.674197 191.974688 225.93944 308.636229 401.670116 230.369626l72.35969-32.488024 93.033887 93.033887c72.35969 72.35969 95.987344 88.603702 110.754628 73.836418 14.767284-14.767284-1.476728-38.394938-75.313147-112.231356l-93.033887-93.033887 31.011296-57.592406c33.964752-63.49932 41.348394-169.823762 14.767284-237.753267-54.63895-144.71938-245.136909-220.032527-389.856289-153.57975zm222.985984 44.301851c91.557159 41.348394 131.428825 107.801171 131.428825 215.602342 0 109.277899-41.348394 174.253948-137.335738 217.07907-91.557159 41.348394-178.684133 26.581111-255.474008-42.825123-126.99864-115.184813-101.894257-311.589686 50.208765-386.902833 76.789875-38.394938 132.905553-38.394938 211.172157-2.953457z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-down" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M932.505681 339.907527 528.767384 685.676551c-1.358951 1.181919-2.817162 2.199085-4.349051 3.048429-0.095167 0.053212-0.191358 0.100284-0.286526 0.151449-0.265036 0.143263-0.531096 0.284479-0.799202 0.417509-0.185218 0.092098-0.37146 0.174985-0.558725 0.261966-0.182149 0.083911-0.363274 0.171915-0.547469 0.251733-0.25378 0.110517-0.509606 0.211824-0.76441 0.314155-0.121773 0.048095-0.2415 0.100284-0.363274 0.146333-0.300852 0.113587-0.602727 0.220011-0.906649 0.321318-0.081864 0.027629-0.161682 0.058328-0.243547 0.083911-0.328481 0.107447-0.660032 0.205685-0.99056 0.298805-0.061398 0.017396-0.121773 0.036839-0.183172 0.053212-0.336668 0.092098-0.675382 0.174985-1.01512 0.25378-0.061398 0.014326-0.12075 0.029676-0.182149 0.042979-0.329505 0.072655-0.661056 0.137123-0.992607 0.197498-0.074701 0.013303-0.149403 0.028653-0.224104 0.041956-0.311085 0.053212-0.621147 0.098237-0.933255 0.140193-0.100284 0.013303-0.199545 0.028653-0.300852 0.041956-0.279363 0.033769-0.560772 0.060375-0.841158 0.084934-0.1361 0.01228-0.271176 0.026606-0.405229 0.036839-0.242524 0.017396-0.48607 0.027629-0.728594 0.038886-0.176009 0.008186-0.352017 0.01842-0.528026 0.021489-0.201591 0.005117-0.404206 0.004093-0.606821 0.004093-0.216941 0-0.433882 0.001023-0.650823-0.004093-0.159636-0.004093-0.320295-0.014326-0.480954-0.020466-0.258896-0.01228-0.517793-0.022513-0.775666-0.041956-0.118704-0.00921-0.237407-0.021489-0.356111-0.031722-0.297782-0.025583-0.594541-0.054235-0.8913-0.090051-0.084934-0.011256-0.169869-0.023536-0.254803-0.035816-0.326435-0.044002-0.652869-0.090051-0.977257-0.146333-0.061398-0.011256-0.12075-0.023536-0.182149-0.034792-0.345877-0.062422-0.690732-0.128937-1.034563-0.205685-0.047072-0.011256-0.094144-0.022513-0.140193-0.032746-0.353041-0.080841-0.704035-0.167822-1.052982-0.264013-0.052189-0.014326-0.104377-0.029676-0.155543-0.044002-0.339738-0.096191-0.679475-0.196475-1.016143-0.306992-0.073678-0.023536-0.147356-0.051165-0.220011-0.075725-0.312108-0.105401-0.62217-0.212848-0.930185-0.329505-0.11461-0.042979-0.227174-0.092098-0.340761-0.137123-0.26299-0.104377-0.527003-0.208754-0.786922-0.321318-0.178055-0.077771-0.354064-0.163729-0.531096-0.245593-0.192382-0.088004-0.384763-0.173962-0.575098-0.26913-0.267083-0.132006-0.531096-0.273223-0.794086-0.414439-0.096191-0.052189-0.193405-0.100284-0.288572-0.153496-1.531889-0.849344-2.989077-1.865487-4.348028-3.047406L91.493296 339.907527c-10.731412-9.190313-11.980869-25.341155-2.790556-36.071543 5.060249-5.90857 12.228509-8.94165 19.442818-8.94165 5.887081 0 11.805884 2.022053 16.628726 6.152117L511.999488 632.67236 899.22367 301.046451c4.822842-4.130064 10.739599-6.152117 16.628726-6.152117 7.213285 0 14.383592 3.034103 19.442818 8.94165C944.48655 314.567395 943.237093 330.717214 932.505681 339.907527z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shopcart" viewBox="0 0 1123 1024">' +
    '' +
    '<path d="M879.38159 704.240578 351.447904 704.240578c-12.300337 0-22.861108-8.858217-25.081831-21.066024L222.319036 97.027084 105.817446 97.027084c-14.095422 0-25.513639-11.523084-25.513639-25.711036 0-14.200289 11.418217-25.711036 25.513639-25.711036l137.746506 0c12.306506 0 22.867277 8.858217 25.081831 21.053687l104.053205 586.153639 506.682602 0c14.083084 0 25.50747 11.516916 25.50747 25.723373C904.895229 692.729831 893.470843 704.240578 879.38159 704.240578L879.38159 704.240578zM846.57041 552.848964 333.96588 552.848964c-14.089253 0-25.50747-11.529253-25.50747-25.717205 0-14.19412 11.418217-25.717205 25.50747-25.717205l494.795566 0 102.276627-254.426988L378.047229 246.987566c-14.083084 0-25.501301-11.510747-25.501301-25.711036 0-14.19412 11.418217-25.711036 25.501301-25.711036l589.490892 0c8.33388 0 16.137253 4.108337 20.905639 10.98641 4.768386 6.878072 5.90959 15.674602 3.041157 23.576675l-120.967711 305.84906C866.840675 546.100434 857.279229 552.848964 846.57041 552.848964L846.57041 552.848964zM388.941108 959.888964c-55.882024 0-107.692723-47.424771-107.692723-103.769446 0-56.32 51.810699-102.128578 107.692723-102.128578 55.888193 0 99.772145 45.808578 99.772145 102.128578C488.707084 912.464193 444.829301 959.888964 388.941108 959.888964L388.941108 959.888964zM385.77041 805.406843c-27.759036 0-51.927904 22.743904-51.927904 50.712675 0 28.011952 22.583518 50.78053 50.342554 50.78053s51.927904-22.774747 51.927904-50.78053C436.112964 828.150747 413.529446 805.406843 385.77041 805.406843L385.77041 805.406843zM841.283855 958.309783c-55.882024 0-101.363663-45.851759-101.363663-102.196434 0-56.32 45.481639-102.128578 101.363663-102.128578 55.894361 0 101.382169 45.808578 101.382169 102.128578C942.666024 912.464193 897.178217 958.309783 841.283855 958.309783L841.283855 958.309783zM841.283855 805.406843c-27.759036 0-50.348723 22.743904-50.348723 50.712675 0 28.011952 22.583518 50.78053 50.348723 50.78053 27.777542 0 50.36106-22.774747 50.36106-50.78053C891.644916 828.150747 869.055229 805.406843 841.283855 805.406843L841.283855 805.406843zM841.283855 805.406843"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)