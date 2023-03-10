import React, {Component} from 'react';
import './Illustration.scss';

class Illustration extends Component {
    render() {
        var currentWord = this.props.currentWord;
        var show = this.props.show;
        // console.log(currentWord);

        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1920 819.81">
                <defs>
                    {/* scalable icon */}
                    <filter id="a" x="0" y="0" width="86.85" height="88.545" filterUnits="userSpaceOnUse">
                        <feOffset dy="8" input="SourceAlpha" />
                        <feGaussianBlur stdDeviation="6" result="b" />
                        <feFlood floodColor="#ff7171" floodOpacity="0.251" />
                        <feComposite operator="in" in2="b" />
                        <feComposite in="SourceGraphic" />
                    </filter>

                    {/* Profissional icon */}
                    <filter id="d" x="0" y="0" width="86.85" height="88.545" filterUnits="userSpaceOnUse">
                        <feOffset dy="8" input="SourceAlpha" /><feGaussianBlur stdDeviation="6" result="b" />
                        <feFlood floodColor="#3483e5" floodOpacity="0.251" />
                        <feComposite operator="in" in2="b" />
                        <feComposite in="SourceGraphic" />
                    </filter>

                    {/* Profitable icon */}
                    <filter id="m" x="0" y="0" width="86.85" height="88.545" filterUnits="userSpaceOnUse">
                        <feOffset dy="8" input="SourceAlpha" />
                        <feGaussianBlur stdDeviation="6" result="b" />
                        <feFlood floodColor="#18f0a9" floodOpacity="0.251" />
                        <feComposite operator="in" in2="b" />
                        <feComposite in="SourceGraphic" />
                    </filter>

                    {/* Addictive icon */}
                    <filter id="n" x="0" y="0" width="86.85" height="88.545" filterUnits="userSpaceOnUse">
                        <feOffset dy="8" input="SourceAlpha" />
                        <feGaussianBlur stdDeviation="6" result="b" />
                        <feFlood floodColor="#6e18e9" floodOpacity="0.251" />
                        <feComposite operator="in" in2="b" />
                        <feComposite in="SourceGraphic" />
                    </filter>
                    <linearGradient id="linear-gradient" x1="904.5" y1="578.66" x2="904.5"
                        y2="339.66" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#f3f8ff" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-2" x1="1402.49" y1="608.66" x2="1402.49"
                        y2="56.66" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#eaf2ff" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-3" x1="447.95" y1="465.71" x2="447.95"
                        xlinkHref="#linear-gradient-2" />
                    <linearGradient id="linear-gradient-4" x1="1213.5" y1="578.66" x2="1213.5"
                        y2="327.39" xlinkHref="#linear-gradient-2" />
                    <linearGradient id="linear-gradient-5" x1="987" y1="578.66" x2="987" y2="300.66"
                        xlinkHref="#linear-gradient-2" />
                    <linearGradient id="linear-gradient-6" x1="597.5" y1="578.66" x2="597.5"
                        y2="276.08" xlinkHref="#linear-gradient-2" />
                    <linearGradient id="linear-gradient-7" x1="276.46" y1="578.72" x2="276.46"
                        y2="113.13" xlinkHref="#linear-gradient-2" />
                    <linearGradient id="linear-gradient-8" x1="1729.25" y1="608.66" x2="1729.25"
                        y2="106.66" xlinkHref="#linear-gradient-2" />
                    <linearGradient id="linear-gradient-9" x1="1410" y1="578.66" x2="1410"
                        y2="265.66" xlinkHref="#linear-gradient" />
                    <radialGradient id="radial-gradient" cx="853.12" cy="657.51" r="1088.94"
                        gradientTransform="matrix(.73 0 0 .16 -136.56 495.94)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#eaf2ff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="radial-gradient-2" cx="880.15" cy="657.51" r="1088.94"
                        gradientTransform="matrix(1.18 0 0 .16 -168.59 495.94)" xlinkHref="#radial-gradient"
                    />
                    <radialGradient id="radial-gradient-3" cx="1039.29" cy="657.51" r="1088.94"
                        gradientTransform="matrix(1.18 0 0 .16 -168.59 495.94)" xlinkHref="#radial-gradient"
                    />
                    <radialGradient id="radial-gradient-4" cx="853.12" cy="732.66" r="1088.94"
                        gradientTransform="matrix(.73 0 0 .16 -136.56 559.07)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#a2b5d2" stopOpacity="0.4" />
                        <stop offset="0.1" stopColor="#afbfd8" stopOpacity="0.35" />
                        <stop offset="0.49" stopColor="#dae2ed" stopOpacity="0.16" />
                        <stop offset="0.81" stopColor="#f5f7fa" stopOpacity="0.04" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="radial-gradient-5" cx="880.15" cy="732.66" r="1088.94"
                        gradientTransform="matrix(1.18 0 0 .16 -168.59 559.07)" xlinkHref="#radial-gradient-4"
                    />
                    <radialGradient id="radial-gradient-6" cx="1039.29" cy="732.66" r="1088.94"
                        gradientTransform="matrix(1.18 0 0 .16 -168.59 559.07)" xlinkHref="#radial-gradient-4"
                    />
                    <radialGradient id="radial-gradient-7" cx="1469.19" cy="579.16" r="1088.94"
                        gradientTransform="matrix(.87 0 0 .03 -342.59 619.98)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#a2b5d2" stopOpacity="0.4" />
                        <stop offset="0.1" stopColor="#adbed8" stopOpacity="0.35" />
                        <stop offset="0.49" stopColor="#d3dded" stopOpacity="0.16" />
                        <stop offset="0.81" stopColor="#eaf1fa" stopOpacity="0.04" />
                        <stop offset="1" stopColor="#f3f8ff" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="linear-gradient-10" x1="719.13" y1="681.09" x2="577.09"
                        y2="681.09" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-11" x1="960.29" y1="681.09" x2="1102.33"
                        y2="681.09" xlinkHref="#linear-gradient-10" />
                    <linearGradient id="linear-gradient-12" x1="449.5" y1="643.73" x2="542.22"
                        y2="643.73" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fff" stopOpacity="0" />
                        <stop offset="1" stopColor="#d9e1ed" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-13" x1="507.64" y1="254.08" x2="438.96"
                        y2="254.08" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fafcff" />
                        <stop offset="1" stopColor="#d9e1ed" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-14" x1="409.59" y1="254.08" x2="340.91"
                        y2="254.08" xlinkHref="#linear-gradient-13" />
                    <linearGradient id="linear-gradient-15" x1="315.36" y1="254.08" x2="246.68"
                        y2="254.08" xlinkHref="#linear-gradient-13" />
                    <linearGradient id="linear-gradient-16" x1="415.34" y1="377.51" x2="419.32"
                        y2="377.51" gradientTransform="matrix(-1 0 0 1 828.13 0)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#ffe3cd" />
                        <stop offset="1" stopColor="#eac1a4" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-17" x1="443.8" y1="366.65" x2="456.99"
                        y2="371.05" gradientTransform="matrix(-1 0 0 1 908.19 -56.34)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fff" stopOpacity="0" />
                        <stop offset="0.15" stopColor="#fff" stopOpacity="0.01" />
                        <stop offset="0.29" stopColor="#fff" stopOpacity="0.06" />
                        <stop offset="0.43" stopColor="#fff" stopOpacity="0.13" />
                        <stop offset="0.56" stopColor="#fff" stopOpacity="0.24" />
                        <stop offset="0.7" stopColor="#fff" stopOpacity="0.38" />
                        <stop offset="0.83" stopColor="#fff" stopOpacity="0.54" />
                        <stop offset="0.96" stopColor="#fff" stopOpacity="0.74" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0.8" />
                    </linearGradient>
                    <clipPath id="clip-path" transform="translate(0 -56.34)">
                        <path className="cls-1" d="M473.2 350.3a5.39 5.39 0 1 0 4.49-6.16 5.39 5.39 0 0 0-4.49 6.16z"
                        />
                    </clipPath>
                    <linearGradient id="linear-gradient-18" x1="578.72" y1="366.65" x2="591.91"
                        y2="371.05" gradientTransform="translate(-216.97 -56.34)" xlinkHref="#linear-gradient-17"
                    />
                    <clipPath id="clip-path-2" transform="translate(0 -56.34)">
                        <path className="cls-1" d="M353 350.3a5.39 5.39 0 1 1-4.49-6.16 5.39 5.39 0 0 1 4.49 6.16z"
                        />
                    </clipPath>
                    <linearGradient id="linear-gradient-19" x1="822.23" y1="578.7" x2="822.23"
                        y2="337.87" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fafcff" />
                        <stop offset="1" stopColor="#d5dff1" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-20" x1="384.48" y1="578.7" x2="384.48"
                        y2="217.8" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fafcff" />
                        <stop offset="0.5" stopColor="#eaf2ff" />
                        <stop offset="1" stopColor="#e3edff" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-21" x1="666.31" y1="483.04" x2="666.31"
                        y2="426.27" gradientTransform="translate(-.53 99.77)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fafcff" />
                        <stop offset="1" stopColor="#f3f8ff" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-22" x1="711.66" y1="409.3" x2="620.96"
                        y2="500.01" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-23" x1="623.72" y1="626.68" x2="623.72"
                        y2="611.5" gradientTransform="translate(-122.38 -107.26)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-24" x1="632.53" y1="610.28" x2="614.91"
                        y2="627.9" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-25" x1="623.72" y1="607.34" x2="623.72"
                        y2="592.17" gradientTransform="translate(-103.04 -87.93)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-26" x1="632.53" y1="590.94" x2="614.91"
                        y2="608.57" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-27" x1="648.95" y1="626.68" x2="648.95"
                        y2="611.5" gradientTransform="translate(-147.6 -82.03)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-28" x1="657.76" y1="610.28" x2="640.14"
                        y2="627.9" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-29" x1="648.95" y1="607.34" x2="648.95"
                        y2="592.17" gradientTransform="translate(-128.27 -62.7)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-30" x1="657.76" y1="590.94" x2="640.14"
                        y2="608.57" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-31" x1="511.55" y1="530.02" x2="511.55"
                        y2="497.73" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fafcff" stopOpacity="0" />
                        <stop offset="1" stopColor="#d9e1ed" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-32" x1="623.72" y1="889.75" x2="623.72"
                        y2="874.58" gradientTransform="translate(-385.45 -370.33)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-33" x1="632.53" y1="873.35" x2="614.91"
                        y2="890.97" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-34" x1="623.72" y1="870.41" x2="623.72"
                        y2="855.24" gradientTransform="translate(-366.11 -351)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-35" x1="632.53" y1="854.02" x2="614.91"
                        y2="871.64" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-36" x1="648.95" y1="889.75" x2="648.95"
                        y2="874.58" gradientTransform="translate(-410.68 -345.11)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-37" x1="657.76" y1="873.35" x2="640.14"
                        y2="890.97" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-38" x1="648.95" y1="870.41" x2="648.95"
                        y2="855.24" gradientTransform="translate(-391.34 -325.77)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-39" x1="657.76" y1="854.02" x2="640.14"
                        y2="871.64" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-40" x1="248.48" y1="530.02" x2="248.48"
                        y2="497.73" xlinkHref="#linear-gradient-31" />
                    <linearGradient id="linear-gradient-41" x1="267.23" y1="547.2" x2="267.23"
                        y2="565.38" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fafcff" />
                        <stop offset="1" stopColor="#eff5ff" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-42" x1="500.57" y1="547.2" x2="500.57"
                        y2="565.38" xlinkHref="#linear-gradient-41" />
                    <linearGradient id="linear-gradient-43" x1="1494.83" y1="578.6" x2="1494.83"
                        y2="258.04" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fafcff" />
                        <stop offset="1" stopColor="#e3edff" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-44" x1="1492.59" y1="632.34" x2="1492.59"
                        y2="322.97" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-45" x1="1345.06" y1="575.84" x2="1345.06"
                        y2="315.15" xlinkHref="#linear-gradient-19" />
                    <linearGradient id="linear-gradient-46" x1="675.45" y1="-0.62" x2="675.45"
                        y2="-52.21" gradientTransform="matrix(1 0 0 -1 604.69 537.15)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-47" x1="719.6" y1="-70.56" x2="631.31"
                        y2="17.72" gradientTransform="matrix(0 1 1 0 1306.57 -168.23)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-48" x1="675.45" y1="-200.68" x2="675.45"
                        y2="-252.27" gradientTransform="translate(671.45 790.04)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-49" x1="719.6" y1="-270.62" x2="631.31"
                        y2="-182.33" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-50" x1="604.57" y1="578.66" x2="604.57"
                        y2="518.33" xlinkHref="#linear-gradient-41" />
                    <clipPath id="clip-path-3" transform="translate(0 -56.34)">
                        <path className="cls-2" d="M734.76 480.27h280.74V582.5H734.76z" />
                    </clipPath>
                    <linearGradient id="linear-gradient-51" x1="827.23" y1="571.25" x2="827.23"
                        y2="565.33" gradientTransform="matrix(1 0 0 -1 121.88 1136.58)" xlinkHref="#linear-gradient-13"
                    />
                    <linearGradient id="linear-gradient-52" x1="810.29" y1="573.15" x2="810.29"
                        y2="567.22" gradientTransform="matrix(1 0 0 -1 155.75 1140.37)" xlinkHref="#linear-gradient-13"
                    />
                    <clipPath id="clip-path-4" transform="translate(0 -56.34)">
                        <path className="cls-2" d="M831.55 551.76a5.37 5.37 0 1 1-3-7 5.37 5.37 0 0 1 3 7z"
                        />
                    </clipPath>
                    <linearGradient id="linear-gradient-53" x1="875.06" y1="526.13" x2="875.06"
                        y2="423.9" xlinkHref="#linear-gradient-21" />
                    <linearGradient id="linear-gradient-54" x1="970.77" y1="379.31" x2="779.35"
                        y2="570.72" xlinkHref="#linear-gradient-21" />
                    <linearGradient id="linear-gradient-55" x1="428.58" y1="601.57" x2="428.58"
                        y2="586.4" gradientTransform="translate(97.86 -277.3)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-56" x1="441.06" y1="581.51" x2="416.1"
                        y2="606.46" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-57" x1="428.58" y1="582.24" x2="428.58"
                        y2="567.06" gradientTransform="translate(117.2 -257.96)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-58" x1="441.06" y1="562.17" x2="416.1"
                        y2="587.13" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-59" x1="471.35" y1="601.57" x2="471.35"
                        y2="586.4" gradientTransform="translate(55.1 -234.53)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-60" x1="483.82" y1="581.51" x2="458.87"
                        y2="606.46" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-61" x1="471.35" y1="582.24" x2="471.35"
                        y2="567.06" gradientTransform="translate(74.44 -215.2)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-62" x1="483.82" y1="562.17" x2="458.87"
                        y2="587.13" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-63" x1="428.58" y1="889.75" x2="428.58"
                        y2="874.58" gradientTransform="translate(-190.31 -565.47)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-64" x1="441.06" y1="869.69" x2="416.1"
                        y2="894.64" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-65" x1="428.58" y1="870.42" x2="428.58"
                        y2="855.24" gradientTransform="translate(-170.98 -546.14)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-66" x1="441.06" y1="850.35" x2="416.1"
                        y2="875.31" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-67" x1="471.35" y1="889.75" x2="471.35"
                        y2="874.58" gradientTransform="translate(-233.08 -522.71)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-68" x1="483.82" y1="869.69" x2="458.87"
                        y2="894.64" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-69" x1="471.35" y1="870.42" x2="471.35"
                        y2="855.24" gradientTransform="translate(-213.74 -503.37)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-70" x1="483.82" y1="850.35" x2="458.87"
                        y2="875.31" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-71" x1="428.58" y1="624.39" x2="428.58"
                        y2="609.21" gradientTransform="translate(75.05 -300.11)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-72" x1="441.06" y1="604.32" x2="416.1"
                        y2="629.28" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-73" x1="428.58" y1="605.05" x2="428.58"
                        y2="589.88" gradientTransform="translate(94.39 -280.77)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-74" x1="441.06" y1="584.99" x2="416.1"
                        y2="609.94" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-75" x1="471.35" y1="624.39" x2="471.35"
                        y2="609.21" gradientTransform="translate(32.29 -257.35)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-76" x1="483.82" y1="604.32" x2="458.87"
                        y2="629.28" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-77" x1="471.35" y1="605.05" x2="471.35"
                        y2="589.88" gradientTransform="translate(51.62 -238.01)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-78" x1="483.82" y1="584.99" x2="458.87"
                        y2="609.94" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-79" x1="428.58" y1="880.6" x2="428.58"
                        y2="865.43" gradientTransform="translate(-181.16 -556.33)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-80" x1="441.06" y1="860.54" x2="416.1"
                        y2="885.49" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-81" x1="428.58" y1="861.27" x2="428.58"
                        y2="846.09" gradientTransform="translate(-161.83 -536.99)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-82" x1="441.06" y1="841.2" x2="416.1"
                        y2="866.16" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-83" x1="471.35" y1="880.6" x2="471.35"
                        y2="865.43" gradientTransform="translate(-223.93 -513.56)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-84" x1="483.82" y1="860.54" x2="458.87"
                        y2="885.49" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-85" x1="471.35" y1="861.27" x2="471.35"
                        y2="846.09" gradientTransform="translate(-204.59 -494.23)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-86" x1="483.82" y1="841.2" x2="458.87"
                        y2="866.16" gradientTransform="rotate(90 644.33 476.1)" xlinkHref="#linear-gradient-21"
                    />
                    <linearGradient id="linear-gradient-87" x1="389.29" y1="362.95" x2="389.29"
                        y2="330.67" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fafcff" stopOpacity="0" />
                        <stop offset="1" stopColor="#d5dff1" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-88" x1="1061.94" y1="507.3" x2="1061.94"
                        y2="487.41" gradientTransform="translate(13.53 -37.29)" xlinkHref="#linear-gradient-13"
                    />
                    <linearGradient id="linear-gradient-89" x1="1037.67" y1="525.23" x2="1037.67"
                        y2="505.34" gradientTransform="translate(33.33 -59.3)" xlinkHref="#linear-gradient"
                    />
                    <linearGradient id="linear-gradient-90" x1="431.63" y1="578.7" x2="431.63"
                        y2="509.59" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#eff5ff" />
                        <stop offset="1" stopColor="#d9e1ed" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-91" x1="420.34" y1="497.65" x2="442.92"
                        y2="497.65" xlinkHref="#linear-gradient-13" />
                    <linearGradient id="linear-gradient-92" x1="335.7" y1="578.7" x2="335.7"
                        y2="509.59" xlinkHref="#linear-gradient-90" />
                    <linearGradient id="linear-gradient-93" x1="324.42" y1="497.65" x2="346.99"
                        y2="497.65" xlinkHref="#linear-gradient-13" />
                    <linearGradient id="linear-gradient-94" x1="768.8" y1="506.48" x2="802.3"
                        y2="517.65" xlinkHref="#linear-gradient-17" />
                    <linearGradient id="GradientFill_3" x1="1406.69" y1="688.5" x2="1426.78"
                        y2="688.5" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#6a8991" />
                        <stop offset="0.53" stopColor="#335c64" />
                        <stop offset="1" stopColor="#02383c" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-95" x1="1369.75" y1="643.56" x2="1291.11"
                        y2="643.56" xlinkHref="#linear-gradient-21" />
                    <linearGradient id="linear-gradient-96" x1="1115.29" y1="658.79" x2="1205.63"
                        y2="658.79" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#eff5ff" />
                        <stop offset="1" stopColor="#c7d3e5" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-97" x1="1421.99" y1="715.13" x2="1512.32"
                        y2="715.13" gradientTransform="matrix(-1 0 0 1 2846.89 -56.34)" xlinkHref="#linear-gradient-96"
                    />
                    <linearGradient id="linear-gradient-98" x1="1328.29" y1="643.79" x2="1145.09"
                        y2="643.79" xlinkHref="#linear-gradient-21" />
                    <linearGradient id="linear-gradient-99" x1="1404.14" y1="687.41" x2="1430.43"
                        y2="687.41" xlinkHref="#linear-gradient-21" />
                </defs>
                <g style={{ isolation: 'isolate' }}>
                    {/* Fixed ! [Shapes in BG] */}
                    <g id="Ill_BG" className={show}>
                        <path fill="url(#linear-gradient)" d="M816 339.66h177v239H816z" />
                        <path id="_Path_" data-name="&lt;Path&gt;" fill="url(#linear-gradient-2)"
                            d="M1566.93 56.66v212.49h-43.96v-87.77h-22.47v-30.14h-129.05v30.14h-21.06v214.8h-9.94v-19.41h-35.96V216.42h-9.63v160.35h-32.76v19.41H1142v212.48h302.82V546.3h58.62v50.81h143.27V410.03h16.28V56.66h-96.06z"
                        />
                        <path id="_Path_2" data-name="&lt;Path&gt;" fill="url(#linear-gradient-3)"
                            d="M602.24 465.71V167.93h4.84v-5.59H444.12V78.8l-81.61 23.31-.11 51.21h-9.96V71.73h-9.94V32.4h-10.69V0h-3.46v32.4h-6.93V9.89h-3.46V32.4h-7.93v39.33h-11.26v81.59h-9.95v312.39h313.42z"
                        />
                        <path fill="url(#linear-gradient-4)" d="M1125 327.39h177v251.27h-177z"
                        />
                        <path fill="url(#linear-gradient-5)" d="M910 578.66h154V357.99l-69-44.33v-13h-85v278z"
                        />
                        <path id="_Path_3" data-name="&lt;Path&gt;" fill="url(#linear-gradient-6)"
                            d="M865.8 403.44h-45.27v28.32H810.2V304.75H647.3v-14.18h-26.56v-14.49h-44.67v14.49h-22.33v14.18H319v273.91h491.2v-10.71H876V431.76h-10.2v-28.32z"
                        />
                        <path id="_Path_4" data-name="&lt;Path&gt;" fill="url(#linear-gradient-7)"
                            d="M363.82 578.72V278.16h-42.26v25.06l-14.4-1.81-61.92 1.71V178.11h-11.12v-64.98h-5.83v64.98h-11.13v16.66h-28.07v383.95h174.73z"
                        />
                        <path fill="url(#linear-gradient-8)" d="M1650.75 168.87v439.79h157v-502l-157 62.21z"
                        />
                        <path fill="url(#linear-gradient-9)" d="M1284 265.66h252v313h-252z" />
                        <path fill="url(#radial-gradient)" d="M0 578.66h1022.25v166H0z" />
                        <path fill="url(#radial-gradient-2)" d="M83.52 578.66H1732.9v166H83.52z"
                        />
                        <path fill="url(#radial-gradient-3)" d="M270.62 578.66H1920v166H270.62z"
                        />
                        <path fill="url(#radial-gradient-4)" d="M0 653.81h1022.25v166H0z" />
                        <path fill="url(#radial-gradient-5)" d="M83.52 653.81H1732.9v166H83.52z"
                        />
                        <path fill="url(#radial-gradient-6)" d="M270.62 653.81H1920v166H270.62z"
                        />
                        <path fill="url(#radial-gradient-7)" d="M352.84 633.75h1214.31v32.56H352.84z"
                        />
                        <path className="cls-20" d="M911.89 684.25H764.85l5-6.32h137.04l5 6.32z"
                        />
                        <path fill="url(#linear-gradient-10)" d="M714.13 684.25H577.09l5-6.32h137.04l-5 6.32z"
                        />
                        <path fill="url(#linear-gradient-11)" d="M1102.33 684.25H966.29l-6-6.32h137.04l5 6.32z"
                        />
                        <path className="cls-23" d="M823.24 633.65h92.71v20.16h-92.71zM637.64 633.65h92.71v20.16h-92.71z"
                        />
                        <path fill="url(#linear-gradient-12)" d="M449.5 633.65h92.71v20.16H449.5z"
                        />
                        <path className="cls-23" d="M1007.05 633.65h92.71v20.16h-92.71z" />
                    </g>
                    
                    {/* Fixed ! */}
                    <g id="Illustration" className={show}>
                        <path id="_Path_5" data-name="&lt;Path&gt;" className="cls-1" d="M1328.32 272.25a6.26 6.26 0 0 1-1.19 1.14 5 5 0 0 0-1.13.64 3.79 3.79 0 0 0-.37.8c0 .17-.1.74 0 .8s-.12.39 0 .54a.44.44 0 0 0 .52.12c.15-.1.32.11.45.07a1.92 1.92 0 0 1 .33-.12c.11 0 .14.14.38.06s.21-.14.31-.19.15.05.33-.09a2.88 2.88 0 0 0 .48-.66 2.2 2.2 0 0 0 .27-1c0-.43.72-.88 1.25-1.39z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1333 265.49s-.85 1.13-1.32 1.95-3.69 5.33-3.69 5.33l.87 1.19s4.81-3.82 5.69-5.67c.33-.7-.15-4.05-.15-4.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1333.64 260.82a37.55 37.55 0 0 0-.84 5.4c.08 1.22 1.71 2.07 1.71 2.07A31.2 31.2 0 0 0 1337 262"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1335.88 253.1s-1.23.62-1.82 4.08l-.67 4.27s.35.56 3 .59"
                            transform="translate(0 -56.34)" />
                        <g id="_Group_" data-name="&lt;Group&gt;">
                            <g id="_Group_2" data-name="&lt;Group&gt;">
                                <g id="_Group_3" data-name="&lt;Group&gt;" style={{
                                    mixBlendMode: 'multiply'
                                }} opacity="0.8">
                                    <path id="_Path_6" data-name="&lt;Path&gt;" d="M1350.29 310.69z" transform="translate(0 -56.34)"
                                        fill="#65b0c4" />
                                </g>
                                <g id="_Group_4" data-name="&lt;Group&gt;">
                                    <path id="_Path_7" data-name="&lt;Path&gt;" className="cls-25" d="M1348.17 255.7a15.6 15.6 0 0 1-.28 2.38 42.83 42.83 0 0 1-2.16 7.18 5.8 5.8 0 0 0-.26 3.35c.49 2.22-.07 2.37-.07 2.37a28.46 28.46 0 0 1-5.52 2.69c-1.59.5-3 .48-3.23-.93a.85.85 0 0 1 0-.23c-.3-.06-.28-.37-.26-.49a2.43 2.43 0 0 0 0-.25 3.54 3.54 0 0 0 0-.45c.08-4.45-.67-4.22-.9-9.2a42.33 42.33 0 0 1 .63-9.1 20 20 0 0 1 3.72-1 8.78 8.78 0 0 1 3.06 0c.55.1 1.18.25 1.76.38 2.67.67 3.53 1.36 3.51 3.3z"
                                        transform="translate(0 -56.34)" />
                                    <path id="_Path_8" data-name="&lt;Path&gt;" className="cls-1" d="M1348.71 309.31s-.14 2.48-.14 2.81-1.21.38-1.78 0c0-.92-.34-2.8-.35-3.34"
                                        transform="translate(0 -56.34)" />
                                    <path id="_Path_9" data-name="&lt;Path&gt;" d="M1346.19 282s3.42-5.86-1.21-11a20.7 20.7 0 0 1-5.75 1.6 12.5 12.5 0 0 1-3-.07 51.06 51.06 0 0 0-.69 10z"
                                        transform="translate(0 -56.34)" fill="#ffb41d" />
                                    <path id="_Path_10" data-name="&lt;Path&gt;" className="cls-1" d="M1338.43 252.13l-.3 3.66-.94.4-.83-.41-.14-3.25"
                                    />
                                    <path className="cls-29" d="M1348.86 310.73c-.34.3-2.33.51-2.46-.09-.38-3.6-2.54-13.54-3.27-16.64-.68-2.53-1.44-6.46-1.87-9.19-.58 2.78-1.5 6.41-2.12 8.74 1.93 4.78 0 11.73-.7 17.3a2.45 2.45 0 0 1-2.43-.08c0-6.46-.74-13.68-.88-16.84a4.91 4.91 0 0 1 0-.55 8.45 8.45 0 0 1 0-1v-11.76-1.49a2.7 2.7 0 0 1 0-.28c.1-2.9.28-8.52.28-10.38 0-2.91-.26-8.95 0-11a40.51 40.51 0 0 1 .36-4.34 2.72 2.72 0 0 1 .91-.28 27.59 27.59 0 0 0-.09 4.25 22.78 22.78 0 0 1 6.41.11 30.54 30.54 0 0 1 1.34-4.81 5.52 5.52 0 0 1 1.16.29s-1 4.3-.38 6.49 2 1.38 2.32.76c-.18 2.71-1.64 7.6-1.35 10 .23 1.93.74 3.1 1.12 5a8.81 8.81 0 0 1 .19 2.85c-.06.47-.21 1-.23 1.27-.12 1.9-.5 11.66-.23 13.69a2 2 0 0 1 0 .23c2 3.8 1.67 12.45 1.8 16.68.08.01.13 1.04.12 1.07z"
                                        transform="translate(0 -56.34)" />
                                    <path id="_Path_11" data-name="&lt;Path&gt;" className="cls-25" d="M1339 305.74c-.45 4.71-.56 5.09-.56 5.09.63-5.27 2.41-11.52 1-16.49a3.2 3.2 0 0 1-.05-1.71c.75-3.09 1.79-7.05 2.23-9.6l-.64-.51a40.6 40.6 0 0 0-1.28-4.66c-.25-.16 0 1.53.19 3.62a17 17 0 0 1 0 5.86c-.53 2.5-1.48 4.66-1.68 6.07.69 2.18 1.23 7.59.79 12.33z"
                                        transform="translate(0 -56.34)" />
                                </g>
                            </g>
                            <path id="_Path_12" data-name="&lt;Path&gt;" className="cls-29" d="M1338.43 314.28a.15.15 0 0 1-.14.1h-5.46c-.33 0-.53-.1-.55-.25s.2-.33.32-.38l3-1.29.72-.34a4.31 4.31 0 0 0 .92.12 5.85 5.85 0 0 0 .85-.11 2.23 2.23 0 0 1 .34 2.15z"
                                transform="translate(0 -56.34)" />
                            <path id="_Path_13" data-name="&lt;Path&gt;" className="cls-29" d="M1348.87 314.28a.15.15 0 0 1-.15.1h-5.45c-.33 0-.53-.1-.55-.25s.19-.33.31-.38l3-1.29.71-.34a4.45 4.45 0 0 0 .93.12 5.62 5.62 0 0 0 .84-.11 2.22 2.22 0 0 1 .36 2.15z"
                                transform="translate(0 -56.34)" />
                        </g>
                        <path className="cls-30" transform="rotate(45.08 1407.53 244.054)" d="M1333.93 269.96h11.26v4.4h-11.26z"
                        />
                        <path id="_Path_14" data-name="&lt;Path&gt;" className="cls-1" d="M1341.4 271.63a3.06 3.06 0 0 1-1.46.37 6.38 6.38 0 0 0-1.5-.16 7.15 7.15 0 0 0-1.08.45c-.14.14-.4.69-.32.84s-.37.28-.35.51a.5.5 0 0 0 .41.46c.21 0 .22.32.37.37a2.83 2.83 0 0 1 .4.11c.11.07 0 .23.32.32s.29 0 .42 0 .11.14.37.13a3.39 3.39 0 0 0 .9-.3 2.6 2.6 0 0 0 1-.81 3.86 3.86 0 0 1 1.58-.9z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_15" data-name="&lt;Path&gt;" className="cls-25" d="M1337.19 273.19a2.33 2.33 0 0 0 .66-.54c.15-.14.24-.11.4-.27 0 .29-.21.23-.52.58a.8.8 0 0 1-.5.35.06.06 0 0 1 0-.12z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1348.17 267.88a20.77 20.77 0 0 0-2.05 1.16c-.79.53-5.69 3.1-5.69 3.1l.25 1.46s7.12-1.9 8.74-3.15c.61-.48.56-3.06.56-3.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1346.32 262.94a36.54 36.54 0 0 0 1.14 5.34c.5 1.12 2.33 1.33 2.33 1.33a30.92 30.92 0 0 0 .09-6.82"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1350 263.44a16.69 16.69 0 0 1-3.65.09c-.87-3-1.46-6.64-1.27-7.71.33-1.91.29-3.24 1.59-2.73.01 0 3.76 1.23 3.33 10.35z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1339 250.28a13.11 13.11 0 0 1 .21 1.67c-.12.21-.62.4-.62.4a1.39 1.39 0 0 0 1.4 1.34c2.42.12 3-1.58 3-1.58s-.54-.19-.57-.35-.06-3.26-.06-3.26"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1338.66 242.82c-.38.24-1.53.37-1.68.91a9.75 9.75 0 0 0-.08 2 16.93 16.93 0 0 0 .06 2c0 .86.17 2.43 1.16 2.85a1.16 1.16 0 0 0 .7.11l1.17-.15a3.86 3.86 0 0 0 1.79-.54 2.92 2.92 0 0 0 .72-2.43l-.19-4.42z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1342.7 246.78c-.31-.07-.56-.17-.65.14 0 .15 0 .35-.18.45a.33.33 0 0 1-.42-.14.86.86 0 0 1-.09-.48v-1.1a1.64 1.64 0 0 0-.25-1 1.15 1.15 0 0 0-.45-.3 3.42 3.42 0 0 0-1.74-.16 17.52 17.52 0 0 1-1.76.19 2 2 0 0 1-.73-.11c-.37-.15 3.75-3 4.75-2.87.7.08 1.26.1 1.56 1.09a.41.41 0 0 0 .17.12c.7.32 1.37.52 1.58 1.44a8.82 8.82 0 0 1-.24 3.85 2.22 2.22 0 0 1-.29.71 1.36 1.36 0 0 1-.81.48c-.29 0-.82.23-.91 0s.24-.68.31-.88"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1342 248.13a.47.47 0 0 0 .18.31.46.46 0 0 0 .47-.08 1.29 1.29 0 0 0 .45-1.17c-.06-.5-.47-.89-.87-.63a.67.67 0 0 0-.2.76"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1339.07 250.7l1.24-.19a1.54 1.54 0 0 1-1.16.75"
                            transform="translate(0 -56.34)" />
                        <circle className="cls-25" cx="1339.44" cy="190.28" r="0.14" />
                        <circle className="cls-25" cx="1337.88" cy="190.28" r="0.14" />
                        <path className="cls-25" d="M1339 248.43h-.43a.35.35 0 0 1-.34-.42l.21-.94a.11.11 0 0 1 .13-.08.1.1 0 0 1 .08.13l-.21.93a.16.16 0 0 0 0 .12.16.16 0 0 0 .11.05h.43a.11.11 0 0 1 .11.11.1.1 0 0 1-.09.1zM1339.15 249.61a1.09 1.09 0 0 0 .95-.69.1.1 0 0 0-.06-.13.11.11 0 0 0-.13.06.88.88 0 0 1-.76.56.1.1 0 0 0-.1.1.11.11 0 0 0 .1.1z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-31" d="M1341.6 244.84s-1.22 1.46-5 1c-.29 0-1.23-.46-.2-1.14z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-31" d="M1336.32 244.38a3.7 3.7 0 0 1 2.94-4.27c4.41-.85 5.31 1.95 5.37 4.19a.3.3 0 0 1 .22.28.26.26 0 0 1-.22.22 8.05 8.05 0 0 1-1.14.1 29.18 29.18 0 0 1-7-.14.22.22 0 0 1-.18 0c-.22-.22.01-.38.01-.38z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-32" d="M1341.72 240s-3.49.12-3.35 5a8.35 8.35 0 0 1-1.44-.14s-.3-3.69 2.33-4.74a2.36 2.36 0 0 1 2.46-.12z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-31" d="M1317.92 276.81l3.57-.28a1.14 1.14 0 0 0 .85-.49l.61-.9a.19.19 0 0 1 .16-.1l3-.15a.19.19 0 0 1 .2.18.2.2 0 0 1-.18.21l-2.41.12-.74 1.06a1.14 1.14 0 0 1-.93.48h-4.1a.68.68 0 0 1-.34 0c-.11-.11.31-.13.31-.13z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1324.74 275.46l4.57-.23a.31.31 0 0 0 .29-.32.3.3 0 0 0-.32-.28l-4.57.23a.3.3 0 0 0-.28.31.3.3 0 0 0 .31.29z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1326.72 274.57c.06 0 .08.09.08.18.2-.23.4-.26.55-.18a.14.14 0 0 1 .07.14.44.44 0 0 1 .52-.14.13.13 0 0 1 .06.12c.16-.17.31-.19.42-.12s-.15.89-.15.89h-2.48c.29-.87.69-1.02.93-.89z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1326.33 274.6s-.36.92-.78.92c0 0-.09 0-.08-.16a3.16 3.16 0 0 1 .29-1"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1288.78 216.02h22.81v4.7h29.02v4.4h5.84v32.92h-57.67v-42.02z"
                        />
                        <path className="cls-33" transform="rotate(180 1294.41 265.205)" d="M1288.78 291.18h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1300.04 269.91)" d="M1294.41 295.88h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1294.41 274.61)" d="M1288.78 300.58h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1294.41 284.015)" d="M1288.78 309.99h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1300.04 279.315)" d="M1294.41 305.28h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1305.96 265.205)" d="M1300.33 291.18h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1311.59 269.91)" d="M1305.96 295.88h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1305.96 274.61)" d="M1300.33 300.58h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1305.96 284.015)" d="M1300.33 309.99h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1311.59 279.315)" d="M1305.96 305.28h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1317.51 265.205)" d="M1311.88 291.18h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1323.14 269.91)" d="M1317.51 295.88h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1317.51 274.61)" d="M1311.88 300.58h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1317.51 284.015)" d="M1311.88 309.99h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1323.14 279.315)" d="M1317.51 305.28h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1329.06 265.205)" d="M1323.43 291.18h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1334.69 269.91)" d="M1329.06 295.88h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1329.06 274.61)" d="M1323.43 300.58h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1329.06 284.015)" d="M1323.43 309.99h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1334.69 279.315)" d="M1329.06 305.28h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1340.61 265.205)" d="M1334.98 291.18h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1346.24 269.91)" d="M1340.61 295.88h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1340.61 274.61)" d="M1334.98 300.58h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1294.41 255.8)" d="M1288.78 281.77h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1300.04 260.5)" d="M1294.41 286.47h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1305.96 255.8)" d="M1300.33 281.77h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1311.59 260.5)" d="M1305.96 286.47h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1317.51 255.8)" d="M1311.88 281.77h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1323.14 260.5)" d="M1317.51 286.47h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1329.06 255.8)" d="M1323.43 281.77h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1334.69 260.5)" d="M1329.06 286.47h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1340.61 255.8)" d="M1334.98 281.77h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1346.24 260.5)" d="M1340.61 286.47h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1294.41 246.385)" d="M1288.78 272.36h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1291.435 251.09)" d="M1288.78 277.06h5.32v4.4h-5.32z"
                        />
                        <path className="cls-33" transform="rotate(180 1291.435 260.5)" d="M1288.78 286.47h5.32v4.4h-5.32z"
                        />
                        <path className="cls-33" transform="rotate(180 1291.435 269.915)" d="M1288.78 295.89h5.32v4.4h-5.32z"
                        />
                        <path className="cls-33" transform="rotate(180 1291.435 279.33)" d="M1288.78 305.3h5.32v4.4h-5.32z"
                        />
                        <path className="cls-33" transform="rotate(180 1300.04 251.09)" d="M1294.41 277.06h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1305.96 246.385)" d="M1300.33 272.36h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1311.59 251.09)" d="M1305.96 277.06h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1323.14 251.09)" d="M1317.51 277.06h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1334.69 251.09)" d="M1329.06 277.06h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1340.61 284.015)" d="M1334.98 309.99h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1352.085 284.015)" d="M1346.45 309.99h11.26v4.4h-11.26z"
                        />
                        <path className="cls-33" transform="rotate(180 1346.24 279.315)" d="M1340.61 305.28h11.26v4.4h-11.26z"
                        />
                        <path className="cls-25" d="M1315.26 276.73h17a.89.89 0 0 1 .85.57c.1.29 0 .57-.8.54-1.6 0-3.07-1.28-4.18-.35s-.9 2.33-1.76 1.94-.28-1.64-2.5-1.61-2.87 1.27-3.79.65-2.87-1.49-4-.84-2.08-.9-.82-.9z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1346.08 253.34h6.94v.3h-6.94z" />
                        <path className="cls-33" d="M1392.33 229.32h108.57v2.8h-108.57z" />
                        <path className="cls-29" d="M1396.54 226.52h100.16v2.8h-100.16z" />
                        <path className="cls-33" d="M1399.55 223.72h94.14v2.8h-94.14z" />
                        <path className="cls-34" d="M1489.74 232.12l-6.33-8.4-34.79-8.01" />
                        <path className="cls-25" d="M1455.38 111.56l132.01-45 42.84 44.9.57-.54-43.18-45.26-.24.08-132.26 45.08.26.74z"
                        />
                        <path className="cls-29" d="M1450.42 267.13a8.71 8.71 0 0 1 1.81 3.93 3.4 3.4 0 0 1-2.23 3.69c-1.42.46-3.34.06-3.93-1.07a4.28 4.28 0 0 1-.15-3 5.33 5.33 0 0 0 0-1.09c0-.34.56-.42.6.07a6.81 6.81 0 0 0 .51 2.48 1.42 1.42 0 0 0 2.31-.16c.37-1.05-.78-2.85-.78-2.85z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M1446.26 199.25h5.98l1.87 2.09v4.53l-4.05 6.89h-1.62l-4.05-6.89v-4.53l1.87-2.09z"
                        />
                        <path className="cls-31" d="M1561.66 216.53h17.28v-33h-24v8.06c-.04 17.87 6.72 24.94 6.72 24.94z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1554.9 191.58v-5.76h19.21a.62.62 0 0 1 .62.62v14.5a.62.62 0 0 1-.62.62h-2.76a.62.62 0 0 0-.55.34l-3.65 7.1a.64.64 0 0 1-.56.34h-8.87a51 51 0 0 1-2.82-17.76z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1596.08 305.93V183.67h50.09l-15.65-17.14h-34.44v-35l-8.57-10.12-8.56 9.83v35.25h-123.7l-18.84 17.14H1579v122.3zm-1.94-1.19h-14v-15.35zm.75-.94l-14-15.35h14zm0-16.53h-14l14-15.35zm-14.75-.94V271h14zm14-16.54h-14v-15.35zm.75-.94l-14-15.35h14zm0-16.54h-14l14-15.34zm-14.75-.94V236h14zm14-16.53h-14v-15.35zm.75-1l-14-15.34h14zm0-16.53h-14l14-15.35zm-14.75-.94v-15.3h14zm14-16.54h-14v-15.3zm.75-.94L1581 183.67h13.93zM1455 182.48h-15.4l15.35-14zm16.53 0h-15.35v-14zm18.42 0h-15.35l15.35-14zm16.54 0h-15.35v-14zm18.41 0h-15.34l15.34-14zm16.54 0H1526v-14zm18.42 0h-15.35l15.35-14zm16.54 0H1561v-14zm35 0h-15.22v-.08l-.13-.58v-13.34zm18.41 0h-15.34l15.34-14zm13.76 0h-12.67v-13.76zm-48.71-.08h-15.27l15.27-13.92zm-86.19-.67v-14h15.34zm69.9 0v-14h15.35zm-106 0l-15.35-14h15.35zm35 0l-15.35-14h15.35zm34.95 0l-15.35-14h15.35zm35 0l-15.35-14h15.35zm35 0l-15.35-14h15.35zm1.19 0v-14h15.35zm-69.91 0v-14h15.35zm-69.91 0v-14H1489zm120.53-15.25h-14v-15.34zm.75-.94l-14-15.34h14zm0-16.53h-14l14-15.35zm-14.75-.94v-15.35h14zm14.45-16.54h-14.42l7.35-8.13z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1452.36 199.57l2.69-72.37-.78-.03-2.69 72.37.78.03zM1446.14 199.57l.78-.03-2.69-72.37-.78.03 2.69 72.37z"
                        />
                        <path className="cls-29" transform="rotate(180 1449.405 156.625)" d="M1440.85 182.48h17.1v4.63h-17.1z"
                        />
                        <path className="cls-25" transform="rotate(180 1588.37 281.88)" d="M1566.92 305.93h42.9v8.23h-42.9z"
                        />
                        <path className="cls-34" d="M1407.5 232.12l6.33-8.4 34.79-8.01" />
                        <path className="cls-35" d="M1536.54 310.65a24 24 0 0 0 0 3c.1.43 1.46.48 1.63.25a24.46 24.46 0 0 0 .38-3.06"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1538.58 314.29c0 .31.16 1.23-.22 1.23h-4c-1 0-1.6-.13-1.63-.31-.1-.73 3.46-2 3.8-2a.5.5 0 0 1 .25.22.94.94 0 0 0 1.19.39.81.81 0 0 0 .24-.17.59.59 0 0 1 .37.64z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M1551.28 311.2s.43 1.16.62 1.54 1.46-.09 1.53-.35a12.3 12.3 0 0 0-1-2.25"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1554 312.63c.41.8.31 1.18.18 1.26l-1.07.64s-.49.25-.84.47a5 5 0 0 1-1.19.49 2.93 2.93 0 0 1-2 0c-.35-.61 2.35-3 2.66-3.08a.4.4 0 0 1 .31.11.79.79 0 0 0 .93.11.93.93 0 0 0 .4-.43.8.8 0 0 1 .62.43z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M1552.85 310.36a.16.16 0 0 1-.06.2 3.84 3.84 0 0 1-1.65.77c-.22-.36-7.31-11.55-8.67-13.72l-.08-.13a3.13 3.13 0 0 1-.23-.44v-.07a1.91 1.91 0 0 1-.07-.24v-.14c-.19-1-.65-2.62-1.2-4.55l-1-3.46c-.27-.93-.53-1.86-.78-2.74l-2-7.69a.18.18 0 0 1 .15-.21l1.59-.1a18.36 18.36 0 0 0 5-1.38.16.16 0 0 1 .18 0 7 7 0 0 1 1.59 6.65 7.68 7.68 0 0 0-.12 2c.16 2.08.47 6 .5 8.68a7 7 0 0 0 1.66 3.6 7.73 7.73 0 0 1 .82 1c2.25 3.54 3.1 8.93 4.37 11.97z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1543.87 284.74a4 4 0 0 0 1.8-2.36c.87-2.4-.64-5.94-.71-6-.92-.59-6.7 1.18-8.24 1.67-.47.16-1.36 15.09-1.36 15.41v2c.11 2.54 1 15.21 1.1 16.61a.15.15 0 0 0 .13.15 10.46 10.46 0 0 0 1.75.11l.16-.14c.4-3.4 2.15-9.8 1.27-13.8v-.15-.32c-.22-1.77-.22-1.26.26-3.49 1.08-2.79 3.13-7.88 3.8-9.57-.02-.08 0-.11.04-.12z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1546.54 267.36c0 .85-.06 1.7-.13 2.52-.09 1-.21 1.95-.34 2.82-.29 2.06-.62 3.59-.59 4a1.76 1.76 0 0 0 .21.66.44.44 0 0 1-.1.51l-.43.17c-3.59 1.32-8.89.2-8.89.2-.22 0-.44-.16-.35-.58s.39-1.84.38-2.16.08-1.31.25-2.72c0-.49.13-1 .21-1.62s.14-1 .23-1.54.18-1.23.26-1.82l.27-2a25 25 0 0 1 .67-3.21 13.31 13.31 0 0 1 1-2.51c1-1.93 3.42-2.23 3.84-2.27a.2.2 0 0 1 .11 0c1.82 1.21 2.74 3.29 3.15 5.65a22.59 22.59 0 0 1 .25 3.9z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M1546.54 267.36c-1-.06-6.53-.43-9-1.57.15-1 .31-1.86.54-2.75 1 .39 3.23.95 8.33 1.29a23.47 23.47 0 0 1 .13 3.03zM1546.41 269.88c-.09 1-.21 1.95-.34 2.82 0 0-6.53-.32-9.31-1.58.06-.49.14-1 .23-1.54s.18-1.23.26-1.82a20.73 20.73 0 0 0 9.16 2.12z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-36" d="M1542.94 262.3c-.15 1.8-.82 7.59-3.58 10.17a4.41 4.41 0 0 1-2.61.28.17.17 0 0 1-.15-.18c.11-.88.25-1.89.42-3a.09.09 0 0 1 0-.07l5.63-7.36a.17.17 0 0 1 .29.16z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M1502.71 296.21s.93-4.81 6.85-8.62c5.74-3.7 12.31-.35 12.31-.35z"
                            transform="translate(0 -56.34)" />
                        <path d="M1499.3 296.56l23.65-10.9-1.29 7.13a5.85 5.85 0 0 1-3 4.13l-7.53 4.06a5.87 5.87 0 0 1-6.19-.39z"
                            transform="translate(0 -56.34)" fill="#ffd694" />
                        <path className="cls-33" d="M1523.24 285.52l-1.58 7.27a5.85 5.85 0 0 1-3 4.13l-7.52 4.06a5.88 5.88 0 0 1-6.2-.39l-5.6-4 18.63-8.59z"
                            transform="translate(0 -56.34)" />
                        <circle className="cls-33" cx="1503.16" cy="254.75" r="5.2" />
                        <circle className="cls-29" cx="1503.16" cy="254.75" r="2.26" />
                        <path className="cls-32" d="M1504 311.09a.85.85 0 1 1-.85-.85.85.85 0 0 1 .85.85z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1497.2 314.49a.48.48 0 0 1-.45-.28.5.5 0 0 1 .23-.67l10.74-5.16a.72.72 0 0 0 .41-.66v-3.24a3.45 3.45 0 0 1 1.79-2.84l9-4.86a5.28 5.28 0 0 0 2.69-3.68l1.23-6.5a4.55 4.55 0 0 1 2-2.94l6.51-4.27a.49.49 0 0 1 .69.15.5.5 0 0 1-.14.69l-6.51 4.27a3.52 3.52 0 0 0-1.53 2.28l-1.23 6.51a6.26 6.26 0 0 1-3.19 4.37l-9 4.86a2.43 2.43 0 0 0-1.27 2v3.21a1.72 1.72 0 0 1-1 1.57l-10.74 5.16a.41.41 0 0 1-.23.03z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1524.07 312.84a1.18 1.18 0 0 1-.68-.2l-14.31-9.55a.5.5 0 0 1 .55-.83l14.31 9.55a.22.22 0 0 0 .25 0 .19.19 0 0 0 .09-.23l-3.83-15.8a.5.5 0 0 1 .37-.6.49.49 0 0 1 .6.37l3.84 15.79a1.23 1.23 0 0 1-.49 1.29 1.21 1.21 0 0 1-.7.21z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M1542.3 263.47a8 8 0 0 0 .19-1.42 1.34 1.34 0 0 0-2-1c-.32.19-1.13.83-2 3.52-.63 1.85-1 3.28-1.23 4.17-.07.27-.18.59-.26.86l1.86 2.67c1.51-.98 2.94-6.17 3.44-8.8z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M1536 271.7c-.81 1.18-3.59 6-4.94 7.67l.83.61.14-.22.46-.31c.9-1 1.91-1.83 3.36-3.29a25.51 25.51 0 0 0 3.43-4.11 17.18 17.18 0 0 0 .89-1.57l-3-1.5a10.42 10.42 0 0 1-1.17 2.72z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M1531.44 278.91a4.32 4.32 0 0 1-.83.78c-.32.16-1 .28-1.28.41a4.47 4.47 0 0 0-.52 2.54 2.07 2.07 0 0 0 1.83-.42c.59-.5.53-1 .7-1.24a14.43 14.43 0 0 1 1.12-1.53l-.24-.48zM1543.17 257.83a1.91 1.91 0 0 1-.27.35 3.8 3.8 0 0 1-2.29.76.16.16 0 0 1-.16-.2 2.48 2.48 0 0 0-.12-1.15.16.16 0 0 0-.22-.1 3.32 3.32 0 0 1-2.13.26l-.07-.05a5.82 5.82 0 0 1-.9-1.34.17.17 0 0 0-.17-.09c-.23 0-.56 0-.63-.16a4.77 4.77 0 0 1 .15-1.46 2.63 2.63 0 0 0 0-.84c0-.08-.19-.17-.23-.24a4.72 4.72 0 0 1-.57-1.61.15.15 0 0 1 .07-.16c.35-.26 1.78-1.28 1.89-1.3s3.41-.63 3.52-.59a8 8 0 0 1 2 4.12 3.09 3.09 0 0 1-.35 1.87s-.06 1.47.48 1.93z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1538 264.92a8.08 8.08 0 0 0 3.87 1.56c.54-1.4 2.3-5.93.34-6.72-2.16-.87-3.46 2.49-4.21 5.16z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1535.9 252.7c1.19.69 3.19 0 3.69.31s.69 1.53.92 1.57.19-.33.16-.78-.1-1 .69-.82c.36.07.56 1.09.82 1.88a2.91 2.91 0 0 0 .45 1 .16.16 0 0 0 .27 0c1.28-2.23 1-7.17-2.38-7.14a.17.17 0 0 1-.1 0 3.11 3.11 0 0 0-2.1-.64c-2.14.17-3.55 3.97-2.42 4.62z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1543.77 251.34c0 .18-.22.26-.22.26a23.73 23.73 0 0 1-3.5 1l-.46.12-.55.14a22.14 22.14 0 0 1-4.39.86c-.49-.19.83-1 .83-1-.4-1.16-1-4 2.64-5.17a5.38 5.38 0 0 1 .71-.19c3.59-.78 4.47 2.4 4.68 3.7a.32.32 0 0 1 .26.28z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M1543.77 251.34c0 .18-.22.26-.22.26a23.73 23.73 0 0 1-3.5 1l-.46.12a7 7 0 0 0 2.93-1.4c-1-4.34-3.56-4-3.72-4 3.59-.78 4.47 2.4 4.68 3.7a.32.32 0 0 1 .29.32zM1537.91 257a.09.09 0 0 1-.1-.07s0-.09.07-.09a.73.73 0 0 0 .52-.57.08.08 0 0 1 .1-.06.08.08 0 0 1 .06.09.89.89 0 0 1-.65.7z"
                            transform="translate(0 -56.34)" />
                        <circle className="cls-25" cx="1537.2" cy="197.8" r="0.17" />
                        <path className="cls-29" d="M1570.93 256.88l7.25 22.28a45.93 45.93 0 0 0 10.2-.38A25.46 25.46 0 0 0 1596 276l-6-20.59a69.6 69.6 0 0 1-8 1.64 45.61 45.61 0 0 1-11.07-.17z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M1600.14 267.08s-.47 6-.94 6.66-2.77-.23-2.77-.23l1.2-7.16"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1600.46 267.57a9.07 9.07 0 0 1-1.18.08 6.36 6.36 0 0 1-1.18-.09l-1 .9c0-.28.07-.63.11-1a3.11 3.11 0 0 0 0-.32.13.13 0 0 1 0-.06v-.54c0-.27.06-.56.1-.86s.06-.61.1-.93 0-.37 0-.55.07-.63.11-.95v-.79c.16-1.46.31-2.87.41-3.87a4.57 4.57 0 0 1 2.09 3.87v.43c.31 1.11.39 2.91.44 4.68z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-36" d="M1599.37 267.27c0 .13-.06.25-.09.38a6.36 6.36 0 0 1-1.18-.09l-1 .9c0-.28.07-.63.11-1a3.11 3.11 0 0 0 0-.32.13.13 0 0 1 0-.06v-.54c0-.27.06-.56.1-.86s.06-.61.1-.93c.06-.65.14-1.33.21-2v-.29l2-.31s.74.74-.25 5.12z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M1594.58 311.76v2.28c0 .39 1.52.4 1.66.2a12.59 12.59 0 0 0 .1-2.31z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1596.65 314.53a10.27 10.27 0 0 1-.14 1.33h-1.79l-.08-.3a2.8 2.8 0 0 1-1 .3h-1.5c-1.11 0-1.76-.14-1.76-.33 0-.57 1.22-.67 1.54-.78a7.47 7.47 0 0 0 2.29-1c.3-.26.09-.45.3-.39a.5.5 0 0 1 .3.27.93.93 0 0 0 .93.51 1.1 1.1 0 0 0 .61-.3.66.66 0 0 1 .3.69z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1598.38 281.65c-.37 2.52-.92 2.67-1 3.9-.53 6.39-1.68 9.37-1.75 11.09a2.18 2.18 0 0 0 .2 1.15c.55 1-3.72.79-4-.56-.09-.45-.14-.79-.18-1.09a1.54 1.54 0 0 1 0-.19c0-.43 0-.83-.08-1.47v-1.19-.94c-.08-2-.11-3.83-.12-5V282.91l.07-6.57 5.92.56a7.76 7.76 0 0 1 .94 4.75z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1595.38 296s1.54 4.37 1.48 7-.37 9.53-.37 9.53a5.55 5.55 0 0 1-2.06 0s-2.73-14.88-2.81-16.52 3.76-.01 3.76-.01z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M1596.12 282s-2.33 8-4.66 10.33c-.08-2-.11-3.83-.12-5 1.19-1.33 3.79-4.19 4.78-5.33z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M1587.4 311.71v2.28c0 .39 1.52.4 1.66.2a12.62 12.62 0 0 0 .1-2.31"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1589.47 314.48a10.52 10.52 0 0 1-.14 1.33h-1.78l-.09-.3a2.8 2.8 0 0 1-1 .3h-1.5c-1.11 0-1.76-.14-1.76-.33 0-.57 1.22-.67 1.54-.78a7.47 7.47 0 0 0 2.29-1c.3-.26.09-.45.3-.39a.5.5 0 0 1 .3.27.93.93 0 0 0 .93.51 1.07 1.07 0 0 0 .61-.3.66.66 0 0 1 .3.69zM1586 293.13a21.46 21.46 0 0 0 0 4c.17 1.38 4.4 1.94 3.93.86-.67-1.58 1.19-4.06 2.47-12.11.19-1.22.75-1.32 1.31-3.81a28.65 28.65 0 0 0 .39-6.06l-6.93.27-.63 7.35-.21 2.49s-.24 3.4-.33 7.01z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1589.71 296.07s1.22 4.46 1 7.06-1.35 9.06-1.35 9.06a5.59 5.59 0 0 1-2.06-.12s-1.62-14.81-1.32-17.64c.15-1.63 3.73 1.64 3.73 1.64z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M1595 257.1a6.64 6.64 0 0 1-.24-2.51c.18-1.06.82-3 .58-4.42s-2.05-2.64-4-2.45-2.47 2-2.79 3.09a11 11 0 0 0-.19 3.57 2.48 2.48 0 0 0 .88 1.76c.32.19 1.52-.06 1.73.17a5.77 5.77 0 0 1 .37 1.59"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1595.94 258.24a2.4 2.4 0 0 0-.42-1.14 8.21 8.21 0 0 0-3.09-.21 9.7 9.7 0 0 0-2.43 1c-.21.15.2 1 .2 1zM1595 255.29a15.05 15.05 0 0 1-3.17 0 2 2 0 0 1-1.31-1.63c-.06-.9.12-1.18-.22-1.69s-.66-.33-.71.15a5.12 5.12 0 0 1-.2 1.41c-.17.08-.37-.53-.31-1.45a5.76 5.76 0 0 1 .39-2c.24-.53.37-.5.59-.6-.24-.11-.49-.13-1-.85a1.32 1.32 0 0 1 1.17-2.12c2.47 0 5.09.49 5.14 2.32 0 0 .87-.14.9 1.53s-1 3.68-1.12 4.19.07.62-.15.74z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-38" d="M1599.75 261.8a30.59 30.59 0 0 1-.44 3.3c-.1.55-.2 1.11-.31 1.67-.22 1.13-.47 2.28-.69 3.34-.14.68-.26 1.31-.37 1.89-.17.86-.28 1.61-.37 2.24a8 8 0 0 0 .06 2.24c0 .31 0 .6-.12.7-.34.19-2.07-.49-5.46-.34-.84.06-1.85.16-2.74.24h-.07a9.86 9.86 0 0 1-2 .06c-.5-.18.23-1.47.33-2.31a16 16 0 0 0 0-2.68c-.37-3.11-1.16-7.28-1-9.86a5 5 0 0 1 0-.57c.32-2.5 3-4.18 8.88-3.82-.01.03 4.55-.37 4.3 3.9z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1599.75 261.83a52.28 52.28 0 0 1-9.14-.2s-5.32 2.24-.7 3.15a37.79 37.79 0 0 0 9.4.35zM1599 266.8c-.22 1.13-.47 2.28-.69 3.34a37.25 37.25 0 0 1-9.38-.36c-4.61-.9.71-3.15.71-3.15a50.3 50.3 0 0 0 9.36.17z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-36" d="M1588.42 275.91a1.62 1.62 0 0 1 .46-.61 2.44 2.44 0 0 0 .67-1.31 36.84 36.84 0 0 0 1.33-11.52l-2.43 6.56c-.1-.79-.2-1.63-.29-2.44a21.69 21.69 0 0 1 0-4.64c-.14.28-.54.68-1.67.94a89.67 89.67 0 0 0 1 9.29 16 16 0 0 1 0 2.68c-.1.84-.83 2.13-.33 2.31a9.76 9.76 0 0 0 2-.06c-.89.07-1.06-.62-.86-1.09z"
                            transform="translate(0 -56.34)" />
                        <g id="_Group_5" data-name="&lt;Group&gt;">
                            <path id="_Path_16" data-name="&lt;Path&gt;" className="cls-35" d="M1589.62 266.25s-2.09 7.72-3.79 8.26c-1 .31-8.48-4.46-8.48-4.46L1579 269l5.42 1.64 1.28-5.3z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-35" d="M1574.47 268.47a3.4 3.4 0 0 0-.12-.34c-.12-.23-.35-.39-.49-.61a5.59 5.59 0 0 1-.22-.57c-.08-.22-.33-.54-.16-.63-.08-.13-.19-.27-.26-.4s-.12-.31 0-.33.47.15.62.23.57.42.76.54a2.14 2.14 0 0 0 .85.32s-.13-.12-.09-.22.47 0 .85-.11c.2 0 .85.39 1 .5a6.14 6.14 0 0 1 .79 1.27 3 3 0 0 0 1.17.92l-1.33 1.29s-.28-.15-.31-.16a1.15 1.15 0 0 0-.45-.18 14.6 14.6 0 0 1-2-.74 1.79 1.79 0 0 1-.62-.77z"
                                transform="translate(0 -56.34)" />
                            <g id="_Group_6" data-name="&lt;Group&gt;">
                                <path id="_Path_17" data-name="&lt;Path&gt;" className="cls-29" d="M1575.46 266.68a2.21 2.21 0 0 0 .82.2c.2 0 .24.12.45.15-.25.14-.3 0-.76 0a.79.79 0 0 1-.58-.19.07.07 0 0 1 .07-.11z"
                                    transform="translate(0 -56.34)" />
                            </g>
                        </g>
                        <path className="cls-25" d="M1589.46 267.74a12.17 12.17 0 0 1-4.21-1c.41-4.22 1.47-6.12 2.21-7a1.92 1.92 0 0 1 1.87-.62c.8.18 1.76.88 1.76 3.15a20.26 20.26 0 0 1-1.63 5.47z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-31" d="M1596.43 251.71c0 .18-.32.15-.32.15a24.16 24.16 0 0 1-3.68-.52l-.47-.08-.58-.1h-.05a23.34 23.34 0 0 1-4.45-1c-.37-.38 1.2-.6 1.2-.6.11-1.25.78-4.13 4.62-3.73.26 0 .51.06.74.11 3.68.77 3.17 4.11 2.83 5.41a.32.32 0 0 1 .16.36z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1596.43 251.71c0 .18-.32.15-.32.15a24.16 24.16 0 0 1-3.68-.52l-.47-.08a7.21 7.21 0 0 0 3.31-.08c.86-4.48-1.67-5.18-1.82-5.25 3.68.77 3.17 4.11 2.83 5.41a.32.32 0 0 1 .15.37zM1186.81 592.05a12.61 12.61 0 0 1 4-9.26 4.36 4.36 0 0 0 1.39-3.21 18.94 18.94 0 1 1 37.87.31 8.65 8.65 0 0 0 1.62 4.94 12.67 12.67 0 0 1-1.09 15.83 3.42 3.42 0 0 0-.94 2.32v.17A12.67 12.67 0 0 1 1217 615.8h-.79a57 57 0 0 0-10.85.4 12.59 12.59 0 0 1-2.61.07 12.71 12.71 0 0 1-11.58-10.89c0-.22 0-.44-.07-.66a10 10 0 0 0-1.83-5.13 12.56 12.56 0 0 1-2.46-7.54z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1203.79 563.9h14.76l-2.91 14.76h-8.95l-2.9-14.76z"
                        />
                        <path className="cls-39" d="M1211.17 563.9v-47.4M1211.17 537.22l-11.19-7.75M1211.17 545.88l6.13-5.95"
                        />
                        <path className="cls-33" d="M1231.8 571.11a3.15 3.15 0 0 1-3.15 3.15 3.15 3.15 0 0 1 3.15-3.15z"
                            transform="rotate(-180 1230.225 544.515)" />
                        <path className="cls-33" d="M1192.25 569.77a2 2 0 0 1 1.36-.36 2.13 2.13 0 0 1-.13-1 2.08 2.08 0 0 1 1.76 2.34 1.82 1.82 0 0 1-.61-.2 2.06 2.06 0 0 1-2.38-.78zM1189.88 602.19a2.1 2.1 0 0 0 .62 2.1 2.11 2.11 0 0 0 .38-2.19 2.08 2.08 0 0 0 .7-.41 2.1 2.1 0 0 0-3-.18 2.08 2.08 0 0 0 1.3.68zM1210.1 560.36a2.6 2.6 0 0 1 2.33-1.36 2.28 2.28 0 0 0-1.24 3.25 2.61 2.61 0 1 1-1.09-1.89z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" transform="rotate(-45 1314.058 270.17)" d="M1379.68 273.39h4.79v49.89h-4.79z"
                        />
                        <path className="cls-33" d="M1361.74 158.27h4.79v99.77h-4.79z" />
                        <path className="cls-20" d="M223.84 234.06h324.83v94.15H223.84z" />
                        <path className="cls-33" d="M288.56 265.09h29.52v63.34h-29.52z" />
                        <path className="cls-40" d="M291.23 267.43h24.17v61h-24.17z" />
                        <circle className="cls-29" cx="311.07" cy="296.87" r="1.02" />
                        <path className="cls-25" d="M442.29 240.16h.46v9.55h-.46zM503.85 240.16h.46v9.55h-.46z"
                        />
                        <path fill="url(#linear-gradient-13)" d="M438.96 251.22h68.68v5.7h-68.68z"
                        />
                        <path className="cls-33" d="M436.94 249.71h72.73v5.7h-72.73z" />
                        <path className="cls-25" d="M344.24 240.16h.46v9.55h-.46zM405.79 240.16h.46v9.55h-.46z"
                        />
                        <path fill="url(#linear-gradient-14)" d="M340.91 251.22h68.68v5.7h-68.68z"
                        />
                        <path className="cls-33" d="M338.88 249.71h72.73v5.7h-72.73z" />
                        <path className="cls-25" d="M250.01 240.16h.46v9.55h-.46zM311.57 240.16h.46v9.55h-.46z"
                        />
                        <path fill="url(#linear-gradient-15)" d="M246.68 251.22h68.68v5.7h-68.68z"
                        />
                        <path className="cls-33" d="M244.66 249.71h72.73v5.7h-72.73z" />
                        <path className="cls-44" d="M399.49 435.37a1.28 1.28 0 0 1 .49 1.2c-.07.34-.66.71-1.41 1.3a8.69 8.69 0 0 1-2.37 1.59 2.47 2.47 0 0 1-2.46-1.26c-.06-.56 2.22-2.54 3.29-3.35s2.46.52 2.46.52z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M394.65 436.55a1 1 0 0 0-.41.37 1 1 0 0 0-.1.42 1.68 1.68 0 0 0 .06.92 1.14 1.14 0 0 0 .32.37 2 2 0 0 0 1.48.37c1.18-.16 2-1.37 3-2.08a2.4 2.4 0 0 0 .63-.52.77.77 0 0 0 .11-.81.62.62 0 0 0-.27-.26 3.64 3.64 0 0 0-2.46-.52c-.79.27-1.61 1.29-2.36 1.74z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-45" d="M398.26 438a.18.18 0 0 0 .16-.08.19.19 0 0 0-.05-.25c-.07 0-1.51-1-2.46 0-.11-.87-.39-1.38-.84-1.48a.18.18 0 0 0-.22.14.19.19 0 0 0 .14.22c.37.09.49.75.52 1.14a.39.39 0 0 0 .66.24c.74-.75 2 .07 2 .08a.19.19 0 0 0 .09-.01z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-44" d="M413.09 434.79a1.31 1.31 0 0 1 .71 1.08c0 .35-.52.83-1.15 1.55a8.5 8.5 0 0 1-2 2 2.45 2.45 0 0 1-2.65-.78c-.16-.53 1.7-2.9 2.61-3.9s2.48.05 2.48.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M408.56 436.86a.93.93 0 0 0-.34.44 1.23 1.23 0 0 0 0 .43 1.59 1.59 0 0 0 .24.89.93.93 0 0 0 .38.3 2 2 0 0 0 1.51.13c1.14-.38 1.73-1.72 2.59-2.61a2.38 2.38 0 0 0 .52-.62.8.8 0 0 0 0-.83.69.69 0 0 0-.31-.2 3.62 3.62 0 0 0-2.51-.05c-.82.38-1.43 1.53-2.08 2.12z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-45" d="M410 438a.38.38 0 0 0 .32-.18c.58-.86 2-.29 2-.28a.19.19 0 0 0 .24-.1.18.18 0 0 0-.09-.24c-.07 0-1.68-.7-2.42.42-.27-.83-.64-1.28-1.11-1.3a.2.2 0 0 0-.19.18.19.19 0 0 0 .18.19c.38 0 .62.65.73 1a.37.37 0 0 0 .31.28z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M415.38 351.74l-2.18 27.3h-2.7l-.54-27.3h5.42zM399.35 352.68l-2.44 26.36h2.7l5.48-27.3-5.74.94z"
                        />
                        <path className="cls-44" d="M405.26 374.13s-3.78 4.49-4.26 13.53-5.61 43.92-5.61 43.92a25.64 25.64 0 0 0 15.46 1.12l4.67-1.12s5.57-48.58-1.87-58z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M399.87 331.04l4.5 1.95 1.52-11.99-6.02.1v9.94z"
                        />
                        <path className="cls-1" d="M418.22 364.9l2.85 7.62a2.2 2.2 0 0 1-.82 2.58l-7.9 3.78-1.15-1.83 6.16-3.53-2.63-7.37zM398.31 373.73l3-9.34 3.05 1-2.74 8a3.14 3.14 0 0 0-.12 1.55l1.75 10.06-2.25.91-2.73-11.42a1.51 1.51 0 0 1 .04-.76z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-38" d="M420 366.13l-2.08-3.91a5.08 5.08 0 0 0-2.56-2.32l-4-1.66a5.07 5.07 0 0 0-4 .06l-3.44 1.54a5.06 5.06 0 0 0-2.42 2.26l-2.14 4 4.46 1.24 1.49 6.76 8.39-.57 1.62-6.12z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M413.3 344.4s4.23-.72 3.58 3.16c-.79 4.73-5.1 1.21-5.1 1.21z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M407.79 348.53v10.76a4.94 4.94 0 0 0 2.37.89c.92 0 1.66 0 1.66-1.06v-10.59z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M408.87 353.64c0 2 2 3.14 2.95 3.55v-3.55z"
                            transform="translate(0 -56.34)" />
                        <circle className="cls-1" cx="410.16" cy="348.77" r="5.17" transform="rotate(-17.37 225.668 320.563)"
                        />
                        <path className="cls-1" d="M412 355.61a2.46 2.46 0 0 1-2.46-2.45v-3.54l5.83-.85v3.47a3.37 3.37 0 0 1-3.37 3.37z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M415.18 349.93l1.13 1.66a.41.41 0 0 1-.38.61l-1.31.24z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M410.43 350.49s5.63-3.55 3.88-6.09c-2.72-3.93-8 0-8 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M408 343.55s-4 1.39-3.25 4.48c.65 2.63-1.21 2.76-1.8 4.41-1.82 5.12.69 5.07 1 7.4l2.38-1.06a7.78 7.78 0 0 0 3.58-3c.83-1.4 1.31-3.21-.14-4.87 0 0-.15-2.59 1.75-2.94z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M410.66 350.49a1.14 1.14 0 1 1-1.14-1.13 1.14 1.14 0 0 1 1.14 1.13z"
                            transform="translate(0 -56.34)" />
                        <circle className="cls-25" cx="414.47" cy="293.27" r="0.25" />
                        <path className="cls-25" d="M414 354.2h.24a.12.12 0 0 0 .1-.14.12.12 0 0 0-.14-.09s-.72.12-.91-.37a.12.12 0 0 0-.15-.07.11.11 0 0 0-.07.15.92.92 0 0 0 .93.52z"
                            transform="translate(0 -56.34)" />
                        <circle className="cls-29" cx="409.37" cy="295.28" r="0.43" />
                        <path className="cls-1" d="M408.14 357.88l-2.6 1.21s.26 2.05 4 2.05c4.19 0 4.18-2 4.18-2l-4.36-1.77zM408.31 379.36a3 3 0 0 1-1.09-.5c-.32-.31-.2-.45-.06-.59a3.31 3.31 0 0 1 .72-.44 2 2 0 0 1 .79-.32 2.16 2.16 0 0 1 .86.17 11.21 11.21 0 0 1 2 .82c.85.5.42.91-.28 1.21-1.25.52-1.63.05-2.94-.35z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M413.06 378.79a1.72 1.72 0 0 1-1.44.85 2.57 2.57 0 0 1-.68 0 6.35 6.35 0 0 1-1-.4c-.3-.11-.62-.17-.93-.28a1.18 1.18 0 0 1-.71-.52.8.8 0 0 1 .44-.95 2.74 2.74 0 0 1 1.28-.3 6.34 6.34 0 0 1 2.65.28 1 1 0 0 1 .39 1.32z"
                            transform="translate(0 -56.34)" />
                        <path fill="#1a1a1a" d="M410.87 321.99l-1.01.42-2.74-.76v-.59l1.53-.33 2.36.58-.14.68z"
                        />
                        <path className="cls-47" d="M407.12 321.06l2.74.67v.68l-2.74-.76v-.59z"
                        />
                        <circle className="cls-45" cx="409.32" cy="321.91" r="0.15" />
                        <path d="M411.13 376.59a.91.91 0 0 0-.31-.12.81.81 0 0 0-.31.06l-1.34.47a.58.58 0 0 0-.31.19.4.4 0 0 0 .22.55 1 1 0 0 0 .66 0 5 5 0 0 0 .64-.26 6 6 0 0 0 .49.64 1.19 1.19 0 0 0 .57.43 1.28 1.28 0 0 0 1-.36 1.07 1.07 0 0 0 .29-.27c.25-.41-.24-.55-.52-.71z"
                            transform="translate(0 -56.34)" fill="url(#linear-gradient-16)" />
                        <path className="cls-1" d="M403.8 385.7a.55.55 0 0 1 .2.17.62.62 0 0 1 .08.24 2.13 2.13 0 0 1-.11 1.23c-.08.17-.19.32-.34.3s-.2-.15-.24-.29a1 1 0 0 1 0-.46.44.44 0 0 0 0-.2.49.49 0 0 0-.23-.33.59.59 0 0 1-.25-.47.42.42 0 0 1 .14-.32c.3-.22.5-.02.75.13z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M401.71 384.68a1.69 1.69 0 0 0-.81.57 2 2 0 0 0-.17.43l-.26.89a5.12 5.12 0 0 0-.28 1.59 1.46 1.46 0 0 0 .12.54 1.3 1.3 0 0 0 .95.58 2.89 2.89 0 0 0 1.69-.19.5.5 0 0 0 .17-.11.46.46 0 0 0 .06-.49 3.3 3.3 0 0 1-.18-.49c-.09-.45.27-.84.49-1.24a2.15 2.15 0 0 0-.08-2.06c-.41-.7-1.12-.28-1.7-.02z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M405.89 321l.57.1-1.47 11.89h-.62l1.52-11.99z"
                        />
                        <path fill="#acb6c6" d="M405.89 321l.26.04-1.51 11.95h-.27l1.52-11.99z"
                        />
                        <path className="cls-44" d="M400.62 384.32a4.87 4.87 0 0 0 2.38-.76l-.22-1.31a11.37 11.37 0 0 1-2.46 1z"
                            transform="translate(0 -56.34)" />
                        <ellipse cx="400.78" cy="383.78" rx="0.75" ry="0.96" transform="rotate(-17.51 217.967 355.665)"
                            fill="#282838" />
                        <ellipse className="cls-44" cx="400.6" cy="383.86" rx="0.75" ry="0.96"
                            transform="rotate(-17.51 217.784 355.77)" />
                        <ellipse className="cls-20" cx="400.6" cy="383.86" rx="0.6" ry="0.77"
                            transform="rotate(-17.51 217.784 355.77)" />
                        <path className="cls-33" d="M409.65 360.24l2.22-1.76a.08.08 0 0 0 0-.12.08.08 0 0 0-.12 0l-2.1 1.67-1.82-2a.09.09 0 0 0-.12 0 .08.08 0 0 0 0 .11z"
                            transform="translate(0 -56.34)" />
                        <circle className="cls-33" cx="409.66" cy="303.84" r="0.43" />
                        <circle className="cls-25" cx="409.66" cy="303.84" r="0.31" />
                        <path className="cls-25" d="M434.96 320.99h31.4v1.35h-31.4z" />
                        <path className="cls-29" d="M453.33 320.87l-3.47-10.54.53-.17 3.37 10.24h10.76v.56h-11.19v-.09z"
                        />
                        <path fill="url(#linear-gradient-17)" d="M460.42 320.4h-6.66l-3.37-10.24 11.55-9.16 2.58 19.4h-4.1z"
                        />
                        <path className="cls-33" d="M461.11 345.62l.05 2.36-2.13.29-.47-2.41 2.55-.24z"
                        />
                        <path className="cls-25" d="M461.06 404l-2 .58a11.52 11.52 0 0 1-5.07 2.81.45.45 0 0 0-.36.41.44.44 0 0 0 .41.47c1 .07 3.07.6 4.91-.42a2.36 2.36 0 0 1 1.25-.3l1.75-.66a.55.55 0 0 0 .28-.78z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M463.23 346.51l.79 2.51-2.21.55-1.01-2.24 2.43-.82z"
                        />
                        <path className="cls-1" d="M480.28 349.27h.28a2.11 2.11 0 0 1 2.11 2.11v9.52h-5v-9.07a2.56 2.56 0 0 1 2.56-2.56z"
                            transform="rotate(171.1 482.39 326.918)" />
                        <path className="cls-29" d="M479.75 354.85a3.18 3.18 0 0 1-1.53 3.61l-.22-1.66z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M477.85 357.3a2.56 2.56 0 0 0 2.13-2.93l-.79-5.09-6 .93.65 4.16a3.51 3.51 0 0 0 4.01 2.93z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M473.54 351.46l-.89 1.9a.42.42 0 0 0 .48.56h1.39z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M473.2 350.3a5.39 5.39 0 1 0 4.49-6.16 5.39 5.39 0 0 0-4.49 6.16z"
                            transform="translate(0 -56.34)" />
                        <g clipPath="url(#clip-path)">
                            <path className="cls-25" d="M478.36 351.86a4.25 4.25 0 0 1-1.43-4.28s-4.38 1.11-5.41-.08c0 0 2.82-7.1 9.24-4.82s4.77 9.47 4.77 9.47l-4.67 2.17z"
                                transform="translate(0 -56.34)" />
                        </g>
                        <path className="cls-25" d="M482.36 352.08l.28 2.55s-2.66 1.05-3.05-1.47h1.68z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M475.42 288.54l.48 3.01" />
                        <path className="cls-25" d="M482.53 345.87a2 2 0 0 0-2.09-2.52c-6.69-.47-7.82 5.15-7.82 5.15l7.54-1.28zM482.53 345.87a2.39 2.39 0 0 1 2.09 2.41 9.51 9.51 0 0 1-2 6.35l-1.56-7.89z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M478.32 352.25a1.13 1.13 0 1 0 .94-1.29 1.12 1.12 0 0 0-.94 1.29z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M456.68 385.68a4.33 4.33 0 0 1 2.59-1l15.55-.68 3.13 1a1.75 1.75 0 0 0-.28.13l-.47.26a4.57 4.57 0 0 0-1.49 1.3 53 53 0 0 0-5.94-.59c-3.35.15-4.68 3.12-4.17 5.67l-4.73-.62.45 11.08-2.92.71-3.13-12.94a4.33 4.33 0 0 1 1.41-4.32z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M487.67 386.26s-2.22 6.6-9 6.6h-16.8l1.87 10.93-2.81 1.07-4.76-12.41A4.3 4.3 0 0 1 457 388a4.28 4.28 0 0 1 2.44-1.33l15.34-2.67zM467.67 371.3a5.52 5.52 0 0 0-1.31-.65 3.12 3.12 0 0 0-1.29 0 15.4 15.4 0 0 0-3 1c-.28.12-.61.31-.59.62a.6.6 0 0 0 .18.34 2.15 2.15 0 0 0 1.18.66 5.25 5.25 0 0 0 1.37.11.49.49 0 0 1 .24 0 .65.65 0 0 1 .17.2.77.77 0 0 0 .61.26 3.08 3.08 0 0 0 .67-.09 8.75 8.75 0 0 1 3 .17 11.18 11.18 0 0 0 .47-2.28c-.14-.17-.44 0-.63 0a2.39 2.39 0 0 1-1.07-.34z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M468.25 374.13l6.27.64 3.15.31 1.71.18h.62a3.65 3.65 0 0 0 2-.83c-.13-.1-.25-.2-.38-.32-.4-.38-.79-.79-1.17-1.19-.58-.59-1.14-1.19-1.71-1.8h-.35l-3.91.13-5.79.18z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-53" d="M474.52 371.26v3.51l3.15.31 1.71.18h.62a3.65 3.65 0 0 0 2-.83c-.13-.1-.25-.2-.38-.32-.4-.38-.79-.79-1.17-1.19-.58-.59-1.14-1.19-1.71-1.8h-.35z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M489.11 364.89c-1.2-5.76-5.54-7.61-9.26-5.31l-1.69.87c-1.17 1.65-2.34 11.54-2.58 15.37a1.48 1.48 0 0 1 0 .21c-.09 1.51-.22 3-.35 4.18v.39c-.21 2-.4 3.39-.4 3.39l12.88 2.27s3.29-12.16 1.4-21.37z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M464.76 372.39a6.32 6.32 0 0 0-1.43-.86 3.64 3.64 0 0 0-1.47-.08 17.2 17.2 0 0 0-3.47.83c-.33.11-.72.3-.72.65a.71.71 0 0 0 .17.41 2.52 2.52 0 0 0 1.28.86 6.78 6.78 0 0 0 1.55.25.41.41 0 0 1 .27.07.76.76 0 0 1 .18.24.9.9 0 0 0 .66.35 4.09 4.09 0 0 0 .78-.05 10.09 10.09 0 0 1 3.35.46 12.61 12.61 0 0 0 .75-2.55c-.15-.2-.51-.06-.72-.08a2.58 2.58 0 0 1-1.18-.5z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-53" d="M475.22 380.21l2.49.45a4.12 4.12 0 0 0 4.48-2.35l3.86-8.51s3.7-7.45-1.43-6.51a14.18 14.18 0 0 0-5.74 2.1l-1.28 10.53-2-.1a1.48 1.48 0 0 1 0 .21c-.12 1.51-.25 2.97-.38 4.18z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M487.41 364.07l-5.22 11.52a4.11 4.11 0 0 1-4.48 2.35l-12.55-2.28.79-3 11.65.56 1.28-10.53a5.6 5.6 0 0 1 5.74-2.1c3.93.68 2.79 3.48 2.79 3.48z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M474.25 355.6a.12.12 0 0 1-.13-.12.13.13 0 0 1 .13-.13 1.14 1.14 0 0 0 .95-.7.13.13 0 0 1 .16-.07.13.13 0 0 1 .07.17 1.36 1.36 0 0 1-1.18.85z"
                            transform="translate(0 -56.34)" />
                        <circle className="cls-25" cx="474.01" cy="294.73" r="0.26" />
                        <path className="cls-53" d="M478.28 370.33a65.61 65.61 0 0 1 3.72-8.93 12.57 12.57 0 0 0-3.72 8.93z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M464 405.14l-2.2.77a13.06 13.06 0 0 1-5.55 3.43.5.5 0 0 0-.38.48.49.49 0 0 0 .49.49c1.18 0 3.51.48 5.52-.77a2.65 2.65 0 0 1 1.39-.41l1.94-.84a.6.6 0 0 0 .26-.88z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M483.58 356.66l-6.11 2.79.69 1.95 6.89-2.37s.03-1.03-1.47-2.37zM482.2 346.1v-.2.1-.1s.41-.09.52-1h.2c-.16 1.1-.66 1.19-.72 1.2z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" transform="rotate(-11.61 205.965 317.686)" d="M482.46 345.65h.82v.2h-.82z"
                        />
                        <path className="cls-25" transform="rotate(-180 399.93 349.825)" d="M359.79 377.3h80.28v1.38h-80.28z"
                        />
                        <path className="cls-29" d="M372.82 320.87l3.47-10.54-.54-.17-3.37 10.24h-10.75v.56h11.19v-.09z"
                        />
                        <path fill="url(#linear-gradient-18)" d="M365.73 320.4h6.65l3.37-10.24L364.2 301l-2.57 19.4h4.1z"
                        />
                        <path className="cls-33" d="M365.04 345.62l-.06 2.36 2.14.29.47-2.41-2.55-.24z"
                        />
                        <path className="cls-25" d="M365.09 404l2 .58a11.52 11.52 0 0 0 5.07 2.81.47.47 0 0 1 .36.41.44.44 0 0 1-.41.47c-1 .07-3.07.6-4.91-.42a2.38 2.38 0 0 0-1.25-.3l-1.75-.66a.55.55 0 0 1-.28-.78z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M362.92 346.51l-.79 2.51 2.21.55 1.01-2.24-2.43-.82z"
                        />
                        <path className="cls-1" d="M343.47 349.27h5v9.52a2.11 2.11 0 0 1-2.11 2.11H346a2.56 2.56 0 0 1-2.56-2.56v-9.07h.03z"
                            transform="rotate(8.9 707.947 326.974)" />
                        <path className="cls-29" d="M346.4 354.85a3.18 3.18 0 0 0 1.53 3.61l.26-1.66z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M348.3 357.3a2.57 2.57 0 0 1-2.14-2.93l.8-5.09 6 .93-.65 4.16a3.51 3.51 0 0 1-4.01 2.93z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M352.61 351.46l.89 1.9a.43.43 0 0 1-.48.56h-1.39z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M353 350.3a5.39 5.39 0 1 1-4.49-6.16 5.39 5.39 0 0 1 4.49 6.16z"
                            transform="translate(0 -56.34)" />
                        <g clipPath="url(#clip-path-2)">
                            <path className="cls-25" d="M347.79 351.86a4.23 4.23 0 0 0 1.42-4.28s4.39 1.11 5.42-.08c0 0-2.82-7.1-9.25-4.82s-4.76 9.47-4.76 9.47l4.67 2.17z"
                                transform="translate(0 -56.34)" />
                        </g>
                        <path className="cls-25" d="M343.78 352.08l-.27 2.55s2.65 1.05 3.05-1.47h-1.68z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M350.72 288.54l-.47 3.01" />
                        <path className="cls-25" d="M343.62 345.87a2 2 0 0 1 2.09-2.52c3.76-.27 6.44 3.18 8.87 2.29.42-.15.43 0 .24.34-.81 1.31-1 2.79-4 2l-4.8-.81zM343.62 345.87a2.39 2.39 0 0 0-2.09 2.41 9.51 9.51 0 0 0 2 6.35l1.56-7.89z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M347.83 352.25a1.14 1.14 0 1 1-.95-1.29 1.12 1.12 0 0 1 .95 1.29z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M369.46 385.68a4.28 4.28 0 0 0-2.58-1l-15.56-.68-3.12 1a1.75 1.75 0 0 1 .28.13l.47.26a4.57 4.57 0 0 1 1.49 1.3 52.83 52.83 0 0 1 5.94-.59c3.35.15 4.68 3.12 4.16 5.67l4.73-.62-.45 11.08 2.93.71 3.12-12.94a4.29 4.29 0 0 0-1.41-4.32z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M338.48 386.26s2.22 6.6 8.95 6.6h16.85l-1.87 10.93 2.81 1.07 4.78-12.41a4.3 4.3 0 0 0-.84-4.45 4.31 4.31 0 0 0-2.44-1.33L351.36 384zM358.48 371.3a5.34 5.34 0 0 1 1.31-.65 3.12 3.12 0 0 1 1.29 0 15.4 15.4 0 0 1 3 1c.28.12.61.31.59.62a.6.6 0 0 1-.18.34 2.15 2.15 0 0 1-1.18.66 5.25 5.25 0 0 1-1.37.11.53.53 0 0 0-.25 0 .78.78 0 0 0-.16.2.77.77 0 0 1-.61.26 3 3 0 0 1-.67-.09 8.75 8.75 0 0 0-3 .17 11.18 11.18 0 0 1-.47-2.28c.14-.17.44 0 .63 0a2.39 2.39 0 0 0 1.07-.34z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M357.9 374.13l-6.27.64-3.15.31-1.71.18h-.67a3.62 3.62 0 0 1-2-.83c.13-.1.25-.2.38-.32.4-.38.79-.79 1.17-1.19l1.71-1.8h.35l3.91.13 5.78.18z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-53" d="M351.63 371.26v3.51l-3.15.31-1.71.18h-.67a3.62 3.62 0 0 1-2-.83c.13-.1.25-.2.38-.32.4-.38.79-.79 1.17-1.19l1.71-1.8h.35z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M337 364.89c1.19-5.76 5.53-7.61 9.26-5.31l1.69.87c1.16 1.65 2.33 11.54 2.58 15.37a1.48 1.48 0 0 0 0 .21c.09 1.51.22 3 .35 4.18v.39c.21 2 .4 3.39.4 3.39l-12.89 2.27s-3.25-12.16-1.39-21.37z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M361.22 374a5.73 5.73 0 0 1 1.49-.73 3.47 3.47 0 0 1 1.47 0 17.05 17.05 0 0 1 3.39 1.12c.32.13.69.36.66.7a.67.67 0 0 1-.2.39 2.43 2.43 0 0 1-1.35.75 6.81 6.81 0 0 1-1.56.13.44.44 0 0 0-.28 0 1.06 1.06 0 0 0-.19.23.88.88 0 0 1-.69.29 3.33 3.33 0 0 1-.77-.11 10.12 10.12 0 0 0-3.38.18 11.7 11.7 0 0 1-.53-2.6c.16-.19.5 0 .71 0a2.56 2.56 0 0 0 1.23-.35z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-53" d="M350.15 381l-2.52.25a4.14 4.14 0 0 1-4.28-2.71l-3.14-8.8s-3.08-7.73 2-6.38a14.4 14.4 0 0 1 5.55 2.57l.41 10.6 2 .07a1.47 1.47 0 0 1 0 .21c-.06 1.47-.05 2.92-.02 4.19z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M339.32 363.87l4.26 11.92a4.12 4.12 0 0 0 4.27 2.71l12.7-1.24-.54-3.08-11.66-.4-.4-10.6a5.64 5.64 0 0 0-5.56-2.57c-3.97.39-3.07 3.26-3.07 3.26z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M351.9 355.6a.12.12 0 0 0 .12-.12.12.12 0 0 0-.12-.13 1.12 1.12 0 0 1-.95-.7.14.14 0 0 0-.16-.07.12.12 0 0 0-.07.17 1.36 1.36 0 0 0 1.18.85z"
                            transform="translate(0 -56.34)" />
                        <circle className="cls-25" cx="352.14" cy="294.73" r="0.26" />
                        <path className="cls-53" d="M347.91 370.87a65 65 0 0 0-3-9.21 12.6 12.6 0 0 1 3 9.21z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M362.13 405.14l2.21.77a13.06 13.06 0 0 0 5.55 3.43.5.5 0 0 1 .38.48.49.49 0 0 1-.49.49c-1.18 0-3.51.48-5.52-.77a2.65 2.65 0 0 0-1.39-.41l-1.94-.84a.61.61 0 0 1-.27-.88z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M342.57 356.66l6.11 2.79-.68 1.95-6.9-2.37s-.03-1.03 1.47-2.37z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M300.58 176.91h1v36h-1z" />
                        <path className="cls-33" transform="rotate(-40.73 222.739 202.406)" d="M298.16 213.98h1v33.21h-1z"
                        />
                        <path className="cls-33" d="M279.96 164.54h21.75v1h-21.75zM282.58 168.16h21.75v1h-21.75zM285.08 171.29h21.75v1h-21.75zM287.08 174.54h21.75v1h-21.75zM295 179.54h21.75v1H295zM296.87 183.04h21.75v1h-21.75z"
                        />
                        <path className="cls-33" d="M896.48 373.79a6.12 6.12 0 0 0-.83-.36l-.16-.05a5.41 5.41 0 0 0-1.47-2.26 6.26 6.26 0 0 0-2.24-1.53l-.38-.13c-.12-.35-.31-.68-.41-1s-.36-.91-.77-.76-.62.68-.75 1.06-.16.61-.25.91v.1a6 6 0 0 0-.92.74 2.84 2.84 0 0 1-1.23.66 6.07 6.07 0 0 1-3.2-.41 12 12 0 0 1-2.14-.94c-1.24-.71-2.4-1.47-3.58-2.26a14.5 14.5 0 0 0-2.31-1.29 8.79 8.79 0 0 0-5.86-.61q-.62.17-1.23.39l-2.22 1.78-.66 1a4.57 4.57 0 0 0-.83 3 7.24 7.24 0 0 0 .33 1.52 5.2 5.2 0 0 0 .3.76 2 2 0 0 1-.51 1.41 8.75 8.75 0 0 1-2.28 1.5 3 3 0 0 0-.88.79 2.2 2.2 0 0 0-.32 1.23 6.86 6.86 0 0 0 .61 3 2.85 2.85 0 0 0 1.57 1.86 1.21 1.21 0 0 0 .88 0 .87.87 0 0 0 .34-.95c-.08-.37-.43-.66-.62-1a1.83 1.83 0 0 1-.07-1.45c.39-.87 1.75-.74 2.5-1.07a4 4 0 0 0 1.67-1.43l.12.16a2.69 2.69 0 0 1 .41 1.39v1.43a2.79 2.79 0 0 0 .48 1.2 5.9 5.9 0 0 0 2 1.76 9.31 9.31 0 0 0 1.22.52 2.18 2.18 0 0 0 1.17.23c.64-.13 1.31-.78.67-1.35-.29-.26-.66-.42-1-.69a6 6 0 0 1-1-1.1 2 2 0 0 1 .26-2.37l.46-.26a16.24 16.24 0 0 1 2.09 0 18.89 18.89 0 0 1 3.26.5c.52.12 1 .25 1.57.36-.1.23-.21.46-.3.69a2.47 2.47 0 0 0 .1 2.58 6 6 0 0 0 2.29 1.71 2 2 0 0 0 2.21-.24c.63-.71-.61-1.28-1-1.61a2.82 2.82 0 0 1-.94-.91c-.29-.55 0-1 .47-1.3a12.33 12.33 0 0 1 2.23-.8c.27-.08.52-.17.78-.27l.25.21a13.1 13.1 0 0 0 1.09.88c.39.3.75.64 1.16.91l1.25.84a10.81 10.81 0 0 0 2.64 1.3 2.27 2.27 0 0 0 2.28-.32c.55-.53 0-1.24-.54-1.46a4.67 4.67 0 0 0-1.34-.25 3.16 3.16 0 0 1-1.33-.46 5.79 5.79 0 0 1-1-.81c-.33-.32-.87-.86-1.18-1.2s-.52-.56-.77-.85h.31a9 9 0 0 1 1.48.12 4.1 4.1 0 0 0 2.66-.63 5.56 5.56 0 0 0 2.12-2.26 3.29 3.29 0 0 0 1.07-.23c.36-.14.94-.27 1-.71s-.5-.77-.78-.92z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M891.51 373.05a.46.46 0 0 0-.34-.32.41.41 0 0 0-.42.11.37.37 0 0 0-.07.36v.05a.42.42 0 0 0 .57.28.44.44 0 0 0 .26-.48zM893.61 374.45a.35.35 0 0 0-.39 0 .38.38 0 0 0-.23.2.39.39 0 0 0 .2.5.4.4 0 0 0 .48-.11.42.42 0 0 0-.06-.59zM892.08 374.89a1.13 1.13 0 0 0-.53-.3.4.4 0 0 0-.41.27.71.71 0 0 0 0 .25c-.1.28.07.7.38.71s.87-.08.86-.43a.69.69 0 0 0-.3-.5z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M870.53 357.65a1.66 1.66 0 0 1-1.54.65 2.09 2.09 0 0 1-1.06-.45 2 2 0 0 1-.42-.4c-.5-.61-.73-1.41-1.25-2a2.05 2.05 0 0 0-.41-.37 3 3 0 0 0-2.11-.54 3.43 3.43 0 0 0-1.49.47 3.13 3.13 0 0 0-.62.48 4.26 4.26 0 0 0-.88 1.09 5.06 5.06 0 0 0-.42.88 6.72 6.72 0 0 0-.31 1.17 7.08 7.08 0 0 0-.1 1.13 5.23 5.23 0 0 0 .09 1 5.08 5.08 0 0 0 .48 1.52 4.84 4.84 0 0 0 1.77 1.88 4.55 4.55 0 0 0 1.17.52 2.59 2.59 0 0 0 .4.09c.44.11.9.16 1.35.24a4.25 4.25 0 0 1 1.25.4c1.84.95 2.21 4-.21 4.34a2.12 2.12 0 0 0 0-1.64 2.61 2.61 0 0 0-1.93-1c-.44-.08-.89-.17-1.34-.28a10.89 10.89 0 0 1-1.95-.65 5.53 5.53 0 0 1-1.79-1.24l-.15-.17a6.9 6.9 0 0 1-1.36-3.54c0-.24-.06-.49-.08-.73s0-.6 0-.9a9.63 9.63 0 0 1 .09-1.86 5.3 5.3 0 0 1 .27-1 7.89 7.89 0 0 1 .33-.72l.09-.17a5.51 5.51 0 0 1 .57-.88 5.35 5.35 0 0 1 1.82-1.52 6.25 6.25 0 0 1 1.25-.46 7.57 7.57 0 0 1 1.14-.2 11.2 11.2 0 0 1 3.06.1l.6.11a6.09 6.09 0 0 1 2.15.81 4.22 4.22 0 0 1 1 .88 4 4 0 0 1 .55.77 2.25 2.25 0 0 1-.01 2.19z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M890.15 374.5c-.52-.21-1-.47-1.5-.7s-1-.51-1.46-.81c.51.2 1 .47 1.51.7s.98.51 1.45.81zM889.8 374.93c-.36-.05-.71-.15-1.07-.18s-.72-.1-1.08-.17a5 5 0 0 1 1.09.05 4.92 4.92 0 0 1 1.06.3zM890.41 374.12c-.27-.25-.52-.53-.8-.77s-.55-.5-.82-.76a5.84 5.84 0 0 1 .9.67 6 6 0 0 1 .72.86zM892.67 376.35c.35.43.74.82 1.11 1.23s.78.78 1.21 1.15c-.35-.44-.75-.82-1.12-1.23s-.78-.79-1.2-1.15zM892.36 376.81c.16.33.35.64.49 1s.31.65.48 1a5.47 5.47 0 0 0-.36-1 5.65 5.65 0 0 0-.61-1zM893 376c.33.19.66.34 1 .54s.63.38 1 .56a5.34 5.34 0 0 0-.9-.66 6.36 6.36 0 0 0-1.1-.44z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-56" d="M868.52 377.94s2.73-3.6 3.2-6.1c0 0 2.49 3.54 1.68 7 0 .02-3.24.16-4.88-.9zM886.13 379.61a19.66 19.66 0 0 1-5.81.15s3.59-.54 3.59-2.82a9.49 9.49 0 0 0 2.22 2.67z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M891.31 376.94a1.77 1.77 0 0 1-1.14-.9.12.12 0 0 1 .06-.16.12.12 0 0 1 .16.06 1.57 1.57 0 0 0 1 .76.12.12 0 0 1 .08.16.12.12 0 0 1-.16.08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M640.01 319.11l-1.46-5.6h1.46l1.05 5.45-1.05.15zM644.17 318.53l-1.25-5.02h1.25l1.13 4.87-1.13.15zM649.17 317.85l1.38-4.34h-1.38l-.78 4.45.78-.11zM636.84 313.51h14.71l-7.44-8.12-7.27 8.12z"
                        />
                        <path className="cls-29" d="M644.11 305.39l-.44 8.12h7.88l-7.44-8.12z"
                        />
                        <path className="cls-33" d="M644.11 305.39l2.81 8.12h4.63l-7.44-8.12z"
                        />
                        <path className="cls-29" d="M649.17 317.85l-9.16 1.26-.78 9.09 10.24-.56-.3-9.79z"
                        />
                        <path className="cls-32" d="M532.41 255.93a21.31 21.31 0 0 0-18.07-1.08c-3.94-6.51-10.51-11.14-17.64-13.8s-14.81-3.49-22.41-3.65-14.84 1.68-20.78 6.6a36.2 36.2 0 0 0-10.05 12.14 53.07 53.07 0 0 0-39.4 3.72c-4 2.08-8.18 5.61-7.7 10.09 45.29-1.21 90.55 5.8 135.81 3.67 4.66-.22 11.48-.52 9.75-6.58-1.31-4.61-5.41-8.84-9.51-11.11z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-32" d="M447.14 186.44a4.44 4.44 0 0 1 4.44 4.44 4.44 4.44 0 0 1-4.44-4.44z"
                        />
                        <path className="cls-32" d="M542.84 262a2.72 2.72 0 0 0-1.8-.49 2.74 2.74 0 0 0 .16-1.37 2.76 2.76 0 0 0-2.33 3.11 2.65 2.65 0 0 0 .81-.26 2.76 2.76 0 0 0 3.16-.99zM407 257.67a2.58 2.58 0 0 1 1.85-2 2.59 2.59 0 0 1-.8 2.62 2.62 2.62 0 0 1 .53.83 2.6 2.6 0 0 1-3.36-1.46 2.54 2.54 0 0 1 1.78.01zM496.13 239.62a2.94 2.94 0 0 0-2.61-1.61 2.94 2.94 0 0 0 1.66 2.64 2.93 2.93 0 0 0-.35 1.07 3 3 0 0 0 3.27-2.6 2.91 2.91 0 0 0-1.97.5z"
                            transform="translate(0 -56.34)" />
                        <path id="_Rectangle_" data-name="&lt;Rectangle&gt;" fill="url(#linear-gradient-19)"
                            d="M615.15 337.87h414.17V578.7H615.15z" />
                        <path fill="url(#linear-gradient-20)" d="M223.84 235.55v91.84h334.11V578.7H211V217.8h346.95v17.75H223.84z"
                        />
                        <path className="cls-59" d="M301.42 281.69zM301.72 281.69h.08-.12zM306.16 281.82zM308.91 281.94zM309.38 282.09s-.01.01 0 0zM306.16 281.82h.07s-.04.01-.07 0zM302.33 281.63z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M304.95 225.51h-.02l-.02.03.04-.03z" />
                        <path className="cls-59" d="M304 281.83v-.07c0-.02 0 0 0 0a.08.08 0 0 0 0 .07zM302.54 281.71zM305.61 281.89z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M332.7 225.35h-.02.02z" />
                        <path className="cls-59" d="M310.24 282.26zM318.12 282.27c-.09-.13.14-.16 0-.3.02.03-.12.22 0 .3zM302.36 281.63z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M318.13 225.63l-.01-.02.01.02z" />
                        <path className="cls-59" d="M312.21 282.24a.14.14 0 0 0 0-.06s-.01.03 0 .06zM310.74 282zM313 282.07s0 .02 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M313.78 225.74l-.02-.03-.02.01.04.02z" />
                        <path className="cls-59" d="M329.2 281.42a.21.21 0 0 1 0 .06s.14-.05 0-.06zM302.34 281.64zM313 281h.13a.27.27 0 0 0-.13 0zM323.48 281.2s.01-.02 0 0zM313.51 281c0 .05.05.08.08.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M330.07 281.41c-.12 0-.06.06-.08.09s-.07-.05-.12-.09-.16.07-.22.07-.28 0-.39.05a.26.26 0 0 1 0 .12h-.12a.06.06 0 0 0 .05 0h-.05c-.05-.08.07 0 .07-.08s-.24.08-.32.05.2 0 .08-.09h.14c-.1-.12.08 0 0-.12s-.19 0-.36 0 0 .07 0 .12c-.24.08-.19-.23-.37-.12s-.06.17-.19.1v-.1c-.16 0-.09.15-.27.07h.11c-.02 0-.08.05-.17.05v-.1c-.17 0-.37.07-.57.09 0 0 .05-.07 0-.1a1.71 1.71 0 0 1-.77-.12l-.09.1v-.07c0-.02 0 .07-.05.1s-.07-.06 0-.09c-.17.08-.47.18-.64.06-.14 0-.15.22-.28.11-.3-.06-.62 0-.85-.14 0 .17-.29-.08-.3.16-.17-.13-.12-.17-.36-.26-.06 0-.09.15-.17.18v-.13l-.11.13-.05-.16h-.08a.13.13 0 0 1 .06.1c-.11.06-.28-.1-.28-.16l-.27.1c0-.05.05-.07.09-.1-.15.13 0-.15-.16 0v.1a.34.34 0 0 0-.33-.05v-.1H322c.08.05.07.22 0 .23v-.15c0 .09.07.06 0 .17s-.05-.17 0-.22l-.11.05a.7.7 0 0 1 0-.12c0 .09-.18-.16-.24 0a3.52 3.52 0 0 0-.51.05c0 .13-.08.1-.13.21a1.2 1.2 0 0 0-.45-.15c-.11.07 0 .12-.08.2 0-.13-.17-.12-.09-.2a1.13 1.13 0 0 0-.49.12s.05.07 0 .11-.1 0-.1-.11c-.28.18-.64-.38-.86-.12l-.23.14c-.1 0 .07-.1 0-.18-.25.21-.39 0-.59.11-.16-.38-.56 0-.77-.22v-.1c-.05.09-.06 0-.1-.07s.06.08 0 .13a3.79 3.79 0 0 1-1.43-.21c-.17 0-.1.46-.32.25l.07-.16c-.35.2-.72 0-1.06.16 0 0 0-.08.05-.08s-.27 0-.27.09v-.13c0-.05-.19.15-.22 0s-.22 0-.18.12c-.12-.06-.24.06-.34 0-.07.15-.23-.07-.25.14 0-.21-.22-.17-.3-.06 0-.07-.07-.07 0-.16s-.18.05-.16.16c-.18-.26-.35.2-.44-.12a4.11 4.11 0 0 1-.78.25c0-.2.27 0 .26-.24-.24.09-.37.27-.61.22-.06 0 0-.08.06-.12-.24.09-.46 0-.66.11v-.06c0-.06-.1 0-.09.06.06.13-.16.27-.17.34.07-.26-.21-.06-.1-.38a.14.14 0 0 0-.05.12s-.06 0 0-.12c-.15 0-.1.14-.23.14s0-.06 0-.11-.14.17-.25.14 0-.06 0-.06c-.2 0-.34.21-.55.14.06-.17-.07-.05-.08-.2l-.12.05.05.07c-.1 0-.19.1-.28.06l.08-.06h-.19l.11.05c-.11.08 0 .18-.13.14 0 0-.1 0-.15-.08-.05 0-.1.09-.17.06s0-.16 0-.18-.24 0-.3.15 0-.1 0-.11v.09c-.05 0-.06 0-.05-.1s0 .17-.12.1c-.16 0-.32.06-.47 0s.13 0 .08-.14a2.73 2.73 0 0 1-.67.13c0 .16-.16-.08-.27 0s0-.09 0-.08a1.47 1.47 0 0 0-.52.11 1.09 1.09 0 0 0-.32 0s-.08 0 0 .08c-.29-.19-.55.12-.81 0 0 0 .07 0 0 0h-.22c0 .05 0 0 .08.07a.23.23 0 0 1-.15.06c.1 0 0-.08 0-.11v.05c0 .05 0 .1-.18 0a.35.35 0 0 1-.17 0c0-.05.06 0 .06-.07s-.17.11-.25 0a.61.61 0 0 0 .13 0 .24.24 0 0 0-.16-.05h-.14c-.11.13-.22 0-.37.11.15-.08 0-.05 0-.1s-.1 0-.08 0h-.28c.01 0 0 0 0 0h-.53a3 3 0 0 1-.37.07c-.06 0 0 0 0 0a.89.89 0 0 0-.23 0h-.13.06-.23.08-.27.45a1.42 1.42 0 0 0 .34 0h.63c.2 0 0 0 .17-.07l.1.09h.06v-.05c0-.05.27 0 .3.06s-.1 0 0-.05.12 0 .21 0-.11 0 0 .06.18 0 .26 0h.3a2.78 2.78 0 0 0 .36.07c0-.08.15-.06.24-.08s0 .07-.07.09h.08a.16.16 0 0 1 .11 0v.06c.11 0 .22-.07.37 0s-.12-.18 0-.22v.11c0 .02.05 0 .07 0l-.06.06h.09c.09 0 0 0 0 .07s0 0-.06 0a.22.22 0 0 1 .15.08s0-.07.05-.07 0 .06.1.09.1 0 .1-.07 0 0 .06.06.27 0 .21-.09c.19-.09.4.05.59 0 .12 0 .26 0 .34-.08s.08.06.06.09.1-.06.23 0c-.09.06 0 .05-.09 0 .11 0 .14.09.26 0 0 .08.08.11.14.08l-.08-.06a.49.49 0 0 1 .17 0v.11c.23.15.42-.23.59 0 .06-.09-.12-.07-.07-.16s.22.19.25.19.14-.17.29-.12a.16.16 0 0 1 .08-.21.14.14 0 0 1 .06.23s-.08 0 0 .09V282c.06.05.2.05.17.12s0-.07 0-.1c.14.07.22 0 .36.06V282c.21.06.09-.09.23-.11s0 .18.11.12 0 .13 0 .16c.13-.09.24.07.31.09h-.07a.23.23 0 0 1 .11 0v-.1s.07 0 .07.06v-.25c0-.09.17-.05.18.08-.16-.05 0 .14-.12.15a.12.12 0 0 1 .1 0c.15.13.07-.14.23-.14 0 .08 0 .15.07.13s0-.12 0-.18.11 0 .17 0h-.06c0-.08.07-.07.15-.09s-.07 0-.05.06c.09-.13.19.15.3.06s0 .14.06.18.14.11.27 0c0-.11-.05-.08 0-.18l-.22.07.14-.15c-.07 0-.14.06-.18 0s.06-.06 0-.14c.09.16.18-.09.29 0v.27c.16.12.28-.13.49-.06l-.07-.05c0-.11.13 0 .2-.06s0 .13.06.18.16 0 .17-.17l.1.12c.16.06.19-.26.35-.22-.05.1 0 .16-.09.23h.11s.15-.13.19 0 0-.14.09-.13a.08.08 0 0 1 0 .05c0-.05.1-.06.05-.17.16.3.46 0 .6.24a2.66 2.66 0 0 1 .37-.07c.15.09.09-.28.26-.18s-.09.09 0 .15c0 .31.2-.05.31.14.09.11.21-.12.35-.1a.08.08 0 0 0 0 .05.74.74 0 0 1 .41-.26c0 .13-.06.07 0 .19s0-.2.1-.24.13.13.14.27h-.12c.06.17.15 0 .21 0v.08c.18 0 .18-.22.37-.21.1-.2.08.1.19 0v.2a1.41 1.41 0 0 1 .35-.23c-.06.15-.21.22-.29.31s.22 0 .26-.11-.06.06-.09 0a.34.34 0 0 1 .32-.22c0 .38.35.09.45.39.23-.14.47.06.74 0-.1-.29.08 0 .07-.31h.09l.19.18c.05.09-.06.06-.05.13s.06.13.15.21c0-.11.05-.15.13-.11l-.11-.14c.19-.16.17.25.36.09l-.06.1c.1-.06.37 0 .47-.25 0 0 .05.12 0 .14.24 0 .54-.26.73-.11v.07c.05 0 .08-.14.14-.07s0 .08 0 .08.12-.13.18-.09l-.05.08c.23.1.36-.2.56-.25a.33.33 0 0 0 .28.31c.28 0 .47-.18.72-.27.16.22.54.09.79.2 0 0 0-.15.06-.17s.16-.14.15 0c0 .17.17.12.26.12v-.23c.25.33.65-.13.79.16.06-.06.14-.06.2-.12v.12a1.41 1.41 0 0 0 .46 0v.08c.12 0 .15-.33.25-.34v.17c.2 0 .41.13.61 0 0 0 0 .07-.05.08s.38.09.34-.12c0 .14.21 0 .32-.06v.1c.1-.13.1-.17.23-.2s0 .07 0 .05.08-.09.2 0l-.05.06c.11 0 .1 0 .16-.1a.16.16 0 0 1 .21.1c0-.05.07-.12.14-.1s0 .05 0 .06c.18.06.26-.11.38 0a.93.93 0 0 1-.24 0c0 .09.12.1 0 .21.09-.06.24-.2.35-.17a.08.08 0 0 0 .07 0h.1c0 .07.13 0 .18 0s.07-.07 0-.14 0 0-.05 0h-.16c.05-.05.09-.08.16 0l.08-.13c.07.11.22.17.24.23.17-.05.41-.05.52-.19s.05 0 .07.06-.06 0-.08 0 .29 0 .32-.11-.07.08.1.06c.34.12.54-.23.91-.07.42 0 .87-.07 1.28 0a.41.41 0 0 0 .21 0h.89a.06.06 0 0 1 .06 0h.39-.31s.06 0 0 0h-.16c-.11 0 0 0 0 0h-.2c-.03 0-.22 0-.21-.05a.39.39 0 0 1-.17 0c.11 0-.22 0-.19-.07a2.69 2.69 0 0 1-.43 0 .44.44 0 0 1-.15-.05c0 .06-.14.06-.2.1s.06-.07 0-.13-.17 0-.14.08-.06 0-.1-.07-.07 0-.13 0 0-.08-.15-.06-.23.05-.23.05zm-2.82 0zm-.23 0h.1v.06s-.07.01-.12-.02zm.5.6h-.06.07zM327.58 281.94z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M306.13 225.47l-.01-.01.01.01zM323.75 224.81v.03l.02-.03h-.02z"
                        />
                        <path className="cls-59" d="M304.82 281.57zM304.26 281.57zM303.83 281.56zM310.71 281.22s.03-.02 0 0zM308.66 281.53a.18.18 0 0 1 .07 0s-.07-.06-.07 0zM308.82 281.48a.07.07 0 0 0-.09 0s.06.02.09 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M301.95 225.31h-.02v.01l.02-.01z" />
                        <path className="cls-59" d="M301.93 281.66zM301.85 281.66zM302.52 281.63zM302.7 281.61h-.17s.13.02.17 0zM303.42 281.76h-.14s.06 0 0 0c.17.07-.05-.02.14 0zM303.88 281.8c-.08 0 0 0 0 0s.05.01 0 0zM307.15 281.9v.1c.05 0-.01 0 0-.1z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M307.77 225.11l-.06-.05-.02.08.08-.03zM308.14 225.76l-.02.01.1-.03-.08.02z"
                        />
                        <path className="cls-59" d="M313.63 282.19V282s-.06.24 0 .19zM316 282.05c0 .08.09.13.13.05s-.13-.1-.13-.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M323.12 225.89l-.05.05.09-.04-.04-.01z" />
                        <path className="cls-59" d="M309.52 293.63zM309.52 293.52a.07.07 0 0 1 0 .05.25.25 0 0 0 0-.08zM309.65 291.88zM309.77 290.86zM309.92 290.69zM309.65 291.88s.01-.01 0 0zM309.46 293.29z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M309.68 235.99v.01h.03l-.03-.01z" />
                        <path className="cls-59" d="M309.65 292.67h-.06.06zM309.54 293.22zM309.72 292.08zM309.41 282.46z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M309.52 225.72v.01-.01z" />
                        <path className="cls-59" d="M310.1 290.37zM310.1 287.45c-.13 0-.16-.05-.3 0 .05 0 .2.05.3 0zM309.46 293.29z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M309.8 231.11l-.01.01.01-.01z" />
                        <path className="cls-59" d="M310.07 289.64zM309.87 290.18zM309.9 289.36s.02-.01 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M309.91 232.72l-.03.01.01.01.02-.02z" />
                        <path className="cls-59" d="M309.26 283.36h.06c-.05-.01-.06-.06-.06 0zM309.47 293.29zM308.85 289.34zM309 285.47zM308.84 289.16h.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M309.25 283c0 .05.06 0 .09 0s0 0-.09.05.07.06.06.08c.05 0 0 .11.06.15h.09s.05 0 0 0h-.08c-.08 0 .08.09.05.12s0-.07-.09 0v-.05h-.12c-.12 0 0 .07 0 .13s.07 0 .12 0-.23.07-.12.14.17 0 .11.07h-.11c0 .06.15 0 .07.1s.06 0 0 .06h-.09c0 .06.07.13.08.21a.12.12 0 0 0-.1 0c0 .09 0 .19-.12.28h.1-.05c-.03 0 .17.18.05.24-.05 0 .22 0 .12.1-.06.11 0 .23-.14.31.16 0-.09.11.15.12-.12.06-.17 0-.26.13s.15 0 .18.06H309h.13-.16.09c.06 0-.09.1-.16.1l.1.1a.24.24 0 0 1-.1 0c.13.05-.14 0 0 .06h.1c-.09 0-.09.08-.06.12h-.09v.24c0 .09.22 0 .23 0H309 308.95h.05a.26.26 0 0 1-.12 0c.09 0-.16.07 0 .09h-.05c0 .09 0 .13.05.19s.1 0 .21 0c0 .05-.15.11-.15.17s.12 0 .2 0c-.12 0-.12.06-.2 0s0 .09.12.18a.22.22 0 0 1 .11 0h-.11c.18.1-.38.23-.11.31l.14.08h-.18c.21.09 0 .14.11.22-.38.06 0 .2-.21.28H308.82h.13c.11.17-.13.35-.21.53s.46 0 .25.11h-.16c.2.13 0 .27.17.39h-.09c-.12 0 0 .1.09.1h-.13c-.05 0 .15.07 0 .08.05 0 0 .08.12.06-.06.05.06.09 0 .13.15 0-.06.08.15.09-.22 0-.17.08-.07.11h-.16c-.09 0 0 .07.16.06-.25.06.21.13-.12.16a1 1 0 0 1 .25.29c-.2 0 0-.1-.24-.1.09.09.27.14.23.23s-.09 0-.13 0 0 .16.11.24h-.06.07c.13 0 .27.07.34.07-.25 0-.06.07-.38 0a.18.18 0 0 0 .12 0h-.12c-.07 0 .14 0 .14.08h-.1c.08 0 .16 0 .13.09h-.06c0 .07.22.12.14.2s-.05 0-.2 0h.07s.11.07.06.1h-.06v.07h.2c-.03 0 0 0-.09.05.05 0 .09 0 .06.07h-.18c.11 0 0 .08.16.11h-.12.09a.12.12 0 0 1-.09 0c0 .06.16 0 .09.05 0 .06.06.12 0 .17s0-.05-.14 0 .16.17.14.25c.17 0-.08.05 0 .09h-.07c0 .06.05.11.1.2s0 .08 0 .12 0 0 .09 0c-.2.11.11.21 0 .3v.08h.07c.07 0 .06 0 .06.05s-.08 0-.11 0h.05c-.09 0 .1 0 0 .06s0 0 0 .06 0 0-.07 0 .1.06.05.09 0 0 0-.05v.11c.13 0 0 .08.11.14s0 0-.09 0 0 .05 0 .08v.2c0 .08.06.07.07.13a.11.11 0 0 0 0 .08V293.08v-.05-.11c0-.08 0 0-.07-.07H309.61c-.05 0 0-.11.06-.11h-.05c-.05 0 0 0 0-.08s0 0 .06 0 0-.07 0-.1v-.11c0-.05 0-.09.07-.13-.08 0-.06-.05-.08-.09a.11.11 0 0 1 .09 0h.06c0-.05-.07-.09 0-.14s-.18 0-.22 0H309.77s-.05 0 0 0h.08c.08 0 0 0 0 0a.13.13 0 0 1 .08-.06h-.07c0-.05.06 0 .09 0h-.07.06s0-.1-.09-.08c-.08-.07.05-.14 0-.22s0-.09-.08-.12.06 0 .09 0-.05 0 0-.09.05 0 0 0 .09-.05 0-.1c.08 0 .11 0 .09-.05h-.07a.07.07 0 0 1 0-.06h.11c.15-.09-.23-.16 0-.22h-.16c-.09 0 .19-.08.19-.09s-.17 0-.12-.11-.17 0-.21 0h.23a.07.07 0 0 0 .08 0c.05 0 .05-.07.12-.06s-.07 0-.1 0 0-.08.06-.13-.08 0-.08 0-.09 0-.11-.09.17 0 .12 0a.18.18 0 0 1 .16 0c-.09 0 .07-.09.09-.12h-.1.06a1.19 1.19 0 0 1-.25 0c.05 0-.05-.06.08-.06 0 .06.14 0 .15 0 .12-.06-.15 0-.15-.09s.15 0 .13 0H310c-.06 0 0 0 0-.07-.08 0-.07 0-.09-.06s0 0 .06 0 .15-.07.06-.11.14 0 .18 0 .11-.05 0-.1a.28.28 0 0 1-.18 0l.07.08-.15-.05s.06.05 0 .06a.22.22 0 0 0-.14 0c.16 0-.09-.06 0-.1h.19c.12-.06-.13-.11-.06-.18h-.05c-.11 0 0 0-.06-.07a.84.84 0 0 0 .19 0c-.07 0 0-.06-.18-.07h.12c.06-.06-.26-.07-.22-.13s.16 0 .23 0-.12-.05 0-.07-.13 0-.13 0h.05-.17c.3-.06 0-.17.24-.22a.61.61 0 0 1-.07-.14s.05 0 0 0-.28 0-.17-.1.08 0 .14 0c.32 0 0-.08.14-.12.11 0-.12-.08-.1-.13h.05a.41.41 0 0 1-.26-.15.45.45 0 0 0 .2 0h-.25a.76.76 0 0 1 .27-.05c.18 0 0-.06 0-.08h.09c0-.06-.22-.06-.2-.13h-.06c-.2 0 .11 0 0-.07h.2a.76.76 0 0 1-.23-.13 1.77 1.77 0 0 1 .31.11s0-.08-.11-.09.06 0 0 0-.23-.07-.22-.12c.38 0 .09-.13.39-.17-.14-.08.06-.17 0-.27h-.32l.18-.07h.13c.06 0 .13 0 .21-.06h-.25c-.16-.08.25-.07.09-.14h.1c-.06 0 0-.13-.25-.17h.14c.02 0-.26-.2-.11-.27h.07s-.14 0-.07-.05h.08s-.13-.05-.09-.07h.09c.09-.09-.21-.13-.26-.21a.38.38 0 0 0 .31-.1c0-.1-.18-.17-.26-.27.21-.05.08-.19.19-.29a.25.25 0 0 1-.17 0s-.14-.06 0-.06c.17 0 .12-.06.12-.09h-.23c.33-.09-.13-.24.16-.29l-.12-.08h.12a.2.2 0 0 0 0-.17h.08s-.33-.05-.34-.09h.32c0-.08.12-.16 0-.23s.09-.13-.13-.12c.14 0 0-.08-.05-.12h.1c-.13 0-.17 0-.2-.08s.08 0 0 0-.09 0 0-.08h.06l-.1-.06c-.1-.06 0-.07.1-.07s-.12 0-.1-.05a.06.06 0 0 1 .06 0c.06-.07-.11-.1 0-.15h.05v.09h.21c-.06 0-.2-.09-.17-.13.06 0 0 0 0-.06s-.07 0-.14 0V284s-.08 0 0-.05h-.13c.11 0 .17-.09.23-.09s0-.15-.19-.19 0 0 .06 0 0-.11-.12-.12.09 0 .06 0c.11-.12-.22-.2-.08-.33 0-.15-.07-.32 0-.47s0 0 0-.08c0-.07.05-.12 0-.2s0-.09 0-.08v-.07V282.17v.05a.13.13 0 0 0 0 .06v.26c0 .06 0 .09-.07.08s0 .1 0 .15 0 0-.05.06.06.05.09.07-.06 0-.11 0 0 .06.07.05 0 0-.07 0 0 0 .05.05-.08 0-.06.05-.12-.05-.12-.05zm0 1.05zm0 .08h.06zm.6-.18z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M309.77 227.61h-.01l-.02.01h.03v-.01zM308.98 229.03h.03-.03z"
                        />
                        <path className="cls-59" d="M309.4 292.37zM309.41 292.58z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M309.4 236.4l.02.01-.02-.01z" />
                        <path className="cls-59" d="M309.05 290.2s-.05-.02 0 0zM309.36 291h0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M308.85 233.01V233v.01z" />
                        <path className="cls-59" d="M309.31 290.89s.02.02 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M309.48 237.1h.01v.01l-.01-.01z" />
                        <path className="cls-59" d="M309.49 293.47zM309.46 293.22zM309.45 293.16v.06s.01-.05 0-.06zM309.59 292.89v.06s-.02.05 0-.06zM309.62 292.72s.02-.02 0 0zM309.73 291.51h.08s-.03.01-.08 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M309.28 234.94l-.05.03h.08l-.03-.03zM309.93 234.81l.01.01-.03-.04.02.03z"
                        />
                        <path className="cls-59" d="M310 289.11h-.16s.23.03.16 0zM309.88 288.24c.08 0 .13 0 .06-.05s-.08.04-.06.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M310.06 229.27l.05.01-.04-.03-.01.02z" />
                        <path id="_Rectangle_2" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M611.02 327.39h422.42v12.1H611.02z" />
                        <path id="_Rectangle_3" data-name="&lt;Rectangle&gt;" className="cls-33"
                            d="M615.15 566.86h414.17v2.81H615.15z" />
                        <path id="_Rectangle_4" data-name="&lt;Rectangle&gt;" className="cls-33"
                            d="M615.15 572.9h414.17v2.81H615.15z" />
                        <path id="_Rectangle_5" data-name="&lt;Rectangle&gt;" className="cls-33"
                            d="M424.76 565.44h135.31v13.27H424.76z" />
                        <path id="_Rectangle_6" data-name="&lt;Rectangle&gt;" className="cls-33"
                            d="M209.22 565.44H341.6v13.27H209.22z" />
                        <path id="_Rectangle_7" data-name="&lt;Rectangle&gt;" className="cls-33"
                            d="M209.53 211.21h350.54v6.63H209.53z" />
                        <path id="_Rectangle_8" data-name="&lt;Rectangle&gt;" className="cls-33"
                            d="M208.36 382.79h351.71v6.63H208.36z" />
                        <path id="_Rectangle_9" data-name="&lt;Rectangle&gt;" className="cls-33"
                            d="M220.52 324.07h339.55v6.63H220.52z" />
                        <path id="_Rectangle_10" data-name="&lt;Rectangle&gt;" className="cls-33"
                            d="M220.52 232.32h339.55v6.63H220.52z" />
                        <path id="_Rectangle_11" data-name="&lt;Rectangle&gt;" className="cls-33"
                            transform="rotate(90 252.015 309.685)" d="M174.65 334.54h98.38v6.63h-98.38z"
                        />
                        <path id="_Rectangle_12" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M629.1 423.93h73.36v142.93H629.1z" />
                        <path id="_Rectangle_13" data-name="&lt;Rectangle&gt;" className="cls-33"
                            d="M634.45 429.82h62.67v137.05h-62.67z" />
                        <path transform="rotate(90 693.95 526.25)" fill="url(#linear-gradient-21)"
                            d="M599.7 526.03h132.16v56.78H599.7z" />
                        <path fill="url(#linear-gradient-22)" d="M639.3 433.85h52.96V562.3H639.3z"
                        />
                        <path className="cls-62" d="M692.26 579.35a52.24 52.24 0 0 0-23.46-9c-3.79-.46-7.77-.53-11.18-2.27-5.13-2.62-7.81-8.41-12.36-11.94a27.79 27.79 0 0 0-6-3.32v-31.19l.87.34c5.93 2.28 12.17 4.29 16.89 8.53 5.49 4.93 8.58 12.59 15.21 15.81a36 36 0 0 0 8 2.3 38.88 38.88 0 0 1 12 4.61zM692.26 509.07a16.12 16.12 0 0 1-4.12-1.38c-5.13-2.62-7.82-8.41-12.37-11.94a29.36 29.36 0 0 0-6.46-3.54c-1.4-.59-2.81-1.16-4.24-1.68h27.19z"
                            transform="translate(0 -56.34)" />
                        <g id="_Group_7" data-name="&lt;Group&gt;">
                            <path id="_Rectangle_14" data-name="&lt;Rectangle&gt;" className="cls-33"
                                d="M636.86 486.61h5.81v17.3h-5.81z" />
                            <path id="_Rectangle_15" data-name="&lt;Rectangle&gt;" className="cls-40"
                                d="M636.86 486.61h5.81v.56h-5.81z" />
                        </g>
                        <path id="_Rectangle_16" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M777.64 350.51h9.94v46.81h-9.94z" />
                        <path id="_Rectangle_17" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M751.23 350.51h9.94v46.81h-9.94z" />
                        <path id="_Rectangle_18" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M724.82 350.51h9.94v46.81h-9.94z" />
                        <path id="_Rectangle_19" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M698.4 350.51h9.94v46.81h-9.94z" />
                        <path id="_Rectangle_20" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M671.99 350.51h9.94v46.81h-9.94z" />
                        <path id="_Rectangle_21" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M645.58 350.51h9.94v46.81h-9.94z" />
                        <path id="_Path_18" data-name="&lt;Path&gt;" className="cls-25" d="M782.61 467.65a5 5 0 0 0 5-5v-9h-9.94v9a5 5 0 0 0 4.94 5z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_19" data-name="&lt;Path&gt;" className="cls-25" d="M756.2 467.65a5 5 0 0 0 5-5v-9h-9.94v9a5 5 0 0 0 4.94 5z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_20" data-name="&lt;Path&gt;" className="cls-25" d="M729.79 467.65a5 5 0 0 0 5-5v-9h-9.94v9a5 5 0 0 0 4.94 5z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_21" data-name="&lt;Path&gt;" className="cls-25" d="M703.37 467.65a5 5 0 0 0 5-5v-9h-9.97v9a5 5 0 0 0 4.97 5z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_22" data-name="&lt;Path&gt;" className="cls-25" d="M677 467.65a5 5 0 0 0 5-5v-9h-10v9a5 5 0 0 0 5 5z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_23" data-name="&lt;Path&gt;" className="cls-25" d="M650.55 467.65a5 5 0 0 0 5-5v-9h-9.94v9a5 5 0 0 0 4.94 5z"
                            transform="translate(0 -56.34)" />
                        <path id="_Rectangle_22" data-name="&lt;Rectangle&gt;" className="cls-40"
                            d="M787.58 350.51h16.48v46.81h-16.48z" />
                        <path id="_Rectangle_23" data-name="&lt;Rectangle&gt;" className="cls-40"
                            d="M761.17 350.51h16.48v46.81h-16.48z" />
                        <path id="_Rectangle_24" data-name="&lt;Rectangle&gt;" className="cls-40"
                            d="M734.76 350.51h16.48v46.81h-16.48z" />
                        <path id="_Rectangle_25" data-name="&lt;Rectangle&gt;" className="cls-40"
                            d="M708.34 350.51h16.48v46.81h-16.48z" />
                        <path id="_Rectangle_26" data-name="&lt;Rectangle&gt;" className="cls-40"
                            d="M681.93 350.51h16.48v46.81h-16.48z" />
                        <path id="_Rectangle_27" data-name="&lt;Rectangle&gt;" className="cls-40"
                            d="M655.52 350.51H672v46.81h-16.48z" />
                        <path id="_Rectangle_28" data-name="&lt;Rectangle&gt;" className="cls-40"
                            d="M629.1 350.51h16.48v46.81H629.1z" />
                        <path id="_Path_24" data-name="&lt;Path&gt;" className="cls-33" d="M795.82 467.65a8.24 8.24 0 0 0 8.24-8.24v-5.75h-16.48v5.75a8.24 8.24 0 0 0 8.24 8.24z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_25" data-name="&lt;Path&gt;" className="cls-33" d="M769.41 467.65a8.23 8.23 0 0 0 8.23-8.24v-5.75h-16.47v5.75a8.24 8.24 0 0 0 8.24 8.24z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_26" data-name="&lt;Path&gt;" className="cls-33" d="M743 467.65a8.24 8.24 0 0 0 8.24-8.24v-5.75h-16.48v5.75a8.23 8.23 0 0 0 8.24 8.24z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_27" data-name="&lt;Path&gt;" className="cls-33" d="M716.58 467.65a8.24 8.24 0 0 0 8.24-8.24v-5.75h-16.48v5.75a8.24 8.24 0 0 0 8.24 8.24z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_28" data-name="&lt;Path&gt;" className="cls-33" d="M690.17 467.65a8.23 8.23 0 0 0 8.23-8.24v-5.75h-16.47v5.75a8.24 8.24 0 0 0 8.24 8.24z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_29" data-name="&lt;Path&gt;" className="cls-33" d="M663.75 467.65a8.24 8.24 0 0 0 8.24-8.24v-5.75h-16.47v5.75a8.23 8.23 0 0 0 8.23 8.24z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_30" data-name="&lt;Path&gt;" className="cls-33" d="M637.34 467.65a8.24 8.24 0 0 0 8.24-8.24v-5.75H629.1v5.75a8.24 8.24 0 0 0 8.24 8.24z"
                            transform="translate(0 -56.34)" />
                        <path id="_Rectangle_29" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M936.12 350.51h9.94v46.81h-9.94z" />
                        <path id="_Rectangle_30" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M909.71 350.51h9.94v46.81h-9.94z" />
                        <path id="_Rectangle_31" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M883.3 350.51h9.94v46.81h-9.94z" />
                        <path id="_Rectangle_32" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M856.88 350.51h9.94v46.81h-9.94z" />
                        <path id="_Rectangle_33" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M830.47 350.51h9.94v46.81h-9.94z" />
                        <path id="_Rectangle_34" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M804.06 350.51H814v46.81h-9.94z" />
                        <path id="_Path_31" data-name="&lt;Path&gt;" className="cls-25" d="M941.09 467.65a5 5 0 0 0 5-5v-9h-9.94v9a5 5 0 0 0 4.94 5z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_32" data-name="&lt;Path&gt;" className="cls-25" d="M914.68 467.65a5 5 0 0 0 5-5v-9h-9.94v9a5 5 0 0 0 4.94 5z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_33" data-name="&lt;Path&gt;" className="cls-25" d="M888.27 467.65a5 5 0 0 0 5-5v-9h-9.97v9a5 5 0 0 0 4.97 5z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_34" data-name="&lt;Path&gt;" className="cls-25" d="M861.85 467.65a5 5 0 0 0 5-5v-9h-9.94v9a5 5 0 0 0 4.94 5z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_35" data-name="&lt;Path&gt;" className="cls-25" d="M835.44 467.65a5 5 0 0 0 5-5v-9h-9.94v9a5 5 0 0 0 4.94 5z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_36" data-name="&lt;Path&gt;" className="cls-25" d="M809 467.65a5 5 0 0 0 5-5v-9h-9.94v9a5 5 0 0 0 4.94 5z"
                            transform="translate(0 -56.34)" />
                        <path id="_Rectangle_35" data-name="&lt;Rectangle&gt;" className="cls-40"
                            d="M946.06 350.51h16.48v46.81h-16.48z" />
                        <path id="_Rectangle_36" data-name="&lt;Rectangle&gt;" className="cls-40"
                            d="M919.65 350.51h16.48v46.81h-16.48z" />
                        <path id="_Rectangle_37" data-name="&lt;Rectangle&gt;" className="cls-40"
                            d="M893.24 350.51h16.48v46.81h-16.48z" />
                        <path id="_Rectangle_38" data-name="&lt;Rectangle&gt;" className="cls-40"
                            d="M866.82 350.51h16.48v46.81h-16.48z" />
                        <path id="_Rectangle_39" data-name="&lt;Rectangle&gt;" className="cls-40"
                            d="M840.41 350.51h16.48v46.81h-16.48z" />
                        <path id="_Rectangle_40" data-name="&lt;Rectangle&gt;" className="cls-40"
                            d="M814 350.51h16.48v46.81H814z" />
                        <path id="_Path_37" data-name="&lt;Path&gt;" className="cls-33" d="M954.3 467.65a8.24 8.24 0 0 0 8.24-8.24v-5.75h-16.48v5.75a8.24 8.24 0 0 0 8.24 8.24z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_38" data-name="&lt;Path&gt;" className="cls-33" d="M927.89 467.65a8.23 8.23 0 0 0 8.23-8.24v-5.75h-16.47v5.75a8.24 8.24 0 0 0 8.24 8.24z"
                            transform="translate(0 -56.34)" />
                        <path id="_Rectangle_41" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M988.95 350.51h9.94v46.81h-9.94z" />
                        <path id="_Rectangle_42" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M962.54 350.51h9.94v46.81h-9.94z" />
                        <path id="_Path_39" data-name="&lt;Path&gt;" className="cls-25" d="M993.92 467.65a5 5 0 0 0 5-5v-9H989v9a5 5 0 0 0 4.92 5z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_40" data-name="&lt;Path&gt;" className="cls-25" d="M967.51 467.65a5 5 0 0 0 5-5v-9h-9.94v9a5 5 0 0 0 4.94 5z"
                            transform="translate(0 -56.34)" />
                        <path id="_Rectangle_43" data-name="&lt;Rectangle&gt;" className="cls-40"
                            d="M998.89 350.51h16.48v46.81h-16.48z" />
                        <path id="_Rectangle_44" data-name="&lt;Rectangle&gt;" className="cls-40"
                            d="M972.48 350.51h16.48v46.81h-16.48z" />
                        <path id="_Path_41" data-name="&lt;Path&gt;" className="cls-33" d="M1007.13 467.65a8.24 8.24 0 0 0 8.24-8.24v-5.75h-16.48v5.75a8.24 8.24 0 0 0 8.24 8.24z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_42" data-name="&lt;Path&gt;" className="cls-33" d="M980.71 467.65a8.24 8.24 0 0 0 8.24-8.24v-5.75h-16.47v5.75a8.23 8.23 0 0 0 8.23 8.24z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_43" data-name="&lt;Path&gt;" className="cls-33" d="M901.47 467.65a8.24 8.24 0 0 0 8.24-8.24v-5.75h-16.47v5.75a8.23 8.23 0 0 0 8.23 8.24z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_44" data-name="&lt;Path&gt;" className="cls-33" d="M875.06 467.65a8.24 8.24 0 0 0 8.24-8.24v-5.75h-16.48v5.75a8.24 8.24 0 0 0 8.24 8.24z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_45" data-name="&lt;Path&gt;" className="cls-33" d="M848.65 467.65a8.23 8.23 0 0 0 8.23-8.24v-5.75h-16.47v5.75a8.24 8.24 0 0 0 8.24 8.24z"
                            transform="translate(0 -56.34)" />
                        <path id="_Path_46" data-name="&lt;Path&gt;" className="cls-33" d="M822.23 467.65a8.24 8.24 0 0 0 8.24-8.24v-5.75H814v5.75a8.23 8.23 0 0 0 8.23 8.24z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1029.32 356.73h83.18v4.43h-83.18z" />
                        <path className="cls-25" d="M1112.5 354.2h4.5v9.5h-4.5z" />
                        <path className="cls-33" d="M1042.48 378.33h63v43.83h-63z" />
                        <path className="cls-25" d="M1054.77 361.16h1.33v17.17h-1.33zM1091.85 361.16h1.33v17.17h-1.33z"
                        />
                        <circle className="cls-25" cx="665.18" cy="462.79" r="1.02" />
                        <path strokeWidth="0.23" stroke="#c7d3e5" strokeMiterlimit="10" fill="none"
                            d="M674.17 471.21l-8.97-8.55-7.81 8.55" />
                        <rect className="cls-33" x="654.53" y="470.21" width="22.5" height="7.67"
                            rx="0.99" ry="0.99" />
                        <path className="cls-29" d="M488.52 491.57h45.64v6.1h-45.64z" />
                        <path className="cls-64" d="M490.23 441.11h42.22v50.45h-42.22z" />
                        <path transform="rotate(90 529.51 483.66)" fill="url(#linear-gradient-23)"
                            d="M490.49 504.24h21.7v15.17h-21.7z" />
                        <path fill="url(#linear-gradient-24)" d="M494.27 444.94h14.15v21.09h-14.15z"
                        />
                        <path className="cls-62" d="M508.42 515.92a20 20 0 0 0-6.27-1.48 13.23 13.23 0 0 1-3-.37c-1.37-.43-2.08-1.38-3.3-2a9.29 9.29 0 0 0-1.59-.55v-5.11l.23.05a18.62 18.62 0 0 1 4.51 1.4c1.47.81 2.3 2.07 4.07 2.6a16.19 16.19 0 0 0 2.14.38 14.53 14.53 0 0 1 3.2.75zM508.42 504.38a6.49 6.49 0 0 1-1.1-.22c-1.37-.43-2.09-1.38-3.31-2a9.15 9.15 0 0 0-1.72-.58c-.38-.1-.75-.2-1.13-.28h7.26z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 548.85 483.66)" fill="url(#linear-gradient-25)"
                            d="M509.83 504.24h21.7v15.17h-21.7z" />
                        <path fill="url(#linear-gradient-26)" d="M513.6 444.94h14.15v21.09H513.6z"
                        />
                        <path className="cls-62" d="M527.76 515.92a20.14 20.14 0 0 0-6.27-1.48 13.09 13.09 0 0 1-3-.37c-1.37-.43-2.09-1.38-3.31-2a9.29 9.29 0 0 0-1.59-.55v-5.11l.24.05a18.62 18.62 0 0 1 4.51 1.4c1.47.81 2.29 2.07 4.06 2.6a16.05 16.05 0 0 0 2.15.38 14.67 14.67 0 0 1 3.2.75zM527.76 504.38a6.42 6.42 0 0 1-1.11-.22c-1.37-.43-2.08-1.38-3.3-2a9 9 0 0 0-1.73-.58c-.37-.1-.75-.2-1.13-.28h7.27z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 529.515 508.885)" fill="url(#linear-gradient-27)"
                            d="M490.49 529.47h21.7v15.17h-21.7z" />
                        <path fill="url(#linear-gradient-28)" d="M494.27 470.17h14.15v21.09h-14.15z"
                        />
                        <path className="cls-62" d="M508.42 541.15a19.74 19.74 0 0 0-6.27-1.48 14.48 14.48 0 0 1-3-.37c-1.37-.43-2.08-1.38-3.3-2a9.29 9.29 0 0 0-1.59-.55v-5.12l.23.06a18.19 18.19 0 0 1 4.51 1.4c1.47.81 2.3 2.06 4.07 2.59a14.71 14.71 0 0 0 2.14.38 15.13 15.13 0 0 1 3.2.76zM508.42 529.61a6.5 6.5 0 0 1-1.1-.23c-1.37-.43-2.09-1.38-3.31-2a9.93 9.93 0 0 0-1.72-.58l-1.13-.28h7.26z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 548.845 508.885)" fill="url(#linear-gradient-29)"
                            d="M509.83 529.47h21.7v15.17h-21.7z" />
                        <path fill="url(#linear-gradient-30)" d="M513.6 470.17h14.15v21.09H513.6z"
                        />
                        <path className="cls-62" d="M527.76 541.15a19.87 19.87 0 0 0-6.27-1.48 14.31 14.31 0 0 1-3-.37c-1.37-.43-2.09-1.38-3.31-2a9.29 9.29 0 0 0-1.59-.55v-5.12l.24.06a18.19 18.19 0 0 1 4.51 1.4c1.47.81 2.29 2.06 4.06 2.59a14.61 14.61 0 0 0 2.15.38 15.27 15.27 0 0 1 3.2.76zM527.76 529.61a6.42 6.42 0 0 1-1.11-.23c-1.37-.43-2.08-1.38-3.3-2a9.76 9.76 0 0 0-1.73-.58l-1.13-.28h7.27z"
                            transform="translate(0 -56.34)" />
                        <path fill="url(#linear-gradient-31)" d="M490.44 497.73h42.22v32.28h-42.22z"
                        />
                        <path className="cls-29" d="M225.45 491.57h45.64v6.1h-45.64z" />
                        <path className="cls-64" d="M227.16 441.11h42.22v50.45h-42.22z" />
                        <path transform="rotate(90 266.44 483.66)" fill="url(#linear-gradient-32)"
                            d="M227.42 504.24h21.7v15.17h-21.7z" />
                        <path fill="url(#linear-gradient-33)" d="M231.19 444.94h14.15v21.09h-14.15z"
                        />
                        <path className="cls-62" d="M245.35 515.92a20.14 20.14 0 0 0-6.27-1.48 13.09 13.09 0 0 1-3-.37c-1.37-.43-2.09-1.38-3.3-2a9.71 9.71 0 0 0-1.6-.55v-5.11l.24.05a18.62 18.62 0 0 1 4.51 1.4c1.47.81 2.29 2.07 4.07 2.6a15.63 15.63 0 0 0 2.14.38 14.53 14.53 0 0 1 3.2.75zM245.35 504.38a6.12 6.12 0 0 1-1.1-.22c-1.37-.43-2.09-1.38-3.31-2a9 9 0 0 0-1.73-.58c-.37-.1-.75-.2-1.13-.28h7.27z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 285.78 483.66)" fill="url(#linear-gradient-34)"
                            d="M246.76 504.24h21.7v15.17h-21.7z" />
                        <path fill="url(#linear-gradient-35)" d="M250.53 444.94h14.15v21.09h-14.15z"
                        />
                        <path className="cls-62" d="M264.68 515.92a20 20 0 0 0-6.27-1.48 13.07 13.07 0 0 1-3-.37c-1.37-.43-2.09-1.38-3.31-2a9.29 9.29 0 0 0-1.59-.55v-5.11l.23.05a18.7 18.7 0 0 1 4.52 1.4c1.46.81 2.29 2.07 4.06 2.6a16.19 16.19 0 0 0 2.14.38 14.53 14.53 0 0 1 3.2.75zM264.68 504.38a6.49 6.49 0 0 1-1.1-.22c-1.37-.43-2.09-1.38-3.3-2a9 9 0 0 0-1.73-.58c-.37-.1-.75-.2-1.13-.28h7.26z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 266.445 508.885)" fill="url(#linear-gradient-36)"
                            d="M227.42 529.47h21.7v15.17h-21.7z" />
                        <path fill="url(#linear-gradient-37)" d="M231.19 470.17h14.15v21.09h-14.15z"
                        />
                        <path className="cls-62" d="M245.35 541.15a19.87 19.87 0 0 0-6.27-1.48 14.31 14.31 0 0 1-3-.37c-1.37-.43-2.09-1.38-3.3-2a9.71 9.71 0 0 0-1.6-.55v-5.12l.24.06a18.19 18.19 0 0 1 4.51 1.4c1.47.81 2.29 2.06 4.07 2.59a14.24 14.24 0 0 0 2.14.38 15.13 15.13 0 0 1 3.2.76zM245.35 529.61a6.11 6.11 0 0 1-1.1-.23c-1.37-.43-2.09-1.38-3.31-2a9.76 9.76 0 0 0-1.73-.58l-1.13-.28h7.27z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 285.775 508.885)" fill="url(#linear-gradient-38)"
                            d="M246.76 529.47h21.7v15.17h-21.7z" />
                        <path fill="url(#linear-gradient-39)" d="M250.53 470.17h14.15v21.09h-14.15z"
                        />
                        <path className="cls-62" d="M264.68 541.15a19.74 19.74 0 0 0-6.27-1.48 14.29 14.29 0 0 1-3-.37c-1.37-.43-2.09-1.38-3.31-2a9.29 9.29 0 0 0-1.59-.55v-5.12l.23.06a18.27 18.27 0 0 1 4.52 1.4c1.46.81 2.29 2.06 4.06 2.59a14.71 14.71 0 0 0 2.14.38 15.13 15.13 0 0 1 3.2.76zM264.68 529.61a6.5 6.5 0 0 1-1.1-.23c-1.37-.43-2.09-1.38-3.3-2a9.76 9.76 0 0 0-1.73-.58l-1.13-.28h7.26z"
                            transform="translate(0 -56.34)" />
                        <path fill="url(#linear-gradient-40)" d="M227.37 497.73h42.22v32.28h-42.22z"
                        />
                        <path className="cls-59" d="M524.17 467.16zM523.72 467.16h-.12.18-.07.01zM517.08 467zM513 466.91s0-.01 0 0zM512.27 466.76s.01-.01 0 0zM517.08 467h-.11.11zM522.8 467.22z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M518.9 410.65h.03l.03-.02-.06.02z" />
                        <path className="cls-59" d="M520.29 467s0 .05-.06.07a.09.09 0 0 1 .07 0 .08.08 0 0 0-.01-.07zM522.49 467.14zM517.9 467s-.01 0 0 0zM479 467.27z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M477.4 410.82h.03-.03z" />
                        <path className="cls-59" d="M511 466.58zM499.2 466.58c.13.13-.22.16 0 .3-.04-.05.17-.22 0-.3zM522.77 467.22z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M499.18 410.54l.02.02-.02-.02z" />
                        <path className="cls-59" d="M508 466.61v.05a.09.09 0 0 0 0-.05zM510.23 466.81zM506.88 466.78a.07.07 0 0 0-.08 0h.08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M505.69 410.43l.03.03.03-.01-.06-.02z" />
                        <path className="cls-59" d="M482.63 467.42l-.05-.05s-.16.05.05.05zM522.8 467.21zM506.84 467.83h-.19zM491.18 467.65h-.05.05zM506.09 467.84a.22.22 0 0 0-.11-.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M481.33 467.44c.18 0 .08-.06.12-.09.22 0 .1 0 .18.09s.23-.07.33-.07c.14-.06.42 0 .58-.06a.15.15 0 0 1 0-.12c.08 0 .15-.05.18 0s-.05 0-.08 0h.09c.08.08-.12 0-.12.08a1.77 1.77 0 0 1 .49-.05c0 .08-.3 0-.13.09h-.2c.15.13-.11 0 0 .13s.29 0 .55 0c.06-.05 0-.07 0-.12.36-.08.28.23.55.12.07-.06.1-.17.29-.11l-.06.11c.25 0 .14-.15.4-.07h-.16c.04 0 .12-.06.25 0v.1c.26 0 .56-.07.85-.09 0 0-.07.06 0 .1a3.42 3.42 0 0 1 1.15.12l.14-.1s.06 0 0 .07c.14 0 0-.07.08-.11s.1.06.05.09a1.65 1.65 0 0 1 1 0h-.05c.21.05.23-.22.42-.11a3.56 3.56 0 0 1 1.26.14c.06-.17.43.08.46-.16.25.13.18.17.53.26.1 0 .14-.15.26-.18v.13l.16-.13.09.16h.1s-.09-.06-.08-.09a.4.4 0 0 1 .42.16l.4-.1c0 .05-.07.07-.13.1.22-.13 0 .14.24 0v-.11a.66.66 0 0 0 .49.06v.09h1a.12.12 0 0 1 0-.23v.15c.06-.1-.11-.06 0-.17s.09.17 0 .22l.15-.05v.12c0 .06.26.16.36 0v.05c.34 0 .49 0 .77-.05 0-.13.11-.1.19-.21a2.64 2.64 0 0 0 .67.15c.17-.07 0-.12.12-.2 0 .12.26.12.13.2a2.46 2.46 0 0 0 .74-.12c0-.05-.09-.07-.06-.11s.15.05.14.11c.41-.18.95.37 1.28.11l.35-.14c.15 0-.1.1 0 .17.37-.21.58 0 .88-.1.24.37.83 0 1.15.21v-.08c.08-.09.1.05.16.07s-.09-.08 0-.13a8.27 8.27 0 0 1 2.14.21c.26 0 .15-.46.47-.25l-.09.16c.53-.2 1.07 0 1.59-.17 0 0 0 .09-.09.09.11.12.41 0 .41-.09s0 .08.06.13.28-.15.34 0 0 0-.06 0 .33 0 .27-.12c.19.06.37-.06.52 0 .1-.15.33.06.36-.15 0 .22.34.17.46.07 0 .07.11.07.06.16.14 0 .26-.05.24-.16.26.25.51-.21.66.12a7.82 7.82 0 0 1 1.16-.25c0 .2-.41 0-.39.24.35-.1.55-.27.9-.23.09 0-.05.09-.08.13.35-.09.68 0 1-.11l-.06.06c-.06.06.14 0 .13-.07h-.06c-.09-.13.25-.27.26-.34-.1.25.31.06.14.38 0 0 .1-.06.09-.12s.08.05 0 .12c.22-.05.15-.14.35-.14 0 0 0 .06-.07.1a.46.46 0 0 1 .38-.13v.06c.29 0 .49-.22.81-.14-.09.17.11.05.13.2l.17-.05-.07-.07c.15 0 .28-.11.41-.06l-.11.06h.28l-.16-.05c.15-.08 0-.18.18-.15 0 0 .15 0 .23.09a.3.3 0 0 1 .26-.06v.18c0 .03.35 0 .44-.16a.14.14 0 0 0 0 .12l.06-.09c.07 0 .08 0 .07.09.21 0-.07-.16.18-.09h-.05c.25 0 .48-.06.71 0 .07.13-.2 0-.12.14a7.07 7.07 0 0 1 1-.14h-.06c.05-.17.24.08.4 0 0 0-.05.09 0 .07a3.13 3.13 0 0 0 .78-.1 2.53 2.53 0 0 0 .48 0s.12 0 .07-.09c.43.2.82-.11 1.2 0h-.07.33c0-.05 0 0-.11-.07a.33.33 0 0 1 .21-.06c-.15 0 0 .08.06.11.17.09 0-.1.26 0a1.78 1.78 0 0 1 .26 0c0 .06-.09 0-.1.08s.26-.11.38-.06h-.19a.39.39 0 0 0 .24.06h.22-.06c.17-.13.34 0 .56-.11-.22.08 0 0 0 .09s.14 0 .11 0H521.35c.14 0 0 0 0 0 .21-.05.5 0 .8 0s.31-.06.55-.07h-.07a2.17 2.17 0 0 0 .36 0h.2-.1.36-.12.4-.09c.05 0 0 0 0 0h-.09a4.82 4.82 0 0 0-.52 0h.07-.18s-.06 0 0 0h-.76c-.31 0 0 0-.26.08l-.15-.09h-.08c.02 0 0 0 0 0h-.45c-.03 0 .14 0 0 0h-.32c0-.05.17 0 0-.06s-.26 0-.38 0h-.45s-.36 0-.54-.08c0 .08-.22.06-.36.08s0-.07.11-.09h-.13a.24.24 0 0 1-.15.05v-.06a2 2 0 0 1-.56 0c0 .06.17.18-.06.22v-.11a.18.18 0 0 1-.11 0l.09-.06c-.1 0-.05.05-.13 0s-.06 0 0-.08.06 0 .1 0a.48.48 0 0 1-.24-.09s0 .07-.07.08-.05-.06-.15-.09-.15 0-.16.07 0 0-.07-.06-.42 0-.32.09c-.29.08-.6-.05-.88 0a2 2 0 0 0-.51.08s-.12-.06-.09-.1a.48.48 0 0 1-.34 0c.13-.06 0-.05.14 0-.17 0-.21-.09-.39 0 .06-.08-.13-.11-.21-.09l.12.07a1 1 0 0 1-.25 0v-.11c-.35-.16-.63.23-.89 0-.09.08.19.06.1.16s-.32-.2-.37-.2c-.22-.07-.21.18-.44.13 0 0 .06.16-.11.21s-.2-.2-.1-.23.06 0 .06 0 .12 0 .06-.09v.05c-.08-.05-.3-.05-.25-.13-.12 0 0 .08 0 .1-.21-.07-.32 0-.54-.05 0 0 .07.08 0 .08-.3-.06-.13.09-.34.11s0-.18-.17-.12 0-.13 0-.17c-.19.09-.36-.06-.47-.09h.11a.5.5 0 0 1-.17 0l.06.1c-.06 0-.11 0-.11-.07s.05.17-.07.26c-.08-.06-.24.05-.27-.09.25.05 0-.13.18-.15a.19.19 0 0 1-.15 0c-.24-.12-.11.15-.36.14 0-.07-.06-.14-.1-.12s.05.12 0 .18-.17 0-.26 0h.1c0 .08-.11.07-.22.09s.1 0 .06-.07c-.13.14-.28-.14-.45-.05s0-.15-.08-.18-.21-.11-.41 0c.06.1.07.08-.07.18l.33-.07-.21.15c.1 0 .21-.06.27-.05-.1.09-.09.06-.05.15-.13-.16-.27.09-.43 0v-.26c-.24-.12-.42.13-.73.06l.1.05c0 .11-.19 0-.29 0s-.06-.12-.1-.18-.23 0-.25.18l-.14-.13c-.25 0-.29.26-.53.23.07-.1 0-.16.13-.24-.08 0-.16 0-.16.05s-.22.12-.29 0-.05.14-.14.14a.08.08 0 0 1 0-.05c0 .05-.14.06-.06.17-.25-.3-.69 0-.9-.24-.18 0-.39.06-.55.07 0 0 0-.05 0 0-.22-.09-.13.27-.38.17s.13-.08.05-.14c0-.32-.3 0-.47-.14-.13-.11-.31.12-.52.09a1.2 1.2 0 0 1-.61.26c.06-.13.09-.07.05-.2s0 .21-.15.24-.19-.12-.21-.26h.17c-.09-.18-.22 0-.31 0v-.08c-.26 0-.26.22-.54.2v.06c-.16.2-.13-.11-.28 0l-.05-.2a2.56 2.56 0 0 1-.54.23 1.65 1.65 0 0 1 .45-.31c-.1 0-.34 0-.39.11s.09-.07.13 0a.57.57 0 0 1-.49.22c0-.38-.52-.09-.66-.39-.35.14-.7-.06-1.11 0 .14.3-.12 0-.1.32h-.14l-.29-.18c-.07-.09.09-.07.09-.14-.21 0-.09-.12-.23-.2 0 .1-.07.15-.19.11l.16.14c-.29.16-.25-.25-.54-.09l.09-.1c-.15.06-.56 0-.71.25 0 0-.06-.12 0-.14-.37 0-.81.26-1.09.11v-.07c-.07 0-.12.14-.21.07s0-.08 0-.08-.18.13-.27.09l.08-.09c-.36-.09-.55.21-.84.26 0-.21-.28-.28-.42-.31a4 4 0 0 0-1.08.26c-.24-.21-.8-.08-1.18-.19 0 0 0 .15-.08.17s-.25.14-.23 0c-.07-.17-.25-.12-.39-.12v.23c-.37-.33-1 .13-1.18-.16-.09.06-.21.06-.3.12v-.12a2.57 2.57 0 0 0-.68 0l.06-.08c-.18 0-.22.33-.38.34l-.05-.17c-.31 0-.61-.13-.92 0 0 0 0-.07.07-.08-.15 0-.56-.09-.5.12 0-.14-.32 0-.48.06v-.1c-.14.13-.14.16-.33.2s0-.08 0-.05c-.16 0-.12.09-.31 0l.07-.06c-.16 0-.14 0-.23.1s-.3 0-.32-.1a.19.19 0 0 1-.2.1v-.07c-.27-.05-.4.12-.58 0v-.05a2 2 0 0 1 .36 0c0-.09-.16-.1 0-.22a1.05 1.05 0 0 1-.53.18.12.12 0 0 0-.1 0 .34.34 0 0 0-.14 0c0-.07-.19 0-.28 0s-.1.07 0 .14 0 0 .08 0h.24a.24.24 0 0 1-.23 0c-.05.05-.09.11-.12.13s-.34-.17-.37-.24c-.26.06-.61.06-.77.2s-.08 0-.11-.06h.12c-.15 0-.44 0-.47.12-.19 0 .1-.09-.15-.07-.5-.12-.81.22-1.36.07h.07c-.63-.05-1.3.07-1.92 0a.83.83 0 0 0-.31 0h-.18c-.26 0-.45-.05-.78 0h-.7a1.88 1.88 0 0 0-.29 0h-.31.77s-.09 0 0 0h.06a.32.32 0 0 0 .17 0h-.05.88c-.16.05.33 0 .29.08a4.08 4.08 0 0 1 .64 0H480a2.07 2.07 0 0 1 .23 0c0-.05.2-.05.3-.09s-.08.07 0 .12.25 0 .2-.08c.12.05.1 0 .16.08s.1 0 .19-.05.05.08.22.06.03.14.03.14zm4.21-.05zm.36 0h-.16v-.06s.1.04.16.07zm-.75-.6h.08-.11zM485.05 466.91z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M490.78 411.36v-.03l-.03.03h.03z" />
                        <path className="cls-59" d="M519.08 467.28zM519.93 467.28zM520.57 467.28zM510.28 467.63c-.09.03-.05.02 0 0zM513.34 467.32l-.1.05c.06.01.1.01.1-.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M506.86 411.49h-.02.02z" />
                        <path className="cls-59" d="M513.1 467.37a.17.17 0 0 0 .14 0 .22.22 0 0 0-.14 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M523.38 410.86h.03v-.01l-.03.01z" />
                        <path className="cls-59" d="M523.41 467.19zM523.52 467.19zM522.52 467.22zM522.26 467.23a1.77 1.77 0 0 0 .24 0 2.08 2.08 0 0 1-.24 0zM521.18 467.09h.21s-.09 0 0 0c-.26-.09.07.01-.21 0zM520.5 467.05c.12 0 0 0 0 0s-.09-.05 0 0zM515.61 467v-.08c-.08-.04.01-.02 0 .08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M514.67 411.06l.09.05.04-.08-.13.03zM514.12 410.41l.04-.01-.15.03.11-.02z"
                        />
                        <path className="cls-59" d="M505.91 466.65v.16c.09-.03.09-.2 0-.16zM502.36 466.8c0-.08-.14-.13-.2-.06s.16.08.2.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M491.72 410.28l.08-.05-.14.04.06.01z" />
                        <path className="cls-59" d="M545.28 478.73zM544.81 478.73h-.13.19-.07.01zM537.88 478.6zM533.59 478.48s-.01-.01 0 0zM532.86 478.33s.01-.01 0 0zM537.88 478.6h-.11s.05-.01.11 0zM543.85 478.79z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M539.77 422.23h.04l.03-.03-.07.03z" />
                        <path className="cls-59" d="M541.22 478.59s0 .05-.05.07a.09.09 0 0 1 .07 0s0-.05-.02-.07zM543.53 478.71zM538.73 478.53z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M496.44 422.39h.03-.03z" />
                        <path className="cls-59" d="M531.51 478.16s.03-.01 0 0zM519.2 478.15c.14.13-.22.16 0 .3-.03-.05.18-.22 0-.3zM543.81 478.79z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M519.19 422.11l.02.02-.02-.02z" />
                        <path className="cls-59" d="M528.42 478.18a.1.1 0 0 0 0 .05s.03-.03 0-.05zM530.73 478.39h-.06zM527.23 478.35h-.08s.04-.02.08 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M525.99 422l.02.03.04-.01-.06-.02z" />
                        <path className="cls-59" d="M501.9 479l-.06-.06s-.16.06.06.06zM543.85 478.78zM527.18 479.4h-.2zM510.83 479.22h-.05s.03.01.05 0zM526.39 479.41a.19.19 0 0 0-.11-.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M500.54 479c.19 0 .09-.07.13-.1.22 0 .1.05.18.09s.25-.07.35-.07c.15-.06.44 0 .61-.06a.18.18 0 0 1 0-.12c.08 0 .15-.05.19 0s-.06 0-.08 0h.08c.08.08-.12 0-.12.09a2 2 0 0 1 .51-.06c0 .08-.31 0-.13.09h-.21c.16.12-.12 0 0 .12s.3 0 .57 0c.06-.05 0-.07 0-.12.38-.08.3.23.58.12.07-.05.1-.17.3-.1l-.07.1c.26 0 .15-.15.43-.07h-.17.26v.1c.28 0 .58-.07.89-.09 0 0-.07.07 0 .1a3.72 3.72 0 0 1 1.2.12l.15-.1s.06.05 0 .07c.15 0 0-.07.08-.11s.11.07.06.1a1.7 1.7 0 0 1 1-.06h-.05c.21.05.23-.22.43-.11a3.91 3.91 0 0 1 1.32.14c.06-.17.45.08.48-.16.26.13.18.17.55.26.1 0 .15-.15.27-.18v.13l.17-.13.09.16h.11s-.1-.06-.09-.09c.18-.06.44.09.44.16l.42-.1c0 .05-.08.07-.13.1.22-.13 0 .15.24 0v-.11a.71.71 0 0 0 .51.06v.1h1a.12.12 0 0 1 0-.23l.05.15c.06-.09-.11-.06 0-.17s.09.17 0 .22l.16-.05v.12c0 .06.27.16.37 0 .35 0 .51 0 .79-.05 0-.13.12-.1.2-.21a2.56 2.56 0 0 0 .7.15c.18-.07 0-.12.13-.2 0 .13.27.12.14.2a2.68 2.68 0 0 0 .77-.12c0-.05-.09-.07-.07-.11s.16.05.15.11c.43-.18 1 .38 1.34.12l.36-.14c.16 0-.1.1 0 .18.38-.21.61 0 .92-.11.25.38.87 0 1.2.22v-.09c.09-.09.11.05.17.07s-.09-.08 0-.13a9 9 0 0 1 2.23.21c.27 0 .16-.46.5-.25l-.1.16c.55-.2 1.12 0 1.66-.17 0 0 0 .09-.09.09.11.12.42 0 .42-.09s0 .08.07.13.29-.15.35 0 0 0-.06 0 .35 0 .28-.12c.2.06.38-.06.54 0 .11-.15.35.06.38-.14 0 .21.35.17.48.06 0 .07.11.07.06.16.15 0 .28 0 .25-.16.27.25.54-.2.69.12a8.54 8.54 0 0 1 1.22-.25c0 .2-.43 0-.41.24.36-.09.58-.27.94-.22.1 0 0 .08-.08.12.36-.09.71 0 1-.11l-.07.06c-.07.06.15 0 .15-.07h-.07c-.1-.13.26-.27.27-.34-.11.26.32.06.15.38a.14.14 0 0 0 .09-.12c.06 0 .08.05 0 .12.24-.05.15-.14.36-.14 0 0 0 .06-.06.11a.43.43 0 0 1 .39-.14v.06c.31 0 .52-.21.85-.14-.09.17.12.05.13.2h.18l-.07-.07c.16 0 .3-.1.43-.06l-.11.06h.29l-.17-.05c.16-.08 0-.18.19-.14 0 0 .16 0 .24.08a.33.33 0 0 1 .28-.06v.18c0 .02.37 0 .47-.15s0 .1 0 .11l.07-.09c.07 0 .08 0 .07.1.22 0-.07-.17.19-.1h-.06c.26 0 .51-.06.75 0 .07.13-.21 0-.13.14a6.28 6.28 0 0 1 1-.13h-.07c.05-.16.25.08.42 0 0 0-.05.09 0 .08a3.43 3.43 0 0 0 .81-.11 2.8 2.8 0 0 0 .5 0s.13 0 .08-.08c.45.19.85-.12 1.25 0h-.07.33c0-.05 0 0-.11-.07a.44.44 0 0 1 .22-.06c-.15 0 0 .08.07.11s0 0 0-.05c.18.09 0-.1.28 0a.86.86 0 0 1 .28 0c0 .05-.1 0-.11.07s.27-.11.4-.05h-.2a.5.5 0 0 0 .25.05h.23-.06c.17-.13.35 0 .58-.11-.22.08 0 .05-.05.1s.15 0 .12 0H542.19c.14 0 0 0 0 0 .22-.05.51 0 .83 0s.32-.06.57-.07h-.07a1.51 1.51 0 0 0 .37 0h.21-.11.37-.12.42-.1c.06 0 0 0 0 0a.43.43 0 0 1-.18 0h.09a3.6 3.6 0 0 0-.54 0h.07-.18s-.07 0 0 0h-.35.06-.46c-.31 0 0 0-.27.07l-.16-.09h-.08c.01 0 0 0-.05.05s-.44 0-.47-.06.15 0 0 .05-.19 0-.34 0c0-.05.18 0 0-.06s-.28 0-.4 0h-.47s-.38 0-.57-.08c0 .08-.24.06-.38.08s0-.07.11-.09h-.13a.28.28 0 0 1-.16 0v-.06a2.25 2.25 0 0 1-.59 0c0 .07.19.18-.06.22 0 0 0-.09.05-.11a.2.2 0 0 1-.12 0l.1-.06c-.1 0 0 .05-.14 0s-.06 0 0-.08.08 0 .11 0a.49.49 0 0 1-.25-.08s0 .06-.07.07-.06-.06-.16-.09-.16 0-.16.07-.06 0-.08-.06-.43 0-.33.09a5.66 5.66 0 0 1-.92 0 2.58 2.58 0 0 0-.53.08s-.12-.06-.1-.09a.52.52 0 0 1-.35 0c.14-.06 0-.05.14 0-.18 0-.22-.09-.41 0 .07-.08-.13-.11-.21-.08l.12.06a1.09 1.09 0 0 1-.26 0v-.11c-.36-.15-.65.23-.93 0-.09.09.2.07.11.16s-.34-.19-.39-.2c-.23-.07-.21.18-.45.13 0 .05.06.17-.12.21s-.21-.2-.1-.23.06 0 .06 0 .12 0 .05-.09v.05c-.08-.05-.31-.05-.26-.12-.12 0 0 .07 0 .1a4.87 4.87 0 0 0-.55-.06s.07.08 0 .08c-.32-.06-.14.09-.36.11s0-.18-.18-.12 0-.13 0-.16c-.2.08-.38-.07-.49-.09h.1a.47.47 0 0 1-.16 0l.06.1c-.07 0-.12 0-.12-.06s.05.16-.08.25-.25.05-.28-.08c.26 0 0-.14.2-.15a.3.3 0 0 1-.16 0c-.24-.13-.11.14-.37.14 0-.08-.06-.15-.1-.13s.05.12 0 .18-.18 0-.26 0h.1c0 .08-.12.07-.24.09s.11 0 .07-.06-.29-.15-.47-.06 0-.15-.08-.18-.22-.11-.43 0c.06.11.07.08-.08.18l.35-.07-.22.15c.1 0 .22-.06.28 0-.11.08-.09.06 0 .14-.15-.16-.29.09-.45 0v-.27c-.25-.12-.44.13-.76.06l.1.05c0 .11-.2 0-.3.06s-.06-.13-.1-.19-.24 0-.27.18l-.14-.12c-.26-.06-.3.26-.55.22.07-.1 0-.16.13-.23h-.16s-.23.12-.31 0 0 .13-.14.13a.08.08 0 0 1 0-.05c0 .05-.15.06-.07.17-.25-.3-.72 0-.94-.24-.18 0-.4.06-.57.07 0 0 0-.05 0 0-.23-.09-.14.28-.4.18s.14-.09.06-.15c0-.31-.32 0-.49-.14-.13-.11-.33.12-.55.1a.2.2 0 0 0 0-.05 1.34 1.34 0 0 1-.65.26c.07-.13.1-.07.06-.19s0 .2-.16.24-.2-.13-.22-.27h.18c-.09-.17-.23 0-.32 0v-.08c-.27 0-.28.22-.57.21v.05c-.16.2-.13-.1-.29 0l-.05-.2a3.07 3.07 0 0 1-.56.23 1.6 1.6 0 0 1 .47-.31c-.11 0-.36 0-.41.11s.09-.06.13 0a.59.59 0 0 1-.5.22c0-.38-.55-.09-.7-.39-.37.14-.73-.06-1.16 0 .15.3-.12 0-.1.32h-.14l-.31-.18c-.07-.09.1-.07.09-.13-.22 0-.09-.13-.24-.21 0 .11-.07.15-.2.11l.18.14c-.31.16-.27-.25-.58-.09l.1-.1c-.16.06-.58 0-.74.25 0 0-.06-.12 0-.14-.38 0-.84.26-1.14.11v-.07c-.07 0-.12.14-.21.07s0-.08 0-.08-.19.13-.29.09l.08-.09c-.36-.09-.56.21-.87.26 0-.21-.29-.28-.44-.31a4.32 4.32 0 0 0-1.13.26c-.25-.21-.83-.08-1.23-.19.06 0 0 .15-.08.17s-.26.14-.24 0c-.07-.17-.26-.12-.41-.12v.23c-.39-.33-1 .13-1.24-.16-.09.06-.21.06-.3.12v-.12a3.46 3.46 0 0 0-.72 0l.07-.08c-.19 0-.23.33-.4.34l-.05-.17c-.32 0-.64-.13-1 0 0 0 0-.07.07-.08-.15 0-.58-.09-.53.12 0-.14-.32 0-.49.06v-.1a.52.52 0 0 1-.35.2s0-.08 0 0c-.16-.05-.12.09-.32 0l.08-.06c-.17 0-.16 0-.25.1s-.31 0-.33-.1a.2.2 0 0 1-.21.1v-.06c-.28-.06-.41.11-.6 0a.06.06 0 0 0 0-.05 2.39 2.39 0 0 1 .38 0c0-.09-.18-.1 0-.22a1.09 1.09 0 0 1-.56.18.14.14 0 0 0-.11 0h-.14c0-.07-.2 0-.29 0s-.11.07 0 .14 0 0 .07 0h.25a.23.23 0 0 1-.24 0 .79.79 0 0 1-.12.13c-.12-.11-.35-.17-.38-.23a2.1 2.1 0 0 0-.81.19c-.07 0-.08 0-.11-.06h.12c-.15 0-.45 0-.49.12s.11-.09-.16-.06c-.52-.12-.85.22-1.42.07h.06c-.65-.05-1.35.07-2 0a.92.92 0 0 0-.32 0h-.19c-.27 0-.47-.05-.82 0a2.2 2.2 0 0 1-.38 0h-.39a2.29 2.29 0 0 0-.31 0h-.32.8s-.09 0 0 0h.07a.51.51 0 0 0 .18 0 1.58 1.58 0 0 0 .31 0h.33a1 1 0 0 1 .27 0c-.17 0 .34 0 .3.07a6.44 6.44 0 0 1 .67 0h-.06a1 1 0 0 1 .24.05c0-.06.21-.06.32-.1s-.1.07-.05.13.27 0 .21-.08c.12 0 .11 0 .17.07s.1 0 .2-.05 0 .08.23.06.18.13.18.13zm4.4-.06zm.37 0h-.16v-.06s.11.06.16.12zm-.78-.6h.08-.1a.08.08 0 0 1 .02.03zM504.42 478.48zM537.93 478.61z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M510.42 422.93l-.01-.03-.03.03h.04z" />
                        <path className="cls-59" d="M540 478.85zM540.85 478.85zM541.52 478.86zM530.77 479.2c-.08.03-.04.02 0 0zM534 478.89l-.1.05c.03.06.1.06.1-.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M527.2 423.06h-.02.02z" />
                        <path className="cls-59" d="M533.72 478.94a.19.19 0 0 0 .15 0 .26.26 0 0 0-.15 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M544.46 422.43h.03-.03z" />
                        <path className="cls-59" d="M544.49 478.77zM544.6 478.76zM543.56 478.79zM543.29 478.81h.26s-.2-.02-.26 0zM542.15 478.66h.23s-.09 0 0 0c-.28-.07.07.01-.23 0zM541.45 478.62c.12 0 0 0 0 0s-.1-.02 0 0zM536.34 478.52v-.08c-.08.01.01.03 0 .08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M535.36 422.63l.09.05.05-.08-.14.03zM534.78 421.98l.05-.01-.16.03.11-.02z"
                        />
                        <path className="cls-59" d="M526.21 478.23v.15c.09-.03.1-.2 0-.15zM522.5 478.37c0-.08-.14-.13-.21-.06.09.02.17.08.21.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M511.4 421.85l.07-.05-.14.04.07.01z" />
                        <path className="cls-59" d="M532.07 454.84zM531.76 454.84h-.08.19-.11zM527.32 454.71zM524.58 454.59s-.01-.01 0 0zM524.11 454.44zM527.32 454.71h-.07s.04-.01.07 0zM531.15 454.9z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M528.54 398.34h.02l.02-.03-.04.03z" />
                        <path className="cls-59" d="M529.47 454.7v.07a.05.05 0 0 1 .05 0s-.05-.05-.05-.07zM530.94 454.82zM527.87 454.64z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M500.79 398.5h.02-.02z" />
                        <path className="cls-59" d="M515.36 454.26c.09.13-.14.16 0 .3-.02-.05.12-.22 0-.3zM531.12 454.9z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M515.35 398.22l.02.02-.02-.02z" />
                        <path className="cls-59" d="M521.27 454.29a.14.14 0 0 0 0 .06s.01-.03 0-.06zM522.74 454.5zM520.5 454.46s-.02-.02 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M519.71 398.12l.01.02.03-.01-.04-.01z" />
                        <path className="cls-59" d="M504.29 455.1a.1.1 0 0 1 0-.05s-.15.05 0 .05zM531.15 454.89zM520.47 455.51h-.12zM510 455.33s0 .01 0 0zM520 455.52a.17.17 0 0 0-.07-.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M503.41 455.12c.13 0 .06-.06.09-.09s.06.05.11.09.16-.07.23-.07.28 0 .39-.05a.3.3 0 0 1 0-.12c.06 0 .1-.05.12 0s0 0-.05 0h.06c.05.08-.08 0-.08.08s.24-.08.32 0-.19 0-.08.09h-.13c.1.12-.08 0 0 .12s.19 0 .36 0 0-.07 0-.12c.25-.08.19.23.37.12s.07-.17.2-.1l-.05.1c.17 0 .1-.15.27-.07h-.1c.03 0 .08-.05.16-.05v.1c.18 0 .37-.07.57-.09v.1a1.71 1.71 0 0 1 .77.12l.09-.1v.07c0 .07 0-.07.05-.11a.06.06 0 0 1 0 .1.72.72 0 0 1 .64-.06c.14.05.16-.22.28-.11.29 0 .62-.05.84.14 0-.17.29.08.31-.16.17.13.12.17.35.26.07 0 .1-.15.17-.18v.13l.1-.13.06.16h.07s-.06-.06-.06-.09.28.09.28.16l.27-.1c0 .05 0 .07-.08.1.14-.13 0 .15.16 0v-.1c0-.02.21.08.32.05v.1h.65c-.08-.05-.06-.22 0-.23v.15c0-.09-.07-.06 0-.17s.06.17 0 .22l.1-.05a1 1 0 0 1 0 .12c.05-.09.18.16.24 0a3.83 3.83 0 0 0 .51 0c0-.13.07-.1.13-.21a1.1 1.1 0 0 0 .44.15c.12-.07 0-.12.09-.2 0 .13.17.12.08.2a1.16 1.16 0 0 0 .5-.12c0-.05-.06-.07 0-.11s.11.05.1.11c.27-.18.64.38.85.12l.23-.14c.11 0-.06.1 0 .18.24-.21.38 0 .59-.11.15.38.55 0 .76.22v-.09c.06-.09.07.05.11.07s-.06-.08 0-.13a3.74 3.74 0 0 1 1.43.21c.18 0 .1-.46.32-.25l-.06.16c.35-.2.71 0 1.06-.17 0 0 0 .09-.06.09s.27 0 .27-.09 0 .08.05.13.18-.15.22 0 .22 0 .18-.12c.13.06.25-.06.35 0 .07-.15.22.06.24-.14 0 .21.23.17.31.06 0 .07.07.07 0 .16s.17-.05.16-.16c.17.25.34-.2.44.12a3.7 3.7 0 0 1 .78-.25c0 .2-.28 0-.27.24.24-.09.38-.27.61-.22.06 0 0 .08-.06.12.24-.09.46 0 .67-.11l-.05.06c-.05.06.1 0 .09-.06-.06-.13.17-.27.18-.34-.07.26.2.06.09.38a.14.14 0 0 0 .06-.12s.05.05 0 .12c.15-.05.09-.14.23-.14s0 .06 0 .11.13-.17.25-.14 0 .06 0 .06c.19 0 .33-.21.54-.14-.06.17.07.05.09.2l.11-.05v-.07c.11 0 .19-.1.28-.06l-.07.06h.18l-.1-.05c.1-.08 0-.18.12-.14 0 0 .1 0 .15.08 0-.05.1-.09.18-.06s0 .16 0 .18.24 0 .3-.15a.14.14 0 0 0 0 .11v-.09.1c0 .1 0-.17.13-.1.17 0 .32-.06.48 0s-.14 0-.09.14a2.81 2.81 0 0 1 .68-.13c0-.16.16.08.26 0s0 .09 0 .08a1.51 1.51 0 0 0 .52-.11 1.16 1.16 0 0 0 .32 0s.08 0 .05-.08c.29.19.55-.12.8 0 0 0-.07 0 0 0h.22c0-.05 0 0-.07-.07a.2.2 0 0 1 .14-.06c-.1 0 0 .08 0 .11.11.09 0-.1.17 0a.37.37 0 0 1 .18 0c0 .05-.07 0-.07.07s.17-.11.25-.06-.09 0-.13 0a.25.25 0 0 0 .17 0h.15c.11-.13.22 0 .37-.11-.14.08 0 0 0 .1s.09 0 .08 0h.27c-.02 0 0 0 0 0h.53a2.41 2.41 0 0 1 .37-.07c.05 0 0 0 0 0h.4-.07.42-.06a.19.19 0 0 1-.12 0h.06a1.52 1.52 0 0 0-.35 0h.05-.64c-.21 0 0 0-.17.07l-.11-.09h-.05c.01 0 0 0 0 0s-.28 0-.3-.06.09 0 0 .05-.13 0-.22 0 .11 0 0-.06-.18 0-.25 0h-.3a3.08 3.08 0 0 0-.37-.07c0 .08-.14.06-.24.08a.1.1 0 0 1 .07-.09h-.08a.13.13 0 0 1-.1 0v-.06c-.12 0-.23.07-.38 0s.12.18 0 .22v-.11a.07.07 0 0 1-.07 0l.06-.06c-.07 0 0 .05-.09 0s0 0 0-.07 0 0 .07 0a.24.24 0 0 1-.16-.08.05.05 0 0 1 0 .07c-.12 0 0-.06-.11-.09s-.1 0-.1.07v-.06c0-.06-.28 0-.21.09-.19.09-.4-.05-.59 0-.11 0-.25 0-.33.08a.09.09 0 0 1-.07-.09c-.09 0-.1.06-.22 0 .08-.06 0-.05.09 0-.12 0-.14-.09-.26 0 0-.08-.09-.11-.14-.08l.08.06a.46.46 0 0 1-.17 0v-.11c-.24-.15-.42.23-.6 0-.06.09.13.07.07.16s-.22-.19-.25-.2-.14.18-.29.13a.15.15 0 0 1-.08.21c-.1 0-.13-.19-.06-.23s.08 0 0-.09-.2 0-.16-.12 0 .07 0 .1c-.14-.07-.21 0-.36-.06v.08c-.21-.06-.1.09-.24.11s0-.18-.11-.12 0-.13 0-.16c-.13.08-.24-.07-.32-.09h.07a.22.22 0 0 1-.11 0v.1s-.07 0-.07-.06 0 .16-.05.25-.16 0-.18-.08c.17.05 0-.14.12-.15a.12.12 0 0 1-.1 0c-.16-.13-.08.14-.24.14 0-.08 0-.15-.07-.13s0 .12 0 .18-.11 0-.17 0h.07c0 .08-.08.07-.15.09s.07 0 0-.06-.19-.15-.3-.06 0-.14 0-.18-.14-.11-.28 0c0 .11 0 .08-.05.18l.23-.07-.15.15c.07 0 .14-.06.19 0s-.07.06 0 .14c-.1-.16-.19.09-.29 0v-.27c-.16-.12-.28.13-.49.06l.07.05c0 .11-.13 0-.2.06a.24.24 0 0 0-.06-.18c0 .06-.15 0-.17.17l-.09-.12c-.17-.06-.19.26-.35.22 0-.1 0-.16.08-.23h-.1s-.15.13-.2 0 0 .13-.09.13a.08.08 0 0 1 0-.05c0 .05-.1.06 0 .17-.17-.3-.46 0-.61-.24l-.36.07s0-.05 0 0c-.15-.09-.09.28-.26.18s.09-.09 0-.15c0-.31-.2 0-.32-.14-.08-.11-.21.12-.35.1a.08.08 0 0 0 0-.05.68.68 0 0 1-.41.26c0-.13.06-.07 0-.19s0 .2-.11.24a.52.52 0 0 1-.13-.27H518c-.06-.17-.15 0-.21 0v-.08c-.17 0-.18.22-.36.21v.05c-.11.2-.09-.1-.19 0v-.2a1.72 1.72 0 0 1-.36.23c.07-.15.21-.22.3-.31-.07 0-.23 0-.26.11s.06-.06.08 0a.34.34 0 0 1-.32.22c0-.38-.35-.09-.45-.39-.23.14-.46-.06-.74 0 .1.3-.08 0-.06.32h-.1l-.19-.18c0-.09.06-.07.06-.13s-.06-.13-.16-.21c0 .11 0 .15-.13.11l.12.14c-.2.16-.17-.25-.37-.09l.06-.1c-.1.06-.37 0-.47.25v-.14c-.24 0-.54.26-.72.11v-.07s-.07.14-.13.07 0-.08 0-.08-.12.13-.18.09v-.09c-.24-.09-.37.21-.56.26 0-.21-.19-.28-.28-.31-.27 0-.47.18-.72.26-.16-.21-.54-.08-.79-.19 0 0 0 .15-.05.17s-.17.14-.16 0c0-.17-.16-.12-.26-.12v.23c-.25-.33-.65.13-.79-.16-.06.06-.13.06-.19.12v-.12a1.41 1.41 0 0 0-.46 0v-.08c-.11 0-.14.33-.25.34v-.17c-.21 0-.41-.13-.61 0v-.08c0-.01-.37-.09-.34.12 0-.14-.21 0-.32.06v-.1c-.09.13-.1.17-.23.2s0-.07 0-.05-.08.09-.21 0l.05-.06c-.1 0-.1 0-.15.1a.17.17 0 0 1-.22-.1c0 .05-.07.12-.13.1a.06.06 0 0 1 0-.06c-.17-.06-.26.11-.38 0a.06.06 0 0 0 0-.05.93.93 0 0 1 .24 0c0-.09-.11-.1 0-.22-.09.07-.25.21-.36.18a.06.06 0 0 0-.07 0h-.09c0-.07-.13 0-.19 0s-.07.07 0 .14h.16c0 .05-.09.08-.15 0l-.08.13c-.08-.11-.23-.17-.25-.23s-.4.05-.51.19-.06 0-.08-.06.07 0 .08 0-.29 0-.31.12.07-.08-.1-.06c-.33-.12-.54.23-.91.07-.42-.05-.86.07-1.28 0a.35.35 0 0 0-.2 0h-.12c-.18 0-.3-.05-.53 0h-.69.31s-.06 0 0 0-.06 0 0 0h.11c.11 0 0 0 0 0h.2c.03 0 .22 0 .21.05a.44.44 0 0 1 .18 0c-.11 0 .22 0 .19.07a2.69 2.69 0 0 1 .43 0 .6.6 0 0 1 .16.05c0-.06.13-.06.2-.1s-.06.07 0 .13.17 0 .13-.08.07 0 .11.07.07 0 .13-.05 0 .08.14.06.18.19.18.19zm2.82-.05zm.24 0h-.1v-.06s.06.04.1.07zm-.5-.6h.03v.01zM505.9 454.59z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M527.36 398.38h-.01l.01.01v-.01zM509.74 399.04v-.03l-.02.03h.02z"
                        />
                        <path className="cls-59" d="M528.66 455zM529.23 455zM529.66 455zM522.77 455.31s-.03.02 0 0zM524.82 455l-.06.05s.06.01.06-.05zM524.66 455.05a.09.09 0 0 0 .1 0s-.07-.05-.1 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M531.53 398.54h.03-.03z" />
                        <path className="cls-59" d="M531.56 454.87zM531.63 454.87zM531 454.9zM530.79 454.92h.21s-.17-.02-.21 0zM530.06 454.77h.15s-.06 0 0 0c-.21-.07.04.02-.15 0zM529.61 454.73c.08 0 0 0 0 0s-.06-.01 0 0zM526.34 454.63v-.08c-.06.01 0 .03 0 .08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M525.71 398.74l.06.05.03-.08-.09.03zM525.34 398.09l.03-.01-.1.03.07-.02z"
                        />
                        <path className="cls-59" d="M519.85 454.34v.15s.07-.2 0-.15zM517.48 454.48c0-.08-.09-.13-.14-.05s.11.07.14.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M510.37 397.96l.04-.05-.09.04.05.01z" />
                        <path className="cls-59" d="M500.79 478.73zM500.79 478.62v.07a.22.22 0 0 0 0-.08zM500.92 477zM501 476zM501.18 475.79s.01 0 0 0zM500.92 477zM500.73 478.39z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M500.95 421.09l.03.01-.03-.01z" />
                        <path className="cls-59" d="M500.92 477.77zM500.81 478.31zM501 477.18z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M500.79 410.82v.01-.01z" />
                        <path className="cls-59" d="M501.37 472.55c-.13 0-.17-.05-.3 0 .05-.01.21.04.3 0zM500.73 478.38z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M501.07 416.21h-.02.02z" />
                        <path className="cls-59" d="M501.34 474.74zM501.13 475.28zM501.17 474.45s.02 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M501.17 417.82h-.02v.01l.02-.01z" />
                        <path className="cls-59" d="M500.53 468.45h.05s-.05-.05-.05 0zM500.74 478.39zM500.12 474.44zM500.3 470.57zM500.11 474.26h.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M500.51 468.13c0 .05.06 0 .1 0h-.09c-.03 0 .07.05.06.08.05 0 0 .1.05.15h.09s.05 0 0 .05h-.08c-.08 0 .08.09 0 .12s0-.07-.09 0v-.05h-.12c-.12 0 0 .07 0 .13s.07 0 .12 0-.23.07-.12.14.17 0 .1.07h-.1c0 .07.15 0 .07.1s.05 0 .05.07h-.1a1.89 1.89 0 0 0 .09.21h-.1c0 .1 0 .2-.12.29h.1-.06c-.03 0 .18.17.06.24-.05.05.22.05.11.1-.05.11 0 .23-.14.31.17 0-.08.11.16.12-.13.06-.17 0-.26.13s.15 0 .18.06h-.14.14-.16a.14.14 0 0 1 .1 0c.06 0-.1.1-.17.1l.11.1a.24.24 0 0 1-.1 0c.13.05-.15 0 0 .06h.1c-.08 0-.08.08-.05.12h-.1v.24a.36.36 0 0 1 .23 0h-.15H500.23h.05-.12c.09 0-.16.07 0 .09v.19c0 .07.1 0 .2.05s-.15.1-.14.16.12 0 .19 0c-.12 0-.11.07-.2 0a.28.28 0 0 0 .12.18h.12-.11c.19.1-.37.23-.11.31l.14.08h-.18c.21.09 0 .14.11.22-.38.05 0 .2-.22.28H500.1h.13c.05 0-.13.35-.21.52s.46 0 .25.12h-.17c.2.13 0 .26.17.39h-.08c-.12 0 0 .1.09.1h-.13c-.04 0 .15.06 0 .08h-.05c.06 0 0 .08.13.06-.07 0 .06.09 0 .13.15 0-.07.08.14.09-.21 0-.17.08-.07.11h-.15c-.09 0 0 .06.15.06-.25.06.21.12-.11.16a1 1 0 0 1 .25.29c-.2 0 0-.1-.24-.1.09.09.27.14.22.22s-.08 0-.12 0 0 .17.11.25h-.06.06a.86.86 0 0 1 .33.07c-.25 0-.06.07-.37 0h.11-.11c-.06 0 .14 0 .14.08h-.11c.09 0 .17.05.13.09s-.05 0-.05 0 .21.12.14.2-.05 0-.2 0H500.54s.1.07.06.1h-.06v.07h.05c.08 0 .18 0 .14.05s0 0-.08.05.09 0 .06.07h-.18c.11 0 0 .08.15.11s0 0-.1 0 .17 0 .1.05c0 .07.06.12 0 .18s0 0-.15 0 .17.17.14.25c.16 0-.08.06 0 .1h-.08c0 .06.05.11.1.19s0 .09 0 .12 0 0 .08 0c-.19.11.12.2 0 .3v.08h.07c.07 0 .06 0 .06.06s-.09 0-.11 0h.05c-.09 0 .1 0 0 .07s0 .05 0 .07 0 0-.07 0 .1.07.05.1 0 0 0-.05 0 0-.05.06v.05c.12 0 0 .08.1.14s0 0-.08 0 0 .05 0 .08v.2c0 .08.06.07.07.13a.11.11 0 0 0 0 .08v.05a.3.3 0 0 1 0 .08.46.46 0 0 0 0 .09v-.18-.06-.11c0-.08 0 0-.07-.07h.09v-.11c0-.01 0 0 0 0v-.08c0-.03 0 0 .05 0s0-.07 0-.1 0-.06-.05-.11.05-.09.08-.13c-.07 0-.06-.06-.07-.09a.11.11 0 0 1 .09 0h-.05.07s-.06-.08 0-.14-.18.05-.22 0h.16s-.05 0 0 0h.07a.13.13 0 0 1 .08-.06h-.07H501.03h.06c.06 0 0-.1-.09-.08-.08-.07.06-.15 0-.22s0-.09-.09-.12.06 0 .1 0-.06 0 0-.08.05 0 0 0 .08-.05 0-.09c.08 0 .11 0 .08-.05h-.06a.16.16 0 0 1 0-.07h.12c.15-.08-.23-.15 0-.22-.08 0-.06.05-.16 0s.2-.08.2-.09-.18-.05-.13-.11a.28.28 0 0 1-.2 0s.19-.05.22 0a.08.08 0 0 0 .08 0s0-.07.12-.06a.07.07 0 0 0-.1 0c.07-.05 0-.08.06-.13h-.09c.07-.07-.08 0-.1-.08s.17 0 .11 0a.25.25 0 0 1 .17 0c-.09 0 .07-.09.09-.11h-.1-.19c-.09 0 0-.06.08-.07-.05.07.14 0 .15.05.13-.06-.15 0-.14-.09s.15 0 .13 0h-.18c-.05 0-.05-.05 0-.07-.07 0-.06 0-.09-.06s0 0 .07 0c-.13 0 .14-.07.06-.11a1.24 1.24 0 0 1 .18 0c-.1-.05.11-.06 0-.11a.22.22 0 0 1-.18 0l.07.08-.15-.05s.06.05 0 .06a.25.25 0 0 0-.15 0c.16 0-.09-.07 0-.1h.27c.12-.06-.13-.11-.06-.18-.11 0 0 0-.06-.07a.42.42 0 0 0 .18 0c-.06 0 0-.05-.17-.06h.12c0-.06-.26-.07-.23-.13s.17 0 .24 0-.13-.05 0-.07-.14 0-.13 0h.05-.17c.3-.06 0-.17.24-.23a.42.42 0 0 1-.07-.13s.05 0 0 0-.28 0-.18-.1.09 0 .14 0c.32 0 0-.08.15-.12.11 0-.12-.08-.1-.13h.05a.38.38 0 0 1-.26-.15.59.59 0 0 0 .19 0h-.24a1.9 1.9 0 0 1 .27-.05v.05c.18 0 0-.06 0-.08h.08c0-.06-.22-.06-.21-.13H501c-.19 0 .11 0 0-.07h.2a.76.76 0 0 1-.23-.13 2.14 2.14 0 0 1 .31.11s0-.08-.12-.1.07 0 0 0-.23-.07-.23-.12c.39 0 .1-.13.4-.17-.14-.09.06-.17 0-.27h-.31l.19-.07h.13c.07 0 .13 0 .21-.06-.11 0-.16 0-.11-.05l-.14.05c-.17-.08.25-.07.09-.14h.09s0-.14-.24-.17h.14c.02 0-.26-.2-.12-.27h.08s-.14 0-.07-.05h.08s-.13 0-.09-.07h.08c.09-.09-.2-.14-.25-.21a.38.38 0 0 0 .31-.1c0-.1-.18-.17-.27-.27.22-.06.09-.2.2-.29a.31.31 0 0 1-.17 0s-.14-.06 0-.06c.18 0 .13-.06.13-.1h-.23c.32-.1-.14-.25.15-.3-.05 0-.06-.05-.11-.07h.11a.15.15 0 0 0 0-.17h.09s-.34-.05-.34-.09h.16c0-.07.13-.15 0-.22h.07s.09-.13-.12-.12c.14 0 0-.08 0-.12h.1c-.13 0-.17 0-.21-.09s.08 0 .06 0-.1 0-.05-.08h.07l-.1-.06c-.1-.06 0-.07.1-.08s-.12 0-.1 0h.06c.06-.06-.11-.09 0-.14h.06v.09c0-.01.09 0 .21 0-.07 0-.21-.09-.17-.13.06 0 0-.05 0-.07s-.08 0-.14 0v.05c-.05 0-.09 0 0-.06h-.14c.12 0 .17-.08.24-.09s-.05-.15-.19-.19 0 0 .06 0 0-.1-.11-.11.08 0 .06 0c.11-.12-.23-.2-.08-.34 0-.16-.07-.32 0-.48s0 0 0-.07v-.05c0-.06.06-.11 0-.19s0-.09 0-.09v-.07-.14V467.71c0 .01 0 .08-.05.08a.11.11 0 0 1 0 .06s0 .08-.07.07 0 .11 0 .16v.06c0 .06.06.05.09.07s-.06 0-.12 0 0 .06.08.05 0 0-.08 0 0 0 .06.05-.08 0-.06 0-.14-.18-.14-.18zm.05 1zm0 .09h.06zm.59-.18z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M501.03 412.71h-.02l.03.01-.01-.01z" />
                        <path className="cls-59" d="M500.9 477z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M500.25 414.13h.02l-.02-.01v.01z" />
                        <path className="cls-59" d="M500.67 477.47zM500.67 477.68z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M500.67 421.5h.02-.02z" />
                        <path className="cls-59" d="M500.63 476.05h0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M500.12 418.11v-.01.01z" />
                        <path className="cls-59" d="M500.58 476s.02 0 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M500.75 422.19v.01-.01z" />
                        <path className="cls-59" d="M500.75 478.54zM500.76 478.57zM500.71 478.26v.06s.02-.05 0-.06zM500.85 478s-.01.06 0 0zM500.89 477.82s.02-.02 0 0zM501 476.61h.09-.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M500.55 420.04l-.05.02.08.01-.03-.03zM501.19 419.9l.02.01-.03-.03.01.02z"
                        />
                        <path className="cls-59" d="M501.29 474.21h-.15s.2.03.15 0zM501.15 473.33h.05c-.08 0-.07-.01-.05 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M501.33 414.36l.05.02-.05-.03v.01z" />
                        <path className="cls-59" d="M524 466.79zM524 466.67v.05zM524.09 465zM524.21 464s.01 0 0 0zM524.36 463.84s.01 0 0 0zM524.09 465s.01 0 0 0zM523.9 466.45z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M524.13 409.14v.01l.02.01-.02-.02z" />
                        <path className="cls-59" d="M524.1 465.82h-.1zM524 466.37zM524.17 465.23z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M523.96 398.88z" />
                        <path className="cls-59" d="M524.54 463.52s.01.01 0 0zM524.54 460.61c-.12 0-.16-.06-.3 0 .06-.01.22.04.3 0zM523.9 466.44z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M524.24 404.26l-.01.01.01-.01z" />
                        <path className="cls-59" d="M524.52 462.79zM524.31 463.34zM524.34 462.51s.03-.01 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M524.35 405.88h-.03l.01.01.02-.01z" />
                        <path className="cls-59" d="M523.7 456.51h.06s-.05-.05-.06 0zM523.91 466.45zM523.3 462.5v-.05.05zM523.47 458.62zM523.29 462.31h.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M523.69 456.19h0c-.09 0 .07.06.07.08v.15h.09-.08c-.08 0 .08.09.06.12s0-.08-.1 0v-.05h-.12c-.12 0 0 .07 0 .14s.07 0 .11 0-.22.07-.12.13.18 0 .11.08h-.1c0 .06.15 0 .07.1s0-.05-.05 0 .06 0 .06.06h-.1c0 .06.07.14.08.21s-.06 0-.09 0 0 .2-.12.28h.09-.06H523.5c-.03 0 .18.17.06.23 0 .05.21.06.11.1-.06.11 0 .23-.14.32.17 0-.09.1.15.11-.12.06-.16 0-.25.13s.15 0 .17.07h-.13.14-.16.1c.06 0-.1.1-.17.11l.11.1a.28.28 0 0 1-.11 0c.14.06-.14 0 0 .06h.11c-.08 0-.09.08-.06.12h-.09v.24a.36.36 0 0 1 .23 0h-.15H523.37h.05-.13c.1 0-.15.06 0 .09h-.05c0 .08.05.12.05.19s.1 0 .21 0-.15.11-.14.17.11 0 .19 0c-.12 0-.11.06-.2 0a.28.28 0 0 0 .12.18.25.25 0 0 1 .12 0h-.12c.19.1-.37.24-.11.32l.13.09h-.17c.21.09 0 .15.11.22-.38.06 0 .21-.22.28H523.23h.13c.1.17-.13.35-.21.53s.46 0 .25.12h-.17c.2.13 0 .27.17.4h-.09c-.11 0 0 .09.1.1h-.14c-.07 0 .15.07 0 .08h-.05c.06 0 0 .08.12.07-.06 0 .07.09 0 .13.15 0-.07.08.14.08-.22 0-.17.09-.07.12h-.15c-.09 0 0 .07.15.06-.25.07.21.13-.11.17a1 1 0 0 1 .25.28c-.21 0 0-.1-.24-.09.09.08.26.13.22.22s-.09 0-.12 0 0 .17.1.25 0 0 .06 0c.12 0 .26.06.33.06-.25 0-.06.08-.38 0h.12a.15.15 0 0 1-.12 0c.06.06.15 0 .15.09h-.11c.08 0 .16.05.13.09s.21.13.14.2-.06 0-.2 0l.05.05h.06s.11.07.07.1h-.06v.07c.07 0 .18 0 .14.05s0 0-.08.06.09 0 .05.06h-.18c.12 0 0 .09.16.11h-.11.09c0 .06.06.12 0 .18s0 0-.14 0 .17.17.14.25c.17 0-.08.06 0 .1h-.07c0 .05 0 .11.1.19s0 .08 0 .12 0 0 .09 0c-.2.1.11.2 0 .29v.08h.07c.07 0 .05 0 .05.05s-.08 0-.1 0c-.08 0 .1 0 .05.06s.05 0 0 .06 0 0-.07 0 .1.06 0 .09 0 0 0 .06v.06c.12 0 0 .09.1.14s0 0-.09 0 0 0 0 .08v.2c0 .07.05.08.07.14a.14.14 0 0 0 0 .09v.05a.32.32 0 0 1 0 .09.62.62 0 0 0 0 .1v-.13-.05-.1c0-.07 0 0-.07-.06h.09v-.11c0-.01 0 0 0 0v-.08c0-.08 0 0 0 0v-.09-.11c0-.05 0-.09.08-.14-.08 0-.06-.05-.07-.09s.06 0 .08 0h.06s-.07-.09 0-.14-.17 0-.22 0h.11c.01 0 0 0 0 0h.14c.08 0 0 0 0 0a.13.13 0 0 1 .08-.06.1.1 0 0 1-.08 0h.08s0-.1-.09-.08c-.08-.07.06-.15 0-.22s0-.1-.08-.13.06 0 .1 0-.06 0 0-.08.05 0 0 0 .09-.05 0-.1h.09-.06v-.06h.12c.15-.09-.24-.16 0-.22-.08 0-.06.05-.16 0s.2-.09.2-.1-.18-.05-.13-.1-.16 0-.2 0 .19-.05.22 0 0 0 .08 0h-.05c.05 0 .05-.08.12-.07a.06.06 0 0 0-.09 0c.07-.05 0-.08.05-.13h-.08c.06-.08-.08 0-.1-.09s.17 0 .11 0h.17c.04 0 .07-.09.09-.12h-.1.06-.25c-.08 0 0-.06.08-.07-.05.06.13 0 .15.05.12 0-.15 0-.14-.08s.14 0 .13 0h-.19c-.06 0 0 0 0-.06-.08 0-.06 0-.09-.05s0 0 .07 0c-.14 0 .14-.07 0-.11h.19c.04 0 .11-.05 0-.1a.25.25 0 0 1-.19 0l.07.08h-.15s.07 0 0 .07-.06 0-.15 0c.16 0-.09-.07 0-.11h.26c.13-.06-.13-.1-.06-.18-.11 0 0 0-.06-.08a.47.47 0 0 0 .18 0c-.07 0 0-.06-.17-.06h.12c.05-.06-.26-.07-.23-.13s.17 0 .24 0-.12-.06 0-.08-.14 0-.13 0h-.16c.29-.06 0-.17.23-.22a.3.3 0 0 1-.06-.13c.09 0-.27 0-.17-.09s.08 0 .14 0c.32 0 0-.07.15-.11.1 0-.12-.08-.1-.13a.39.39 0 0 1-.26-.16H523.97a.76.76 0 0 1 .27-.05c.18 0 0 0 0-.08h.08c0-.07-.22-.07-.21-.14h-.06c-.19 0 .11 0 0-.07h.19a1.59 1.59 0 0 1-.22-.13.86.86 0 0 1 .3.11s0-.09-.11-.1.07 0 0 0-.23-.07-.23-.12c.38 0 .1-.13.39-.16-.14-.09.06-.18 0-.28h-.31l.18-.07h.14c.07 0 .13 0 .21-.05-.11 0-.16 0-.12-.05h-.14c-.16-.07.26-.06.1-.14h.09c-.06 0 0-.14-.24-.18h.14c0-.09-.26-.2-.12-.27h.07s-.13 0-.06-.05h.07s-.12 0-.08-.07h.08c.09-.08-.2-.13-.25-.2.21 0 .27-.07.3-.11 0-.1-.18-.17-.26-.26.22-.06.08-.2.2-.3a.35.35 0 0 1-.18 0s-.14-.07 0-.06c.17 0 .12-.07.13-.1h-.24c.33-.09-.13-.24.16-.29-.06 0-.06-.05-.12-.07h.12a.15.15 0 0 0 0-.17h.08s-.33 0-.34-.09h.17c0-.08.12-.15 0-.23h.08s.09-.14-.12-.13c.14 0 0-.07-.06-.11h.1c-.13 0-.16 0-.2-.08h.06s-.1 0-.05-.07h.06l-.1-.06c-.1-.06 0-.08.11-.08h-.1.06c0-.07-.11-.1 0-.14h.05a.23.23 0 0 1 0 .09h.21c-.07 0-.21-.09-.18-.13.07 0 0-.05 0-.07s-.07 0-.13 0v.06s-.08 0 0-.06h-.14c.11 0 .17-.08.24-.09s0-.15-.19-.19 0 0 .06 0 0-.11-.12-.12.09 0 .07 0c.11-.13-.23-.2-.08-.34.05-.15-.06-.32 0-.47s0-.05 0-.08c0-.06.06-.11 0-.19s0-.1 0-.09v-.08-.14V455.95a.14.14 0 0 1 0 .07s0 .08-.07.07 0 .1 0 .16v.06c0 .06.05.05.09.07s-.07 0-.12 0 0 .07.08.05 0 0-.08 0h.06c.06 0-.08 0-.07.06s.02-.3.02-.3zm0 1zm0 .09h.06c-.01 0 0 .02-.02.04zm.59-.19z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M524.21 400.77l-.01-.01-.01.01h.02zM523.42 402.19h.03l-.02-.01-.01.01z"
                        />
                        <path className="cls-59" d="M523.85 465.53zM523.85 465.74z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M523.85 409.56h.02-.02z" />
                        <path className="cls-59" d="M523.5 463.35s-.02-.01 0 0zM523.81 464.11s-.06 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M523.29 406.16h.01-.01z" />
                        <path className="cls-59" d="M523.76 464.05s.01.01 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M523.93 410.25v.01-.01z" />
                        <path className="cls-59" d="M523.93 466.6zM523.94 466.63zM523.9 466.38zM523.89 466.31v.06s.02-.04 0-.06zM524 466v0zM524.07 465.88s.02-.02 0 0zM524.17 464.67h.08-.08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M523.73 408.1l-.06.02.09.01-.03-.03zM524.37 407.96l.01.01-.03-.04.02.03z"
                        />
                        <path className="cls-59" d="M524.47 462.27h-.15s.19.02.15 0zM524.33 461.39c.08 0 .13 0 0-.05s-.02.04 0 .05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M524.5 402.42l.05.02-.04-.04-.01.02z" />
                        <path className="cls-59" d="M522.25 484.66zM522.25 484.6zM522.38 483.78zM522.5 483.27zM522.65 483.19zM522.38 483.78zM522.19 484.49z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M522.42 427.67h-.01l.03.01-.02-.01z" />
                        <path className="cls-59" d="M522.39 484.18zM522.28 484.45zM522.46 483.88zM522.14 479.07z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M522.25 422.53v.01-.01z" />
                        <path className="cls-59" d="M522.83 481.57h-.3a1.5 1.5 0 0 0 .3 0zM522.19 484.49zM522.81 482.66zM522.6 482.93zM522.63 482.52s.02 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M522.64 426.03l-.03.01h.01l.02-.01z" />
                        <path className="cls-59" d="M522 479.52h.06s-.06-.03-.06 0zM522.2 484.49zM521.58 482.51zM521.76 480.58zM521.58 482.42z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M522 479.36h.07c.06 0 0 .05.06.07h.09s.05 0 0 0h-.08c-.08 0 .08 0 .06.06s0 0-.1 0h-.12c-.12 0 0 0 0 .07h.02c.08.05-.23 0-.12.07s.17 0 .11 0h-.1s.14 0 .07.05h.06-.1s.07.06.08.1h-.09c0 .05 0 .1-.12.14h.09-.06H521.83c-.03 0 .18.09.06.12-.05 0 .21 0 .11.05-.06 0 0 .11-.14.15.17 0-.09.06.15.06a.82.82 0 0 0-.25.07h.17-.13.14c.06 0-.1.05-.17.05l.11.05h-.11c.14 0-.14 0 0 0h.11c-.08 0-.09 0-.06.06h-.09v.12a.45.45 0 0 1 .23 0 .77.77 0 0 1-.22 0h-.08c.09 0-.15 0 0 0h-.05c0 .05.05.07.05.1a1.25 1.25 0 0 1 .21 0s-.15.06-.14.09a1.09 1.09 0 0 0 .19 0h-.2c-.09 0 0 0 .12.09h.12-.12c.19.05-.37.11-.11.15h.13-.17c.21 0 0 .07.1.11-.37 0 0 .1-.21.14H521.6a.26.26 0 0 1 .12 0c.11.09-.13.18-.2.27s.46 0 .25.05h-.17c.2.07 0 .14.17.2H521.78h-.14c-.07 0 .15 0 0 0h-.05.12c-.06 0 .06.05 0 .07h.14c-.22 0-.17.05-.07.06h-.16.16c-.25 0 .21.06-.11.08a1.3 1.3 0 0 1 .25.14h-.24c.09 0 .26.07.22.12a.49.49 0 0 1-.12 0c.08 0 0 .08.1.12h-.05.06a2.51 2.51 0 0 1 .34 0h-.38.15-.11.13-.06s.22.06.15.1-.06 0-.2 0h.15-.06.14-.08.06-.12c.12 0 0 0 .16.06H522h.1s.06.06 0 .08 0 0-.14 0 .16.08.14.12c.17 0-.08 0 0 0h-.1l.1.1v.06c0 .06 0 0 .09 0-.2.05.11.1 0 .15h.07-.11c-.08 0 .1 0 0 0h-.07c-.07 0 .1 0 .05.05h-.05c.12 0 0 0 .1.07h-.09v.1c0 .04.06 0 .08.06V483.38v-.05h-.07.08v-.05h.06c.06 0 0 0 0-.05v-.06c0-.06 0 0 .08-.06-.08 0-.06 0-.07-.05h.14s-.07-.05 0-.07-.17 0-.22 0h.32-.08H522.49s0-.05-.09 0c-.08 0 0-.07 0-.11s0-.05-.08-.06.06 0 .1 0-.06 0 0-.05.06 0 0 0 .09 0 0-.05h.09-.07.11c.16-.05-.23-.08 0-.11h-.16a1.94 1.94 0 0 1 .2 0c.07 0-.18 0-.13-.05a.52.52 0 0 1-.21 0 .59.59 0 0 1 .23 0h.12a.16.16 0 0 0-.1 0c.07 0 0 0 .06-.07h-.08c.06 0-.09 0-.1-.05s.17 0 .11 0a.47.47 0 0 1 .17 0c-.09 0 .06-.05.09-.06h-.1a.12.12 0 0 1 .07 0 1.07 1.07 0 0 1-.25 0H522.7c.02 0 0 0 0 0h-.14.13-.19c.06 0 0 0 0 0h-.09.07c-.14 0 .14 0 .05-.06h.18c-.09 0 .12 0 0-.05a.4.4 0 0 1-.19 0h.07-.15.05-.15c.16 0-.09 0 0 0h.26c.12 0-.13-.05-.06-.09-.1 0 0 0 0 0h.18-.17.12s-.26 0-.23-.07a1.54 1.54 0 0 1 .24 0h-.05c-.05 0-.12 0 0 0h-.13a.58.58 0 0 0-.16 0c.29 0 0-.09.23-.11 0 0-.06-.05-.06-.07h-.17.14c.32 0 0 0 .15-.06.11 0-.12 0-.09-.07a.6.6 0 0 1-.27-.07h.2a2 2 0 0 1-.24 0 1.32 1.32 0 0 1 .26 0c.18 0 0 0 0 0h.07s-.22 0-.2-.06h-.06c-.19 0 .11 0 0 0h.2a.88.88 0 0 1-.23-.07l.31.06-.11-.05c-.11-.05.07 0 0 0s-.23 0-.23-.06c.38 0 .1-.07.39-.09-.14 0 .06-.08 0-.13h-.31.53-.26c-.16 0 .26 0 .09-.07h.1c-.06 0 0-.06-.24-.08h.13c0-.05-.26-.1-.11-.14h.07-.06H522.56h.08c.09-.05-.2-.07-.25-.11.21 0 .27 0 .3-.05s-.18-.08-.26-.13c.22 0 .08-.1.2-.15a.51.51 0 0 1-.18 0s-.14 0 0 0c.17 0 .12 0 .12-.05h-.23c.33-.05-.13-.12.16-.15h-.12.12v-.09h.08s-.33 0-.34-.05h.17s.12-.08 0-.12h.08s.09-.07-.12-.06c.14 0 0 0-.06-.06h.1a.71.71 0 0 1-.2 0s-.09 0 0 0H522.18h.06s-.11-.05 0-.08v.06h.21c-.07 0-.21 0-.18-.06h-.12s-.08 0 0 0h-.13a2 2 0 0 1 .23-.05c-.05 0 0-.07-.18-.09s0 0 .05 0 0-.06-.12-.06h.07c.11-.06-.23-.1-.08-.16 0-.07-.07-.16 0-.23s.06-.06 0-.1 0-.05 0 0 0 0-.07 0 0 .05 0 .08 0 0 .09 0h-.12H521.88a.05.05 0 0 1 .12.03zm0 .52zm0 0a.11.11 0 0 1 .06 0zm.59-.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M522.5 423.48h-.03.03zM521.71 424.19h.03-.03z"
                        />
                        <path className="cls-59" d="M522.13 484zM522.14 484.13z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M522.13 427.87l.02.01-.02-.01z" />
                        <path className="cls-59" d="M521.79 482.94zM522.09 483.32z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M521.58 426.18h.01-.01z" />
                        <path className="cls-59" d="M522 483.29s.06.01 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M522.22 428.22v.01-.01z" />
                        <path className="cls-59" d="M522.23 484.58zM522.19 484.45zM522.18 484.42s.02.01 0 0zM522.32 484.29s-.01.03 0 0zM522.36 484.2s.01-.01 0 0zM522.46 483.6h.08-.08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M522.02 427.14l-.06.01.08.01-.02-.02zM522.66 427.08h.01l-.03-.02.02.02z"
                        />
                        <path className="cls-59" d="M522.76 482.4h-.15s.19.01.15 0zM522.62 482c.08 0 .13 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M522.79 424.31h.05l-.04-.01-.01.01z" />
                        <path className="cls-59" d="M545.07 478.73zM545.07 478.66zM545.2 477.57zM545.32 476.9zM545.47 476.78s.01 0 0 0zM545.2 477.57s.01-.01 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M545.01 422.17l.01.01v-.01h-.01zM545.24 421.53l.03.01-.03-.01z"
                        />
                        <path className="cls-59" d="M545.21 478.09h-.07zM545.28 477.7z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M545.07 414.74h.01-.01z" />
                        <path className="cls-59" d="M545.65 474.64h-.3a1 1 0 0 0 .3 0zM545 478.5zM545.63 476.09zM545.42 476.45zM545.45 475.9s.03 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M545.46 419.37h-.03l.01.01.02-.01z" />
                        <path className="cls-59" d="M544.81 471.93h.06s-.05-.03-.06 0zM545 478.51zM544.41 475.89zM544.58 473.33zM544.4 475.77h.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M544.8 471.72h0c-.04 0 .07 0 .07.05v.1h.13-.08c-.08 0 .08.06.06.08s0-.05-.1 0h-.12c-.12 0 0 .05 0 .09h.11c.08.06-.22 0-.12.09s.18 0 .11 0h-.1s.15 0 .07.07 0 0-.05 0h.06-.1s.07.09.08.14a.27.27 0 0 0-.09 0c0 .06 0 .13-.12.19h.09-.06.1-.09c.08 0 .18.12.06.16s.21 0 .11.07c0 .07 0 .15-.14.2.17 0-.08.07.15.08a1.23 1.23 0 0 0-.25.08h.17-.13.14-.16.13c.06 0-.1.07-.17.07l.11.06h-.11c.14 0-.14 0 0 0h.11c-.08 0-.09 0-.05.07h-.1v.16a.44.44 0 0 1 .23 0h-.15.17a.54.54 0 0 1-.22 0h-.13c.1 0-.15 0 0 .06v.12a1 1 0 0 1 .21 0s-.15.07-.14.11.11 0 .19 0h-.2c-.09 0 0 .06.12.12a.25.25 0 0 1 .12 0h-.12c.19.07-.37.15-.11.21l.13.05h-.17c.21.06 0 .1.11.15-.38 0 0 .14-.22.19h.15c.1.12-.13.24-.21.35s.46 0 .25.08h-.17c.2.08 0 .17.17.26h-.09c-.11 0 0 .07.1.07h-.14c-.06 0 .15 0 0 .05.06 0 0 .05.12 0-.06 0 .07.06 0 .08.15 0-.07.06.14.06-.22 0-.17.06-.07.08h0c-.25 0 .21.08-.11.1a.78.78 0 0 1 .25.2c-.2 0 0-.07-.24-.07.09.06.27.09.22.15a.49.49 0 0 1-.12 0c.09.05 0 .11.1.16s0 0 .06 0a1.34 1.34 0 0 1 .33 0c-.25 0-.06.05-.38 0a.29.29 0 0 0 .12 0h-.12c.06 0 .15 0 .15.06h-.11c.08 0 .16 0 .13.06s.21.08.14.13-.06 0-.2 0H544.93s.1.05.06.07h-.06v.05h.19-.08.05-.18c.12 0 0 .06.16.07h-.12.1s.06.08 0 .12 0 0-.14 0 .17.11.14.16c.17 0-.08 0 0 .07h-.07s0 .08.1.13 0 .06 0 .08 0 0 .09 0c-.2.07.11.14 0 .2v.05h.07c.07 0 0 0 0 0h-.1c-.08 0 .1 0 0 0s.05 0 0 0h-.07c-.07 0 .1 0 0 .06-.06 0 0 0 0 0 .12 0 0 .06.1.09s0 0-.09 0 0 0 0 .06v.13c0 .05 0 .05.07.09v0c0-.05 0 0-.07-.05h.09v-.07c0-.01 0 0 0 0v-.06c0-.06 0 0 0 0v-.06-.08c0-.08 0-.06.08-.09-.08 0-.06 0-.07-.06h.14s-.07-.05 0-.09-.17 0-.22 0h.25a.19.19 0 0 1 .08 0 .1.1 0 0 1-.08 0h.08s0-.07-.09-.05c-.08-.05.06-.1 0-.14s0-.07-.08-.09.06 0 .1 0-.06 0 0-.06.08 0 0-.06h.09-.06v-.05h.12c.15-.05-.24-.1 0-.14h-.16c-.1 0 .2-.05.2-.06s-.18 0-.13-.07a.35.35 0 0 1-.2 0 .4.4 0 0 1 .22 0 .1.1 0 0 0 .08 0s0-.05.12 0a.07.07 0 0 0-.09 0c.07 0 0-.06.05-.09h-.08c.07-.06-.08 0-.1-.06s.17 0 .11 0a.48.48 0 0 1 .17 0c-.09 0 .07 0 .09-.07h-.1.06a2.18 2.18 0 0 1-.25 0l.08-.05h.15c.02 0 0 0 0 0 .12 0-.15 0-.14-.06s.14 0 .13 0h-.19c-.06 0 0 0 0 0H545.51c-.14 0 .14-.05 0-.07a1.54 1.54 0 0 1 .19 0c-.1 0 .11 0 0-.06a.31.31 0 0 1-.19 0l.07.06h-.15s.07 0 0 0a.26.26 0 0 0-.15 0c.16 0-.09 0 0-.07h.26c.13 0-.13-.07-.06-.12-.11 0 0 0-.06-.05h.18-.17.12c.05 0-.26 0-.23-.09s.17 0 .24 0-.12 0 0-.05-.14 0-.13 0a.58.58 0 0 0-.16 0c.29 0 0-.11.23-.15 0 0-.06-.06-.06-.09s-.27 0-.17-.07.08 0 .14 0c.32 0 0-.05.15-.07.1 0-.12-.05-.1-.08a.56.56 0 0 1-.26-.1h.19-.24a1.35 1.35 0 0 1 .27 0c.18 0 0 0 0-.05h.08s-.22 0-.21-.08h-.06c-.19 0 .11 0 0-.05h.19a1.45 1.45 0 0 1-.22-.09 2.28 2.28 0 0 1 .3.07l-.11-.06c-.11-.06.07 0 0 0s-.23-.05-.23-.08c.38 0 .1-.08.39-.11-.14-.06.06-.11 0-.18h-.31l.18-.05h.35-.26c-.16-.05.26-.05.1-.09h.09c-.06 0 0-.09-.24-.11h.14c0-.06-.26-.14-.12-.18h.07-.06.08-.09.08c.09-.06-.2-.09-.25-.14.21 0 .27 0 .31-.07 0-.06-.18-.11-.26-.17.22 0 .08-.13.2-.2a.51.51 0 0 1-.18 0s-.14 0 0 0c.17 0 .12 0 .13-.07h-.24c.33-.06-.13-.16.16-.19-.06 0-.06 0-.12-.05h.12v-.11h.08s-.33 0-.34-.07h.17c0-.05.12-.1 0-.15h.08s.09-.09-.12-.08c.14 0 0-.06-.06-.08h.1c-.13 0-.16 0-.2-.05h.06s-.1 0-.05-.05H545.11c-.1 0 0-.05.11-.05h-.1.06s-.11-.06 0-.09h.05v.06a.72.72 0 0 1 .21 0c-.07 0-.21-.06-.17-.09s-.07 0-.13 0-.08 0 0 0H545a2.07 2.07 0 0 1 .24-.06c-.06 0 0-.1-.19-.13s0 0 .06 0 0-.07-.12-.07h.07c.11-.08-.23-.13-.08-.22.05-.11-.06-.22 0-.32s0 0 0-.05.06-.08 0-.13 0-.07 0-.06v-.1.05c0 .05 0 0 0 0s0 .06-.07.05 0 .07 0 .1c.05 0 .05 0 .09.05s-.07 0-.12 0h.08-.08H544.87a.05.05 0 0 1-.07.2zm0 .69zm0 .06h.06c-.01 0 0-.01-.02 0zm.59-.13z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M545.32 415.99l-.01-.01-.01.01h.02zM544.53 416.93h.03l-.02-.01-.01.01z"
                        />
                        <path className="cls-59" d="M545 477.9zM545 478z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M544.96 421.8l.02.01v-.01h-.02z" />
                        <path className="cls-59" d="M544.61 476.46zM544.92 477s-.06 0 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M544.4 419.56h.01v-.01l-.01.01z" />
                        <path className="cls-59" d="M544.87 476.92s.01.01 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M545.04 422.26v.01-.01z" />
                        <path className="cls-59" d="M545.05 478.62zM545 478.46zM545 478.42s0 .01 0 0zM545.14 478.24s-.01.05 0 0zM545.18 478.13zM545.28 477.33z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M544.84 420.84l-.06.01.09.01-.03-.02zM545.48 420.75h.01l-.02-.02.01.02z"
                        />
                        <path className="cls-59" d="M545.58 475.74h-.15s.19.02.15 0zM545.44 475.16c.08 0 .13 0 0 0s-.02-.01 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M545.62 417.08l.04.01-.04-.02v.01z" />
                        <path className="cls-59" d="M504.34 410zM503.29 410h-.28.42a.87.87 0 0 1 .25 0h-.41.02zM488.05 409.85zM478.6 409.73h.11s-.12-.01-.11 0zM477 409.58h.1a.19.19 0 0 0-.1 0zM488.05 409.85h-.26s.13-.01.26 0zM501.18 410z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M492.21 353.47h.08l.06-.03-.14.03z" />
                        <path className="cls-59" d="M495.4 409.84c-.07 0-.09.05-.12.07a.35.35 0 0 1 .16 0zM500.47 410zM489.92 409.77s-.02 0 0 0zM400.57 410.09s-.02 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M396.87 353.64H396.93h-.06z" />
                        <path className="cls-59" d="M474 409.4c.13-.01.09 0 0 0zM447 409.4c.3.13-.5.16 0 .3-.12-.05.34-.22 0-.3zM501.1 410zM467.24 409.43a.18.18 0 0 0 .07.05s-.02-.03-.07-.05zM472.31 409.63zM464.61 409.6a.34.34 0 0 0-.18 0 .25.25 0 0 1 .18 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M461.88 353.25l.05.03.08-.01-.13-.02z" />
                        <path className="cls-59" d="M408.89 410.25l-.12-.06s-.36.05.12.06zM501.18 410s.02 0 0 0zM464.5 410.65h-.43zM428.53 410.47h-.1a.16.16 0 0 0 .1 0zM462.78 410.66a.77.77 0 0 0-.25-.1zM408.76 410.19z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M405.9 410.26c.41 0 .19-.06.28-.09.5 0 .23.05.4.09s.55-.07.78-.07c0 0 .06 0 0 0 .32-.06 1 0 1.34-.06h.05s-.07-.09-.05-.12c.18 0 .34-.05.41 0a.59.59 0 0 0-.18 0h.2c.17.08-.27 0-.27.08a9 9 0 0 1 1.12-.05c.06.08-.68 0-.3.09h-.45c.35.12-.27 0 .05.12h1.25c.13-.05 0-.07.09-.12.84-.08.66.23 1.28.12a.87.87 0 0 1 .66-.11l-.15.11c.57 0 .33-.15.93-.07h-.37c.39.09.28-.06.58 0l.06.1c.61 0 1.28-.07 2-.09 0 0-.16.06 0 .1a17.76 17.76 0 0 1 2.64.12l.32-.1c.07 0 .13.05 0 .07.33 0 0-.07.18-.11s.24.06.12.09a8.58 8.58 0 0 1 2.21-.05h-.12c.47.05.53-.22 1-.11h-.09a19.58 19.58 0 0 1 2.89.15c.15-.17 1 .08 1.06-.16a6.61 6.61 0 0 0 1.22.26c.22 0 .33-.15.59-.18v.13l.36-.13.2.15h.25c-.1 0-.22-.06-.2-.1a1.63 1.63 0 0 1 1 .17l.93-.1c0 .05-.17.07-.3.1.5-.13.09.14.55 0-.06 0 0-.08 0-.11a3.27 3.27 0 0 0 1.12.06l-.07.09h2.22c-.28 0-.21-.22 0-.23l.09.15c.15-.1-.23-.06.07-.17s.19.17 0 .22l.35-.05s-.06.06-.08.12c.15-.09.61.16.81 0v.05c.78 0 1.12 0 1.75-.05 0-.13.26-.1.45-.21a11.41 11.41 0 0 0 1.53.14c.39-.06.11-.11.29-.19 0 .12.58.11.3.2a14.19 14.19 0 0 0 1.69-.12c-.09-.05-.19-.07-.14-.11s.35.05.33.11c.95-.18 2.19.37 2.94.11l.78-.14c.36 0-.21.1.05.17.85-.21 1.34 0 2-.1.54.37 1.91 0 2.64.21v-.09c.18-.08.22.06.36.08 0-.07-.2-.08-.09-.13a45.38 45.38 0 0 1 4.92.2c.59 0 .34-.45 1.09-.24l-.21.16c1.2-.2 2.46 0 3.64-.17-.08 0-.08.09-.19.09.25.12.92 0 .92-.09.19 0 0 .08.16.13s.62-.15.76 0-.07 0-.12.05c.16-.06.76 0 .6-.12.45.06.85-.06 1.2 0 .23-.14.76.07.83-.14 0 .22.78.17 1.06.07-.1.07.24.07.13.16.32 0 .61 0 .56-.16.59.25 1.18-.21 1.51.11.95-.11 1.83-.19 2.68-.24 0 .2-.94 0-.91.24a10.6 10.6 0 0 1 2.08-.23c.21 0-.12.09-.19.13.81-.09 1.56 0 2.28-.11 0 0-.08 0-.15.06.14 0 .33 0 .31-.07h-.13c-.23-.13.56-.27.58-.34-.24.25.71.06.33.38.1 0 .21-.06.19-.12.14 0 .18.05 0 .12.51-.05.33-.14.79-.14 0 0-.09.05-.14.1a1.88 1.88 0 0 1 .85-.13s0 .06-.09.06a11.26 11.26 0 0 1 1.87-.14c-.22.17.25.05.29.2h.39l-.16-.07a6.46 6.46 0 0 1 1-.06l-.26.06h.65l-.37-.05c.35-.08 0-.18.43-.15-.1 0 .34 0 .52.09a1.39 1.39 0 0 1 .6-.06c.07 0-.05.15 0 .18s.81 0 1-.16a.08.08 0 0 0-.05.12l.14-.09c.16 0 .18 0 .16.09.48 0-.15-.16.42-.09h-.12c.57 0 1.11-.06 1.63 0 .16.13-.46 0-.28.14.76 0 1.57-.16 2.31-.14h-.14c.1-.17.55.08.92 0-.09 0-.12.09-.1.07a16.08 16.08 0 0 0 1.79-.1h-.09 1.1c.1 0 .28 0 .17-.09 1 .2 1.88-.11 2.76 0h-.17.75c-.06-.05-.1 0-.26-.07a1.63 1.63 0 0 1 .49-.06c-.33 0 0 .08.15.11v-.05c.39.09.07-.1.6 0h.6c.21 0-.21 0-.22.08a4.3 4.3 0 0 1 .86-.06h-.44a2.49 2.49 0 0 0 .56.06h.51-.13a9 9 0 0 1 1.28-.11c-.49.08-.08 0-.12.09h1.17c.48-.05 1.13 0 1.82 0s.71-.06 1.27-.07h-.16.82.54-.23 1.46-.2c.11 0 .05 0 0 0a2 2 0 0 1-.4 0h.2-1.2.17-.41c-.09 0-.15 0 0 0h-.78.12-1c-.7 0-.07 0-.59.08l-.35-.1h-.37a6.44 6.44 0 0 1-1-.05c-.13 0 .33 0 0 .05-.1-.08-.43 0-.74 0 .09-.05.39 0 .08-.06a4.36 4.36 0 0 1-.88 0 5.66 5.66 0 0 1-1 0s-.84-.05-1.26-.08a2.66 2.66 0 0 1-.82.08c0-.05.07-.07.24-.09h-.29a1.15 1.15 0 0 1-.36.05l.08-.06a10.7 10.7 0 0 1-1.29 0c0 .06.4.18-.13.22 0 0 0-.09.1-.11a.71.71 0 0 1-.26 0l.21-.05c-.23 0-.12.05-.3 0 0-.05-.13 0-.11-.08a1.62 1.62 0 0 0 .23 0 2 2 0 0 1-.54-.09s0 .07-.15.08c-.39 0-.13-.06-.36-.09s-.34 0-.35.07a.26.26 0 0 1-.18-.06c-.2 0-.95 0-.72.09-.66.08-1.38-.05-2 0a9.31 9.31 0 0 0-1.16.08c-.12 0-.27-.06-.22-.1a2.4 2.4 0 0 1-.77 0c.3-.06-.11-.05.31 0a2.27 2.27 0 0 0-.9 0c.14-.08-.29-.11-.48-.09l.27.07a5.32 5.32 0 0 1-.57 0l.1-.11c-.8-.16-1.44.23-2.05 0-.21.08.43.06.25.16a7 7 0 0 1-.87-.2c-.5-.07-.47.18-1 .13.07 0 .14.16-.26.21s-.45-.2-.22-.23.13 0 .13 0 .27 0 .13-.09v.05c-.18-.05-.69-.05-.57-.13-.28 0-.12.08.09.1-.47-.07-.74 0-1.22-.05.07 0 .15.08.07.08-.71-.06-.31.09-.8.11-.27-.08.1-.18-.38-.12-.3-.05-.07-.13 0-.17a3.1 3.1 0 0 1-1.08-.09h.23a2.36 2.36 0 0 1-.37 0l.14.1c-.14 0-.25 0-.25-.07s.11.17-.17.26c-.19-.06-.56.05-.62-.09.57.05-.07-.13.42-.15a1 1 0 0 1-.35 0h.06c-.55-.12-.25.15-.82.14.07-.07-.13-.14-.22-.12.23 0 .11.12-.1.18-.37-.06-.4 0-.59 0h.22c-.08.08-.26.07-.51.09 0-.06.23 0 .14-.07-.29.14-.64-.14-1-.05-.18-.05 0-.15-.17-.18-.44.1-.48-.12-.95 0 .14.1.16.08-.16.18l.76-.07-.49.15c.23 0 .48-.06.62-.05-.23.09-.21.06-.1.15-.31-.16-.62.09-1 0v-.26c-.55-.12-1 .13-1.69.06l.23.05c-.09.11-.44 0-.67.05 0-.09-.12-.12-.22-.18s-.52 0-.58.18l-.32-.13c-.57 0-.65.26-1.2.23.16-.1-.09-.16.28-.24-.18 0-.35 0-.35.05s-.51.12-.68 0-.11.14-.31.13-.32.06-.14.17c-.57-.3-1.59 0-2.08-.24-.4 0-.89.06-1.25.07 0 0 0-.05.07 0-.51-.09-.31.27-.88.17-.3-.15.3-.08.12-.14-.08-.32-.69 0-1.08-.14h.09c-.29-.11-.71.12-1.2.09a5.21 5.21 0 0 1-1.42.26c.15-.13.21-.07.12-.2s.07.21-.35.24c-.13-.06-.43-.13-.47-.26h.39c-.2-.18-.51 0-.71 0v-.08c-.59 0-.6.22-1.25.2l.07.06c-.35.2-.29-.11-.65 0l-.1-.2a11.53 11.53 0 0 1-1.23.23 5.07 5.07 0 0 1 1-.31 2.44 2.44 0 0 0-.9.11.63.63 0 0 1 .3 0 2.13 2.13 0 0 1-1.11.23c.08-.38-1.19-.09-1.53-.39a18.4 18.4 0 0 1-2.55 0c.34.3-.27 0-.22.32H447l-.67-.18c-.15-.09.21-.07.19-.14-.48 0-.2-.12-.52-.2.07.1-.17.15-.44.11l.39.14c-.68.16-.59-.25-1.26-.09l.21-.1c-.35.06-1.28 0-1.63.25-.06 0-.14-.12 0-.14a20.35 20.35 0 0 1-2.49.11l.06-.07c-.16 0-.27.14-.47.06 0 0 .07-.07 0-.07a1.47 1.47 0 0 1-.61.08l.17-.08a7.55 7.55 0 0 0-1.92.26c0-.21-.64-.28-1-.31a19.62 19.62 0 0 0-2.48.26 18.4 18.4 0 0 0-2.71-.19c.13 0 0 .15-.18.17s-.57.14-.53 0h.07c-.16-.17-.58-.12-.91-.12l-.05.23c-.86-.33-2.25.13-2.72-.16-.21.06-.47.06-.67.12v-.12a13.65 13.65 0 0 0-1.57 0l.14-.09c-.4 0-.51.34-.88.35l-.11-.17a9.83 9.83 0 0 0-2.1 0s0-.07.15-.08c-.33 0-1.27-.09-1.15.12 0-.14-.73 0-1.1.06l.05-.1a1.73 1.73 0 0 1-.77.2c-.1 0-.09-.08 0 0-.35-.05-.28.09-.7 0l.16-.06a.92.92 0 0 0-.54.1 1.32 1.32 0 0 1-.74-.1.63.63 0 0 1-.46.09s.05-.05.09-.06c-.6-.05-.9.12-1.31 0l-.07-.05h.83c0-.08-.39-.09-.08-.21a4.72 4.72 0 0 1-1.22.18h-.05a.62.62 0 0 0-.24 0 1.72 1.72 0 0 0-.32 0c0-.07-.44 0-.64 0 0 .08-.23.07 0 .14h.8a1.11 1.11 0 0 1-.53 0l-.27.13c-.26-.11-.77-.17-.84-.24a9.22 9.22 0 0 0-1.77.2.38.38 0 0 1-.25-.06h.26a4.86 4.86 0 0 0-1.07.12c-.43 0 .23-.09-.35-.07h.08c-1.14-.12-1.86.22-3.13.07h.15c-1.45-.05-3 .07-4.41 0a4.16 4.16 0 0 0-.7 0h-.51c-.6 0-1-.05-1.8 0H396.89 398.88a1.67 1.67 0 0 0 .4 0h-.12.7a6.78 6.78 0 0 1 .72 0h.59c-.37.05.76 0 .67.08h1.47-.12a4.57 4.57 0 0 1 .52.05 3.32 3.32 0 0 1 .69-.1c.34.06-.2.07-.09.12s.58 0 .46-.08a1.65 1.65 0 0 1 .36.08c0-.08.23 0 .45-.05.37 0 .09.08.5.06.18-.08-.18-.06-.18-.06zm9.68-.05zm.81 0H416s0-.06.08-.06.19.04.31.07zm-1.72-.6h.19-.24a.1.1 0 0 1 .05.01zM414.44 409.73h-.05H414.51zM488.16 409.86z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M427.62 354.18v-.03l-.07.03h.07z" />
                        <path className="cls-59" d="M492.64 410.1h.06zM494.58 410.1zM496.06 410.1zM472.41 410.45h-.06c-.13.03-.04.02.06 0zM479.45 410.14l-.23.05c.13.01.23.01.23-.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M464.55 354.31h-.05.05z" />
                        <path className="cls-59" d="M478.9 410.19a.86.86 0 0 0 .32 0 1.14 1.14 0 0 0-.32 0zM502.51 410zM502.59 410zM502.84 410zM500.54 410zM499.94 410.05h.56c-.07.02-.42-.05-.56 0zM497.45 409.91h.5c-.09 0-.21 0 0 0-.61-.07.15.01-.5 0zM495.89 409.87c.27 0 0 0 0 0-.16-.02-.2-.02 0 0zM484.65 409.77v-.08c-.18.01.03.03 0 .08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M482.5 353.88l.21.05.09-.08-.3.03zM481.24 353.23l.09-.01-.35.03.26-.02z"
                        />
                        <path className="cls-59" d="M462.36 409.47l.07.16c.14-.03.17-.2-.07-.16zM454.22 409.62a.49.49 0 0 0-.46-.06 3.63 3.63 0 0 0 .46.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M429.78 353.1l.17-.05-.31.04.14.01z" />
                        <path className="cls-59" d="M525.45 421.55zM524.55 421.55h-.23.36-.14.01zM511.61 421.42zM503.59 421.3h.09s-.1-.01-.09 0zM502.22 421.15h.08a.12.12 0 0 0-.08 0zM511.61 421.42h-.21s.11-.01.21 0zM522.77 421.61z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M515.15 365.05h.06l.06-.03-.12.03z" />
                        <path className="cls-59" d="M517.86 421.41c-.06 0-.08 0-.11.07a.29.29 0 0 1 .14 0zM522.16 421.53zM513.2 421.35z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M434.18 365.21h.05-.05z" />
                        <path className="cls-59" d="M499.72 421c.07 0 .04 0 0 0zM476.71 421c.26.13-.42.16 0 .3-.07-.08.29-.25 0-.3zM522.7 421.61zM476.68 421.27zM493.94 421a.15.15 0 0 0 .06.05s0-.05-.06-.05zM498.24 421.2zM491.71 421.17a.28.28 0 0 0-.16 0 .13.13 0 0 1 .16 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M489.38 364.82l.05.03.07-.01-.12-.02z" />
                        <path className="cls-59" d="M444.38 421.82a.29.29 0 0 1-.1-.06s-.28.05.1.06zM522.77 421.6s.02 0 0 0zM491.62 422.22h-.37zM461.06 422H461a.11.11 0 0 0 .06 0zM490.15 422.23a.48.48 0 0 0-.21-.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M441.84 421.83c.36 0 .17-.06.24-.09.42 0 .2.05.34.09s.46-.07.66-.07c0 0 .05 0 0 0 .28-.06.82 0 1.14-.06a.1.1 0 0 1 0-.12c.15 0 .29-.05.35 0a.34.34 0 0 0-.15 0h.16c.15.08-.22 0-.22.08a8.25 8.25 0 0 1 .94-.05c.06.08-.57 0-.24.09h-.39c.3.12-.23 0 0 .12h1.06c.12-.05 0-.07.08-.12.71-.08.56.23 1.09.12a.64.64 0 0 1 .56-.1l-.13.1c.49 0 .28-.15.79-.07h-.31c.33.1.23-.05.49-.05v.1c.52 0 1.09-.07 1.66-.09 0 0-.13.07 0 .1a12.84 12.84 0 0 1 2.24.12l.27-.1c.06 0 .11.05.05.07.27 0 0-.07.14-.11s.2.07.11.09a6.16 6.16 0 0 1 1.87-.05h-.1c.4.05.45-.22.81-.11h-.07a13.37 13.37 0 0 1 2.46.14c.12-.17.84.08.9-.16a4.36 4.36 0 0 0 1 .26c.19 0 .28-.15.51-.18v.13l.31-.13.16.16h.22c-.09 0-.18-.06-.17-.09a1.19 1.19 0 0 1 .82.16l.79-.1c0 .05-.15.07-.26.1.42-.13.08.15.46 0-.05 0 0-.08 0-.11a2.36 2.36 0 0 0 .95.06l-.06.1h1.89c-.24-.05-.18-.22 0-.23l.07.15c.13-.1-.2-.06.06-.17s.16.17 0 .22l.3-.05s0 .06-.07.12.51.16.69 0c.65 0 .95 0 1.48-.05 0-.13.22-.1.38-.21a8.3 8.3 0 0 0 1.3.15c.33-.07.1-.12.25-.2 0 .13.49.12.25.2a9 9 0 0 0 1.44-.12c-.08-.05-.17-.07-.12-.11s.3.05.28.11c.81-.18 1.86.38 2.5.12l.66-.14c.31 0-.18.1 0 .18.72-.21 1.14 0 1.73-.11.45.38 1.62 0 2.24.22v-.09c.16-.09.19.05.31.07s-.17-.08-.07-.13a30.9 30.9 0 0 1 4.17.21c.51 0 .29-.46.93-.25l-.18.16c1-.2 2.09 0 3.09-.17-.06 0-.06.09-.16.09.21.12.78 0 .78-.09.16 0 0 .08.14.13s.53-.15.64 0-.06 0-.1 0c.14-.05.65 0 .51-.12.38.06.72-.06 1 0 .2-.15.65.06.71-.15 0 .22.66.17.89.07-.08.07.21.07.12.16.27 0 .52-.05.47-.16.5.25 1-.2 1.28.12.81-.12 1.55-.2 2.28-.25 0 .2-.8 0-.77.24a7.64 7.64 0 0 1 1.76-.22c.18 0-.1.08-.16.12.69-.09 1.33 0 1.94-.11 0 0-.07 0-.13.06.12 0 .28 0 .27-.07h-.12c-.19-.13.48-.27.5-.34-.2.26.6.06.28.38.08 0 .18-.06.16-.12s.15.05 0 .12c.44 0 .28-.14.67-.14 0 0-.08.06-.12.11a1.31 1.31 0 0 1 .73-.14s0 .06-.08.06a9 9 0 0 1 1.59-.14c-.19.17.21.05.24.2l.34-.05-.14-.07a6 6 0 0 1 .81-.06l-.22.06h.55l-.31-.05c.29-.08 0-.18.35-.14a2 2 0 0 1 .45.08 1 1 0 0 1 .51-.06c.06.05 0 .15 0 .18s.69 0 .87-.15c-.06 0-.06.1 0 .11l.12-.09c.13 0 .15 0 .13.1.41 0-.13-.17.35-.1h-.1c.49 0 .94-.06 1.39 0 .13.13-.39 0-.24.14.65 0 1.34-.16 2-.13h-.12c.09-.16.47.08.78 0-.07 0-.1.09-.08.08a12.12 12.12 0 0 0 1.53-.11h-.09.94c.08 0 .24 0 .14-.08.84.19 1.6-.12 2.35 0h-.15.64c-.05-.05-.09 0-.22-.07a1.45 1.45 0 0 1 .42-.06c-.29 0 0 .08.12.11s0 0 0-.05c.34.09.06-.1.51 0a2.78 2.78 0 0 1 .51 0c.07.05-.18 0-.2.07a3.21 3.21 0 0 1 .74-.06h-.37a1.71 1.71 0 0 0 .47.05h.43-.11a6.45 6.45 0 0 1 1.09-.11c-.42.08-.07.05-.11.1h.24c.2-.05.34 0 .62 0h.18c.26 0-.07 0 0 0h1.55c.55 0 .6-.06 1.07-.07h-.13 1.15-.19 1.23-.07c.1 0 0 0 0 0a1.48 1.48 0 0 1-.34 0h.17-1 .14-.96.11-.85c-.59 0-.06 0-.5.08l-.3-.09h-.22c-.23 0 0 0-.09.05a5.49 5.49 0 0 1-.88-.06c-.1 0 .28 0 0 .05-.09-.08-.36 0-.63 0 .08 0 .33 0 .07-.06a3.16 3.16 0 0 1-.75 0 4 4 0 0 1-.87 0s-.72 0-1.07-.08c-.07.08-.44.06-.7.08 0-.05.06-.07.2-.09h-.25a1.25 1.25 0 0 1-.3 0l.07-.06a7.8 7.8 0 0 1-1.1 0c0 .07.34.18-.11.22 0 0 0-.09.08-.11a.65.65 0 0 1-.21 0l.18-.06c-.2 0-.1.05-.26 0 0-.05-.12 0-.09-.08a.57.57 0 0 0 .19 0 1.53 1.53 0 0 1-.46-.08s0 .06-.12.07c-.34 0-.12-.06-.31-.09s-.29 0-.3.07-.11 0-.15-.06-.8 0-.61.09c-.57.08-1.17-.05-1.73 0a8.25 8.25 0 0 0-1 .08c-.1 0-.24-.06-.19-.09a2.06 2.06 0 0 1-.66 0c.26-.06-.08-.05.27 0a1.67 1.67 0 0 0-.77 0c.13-.08-.25-.11-.4-.08l.23.06a3.92 3.92 0 0 1-.49 0l.08-.11c-.67-.15-1.22.23-1.73 0-.18.09.36.07.2.16a4 4 0 0 1-.73-.2c-.43-.07-.4.18-.85.13.06.05.11.17-.22.21s-.38-.2-.19-.23.11 0 .11 0 .23 0 .11-.09v.05c-.15-.05-.58-.05-.48-.12-.24 0-.1.07.07.1-.4-.07-.62 0-1-.06.07 0 .13.08.06.08-.6-.06-.26.09-.67.11-.23-.08.08-.18-.33-.12-.25-.05-.05-.13.05-.17a2.27 2.27 0 0 1-.92-.08h.2a1.83 1.83 0 0 1-.32 0l.12.1c-.12 0-.22 0-.22-.06s.1.16-.14.25-.47.05-.53-.08c.49 0-.05-.14.36-.15a1 1 0 0 1-.29 0h.05c-.47-.12-.22.15-.7.15.06-.08-.11-.15-.19-.13.19 0 .09.12-.09.18s-.33 0-.5 0h.19c-.06.08-.22.07-.43.09 0-.06.19 0 .12-.06-.24.13-.55-.15-.88-.06-.16-.05 0-.15-.15-.18-.38.1-.41-.11-.8 0 .11.1.13.08-.15.18l.65-.07-.41.15c.19 0 .41-.06.53 0-.2.08-.18.05-.09.14-.27-.16-.53.09-.84 0v-.27c-.46-.12-.82.13-1.43.06l.2.05c-.08.11-.38 0-.57.06 0-.1-.1-.13-.19-.19s-.44 0-.49.18l-.27-.12c-.49-.06-.56.26-1 .22.14-.1-.07-.16.24-.23h-.3c-.01 0-.43.12-.57 0s-.09.13-.27.13v-.05s-.28.06-.13.17c-.48-.3-1.34 0-1.76-.24-.34 0-.75.06-1.06.07 0 0 0-.05.06 0-.43-.09-.27.28-.75.18-.25-.16.26-.09.1-.15-.07-.32-.59 0-.91-.14h.08c-.25-.11-.61.12-1 .1v-.05a3.86 3.86 0 0 1-1.2.26c.12-.13.18-.07.1-.2-.18 0 .05.21-.3.25-.11-.07-.37-.13-.4-.27h.33c-.17-.17-.43 0-.6 0v-.08c-.51 0-.52.22-1.06.21l.05.05c-.3.2-.25-.11-.54 0l-.09-.2a9.11 9.11 0 0 1-1.05.23 3.89 3.89 0 0 1 .87-.31 1.94 1.94 0 0 0-.76.11.43.43 0 0 1 .25 0 1.66 1.66 0 0 1-.94.22c.07-.38-1-.09-1.3-.39a13.31 13.31 0 0 1-2.17 0c.29.3-.23 0-.18.32h-.28l-.56-.18c-.14-.09.17-.07.16-.13-.41 0-.18-.13-.45-.21.06.11-.14.15-.37.11l.33.14c-.57.16-.5-.25-1.07-.09l.18-.1c-.3.06-1.09 0-1.38.25 0 0-.12-.12 0-.14a13.56 13.56 0 0 1-2.13.11l.06-.07c-.13 0-.23.14-.4.07 0 0 .06-.08 0-.08a1.26 1.26 0 0 1-.53.09l.15-.09c-.69-.09-1.06.21-1.64.26 0-.21-.54-.28-.81-.31a14.32 14.32 0 0 0-2.11.26 14.38 14.38 0 0 0-2.3-.19c.11 0 0 .15-.15.17s-.48.14-.45 0h.06c-.13-.17-.49-.12-.77-.12v.23c-.73-.33-1.91.13-2.31-.16-.17.06-.39.06-.57.12V421a11.76 11.76 0 0 0-1.33 0l.12-.08c-.34 0-.43.33-.75.34l-.09-.17a7.06 7.06 0 0 0-1.78 0s0-.07.12-.08c-.28 0-1.08-.09-1 .12 0-.14-.61 0-.93.06v-.1a1.36 1.36 0 0 1-.66.2c-.09 0-.08-.08 0 0-.3-.05-.23.09-.59 0l.13-.06a.71.71 0 0 0-.45.1 1 1 0 0 1-.63-.1.52.52 0 0 1-.39.1s0-.05.07-.06c-.51-.06-.76.11-1.11 0l-.06-.05h.7c-.03 0-.33-.1-.06-.22a3.49 3.49 0 0 1-1 .18H450a.49.49 0 0 0-.21 0h-.26c0-.07-.38 0-.54 0 0 .08-.21.07 0 .14H449.59a.78.78 0 0 1-.44 0l-.23.13c-.23-.11-.66-.17-.72-.23a6.78 6.78 0 0 0-1.5.19c-.14 0-.16 0-.22-.06s.18 0 .23 0c-.29 0-.85 0-.92.12-.36 0 .21-.09-.29-.06h.07c-1-.12-1.58.22-2.66.07h.13c-1.23-.05-2.53.07-3.75 0a2.94 2.94 0 0 0-.59 0h-.43c-.51 0-.89-.05-1.53 0h-2.53 1.69a1.84 1.84 0 0 0 .34 0h-.1a5.93 5.93 0 0 0 .6 0 3.25 3.25 0 0 1 .61.05 3.34 3.34 0 0 1 .5 0c-.31 0 .65 0 .56.07h1.26-.11a3.58 3.58 0 0 1 .45.05c0-.06.39-.06.58-.1s-.17.07-.08.13.49 0 .4-.08c.22 0 .19 0 .3.07s.2 0 .38 0 .08.08.43.06c.13.08-.18.1-.18.1zm8.22-.05zm.69 0h-.3s0-.06.08-.06.12.04.22.07zm-1.46-.6h.16-.2s.02.02.04.01zM449.1 421.3h-.05.07zM511.71 421.43z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M460.29 365.75v-.03l-.06.03h.06z" />
                        <path className="cls-59" d="M515.51 421.67zM517.16 421.67zM518.42 421.68zM498.33 422h-.05c-.11.05-.03 0 .05 0zM504.31 421.71l-.19.05c.1.01.19.01.19-.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M491.66 365.88h-.04.04z" />
                        <path className="cls-59" d="M503.84 421.76a.66.66 0 0 0 .28 0 .88.88 0 0 0-.28 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M523.9 365.25h.06-.06z" />
                        <path className="cls-59" d="M524 421.59zM524.17 421.58zM522.22 421.61zM521.72 421.63h.48c-.07.01-.37-.02-.48 0zM519.59 421.48h.43c-.07 0-.17 0 0 0-.52-.07.13.01-.43 0zM518.27 421.44c.23 0 0 0 0 0s-.17-.02 0 0zM508.73 421.34v-.08c-.15.01.02.03 0 .08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M506.9 365.45l.18.05.08-.08-.26.03zM505.83 364.8l.07-.01-.29.03.22-.02z"
                        />
                        <path className="cls-59" d="M489.8 421.05l.05.15c.15-.03.15-.2-.05-.15zM482.88 421.19a.36.36 0 0 0-.39-.06 1.77 1.77 0 0 0 .39.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M462.13 364.67l.14-.05-.27.04.13.01z" />
                        <path className="cls-59" d="M512.23 397.66zM511.92 397.66h-.08.08zM507.49 397.53zM504.74 397.41s-.01-.01 0 0zM504.27 397.26zM507.49 397.53h-.08s.04-.01.08 0zM511.31 397.72z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M508.7 341.16h.02l.02-.03-.04.03z" />
                        <path className="cls-59" d="M509.63 397.52v.07a.05.05 0 0 1 .05 0s-.05-.05-.05-.07zM511.1 397.64zM508 397.46z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M480.95 341.32h.02-.02z" />
                        <path className="cls-59" d="M495.53 397.08c.09.13-.15.16 0 .3-.03-.05.11-.22 0-.3zM511.29 397.72z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M495.51 341.04l.02.02-.02-.02z" />
                        <path className="cls-59" d="M501.43 397.11a.08.08 0 0 0 0 .05s.02-.02 0-.05zM502.91 397.32zM500.67 397.28h-.06s.03-.02.06 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M499.87 340.93l.01.03.03-.01-.04-.02z" />
                        <path className="cls-59" d="M484.45 397.92a.1.1 0 0 1 0-.05s-.14.05 0 .05zM511.31 397.71s.01 0 0 0zM500.63 398.33h-.12zM490.16 398.15s-.01.01 0 0zM500.13 398.34a.17.17 0 0 0-.07-.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M483.58 397.94c.12 0 .05-.06.08-.09s.06 0 .11.09.16-.07.23-.07h.4a.3.3 0 0 1 0-.12c.06 0 .1-.05.12 0s0 0-.05 0h.06c.05.08-.08 0-.08.08s.24-.08.32-.05-.19 0-.08.09h-.13c.1.12-.08 0 0 .12s.19 0 .37 0v-.12c.25-.08.19.23.37.12s.07-.17.2-.1v.1c.17 0 .1-.15.27-.07h-.1.16v.1c.18 0 .38-.07.57-.09v.1a1.58 1.58 0 0 1 .77.12l.09-.1v.07c0 .07 0-.07.05-.11s.07.07 0 .09c.16-.07.47-.17.64 0 .13.05.15-.22.27-.11.29 0 .62-.05.84.14 0-.17.29.08.31-.16.17.13.12.17.35.26.07 0 .1-.15.18-.18v.13l.1-.13.06.16h.07s-.06-.06-.05-.09.27.09.28.16l.27-.1c0 .05-.06.07-.09.1.14-.13 0 .15.16 0s0-.08 0-.11a.32.32 0 0 0 .33.06v.1h.65c-.08 0-.06-.22 0-.23v.15c0-.1-.07-.06 0-.17s.06.17 0 .22l.1-.05v.12c0 .06.17.16.23 0a3.83 3.83 0 0 0 .51-.05c0-.13.07-.1.13-.21a1.1 1.1 0 0 0 .44.15c.12-.07 0-.12.09-.2 0 .13.17.12.08.2a1.16 1.16 0 0 0 .5-.12c0-.05-.06-.07 0-.11s.1.05.09.11c.28-.18.64.38.86.12l.23-.14c.11 0-.06.1 0 .18.24-.21.38 0 .59-.11.15.38.55 0 .76.22v-.09c.06-.09.07.05.11.07s-.06-.08 0-.13a3.74 3.74 0 0 1 1.43.21c.18 0 .1-.46.32-.25l-.06.16c.35-.2.72 0 1.06-.17 0 0 0 .09-.06.09s.27 0 .27-.09 0 .08.05.13.18-.15.22 0 .22 0 .17-.12c.13.06.25-.06.35 0 .07-.15.22.06.24-.14 0 .21.23.17.31.06 0 .07.07.07 0 .16s.18-.05.16-.16c.17.25.34-.2.44.12a3.89 3.89 0 0 1 .7-.26c0 .2-.28 0-.26.24.23-.09.37-.27.6-.22.06 0 0 .08-.05.12.23-.09.45 0 .66-.11l-.05.06c-.05.06.1 0 .1-.07-.07-.13.16-.27.17-.34-.07.26.2.06.09.38a.14.14 0 0 0 .06-.12s.05.05 0 .12c.15-.05.1-.14.23-.14s0 .06 0 .11.13-.17.25-.14 0 .06 0 .06c.19 0 .33-.21.54-.14-.06.17.08.05.09.2l.11-.05v-.07c.1 0 .19-.1.27-.06l-.07.06h.18l-.1-.05c.1-.08 0-.18.12-.14 0 0 .1 0 .15.08 0-.05.1-.09.18-.06s0 .15 0 .18.23 0 .29-.15a.14.14 0 0 0 0 .11v-.09.1c.14 0 0-.17.13-.1.17 0 .32-.06.48 0s-.14 0-.08.14a2.65 2.65 0 0 1 .67-.13c0-.16.16.08.26 0s0 .09 0 .08a1.51 1.51 0 0 0 .52-.11 1.16 1.16 0 0 0 .32 0s.08 0 .05-.08c.29.19.55-.12.8 0h-.05.22c0-.05 0 0-.07-.07a.22.22 0 0 1 .14-.06c-.1 0 0 .08 0 .11.11.09 0-.1.17 0a.37.37 0 0 1 .18 0c0 .05-.06 0-.07.07s.17-.11.25-.06-.09 0-.12 0h.31c.11-.13.22 0 .37-.11-.14.08 0 .05 0 .1s.09 0 .08 0h.27c-.02 0 0 0 0 0h.53a2.41 2.41 0 0 1 .37-.07h-.05a.64.64 0 0 0 .24 0h.14-.07.42a.2.2 0 0 1-.12 0h.06a1.52 1.52 0 0 0-.35 0h.05H510.71c-.2 0 0 0-.17.07l-.11-.09h-.05c.01 0 0 0 0 .05s-.28 0-.3-.06.09 0 0 0h-.22c-.09 0 .12 0 0-.06s-.18 0-.25 0h-.3a3.08 3.08 0 0 0-.37-.07c0 .08-.15.06-.24.08s0-.07.07-.09h-.09a.13.13 0 0 1-.1 0v-.06c-.11 0-.23.07-.38 0 0 .07.12.18 0 .22s0-.09 0-.11a.07.07 0 0 1-.07 0l.06-.06c-.06 0 0 .05-.09 0s0 0 0-.08.05 0 .07 0a.27.27 0 0 1-.16-.08.05.05 0 0 1 0 .07c-.12 0 0-.06-.11-.09s-.1 0-.1.07v-.06c0-.06-.28 0-.21.09-.2.08-.41-.05-.6 0-.11 0-.25 0-.33.08a.09.09 0 0 1-.07-.09c-.09 0-.1.06-.22 0 .09-.06 0-.05.09 0-.12 0-.14-.09-.26 0 0-.08-.09-.11-.14-.08l.08.06a.47.47 0 0 1-.17 0v-.11c-.23-.15-.42.23-.6 0-.06.09.13.07.07.16s-.21-.19-.25-.2-.13.18-.29.13c0 .05 0 .17-.07.21s-.14-.2-.07-.23.08 0 0-.09v.05c-.05-.05-.2-.05-.16-.12s0 .07 0 .1c-.14-.07-.21 0-.35-.06v.08c-.21-.06-.09.09-.23.11s0-.18-.12-.12 0-.13 0-.16c-.13.08-.24-.07-.32-.09h.07a.22.22 0 0 1-.11 0v.1s-.07 0-.07-.06 0 .16-.05.25-.16.05-.18-.08c.17.05 0-.14.12-.15a.12.12 0 0 1-.1 0c-.16-.13-.07.14-.24.14 0-.08 0-.15-.06-.13s0 .12 0 .18-.12 0-.17 0h.06c0 .08-.08.07-.15.09s.07 0 0-.06-.18-.15-.3-.06 0-.15-.05-.18-.14-.11-.28 0v.18l.22-.07-.15.15c.07 0 .15-.06.19 0s-.06.06 0 .14c-.09-.16-.18.09-.29 0v-.27c-.16-.12-.28.13-.49.06l.07.05c0 .11-.13 0-.19.06a.36.36 0 0 0-.07-.19c0 .07-.15 0-.17.18l-.09-.12c-.17-.06-.19.26-.35.22.05-.1 0-.16.08-.23h-.1s-.15.12-.2 0 0 .13-.09.13a.08.08 0 0 1 0-.05c0 .05-.09.06 0 .17-.17-.3-.46 0-.61-.24a2.29 2.29 0 0 1-.36.07s0-.05 0 0c-.15-.09-.09.28-.26.18s.09-.09 0-.15c0-.31-.2 0-.31-.14-.08-.11-.21.12-.35.1a.08.08 0 0 0 0-.05.68.68 0 0 1-.41.26c0-.13.06-.07 0-.19s0 .2-.1.24-.13-.13-.14-.27h.11c-.06-.17-.15 0-.21 0v-.08c-.17 0-.17.22-.36.21v.05c-.11.2-.09-.11-.19 0v-.2a1.72 1.72 0 0 1-.36.23c.07-.15.21-.22.3-.31-.07 0-.23 0-.26.11s.06-.06.08 0a.34.34 0 0 1-.32.22c0-.38-.35-.09-.44-.39-.24.14-.47-.06-.75 0 .1.3-.08 0-.06.32h-.09l-.2-.18c0-.09.06-.07.06-.13s-.06-.13-.16-.21c0 .11 0 .15-.12.11l.11.14c-.2.16-.17-.25-.37-.09l.06-.1c-.1.06-.37 0-.47.25v-.14c-.24 0-.54.26-.72.11v-.07s-.07.14-.13.07 0-.08 0-.08-.12.13-.18.09v-.09c-.24-.09-.36.21-.56.26 0-.21-.19-.28-.28-.31-.27 0-.46.18-.72.26-.16-.21-.54-.08-.79-.19 0 0 0 .15-.05.17s-.17.14-.16 0c-.05-.17-.17-.12-.27-.12v.23c-.25-.33-.66.13-.8-.16-.06.06-.13.06-.19.12v-.12a1.41 1.41 0 0 0-.46 0l.05-.08c-.12 0-.15.33-.26.34v-.17c-.21 0-.41-.13-.61 0v-.08c0-.01-.37-.09-.34.12 0-.14-.21 0-.32.06v-.1c-.09.13-.09.17-.22.2s0-.08 0-.05-.08.09-.2 0v-.06c-.1 0-.09 0-.15.1a.17.17 0 0 1-.22-.1c0 .05-.07.12-.13.1a.06.06 0 0 1 0-.06c-.17-.06-.26.11-.38 0a.06.06 0 0 0 0-.05.93.93 0 0 1 .24 0c0-.09-.11-.1 0-.22-.09.07-.25.21-.36.18a.06.06 0 0 0-.07 0h-.09c0-.07-.13 0-.19 0s-.07.07 0 .14 0 0 .05 0h.16c0 .05-.09.08-.15 0l-.08.13c-.08-.11-.23-.17-.25-.23-.17.05-.4.05-.51.19s-.06 0-.07-.06.06 0 .07 0-.29 0-.31.12.07-.09-.1-.06c-.33-.12-.54.22-.91.07-.42-.05-.86.07-1.28 0a.35.35 0 0 0-.2 0H482c-.18 0-.3-.05-.52 0H480.79h.31s-.06 0 0 0-.06 0 0 0h.12c.12 0 0 0 0 0h.42a.39.39 0 0 1 .17 0c-.11 0 .22 0 .19.07a2.69 2.69 0 0 1 .43 0 .5.5 0 0 1 .16.05c0-.06.13-.06.2-.1s-.06.07 0 .13.17 0 .13-.08.07 0 .11.07.07 0 .13-.05 0 .08.14.06.28.17.28.17zm2.81-.05zm.24 0h-.1v-.06s.06.04.1.07zm-.5-.6h.05-.07zM486.06 397.41z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M507.52 341.2h-.01l.01.01v-.01zM489.9 341.86v-.03l-.02.03h.02z"
                        />
                        <path className="cls-59" d="M508.82 397.78zM509.39 397.78zM509.82 397.79zM502.93 398.13s-.02.02 0 0zM505 397.82l-.06.05s.06.01.06-.05zM504.82 397.87a.09.09 0 0 0 .1 0 .12.12 0 0 0-.1 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M511.7 341.36h.02-.02z" />
                        <path className="cls-59" d="M511.72 397.69zM511.79 397.69zM511.12 397.72zM511 397.74h.17s-.17-.02-.17 0zM510.22 397.59h.15s-.06 0 0 0c-.18-.07.04.01-.15 0zM509.77 397.55c.08 0 0 0 0 0s-.06-.02 0 0zM506.5 397.45v-.08c-.05.01.01.03 0 .08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M505.87 341.56l.06.05.03-.08-.09.03zM505.5 340.91l.03-.01-.1.03.07-.02z"
                        />
                        <path className="cls-59" d="M500 397.16v.15s.08-.2 0-.15zM497.64 397.3c0-.08-.09-.13-.13-.06s.1.08.13.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M490.53 340.78l.04-.05-.08.04.04.01z" />
                        <path className="cls-59" d="M466.24 397.66zM465.94 397.66h-.08.08zM461.5 397.53zM458.75 397.41s0-.01 0 0zM458.28 397.26s.01-.01 0 0zM461.5 397.53h-.07s.04-.01.07 0zM465.33 397.72z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M462.71 341.16h.03l.01-.03-.04.03z" />
                        <path className="cls-59" d="M463.64 397.52v.07c0 .02 0 0 0 0a.08.08 0 0 0 0-.07zM465.12 397.64zM462.05 397.46z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M434.96 341.32h.02-.02z" />
                        <path className="cls-59" d="M449.54 397.08c.09.13-.14.16 0 .3-.02-.05.11-.22 0-.3zM465.3 397.72z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M449.53 341.04l.02.02-.02-.02z" />
                        <path className="cls-59" d="M455.45 397.11a.08.08 0 0 0 0 .05s.01-.02 0-.05zM456.92 397.32zM454.68 397.28h-.05s.03-.02.05 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M453.88 340.93l.02.03.02-.01-.04-.02z" />
                        <path className="cls-59" d="M438.46 397.92a.05.05 0 0 1 0-.05s-.14.05 0 .05zM465.33 397.71zM454.65 398.33h-.13zM444.18 398.15s-.01.01 0 0zM454.15 398.34a.25.25 0 0 0-.07-.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M437.59 397.94c.12 0 .06-.06.08-.09s.07 0 .12.09.16-.07.23-.07h.39a.19.19 0 0 1 0-.12s.1-.05.12 0c.06.08-.07 0-.07.08s.24-.08.32-.05-.2 0-.08.09h-.14c.1.12-.07 0 0 .12s.19 0 .36 0 0-.07 0-.12c.24-.08.19.23.37.12s.06-.17.19-.1v.1c.17 0 .09-.15.27-.07h-.11.17v.1c.18 0 .37-.07.57-.09 0 0-.05.07 0 .1a1.58 1.58 0 0 1 .77.12l.09-.1V398.01c0-.04.07.07 0 .09.17-.07.47-.17.64 0 .14.05.15-.22.28-.11.3 0 .62-.05.85.14 0-.17.29.08.3-.16.17.13.12.17.36.26.06 0 .09-.15.17-.18v.13l.16-.18.06.16h.07s-.06-.06-.06-.09.28.09.28.16l.27-.1c0 .05-.05.07-.09.1.15-.13 0 .15.16 0a.22.22 0 0 1 0-.11c.06.09.21.09.32.06v.1h.65c-.08 0-.07-.22 0-.23v.15c0-.1-.07-.06 0-.17s0 .17 0 .22l.11-.05a1 1 0 0 1 0 .12c0-.09.18.16.24 0a3.52 3.52 0 0 0 .51-.05c0-.13.08-.1.13-.21a1.2 1.2 0 0 0 .45.15c.11-.07 0-.12.08-.2 0 .13.17.12.09.2a1.13 1.13 0 0 0 .49-.12c0-.05-.05-.07 0-.11s.1.05.1.11c.27-.18.63.38.85.12l.23-.14c.1 0-.07.1 0 .18.25-.21.39 0 .59-.11.16.38.56 0 .77.22v-.09c.05-.09.06.05.1.07s-.06-.08 0-.13a3.79 3.79 0 0 1 1.43.21c.17 0 .1-.46.32-.25l-.07.16c.35-.2.72 0 1.06-.17 0 0 0 .09-.05.09s.27 0 .27-.09v.13c0 .05.19-.15.22 0s.22 0 .18-.12c.13.06.24-.06.35 0 .06-.15.22.06.24-.14 0 .21.22.17.3.06 0 .07.07.07 0 .16s.18-.05.16-.16c.18.25.35-.2.45.12a3.81 3.81 0 0 1 .74-.21c0 .2-.27 0-.26.24.24-.09.37-.27.61-.22.06 0 0 .08-.06.12.24-.09.46 0 .66-.11v.06c0 .06.1 0 .09-.07-.06-.13.17-.27.17-.34-.07.26.21.06.1.38a.12.12 0 0 0 .05-.12s.06.05 0 .12c.14-.05.09-.14.22-.14s0 .06 0 .11.14-.17.25-.14 0 .06 0 .06c.2 0 .34-.21.55-.14-.06.17.07.05.08.2l.12-.05-.05-.07c.1 0 .19-.1.28-.06l-.08.06h.19l-.11-.05c.11-.08 0-.18.13-.14 0 0 .1 0 .15.08.05-.05.1-.09.17-.06s0 .15 0 .18.24 0 .3-.15 0 .09 0 .11v-.09c.05 0 .06 0 .05.1s0-.17.12-.1c.16 0 .32-.06.47 0s-.13 0-.08.14a2.73 2.73 0 0 1 .67-.13c0-.16.16.08.27 0s0 .09 0 .08a1.47 1.47 0 0 0 .52-.11 1.09 1.09 0 0 0 .32 0s.08 0 .05-.08c.28.19.54-.12.8 0h-.05.22c0-.05 0 0-.08-.07a.23.23 0 0 1 .15-.06c-.1 0 0 .08 0 .11s0-.1.18 0a.35.35 0 0 1 .17 0c0 .05-.06 0-.06.07s.17-.11.25-.06h-.13a.24.24 0 0 0 .16 0h.14c.11-.13.22 0 .37-.11-.15.08 0 .05 0 .1s.1 0 .08 0h.28c-.01 0 0 0 0 0h.53a3 3 0 0 1 .37-.07c.06 0 0 0 0 0a.59.59 0 0 0 .23 0h.13-.06.23-.08.27-.06a.16.16 0 0 1-.11 0h.05a1.42 1.42 0 0 0-.34 0h-.11s-.05 0 0 0h-.77c-.2 0 0 0-.17.07l-.1-.09h-.05c.01 0 0 0 0 .05s-.27 0-.3-.06.1 0 0 0h-.21c-.09 0 .11 0 0-.06s-.18 0-.26 0h-.3a2.78 2.78 0 0 0-.36-.07c0 .08-.15.06-.24.08a.1.1 0 0 1 .07-.09h-.08a.14.14 0 0 1-.11 0v-.06c-.11 0-.22.07-.37 0s.12.18 0 .22v-.11c0-.02 0 0-.07 0l.06-.06c-.07 0 0 .05-.09 0s0 0 0-.08 0 0 .06 0a.22.22 0 0 1-.15-.08s0 .06-.05.07 0-.06-.1-.09-.1 0-.1.07 0 0-.06-.06-.27 0-.2.09c-.19.08-.4-.05-.59 0-.12 0-.26 0-.34.08s-.08-.06-.06-.09-.1.06-.23 0c.09-.06 0-.05.09 0-.11 0-.14-.09-.26 0 0-.08-.08-.11-.14-.08l.08.06a.49.49 0 0 1-.17 0v-.11c-.23-.15-.42.23-.59 0-.06.09.12.07.07.16s-.22-.19-.25-.2-.14.18-.29.13a.15.15 0 0 1-.08.21c-.11 0-.13-.2-.06-.23s.08 0 0-.09v.05c-.06-.05-.2-.05-.17-.12s0 .07 0 .1c-.14-.07-.22 0-.36-.06v.08c-.2-.06-.09.09-.23.11s0-.18-.11-.12 0-.13 0-.16-.24-.07-.31-.09h.07a.23.23 0 0 1-.11 0v.1s-.07 0-.07-.06 0 .16-.05.25-.17.05-.18-.08c.16.05 0-.14.12-.15a.12.12 0 0 1-.1 0c-.16-.13-.08.14-.24.14 0-.08 0-.15-.07-.13s0 .12 0 .18-.11 0-.17 0h.06c0 .08-.07.07-.14.09s.06 0 0-.06-.19-.15-.3-.06 0-.15-.06-.18-.13-.11-.27 0c0 .11.05.08-.05.18l.22-.07-.14.15c.07 0 .14-.06.18 0s-.06.06 0 .14c-.09-.16-.18.09-.28 0v-.27c-.16-.12-.28.13-.49.06l.07.05c0 .11-.13 0-.2.06a.29.29 0 0 0-.06-.19c0 .07-.15 0-.17.18l-.1-.12c-.16-.06-.19.26-.35.22 0-.1 0-.16.09-.23h-.11s-.14.12-.19 0 0 .13-.09.13a.08.08 0 0 1 0-.05c0 .05-.1.06-.05.17-.16-.3-.46 0-.6-.24l-.36.07s0-.05 0 0c-.15-.09-.09.28-.26.18s.09-.09 0-.15c0-.31-.2 0-.31-.14-.09-.11-.21.12-.35.1a.08.08 0 0 0 0-.05.74.74 0 0 1-.41.26c0-.13.06-.07 0-.19s0 .2-.1.24-.13-.13-.14-.27h.12c-.06-.17-.15 0-.21 0v-.08c-.18 0-.18.22-.37.21v.05c-.1.2-.08-.11-.19 0v-.2a1.41 1.41 0 0 1-.35.23c.07-.15.21-.22.29-.31s-.22 0-.26.11.06-.06.09 0a.34.34 0 0 1-.32.22c0-.38-.35-.09-.45-.39-.23.14-.47-.06-.74 0 .1.3-.08 0-.06.32h-.1l-.19-.18c0-.09.06-.07.05-.13s-.06-.13-.15-.21c0 .11-.05.15-.13.11l.11.14c-.19.16-.17-.25-.36-.09l.06-.1c-.1.06-.37 0-.47.25 0 0-.05-.12 0-.14-.24 0-.54.26-.73.11v-.07s-.08.14-.13.07 0-.08 0-.08-.12.13-.18.09l.05-.09c-.23-.09-.36.21-.56.26a.33.33 0 0 0-.28-.31c-.28 0-.47.18-.72.26-.16-.21-.54-.08-.79-.19 0 0 0 .15-.06.17s-.16.14-.15 0c0-.17-.17-.12-.26-.12v.23c-.25-.33-.65.13-.79-.16-.06.06-.14.06-.2.12v-.12a1.41 1.41 0 0 0-.46 0v-.08c-.12 0-.15.33-.25.34v-.17c-.2 0-.41-.13-.61 0 0 0 0-.07.05-.08s-.38-.09-.34.12c0-.14-.21 0-.32.06v-.1c-.1.13-.1.17-.23.2s0-.08 0-.05c-.11 0-.08.09-.21 0v-.06c-.11 0-.1 0-.16.1a.16.16 0 0 1-.21-.1c0 .05-.07.12-.14.1a.09.09 0 0 1 0-.06c-.18-.06-.26.11-.38 0s0 0 0-.05a.93.93 0 0 1 .24 0c0-.09-.12-.1 0-.22-.09.07-.24.21-.35.18a.06.06 0 0 0-.07 0h-.1c0-.07-.12 0-.18 0s-.07.07 0 .14 0 0 .05 0h.14c-.05.05-.09.08-.16 0l-.07.13c-.08-.11-.23-.17-.25-.23-.17.05-.41.05-.51.19s-.06 0-.08-.06h.08c-.1 0-.29 0-.32.12s.07-.09-.1-.06c-.34-.12-.54.22-.91.07-.42-.05-.87.07-1.28 0a.41.41 0 0 0-.21 0h-.13c-.17 0-.3-.05-.52 0h-.69.31s-.06 0 0 0h.16c.11 0 0 0 0 0H435.54a.39.39 0 0 1 .17 0c-.1 0 .22 0 .2.07a2.56 2.56 0 0 1 .42 0 .44.44 0 0 1 .15.05c0-.06.14-.06.2-.1s-.06.07 0 .13.17 0 .14-.08.06 0 .1.07.07 0 .13-.05 0 .08.15.06.39.17.39.17zm2.82-.05zm.24 0h-.11v-.06s.07.04.11.07zm-.51-.6h.06-.07zM440.08 397.41z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M461.54 341.2h-.01l.01.01v-.01zM443.91 341.86v-.03l-.02.03h.02z"
                        />
                        <path className="cls-59" d="M462.84 397.78zM463.4 397.78zM463.84 397.79zM457 398.13s-.08.02 0 0zM459 397.82a.18.18 0 0 1-.07.05s.07.01.07-.05zM458.84 397.87a.07.07 0 0 0 .09 0 .1.1 0 0 0-.09 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M465.71 341.36h.03-.03z" />
                        <path className="cls-59" d="M465.74 397.69zM465.81 397.69zM465.14 397.72zM465 397.74h.17s-.17-.02-.17 0zM464.24 397.59h.14s-.06 0 0 0c-.17-.07.05.01-.14 0zM463.78 397.55c.08 0 0 0 0 0s-.05-.02 0 0zM460.51 397.45v-.08c-.05.01.01.03 0 .08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M459.89 341.56l.06.05.03-.08-.09.03zM459.52 340.91l.03-.01-.11.03.08-.02z"
                        />
                        <path className="cls-59" d="M454 397.16v.15s.09-.2 0-.15zM451.65 397.3c0-.08-.09-.13-.13-.06s.11.08.13.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M444.54 340.78l.05-.05-.09.04.04.01z" />
                        <path className="cls-59" d="M481 421.55zM481 421.44a.22.22 0 0 0 0-.08zM481.08 419.8zM481.19 418.78zM481.35 418.61zM481.08 419.8s.01-.02 0 0zM480.89 421.21z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M481.11 363.91l.03.01-.03-.01z" />
                        <path className="cls-59" d="M481.08 420.59zM481 421.13zM481.15 420z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M480.95 353.64v.01-.01z" />
                        <path className="cls-59" d="M481.53 415.37c-.13 0-.16-.05-.3 0 .05-.01.22.04.3 0zM480.89 421.2z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M481.23 359.03h-.02.02z" />
                        <path className="cls-59" d="M481.5 417.56zM481.29 418.1zM481.33 417.27s.02 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M481.33 360.64h-.02v.01l.02-.01z" />
                        <path className="cls-59" d="M480.69 411.27h.05s-.05-.05-.05 0zM480.9 421.21zM480.28 417.26zM480.46 413.39zM480.27 417.08h.09zM480.75 411.26z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M480.68 411c0 .05.05 0 .09 0h-.09c-.09 0 .07.06.06.09.05 0 0 .1.06.14h.09s.05 0 0 .05h-.08c-.08 0 .08.09.05.12s0-.07-.09 0v-.05h-.13c-.13 0 0 .07 0 .13s.07 0 .12 0-.23.07-.12.14.17 0 .1.07h-.1c0 .07.15 0 .07.1s0-.05 0 0 .05 0 .05.07h-.1a1.89 1.89 0 0 0 .09.21h-.1c0 .1 0 .2-.12.29h.1-.06c-.03 0 .18.17.06.24-.05.05.22.05.11.1-.06.11 0 .23-.15.31.17 0-.08.11.16.11-.13.07-.17.05-.26.14s.15 0 .18.06h-.13.13-.16a.15.15 0 0 1 .1 0c.06 0-.09.1-.16.1l.1.1a.24.24 0 0 1-.1 0c.13.05-.15 0 0 .06h.11c-.09 0-.09.08-.06.12h-.1v.24a.36.36 0 0 1 .23 0h-.15H480.43h.05-.12c.09 0-.16.07 0 .09 0 .09 0 .12.05.19s.1 0 .21.05c0 .05-.16.1-.15.16s.12 0 .2 0c-.13 0-.12.07-.21 0a.33.33 0 0 0 .12.18h.12-.11c.19.11-.37.24-.11.32l.14.08h-.18c.21.09 0 .14.11.22-.38.05 0 .2-.22.28H480.35h.13c.11.18-.13.36-.21.53s.46 0 .25.12h-.16c.19.13 0 .26.16.39h-.08c-.12 0 0 .1.09.1h-.13c-.04 0 .15.06 0 .08.05 0 0 .08.12.06-.06.05.06.09 0 .13.15 0-.07.08.14.09-.21 0-.17.08-.06.11h-.16c-.09 0 .05.06.15.06-.25.06.21.12-.11.16a1 1 0 0 1 .25.29c-.2 0 0-.1-.24-.1.09.09.27.14.22.22s-.08 0-.12 0 0 .17.11.25h-.06.06a1 1 0 0 1 .34.07c-.26 0-.07.07-.38 0h0c-.11 0 .14 0 .14.08h-.11c.09 0 .17.05.14.09h-.06c0 .07.21.12.14.2s-.05 0-.2 0H480.83s.11.07.06.11h-.06v.07h.19c-.04 0 0 0-.08.06s.09 0 .06.07h-.18c.11 0 0 .09.15.11s0 0-.1 0 .17 0 .1.05c0 .07.06.12 0 .18s0 0-.14 0 .16.17.13.25c.16 0-.08.06 0 .1h-.07c0 .06 0 .11.1.19s0 .09 0 .12 0 0 .08 0c-.19.11.12.2 0 .3v.08h.07c.07 0 .06 0 .06.06s-.08 0-.11 0h.05c-.09 0 .1 0 0 .07s.05 0 0 .07 0 0-.07 0 .1.07.06.1 0 0 0-.05v.11c.13 0 0 .08.11.14s0 0-.09 0 0 .05 0 .08v.2c0 .08.06.07.07.13a.14.14 0 0 0 0 .09v.13a.39.39 0 0 0 0 .09v-.18-.06-.11c0-.07 0 0-.07-.06h.09s0-.1.05-.11 0-.05 0-.08 0 0 .06 0 0-.07 0-.1v-.11c0-.05 0-.09.07-.13-.07 0 0-.06-.07-.09a.11.11 0 0 1 .09 0h-.05.07s-.07-.08 0-.14-.18.05-.22 0H481h.06s-.05 0 0 0h.07a.1.1 0 0 1 .08-.06h-.07H481.16h.06c.06 0 0-.11-.1-.08-.09-.07.05-.15 0-.22s0-.09-.08-.12.05 0 .09 0-.06 0 0-.08.05 0 0 0 .08-.05 0-.09c.08 0 .11 0 .08-.05h-.06a.08.08 0 0 1 0-.07h.11c.15-.08-.23-.15 0-.22-.08 0-.06.05-.16 0s.2-.08.2-.09-.17-.05-.12-.11a.3.3 0 0 1-.21 0s.19-.05.23 0a.09.09 0 0 0 .08 0c.05 0 0-.07.12-.06a.07.07 0 0 0-.1 0c.07-.05 0-.08.06-.13h-.08c.06-.07-.09 0-.11-.08s.17 0 .12 0a.22.22 0 0 1 .16 0c-.09 0 .07-.09.09-.11h-.1-.19c-.09 0-.05-.06.08-.07-.05.07.14 0 .15.05s-.14 0-.14-.09.15 0 .13 0h-.18c-.05 0 0-.05 0-.07-.07 0-.06 0-.08-.06s0 0 .06 0 .15-.07.06-.12h.18c-.1 0 .11-.06 0-.11a.22.22 0 0 1-.18 0l.07.08-.15-.05s.06.05 0 .06a.23.23 0 0 0-.14 0c.15 0-.1-.07 0-.1h.27c.12-.06-.13-.11-.06-.18h-.05c-.11 0 0-.05-.06-.07a.66.66 0 0 0 .18 0c-.06 0 0-.05-.17-.06h.12c.06-.06-.26-.07-.23-.13s.17 0 .24 0-.13-.05 0-.07-.14 0-.13 0h.05-.17c.3-.06 0-.17.24-.23a.42.42 0 0 1-.07-.13s.05 0 0 0-.28 0-.18-.1.09 0 .15 0c.31 0-.05-.08.14-.12.11 0-.12-.08-.1-.13h.05a.38.38 0 0 1-.26-.15.62.62 0 0 0 .19 0h-.24a1.9 1.9 0 0 1 .27-.05c.17 0 0-.05 0-.07h.08c0-.06-.22-.06-.21-.13h-.06c-.19 0 .11 0 0-.07h.2a.76.76 0 0 1-.23-.13 1.77 1.77 0 0 1 .31.11s0-.08-.11-.1.06 0 0 0-.23-.07-.23-.12c.39 0 .1-.13.4-.17-.14-.09.06-.17 0-.27h-.31l.18-.07h.13c.07 0 .13 0 .21-.06-.11 0-.15 0-.11-.05l-.14.05c-.17-.08.25-.07.09-.14h.09c-.05 0 0-.14-.24-.17h.14c.02 0-.26-.2-.12-.27h.08-.07.08s-.13-.05-.09-.07h.08c.09-.09-.2-.14-.25-.21a.38.38 0 0 0 .31-.1c0-.1-.18-.17-.27-.27.22-.06.09-.2.2-.29a.32.32 0 0 1-.17 0s-.14-.06 0-.06c.18 0 .13-.06.13-.1h-.23c.33-.1-.13-.25.15-.3-.05 0-.05 0-.11-.07h.12a.17.17 0 0 0 0-.17h.09s-.33-.06-.34-.1h.16c0-.07.13-.15 0-.22h.07s.09-.13-.12-.12c.14 0 0-.08-.05-.12h.1c-.13 0-.17 0-.2-.09s.07 0 0 0-.09 0 0-.08h.07l-.1-.06c-.1-.06 0-.07.1-.08s-.12 0-.1-.05h.06c.06-.06-.11-.09 0-.14h.06v.09c0-.01.09 0 .21 0-.07 0-.2-.09-.17-.13.06 0 0-.05 0-.07s-.08 0-.14 0v.05s-.08 0 0-.06h-.14c.12 0 .17-.08.24-.09s0-.15-.19-.19 0 0 .06 0 0-.1-.11-.11.08 0 .06 0c.11-.12-.23-.2-.08-.34 0-.16-.07-.32 0-.48s0 0-.05-.07v-.05c0-.06.05-.11 0-.19s0-.09 0-.09v-.07-.55a.11.11 0 0 0 0 .05v.19c0 .01 0 .08-.05.08s0 0 0 .06 0 .08-.07.07 0 .11 0 .16 0 0-.05.06.06 0 .09.07-.06 0-.12 0 0 .06.08.05h-.07c.07 0 0 0 .05.05s-.08 0-.06.05.07.11.07.11zm0 1zm0 .09h.06zm.6-.18z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M481.19 355.53h-.02l.03.01-.01-.01z" />
                        <path className="cls-59" d="M481.06 419.81z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M480.41 356.95h.03l-.03-.01v.01z" />
                        <path className="cls-59" d="M480.83 420.29zM480.84 420.5z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M480.83 364.32h.02-.02z" />
                        <path className="cls-59" d="M480.79 418.87h0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M480.28 360.93v-.01.01z" />
                        <path className="cls-59" d="M480.74 418.81s.02.01 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M480.91 365.01v.01h.01l-.01-.01z" />
                        <path className="cls-59" d="M480.91 421.36zM480.92 421.39zM480.89 421.14zM480.88 421.08a.06.06 0 0 0 0 .06s.01-.05 0-.06zM481 420.81v0zM481.05 420.64s.02-.02 0 0zM481.15 419.43h.09-.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M480.71 362.86l-.05.02.08.01-.03-.03zM481.36 362.72l.01.01-.03-.03.02.02z"
                        />
                        <path className="cls-59" d="M481.45 417h-.15s.2.06.15 0zM481.31 416.15h.05c-.08 0-.07-.01-.05 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M481.49 357.18l.05.02-.04-.03-.01.01z" />
                        <path className="cls-59" d="M433.66 421.55zM433.66 421.44zM433.8 419.8zM433.91 418.78zM434.06 418.61zM433.8 419.8s0-.02 0 0zM433.6 421.21z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M433.83 363.91l.03.01-.03-.01z" />
                        <path className="cls-59" d="M433.8 420.59zM433.69 421.13zM433.87 420z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M433.67 353.64v.01-.01z" />
                        <path className="cls-59" d="M434.24 415.37c-.12 0-.16-.05-.3 0 .06-.01.22.04.3 0zM433.61 421.2z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M433.94 359.03h-.01.01z" />
                        <path className="cls-59" d="M434.22 417.56zM434 418.1zM434 417.27s.07 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M434.05 360.64h-.03l.01.01.02-.01z" />
                        <path className="cls-59" d="M433.4 411.27h.06s-.05-.05-.06 0zM433.62 421.21zM433 417.26zM433.18 413.39zM433 417.08h.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M433.39 411c0 .05.06 0 .1 0h-.09c-.03 0 .06.06.06.09.05 0 0 .1.05.14h.09s.05 0 0 .05h-.08c-.08 0 .09.09.06.12s0-.07-.09 0v-.05h-.12c-.12 0 0 .07 0 .13s.07 0 .11 0-.22.07-.12.14.18 0 .11.07h-.1c0 .07.15 0 .07.1s0-.05-.05 0 .06 0 .06.07h-.1c0 .07.07.14.08.21h-.09c0 .1 0 .2-.12.29h.1a.08.08 0 0 1-.07 0H433.26c-.03 0 .18.17.06.24-.05.05.22.05.11.1-.05.11 0 .23-.14.31.17 0-.08.11.15.11-.12.07-.16.05-.25.14s.15 0 .17.06h-.13.14-.16a.14.14 0 0 1 .1 0c.06 0-.1.1-.17.1l.11.1a.35.35 0 0 1-.11 0c.14.05-.14 0 0 .06h.11c-.08 0-.09.08-.05.12h-.2v.24a.36.36 0 0 1 .23 0h-.15H433.03h.05-.08c.1 0-.15.07 0 .09v.19c0 .07.11 0 .21.05s-.15.1-.14.16.11 0 .19 0c-.12 0-.11.07-.2 0a.28.28 0 0 0 .12.18h.12-.12c.19.11-.37.24-.11.32l.13.08h-.17c.21.09 0 .14.11.22-.38.05 0 .2-.22.28H432.93h.13c.1.18-.13.36-.21.53s.46 0 .25.12h-.17c.2.13 0 .26.17.39h-.08c-.12 0 0 .1.09.1h-.14c-.05 0 .16.06 0 .08.06 0 0 .08.12.06-.06.05.07.09 0 .13.15 0-.07.08.14.09-.22 0-.17.08-.07.11h-.15c-.09 0 0 .06.15.06-.25.06.21.12-.11.16a1 1 0 0 1 .25.29c-.2 0 0-.1-.24-.1.09.09.27.14.22.22s-.09 0-.12 0 0 .17.1.25h-.05.06a.9.9 0 0 1 .33.07c-.25 0-.06.07-.37 0a.2.2 0 0 0 .11 0h-.11c-.06 0 .14 0 .14.08h-.11c.08 0 .16.05.13.09h-.05c0 .07.21.12.14.2s-.05 0-.2 0H433.4s.1.07.06.11h-.06v.07h.19c-.04 0 0 0-.08.06s.09 0 .05.07h-.18c.12 0 0 .09.16.11s0 0-.1 0 .17 0 .1.05c0 .07.06.12 0 .18s0 0-.14 0 .17.17.14.25c.17 0-.08.06 0 .1h-.07c0 .06.05.11.1.19s0 .09 0 .12 0 0 .09 0c-.19.11.11.2 0 .3v.08h.07a.07.07 0 0 1 0 .06h-.1c-.08 0 .1 0 .05.07s.05 0 0 .07 0 0-.07 0 .1.07.05.1 0 0 0-.05 0 0-.05.06v.05c.12 0 0 .08.1.14s0 0-.08 0 0 .05 0 .08v.2c0 .08 0 .07.07.13a.14.14 0 0 0 0 .09v.13a.46.46 0 0 0 0 .09v-.18-.06-.11c0-.07 0 0-.07-.06h.09s0-.1.05-.11 0 0-.05 0 0-.05 0-.08 0 0 .05 0 0-.07 0-.1v-.11c0-.05 0-.09.08-.13-.07 0-.06-.06-.07-.09a.09.09 0 0 1 .08 0h-.05.06s-.06-.08 0-.14-.17.05-.21 0h.16-.05.08a.1.1 0 0 1 .08-.06h-.07H433.87h.06c.06 0 0-.11-.09-.08-.08-.07.06-.15 0-.22s0-.09-.08-.12.06 0 .1 0-.06 0 0-.08.05 0 0 0 .08-.05 0-.09c.09 0 .11 0 .09-.05h-.06a.08.08 0 0 1 0-.07h.11c.15-.08-.24-.15 0-.22-.08 0-.06.05-.16 0s.2-.08.2-.09-.18-.05-.13-.11a.28.28 0 0 1-.2 0s.19-.05.22 0a.08.08 0 0 0 .08 0s0-.07.12-.06a.07.07 0 0 0-.1 0c.07-.05 0-.08.05-.13H434c.07-.07-.08 0-.1-.08s.17 0 .11 0a.25.25 0 0 1 .17 0c-.09 0 .07-.09.09-.11h-.1-.19c-.08 0-.05-.06.08-.07-.05.07.13 0 .15.05.13-.06-.15 0-.14-.09s.14 0 .13 0h-.19c-.06 0 0-.05 0-.07-.07 0-.06 0-.09-.06s0 0 .07 0c-.13 0 .14-.07.05-.12h.19c-.1 0 .11-.06 0-.11a.25.25 0 0 1-.19 0l.07.08-.15-.05s.07.05.05.06a.26.26 0 0 0-.15 0c.16 0-.09-.07 0-.1h.26c.13-.06-.13-.11-.06-.18-.11 0 0-.05-.06-.07a.74.74 0 0 0 .18 0c-.07 0 0-.05-.17-.06h.12c.05-.06-.26-.07-.23-.13s.17 0 .24 0h-.05c-.05 0-.12-.05 0-.07s-.14 0-.13 0h-.17c.29-.06 0-.17.23-.23a.25.25 0 0 1-.06-.13s.05 0 0 0-.28 0-.18-.1.08 0 .14 0c.32 0 0-.08.15-.12.11 0-.12-.08-.1-.13h.05a.38.38 0 0 1-.26-.15.59.59 0 0 0 .19 0h-.24a1.9 1.9 0 0 1 .27-.05c.18 0 0-.05 0-.07h.08c0-.06-.22-.06-.21-.13h-.06c-.19 0 .11 0 0-.07h.21s-.19-.08-.22-.13a1.62 1.62 0 0 1 .3.11s0-.08-.11-.1.07 0 0 0-.23-.07-.23-.12c.38 0 .1-.13.4-.17-.15-.09.06-.17 0-.27h-.31l.18-.07h.14c.07 0 .13 0 .21-.06-.11 0-.16 0-.12-.05l-.14.05c-.16-.08.26-.07.1-.14h.09s0-.14-.24-.17a.22.22 0 0 1 .14 0c0-.09-.26-.2-.12-.27h.07-.06.08s-.13-.05-.09-.07h.08c.09-.09-.2-.14-.25-.21a.4.4 0 0 0 .31-.1c0-.1-.19-.17-.27-.27.22-.06.08-.2.2-.29a.35.35 0 0 1-.18 0s-.14-.06 0-.06c.18 0 .12-.06.13-.1H434c.32-.1-.14-.25.15-.3-.06 0-.06 0-.11-.07h.11a.15.15 0 0 0 0-.17h.09s-.34-.06-.35-.1h.17c0-.07.13-.15 0-.22h.08s.09-.13-.12-.12c.14 0 0-.08-.06-.12h.1c-.13 0-.16 0-.2-.09s.08 0 .06 0-.1 0-.05-.08h.06l-.1-.06c-.1-.06 0-.07.11-.08s-.12 0-.1-.05h.06c0-.06-.11-.09 0-.14s.05 0 .05 0v.09c0-.01.09 0 .21 0-.07 0-.21-.09-.17-.13.06 0 0-.05 0-.07s-.07 0-.13 0v.05s-.08 0 0-.06h-.14c.12 0 .17-.08.24-.09s-.05-.15-.19-.19 0 0 .06 0 0-.1-.12-.11.09 0 .07 0c.11-.12-.23-.2-.08-.34 0-.16-.07-.32 0-.48s0 0 0-.07v-.05c0-.06.06-.11 0-.19s0-.09 0-.09v-.07V410.4a.11.11 0 0 0 0 .05v.19c0 .01 0 .08-.05.08a.11.11 0 0 1 0 .06s0 .08-.07.07 0 .11 0 .16v.06c0 .06.06 0 .09.07s-.07 0-.12 0 0 .06.08.05 0 0-.08 0 0 0 .06.05-.08 0-.07.05-.15-.29-.15-.29zm0 1zm0 .09h.06zm.59-.18z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M433.91 355.53h-.02l.02.01v-.01zM433.12 356.95h.03l-.02-.01-.01.01z"
                        />
                        <path className="cls-59" d="M433.55 420.29zM433.55 420.5z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M433.55 364.32h.02-.02z" />
                        <path className="cls-59" d="M433.2 418.11s-.02-.01 0 0zM433.51 418.87h0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M433 360.93v-.01.01z" />
                        <path className="cls-59" d="M433.46 418.81s.01.01 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M433.63 365.01v.01-.01z" />
                        <path className="cls-59" d="M433.63 421.36zM433.64 421.39zM433.6 421.14zM433.59 421.08v.06s.02-.05 0-.06zM433.73 420.81v.05s-.01.02 0-.05zM433.77 420.64s.02-.02 0 0zM433.87 419.43h.13-.13z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M433.43 362.86l-.05.02.08.01-.03-.03zM434.07 362.72l.01.01-.02-.03.01.02z"
                        />
                        <path className="cls-59" d="M434.17 417H434s.22.06.17 0zM434 416.15h.05c-.08 0-.05-.01-.05 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M434.21 357.18l.04.02-.04-.03v.01z" />
                        <path className="cls-59" d="M504.13 409.61zM504.12 409.49v.11a.21.21 0 0 0 0-.08zM504.26 407.85zM504.37 406.84s.01-.01 0 0zM504.52 406.66s.01 0 0 0zM504.26 407.85s0-.01 0 0zM504.06 409.27z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M504.29 351.96v.01l.03.01-.03-.02z" />
                        <path className="cls-59" d="M504.26 408.64h-.07zM504.15 409.19zM504.33 408.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M504.13 341.69v.01-.01z" />
                        <path className="cls-59" d="M504.7 406.34s.01.01 0 0zM504.7 403.43c-.12 0-.16-.06-.3 0 .06-.01.22.04.3 0zM504.07 409.26z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M504.4 347.08l-.01.01.01-.01z" />
                        <path className="cls-59" d="M504.68 405.61zM504.47 406.16zM504.51 405.33s.02-.01 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M504.51 348.69l-.02.01v.01l.02-.02z" />
                        <path className="cls-59" d="M503.86 399.33h.06s-.05-.05-.06 0zM504.08 409.27zM503.46 405.32v-.05a.07.07 0 0 0 0 .05zM503.64 401.44zM503.45 405.13h.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M503.85 399H503.86c-.03 0 .07.06.06.08.05 0 0 .11.05.15h.03s.05 0 0 0h-.09c-.09 0 .09.09.06.12s0-.08-.09 0v-.05h-.12c-.12 0 0 .07 0 .14s.07 0 .11 0-.22.07-.12.13.18 0 .11.07h-.1c0 .06.15 0 .07.1s0-.05-.05 0 .06 0 .06.06h-.1c0 .06.07.14.08.21a.1.1 0 0 0-.09 0c0 .09 0 .2-.12.28h.1-.07H503.65c-.03 0 .18.17.06.23-.05.05.22.06.11.1-.05.11 0 .23-.14.32.17 0-.08.1.15.11-.12.06-.16 0-.25.13s.15 0 .17.06h-.13.14-.16.1c.06 0-.1.1-.17.11l.11.09a.15.15 0 0 1-.1 0c.13.06-.15 0 0 .06a.19.19 0 0 1 .11 0c-.08 0-.09.08-.05.12h-.1v.24c0 .09.21 0 .23 0h-.15H503.53h.05-.13c.1 0-.15.06 0 .09v.19c0 .07.11 0 .21 0s-.15.11-.14.17.11 0 .19 0c-.12 0-.11.06-.2 0a.28.28 0 0 0 .12.18.26.26 0 0 1 .12 0h-.11c.19.1-.37.24-.11.32l.13.09h-.17c.21.09 0 .15.11.22-.38.06 0 .21-.22.28H503.4h.13c.1.17-.13.35-.21.53s.46 0 .25.12h-.17c.2.13 0 .27.17.4h-.08c-.12 0 0 .09.09.09h-.14c-.05 0 .16.07 0 .08h-.05c.06 0 0 .08.13.07-.07 0 .06.09 0 .12.15 0-.07.09.14.09-.22 0-.17.09-.07.12h-.15c-.09 0 0 .07.15.06-.25.07.21.13-.11.16a1.21 1.21 0 0 1 .25.29c-.2 0 0-.1-.24-.09.09.08.27.13.22.22s-.09 0-.12 0 0 .17.1.24 0 0 .06 0c.12 0 .27.06.33.06-.25 0-.06.08-.37 0a.2.2 0 0 0 .11 0 .13.13 0 0 1-.11 0c0 .06.14 0 .14.09h-.11c.08 0 .17.05.13.09s-.05 0-.05 0 .21.12.14.2-.05 0-.2 0l.05.05h.07s.1.07.06.1h-.06v.07h.05c.07 0 .18 0 .14.05s0 0-.08.06.09 0 .06.06h-.19c.12 0 0 .09.16.11h-.11.09c0 .06.07.12 0 .17s0 0-.14 0c0 .09.17.17.14.25.17 0-.08.06 0 .1h-.08c0 .05.05.11.1.19s0 .08 0 .12 0 0 .08 0c-.19.1.11.2 0 .29v.08h.07c.07 0 .05 0 .05.05s-.08 0-.1 0 .1 0 .05.06.05 0 0 .06 0 0-.07 0 .1.06 0 .09 0 0-.05.06v.06c.12 0 0 .09.1.14s0 0-.08 0 0 0 0 .08v.2c0 .07.05.08.07.14a.14.14 0 0 0 0 .09v.14a.62.62 0 0 0 0 .1v-.13-.05-.1c0-.07 0 0-.07-.06h.09s0-.1.05-.11 0 0-.05 0 0 0 0-.08v-.09-.11c0-.05.05-.09.08-.14-.07 0-.06 0-.07-.09s.07 0 .08 0a.07.07 0 0 1-.05 0h.06s-.06-.09 0-.14-.18 0-.22 0h.1c.01 0 0 0 0 0h.06s-.05 0 0 0h.07c.07 0 0 0 0 0a.13.13 0 0 1 .08-.06h-.07H504.35s0-.1-.09-.08c-.08-.07.06-.15 0-.22s0-.1-.08-.13.06 0 .1 0-.06 0 0-.08.05 0 0 0 .08-.05 0-.1c.09 0 .12 0 .09-.05h-.06a.06.06 0 0 1 0-.06h.12c.15-.09-.24-.16 0-.22-.08 0-.06.05-.16 0s.2-.09.2-.1-.18-.05-.13-.11-.16 0-.2 0 .19-.05.22 0 0 0 .08 0 0-.08.12-.07a.07.07 0 0 0-.1 0c.07-.05 0-.08.05-.13h-.08c.07-.08-.08 0-.1-.09s.17 0 .11 0h.17c.04 0 .07-.09.09-.12h-.1.06a1.09 1.09 0 0 1-.25 0c.05 0-.05-.06.08-.07-.05.06.13 0 .15.05.13-.06-.15 0-.14-.08s.14 0 .13 0h-.19c-.06 0 0 0 0-.06-.07 0-.06 0-.09-.05s0 0 .07 0c-.13 0 .14-.07.05-.11s.15 0 .19 0 .11-.05 0-.1a.25.25 0 0 1-.19 0l.07.08-.15-.05s.07.05.05.07-.06 0-.15 0c.16 0-.09-.07 0-.11h.26c.13-.06-.13-.1-.06-.18-.11 0 0-.05-.06-.08a.47.47 0 0 0 .18 0c-.07 0 0-.06-.17-.06h.12c.05-.06-.26-.07-.23-.13s.17 0 .24 0h-.05c-.05 0-.12-.06 0-.08s-.14 0-.13 0h.05-.17c.29-.06 0-.17.23-.22a.3.3 0 0 1-.06-.13c.09-.05-.28 0-.18-.09s.08 0 .14 0c.32 0 0-.07.15-.12.11 0-.12-.07-.1-.12h.05a.43.43 0 0 1-.26-.16H504.19a.76.76 0 0 1 .27-.05c.18 0 0-.05 0-.08h.08c0-.07-.22-.07-.21-.14h-.06c-.19 0 .11 0 0-.07h.19a1.59 1.59 0 0 1-.22-.13.86.86 0 0 1 .3.11s0-.09-.11-.1.07 0 0 0-.23-.07-.23-.12c.38 0 .1-.13.4-.16-.15-.09.06-.18 0-.28h-.31l.18-.07h.14c.07 0 .13 0 .21-.05-.11 0-.16 0-.12-.05h-.14c-.16-.07.26-.06.1-.14h.09c-.05 0 0-.14-.24-.18h.14c0-.09-.26-.2-.12-.27h.07s-.13 0-.06-.05.07 0 .08 0-.13 0-.09-.07h.08c.09-.08-.2-.13-.25-.2a.36.36 0 0 0 .31-.11c0-.1-.18-.17-.27-.26.22-.06.08-.2.2-.3a.35.35 0 0 1-.18 0s-.14-.07 0-.06c.18 0 .13-.07.13-.1h-.23c.32-.09-.14-.24.15-.29-.06 0-.06-.05-.11-.07h.11a.15.15 0 0 0 0-.17h.09s-.34-.05-.35-.09h.17c0-.08.13-.15 0-.23h.08s.09-.14-.12-.13c.14 0 0-.07-.06-.11h.1c-.13 0-.16 0-.2-.08s.08 0 .06 0-.1 0-.05-.07h.06l-.1-.05c-.1-.05 0-.08.11-.08h-.1.06c.06-.07-.11-.1 0-.14h.05v.09h.21c-.07 0-.21-.09-.17-.13.06 0 0-.05 0-.07s-.07 0-.13 0V400s-.08 0 0-.06h-.14c.12 0 .17-.08.24-.09s-.05-.15-.19-.19 0 0 .06 0 0-.11-.12-.12.09 0 .07 0c.11-.13-.23-.21-.08-.34 0-.15-.07-.32 0-.47s0-.05 0-.08v-.05c0-.07.06-.11 0-.19s0-.1 0-.09v-.08V398v.05a.15.15 0 0 0 0 .06v.08c0 .02 0 .08-.05.07a.14.14 0 0 1 0 .07s0 .08-.07.07 0 .1 0 .16 0 0-.05.06.06.05.09.07-.07 0-.12 0 0 .07.08.05 0 0-.08 0 0 0 .06.05-.08 0-.07 0 .04.21.04.21zm0 1zm0 .09h.06c-.01 0 .01.03-.02.05zm.59-.19z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M504.37 343.59v-.01l-.02.01h.02zM503.58 345.01h.03l-.02-.01-.01.01z"
                        />
                        <path className="cls-59" d="M504 408.35zM504 408.56z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M504.01 352.38h.02-.02z" />
                        <path className="cls-59" d="M503.66 406.17zM504 406.93h0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M503.45 348.98h.01-.01z" />
                        <path className="cls-59" d="M503.92 406.87s.01.01 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M504.09 353.07v.01-.01z" />
                        <path className="cls-59" d="M504.09 409.42zM504.1 409.44zM504.06 409.2zM504.05 409.13v.06s.02-.04 0-.06zM504.19 408.86v.06s-.01.01 0-.06zM504.23 408.7s.02-.02 0 0zM504.33 407.49h.08-.08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M503.89 350.92l-.05.02.08.01-.03-.03zM504.53 350.78l.02.01-.03-.04.01.03z"
                        />
                        <path className="cls-59" d="M504.63 405.09h-.15s.2.02.15 0zM504.49 404.21h.05c-.08 0-.07-.01-.05 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M504.67 345.24l.04.02-.04-.04v.02z" />
                        <path className="cls-59" d="M457.7 409.61zM457.69 409.49v.11a.21.21 0 0 0 0-.08zM457.83 407.85zM457.94 406.84s.06-.01 0 0zM458.09 406.66s.01 0 0 0zM457.83 407.85s0-.01 0 0zM457.64 409.27z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M457.86 351.96v.01l.03.01-.03-.02z" />
                        <path className="cls-59" d="M457.83 408.64h-.07zM457.72 409.19zM457.9 408.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M457.7 341.69v.01-.01z" />
                        <path className="cls-59" d="M458.27 406.34s.01.01 0 0zM458.27 403.43c-.12 0-.16-.06-.29 0 .02-.01.21.04.29 0zM457.64 409.26z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M457.98 347.08h-.01l-.01.01.02-.01z" />
                        <path className="cls-59" d="M458.25 405.61zM458 406.16zM458.08 405.33s.02-.01 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M458.08 348.69l-.02.01v.01l.02-.02z" />
                        <path className="cls-59" d="M457.43 399.33h.06s-.05-.05-.06 0zM457.65 409.27zM457 405.32v-.05a.07.07 0 0 0 0 .05zM457.21 401.44zM457 405.13h.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M457.42 399H457.43c-.03 0 .07.06.06.08.05 0 0 .11.05.15h.09-.09c-.09 0 .09.09.06.12s0-.08-.09 0v-.05h-.12c-.12 0 0 .07 0 .14s.07 0 .12 0-.23.07-.12.13.17 0 .1.07h-.1c0 .06.15 0 .07.1s0-.05 0 0 .05 0 .05.06h-.1c0 .06.07.14.09.21s-.07 0-.1 0 0 .2-.12.28h.1-.07H457.32c-.03 0 .18.17.06.23-.05.05.22.06.11.1-.05.11 0 .23-.14.32.17 0-.08.1.16.11-.13.06-.17 0-.26.13s.15 0 .17.06h-.13.14-.16.1c.06 0-.1.1-.17.11l.11.09a.15.15 0 0 1-.1 0c.13.06-.15 0 0 .06a.16.16 0 0 1 .1 0c-.08 0-.09.08 0 .12h-.1v.24c0 .09.21 0 .23 0h-.15H457.24h.05-.12c.09 0-.16.06 0 .09v.19c0 .07.11 0 .21 0s-.15.11-.14.17.11 0 .19 0c-.12 0-.11.06-.2 0a.28.28 0 0 0 .12.18.26.26 0 0 1 .12 0h-.11c.19.1-.37.24-.11.32l.13.09h-.17c.21.09 0 .15.11.22-.38.06 0 .21-.22.28h-.1.06c.1.17-.13.35-.21.53s.46 0 .25.12h-.17c.2.13 0 .27.17.4h-.08c-.12 0 0 .09.09.09h-.14c-.05 0 .16.07 0 .08h-.05c.06 0 0 .08.13.07-.07 0 .06.09 0 .12.15 0-.07.09.14.09-.21 0-.17.09-.07.12h-.15c-.09 0 0 .07.15.06-.25.07.21.13-.11.16a1.21 1.21 0 0 1 .25.29c-.2 0 0-.1-.24-.09.09.08.27.13.22.22s-.09 0-.12 0 0 .17.1.24 0 0 .06 0c.12 0 .27.06.33.06-.25 0-.06.08-.37 0a.2.2 0 0 0 .11 0 .13.13 0 0 1-.11 0c0 .06.14 0 .14.09h-.11c.08 0 .17.05.13.09s-.05 0-.05 0 .21.12.14.2-.05 0-.2 0l.05.05h.07s.1.07.06.1h-.06v.07h.05c.07 0 .18 0 .14.05s0 0-.08.06.09 0 .06.06h-.19c.12 0 0 .09.16.11h-.11.09c0 .06.06.12 0 .17s0 0-.15 0c0 .09.17.17.14.25.17 0-.07.06 0 .1h-.08c0 .05 0 .11.1.19s0 .08 0 .12 0 0 .08 0c-.19.1.11.2 0 .29v.08h.07c.07 0 .06 0 .06.05s-.09 0-.11 0h.05c.05 0 .09 0 0 .06s.05 0 0 .06 0 0-.07 0 .1.06.05.09 0 0-.05.06c.12 0 0 .09.1.14s0 0-.08 0 0 0 0 .08v.2c0 .07.06.08.07.14a.14.14 0 0 0 0 .09v.14a.62.62 0 0 0 0 .1v-.13-.05-.1c0-.07 0 0-.07-.06h.09s0-.1.05-.11 0 0-.05 0 0 0 0-.08v-.09-.11c0-.05.05-.09.08-.14-.07 0-.06 0-.07-.09s.07 0 .09 0a.07.07 0 0 1-.05 0h.06s-.06-.09 0-.14-.18 0-.22 0h.1c.01 0 0 0 0 0h.06s-.05 0 0 0h.07c.07 0 0 0 0 0a.13.13 0 0 1 .08-.06h-.07H457.93s0-.1-.09-.08c-.08-.07.06-.15 0-.22s0-.1-.08-.13.06 0 .1 0-.06 0 0-.08.05 0 0 0 .08-.05 0-.1c.09 0 .12 0 .09-.05h-.06v-.06h.12c.15-.09-.23-.16 0-.22-.08 0-.06.05-.16 0s.2-.09.2-.1-.18-.05-.13-.11-.16 0-.2 0 .19-.05.22 0 0 0 .08 0 0-.08.12-.07a.07.07 0 0 0-.1 0c.07-.05 0-.08.05-.13H458c.07-.08-.08 0-.1-.09s.17 0 .11 0h.17c.04 0 .07-.09.09-.12h-.1.06a1.09 1.09 0 0 1-.25 0c.05 0-.05-.06.08-.07-.05.06.13 0 .15.05.13-.06-.15 0-.14-.08s.14 0 .13 0h-.18c-.05 0-.05 0 0-.06-.07 0-.06 0-.09-.05s0 0 .07 0c-.13 0 .14-.07.05-.11s.15 0 .19 0 .11-.05 0-.1-.08 0-.18 0l.07.08-.16-.05s.07.05.05.07-.06 0-.15 0c.16 0-.09-.07 0-.11h.27c.12-.06-.14-.1-.07-.18-.11 0 0-.05-.06-.08a.47.47 0 0 0 .18 0c-.07 0 0-.06-.17-.06h.12c.05-.06-.26-.07-.23-.13s.17 0 .24 0-.13-.06 0-.08-.14 0-.13 0h-.19c.29-.06 0-.17.24-.22a.24.24 0 0 1-.07-.13c.09-.05-.28 0-.18-.09s.08 0 .14 0c.32 0 0-.07.15-.12.11 0-.12-.07-.1-.12h.05a.43.43 0 0 1-.26-.16H457.75a.76.76 0 0 1 .27-.05c.18 0 0-.05 0-.08h.08c0-.07-.22-.07-.21-.14h-.06c-.19 0 .11 0 0-.07h.19a1.59 1.59 0 0 1-.22-.13.86.86 0 0 1 .3.11s0-.09-.11-.1.07 0 0 0-.23-.07-.23-.12c.39 0 .1-.13.4-.16-.15-.09.06-.18 0-.28h-.31l.19-.07h.13c.07 0 .13 0 .21-.05-.11 0-.16 0-.12-.05h-.13c-.17-.07.25-.06.09-.14h.09c-.05 0 0-.14-.24-.18h.14c0-.09-.26-.2-.12-.27h.08s-.14 0-.07-.05.07 0 .08 0-.13 0-.09-.07h.08c.09-.08-.2-.13-.25-.2a.36.36 0 0 0 .31-.11c0-.1-.18-.17-.27-.26.22-.06.09-.2.2-.3a.35.35 0 0 1-.18 0s-.13-.07 0-.06c.18 0 .13-.07.13-.1h-.23c.32-.09-.14-.24.15-.29-.06 0-.06-.05-.11-.07h.11a.15.15 0 0 0 0-.17h.09s-.34-.05-.34-.09h.16c0-.08.13-.15 0-.23h.08s.09-.14-.12-.13c.14 0 0-.07-.06-.11h.11c-.14 0-.17 0-.21-.08s.08 0 .06 0-.1 0 0-.07h.2l-.1-.05c-.1-.05 0-.08.1-.08h-.1.06c.06-.07-.11-.1 0-.14v.09h.21c-.07 0-.21-.09-.17-.13.06 0 0-.05 0-.07s-.07 0-.13 0V400s-.08 0 0-.06h-.14c.12 0 .17-.08.24-.09s0-.15-.19-.19 0 0 .06 0 0-.11-.11-.12.08 0 .06 0c.11-.13-.23-.21-.08-.34 0-.15-.07-.32 0-.47s0-.05 0-.08v-.05c0-.07.06-.11 0-.19s0-.1 0-.09v-.08V398v.05a.15.15 0 0 0 0 .06v.14c0 .02 0 .08-.05.07a.14.14 0 0 1 0 .07s0 .08-.07.07 0 .1 0 .16 0 0-.05.06.06.05.09.07-.06 0-.12 0 0 .07.08.05 0 0-.08 0 0 0 .06.05-.08 0-.06 0l-.09.15zm0 1zm0 .09s.06 0 0 0 .07.03.04.05zm.59-.19z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M457.94 343.59v-.01l-.02.01h.02zM457.15 345.01h.03l-.02-.01-.01.01z"
                        />
                        <path className="cls-59" d="M457.58 408.35zM457.58 408.56z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M457.58 352.38h.02-.02z" />
                        <path className="cls-59" d="M457.23 406.17s-.02-.01 0 0zM457.54 406.93h0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M457.03 348.98z" />
                        <path className="cls-59" d="M457.49 406.87s.01.01 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M457.66 353.07v.01-.01z" />
                        <path className="cls-59" d="M457.66 409.42zM457.67 409.44zM457.63 409.2zM457.62 409.13v.06s.02-.04 0-.06zM457.76 408.86v.06s-.01.01 0-.06zM457.8 408.7s.02-.02 0 0zM457.9 407.49h0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M457.46 350.92l-.05.02.08.01-.03-.03zM458.1 350.78l.02.01-.03-.04.01.03z"
                        />
                        <path className="cls-59" d="M458.2 405.09h-.15s.2.02.15 0zM458.06 404.21h.05c-.08 0-.11-.01-.05 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M458.24 345.24l.05.02-.05-.04v.02z" />
                        <path className="cls-59" d="M457.7 431.85zM457.69 431.76v.05a.16.16 0 0 0 0-.07zM457.83 430.31zM457.94 429.42zM458.09 429.27s.01 0 0 0zM457.83 430.31s0-.01 0 0zM457.64 431.56z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M457.86 374.37v.01h.03l-.03-.01z" />
                        <path className="cls-59" d="M457.83 431zM457.72 431.49zM457.9 430.49z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M457.7 365.35v.01-.01z" />
                        <path className="cls-59" d="M458.27 426.43c-.12 0-.16-.05-.29 0 .02-.01.21.04.29 0zM457.64 431.55zM458 426.43zM458.25 428.35zM458 428.83zM458.08 428.1s.02-.01 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M458.08 371.5h-.02v.01l.02-.01z" />
                        <path className="cls-59" d="M457.43 422.83h.06s-.05-.05-.06 0zM457.65 431.56zM457 428.09s0-.02 0 0zM457.21 424.69zM457 427.92a.17.17 0 0 0 .09 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M457.42 422.55H457.43c-.03 0 .07.05.06.07.05 0 0 .09.05.12h.09-.09c-.09 0 .09.08.06.1s0-.06-.09 0v-.05h-.12c-.12 0 0 .06 0 .12h.12c.07.08-.23.07-.12.12s.17 0 .1.07h-.1c0 .06.15 0 .07.09s.05 0 .05 0h-.1c0 .05.07.12.09.18h-.1c0 .08 0 .17-.12.25h.1-.07H457.32c-.03 0 .18.15.06.2-.05 0 .22 0 .11.09-.05.09 0 .2-.14.27.17 0-.08.09.16.1a.78.78 0 0 0-.26.11s.15 0 .17.06h-.13.14-.16.1c.06 0-.1.09-.17.09l.11.09a.24.24 0 0 1-.1 0c.13.05-.15 0 0 .05h.1c-.08 0-.09.07 0 .11h-.1v.21a.44.44 0 0 1 .23 0h-.15H457.24h.05-.12c.09 0-.16 0 0 .07v.16c0 .06.11 0 .21 0s-.15.1-.14.15.11 0 .19 0c-.12 0-.11.05-.2 0s0 .08.12.16h.12-.11c.19.09-.37.2-.11.28l.13.08h-.17c.21.08 0 .13.11.19-.38.05 0 .18-.22.25h-.1.06c.05 0-.13.31-.21.47s.46 0 .25.1h-.17c.2.12 0 .23.17.35h-.08c-.12 0 0 .09.09.09H457c-.06 0 .16.06 0 .07.06 0 0 .07.13.06-.07 0 .06.08 0 .11.15 0-.07.07.14.08-.21 0-.17.07-.07.1h-.15c-.09 0 0 .06.15.06-.25.05.21.11-.11.14a1 1 0 0 1 .25.25c-.2 0 0-.09-.24-.08.09.07.27.12.22.19s-.09 0-.12 0 0 .15.1.22 0 0 .06 0c.12 0 .27.06.33.06-.25 0-.06.07-.37 0a.2.2 0 0 0 .11 0h-.11c-.11 0 .14 0 .14.08h-.11c.08 0 .17.05.13.08s-.05 0-.05 0 .21.11.14.18-.05 0-.2 0H457.49s.1.06.06.09h-.06v.06h.19c-.04 0 0 0-.08.05s.09 0 .06.06h-.19c.12 0 0 .07.16.09s0 0-.1 0h.1c0 .05.06.1 0 .15s0 0-.15 0c0 .07.17.15.14.22.17 0-.07 0 0 .09h-.08s0 .09.1.17 0 .07 0 .1 0 0 .08 0c-.19.09.11.17 0 .26v.07h.13a.09.09 0 0 0-.11 0h.05c-.09 0 .09 0 0 .06s.05 0 0 .06 0 0-.07 0 .1.05.05.08 0 0-.05.05v.39c.12 0 0 .07.1.12s0 0-.08 0 0 0 0 .07v.17c0 .07.06.06.07.12a.11.11 0 0 0 0 .08v.08a.46.46 0 0 0 0 .09v-.12-.09c0-.06 0 0-.07-.05h.09s0-.09.05-.1 0 0-.05 0 0 0 0-.07v-.09-.09c0-.04.05-.08.08-.12-.07 0-.06-.05-.07-.08a.17.17 0 0 1 .09 0h-.05.06s-.06-.08 0-.12-.18 0-.22 0h.16s-.05 0 0 0h.07a.12.12 0 0 1 .08-.05h-.07H457.97h.06c.06 0 0-.09-.09-.07-.08-.07.06-.13 0-.2s0-.08-.08-.1.06 0 .1 0-.06 0 0-.07.05 0 0 0 .08 0 0-.08c.09 0 .12 0 .09-.05h-.06v-.06h.12c.15-.07-.23-.13 0-.19h-.16c-.1 0 .2-.07.2-.08s-.18-.05-.13-.1-.16 0-.2 0h.22c.03 0 0 0 0 0h.08s0-.07.12-.05a.07.07 0 0 0-.1 0c.07 0 0-.07.05-.11s-.08 0-.08 0-.08 0-.1-.07.17 0 .11 0h.17c.04 0 .07-.08.09-.1h-.1.06a2.26 2.26 0 0 1-.25 0c.05 0-.05-.06.08-.06h.15c.02 0 0 0 0 0 .13-.05-.15 0-.14-.08s.14 0 .13 0h-.18c-.05 0-.05 0 0-.05-.07 0-.06 0-.09-.05s0 0 .07 0c-.13 0 .14-.06.05-.1h.19c-.1 0 .11-.05 0-.09a.28.28 0 0 1-.18 0l.07.07h-.16s.07 0 .05.06-.06 0-.15 0c.16 0-.09-.06 0-.1h.27c.12-.06-.14-.1-.07-.16-.11 0 0 0-.06-.07a.47.47 0 0 0 .18 0c-.07 0 0-.05-.17-.05h.12c.05-.06-.26-.06-.23-.12a1.42 1.42 0 0 1 .24 0s-.13 0 0-.07-.14 0-.13 0H457.83c.29-.05 0-.15.24-.2a.17.17 0 0 1-.07-.11c.09 0-.28 0-.18-.08s.08 0 .14 0c.32 0 0-.06.15-.1.11 0-.12-.07-.1-.12h.05a.43.43 0 0 1-.26-.13.59.59 0 0 0 .19 0h-.24a1.9 1.9 0 0 1 .27-.05c.18 0 0-.05 0-.07h.08c0-.06-.22-.06-.21-.12h-.06c-.19 0 .11 0 0-.06h.19a.91.91 0 0 1-.22-.11 1.86 1.86 0 0 1 .3.09s0-.07-.11-.08.07 0 0 0-.23-.06-.23-.11c.39 0 .1-.11.4-.14-.15-.08.06-.15 0-.24h-.31l.19-.07h.13c.07 0 .13 0 .21-.05h-.25c-.17-.07.25-.06.09-.12h.09c-.05 0 0-.12-.24-.16h.14c0-.07-.26-.17-.12-.23h.08-.07.08s-.13 0-.09-.06h.08c.09-.08-.2-.12-.25-.18a.4.4 0 0 0 .31-.1c0-.09-.18-.16-.27-.24.22-.05.09-.17.2-.26a.35.35 0 0 1-.18 0s-.13-.06 0-.05c.18 0 .13-.05.13-.08h-.23c.32-.08-.14-.21.15-.25-.06 0-.06 0-.11-.07h.11a.11.11 0 0 0 0-.14h.09s-.34-.05-.34-.08h.16c0-.07.13-.14 0-.2h.08s.09-.12-.12-.11c.14 0 0-.07-.06-.1h.11c-.14 0-.17 0-.21-.07h.26c.05 0-.1 0 0-.06s0 0-.1 0 0-.06.1-.07-.12 0-.1 0h.06c.06-.06-.11-.09 0-.13s0 .08 0 .08h.21c-.07 0-.21-.08-.17-.12s0 0 0-.06-.07 0-.13 0v.05s-.08 0 0-.05h-.14c.12 0 .17-.07.24-.08s0-.13-.19-.17 0 0 .06 0 0-.1-.11-.11.08 0 .06 0c.11-.11-.23-.18-.08-.3 0-.14-.07-.29 0-.42s0 0 0-.07c0-.06.06-.1 0-.17s0-.08 0-.07v-.07-.12a.11.11 0 0 0 0 .05v.12c0 .06 0 .08-.05.07a.11.11 0 0 1 0 .06s0 .07-.07.06 0 .1 0 .14 0 0-.05 0 .06 0 .09.06-.06 0-.12 0 0 .05.08 0 0 0-.08 0h0l-.09-.37zm0 .91zm0 .08zm.59-.16z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M457.94 367.01l-.02.01h.02v-.01zM457.15 368.26h.03l-.02-.01-.01.01z"
                        />
                        <path className="cls-59" d="M457.58 430.75zM457.58 430.93z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M457.58 374.73l.02.01-.02-.01z" />
                        <path className="cls-59" d="M457.23 428.84s-.02-.01 0 0zM457.54 429.5h0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M457.03 371.75z" />
                        <path className="cls-59" d="M457.49 429.45s.01.01 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M457.66 375.34v.01-.01z" />
                        <path className="cls-59" d="M457.66 431.69zM457.67 431.71zM457.63 431.5zM457.62 431.44v.05s.02-.04 0-.05zM457.76 431.2v.05s-.01.01 0-.05zM457.8 431.06s.02-.06 0 0zM457.9 430h0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M457.46 373.45l-.05.02.08.01-.03-.03zM458.1 373.33l.02.01-.03-.03.01.02z"
                        />
                        <path className="cls-59" d="M458.2 427.89h-.15s.2.02.15 0zM458.06 427.12c.08 0 .13 0 .05-.05s-.11.04-.05.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M458.24 368.47l.05.01-.05-.03v.02z" />
                        <path className="cls-59" d="M481.17 396.88zM481.17 396.83zM481.3 396zM481.42 395.5zM481.57 395.41zM481.3 396zM481.11 396.71z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M481.33 339.89l.03.01-.03-.01z" />
                        <path className="cls-59" d="M481.3 396.4zM481.2 396.67zM481.38 396.11zM481.06 391.3z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M481.17 334.76z" />
                        <path className="cls-59" d="M481.75 395.25zM481.75 393.79h-.3a1.5 1.5 0 0 0 .3 0zM481.11 396.71zM481.73 394.88zM481.52 395.16zM481.55 394.74s.02 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M481.56 338.26h-.03.03z" />
                        <path className="cls-59" d="M480.91 391.74h.09c-.08 0-.08-.02-.09 0zM481.12 396.71zM480.5 394.74zM480.68 392.8zM480.49 394.64z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M480.9 391.58h0 .07c.06 0 0 0 .06.07h.09s.05 0 0 0h-.08c-.08 0 .08.05.06.06s0 0-.1 0h-.12c-.12 0 0 0 0 .07h.12c.08 0-.23 0-.12.07s.17 0 .11 0h-.1s.14 0 .07.05 0 0-.05 0h.06-.1s.07.07.08.1a.27.27 0 0 0-.09 0s0 .1-.12.15h.13-.09c-.03 0 .18.09.06.12s.21 0 .11.06c-.06.06 0 .11-.14.16h.15a1.26 1.26 0 0 0-.25.07h.17-.13.13c.05 0-.1.06-.17.06l.11.05h-.11c.14 0-.14 0 0 0h.11c-.08 0-.09 0-.06.06h-.09v.12a.59.59 0 0 1 .23 0h-.15a1.16 1.16 0 0 1 .17 0 .81.81 0 0 1-.22 0h-.13c.09 0-.15 0 0 0s0 .06 0 .09a1.18 1.18 0 0 1 .21 0s-.15.05-.14.08a1.09 1.09 0 0 0 .19 0h-.2c-.09 0 0 .05.12.09h.11-.11c.19 0-.37.12-.11.16l.14.05h-.17c.21.05 0 .07.1.11-.37 0 0 .1-.21.14H480.64c.11.09-.13.18-.2.27s.45 0 .24.06h-.16c.2.06 0 .13.17.19h-.09c-.11 0 0 .05.1.05h-.14c-.07 0 .15 0 0 0h.12c-.06 0 .06 0 0 .06.15 0-.07 0 .14.05-.22 0-.17 0-.07.05a.76.76 0 0 1-.16 0h.16c-.25 0 .21.06-.11.08a.91.91 0 0 1 .25.15c-.21 0 0-.06-.24-.05.09 0 .26.07.22.11a.49.49 0 0 1-.12 0c.08 0 0 .08.1.12h-.05.06a2.51 2.51 0 0 1 .34 0h-.38.14-.1.13-.06s.22.06.15.1-.06 0-.2 0h.07s.11 0 .06.05h-.06.2-.09.06-.18c.12 0 0 .05.16.06h-.12.1s.06.06 0 .09 0 0-.14 0 .16.09.14.12c.17 0-.08 0 0 0H481s.05.06.1.1 0 0 0 .06 0 0 .09 0c-.2.05.11.1 0 .15H481.31a.21.21 0 0 0-.11 0h.05c-.08 0 .1 0 0 0h-.07c-.07 0 .1 0 .05.05h-.05c.13 0 0 0 .11.06h-.09c-.09 0 0 0 0 0v.1c0 .04.06 0 .08.07V395.71v-.06h-.08.09s0-.05.05-.05h-.05c-.05 0 0 0 0 0h.06c.06 0 0 0 0-.05s0-.05.07-.07h-.08.15s-.07 0 0-.07-.17 0-.22 0h.32-.08H481.59s0-.05-.09 0c-.08 0 .05-.07 0-.11s0 0-.08-.06h.1s-.06 0 0 0 .05 0 0 0 .09 0 0-.05h.09-.07.11c.15 0-.23-.08 0-.11h-.16a1.94 1.94 0 0 1 .2-.05c.07 0-.18 0-.13-.05a.74.74 0 0 1-.21 0 .44.44 0 0 1 .23 0 .12.12 0 0 0 .09 0h.12a.12.12 0 0 0-.1 0c.07 0 0 0 .06-.07h-.08H481.68a.4.4 0 0 1 .16 0c-.08 0 .07-.05.1-.06h-.29.09.15c.02 0 0 0 0 0h-.14.13-.19c-.06 0 0 0 0 0h-.09.07c-.14 0 .14 0 0-.06h.18c-.09 0 .11 0 0-.05a.37.37 0 0 1-.18 0l.07.05h-.15s.06 0 0 0h-.15c.16 0-.09 0 0-.06h.26c.12 0-.13-.05-.06-.09h-.05.18-.18.13c.05 0-.26 0-.23-.07a1.54 1.54 0 0 1 .24 0h-.05c-.05 0-.12 0 0 0h-.13a.58.58 0 0 0-.16 0c.29 0 0-.09.23-.11l-.07-.07h-.17.14c.32 0 0 0 .14-.05.11 0-.12 0-.09-.06a.56.56 0 0 1-.27-.08h.2a2.12 2.12 0 0 1-.24 0 1.32 1.32 0 0 1 .26 0c.18 0 0 0 0 0h.07s-.22 0-.2-.07h-.06c-.2 0 .11 0 0 0h.2l-.23-.06c.15 0 .22 0 .31.05s0 0-.11-.05.07 0 0 0-.23 0-.23-.06c.38 0 .1-.07.39-.08-.14 0 .06-.09 0-.14h-.32.53-.26c-.16 0 .25 0 .09-.06h.1c-.06 0 0-.07-.25-.09h.14s-.26-.1-.11-.13h.07-.06.07-.08.08c.09 0-.2-.07-.25-.1a.48.48 0 0 0 .3-.06c0-.06-.18-.09-.26-.14.22 0 .08-.1.19-.14h-.17s-.14 0 0 0c.17 0 .12 0 .12-.05h-.23c.33-.05-.13-.12.16-.15h-.12.12a.06.06 0 0 0 0-.09h.08s-.33 0-.34-.05h.17s.12-.08 0-.12h.08s.09-.07-.12-.06c.14 0 0 0-.06-.06h.1H481.28c-.03 0-.09 0 0 0h-.03.06c.05 0-.12-.05 0-.07h.05v.05a1.22 1.22 0 0 1 .21 0c-.07 0-.21 0-.18-.06.07 0 0 0 0 0h-.12s-.08 0 0 0h-.13.23c-.05 0 0-.07-.19-.09s0 0 .06 0 0-.06-.12-.06h.07c.12-.07-.22-.1-.07-.17 0-.08-.07-.16 0-.24s.06-.05 0-.09 0 0-.07 0 0 .06 0 .08H481.09h-.07H481.01a.05.05 0 0 1-.11-.26zm0 .52zm0 0h.1zm.6-.1z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M481.42 335.7h-.03l.03.01v-.01zM480.63 336.41h.03-.03z"
                        />
                        <path className="cls-59" d="M481.05 396.25zM481.06 396.36z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M481.05 340.1h.02-.02z" />
                        <path className="cls-59" d="M480.71 395.16s-.02 0 0 0zM481 395.54z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M480.5 338.4z" />
                        <path className="cls-59" d="M481 395.51s0 .01 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M481.14 340.44v.01-.01z" />
                        <path className="cls-59" d="M481.15 396.8zM481.11 396.68zM481.1 396.65s.02 0 0 0zM481.24 396.51s-.01.04 0 0zM481.28 396.43zM481.38 395.82z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M480.94 339.37l-.06.01h.08l-.02-.01zM481.58 339.3h.01l-.03-.01.02.01z"
                        />
                        <path className="cls-59" d="M481.68 394.62h-.15s.19.01.15 0zM481.54 394.18c.07 0 .13 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M481.71 336.53l.05.01-.04-.02-.01.01z" />
                        <path className="cls-59" d="M435 397.66zM435 397.57zM435.09 396.22zM435.21 395.39zM435.36 395.25zM435.09 396.22s.01-.01 0 0zM434.9 397.38z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M435.13 340.25v.01h.02l-.02-.01z" />
                        <path className="cls-59" d="M435.1 396.87h-.1zM435 397.32zM435.17 396.39z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M434.96 331.83z" />
                        <path className="cls-59" d="M435.54 392.59h-.3c.06 0 .22.04.3 0zM434.9 397.38zM435.52 394.38zM435.31 394.83zM435.34 394.15s.02 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M435.35 337.57l-.03.01h.01l.02-.01z" />
                        <path className="cls-59" d="M434.7 389.23h.06s-.05-.04-.06 0zM434.91 397.38zM434.3 394.14s-.01-.01 0 0zM434.47 391zM434.29 394h.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M434.69 389h0c-.09 0 .07 0 .07.07v.12h.09s.05 0 0 0h-.08c-.08 0 .08.07.06.1s0-.06-.1 0h-.12c-.12 0 0 .05 0 .11h.11c.08.08-.22.06-.12.12s.18 0 .11.06h-.1s.15 0 .07.08.06 0 .06.05h-.1c0 .05.07.11.08.17h-.09c0 .08 0 .16-.12.24h.09-.06H434.55c-.03 0 .18.15.06.2-.05 0 .21.05.11.08-.06.08 0 .18-.14.25.17 0-.09.09.15.09-.12.06-.16 0-.25.11s.15 0 .17.05h-.13.14-.16.1c.06 0-.1.08-.17.08l.11.09h-.11c.14 0-.14 0 0 .05h.11c-.08 0-.09.07-.06.1h-.09v.2a.45.45 0 0 1 .23 0h-.15.17a.54.54 0 0 1-.22 0h.05-.13c.1 0-.15.05 0 .07h-.05c0 .07.05.1.05.16s.1 0 .21 0-.15.08-.14.13.11 0 .19 0c-.12 0-.11.05-.2 0s0 .07.12.15h.12-.12c.19.08-.37.19-.11.26l.13.07h-.17c.21.07 0 .12.11.18-.38 0 0 .17-.22.23H434.28h.12c.04 0-.13.29-.2.44s.46 0 .25.09h-.17c.2.11 0 .22.17.32h-.09c-.11 0 0 .08.1.08h-.14c-.05 0 .15.06 0 .07h-.05c.06 0 0 .07.12.05-.06 0 .07.08 0 .11.15 0-.07.07.14.07-.22 0-.17.07-.07.1h-.15c-.09 0 0 .05.15.05-.25.05.21.1-.11.13a.83.83 0 0 1 .25.24c-.21 0 0-.09-.24-.08.09.07.26.11.22.18s-.09 0-.12 0 0 .14.1.2h-.05.06a1.35 1.35 0 0 1 .33.05c-.25 0-.06.06-.38 0a.2.2 0 0 0 .12 0h-.12c-.07 0 .15 0 .15.07h-.11c.08 0 .16 0 .13.07h-.06c0 .06.22.1.15.17s-.06 0-.2 0h.11s.11.06.07.09h-.07v.06h.19-.08s.09 0 .05.06h-.18c.12 0 0 .07.16.09s0 0-.1 0h.1c0 .05.06.1 0 .15s0 0-.14 0 .16.14.14.21c.17 0-.08.05 0 .09h-.07s.05.09.1.16 0 .07 0 .09 0 0 .09 0c-.2.09.11.17 0 .24v.06h.07c.07 0 .05 0 .05.05s-.08 0-.1 0c-.08 0 .1 0 0 .05s0 0 0 .05 0 0-.07 0 .1.06.05.08 0 0 0 .05c.12 0 0 .07.1.11s0 0-.09 0 0 0 0 .06v.16c0 .06.06.06.08.11s0 0 0 .07v.08a.34.34 0 0 0 0 .08v-.11-.09c0-.06 0 0-.07-.05h.08v-.1c0-.01 0 0 0 0v-.06c0-.06 0 0 .06 0s0-.05 0-.07v-.1c0-.04 0-.07.08-.11-.08 0-.06 0-.07-.07h.08-.05.06s-.07-.07 0-.11-.17 0-.22 0h.11c.01 0 0 0 0 0h.06-.05.08c.08 0 0 0 0 0a.12.12 0 0 1 .08-.05h-.06.06s0-.09-.09-.07c-.08-.05.06-.12 0-.18s0-.07-.08-.1h.1s-.06 0 0-.07.05 0 0 0 .09 0 0-.08h.09-.07v-.05h.12c.15-.07-.24-.12 0-.18h-.16c-.1 0 .2-.06.2-.07s-.18 0-.13-.09a.35.35 0 0 1-.2 0h.3-.05c.05 0 .05-.06.12 0a.07.07 0 0 0-.09 0c.07 0 0-.06.05-.11h-.08c.06-.06-.09 0-.1-.07s.17 0 .11 0a.25.25 0 0 1 .17 0c-.09 0 .07-.07.09-.09h-.1.06a2.18 2.18 0 0 1-.25 0c.05 0 0 0 .08-.06h.15c.02 0 0 0 0 0 .12-.05-.15 0-.14-.08s.14 0 .13 0h-.19c-.06 0 0 0 0-.05H435.29c-.14 0 .14-.06.05-.09s.15 0 .19 0 .11 0 0-.08a.31.31 0 0 1-.19 0l.07.07h-.15s.07 0 .05.05a.26.26 0 0 0-.15 0c.16 0-.09-.05 0-.08h.26c.13-.05-.13-.09-.06-.15h-.05c-.1 0 0 0-.05-.06a.82.82 0 0 0 .18 0c-.07 0 0 0-.17-.05h.12c0-.05-.26-.06-.23-.11a1.42 1.42 0 0 1 .24 0h-.05c-.05 0-.12-.05 0-.06s-.14 0-.13 0a.34.34 0 0 0-.16 0c.29-.05 0-.14.23-.18a.23.23 0 0 1-.06-.12c.09 0-.27 0-.17-.08s.08 0 .14 0c.32 0 0-.06.15-.09.11 0-.11-.07-.09-.11h.05a.48.48 0 0 1-.27-.12.67.67 0 0 0 .2 0H435a1.08 1.08 0 0 1 .26-.05c.18 0 0 0 0-.06h.07s-.22-.06-.2-.11h-.06c-.19 0 .11 0 0-.05h.19a.91.91 0 0 1-.22-.11 1.2 1.2 0 0 1 .3.09s0-.07-.11-.08.07 0 0 0-.23-.06-.23-.1c.38 0 .1-.11.39-.14-.14-.07.06-.14 0-.22h-.31l.18-.06h.14c.07 0 .13 0 .21-.05h-.26c-.16-.06.26-.05.09-.11h.1c-.06 0 0-.11-.24-.14h.14c0-.07-.27-.16-.12-.22h.07-.06.07s-.12 0-.08-.05h.08c.09-.08-.2-.11-.25-.17.21 0 .27-.06.3-.09 0-.08-.18-.14-.26-.22.22-.05.08-.16.2-.24a.51.51 0 0 1-.18 0s-.14-.05 0-.05c.17 0 .12-.05.13-.08h-.24c.33-.07-.13-.2.16-.24-.06 0-.06 0-.12-.06h.12a.11.11 0 0 0 0-.14h.08s-.33-.05-.34-.08h.17c0-.06.12-.12 0-.19h.08s.09-.11-.12-.1c.14 0 0-.07-.06-.1h.1c-.13 0-.16 0-.2-.06h.05s-.09 0 0-.06h.06l-.1-.05c-.1-.05 0-.06.11-.06h-.1.06c.05-.06-.11-.08 0-.12h.05v.08h.21c-.07 0-.21-.07-.18-.11s0 0 0-.05-.07 0-.14 0-.08 0 0 0h-.14c.11 0 .17-.07.24-.08s-.05-.12-.19-.15 0 0 .06 0 0-.09-.12-.1.09 0 .07 0c.11-.1-.23-.16-.08-.28s-.07-.27 0-.39 0 0 0-.06.06-.09 0-.16 0-.08 0-.07v-.06-.12.18c0 .05 0 .07-.07.06s0 .08 0 .13c.05 0 .05 0 .09.06s-.07 0-.12 0 0 .06.08.05 0 0-.08 0H434.72l-.03-.16zm0 .85zm0 .07h.06zm.59-.15z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M435.21 333.38h-.02l.02.01v-.01zM434.42 334.55h.03l-.02-.01-.01.01z"
                        />
                        <path className="cls-59" d="M434.85 396.63zM434.85 396.8z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M434.85 340.59h.01-.01z" />
                        <path className="cls-59" d="M434.5 394.84s-.02-.01 0 0zM434.81 395.46h0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M434.29 337.81h.01v-.01l-.01.01z" />
                        <path className="cls-59" d="M434.76 395.41s.01.01 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M434.93 341.16v.01-.01z" />
                        <path className="cls-59" d="M434.94 397.53zM434.9 397.33zM434.89 397.27v.05s.02-.03 0-.05zM435 397.05v0zM435.07 396.92s.01-.02 0 0zM435.17 395.92h.08-.08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M434.73 339.39l-.06.02.09.01-.03-.03zM435.37 339.28l.01.01-.03-.03.02.02z"
                        />
                        <path className="cls-59" d="M435.47 394h-.15.15zM435.33 393.23h.05-.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M435.5 334.74l.05.01-.04-.03-.01.02z" />
                        <path className="cls-59" d="M271 410.13zM271.53 410.13h.14-.35.21zM279.56 410.23zM284.54 410.33h-.06zM285.38 410.45h-.05s.04.01.05 0zM279.56 410.23h.13s-.07.01-.13 0zM272.64 410.08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M277.37 353.92h-.04l-.04.02.08-.02z" />
                        <path className="cls-59" d="M275.68 410.24s.05 0 .07-.05h-.08l.01.05zM273 410.15zM278.57 410.29zM325.65 410s.01 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M327.6 353.79h-.03.03z" />
                        <path className="cls-59" d="M286.94 410.59s-.03 0 0 0zM301.21 410.59c-.16-.1.26-.13 0-.24.04.04-.21.17 0 .24zM272.68 410.08zM290.52 410.57v-.05a.05.05 0 0 0 0 .05zM287.85 410.4h.07zM291.91 410.43a.13.13 0 0 0 .09 0 .07.07 0 0 1-.09 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M293.35 354.1l-.03-.02h-.04l.07.02z" />
                        <path className="cls-59" d="M321.27 409.92a.18.18 0 0 1 .07.05s.19-.05-.07-.05zM272.64 410.09zM292 409.6zM310.92 409.74zM292.87 409.59l.13.08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M322.85 409.9c-.22 0-.11.05-.15.08-.26 0-.12 0-.21-.07a4.09 4.09 0 0 1-.41 0c-.17.05-.51 0-.71.05a.11.11 0 0 1 0 .09h-.22a.11.11 0 0 0 .09 0h-.1c-.09-.06.14 0 .14-.06a4.27 4.27 0 0 1-.59 0c0-.06.36 0 .16-.07h.23c-.18-.1.15 0 0-.09s-.35 0-.66 0c-.07 0 0 .06 0 .09-.44.06-.34-.18-.67-.09a.36.36 0 0 1-.35.08l.08-.08c-.3 0-.17.12-.49.05h.19c-.05 0-.14.05-.3 0v-.08c-.32 0-.68.06-1 .07 0 0 .08-.05 0-.08a5.84 5.84 0 0 1-1.39-.09l-.16.08s-.08 0 0-.05c-.17 0 0 .05-.09.08s-.13-.05-.07-.07a3 3 0 0 1-1.16 0h.06c-.25 0-.28.18-.5.09a7.8 7.8 0 0 1-1.52-.11c-.08.13-.53-.07-.56.12a2.39 2.39 0 0 0-.65-.2c-.11 0-.17.12-.31.14v-.11l-.19.11-.1-.12h-.13s.11 0 .1.08a.66.66 0 0 1-.51-.13l-.49.08s.09-.06.16-.08c-.26.1-.05-.12-.29 0v.09a1.22 1.22 0 0 0-.59-.05v-.07h-1.17c.14 0 .11.17 0 .18l-.05-.12c-.07.08.13.05 0 .14s-.1-.14 0-.18h-.18v-.1c0-.1-.31-.12-.42 0h-.93c0 .11-.13.08-.23.17a4.62 4.62 0 0 0-.81-.12c-.2.06-.06.09-.15.16 0-.1-.31-.09-.16-.16a4.38 4.38 0 0 0-.89.09c.05 0 .1.06.07.09s-.18 0-.17-.09c-.5.15-1.15-.29-1.55-.08l-.41.1c-.19 0 .12-.07 0-.13-.45.16-.71 0-1.07.08-.29-.3-1 0-1.39-.17v.07c-.1.07-.12 0-.19-.06s.1.07 0 .1a15.14 15.14 0 0 1-2.59-.16c-.31 0-.18.36-.57.2l.11-.13c-.63.15-1.3 0-1.92.13 0 0 0-.07.1-.07-.13-.09-.48 0-.49.08s0-.07-.08-.11-.33.12-.4 0 0 0 .06 0-.4 0-.31.1c-.24-.05-.45.05-.64 0-.12.11-.39-.06-.43.11 0-.17-.41-.14-.56-.06.05-.05-.13-.05-.07-.12-.17 0-.32 0-.29.12-.31-.2-.63.17-.8-.09a12.9 12.9 0 0 1-1.41.2c0-.16.5 0 .48-.19a4.28 4.28 0 0 1-1.1.18c-.11 0 .06-.07.1-.1-.43.07-.82 0-1.2.08h.08c.08 0-.17 0-.17.05h.08c.12.1-.3.21-.31.27.12-.2-.38-.05-.18-.3-.05 0-.11 0-.1.09s-.09 0 0-.09c-.27 0-.17.11-.41.11 0 0 .05-.05.07-.09a.67.67 0 0 1-.45.11s0-.05.05-.05a3.93 3.93 0 0 1-1 .12c.11-.14-.14 0-.16-.16h-.2l.08.06c-.18 0-.34.09-.5.05l.14-.05h-.34.19c-.19.06 0 .14-.22.11.05 0-.19 0-.28-.07a.47.47 0 0 1-.32.05v-.15c0-.03-.43 0-.54.13a.07.07 0 0 0 0-.09l-.08.07c-.08 0-.09 0-.08-.07-.25 0 .08.13-.22.07h.06-.86c-.08-.1.24 0 .15-.11a10.24 10.24 0 0 1-1.26.22h.08c-.06.13-.29-.06-.49 0 .05 0 .07-.07.05-.06a6.12 6.12 0 0 0-.94.08 5.52 5.52 0 0 0-.58 0c-.05 0-.15 0-.09.07-.52-.16-1 .09-1.45 0h.08-.39s.05 0 .13.06a.76.76 0 0 1-.25 0c.17 0 0-.06-.08-.09-.2-.07 0 .08-.31 0a3 3 0 0 1-.31 0s.11 0 .12-.06a1.48 1.48 0 0 1-.46 0h.23a.65.65 0 0 0-.29 0h-.27.07c-.2.11-.4 0-.67.09.26-.06 0 0 .06-.07s-.17 0-.14 0h-.39-.11c-.16 0 0 0 0 0h-1c-.4 0-.37.05-.66.06h.08-.48a1.63 1.63 0 0 1-.24 0h.12-.42.14-.48.1c-.06 0 0 0 0 0a.45.45 0 0 1 .21 0h.66-.08.21c.05 0 .08 0 0 0H273.61c.37 0 0 0 .31-.06l.19.07h.1.06c.06 0 .5 0 .54.05s-.17 0 0 0h.39c-.05 0-.21 0 0 0h1.01s.44 0 .66.06c.05-.06.27-.05.44-.06 0 0 0 .05-.13.07h.16a.43.43 0 0 1 .18 0 3.78 3.78 0 0 1 .68 0c0-.05-.21-.14.07-.18 0 0 0 .08-.05.09a.25.25 0 0 1 .13 0h-.11.16c.1 0 .07 0 .06.06s-.09 0-.12 0a.78.78 0 0 1 .28.06s0-.05.08-.06.07 0 .19.08.18 0 .19-.06.07 0 .09.05.5 0 .38-.08a9.53 9.53 0 0 1 1.07 0 4.69 4.69 0 0 0 .61-.07c.06 0 .14.05.12.08a.76.76 0 0 1 .4 0h-.16c.21 0 .25.07.47 0-.07.06.16.08.26.06l-.15-.05a1.45 1.45 0 0 1 .3 0l-.05.09c.42.12.76-.18 1.08 0 .11-.06-.23-.05-.13-.12a2.21 2.21 0 0 1 .46.15c.26.06.25-.14.52-.1 0 0-.07-.13.14-.16s.24.15.12.18-.07 0-.07 0-.14 0-.07.06c.09 0 .36 0 .3.09.14 0 .06-.05-.05-.07.25.05.39 0 .64 0 0 0-.07-.06 0-.06.37.05.16-.07.42-.09s-.06.14.2.09 0 .11 0 .14c.23-.08.44.05.57.07h-.12a.65.65 0 0 1 .19 0l-.07-.08c.07 0 .13 0 .13.05s0-.13.09-.2.3 0 .33.07c-.3 0 0 .1-.22.11a.38.38 0 0 1 .18 0c.29.1.13-.12.43-.12 0 .06.07.12.12.11-.12 0-.06-.1.05-.15s.21 0 .31 0h-.11c0-.06.13-.05.27-.07s-.12 0-.08.05.34.12.55.05 0 .11.09.14c.23-.08.25.09.5 0-.07-.09-.09-.07.09-.15l-.41.06.26-.12a2.23 2.23 0 0 1-.33 0c.13-.06.11 0 .06-.11.16.12.32-.08.52 0v.21c.29.1.51-.1.89-.05h-.12c.05-.08.23 0 .35 0s.06.1.12.14.27 0 .3-.13l.17.09c.3 0 .35-.2.64-.18-.09.08 0 .13-.15.19h.18s.27-.09.36 0 .05-.11.16-.11.17-.05.08-.13c.3.23.83 0 1.09.19.21 0 .47-.05.66-.06.27.07.17-.22.47-.14.15.13-.16.07-.06.12 0 .25.36 0 .56.11h-.05c.16.08.38-.1.64-.08a2 2 0 0 1 .75-.21c-.08.1-.11.05-.07.15s0-.16.19-.19c.07.06.23.11.25.21h-.21c.11.14.27 0 .38 0v.06c.31 0 .32-.17.65-.16v-.05c.18-.15.15.09.34 0l.06.16a4 4 0 0 1 .64-.18 1.65 1.65 0 0 1-.54.24.9.9 0 0 0 .48-.08h-.16a.9.9 0 0 1 .59-.18c-.05.31.63.08.8.32a6.15 6.15 0 0 1 1.35 0c-.18-.23.14 0 .11-.24h.17l.35.14c.09.07-.11.06-.1.11.26 0 .11.1.28.17 0-.09.09-.13.23-.09l-.2-.11c.35-.13.3.2.66.07l-.11.07c.18 0 .67 0 .85-.19 0 0 .08.09 0 .11.44 0 1-.21 1.32-.09v.06c.08 0 .14-.11.25-.05s0 .05 0 .06.22-.11.33-.07l-.1.06c.43.07.66-.16 1-.2 0 .17.34.22.5.25a6.09 6.09 0 0 0 1.3-.21c.29.17 1 .07 1.43.16-.07 0 0-.13.1-.14s.3-.11.28 0c.08.14.3.1.48.1v-.19c.45.26 1.18-.1 1.43.13.11-.05.25-.05.35-.09v.09a4.58 4.58 0 0 0 .83 0l-.08.07c.21 0 .27-.27.46-.27l.06.13a3.76 3.76 0 0 0 1.11 0 .09.09 0 0 1-.08.06c.17 0 .67.07.61-.1 0 .11.38 0 .58 0v.08a.58.58 0 0 1 .4-.16c.06 0 .05.06 0 0 .18 0 .14-.08.37 0l-.09.05a.34.34 0 0 0 .29-.08c.11 0 .36 0 .38.08a.28.28 0 0 1 .25-.07h-.05c.32.05.47-.08.69 0a2.55 2.55 0 0 1-.44 0c0 .07.21.07 0 .17a1.58 1.58 0 0 1 .65-.14h.27c0 .05.23 0 .33 0s.13-.06 0-.11h-.37a.31.31 0 0 1 .27 0l.15-.11c.14.09.4.13.44.19a3.35 3.35 0 0 0 .93-.15h0c.17 0 .52 0 .56-.09.23 0-.12.07.18 0 .61.09 1-.18 1.65-.06h-.08 2.33a1.17 1.17 0 0 0 .36 0h2.06a2 2 0 0 0 .36 0h-.56H326.78a.7.7 0 0 0-.21 0h.06-1.32c.2 0-.4 0-.35-.06h-.77.06-.28s-.24 0-.36.08.11-.05.05-.1-.31 0-.25.06c-.13 0-.11 0-.18-.06s-.13 0-.24.05 0-.07-.26-.05.12.22.12.22zm-5.1 0zm-.43 0h.18s-.12.1-.18.04zm.9.48h-.1.13s-.01.03-.03.04zM318.35 410.33zM279.5 410.22z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M311.4 353.36v.02l.04-.02h-.04z" />
                        <path className="cls-59" d="M277.14 410zM276.12 410h-.14zM275.34 410zM287.8 409.76c.1-.02.05-.02 0 0zM284.09 410h.12-.12z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M291.94 353.26h.03-.03z" />
                        <path className="cls-59" d="M284.38 410h-.17a.33.33 0 0 0 .17 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M271.94 353.76h-.04.04z" />
                        <path className="cls-59" d="M271.9 410.1zM271.77 410.11zM273 410.08zM273.29 410.07zM274.61 410.18h-.27c.05 0 .11 0 0 0 .32.06-.08-.01.27 0zM275.43 410.22c-.15 0 0 0 0 0s.1.01 0 0zM281.35 410.29v.07c.09-.01-.02-.03 0-.07z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M282.48 353.6l-.11-.04-.05.07.16-.03zM283.15 354.12l-.05.01.18-.03-.13.02z"
                        />
                        <path className="cls-59" d="M293.09 410.53v-.12c-.09.02-.09.16 0 .12zM297.39 410.42a.18.18 0 0 0 .24 0c-.1.03-.19-.02-.24 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M310.26 354.22l-.08.04.16-.03-.08-.01z" />
                        <path className="cls-59" d="M259.85 396.31zM260.32 396.31h.13-.19.06zM267.14 396.42zM271.37 396.51h-.05s.06.01.05 0zM272.09 396.63s-.01.01 0 0zM267.14 396.42h.12-.12zM261.26 396.26z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M265.28 340.1h-.03l-.03.03.06-.03z" />
                        <path className="cls-59" d="M263.85 396.42l.06-.05h-.07l.01.05zM261.58 396.33zM266.3 396.47z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M307.95 339.97h-.03.03z" />
                        <path className="cls-59" d="M273.41 396.77zM285.53 396.77c-.14-.1.23-.13 0-.24.04.05-.17.18 0 .24zM261.3 396.26z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M285.55 340.19l-.02-.01.02.01z" />
                        <path className="cls-59" d="M276.45 396.75s-.02-.02 0 0zM274.19 396.59zM277.63 396.61h.08a.06.06 0 0 1-.08 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M278.85 340.28l-.02-.02h-.04l.06.02z" />
                        <path className="cls-59" d="M302.57 396.1h0zM261.26 396.27zM277.68 395.78h.19zM293.78 395.92zM278.45 395.77a.38.38 0 0 0 .11.08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M303.91 396.09c-.19 0-.09 0-.13.07-.22 0-.1 0-.18-.07a2.67 2.67 0 0 1-.35.05h-.6a.09.09 0 0 1 0 .09h-.19c-.08-.06.11 0 .11-.06a2.93 2.93 0 0 1-.49 0c0-.06.3 0 .13-.07h.2c-.15-.1.12 0 0-.1s-.3 0-.56 0c-.06 0 0 .06 0 .09-.38.07-.3-.18-.57-.09-.07 0-.1.14-.3.08l.07-.08c-.26 0-.15.12-.42.06h.17c-.04 0-.13.05-.26.05v-.08c-.27 0-.57 0-.88.06 0 0 .07-.05 0-.07a4.67 4.67 0 0 1-1.18-.1l-.14.08s-.06 0 0-.05c-.14 0 0 .05-.07.08s-.11-.05-.06-.07a2.07 2.07 0 0 1-1 0h.06c-.21 0-.24.17-.43.09a5.26 5.26 0 0 1-1.3-.11c-.06.13-.44-.07-.47.12a1.82 1.82 0 0 0-.55-.2c-.09 0-.14.12-.26.14v-.1l-.17.1-.08-.12h-.12c.05 0 .1 0 .09.08a.47.47 0 0 1-.43-.13l-.41.08s.07-.05.13-.08c-.22.1 0-.12-.24 0v.09a.88.88 0 0 0-.5-.05v-.07h-1c.13 0 .1.17 0 .18v-.12c-.07.08.1.05 0 .14s-.09-.14 0-.17h-.16v-.09c0-.04-.27-.13-.37 0h-.78c0 .11-.11.08-.2.17a2.76 2.76 0 0 0-.68-.11c-.18.05-.05.09-.13.15 0-.1-.26-.09-.14-.16a3.78 3.78 0 0 0-.75.09c0 .05.08.06.06.1s-.16-.05-.15-.09c-.42.14-1-.3-1.32-.09l-.35.11c-.16 0 .1-.08 0-.14-.38.16-.6 0-.91.08-.24-.3-.85 0-1.18-.17v.07c-.08.07-.1 0-.16-.05s.09.06 0 .1a11.72 11.72 0 0 1-2.2-.17c-.27 0-.16.37-.49.2l.09-.13c-.54.16-1.1 0-1.63.13 0 0 0-.07.09-.07-.11-.09-.41 0-.42.08s0-.07-.07-.11-.28.12-.33 0 0 0 .05 0-.34 0-.27.1c-.2-.05-.38.05-.54 0-.1.12-.34-.06-.37.11 0-.17-.35-.14-.47 0 0-.06-.11-.06-.06-.13-.15 0-.28 0-.25.12-.26-.19-.53.17-.68-.08a11.41 11.41 0 0 1-1.2.19c0-.16.43 0 .41-.19a2.79 2.79 0 0 1-.93.18c-.09 0 .05-.07.08-.1-.36.07-.7 0-1 .09l.07-.05c.07-.05-.15 0-.14.05h.06c.1.1-.25.22-.26.27.11-.2-.32-.05-.15-.3 0 0-.09.05-.08.09s-.08 0 0-.09c-.23 0-.15.11-.35.11l.06-.08a.51.51 0 0 1-.38.1c-.3 0-.51.17-.84.11.1-.14-.11 0-.13-.16h-.17l.07.05c-.16 0-.29.09-.43.05l.12-.05h-.29.16c-.15.06 0 .14-.19.11 0 0-.15 0-.23-.06a.39.39 0 0 1-.27 0v-.14c0-.02-.37 0-.46.12a.08.08 0 0 0 0-.09l-.06.08c-.07 0-.08 0-.07-.08-.22 0 .07.13-.19.08-.25 0-.49.05-.73 0-.07-.1.21 0 .13-.11a7.36 7.36 0 0 1-1 .11h.06c-.05.13-.25-.06-.41 0v-.06a5.5 5.5 0 0 0-.8.08h-.49c-.14 0-.13 0-.08.07-.44-.16-.84.09-1.23 0h.07-.33l.11.06a.57.57 0 0 1-.22 0c.15 0 0-.06-.06-.08-.17-.06 0 .09-.27 0a1.24 1.24 0 0 1-.27 0s.09 0 .1-.06c-.14 0-.27.09-.39 0h.2a.61.61 0 0 0-.25 0h-.23.06c-.17.1-.34 0-.57.08.22-.06 0 0 .05-.07s-.14 0-.12 0H262.88c-.14 0 0 0 0 0h-.82c-.31 0-.31 0-.56.05h.07a2.28 2.28 0 0 0-.37 0 1.15 1.15 0 0 1-.2 0h.1-.36.12-.41.09c-.05 0 0 0 0 0h.18-.09a3.38 3.38 0 0 0 .54 0h-.08.19s.06 0 0 0a1.62 1.62 0 0 1 .23 0h.51c.31 0 0 0 .26-.06l.16.07h.09.51c.04 0-.15 0 0 0h.34c-.05 0-.18 0 0 .05s.28 0 .4 0h.46s.37 0 .56.06c0-.06.23-.05.37-.06s0 .05-.11.07h.14a.26.26 0 0 1 .15 0 3.6 3.6 0 0 1 .58 0c0-.05-.18-.14.06-.18a.06.06 0 0 1-.05.09.38.38 0 0 1 .12 0l-.1.05h.14c.14 0 .06 0 .05.06s-.08 0-.11 0a.59.59 0 0 1 .24.06s0-.05.07-.05.06.05.16.07.16 0 .16-.06.06 0 .08.05.42 0 .32-.07a5.51 5.51 0 0 1 .91 0 2.52 2.52 0 0 0 .52-.07c.05 0 .12.05.1.08a.56.56 0 0 1 .34 0h-.13c.17 0 .21.07.4 0-.07.06.13.09.21.07l-.12-.05h.26l-.05.09c.36.12.65-.18.92 0 .09-.06-.2-.05-.11-.12s.34.15.39.15c.22.06.21-.14.44-.1 0 0-.06-.13.12-.16s.2.15.1.18-.06 0-.06 0-.12 0-.06.07c.09 0 .31 0 .26.1.12 0 0-.06 0-.08.21.05.33 0 .55 0 0 0-.07-.06 0-.06.31.05.14-.07.35-.09s0 .14.17.1 0 .1 0 .13c.2-.07.37.05.48.07h-.1a.47.47 0 0 1 .16 0l-.06-.08c.07 0 .12 0 .12.05s-.05-.13.07-.2.25 0 .28.07c-.26 0 0 .1-.19.12h.16c.25.1.11-.12.37-.11 0 .06.06.11.1.1s-.05-.1 0-.15.18 0 .27 0h-.1c0-.06.11-.05.23-.07s-.11 0-.07.06.29.11.47 0 0 .12.08.14.21.09.42 0c-.06-.09-.07-.07.07-.15l-.34.06.22-.12c-.1 0-.22.05-.28 0 .11-.07.1 0 .05-.12.14.13.28-.07.44 0v.21c.25.1.44-.1.76-.05h-.11c.05-.09.2 0 .3-.05s.06.1.1.15.23 0 .26-.14l.15.09c.25 0 .29-.2.53-.18-.07.08 0 .14-.12.19h.16c.01 0 .22-.1.3 0s.05-.11.14-.1.14-.05.06-.13c.26.23.71 0 .93.19.18 0 .4-.05.56-.06.23.08.14-.21.39-.13s-.13.06-.05.11c0 .25.31 0 .48.11.13.08.32-.1.54-.08a1.38 1.38 0 0 1 .63-.21c-.07.1-.1.05-.06.16s0-.17.16-.19.2.1.21.21h-.17c.09.14.23 0 .32 0v.06c.26 0 .27-.17.56-.16.15-.15.13.09.28 0l.05.15a3.55 3.55 0 0 1 .55-.18 1.46 1.46 0 0 1-.46.25c.11 0 .35 0 .41-.09s-.1.05-.14 0a.62.62 0 0 1 .5-.18c0 .3.53.07.68.31.37-.11.72.05 1.15 0-.15-.24.12 0 .09-.25h.15l.3.15c.07.07-.1.05-.09.1.22 0 .09.11.23.17 0-.09.08-.12.2-.09l-.17-.11c.3-.13.26.2.56.07l-.09.08c.15 0 .57 0 .73-.2 0 0 .06.1 0 .11.37 0 .83-.2 1.12-.09v.06c.07 0 .12-.11.21 0s0 .06 0 .06.19-.1.28-.07l-.08.07c.36.07.56-.17.86-.21 0 .17.29.22.43.25a4.63 4.63 0 0 0 1.11-.21c.24.18.82.07 1.21.16-.06 0 0-.12.08-.14s.25-.11.24 0c.06.14.25.1.4.1v-.18c.39.26 1-.11 1.22.12.1-.05.21-.05.3-.09v.09a3.26 3.26 0 0 0 .7 0l-.06.07c.18 0 .22-.27.39-.27l.05.13a2.7 2.7 0 0 0 .94 0 .09.09 0 0 1-.07.06c.15 0 .57.07.52-.1 0 .11.32 0 .49 0v.08a.5.5 0 0 1 .34-.16c.05 0 0 .06 0 0 .16 0 .12-.07.31 0h-.07c.17 0 .15 0 .24-.08s.31 0 .33.09a.21.21 0 0 1 .21-.08v.05c.27 0 .4-.09.59 0a2.12 2.12 0 0 1-.37 0c0 .07.17.08 0 .17a1.44 1.44 0 0 1 .55-.14.2.2 0 0 0 .11 0h.14c0 .06.2 0 .29 0s.1-.06 0-.11h-.32a.23.23 0 0 1 .23 0l.12-.11c.12.09.35.14.38.19a2.41 2.41 0 0 0 .79-.15h.12-.12c.15 0 .44 0 .48-.09.19 0-.11.07.15.05.51.1.83-.18 1.4-.06a.1.1 0 0 1-.07 0c.65 0 1.34-.05 2 0a.87.87 0 0 0 .31 0h.19c.27 0 .46.05.8 0h.72a2 2 0 0 0 .3 0h.31-.78-.29.05-.9c.17 0-.33 0-.29-.06h-.66.05-.23c-.08 0-.21 0-.31.07s.09-.05 0-.1-.26 0-.21.07c-.11 0-.09 0-.15-.06s-.11 0-.21 0 0-.06-.22-.05-.13.2-.13.2zm-4.34 0zm-.36 0h.16v.05s-.11 0-.16-.02zm.77.48h-.08.1a.05.05 0 0 1 0 .03zM300.08 396.51z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M267.09 340.07h.01l-.02-.01.01.01zM294.19 339.54v.03l.03-.02-.03-.01z"
                        />
                        <path className="cls-59" d="M265.09 396.22zM264.22 396.22zM263.56 396.21zM274.14 395.94c.09-.02.05-.01 0 0zM271 396.19a.21.21 0 0 1 .1 0s-.1-.05-.1 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M277.66 339.44h.02-.02z" />
                        <path className="cls-59" d="M271.24 396.15a.19.19 0 0 0-.15 0 .75.75 0 0 0 .15 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M260.67 339.94h-.04.04z" />
                        <path className="cls-59" d="M260.63 396.28zM260.52 396.29zM261.55 396.26zM261.82 396.25h-.26a2.25 2.25 0 0 0 .26 0zM262.94 396.37h-.23s.09 0 0 0c.29.05-.07-.01.23 0zM263.63 396.4c-.12 0 0 0 0 0s.09.01 0 0zM268.66 396.48v.06c.08-.01-.01-.02 0-.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M269.62 339.79l-.09-.05-.04.07.13-.02zM270.19 340.3l-.04.01.16-.02-.12.01z"
                        />
                        <path className="cls-59" d="M278.64 396.71v-.12c-.09.02-.11.16 0 .12zM282.28 396.6a.15.15 0 0 0 .21 0c-.08.03-.17-.02-.21 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M293.22 340.4l-.08.04.14-.03-.06-.01z" />
                        <path className="cls-59" d="M266.82 424.84zM267 424.84s.06 0 0 0h-.06.06zM269.32 424.94zM270.76 425s.01 0 0 0zM271 425.16s0 .01 0 0zM269.32 424.94s.02.06 0 0zM267.3 424.79z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M268.68 368.63h-.01l-.01.02.02-.02z" />
                        <path className="cls-59" d="M268.19 425v-.06c0-.06 0 0 0 0v.06zM267.41 424.86zM269 425zM282.73 424.75z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M283.3 368.5h-.01.01z" />
                        <path className="cls-59" d="M271.46 425.3zM275.62 425.3c-.05-.1.08-.13 0-.24.01.04-.06.17 0 .24zM267.31 424.79zM272.51 425.28zM271.73 425.11zM272.91 425.14s.01.02 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M273.33 368.81l-.01-.02h-.01l.02.02z" />
                        <path className="cls-59" d="M281.46 424.63v.05s.07-.05 0-.05zM267.3 424.8zM272.93 424.31zM278.45 424.45zM273.19 424.3a.29.29 0 0 0 0 .08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M281.92 424.62c-.07 0 0 0-.05.07s0 0-.06-.07-.08.06-.12.05-.15 0-.21 0a.28.28 0 0 1 0 .09h-.07c-.01 0 0 0 0 0v-.06c0-.06-.13.06-.17 0s.1 0 0-.07h.07v-.1c0-.1-.11 0-.2 0s0 .06 0 .09-.1-.18-.2-.09 0 .13-.1.08v-.08c-.09 0-.05.12-.15.05s.07 0 .06 0h-.09v-.08c-.09 0-.19.06-.3.07a.08.08 0 0 0 0-.08.53.53 0 0 1-.4-.09V424.44c0-.02-.24.13-.34 0-.07 0-.08.18-.14.09-.16 0-.33 0-.44-.11 0 .13-.16-.07-.17.12-.09-.1-.06-.13-.18-.2s-.05.12-.09.14v-.11l-.05.11v-.13.08c0 .03-.15-.08-.15-.13l-.14.08s0-.06.05-.08 0-.12-.09 0 0 .06 0 .09a.14.14 0 0 0-.18 0v-.07a1.3 1.3 0 0 0-.34 0v.18-.12V424.34h-.06v-.1c0-.05-.09-.12-.12 0h-.27c-.09 0 0 .08-.07.17s-.15-.12-.23-.12 0 .09-.05.16c0-.1-.09-.09 0-.16a.46.46 0 0 0-.27.09.19.19 0 0 1 0 .09s-.06 0-.05-.09c-.14.15-.33-.29-.45-.08l-.12.1c-.06 0 0-.07 0-.13-.13.16-.2 0-.31.08-.08-.3-.29 0-.41-.17v.07c0 .07 0 0-.06-.06s0 .07 0 .1c-.25.09-.51-.1-.76-.16-.09 0-.05.36-.16.2v-.13c-.18.15-.38 0-.56.13v-.07s-.14 0-.14.08v-.11c0-.04-.09.12-.11 0s-.12 0-.1.1c-.06-.05-.13.05-.18 0 0 .11-.12-.06-.13.11 0-.17-.12-.14-.16-.06s0-.05 0-.12-.09 0-.09.12c-.09-.2-.18.17-.23-.09a1.4 1.4 0 0 1-.41.2c0-.16.15 0 .14-.19-.12.07-.19.21-.32.18s0-.07 0-.1-.24 0-.35.08c0 .1-.09.21-.09.27 0-.2-.11 0-.05-.3v0c0-.09-.05.11-.12.11s0-.05 0-.09-.07.13-.13.11 0-.05 0-.05-.18.18-.29.12 0-.05 0-.16h-.07v.06c-.05 0-.1.09-.15 0h-.1.06c0 .06 0 .14-.06.11s-.06 0-.09-.07-.06.08-.1.05 0-.12 0-.15-.12 0-.15.13a.31.31 0 0 0 0-.09v0c0-.07 0 .13-.06.07h-.25c-.08 0 .07 0 .05-.11s-.24.13-.36.11c0 .13-.08-.06-.14 0s0-.07 0-.06-.16 0-.28.08h-.17c-.05 0 0 0 0 .07-.15-.16-.29.09-.42 0h-.12v.06a.1.1 0 0 1-.08 0c.06 0 0-.06 0-.09s0 .08-.09 0h-.09v-.06c0-.06-.1.08-.14 0h.07c0-.05 0 0-.08 0h-.08c-.06.11-.12 0-.2.09.08-.06 0 0 0-.07s-.05 0 0 0h-.11c-.05 0 0 0 0 0h-.28a.7.7 0 0 1-.19.06h-.13-.33a.06.06 0 0 1 .06 0h.48c.11 0 0 0 .09-.06l.06.07s.15 0 .16.05-.05 0 0 0h.11c.05 0-.06 0 0 0H268.07c.07 0 .13 0 .19.06 0-.06.08 0 .13-.06a.07.07 0 0 1 0 .07h.05a.07.07 0 0 1 .05 0v.21c.06 0 .12-.05.2 0s-.06-.14 0-.18 0 .08 0 .09v.06c0 .06 0 0 0 0s.07 0 .08.06 0-.05 0-.06 0 .05.06.08.05 0 .05-.06v.05c0 .05.14 0 .11-.08.1-.07.21 0 .31 0 .06 0 .13 0 .18-.07a.09.09 0 0 1 0 .08c.05 0 .05-.05.12 0s0 0-.05 0 .07.06.14 0l.07.06v-.05a.14.14 0 0 1 .09 0v.09c.12.12.22-.19.32 0 0-.06-.07-.05 0-.13s.11.16.13.16.07-.14.15-.1 0-.13 0-.16.07.15 0 .18 0 0 0 .06.1 0 .08.09 0-.05 0-.07.11 0 .19 0 0-.07 0-.06 0-.07.12-.09 0 .14.06.09 0 .1 0 .13.13.06.16.08h.06v-.08-.2c0-.07.09 0 .1.06s0 .11-.07.12 0 0 .05 0 0-.12.13-.12 0 .12 0 .11v-.15c0-.05.06 0 .09 0 0-.06 0 0 .08-.07s0 0 0 .05.1.12.16.05 0 .11 0 .14.07.09.14 0 0-.07 0-.15l-.12.06.08-.12s-.08.05-.1 0 0 0 0-.11c.05.12.09-.08.15 0v.21c.08.1.15-.1.26-.05 0-.08.07 0 .1 0a.26.26 0 0 0 0 .14c0-.05.08 0 .09-.13v.09c.09 0 .11-.2.19-.18s0 .13 0 .19.05 0 .05 0 .08-.09.1 0 0-.11.05-.11 0-.05 0-.13c.09.23.25 0 .32.18l.19-.05s.05-.22.14-.14-.05.07 0 .12c0 .25.11 0 .17.11.05.08.11-.1.18-.08a.4.4 0 0 1 .22-.21v.15c0 .1 0-.16.06-.19a.73.73 0 0 1 .07.21h-.06c0 .14.08 0 .11 0v.06c.1 0 .1-.17.2-.16v.13c.05-.15 0 .09.1 0v.16a1.09 1.09 0 0 1 .19-.18.67.67 0 0 1-.16.24s.12 0 .14-.08 0 .05-.05 0 .11-.18.18-.18c0 .31.18.08.23.32.12-.12.25 0 .39 0-.05-.23 0 0 0-.24h.05l.11.14v.11c0 .05 0 .1.08.17 0-.09 0-.13.07-.09l-.06-.11c.1-.13.09.2.19.07v.07c.05 0 .19 0 .25-.19v.11c.13 0 .29-.21.39-.09v.06s0-.11.07-.05 0 .05 0 .06.06-.11.1-.07v.06c.12.07.19-.16.29-.2a.26.26 0 0 0 .15.25c.14 0 .24-.14.38-.21.08.17.28.07.42.16v-.14c0-.01.09-.11.08 0 0 .14.09.1.14.1v-.19c.13.26.35-.1.42.13 0-.05.07-.05.1-.09v.09a.39.39 0 0 0 .24 0v.07c.06 0 .08-.27.13-.28v.14c.11 0 .22.1.32 0s0 .05 0 .06.19.07.18-.1c0 .11.11 0 .16 0v.08c0-.11 0-.14.11-.17s0 .07 0 .05 0-.08.1 0v.05c.06 0 0 0 .08-.08s.11 0 .12.08 0-.09.07-.07.14-.08.2 0h-.12c0 .07.06.07 0 .17.05-.06.13-.17.19-.14h.08c0 .05.07 0 .1 0s0-.05 0-.11h-.09s.05-.07.08 0v-.11c0 .09.12.13.13.19s.22 0 .27-.15.16 0 .17-.09 0 .07.05.05c.17.09.28-.18.48-.06.22 0 .45-.05.67 0h.78a.4.4 0 0 0-.11 0h-.2c.06 0-.11 0-.1-.06s-.15 0-.23 0h-.08c-.03 0-.07 0-.1.07s0-.05 0-.1-.09 0-.07.06 0 0 0-.06 0 0-.07 0 0-.07-.08 0-.04-.06-.04-.06zm-1.49 0zm-.12 0h.05zm.26.48v.03z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M280.61 368.7v-.01l-.01-.01v.02h.01zM269.3 368.59v.01-.01zM278.58 368.07v.02l.02-.02h-.02z"
                        />
                        <path className="cls-59" d="M268.61 424.74zM268.32 424.75zM268.09 424.74zM271.71 424.47s.02-.02 0 0zM270.64 424.71s0-.04 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M272.92 367.97h.01-.01z" />
                        <path className="cls-59" d="M270.72 424.67h-.05s.03.02.05 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M267.1 368.47h-.01.01z" />
                        <path className="cls-59" d="M267.09 424.81zM267.05 424.82zM267.4 424.79zM267.49 424.78h-.09s.07.01.09 0zM267.88 424.89h-.08s-.03-.01.08 0zM268.11 424.93s.03.01 0 0zM269.84 425v.07s-.01-.07 0-.07z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M270.17 368.31l-.04-.04-.01.06.05-.02zM270.36 368.82l-.01.01.05-.02-.04.01z"
                        />
                        <path className="cls-59" d="M273.26 425.24v-.12s-.04.16 0 .12zM274.51 425.13c0 .06 0 .1.07 0s-.06-.02-.07 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M278.25 368.93l-.02.04.04-.03-.02-.01z" />
                        <path className="cls-59" d="M291.05 424.84zM291.21 424.84s.06 0 0 0h-.06.06zM293.55 424.94zM295 425zM295.24 425.16s0 .01 0 0zM293.55 424.94s.02.06 0 0zM291.53 424.79z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M292.91 368.63h-.01l-.01.02.02-.02z" />
                        <path className="cls-59" d="M292.42 425v-.06c0-.06 0 0 0 0zM291.64 424.86zM293.26 425zM307 424.75z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M307.53 368.5h-.01.01z" />
                        <path className="cls-59" d="M295.7 425.3s-.01 0 0 0zM299.85 425.3c-.05-.1.08-.13 0-.24.01.04-.06.17 0 .24zM291.54 424.79zM296.74 425.28zM296 425.11zM297.14 425.14s.01.02 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M297.56 368.81l-.01-.02h-.01l.02.02z" />
                        <path className="cls-59" d="M305.69 424.63v.05s.07-.05 0-.05zM291.53 424.8zM297.16 424.31zM302.68 424.45zM297.42 424.3a.29.29 0 0 0 0 .08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M306.15 424.62c-.07 0 0 0 0 .07s0 0-.06-.07-.08.06-.12.05-.15 0-.21 0a.28.28 0 0 1 0 .09h-.07c-.01 0 0 0 0 0v-.06c0-.06-.13.06-.17 0s.1 0 0-.07h.07c-.05-.11.05 0 0-.1s-.1 0-.2 0 0 .06 0 .09-.1-.18-.2-.09 0 .13-.1.08v-.08c-.09 0 0 .12-.15.05s.07 0 .06 0h-.09v-.08c-.09 0-.19.06-.3.07s0-.05 0-.08a.53.53 0 0 1-.4-.09l-.05.08v-.05V424.44c0-.02-.24.13-.33 0-.07 0-.08.18-.14.09-.16 0-.33 0-.44-.11 0 .13-.16-.07-.17.12-.08-.1-.06-.13-.18-.2s-.05.12-.09.14v-.11l-.05.11v-.13.08c0 .03-.15-.08-.15-.13l-.14.08s0-.06.05-.08 0-.12-.09 0 0 .06 0 .09a.13.13 0 0 0-.17 0v-.07a1.3 1.3 0 0 0-.34 0v.18-.12V424.34h-.06v-.1c0-.05-.09-.12-.12 0h-.27c-.1 0 0 .08-.07.17s-.15-.12-.23-.12 0 .09-.05.16c0-.1-.09-.09 0-.16a.41.41 0 0 0-.26.09v.09c0 .03-.06 0-.05-.09-.14.15-.33-.29-.45-.08l-.12.1c-.06 0 0-.07 0-.13-.13.16-.2 0-.31.08-.08-.3-.29 0-.41-.17V424.29c-.25.09-.51-.1-.76-.16-.09 0-.05.36-.16.2v-.13c-.18.15-.38 0-.56.13v-.07s-.14 0-.14.08v-.11c0-.04-.1.12-.12 0s-.12 0-.1.1c-.06-.05-.13.05-.18 0 0 .11-.12-.06-.13.11 0-.17-.12-.14-.16-.06s0-.05 0-.12-.09 0-.08.12c-.09-.2-.19.17-.24-.09a1.4 1.4 0 0 1-.41.2c0-.16.15 0 .14-.19-.12.07-.19.21-.32.18s0-.07 0-.1-.24 0-.35.08-.06 0-.05 0c0 .1-.09.21-.09.27 0-.2-.11 0-.05-.3v0c0-.09-.05.11-.12.11s0-.05 0-.09-.07.13-.13.11 0-.05 0-.05-.18.18-.29.12 0-.05 0-.16h-.06v.06c-.05 0-.1.09-.15 0h-.1.06c-.05.06 0 .14-.06.11s-.06 0-.08-.07-.06.08-.1.05a.71.71 0 0 1 0-.15c0 .1-.13 0-.16.13a.31.31 0 0 0 0-.09v0c0-.07 0 .13-.06.07h-.25c-.08 0 .07 0 .05-.11s-.24.13-.36.11c0 .13-.08-.06-.14 0s0-.07 0-.06-.16 0-.28.08h-.17c-.05 0 0 0 0 .07-.15-.16-.29.09-.42 0h-.12v.06a.1.1 0 0 1-.07 0c.05 0 0-.06 0-.09s0 .08-.09 0h-.09v-.06c0-.06-.1.08-.14 0h.07c-.05-.05-.05 0-.08 0h-.08c-.06.11-.12 0-.2.09.08-.06 0 0 0-.07s-.05 0 0 0h-.11c-.05 0 0 0 0 0h-.28a.7.7 0 0 1-.19.06h-.13-.33a.06.06 0 0 1 .06 0h.47c.11 0 0 0 .09-.06l.06.07s.15 0 .16.05-.05 0 0 0h.11c.05 0-.06 0 0 0H292.34c.07 0 .13 0 .19.06 0-.06.08 0 .13-.06a.07.07 0 0 1 0 .07.07.07 0 0 1 .05 0v.21c.06 0 .12-.05.2 0s-.06-.14 0-.18 0 .08 0 .09 0 0 .05 0 0 0 0 .06.07 0 .08.06 0-.05 0-.06 0 .05.06.08.05 0 .05-.06v.05c0 .05.14 0 .11-.08.1-.07.21 0 .31 0 .06 0 .13 0 .18-.07a.09.09 0 0 1 0 .08c.05 0 .05-.05.12 0s0 0-.05 0 .07.06.14 0l.07.06v-.05a.14.14 0 0 1 .09 0v.09c.13.12.22-.19.32 0 0-.06-.07-.05 0-.13s.11.16.13.16.07-.14.15-.1 0-.13 0-.16.07.15 0 .18 0 0 0 .06.1 0 .08.09 0-.05 0-.07.11 0 .19 0 0-.07 0-.06 0-.07.12-.09 0 .14.06.09 0 .1 0 .13.13.06.17.08h.06v-.08-.2c0-.07.09 0 .1.06s0 .11-.07.12 0 0 .05 0 0-.12.12-.12 0 .12 0 .11v-.15c0-.05.06 0 .09 0 0-.06 0 0 .08-.07s0 0 0 .05.1.12.16.05 0 .11 0 .14.07.09.14 0 0-.07 0-.15l-.12.06.08-.12s-.08.05-.1 0 0 0 0-.11c0 .12.09-.08.15 0v.21c.08.1.15-.1.26-.05 0-.08.07 0 .1 0a.26.26 0 0 0 0 .14c0-.05.08 0 .09-.13l.05.09c.08 0 .1-.2.18-.18s0 .13 0 .19.05 0 .05 0 .08-.09.1 0 0-.11 0-.11.05-.05 0-.13c.09.23.25 0 .32.18l.19-.05s0-.22.14-.14-.05.07 0 .12c0 .25.11 0 .17.11.05.08.11-.1.19-.08a.43.43 0 0 1 .22-.21v.15c0 .1 0-.16.06-.19a.73.73 0 0 1 .07.21h-.06c0 .14.08 0 .11 0v.06c.09 0 .09-.17.19-.16v.13c.05-.15 0 .09.1 0v.16a1.09 1.09 0 0 1 .39-.16.67.67 0 0 1-.16.24s.12 0 .14-.08 0 .05 0 0 .1-.18.17-.18c0 .31.18.08.23.32.12-.12.25 0 .39 0v-.24l.11.14v.11c0 .05 0 .1.08.17 0-.09 0-.13.07-.09l-.06-.11c.1-.13.09.2.19.07v.07c.05 0 .19 0 .25-.19v.11c.13 0 .29-.21.39-.09v.06s0-.11.07-.05 0 .05 0 .06.06-.11.1-.07v.06c.12.07.19-.16.29-.2a.26.26 0 0 0 .15.25c.14 0 .25-.14.38-.21.08.17.28.07.42.16a.16.16 0 0 1 0-.14s.09-.11.08 0c0 .14.09.1.14.1v-.19c.13.26.35-.1.42.13 0-.05.07-.05.1-.09v.09a.39.39 0 0 0 .24 0v.07c.06 0 .08-.27.13-.28v.14c.11 0 .22.1.32 0s0 .05 0 .06.19.07.18-.1c0 .11.11 0 .17 0v.08c0-.11.05-.14.11-.17s0 .07 0 .05 0-.08.1 0v.05c.06 0 .05 0 .08-.08s.11 0 .12.08 0-.09.07-.07.14-.08.2 0h-.13c0 .07.06.07 0 .17.05-.06.13-.17.19-.14h.07c0 .05.07 0 .1 0s0-.05 0-.11h-.09s.05-.07.08 0v-.11c0 .09.12.13.13.19s.22 0 .27-.15.16 0 .17-.09 0 .07.05.05c.17.09.28-.18.48-.06.22 0 .45-.05.67 0h.64a.4.4 0 0 0-.11 0h-.2c.06 0-.11 0-.1-.06s-.15 0-.23 0h-.08c-.03 0-.07 0-.1.07s0-.05 0-.1-.09 0-.07.06 0 0-.05-.06 0 0-.07 0 0-.07-.08 0-.06-.08-.06-.08zm-1.49 0zm-.12 0s.02.05 0 .03zm.26.48v.03z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M304.84 368.7l.01-.01-.02-.01v.02h.01zM293.53 368.59v.01-.01zM302.81 368.07v.02l.02-.02h-.02z"
                        />
                        <path className="cls-59" d="M292.84 424.74zM292.55 424.75zM292.32 424.74zM296 424.47s0-.02 0 0zM294.87 424.71s0-.04 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M297.15 367.97h.01-.01z" />
                        <path className="cls-59" d="M295 424.67h-.05s-.02.02.05 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M291.33 368.47h-.01.01z" />
                        <path className="cls-59" d="M291.32 424.81zM291.28 424.82zM291.63 424.79zM291.72 424.78h-.09s.07.01.09 0zM292.11 424.89H292s0-.01.11 0zM292.34 424.93s.03.01 0 0zM294.07 425v.07s-.01-.07 0-.07z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M294.4 368.31l-.03-.04-.02.06.05-.02zM294.59 368.82l-.01.01.05-.02-.04.01z"
                        />
                        <path className="cls-59" d="M297.49 425.24v-.12s-.04.16 0 .12zM298.74 425.13c0 .06 0 .1.07 0s-.06-.02-.07 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M302.48 368.93l-.02.04.05-.03-.03-.01z" />
                        <path className="cls-59" d="M283.3 396.31zM283.3 396.45s0 .05 0 0v-.05a.38.38 0 0 0 0 .1zM283.2 398.41s0-.01 0 0zM283.11 399.62zM283 399.83zM283.2 398.41s-.01.01 0 0zM283.35 396.72z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M283.17 341.53v-.01l-.02-.01.02.02z" />
                        <path className="cls-59" d="M283.2 397.46h.05zM283.28 396.81zM283.14 398.17zM283.39 409.65z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M283.3 353.79v-.01.01z" />
                        <path className="cls-59" d="M282.84 400.21zM282.84 403.69c.1 0 .13.06.24 0s-.17-.05-.24 0zM283.35 396.73zM282.86 401.08zM283 400.43zM283 401.42s0 .01 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M282.99 345.43h.02v-.02l-.02.02z" />
                        <path className="cls-59" d="M283.51 408.58h-.05s.04.07.05 0zM283.34 396.72zM283.83 401.43v.06a.13.13 0 0 0 0-.06zM283.69 406.06zM283.84 401.66h-.08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M283.52 409c0-.05 0 0-.08 0s0 0 .07-.05-.05-.07-.05-.1 0-.12-.05-.17h-.07v-.06c0-.01 0 0 0 0h.06c.06 0-.06-.11 0-.15s0 .09.07 0v.06c.1-.05 0 0 .1 0s0-.08 0-.16-.06 0-.09 0 .18-.08.09-.16-.13 0-.08-.09h.08c0-.07-.12 0-.06-.12s0 .06 0 .05-.05 0 0-.08h.07c0-.08-.05-.17-.06-.26s.05 0 .07 0a.45.45 0 0 1 .1-.34h-.08H283.6c.02 0-.14-.21 0-.29 0-.06-.17-.07-.09-.12 0-.13 0-.28.11-.37-.13 0 .07-.13-.12-.14.1-.07.13-.05.2-.16s-.12 0-.14-.07h.11l-.11-.05h.12a.15.15 0 0 1-.08 0c0-.05.08-.13.13-.13l-.08-.12h.08c-.1-.06.12 0 0-.07h-.09a.11.11 0 0 0 .05-.15h.07v-.28a.22.22 0 0 1-.18 0h.12H283.84c.1 0 .12-.08 0-.11v-.22c0-.08-.08 0-.17-.06s.12-.13.12-.2-.09 0-.16 0c.1 0 .09-.07.16 0a.33.33 0 0 0-.09-.22h-.09s0-.05.09-.05c-.15-.12.29-.28.08-.38l-.1-.1c0-.05.07 0 .13 0-.16-.11 0-.17-.08-.26.3-.07 0-.25.17-.34H283.89h-.1c-.09-.21.1-.42.16-.63s-.36-.05-.2-.14h.13c-.15-.15 0-.31-.13-.46h.07c.09 0 0-.12-.08-.12h.11c.04 0-.12-.08 0-.1-.05 0 0-.1-.1-.08.05-.06-.05-.11 0-.15-.11 0 .06-.1-.11-.11.17 0 .14-.1.06-.14s.05 0 .12 0 0-.08-.12-.07c.2-.08-.17-.16.09-.2a1.11 1.11 0 0 1-.2-.34c.16 0 0 .12.19.11-.07-.1-.21-.16-.18-.26s.07 0 .1 0 0-.2-.08-.29 0-.05-.05 0c-.1 0-.21-.07-.27-.07.2 0 .05-.09.3 0h-.09.09c.09 0-.11-.05-.11-.1h.08c-.06 0-.13-.06-.1-.11s-.17-.15-.11-.24 0 0 .16 0v-.05c0-.05-.09-.09-.05-.12h.05v-.08c-.06 0-.14 0-.11-.05s0-.05.07-.07-.08 0-.05-.08h.14c-.09 0 0-.11-.12-.14h.09-.07 0v-.21c0-.07 0 .06.11 0s-.13-.2-.11-.3c-.13 0 .06-.07 0-.12h.06c0-.07 0-.14-.08-.23a.68.68 0 0 0 0-.14h-.07c.16-.12-.09-.24 0-.35v-.1h-.06a.08.08 0 0 1 0-.07c0 .05.06 0 .08 0 .06-.05-.08 0 0-.07s0-.05 0-.08 0 0 .06 0-.08-.07 0-.11 0 0 0 .06V397.55c-.1 0 0-.1-.08-.16s0 0 .07 0 0 0 0-.1v-.23a1.09 1.09 0 0 1-.05-.17.17.17 0 0 0 0-.1V396.62a.33.33 0 0 0 0-.12v.39c0 .09 0 0 .05.08h-.07v.13c0 .01 0 0 0 0v.09c0 .04 0-.05 0 0v.25c0 .06 0 .11-.06.16.06 0 .05.06.06.1s-.05 0-.07 0a.07.07 0 0 1 0 .05v.16c0 .06.14-.05.18 0h-.09-.06c-.06 0 0 0 0 0a.19.19 0 0 1-.06.07.06.06 0 0 1 .06 0c0 .05-.05 0-.08.05s0 0 .06 0 0 .12.07.09c.06.08-.05.18 0 .26 0 .05 0 .11.07.15s-.05 0-.08 0 0 0 0 .1-.06.06 0 .11-.08 0-.06.06h.05a.08.08 0 0 1 0 .07H283c-.12.1.19.19 0 .26.07 0 .05-.05.13 0s-.16.1-.16.11.14.06.1.13.13 0 .16 0-.15.06-.18 0 0 0-.06 0 0 .08-.09.07.06 0 .08 0 0 .09-.05.16h.07c-.05.09.06 0 .08.1s-.14 0-.09 0h-.13c-.03 0-.06.11-.07.14a.09.09 0 0 1 0 .05h.23c.07 0 0 .08-.07.08s-.1 0-.11-.05.12 0 .12.1-.12 0-.11 0h.15c.05 0 0 .06 0 .08.06 0 .05 0 .07.07s0 0-.05 0-.12.08-.05.13-.11 0-.14 0-.09.07 0 .13.07 0 .15 0l-.06-.1.12.06s-.05-.06 0-.08 0 0 .11 0c-.12 0 .08.08 0 .12h-.21c-.1.07.1.13.05.22.08 0 0 .05 0 .08a.42.42 0 0 0-.14 0s0 .07.13.08h-.09c0 .07.2.08.18.15s-.13 0-.19 0 .09.07 0 .09.11 0 .11 0h.13c-.23.07 0 .2-.19.26a.7.7 0 0 1 .06.17s.22 0 .14.11-.07 0-.12 0c-.25 0 0 .09-.11.14-.08 0 .1.09.08.15a.4.4 0 0 1 .21.19h-.15c-.1 0 .16 0 .19.05a1.42 1.42 0 0 1-.21.06v-.05c-.14 0 0 .06 0 .09h-.06c0 .08.17.08.16.17h.05c.15 0-.09 0 0 .08H283a.9.9 0 0 1 .18.16.66.66 0 0 1-.24-.13.11.11 0 0 0 .08.12s.18.08.18.14c-.31 0-.08.15-.32.2.12.1 0 .2 0 .32h.24l-.14.09h-.11c-.05 0-.1 0-.17.06.09 0 .13 0 .09.06l.11-.05c.13.09-.2.07-.07.16h-.07c0 .05 0 .17.19.21h-.11c-.02 0 .21.24.09.32h-.06s.11 0 .05.06h-.06s.11.05.07.08h-.06c-.07.11.16.16.2.25a.26.26 0 0 0-.25.12c0 .12.14.21.21.32-.17.07-.07.24-.16.35a.16.16 0 0 1 .14 0s.11.08 0 .07c-.14 0-.1.08-.1.12h.09c-.26.11.1.29-.13.35.05 0 .05.06.09.08h-.09a.27.27 0 0 0 0 .2h-.06c0 .06.26.07.27.12H283c0 .09-.09.18 0 .27s-.06 0-.06 0-.08.17.09.15c-.11 0 0 .09.05.14H283c.1.05.13.05.16.1s-.07 0-.05 0 .08 0 0 .09h-.05l.08.07c.08.07 0 .08-.08.09s.09 0 .07.06c-.05.08.08.11 0 .17a.34.34 0 0 1 0-.11c-.07 0-.07.05-.17 0 .06 0 .17.11.14.16s0 .06 0 .08.05 0 .11 0v-.06s.06 0 0 .07h.11c-.09 0-.13.1-.19.11s0 .18.15.23 0 .12.09.14-.07 0 0 0c-.09.15.18.24.06.4 0 .19.06.39 0 .57s0 .06 0 .09v1.05a.2.2 0 0 0 0-.07v-.06a.07.07 0 0 0 0-.05v-.09-.1-.07c0-.07 0-.1.05-.09s0-.12 0-.19v-.07c0-.02-.05-.06-.07-.09s.05 0 .09 0 0-.07-.06-.06 0 0 .06 0 0 0 0-.06.06 0 .05-.06-.03-.06-.03-.06zm0-1.25zm0-.1a.43.43 0 0 0 0 .05s-.05 0 0 0-.05-.06-.03-.08zm-.47.22zM283.11 407.87z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M283.21 342.05zM283.73 349.84h-.02l.02.01v-.01z"
                        />
                        <path className="cls-59" d="M283.39 397.82zM283.39 397.57zM283.39 397.38zM283.43 399.51s.04 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M283.83 345.09z" />
                        <path className="cls-59" d="M283.47 399.58s-.02-.01 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M283.33 340.21v-.01.01z" />
                        <path className="cls-59" d="M283.33 396.54zM283.32 396.5zM283.35 396.8zM283.36 396.88a.21.21 0 0 0 0-.08s-.02.06 0 .08zM283.25 397.2v-.07s.01-.02 0 .07zM283.22 397.4s-.02.02 0 0zM283.14 398.84h-.07.07z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M283.49 342.78l.04-.03-.07-.01.03.04zM282.98 342.94l-.01-.01.02.05-.01-.04z"
                        />
                        <path className="cls-59" d="M282.9 401.71h.1s-.14-.03-.1 0zM283 402.76c-.06 0-.1 0 0 .06s0-.05 0-.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M282.87 349.56l-.04-.02.04.04v-.02z" />
                        <path className="cls-59" d="M308.22 396.31zM308.22 396.45s0 .05 0 0v-.05zM308.11 398.41s0-.01 0 0zM308 399.62zM307.9 399.83s-.01-.01 0 0zM308.11 398.41s0 .01 0 0zM308.26 396.72z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M308.09 341.53v-.01l-.03-.01.03.02z" />
                        <path className="cls-59" d="M308.11 397.46h.05zM308.2 396.81zM308.05 398.17z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M308.21 353.79v-.01.01z" />
                        <path className="cls-59" d="M307.76 403.69c.09 0 .12.06.23 0 .01.01-.17-.05-.23 0zM308.26 396.73zM307.78 401.08zM307.94 400.43zM307.91 401.42s-.01.01 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M307.91 345.43h.02l-.01-.02-.01.02z" />
                        <path className="cls-59" d="M308.42 408.58s0 .07 0 0zM308.25 396.72zM308.75 401.43v.06a.14.14 0 0 0 0-.06zM308.6 406.06zM308.75 401.66h-.07z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M308.43 409c0-.05-.05 0-.07 0s0 0 .07-.05-.06-.07-.05-.1 0-.12 0-.17h-.07v-.06c0-.01 0 0 0 0h.07c.07 0-.07-.11-.05-.15s0 .09.08 0v.06c.1-.05 0 0 .09 0s0-.08 0-.16-.05 0-.09 0 .18-.08.1-.16-.14 0-.09-.09h.08c0-.07-.11 0-.05-.12s0 .06 0 .05v-.08h.08c0-.08-.06-.17-.07-.26s.05 0 .08 0a.49.49 0 0 1 .09-.34h-.07.05H308.6c.02 0-.14-.21-.05-.29 0-.06-.17-.07-.09-.12.05-.13 0-.28.11-.37-.13 0 .07-.13-.12-.14.1-.07.13-.05.21-.16s-.12 0-.14-.07h.1l-.11-.05h.06c-.07 0 .07-.13.13-.13l-.09-.12h.09c.03 0 .11 0 0-.07h-.08a.1.1 0 0 0 0-.15h.08v-.28a.25.25 0 0 1-.19 0h.12H308.67a.17.17 0 0 1 .1 0c-.07 0 .12-.08 0-.11v-.22c0-.08-.08 0-.16-.06s.12-.13.11-.2-.09 0-.15 0c.1 0 .09-.07.16 0a.42.42 0 0 0-.1-.22h-.09s0-.05.09-.05c-.15-.12.3-.28.09-.38l-.11-.1c0-.05.08 0 .14 0-.17-.11 0-.17-.09-.26.3-.07 0-.25.18-.34H308.82h-.1c-.08-.21.1-.42.16-.63s-.36-.05-.19-.14h.13c-.16-.15 0-.31-.14-.46h.07c.1 0 0-.12-.07-.12h.11c.04 0-.12-.08 0-.1s0-.1-.09-.08-.05-.11 0-.15c-.12 0 .05-.1-.11-.11.17 0 .13-.1.05-.14s.05 0 .12 0 0-.08-.12-.07c.2-.08-.16-.16.09-.2a1.37 1.37 0 0 1-.2-.34c.16 0 0 .12.19.11-.07-.1-.21-.16-.17-.26s.07 0 .09 0 0-.2-.08-.29 0-.05 0 0c-.1 0-.21-.07-.26-.07.2 0 0-.09.3 0a.12.12 0 0 0-.09 0h.09c.09 0-.11-.05-.12-.1h.09c-.07 0-.13-.06-.11-.11s.05 0 .05 0-.17-.15-.11-.24 0 0 .15 0v-.05h-.06c0-.05-.08-.09-.05-.12h.05v-.08c-.06 0-.15 0-.12-.05s0-.05.07-.07-.07 0 0-.08h.15c-.09 0 0-.11-.13-.14h.09-.07 0c0-.07-.05-.14 0-.21s0 .06.11 0-.12-.2-.1-.3c-.14 0 .06-.07 0-.12h.06c0-.07 0-.14-.08-.23s0-.1 0-.14 0 0-.07 0c.15-.12-.09-.24 0-.35v-.1h-.05a.08.08 0 0 1 0-.07c0 .05.07 0 .09 0 .07-.05-.08 0 0-.07s0-.05 0-.08-.08-.07 0-.11 0 0 0 .06v-.14c-.1 0 0-.1-.09-.16s0 0 .07 0 0 0 0-.1v-.23c0-.09 0-.09-.06-.17a.18.18 0 0 0 0-.1V396.6a.68.68 0 0 0 0-.12v.39c0 .09 0 0 .06.08h-.07v.13c0 .01 0 0 0 0v.09c0 .04 0-.05 0 0v.25c0 .06 0 .11-.06.16.06 0 0 .06.06.1s-.06 0-.07 0v.05h-.05c0 .05.06.1 0 .16s.14-.05.17 0h-.13-.06c-.06 0 0 0 0 0l-.07.07h.06s-.05 0-.07.05 0 0 .06 0h-.05c-.05 0 0 .12.07.09.06.08 0 .18 0 .26 0 .05 0 .11.06.15s0 0-.07 0 0 0 0 .1-.07.06 0 .11-.09 0-.07.06a.16.16 0 0 1 0 .07h-.09c-.12.1.18.19 0 .26.07 0 .05-.05.13 0s-.15.1-.16.11.14.06.1.13.13 0 .17 0-.15.06-.18 0h-.07s0 .08-.1.07.06 0 .08 0 0 .09 0 .16H308c-.05.09.07 0 .08.1s-.13 0-.09 0h-.13c-.03 0-.05.11-.07.14a.06.06 0 0 1 0 .05h.26c.06 0 0 .08-.06.08s-.11 0-.12-.05.12 0 .11.1-.11 0-.1 0h.14c.04 0 0 .06 0 .08.06 0 .06 0 .07.07s-.11.08 0 .13-.12 0-.15 0-.08.07 0 .13.06 0 .14 0l-.05-.1.12.06s-.05-.06 0-.08.05 0 .12 0c-.13 0 .07.08 0 .12h-.21c-.09.07.11.13.05.22.09 0 0 .05.05.08a.49.49 0 0 0-.15 0c.06 0 0 .07.14.08h-.1c0 .07.21.08.18.15s-.13 0-.19 0 .1.07 0 .09.11 0 .1 0h.14c-.24.07 0 .2-.19.26a.64.64 0 0 1 .05.17c-.07.06.22 0 .14.11s-.06 0-.11 0c-.25 0 0 .09-.12.14-.09 0 .09.09.08.15a.34.34 0 0 1 .2.19h-.15c-.15 0 .16 0 .19.05a.93.93 0 0 1-.21.06v-.05c-.14 0 0 .06 0 .09h-.06c0 .08.18.08.17.17.16 0-.08 0 0 .08h-.16s.16.11.18.16a.89.89 0 0 1-.24-.13.12.12 0 0 0 .09.12s-.05 0 0 0 .18.08.18.14c-.3 0-.08.15-.31.2.11.1 0 .2 0 .32h.25l-.14.09h-.11c-.06 0-.1 0-.16.06s.12 0 .09.06l.11-.05c.13.09-.2.07-.07.16h-.08c.05.05 0 .17.19.21h-.11c-.02 0 .21.24.1.32h-.06s.11 0 .05.06h-.06s.1.05.07.08h-.07c-.07.11.16.16.2.25a.24.24 0 0 0-.24.12c0 .12.14.21.2.32-.17.07-.06.24-.15.35a.17.17 0 0 1 .14 0s.11.08 0 .07c-.14 0-.1.08-.1.12h.18c-.26.11.11.29-.12.35 0 0 0 .06.09.08h-.09a.27.27 0 0 0 0 .2h-.07c0 .06.26.07.27.12h-.13c0 .09-.1.18 0 .27s-.05 0-.06 0-.07.17.1.15c-.11 0 0 .09 0 .14h-.08c.1.05.13.05.16.1s-.06 0 0 0 .07 0 0 .09h-.05l.08.07c.08.07 0 .08-.08.09s.1 0 .08.06H308c0 .08.09.11 0 .17v-.11s-.08.05-.17 0 .16.11.14.16 0 .06 0 .08.06 0 .11 0v-.06s.06 0 0 .07h.11c-.09 0-.14.1-.19.11s0 .18.15.23 0 0-.05 0 0 .12.09.14-.07 0-.05 0c-.08.15.18.24.07.4 0 .19.05.39 0 .57s0 .06 0 .09V409.66a.2.2 0 0 0 0-.07v-.08-.05-.09-.1a.14.14 0 0 1 0-.07c0 .05 0-.1.06-.09s0-.12 0-.19v-.07c0-.02 0-.06-.07-.09s0 0 .09 0 0-.07-.06-.06h.06c-.06 0 0 0 0-.06s.06 0 .05-.06.09.42.09.42zm0-1.25zm0-.1v.05s-.05-.06-.03-.08zm-.47.22zM308 407.87z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M308.12 342.05h.01-.01zM308.64 349.84h-.02l.02.01v-.01z"
                        />
                        <path className="cls-59" d="M308.31 397.82zM308.3 397.57s.01-.01 0 0zM308.31 397.38zM308.58 400.42s.02.01 0 0zM308.34 399.51s.05 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M308.75 345.09z" />
                        <path className="cls-59" d="M308.38 399.58s-.01-.01 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M308.24 340.21v-.01.01z" />
                        <path className="cls-59" d="M308.24 396.54zM308.23 396.5zM308.26 396.8zM308.27 396.88v-.08s-.01.06 0 .08zM308.16 397.2v-.07s.01-.02 0 .07zM308.13 397.4s-.01.02 0 0zM308.05 398.84H308h.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M308.4 342.78l.04-.03-.06-.01.02.04zM307.89 342.94l-.01-.01.02.05-.01-.04z"
                        />
                        <path className="cls-59" d="M307.81 401.71h.12s-.15-.03-.12 0zM307.93 402.76c-.07 0-.11 0 0 .06s.01-.05 0-.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M307.79 349.56l-.04-.02.03.04.01-.02z" />
                        <path className="cls-59" d="M271.09 410.58zM271.09 410.71s0 .05 0 0v-.06zM271 412.67zM270.89 413.88s-.01.01 0 0zM270.77 414.09zM271 412.67s0 .02 0 0zM271.14 411z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M270.96 355.8v-.01l-.02-.01.02.02z" />
                        <path className="cls-59" d="M271 411.72zM271.07 411.07zM270.93 412.43z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M271.09 368.05z" />
                        <path className="cls-59" d="M270.63 418c.1 0 .13.07.24 0-.05 0-.18-.1-.24 0zM271.13 411zM270.65 415.34zM270.81 414.69zM270.79 415.68s-.02.01 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M270.78 359.7l.02-.01v-.01l-.02.02z" />
                        <path className="cls-59" d="M271.29 422.85s0 .06 0 0zM271.13 411zM271.62 415.7v.05a.08.08 0 0 0 0-.05zM271.48 420.32zM271.62 415.92h-.07z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M271.3 423.23c0-.05 0 0-.07 0s0 0 .07-.05-.05-.08-.05-.1v-.17h-.07v-.05h.07c.07 0-.07-.11-.05-.14s0 .08.08 0v.06h.1c.1 0 0-.09 0-.16s-.06 0-.1 0 .18-.08.1-.16-.14 0-.09-.08h.09c0-.07-.12 0-.06-.11s0 .05 0 0-.05 0-.05-.07h.08c0-.08-.06-.16-.07-.25s0 0 .08 0a.44.44 0 0 1 .1-.34h-.08H271.42c.02 0-.14-.21 0-.28 0-.06-.17-.06-.09-.12 0-.13 0-.27.11-.37-.14 0 .07-.13-.12-.14.09-.07.13-.05.2-.15s-.12 0-.14-.08h.1l-.1-.05h.12-.08c-.05-.05.08-.12.13-.12l-.08-.12h.08c.03 0 .11 0 0-.07h-.09a.1.1 0 0 0 0-.14h.07v-.29c0-.1-.17 0-.18 0h.11H271.5v-.05h.1c-.07 0 .13-.08 0-.1v-.22c0-.08-.08 0-.17-.06s.12-.12.11-.19-.09 0-.15 0c.1 0 .09-.08.16 0a.35.35 0 0 0-.1-.22h-.09c-.04 0 0-.05.09 0-.15-.12.3-.28.09-.38l-.11-.1c0-.05.08 0 .14 0-.17-.11 0-.17-.08-.26.3-.07 0-.24.17-.34h-.07c-.07 0 0 0 .05-.05s-.06 0-.1 0c-.08-.2.11-.42.17-.63s-.37 0-.2-.14h.13c-.16-.16 0-.32-.13-.47h.06c.1 0 0-.11-.07-.12s.07 0 .11 0-.12-.08 0-.09 0-.1-.1-.08c0-.05-.05-.1 0-.15-.12 0 .06-.1-.11-.11.17 0 .13-.1.05-.13s.06 0 .13 0 0-.08-.13-.07c.2-.08-.16-.15.09-.19a1.53 1.53 0 0 1-.19-.35c.16 0 0 .12.19.12-.08-.11-.22-.17-.18-.27s.07 0 .1 0 0-.2-.09-.29c-.1 0-.22-.07-.27-.08.2 0 0-.09.3 0a.11.11 0 0 0-.09 0h.09c.09 0-.11 0-.11-.1h.08c-.06 0-.13-.06-.1-.11s-.17-.15-.11-.24 0 0 .16 0v-.05h-.06s-.08-.08 0-.12v-.08c-.06 0-.14 0-.11-.06s0 0 .06-.06-.07 0 0-.08h.14c-.09 0 0-.1-.12-.13s0 0 .08 0-.13 0-.08-.06c0-.08-.05-.14 0-.21s0 .06.12 0-.13-.2-.11-.29c-.13 0 .06-.07 0-.11h.05c0-.07 0-.13-.08-.23a.68.68 0 0 0 0-.14h-.07c.16-.13-.09-.24 0-.36v-.09h-.06a.06.06 0 0 1 0-.06h.08c.07-.05-.08 0 0-.08s0 0 0-.07-.08-.08 0-.12v.06a.1.1 0 0 0 0-.07v-.06c-.1 0 0-.09-.08-.16s0 0 .07 0 0-.05 0 0v-.09c0-.04 0 0 0 0v-.24c0-.09 0-.09-.06-.16a.41.41 0 0 0 0-.11v-.16a.89.89 0 0 1 0-.11.07.07 0 0 1 0 .05V411.17c0 .09 0 0 .06.07h-.07v.14c0 .01 0 0 0 0v.1c0 .04 0-.05 0 0v.24c0 .06 0 .11-.06.16.06 0 0 .07.06.11a.08.08 0 0 1-.07 0 .1.1 0 0 1 0 .05H271s.05.1 0 .17.14-.05.17 0-.07 0-.08 0h-.05-.06c-.06 0 0 0 0 0a.11.11 0 0 1-.06.07H270.9c-.02 0 0 .05.06.05h-.05s0 .12.07.1c.07.09 0 .18 0 .26s0 .12.07.15 0 0-.08 0 .05 0 0 .1-.07.06 0 .12-.09 0-.07.06a.11.11 0 0 1 0 .08h-.09c-.12.11.18.19 0 .27.06 0 .05-.06.12 0s-.15.09-.15.11.14.06.1.12.13 0 .16 0-.15.06-.18 0h-.06s0 .09-.09.07.05 0 .07 0 0 .1 0 .16h.06c0 .09.07 0 .09.1s-.14 0-.09.05-.11 0-.14 0-.05.1-.07.13a.06.06 0 0 1 0 .05h.03.2c.07 0 0 .07-.07.08 0-.08-.1 0-.12-.06v.05c-.1.07.12 0 .11.11s-.11 0-.1 0h.15c.05 0 0 .05 0 .07.06 0 .05 0 .07.06s0 0-.06 0-.11.09 0 .14-.12 0-.14 0-.09.06 0 .12.07 0 .15 0l-.06-.1.12.07s-.05-.07 0-.08.05 0 .12 0c-.13 0 .07.08 0 .13h-.21c-.1.08.1.13.05.22.09 0 0 .06 0 .09a.24.24 0 0 0-.15 0c.06 0 0 .06.14.07h-.1c0 .08.21.09.19.16s-.14 0-.19 0 0 .05 0 .05.1.06 0 .08.11 0 .1 0h.13c-.23.07 0 .2-.19.27a.52.52 0 0 1 .06.16s.21 0 .13.11-.06 0-.11 0c-.25 0 0 .09-.11.14-.08 0 .1.1.08.16a.35.35 0 0 1 .21.18h.03a.44.44 0 0 1-.21.06v-.05c-.14 0 0 .07 0 .09h-.06c0 .08.17.08.16.16h.05c.15.05-.09 0 0 .08h-.15s.15.1.18.16a.82.82 0 0 1-.25-.14.12.12 0 0 0 .09.12s-.05 0 0 0 .19.08.18.14c-.3 0-.07.16-.31.2.11.1 0 .21 0 .33h.25l-.15.08h-.1c-.05 0-.11 0-.17.07.09 0 .12 0 .09.05l.11-.05c.13.09-.2.08-.07.17h-.08c.05 0 0 .16.2.21h-.11c-.01 0 .2.23.09.32h-.06s.11 0 .05.06h-.06s.1.05.07.08h-.07c-.07.1.16.16.2.24a.26.26 0 0 0-.24.13c0 .12.14.2.21.31-.18.07-.07.24-.16.35a.22.22 0 0 1 .14 0s.11.07 0 .07c-.14 0-.1.07-.1.11h.18c-.26.11.11.29-.12.35.05 0 .05.06.09.09h-.09a.3.3 0 0 0 0 .21h-.07s.27.06.27.11h-.13c0 .09-.1.19 0 .27h-.06s-.07.16.1.14c-.11 0 0 .1 0 .15h-.08c.11 0 .13 0 .16.1s-.06 0 0 0 .07 0 0 .09h-.05c0 .05 0 0 .08.07s0 .09-.09.09.1 0 .08.06h-.05c0 .08.09.12 0 .17h-.05v-.11s-.07.05-.17 0c.06 0 .17.11.14.16-.05 0 0 .06 0 .09s.05 0 .1 0v-.07s.07 0 0 .07h.11c-.09 0-.14.1-.19.11s0 .17.15.22 0 .13.09.14-.07 0-.05 0c-.09.15.18.24.06.41 0 .18.05.38 0 .56s0 .06 0 .09v.06c0 .08-.05.13 0 .23s0 .11 0 .1V424.06a.15.15 0 0 0 0-.06v-.05-.05c0-.05 0 0 0 0v-.09-.09a.15.15 0 0 1 0-.08c0 .05 0-.1.06-.08s0-.13 0-.19v-.07s0-.05-.07-.08 0 0 .1 0 0-.08-.06-.06 0 0 .06-.05 0 0-.05-.05.07 0 .05-.07-.01.24-.01.24zm0-1.24zm0-.11a.09.09 0 0 0 0 .05s-.05-.03-.02-.05zm-.48.22zM270.89 422.13z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M271 356.32h-.01l.01-.01v.01zM271.52 364.1h-.03l.02.01.01-.01z"
                        />
                        <path className="cls-59" d="M271.18 412.08zM271.18 411.83zM271.18 411.64zM271.46 414.68s.01.01 0 0zM271.21 413.78s.05 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M271.62 359.35v.01-.01z" />
                        <path className="cls-59" d="M271.25 413.85v-.05c0-.05-.01.03 0 .05z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M271.12 354.47v-.01h-.01l.01.01z" />
                        <path className="cls-59" d="M271.11 410.8zM271.11 410.77zM271.14 411.06zM271.15 411.14v-.07s-.02.05 0 .07zM271 411.46v-.06.06zM271 411.66s0 .03 0 0zM270.92 413.11h-.06s.02-.01.06 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M271.27 357.04l.05-.02-.07-.02.02.04zM270.76 357.21l-.01-.02.03.05-.02-.03z"
                        />
                        <path className="cls-59" d="M270.69 416h.12s-.16-.06-.12 0zM270.8 417c-.06 0-.1 0 0 .06s.01-.06 0-.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M270.66 363.82l-.04-.02.03.04.01-.02z" />
                        <path className="cls-59" d="M295.55 410.58zM295.55 410.71a.13.13 0 0 1 0-.06.31.31 0 0 0 0 .09v-.03zM295.45 412.67zM295.36 413.88s-.01.01 0 0zM295.24 414.09s-.01 0 0 0zM295.45 412.67s-.01.02 0 0zM295.6 411z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M295.42 355.8v-.01l-.02-.01.02.02z" />
                        <path className="cls-59" d="M295.45 411.72h.05zM295.53 411.07zM295.39 412.43zM295.64 423.92z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M295.55 368.05z" />
                        <path className="cls-59" d="M295.09 418c.1 0 .13.07.24 0s-.17-.1-.24 0zM295.6 411zM295.11 415.34zM295.28 414.69zM295.25 415.68s-.02.01 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M295.25 359.7l.02-.01-.01-.01-.01.02z" />
                        <path className="cls-59" d="M295.76 422.85h-.05s.04.06.05 0zM295.59 411zM296.08 415.7v.05a.07.07 0 0 0 0-.05zM295.94 420.32zM296.09 415.92h-.07z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M295.77 423.23c0-.05 0 0-.08 0s.05 0 .08-.05-.06-.08 0-.1 0-.12 0-.17h-.07v-.05h.06c.06 0-.06-.11 0-.14s0 .08.07 0v.06h.09c.09 0 0-.09 0-.16s-.05 0-.09 0 .18-.08.09-.16-.13 0-.08-.08h.08c0-.07-.12 0-.05-.11s0 .05 0 0v-.07h.08c0-.08-.06-.16-.07-.25s.05 0 .08 0a.4.4 0 0 1 .09-.34h-.08a.06.06 0 0 1 .06 0H296.02c.03 0-.14-.21 0-.28 0-.06-.18-.06-.09-.12.05-.13 0-.27.11-.37-.13 0 .07-.13-.12-.14.1-.07.13-.05.2-.15s-.12 0-.13-.08h.1l-.11-.05h.13-.08c0-.05.08-.12.14-.12l-.09-.12a.1.1 0 0 1 .08 0c-.1-.07.12 0 0-.07h-.08a.09.09 0 0 0 0-.14h.07v-.29c0-.1-.17 0-.18 0h.03H296.04v-.05h.1c-.08 0 .12-.08 0-.1v-.22c0-.08-.08 0-.16-.06s.12-.12.11-.19-.09 0-.15 0 .09-.08.15 0a.33.33 0 0 0-.09-.22h-.09c-.03 0 0-.05.09 0-.15-.12.29-.28.09-.38l-.11-.1c0-.05.07 0 .14 0-.17-.11 0-.17-.09-.26.3-.07 0-.24.17-.34h-.07c-.07 0 0 0 .06-.05s-.06 0-.1 0c-.09-.2.1-.42.16-.63s-.36 0-.2-.14h.13c-.15-.16 0-.32-.13-.47h.07c.09 0 0-.11-.07-.12s.06 0 .1 0-.12-.08 0-.09 0-.1-.1-.08c.05-.05 0-.1 0-.15-.12 0 .05-.1-.12-.11.18 0 .14-.1.06-.13s.05 0 .12 0 0-.08-.12-.07c.2-.08-.17-.15.09-.19a1.28 1.28 0 0 1-.2-.35c.16 0 0 .12.19.12-.07-.11-.21-.17-.18-.27s.07 0 .1 0 0-.2-.08-.29 0 0-.05 0c-.1 0-.21-.07-.26-.08.2 0 0-.09.3 0a.14.14 0 0 0-.1 0h.09c.09 0-.11 0-.11-.1h.09c-.07 0-.13-.06-.11-.11s-.17-.15-.12-.24 0 0 .16 0v-.05s-.08-.08-.05-.12h.05v-.08c-.06 0-.14 0-.11-.06s0 0 .07-.06-.07 0-.05-.08h.15c-.1 0 0-.1-.13-.13s0 0 .08 0-.14 0-.08-.06c0-.08-.05-.14 0-.21s0 .06.11 0-.13-.2-.11-.29c-.13 0 .07-.07 0-.11h.06c0-.07 0-.13-.08-.23s0-.1 0-.14 0 0-.06 0c.15-.13-.09-.24 0-.36v-.09h-.06a.08.08 0 0 1 0-.06h.09c.07-.05-.08 0 0-.08a.15.15 0 0 1 0-.07h.06c.06 0-.08-.08 0-.12s0 .05 0 .06v-.13c-.1 0 0-.09-.09-.16s0 0 .07 0 0-.05 0 0v-.09c0-.04 0 0 0 0v-.24c0-.09-.05-.09-.06-.16a.21.21 0 0 0 0-.11v-.16a.53.53 0 0 0 0-.11.07.07 0 0 1 0 .05V411.17c0 .09 0 0 .05.07h-.07v.14c0 .01 0 0 0 0v.1c0 .04 0-.05 0 0v.24c0 .06 0 .11-.06.16.06 0 0 .07.05.11a.06.06 0 0 1-.06 0 .1.1 0 0 1 0 .05v.17c0 .07.14-.05.17 0a.09.09 0 0 1-.09 0h-.06c-.06 0 0 0 0 0a.09.09 0 0 1-.06.07H295.52c-.02 0 0 .05.06.05h-.05s0 .12.07.1c.06.09-.05.18 0 .26s0 .12.06.15-.05 0-.08 0 0 0 0 .1-.07.06 0 .12-.09 0-.07.06h.05a.11.11 0 0 1 0 .08h-.09c-.12.11.19.19 0 .27.07 0 .05-.06.13 0s-.16.09-.16.11.14.06.1.12.13 0 .17 0-.16.06-.18 0 0 0-.07 0 0 .09-.1.07.06 0 .08 0 0 .1-.05.16h.07c-.05.09.07 0 .08.1s-.13 0-.09.05-.1 0-.13 0-.06.1-.07.13a.05.05 0 0 1 0 .05h.03.2c.07 0 0 .07-.06.08s-.11 0-.12-.06 0 0 0 .05c-.1.07.11 0 .11.11s-.12 0-.1 0h.14c.04 0 0 .05 0 .07.06 0 .05 0 .07.06s0 0-.05 0-.11.09 0 .14-.12 0-.15 0-.09.06 0 .12.06 0 .14 0l-.05-.1.12.07s-.06-.07 0-.08.05 0 .12 0c-.13 0 .07.08 0 .13h-.21c-.09.08.11.13.05.22.08 0 0 .06 0 .09a.2.2 0 0 0-.14 0s0 .06.14.07h-.1c0 .08.21.09.18.16s-.13 0-.19 0 0 .05 0 .05.1.06 0 .08.11 0 .1 0h.13c-.23.07 0 .2-.18.27a.49.49 0 0 1 .05.16s.22 0 .14.11-.07 0-.11 0c-.26 0 0 .09-.12.14-.09 0 .09.1.07.16a.32.32 0 0 1 .21.18H295.71a.48.48 0 0 1-.21.06v-.05c-.14 0 0 .07 0 .09h-.06c0 .08.18.08.16.16h.05c.15.05-.09 0 0 .08h-.16a.67.67 0 0 1 .18.16.89.89 0 0 1-.24-.14.12.12 0 0 0 .09.12s-.06 0 0 0 .18.08.18.14c-.31 0-.08.16-.31.2.11.1-.05.21 0 .33h.25l-.14.08h-.11c-.05 0-.1 0-.16.07s.12 0 .09.05l.11-.05c.13.09-.2.08-.08.17h-.07s0 .16.19.21h-.11c-.02 0 .21.23.09.32h-.05s.1 0 .05.06h-.06s.1.05.06.08h-.06c-.07.1.16.16.2.24a.23.23 0 0 0-.24.13c0 .12.15.2.21.31-.17.07-.06.24-.15.35a.19.19 0 0 1 .13 0s.11.07 0 .07c-.13 0-.09.07-.1.11h.19c-.26.11.1.29-.13.35.05 0 .05.06.1.09h-.1a.37.37 0 0 0 0 .21h-.06s.26.06.27.11h-.13c0 .09-.1.19 0 .27h-.06s-.07.16.09.14c-.11 0 0 .1.05.15h-.08c.1 0 .13 0 .16.1s-.06 0 0 0 .07 0 0 .09h-.05c0 .05 0 0 .08.07s0 .09-.08.09.09 0 .08.06h-.05c-.05.08.09.12 0 .17v-.11c-.06 0-.07.05-.16 0s.16.11.13.16 0 .06 0 .09.06 0 .11 0v-.07s.06 0 0 .07h.1c-.09 0-.13.1-.18.11s0 .17.15.22 0 0-.05 0 0 .13.1.14-.07 0-.06 0c-.09.15.18.24.06.41 0 .18.06.38 0 .56s0 .06 0 .09V424.06v-.14-.05c0-.05 0 0 0 0v-.09-.09-.08c0-.03 0-.1.05-.08s0-.13 0-.19v-.07c0-.07 0-.05-.07-.08s.05 0 .09 0 0-.08-.06-.06 0 0 .06-.05 0 0 0-.05.06 0 .05-.07-.27.27-.27.27zm0-1.24zm0-.11v.05h-.05zm-.47.22zM295.36 422.13z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M295.46 356.32l.01-.01-.01.01zM295.98 364.1h-.02l.02.01v-.01z"
                        />
                        <path className="cls-59" d="M295.65 412.08zM295.64 411.83zM295.65 411.64zM295.92 414.68zM295.68 413.78s.04 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M296.08 359.35v.01-.01z" />
                        <path className="cls-59" d="M295.72 413.85v-.05s-.02.03 0 .05z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M295.58 354.47v-.01.01z" />
                        <path className="cls-59" d="M295.58 410.8zM295.57 410.77zM295.6 411.06zM295.61 411.14v-.07s-.01.05 0 .07zM295.5 411.46v-.06s.01-.02 0 .06zM295.47 411.66s-.01.03 0 0zM295.39 413.11h-.07s.03-.01.07 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M295.74 357.04l.04-.02-.06-.02.02.04zM295.23 357.21l-.01-.02.02.05-.01-.03z"
                        />
                        <path className="cls-59" d="M295.15 416h.12s-.15-.06-.12 0zM295.26 417c-.06 0-.1 0 0 .06s.02-.06 0-.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M295.12 363.82l-.03-.02.03.04v-.02z" />
                        <path className="cls-59" d="M295.55 389.23zM295.55 389.3a.09.09 0 0 0 0 .05zM295.45 390.28zM295.36 390.89zM295.24 391s-.01 0 0 0zM295.45 390.28s-.01.01 0 0zM295.6 389.44z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M295.42 333.67l-.02-.01.02.01z" />
                        <path className="cls-59" d="M295.45 389.81zM295.39 390.16zM295.64 395.9z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M295.55 339.8z" />
                        <path className="cls-59" d="M295.09 392.92h.24a1.91 1.91 0 0 0-.24 0zM295.6 389.44z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M295.33 336.58h.01-.01z" />
                        <path className="cls-59" d="M295.11 391.62zM295.28 391.29zM295.25 391.79s-.02 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M295.25 335.62h.02l-.01-.01-.01.01z" />
                        <path className="cls-59" d="M295.76 395.37h-.05s.04.03.05 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M295.59 333.1h.01-.01z" />
                        <path className="cls-59" d="M296.08 391.79zM295.94 394.11zM296.09 391.9h-.07zM295.77 395.56h0c.03 0-.06 0 0 0s0-.07 0-.09h-.07.06c.06 0-.06-.05 0-.07s0 0 .07 0h.09c.09 0 0 0 0-.08h-.09c-.06-.06.18-.05.09-.08s-.13 0-.08-.05h.08s-.12 0-.05-.06h.08s-.06-.09-.07-.13h.08c0-.06 0-.12.09-.17h-.08.06-.09.08c-.07 0-.14-.11 0-.15s-.18 0-.09-.06c.05-.07 0-.14.11-.19-.13 0 .07-.06-.12-.07.1 0 .13 0 .2-.08s-.12 0-.13 0h.1-.11.02-.08s.08-.07.14-.07l-.09-.06h.08c-.1 0 .12 0 0 0h-.08c.06 0 .07-.05 0-.08h.07v-.14c0-.05-.17 0-.18 0h.14-.13.23c-.08 0 .12 0 0-.06v-.11c0-.04-.08 0-.16 0s.12-.06.11-.1-.09 0-.15 0h.15c.06 0 0-.06-.09-.11h-.09.09c-.15-.06.29-.14.09-.19l-.11-.05h.14c-.17-.06 0-.09-.09-.13.3 0 0-.13.17-.17H296c-.09-.1.1-.21.16-.31s-.36 0-.2-.07h.13c-.15-.08 0-.16-.13-.23h.07c.09 0 0-.06-.07-.06h.1c.06 0-.12 0 0-.05s0-.05-.1 0c.05 0 0-.06 0-.08-.12 0 .05-.05-.12-.05.18 0 .14-.05.06-.07s.05 0 .12 0h-.12c.2 0-.17-.07.09-.09a.72.72 0 0 1-.2-.17c.16 0 0 .06.19.05-.07-.05-.21-.08-.18-.13s.07 0 .1 0 0-.1-.08-.14 0 0-.05 0a.88.88 0 0 1-.26 0c.2 0 0-.05.3 0a.22.22 0 0 0-.1 0h.09s-.11 0-.11-.05h.09c-.07 0-.13 0-.11-.06s-.17-.07-.12-.12 0 0 .16 0-.08 0-.05-.06h.05-.11.07-.05.15c-.1 0 0-.05-.13-.06h.1-.08s-.05-.07 0-.1 0 0 .11 0-.13-.1-.11-.15c-.13 0 .07 0 0-.06h.06s0-.06-.08-.11 0-.05 0-.08h-.06c.15-.06-.09-.12 0-.17v-.05h-.06c-.06 0 0 0 0 0h.09c.07 0-.08 0 0 0h.06c.06 0-.08 0 0-.05-.1 0 0 0-.09-.08s0 0 .07 0 0 0 0-.05v-.12c0-.05-.05-.05-.06-.08v-.05a.14.14 0 0 1 0-.06v-.06V390.14c0 .05 0 0 .05 0h-.07v.18c0 .06 0 .06-.06.08.06 0 0 0 .05.05h-.06v.08c0 .03.14 0 .17 0h-.15-.06.06H295.46s0 .06.07 0c.06 0-.05.09 0 .13s0 .06.06.08h-.08v.05c0 .05 0 0 0 0s-.07 0 0 .06-.09 0-.07 0h.05-.09c-.12.05.19.09 0 .13h.13a.71.71 0 0 1-.16.05c-.06 0 .14 0 .1.07a.33.33 0 0 1 .17 0h-.18c-.02 0 0 0 0 0a.08.08 0 0 0-.07 0h-.1a.08.08 0 0 0 .08 0c-.06 0 0 0-.05.07h.07H295.38a.19.19 0 0 1-.13 0c.07 0-.06.06-.07.07h.03a1.48 1.48 0 0 1 .2 0h-.18c-.01 0 0 0 0 0-.1 0 .11 0 .11.05s-.12 0-.1 0h.14c.04 0 0 0 0 0h.07-.05c.11 0-.11 0 0 .07h-.15c.08 0-.09 0 0 .06a.23.23 0 0 1 .14 0l-.05-.05h.12s-.06 0 0 0a.17.17 0 0 0 .12 0c-.13 0 .07 0 0 .06h-.21c-.09 0 .11.06.05.11.08 0 0 0 0 0h-.14.14-.1s.21 0 .18.08a1 1 0 0 1-.19 0s.1 0 0 .05.11 0 .1 0a.42.42 0 0 0 .13 0c-.23 0 0 .1-.18.13 0 0 .05.06.05.08h.14-.11c-.26 0 0 .05-.12.07-.09 0 .09 0 .07.07a.39.39 0 0 1 .21.1H295.64a.86.86 0 0 1-.21 0c-.14 0 0 0 0 0h-.06s.18 0 .16.08h.05c.15 0-.09 0 0 0h-.16l.18.08a1 1 0 0 1-.24-.06s0 .05.09.05c.12 0 .18 0 .18.07-.31 0-.08.07-.31.1.11 0-.05.1 0 .16h.25l-.14.05H295.25h.11c.13.05-.2 0-.08.08H295s0 .08.19.1h-.11c0 .06.21.12.09.16h-.05.05-.06.06-.06c-.07.05.16.08.2.12-.17 0-.22 0-.24.06 0 .06.15.11.21.16-.17 0-.06.12-.15.18a.28.28 0 0 1 .13 0s.11 0 0 0c-.13 0-.09 0-.1.06h.19c-.26.06.1.14-.13.17l.1.05h-.1v.1h-.06s.26 0 .27.06h-.13c0 .05-.1.09 0 .14h-.06s-.07.08.09.07c-.11 0 0 .05.05.07h-.08c.1 0 .13 0 .16.05s.07 0 0 0h-.05.08c.08 0 0 .05-.08.05h.08-.05c-.05 0 .09.05 0 .08v-.06h-.16c-.09 0 .16.05.13.08s.06 0 .11 0 .06 0 0 0h.1a1.32 1.32 0 0 1-.18.05s0 .09.15.12 0 0-.05 0 0 .06.1.06h-.06c-.09.08.18.12.06.2 0 .1.06.19 0 .29s0 .07 0 .12V395.28s0-.05.05-.05 0-.06 0-.09 0 0-.07 0h.09c-.06 0 0 0 0 0h.05c-.01 0 .01.42.01.42zm0-.62zm0-.05h-.05.02zm-.47.11zM295.36 395z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M295.46 333.93h.01-.01zM295.98 337.83h-.02.02z"
                        />
                        <path className="cls-59" d="M295.65 390zM295.64 389.86zM295.65 389.76zM295.92 391.29zM295.68 390.83s.04 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M296.08 335.45z" />
                        <path className="cls-59" d="M295.72 390.87s-.02-.01 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M295.58 333.01z" />
                        <path className="cls-59" d="M295.58 389.35zM295.57 389.33zM295.6 389.48zM295.61 389.52s-.01-.01 0 0zM295.5 389.68s.01-.05 0 0zM295.47 389.78zM295.39 390.5z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M295.74 334.3l.04-.02h-.06l.02.02zM295.23 334.38l-.01-.01.02.02-.01-.01z"
                        />
                        <path className="cls-59" d="M295.15 391.93zM295.26 392.46c-.06 0-.1 0 0 0s.02 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M295.12 337.69l-.03-.01.03.02v-.01z" />
                        <path className="cls-59" d="M283.18 425.77zM283.18 425.84v-.07zM283.08 426.82zM283 427.42zM282.87 427.53s-.01 0 0 0zM283.08 426.82zM283.23 426z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M283.05 370.21l-.02-.01.02.01z" />
                        <path className="cls-59" d="M283.08 426.34h.05-.05zM283.16 426zM283 426.7zM283.27 432.44z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M283.18 376.34z" />
                        <path className="cls-59" d="M282.72 429.46h.24a.64.64 0 0 0-.24 0zM283.23 426z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M282.96 373.12h.01-.01z" />
                        <path className="cls-59" d="M282.74 428.15zM282.91 427.83zM282.88 428.32s-.02.01 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M282.88 372.16h.02l-.01-.01-.01.01z" />
                        <path className="cls-59" d="M283.39 431.91h-.05s.04.03.05 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M283.22 369.63l.01.01v-.01h-.01z" />
                        <path className="cls-59" d="M283.71 428.33zM283.57 430.64zM283.72 428.44h-.07zM283.4 432.1h0c.03 0-.06 0 0-.05s0-.06 0-.08h-.08.06c.06 0-.06-.06 0-.07s0 0 .07 0h.09c.09 0 0 0 0-.08h-.09c-.06-.05.18 0 .09-.08s-.13 0-.08 0h.08s-.12 0-.05-.06h.07s-.05-.08-.06-.12h.08c0-.06 0-.12.09-.17h-.08.06-.09.08c-.07 0-.14-.1 0-.14s-.17 0-.08-.06c.05-.06 0-.13.11-.18-.13 0 .07-.07-.12-.07a.76.76 0 0 0 .2-.08h-.14.11-.11.13-.08s.08-.06.14-.06l-.09-.06h.08c-.1 0 .12 0 0 0h-.08c.06 0 .07 0 0-.07h.07v-.15a.28.28 0 0 1-.18 0h.12-.14a.36.36 0 0 1 .18 0h.1c-.08 0 .12 0 0 0v-.11c0-.04-.08 0-.16 0s.12-.06.11-.1-.09 0-.15 0h.15c.06 0 0-.05-.09-.11s-.06 0-.09 0h.09c-.15-.06.29-.14.09-.19h-.11.14c-.17 0 0-.08-.09-.13.3 0 0-.12.17-.17H283.91h-.1c-.04 0 .1-.21.16-.32s-.36 0-.2-.07h.13c-.15-.08 0-.16-.13-.24h.07c.09 0 0-.05-.07-.05h.1c.04 0-.12-.05 0-.05s0-.05-.1 0c.05 0 0 0 0-.07-.12 0 .05 0-.12-.06.18 0 .14 0 .06-.06s.05 0 .12 0h-.12c.2 0-.17-.07.09-.09a.73.73 0 0 1-.2-.18c.16 0 0 .06.19.06-.07-.05-.21-.08-.18-.13s.07 0 .1 0 0-.1-.08-.15 0 0-.05 0a.62.62 0 0 1-.26 0h.29s-.11 0-.11-.05h.09c-.07 0-.13 0-.11-.06h.05s-.17-.08-.12-.12 0 0 .16 0h-.05s-.08 0-.05-.06h.05-.11.07-.05.15c-.1 0 0-.05-.13-.06h.1-.08s-.05-.07 0-.1 0 0 .11 0-.13-.1-.11-.14c-.13 0 .07 0 0-.06h.06s0-.06-.08-.11 0 0 0-.07 0 0-.07 0c.16-.06-.08-.12 0-.18h-.06.09c.07 0-.08 0 0 0h.06c.06 0-.08 0 0-.06-.1 0 0 0-.09-.08s0 0 .07 0 0-.08 0-.12-.05-.05-.06-.08a.06.06 0 0 0 0-.06v-.06.14c0 .05 0 0 .05 0h-.07.05V427.09c0 .05 0 0-.05 0s0 0 0 .07 0 0-.06.08c.06 0 0 0 .05.05h-.06v.09c0 .04.13 0 .17 0a.14.14 0 0 1-.09 0h-.06-.06.06-.32s0 .06.07.05c.06 0-.05.09 0 .13s0 .06.06.07h-.08v.05c0 .05 0 0 0 0s-.06 0 0 .06-.09 0-.07 0h.05-.09c-.12 0 .19.09 0 .13h.13c.08 0-.16 0-.16.05s.14 0 .1.06a.41.41 0 0 1 .16 0H283c-.02 0 0 0 0 0a.08.08 0 0 0-.07 0h-.1a.06.06 0 0 0 .08 0c-.06 0 0 .05-.05.08h.07c-.05 0 .07 0 .08.05s-.14 0-.09 0a.19.19 0 0 1-.13 0c.07 0-.06.05-.07.07h.03a.7.7 0 0 1 .2 0h-.18c-.01 0 0 0 0 0H282.92c.04 0 0 0 0 0H282.94c-.05 0-.12 0 0 .07h-.15c.08 0-.09 0 0 .06a.23.23 0 0 1 .14 0l-.05-.05h.12s-.06 0 0 0a.25.25 0 0 0 .12 0c-.13 0 .07 0 0 .06h-.21c-.1 0 .11.06.05.11.08 0 0 0 0 .05a.29.29 0 0 0-.14 0h.14-.1s.21 0 .18.08a1 1 0 0 1-.19 0s.1 0 0 0h.11a.42.42 0 0 0 .13 0c-.23 0 0 .1-.18.14 0 0 .05.05.05.08s.22 0 .14.06-.07 0-.11 0c-.26 0 0 .05-.12.07-.09 0 .09.05.07.08a.34.34 0 0 1 .21.09H283h.19a.86.86 0 0 1-.21 0c-.14 0 0 0 0 .05h-.06s.18 0 .16.08H283c.15 0-.09 0 0 0h-.16a1 1 0 0 1 .18.08 1 1 0 0 1-.24-.07s0 .05.09.06-.06 0 0 0 .18.05.18.07c-.31 0-.08.08-.31.1.11.05-.05.11 0 .17h.25H282.57 282.78c.13 0-.2 0-.08.08h-.07s0 .08.19.1h-.11c0 .05.21.12.09.16h-.06.06-.06.06-.06c-.07.05.16.08.2.12-.17 0-.22 0-.24.06 0 .06.15.1.21.16-.17 0-.06.12-.15.17h.13s.11 0 0 0h-.1.19c-.26 0 .1.14-.13.17l.1.05h-.1a.11.11 0 0 0 0 .11h-.06.27-.13s-.1.09 0 .13h-.06s-.08.08.09.07c-.11 0 0 .05.05.07h-.08c.1 0 .13 0 .16.05s-.06 0 0 0 .07 0 0 0H283h0 .08-.08c-.05 0 .09.06 0 .09v-.05a.42.42 0 0 1-.16 0c.05 0 .16.06.13.08-.05 0 0 0 0 0h.11s.06 0 0 0h.1c-.09 0-.13.05-.18.05s0 .09.15.11 0 0-.05 0 0 .07.1.07h-.06c-.09.07.18.12.06.2 0 .09.06.19 0 .28s0 .07 0 .12 0 .06 0 0v-.05h.05c.05 0 0-.06 0-.09s0 0-.07 0h.09c-.06 0 0 0 0 0h.05c-.01 0 .08.17.08.17zm0-.62zm0-.06h-.05zm-.47.11z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M283.09 370.47h.01-.01zM283.61 374.36h-.02l.02.01v-.01z"
                        />
                        <path className="cls-59" d="M283.28 426.52zM283.27 426.4zM283.28 426.3zM283.55 427.82zM283.31 427.37z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M283.71 371.99z" />
                        <path className="cls-59" d="M283.35 427.41s-.02-.01 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M283.21 369.55v-.01.01z" />
                        <path className="cls-59" d="M283.2 425.87zM283.23 426zM283.24 426.05s-.01-.05 0 0zM283.13 426.21s.01-.04 0 0zM283.1 426.31s-.01.02 0 0zM283 427z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M283.37 370.83l.04-.01-.06-.01.02.02zM282.86 370.92l-.01-.01.02.02-.01-.01z"
                        />
                        <path className="cls-59" d="M282.78 428.47h.12s-.15-.02-.12 0zM282.89 429c-.06 0-.1 0 0 0s.02 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M282.75 374.22l-.04-.01.04.02v-.01z" />
                        <path className="cls-59" d="M307.53 424.84zM307.53 425v-.05a.22.22 0 0 0 0 .08zM307.43 426.56zM307.34 427.55s-.01.01 0 0zM307.21 427.72zM307.43 426.56s-.01.01 0 0zM307.58 425.17z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M307.4 369.78v-.01l-.02-.01.02.02z" />
                        <path className="cls-59" d="M307.43 425.78h.05-.05zM307.51 425.25zM307.37 426.36zM307.62 435.78z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M307.53 379.83z" />
                        <path className="cls-59" d="M307.07 428zM307.07 430.89c.1 0 .13.05.24 0-.04.01-.17-.04-.24 0zM307.58 425.18z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M307.31 374.56l.01-.01-.01.01z" />
                        <path className="cls-59" d="M307.09 428.75zM307.26 428.22zM307.23 429s-.02 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M307.22 372.98l.03-.01-.01-.01-.02.02z" />
                        <path className="cls-59" d="M307.74 434.91h-.05s.04.09.05 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M307.57 368.83l.01.01v-.01h-.01z" />
                        <path className="cls-59" d="M308.06 429zM307.92 432.84zM308.07 429.22H308zM307.75 435.22H307.74c.07 0-.05-.06-.05-.08v-.15h-.08v-.05c0-.05 0 0 0 0h.06c.06 0-.06-.09 0-.12s0 .07.07 0v.05h.1c.1 0 0-.07 0-.13s-.06 0-.09 0 .18-.07.09-.13-.13 0-.08-.07h.08c0-.06-.12 0-.06-.09s0 0 0-.06h.07c0-.07-.05-.14-.06-.21s.05 0 .07 0a.33.33 0 0 1 .1-.28h-.08H307.92c.02 0-.14-.17 0-.23 0-.05-.17-.05-.09-.1 0-.11 0-.22.11-.31-.13 0 .07-.1-.12-.11.1-.06.13 0 .2-.13s-.12 0-.14-.06h.11-.11.13-.08s.08-.1.13-.11l-.08-.09a.15.15 0 0 1 .08 0c-.1-.05.12 0 0-.06h-.09a.08.08 0 0 0 0-.12h.03v-.24a.22.22 0 0 1-.18 0h.18H308.14c-.08 0 .12-.06 0-.08v-.19c0-.07-.08 0-.17-.05s.12-.1.12-.16-.09 0-.16 0c.1 0 .09-.06.16 0a.25.25 0 0 0-.09-.18h-.09.09c-.15-.1.29-.23.08-.31l-.1-.08h.13c-.16-.09 0-.14-.08-.21.3-.06 0-.2.17-.28H308.19h-.1c-.09-.17.1-.35.16-.52s-.36 0-.2-.12h.13c-.15-.12 0-.26-.13-.38h.07c.09 0 0-.1-.08-.1h.11c.04 0-.12-.07 0-.08s0-.08-.1-.07c0 0-.05-.08 0-.12-.12 0 .05-.08-.12-.09.17 0 .14-.08.06-.11s.05 0 .12 0 0-.07-.12-.06c.2-.07-.17-.13.09-.16a1 1 0 0 1-.2-.29c.16 0 0 .1.19.1-.07-.08-.21-.13-.18-.22s.07 0 .1 0 0-.16-.08-.24c-.1 0-.21-.06-.27-.06.2 0 0-.08.3 0a.14.14 0 0 0-.09 0h.09c.09 0-.11 0-.11-.09h.09c-.07 0-.14-.05-.11-.09h.05c0-.07-.18-.12-.12-.2s0 0 .16 0h-.05s-.09-.07 0-.1v-.06h-.11c.03 0 0 0 .07-.06s-.08 0-.05-.06.12 0 .14 0 0-.08-.12-.11h.09-.07.07-.07v-.18c0-.06 0 .05.11 0s-.13-.16-.11-.24c-.13 0 .06-.06 0-.1h.06s0-.11-.08-.19 0-.08 0-.12 0 0-.07 0c.16-.11-.09-.2 0-.3v-.08h-.06a.07.07 0 0 1 0-.05h.08c.06 0-.08 0 0-.06s0 0 0-.06 0 0 .06 0-.08-.06 0-.09 0 0 0 .05v-.11c-.09 0 0-.08-.08-.13s0 0 .07 0 0 0 0-.08v-.2c0-.08 0-.07-.06-.13a.14.14 0 0 0 0-.09v-.05a.29.29 0 0 1 0-.09.25.25 0 0 0 0-.1v.29c0 .08 0 0 .05.07h-.07v.11c0 .01 0 0 0 0v.07c0 .07 0 0-.05 0s0 .06 0 .09v.11c0 .05 0 .09-.05.13.05 0 0 .05.05.08s-.05 0-.07 0h-.05s.05.08 0 .14.14 0 .18 0h-.15a.12.12 0 0 1-.06.06H307.54s0 .1.07.08c.06.07-.05.15 0 .22s0 .09.07.12-.05 0-.08 0 .05 0 0 .08-.06.05 0 .1-.09 0-.07.05h.05a.07.07 0 0 1 0 .06h-.09c-.12.08.19.15 0 .21h.13c.08 0-.16.08-.16.09s.14.05.1.1.13 0 .16 0-.15.05-.18 0 0 0-.07 0 0 .08-.09.06h.08c-.06.05 0 .08 0 .13h.07c-.05.07.07 0 .08.08s-.14 0-.09 0a.12.12 0 0 1-.13 0c.07.05-.06.09-.07.12h.08a.06.06 0 0 1-.05 0h.2c.07 0 0 .06-.06.07s-.11 0-.12-.05c-.09.06.12 0 .12.09a.15.15 0 0 0-.11 0h.15c.05 0 0 0 0 .06.06 0 .05 0 .07.06s0 0-.05 0-.12.07-.05.11-.11 0-.14 0-.09.05 0 .1.07 0 .15 0l-.06-.08.12.05s-.05-.05 0-.07 0 0 .11 0c-.12 0 .08.07 0 .11h-.21c-.1.05.1.1.05.17.08 0 0 .05 0 .07h-.14c.05 0 0 .06.13.07h-.09c0 .06.2.07.18.13s-.13 0-.19 0 .09.06 0 .08.11 0 .11 0h.13c-.23.06 0 .17-.18.22a1.12 1.12 0 0 1 .05.13c-.07.05.22 0 .14.09s-.07 0-.12 0c-.25 0 0 .07-.11.11-.09 0 .09.08.07.13a.33.33 0 0 1 .21.15H307.75a.81.81 0 0 1-.21.05c-.14 0 0 .05 0 .07h-.06c0 .06.17.07.16.13h.05c.15 0-.09 0 0 .06h-.16a.55.55 0 0 1 .18.13 1.1 1.1 0 0 1-.24-.11.09.09 0 0 0 .09.09s-.06 0 0 0 .18.07.18.12c-.31 0-.08.12-.32.16.12.08 0 .17 0 .27h.24l-.14.07h-.11c-.05 0-.1 0-.17.05.09 0 .13 0 .09.05h.12c.12.07-.21.06-.08.13h-.07s0 .13.19.17H307c0 .08.21.19.09.26h-.06.05-.06s.11.05.07.07h-.06c-.07.09.16.13.2.2a.29.29 0 0 0-.25.1c0 .1.14.17.21.27-.17.05-.07.19-.16.28s.13 0 .14 0 .11.06 0 .06c-.14 0-.09.06-.1.09h.19c-.26.09.1.24-.13.29.05 0 .05.05.1.07h-.1a.18.18 0 0 0 0 .16h-.06s.26.05.27.09h-.13c0 .08-.1.15 0 .22h-.06s-.08.13.09.12c-.11 0 0 .08.05.11h-.08c.1 0 .13 0 .16.08h-.05s.08 0 0 .07h-.05l.08.06c.08.06 0 .07-.08.08s.09 0 .08 0h-.05c0 .06.09.09 0 .13v-.09c-.06 0-.07.05-.17 0 .06 0 .17.09.14.13-.05 0 0 .05 0 .07s.06 0 .11 0v-.05s.06 0 0 .06h.11c-.09 0-.13.08-.18.09s0 .14.15.18 0 0-.05 0 0 .11.09.11h-.05c-.09.12.18.2.06.33 0 .15.06.31 0 .46s0 0 0 .08V436.14v-.05a.15.15 0 0 0 0-.06v-.07-.08a.35.35 0 0 1 0-.06v-.07-.15-.06c0-.06-.05-.05-.07-.07s.05 0 .09 0 0-.06-.06-.05h.06c-.06 0 0 0 0 0s.06 0 0-.06.22-.14.22-.14zm0-1zm0-.08s-.05-.01-.03-.02zm-.47.18zM307.34 434.32z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M307.44 370.21l.01-.01-.01.01zM307.96 376.59h-.02l.02.01v-.01z"
                        />
                        <path className="cls-59" d="M307.62 426.07zM307.62 425.87zM307.63 425.71zM307.66 427.46s.04 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M308.06 372.7z" />
                        <path className="cls-59" d="M307.7 427.52s-.02-.01 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M307.56 368.69v-.01.01z" />
                        <path className="cls-59" d="M307.56 425zM307.55 425zM307.58 425.24zM307.59 425.3v-.06s-.01.05 0 .06zM307.48 425.57v-.06s.01-.01 0 .06zM307.45 425.73s-.02.02 0 0zM307.37 426.92h-.07s.03-.01.07 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M307.72 370.8l.04-.02-.06-.01.02.03zM307.21 370.94l-.01-.01.02.03-.01-.02z"
                        />
                        <path className="cls-59" d="M307.13 429.27h.12s-.16-.03-.12 0zM307.24 430.13c-.06 0-.1 0 0 0s.02.01 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M307.1 376.36l-.04-.01.04.03v-.02z" />
                        <path className="cls-59" d="M257.77 463.51zM257.32 463.51h-.12.18-.07.01zM250.68 463.38zM246.57 463.26h.05s-.05-.01-.05 0zM245.87 463.11s.01-.01 0 0zM250.68 463.38h-.1s.05-.01.1 0zM256.4 463.57z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M252.5 407.01h.03l.03-.03-.06.03z" />
                        <path className="cls-59" d="M253.89 463.37s0 .05-.06.07a.09.09 0 0 1 .07 0 .08.08 0 0 0-.01-.07zM256.09 463.49zM251.5 463.31z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M211 407.17h.03-.03z" />
                        <path className="cls-59" d="M232.8 462.93c.13.13-.22.16 0 .3-.04-.05.2-.23 0-.3zM256.37 463.57z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M232.78 406.89l.02.02-.02-.02z" />
                        <path className="cls-59" d="M241.63 463v.05a.09.09 0 0 0 0-.05zM243.83 463.17h-.05zM240.49 463.13h-.08s.04-.02.08 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M239.29 406.78l.03.03h.03l-.06-.03z" />
                        <path className="cls-59" d="M216.23 463.78v-.06s-.23.05 0 .06zM256.4 463.56zM240.44 464.18h-.19zM224.78 464h-.05.05zM239.69 464.19a.22.22 0 0 0-.11-.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M214.93 463.8c.18 0 .08-.07.12-.1.22 0 .1.05.18.09s.23-.07.33-.07c.14-.06.42 0 .59-.06a.19.19 0 0 1 0-.12c.08 0 .15-.05.18 0s-.05 0-.08 0h.09c.08.08-.12 0-.12.09a1.81 1.81 0 0 1 .49-.06c0 .08-.3 0-.13.09h-.19c.14.12-.12 0 0 .12s.29 0 .55 0c.06 0 0-.07 0-.12.36-.08.29.23.55.12.07 0 .1-.17.29-.1l-.06.1c.25 0 .14-.15.4-.07h-.16c.04 0 .12-.05.25-.05v.1c.26 0 .56-.07.85-.09 0 0-.06.07 0 .1a3.42 3.42 0 0 1 1.15.12l.14-.1s.06.05 0 .07c.13 0 0-.07.07-.11s.1.07.05.1a1.58 1.58 0 0 1 1-.06c.21.05.23-.22.42-.11a3.56 3.56 0 0 1 1.26.14c.06-.17.43.08.46-.16.25.13.18.17.53.26.1 0 .14-.15.26-.18v.26l.16-.13.09.16h.1s-.09-.06-.08-.09a.4.4 0 0 1 .42.16l.4-.1s-.07.07-.13.1c.22-.13 0 .15.24 0v-.1a.71.71 0 0 0 .49.05v.1h1a.12.12 0 0 1 0-.23v.15c.06-.09-.11-.06 0-.17s.09.17 0 .22h.15v.12c.06-.09.27.16.36 0 .34 0 .49 0 .77-.05 0-.13.11-.1.19-.21a2.27 2.27 0 0 0 .67.15c.17-.07 0-.12.12-.2 0 .13.26.12.13.2a2.46 2.46 0 0 0 .74-.12c0-.05-.08-.07-.06-.11a.11.11 0 0 1 .14.11c.42-.18 1 .38 1.28.12l.34-.14c.15 0-.1.1 0 .18.37-.21.58 0 .88-.11.24.38.83 0 1.15.22v-.09c.08-.09.1.05.16.07s-.09-.08 0-.13a8.27 8.27 0 0 1 2.14.21c.26 0 .15-.46.48-.25l-.1.16c.53-.2 1.07 0 1.59-.17 0 0 0 .09-.08.09s.4 0 .4-.09 0 .08.07.13.27-.15.33 0 .33 0 .26-.12c.19.06.37-.06.52 0 .1-.15.33.06.36-.14 0 .21.34.17.46.06 0 .07.11.07.06.16.14 0 .26-.05.24-.16.26.25.51-.2.66.12a7.82 7.82 0 0 1 1.16-.25c0 .2-.41 0-.39.24.35-.09.56-.27.9-.22.09 0-.05.08-.08.12.35-.09.68 0 1-.11a.22.22 0 0 1-.07.06c.06 0 .14 0 .14-.06h-.06c-.1-.13.24-.27.25-.34-.1.26.31.06.14.38 0 0 .1-.06.09-.12s.08.05 0 .12c.23-.05.15-.14.35-.14 0 0 0 .06-.06.11a.41.41 0 0 1 .37-.14v.06c.29 0 .49-.21.81-.14-.09.17.11 0 .13.2l.17-.05-.07-.07c.15 0 .28-.1.41-.06l-.11.06h.28-.16c.15-.08 0-.18.18-.14 0 0 .16 0 .23.08a.3.3 0 0 1 .26-.06v.18c0 .02.35 0 .44-.15s0 .1 0 .11l.06-.09c.07 0 .08 0 .07.1.21 0-.06-.17.18-.1h-.05c.25 0 .48-.06.71 0 .07.13-.2 0-.12.14a6 6 0 0 1 1-.13h-.06c0-.16.23.08.4 0 0 0-.06.09 0 .08a3.21 3.21 0 0 0 .78-.11 2.53 2.53 0 0 0 .48 0s.12 0 .07-.08c.43.19.82-.12 1.21 0h-.08.33l-.11-.07a.4.4 0 0 1 .21-.06c-.15 0 0 .08.06.11s0 0 0-.05c.17.09 0-.1.26 0a.71.71 0 0 1 .26 0c0 .05-.09 0-.1.07s.26-.11.38-.05h-.19a.47.47 0 0 0 .24.05h.22-.06c.17-.13.34 0 .56-.11-.22.08 0 .05-.05.1s.14 0 .11 0H255c.13 0 0 0 0 0 .21-.05.5 0 .8 0s.31-.06.55-.07h-.07a1.45 1.45 0 0 0 .36 0h.2-.1.36-.12.4-.38c.05 0 0 0 0 0a.43.43 0 0 1-.18 0h.09a3.31 3.31 0 0 0-.52 0h.07-.18s-.06 0 0 0h-.71c-.31 0 0 0-.26.07l-.15-.09h-.08c.01 0 0 0-.05.05s-.42 0-.45-.06.14 0 0 .05-.18 0-.32 0c0-.05.17 0 0-.06s-.26 0-.38 0h-.45s-.36 0-.54-.08c0 .08-.22.06-.36.08s0-.07.11-.09h-.13a.25.25 0 0 1-.15 0v-.06a2 2 0 0 1-.56 0c0 .07.17.18-.06.22a.08.08 0 0 1 0-.11.18.18 0 0 1-.11 0l.1-.06c-.1 0-.06.05-.14 0s-.06 0 0-.07.07 0 .1 0a.48.48 0 0 1-.24-.08s0 .06-.06.07-.06-.06-.16-.09-.15 0-.15.07-.06 0-.08-.06-.41 0-.31.09c-.29.08-.6 0-.88 0a2.48 2.48 0 0 0-.51.08s-.11-.06-.09-.09a.49.49 0 0 1-.34 0c.13-.06 0 0 .14 0-.17 0-.21-.09-.39 0 .06-.08-.13-.11-.21-.08l.12.06a1 1 0 0 1-.25 0v-.11c-.35-.15-.63.23-.89 0-.09.09.19.07.11.16s-.33-.19-.38-.2c-.22-.07-.21.18-.43.13 0 0 .05.17-.12.21s-.2-.2-.09-.23.05 0 .05 0 .12 0 .06-.09v.05c-.08-.05-.3-.05-.25-.12-.12 0 0 .07 0 .1a4.69 4.69 0 0 0-.54-.06s.07.08 0 .08c-.31-.06-.14.09-.35.11s0-.18-.17-.12 0-.13 0-.16c-.19.08-.35-.07-.46-.09h.1a.47.47 0 0 1-.16 0v.1c-.06 0-.11 0-.11-.06s0 .16-.07.25-.24.05-.27-.08c.25.05 0-.14.18-.15a.27.27 0 0 1-.15 0c-.24-.13-.11.14-.36.14 0-.08-.06-.15-.1-.13s.05.12 0 .18-.17 0-.26 0h.1c0 .08-.11.07-.22.09s.1 0 .06-.06-.28-.15-.45-.06 0-.15-.08-.18-.21-.11-.41 0c.06.11.07.08-.07.18l.33-.07-.21.15c.1 0 .21-.06.27 0-.1.08-.09.06 0 .14-.14-.16-.28.09-.43 0V463c-.24-.12-.42.13-.73.06l.1.05c0 .11-.19 0-.29.06s-.06-.13-.1-.19-.23 0-.25.18l-.14-.12c-.25-.06-.29.26-.53.22.08-.1 0-.16.13-.23h-.16s-.22.13-.29 0 0 .13-.14.13-.14.06-.06.17c-.25-.3-.69 0-.9-.24-.18 0-.39.06-.55.07 0 0 0-.05 0 0-.22-.09-.13.28-.38.18s.13-.09.05-.15c0-.31-.3 0-.47-.14-.12-.11-.31.12-.52.1a1.2 1.2 0 0 1-.61.26c.06-.13.09-.07.05-.19s0 .2-.15.24-.19-.13-.21-.27h.17c-.09-.17-.22 0-.31 0V463c-.26 0-.26.22-.54.21v.05c-.16.2-.13-.1-.28 0l-.05-.2a2.7 2.7 0 0 1-.53.23c.1-.15.31-.22.44-.31-.1 0-.34 0-.39.11s.09-.06.13 0a.55.55 0 0 1-.48.22c0-.38-.52-.09-.67-.39-.35.14-.7-.06-1.11 0 .15.3-.12 0-.1.32h-.14l-.29-.18c-.06-.09.09-.07.09-.13-.21 0-.09-.13-.23-.21 0 .11-.07.15-.19.11l.17.14c-.3.16-.26-.25-.55-.09l.09-.1c-.15.06-.56 0-.71.25 0 0-.06-.12 0-.14-.37 0-.81.26-1.09.11v-.07c-.07 0-.12.14-.21.07s0-.08 0-.08-.18.13-.27.09l.08-.09c-.36-.09-.54.21-.84.26 0-.21-.28-.28-.42-.31a4 4 0 0 0-1.08.26c-.24-.21-.8-.08-1.18-.19.06 0 0 .15-.08.17s-.25.14-.23 0c-.07-.17-.25-.12-.39-.12v.23c-.37-.33-1 .13-1.18-.16-.09.06-.2.06-.29.12V463a3.08 3.08 0 0 0-.68 0l.06-.08c-.18 0-.22.33-.38.34l-.05-.17c-.31 0-.61-.13-.91 0a.07.07 0 0 1 .06-.08c-.14 0-.56-.09-.5.12 0-.14-.32 0-.48.06v-.1c-.14.13-.14.16-.33.2s0-.08 0-.05c-.16-.05-.12.09-.31 0l.07-.06c-.16 0-.14 0-.23.1s-.3 0-.32-.1a.19.19 0 0 1-.2.1v-.06c-.27-.06-.4.11-.58 0v-.05a2 2 0 0 1 .36 0c0-.09-.16-.1 0-.22a1.05 1.05 0 0 1-.53.18.12.12 0 0 0-.1 0h-.14c0-.07-.19 0-.28 0s-.1.07 0 .14 0 0 .08 0h.24a.21.21 0 0 1-.23 0s-.09.11-.12.13-.34-.17-.37-.23a1.94 1.94 0 0 0-.77.19c-.07 0-.08 0-.11-.06s.09 0 .12 0c-.15 0-.44 0-.47.12-.19 0 .1-.08-.15-.06-.49-.12-.81.22-1.36.07h.07c-.63-.05-1.3.07-1.92 0a.83.83 0 0 0-.31 0h-.19c-.26 0-.45-.05-.78 0a2 2 0 0 1-.36 0h-.38a1.88 1.88 0 0 0-.29 0h-.31.77s-.09 0 0 0h.06a.47.47 0 0 0 .17 0 1.58 1.58 0 0 0 .31 0c.09 0 .32 0 .31.05a.9.9 0 0 1 .26 0c-.16 0 .33 0 .29.07a5.93 5.93 0 0 1 .64 0h-.06a.89.89 0 0 1 .23 0c0-.06.2-.06.3-.1s-.08.07 0 .13.25 0 .21-.08c.11 0 .09 0 .15.07s.1 0 .19-.05.05.08.22.06.26.22.26.22zm4.21-.06zm.36 0h-.16v-.06s.1.04.16.07zm-.75-.6h.08-.1zM218.65 463.26zM250.74 463.39z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M224.38 407.71v-.03l-.03.03h.03z" />
                        <path className="cls-59" d="M252.68 463.63zM253.53 463.63zM254.17 463.64zM243.88 464s-.04 0 0 0zM246.94 463.67l-.1.05c.06.01.1.01.1-.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M240.46 407.84h-.02.02z" />
                        <path className="cls-59" d="M246.7 463.72a.17.17 0 0 0 .14 0 .22.22 0 0 0-.14 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M256.98 407.21h.04-.04z" />
                        <path className="cls-59" d="M257 463.55zM257.12 463.54zM256.12 463.57zM255.86 463.59a2.08 2.08 0 0 0 .25 0s-.19-.02-.25 0zM254.78 463.44h.21s-.08 0 0 0c-.26-.07.07.01-.21 0zM254.1 463.4c.12 0 0 0 0 0s-.1-.02 0 0zM249.21 463.3v-.08c-.08.01.01.03 0 .08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M248.27 407.41l.09.05.04-.08-.13.03zM247.72 406.76l.04-.01-.15.03.11-.02z"
                        />
                        <path className="cls-59" d="M239.51 463v.15c.08-.02.1-.15 0-.15zM236 463.15c0-.08-.14-.13-.2 0s.12.02.2 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M225.32 406.63l.08-.05-.14.04.06.01z" />
                        <path className="cls-59" d="M278.88 451.94zM278.41 451.94h-.13.13zM271.48 451.81zM267.19 451.69h.05s-.06-.01-.05 0zM266.46 451.54s.01-.01 0 0zM271.48 451.81h-.11s.06-.01.11 0zM277.45 452z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M273.37 395.44h.04l.03-.03-.07.03z" />
                        <path className="cls-59" d="M274.83 451.8s-.05.05-.06.07a.09.09 0 0 1 .07 0 .08.08 0 0 0-.01-.07zM277.13 451.92zM272.33 451.73zM231.72 452.05s-.01 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M230.04 395.6h.03-.03z" />
                        <path className="cls-59" d="M265.12 451.36s.02 0 0 0zM252.8 451.36c.14.13-.22.16 0 .3-.03-.05.2-.22 0-.3zM277.42 452z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M252.79 395.32l.02.01-.02-.01z" />
                        <path className="cls-59" d="M262 451.39a.05.05 0 0 0 0 .05.09.09 0 0 0 0-.05zM264.33 451.59zM260.83 451.56h-.08s.04-.02.08 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M259.59 395.21l.02.03.04-.01-.06-.02z" />
                        <path className="cls-59" d="M235.5 452.21l-.06-.06s-.16.05.06.06zM277.45 452zM260.78 452.61h-.2zM244.43 452.43h-.05.05zM260 452.62a.24.24 0 0 0-.12-.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M234.14 452.22c.19 0 .09-.06.13-.09.23 0 .1.05.18.09s.25-.07.35-.07c.15-.06.44 0 .61-.06a.19.19 0 0 1 0-.12h.19c.08.08-.12 0-.12.08a2 2 0 0 1 .51-.05c0 .08-.31 0-.13.09h-.21c.16.13-.12 0 0 .13s.3 0 .57 0c.06 0 0-.07 0-.12.38-.08.3.23.58.12.08-.06.1-.17.3-.11l-.07.11c.27 0 .15-.15.43-.07h-.17c.04 0 .13-.06.26-.05v.1c.28 0 .58-.07.89-.09 0 0-.07.06 0 .1a3.72 3.72 0 0 1 1.2.12l.15-.1s.06.05 0 .07c.15 0 0-.07.08-.11s.11.06.06.09a1.79 1.79 0 0 1 1-.05h-.05c.21 0 .24-.22.43-.11a3.91 3.91 0 0 1 1.32.14c.06-.17.45.08.48-.16.26.13.19.17.55.26.1 0 .15-.15.27-.18v.13l.17-.13.09.16h.11s-.09-.06-.09-.09c.18-.06.44.09.44.16l.42-.1s-.08.07-.13.1c.22-.13 0 .14.24 0v-.11a.72.72 0 0 0 .51.06v.09h1a.12.12 0 0 1 0-.23v.15c.06-.1-.11-.06 0-.17s.09.17 0 .22h.16v.12c0 .06.27.16.37 0v.05c.35 0 .51 0 .79-.05 0-.13.12-.1.21-.21a2.8 2.8 0 0 0 .69.15c.18-.07 0-.12.13-.2 0 .12.27.12.14.2a2.64 2.64 0 0 0 .77-.12s-.09-.07-.07-.11.16 0 .15.11c.44-.18 1 .37 1.34.11l.36-.14c.16 0-.1.1 0 .18.39-.22.61 0 .92-.11.25.37.87 0 1.2.21v-.08c.09-.09.11 0 .17.07s-.09-.08 0-.13a9 9 0 0 1 2.23.21c.28 0 .16-.46.5-.25l-.1.16c.55-.2 1.12 0 1.66-.17 0 0 0 .09-.09.09.11.12.42 0 .42-.09s0 .08.07.13.29-.15.35 0 0 0-.05 0 .34 0 .27-.12c.2.06.38-.06.54 0 .11-.15.35.06.38-.15 0 .22.35.17.48.07 0 .07.11.07.06.16.15 0 .28-.05.25-.16.27.25.54-.21.69.12a8.54 8.54 0 0 1 1.22-.25c0 .2-.43 0-.41.24a2.32 2.32 0 0 1 .94-.23c.1 0-.05.09-.08.13.36-.09.71 0 1-.11l-.07.06c-.07.06.15 0 .15-.07h-.07c-.1-.13.26-.27.27-.34-.11.25.32.06.15.38 0 0 .1-.06.09-.12s.08 0 0 .12c.23-.05.14-.14.35-.14 0 0 0 .06-.06.1a.46.46 0 0 1 .39-.13s0 .06-.05.06c.31 0 .52-.22.85-.14-.09.17.12 0 .14.2l.17-.05-.07-.07c.16 0 .3-.11.43-.06l-.11.06h.29-.17c.16-.08 0-.18.2-.14 0 0 .15 0 .23.08a.33.33 0 0 1 .28-.06v.18c0 .03.37 0 .47-.16a.12.12 0 0 0 0 .12l.07-.09c.07 0 .08 0 .07.09.22 0-.07-.16.19-.09h-.05c.26 0 .5-.06.74 0 .07.13-.21 0-.13.14a7.56 7.56 0 0 1 1.05-.14h-.06c0-.17.24.08.41 0 0 0-.05.09 0 .07a2.91 2.91 0 0 0 .81-.1 2.8 2.8 0 0 0 .5 0s.13 0 .08-.09c.45.2.85-.11 1.25 0h-.07.34c0-.05 0 0-.12-.07a.36.36 0 0 1 .22-.06c-.15 0 0 .08.07.11s0 0 0-.05c.17.09 0-.1.27 0a2.36 2.36 0 0 1 .28 0c0 .06-.1 0-.11.08s.27-.11.4-.06h-.2a.43.43 0 0 0 .25.06h.23-.06c.17-.13.35 0 .58-.11-.22.08 0 0-.05.09s.15 0 .12 0H275.72c.14 0 0 0 0 0 .22-.05.51 0 .83 0s.32-.06.57-.07h-.07a2.26 2.26 0 0 0 .37 0h.21-.1.36-.12.42-.09c.05 0 0 0 0 0a.86.86 0 0 1-.18 0h.08a5.22 5.22 0 0 0-.54 0h.07-.18s-.07 0 0 0H277h.06-.46c-.31 0 0 0-.27.08l-.16-.09h-.08c.01 0 0 0-.05.05s-.44 0-.47-.06.15 0 0 .05-.19 0-.34 0c.05-.05.18 0 0-.06s-.28 0-.4 0h-.47s-.38 0-.57-.08c0 .08-.23.06-.38.08 0-.05 0-.07.11-.09h-.13a.27.27 0 0 1-.16.05v-.06a2.19 2.19 0 0 1-.58 0c0 .06.18.18-.06.22a.08.08 0 0 1 0-.11.2.2 0 0 1-.12 0l.1-.06h-.14c-.09 0-.06 0 0-.08s.08 0 .11 0a.49.49 0 0 1-.25-.09s0 .07-.06.08-.07-.06-.17-.09-.16 0-.16.07-.06 0-.08-.06-.43 0-.33.09a5.66 5.66 0 0 1-.92 0 2 2 0 0 0-.53.08s-.12-.06-.1-.09a.59.59 0 0 1-.35 0c.14-.06-.05 0 .14 0-.18 0-.22-.09-.41 0 .07-.08-.13-.11-.21-.09l.12.07a1.11 1.11 0 0 1-.26 0v-.11c-.36-.16-.65.23-.93 0-.09.08.2.06.11.16s-.34-.2-.39-.2c-.23-.07-.21.18-.45.13 0 0 .06.16-.12.21s-.21-.2-.1-.23.06 0 .06 0 .12 0 .06-.09v.05c-.08-.05-.31-.05-.25-.13-.13.05-.06.08 0 .1-.21-.07-.33 0-.55-.05 0 0 .07.08 0 .08-.32-.06-.14.09-.36.11s0-.18-.18-.12 0-.13 0-.17c-.2.09-.38-.06-.49-.09h.1a.47.47 0 0 1-.16 0l.06.1c-.06 0-.12 0-.12-.07s0 .17-.07.26-.26.05-.29-.09c.27.05 0-.13.2-.15a.22.22 0 0 1-.16 0c-.25-.12-.12.15-.38.14 0-.07-.06-.14-.1-.12s.05.12-.05.18-.18 0-.26 0h.1c0 .08-.12.07-.24.09s.11 0 .07-.07c-.13.14-.29-.14-.47-.05s0-.15-.08-.18-.22-.11-.43 0c.06.1.07.08-.08.18l.35-.07-.22.15c.1 0 .22-.06.28-.05-.11.09-.09.06 0 .15-.15-.16-.29.09-.45 0v-.26c-.25-.12-.44.13-.76.06l.1.05c0 .11-.2 0-.3.05s-.06-.12-.1-.18-.24 0-.27.18l-.14-.13c-.26-.05-.3.26-.55.23.07-.1 0-.16.13-.24h-.16s-.23.12-.31 0-.05.14-.14.14a.08.08 0 0 1 0-.05c0 .05-.15.06-.07.17-.25-.3-.72 0-.94-.24-.18 0-.4.06-.57.07-.23-.09-.14.27-.4.17s.14-.08.06-.14c0-.32-.32 0-.49-.14-.13-.11-.33.12-.55.09a1.34 1.34 0 0 1-.65.26c.07-.13.1-.07.06-.2-.1 0 0 .21-.16.24s-.2-.12-.22-.26h.45c-.09-.18-.23 0-.32 0v-.08c-.27 0-.28.22-.57.2v.06c-.16.2-.13-.11-.29 0l-.05-.2a3.07 3.07 0 0 1-.56.23 1.6 1.6 0 0 1 .47-.31c-.11 0-.36 0-.41.11s.09-.07.13 0a.58.58 0 0 1-.5.22c0-.38-.55-.09-.7-.39-.36.14-.73-.06-1.16 0 .16.3-.12 0-.1.32h-.14l-.31-.18c-.07-.09.1-.07.09-.14-.22 0-.09-.12-.24-.2 0 .1-.07.15-.2.11l.18.14c-.31.16-.27-.25-.57-.09l.09-.1c-.16.06-.58 0-.74.25 0 0-.06-.12 0-.14-.38 0-.84.26-1.14.11v-.07c-.07 0-.12.14-.21.07s0-.08 0-.08-.19.13-.28.09l.07-.09c-.36-.09-.56.21-.87.26 0-.21-.29-.28-.44-.31a4.32 4.32 0 0 0-1.13.26c-.24-.21-.83-.08-1.23-.19.06 0 0 .15-.08.17s-.26.14-.24 0c-.07-.17-.26-.12-.41-.12v.23c-.39-.33-1 .13-1.23-.16-.1.06-.22.06-.31.12v-.12a2.88 2.88 0 0 0-.72 0l.07-.08c-.19 0-.23.33-.4.34v-.17c-.32 0-.64-.13-1 0 0 0 0-.07.07-.08-.15 0-.58-.09-.52.12 0-.14-.33 0-.5.06v-.1a.52.52 0 0 1-.35.2c-.05 0 0-.08 0-.05-.16-.05-.12.09-.32 0l.08-.06c-.17 0-.16 0-.25.1s-.31 0-.33-.1a.2.2 0 0 1-.21.1.06.06 0 0 1 0-.07c-.28-.05-.41.12-.6 0a.06.06 0 0 0 0-.05 2.39 2.39 0 0 1 .38 0c0-.09-.18-.1 0-.22a1.09 1.09 0 0 1-.55.18.14.14 0 0 0-.11 0 .34.34 0 0 0-.14 0c0-.07-.2 0-.29 0s-.11.07 0 .14 0 0 .07 0h.25a.25.25 0 0 1-.24 0 .79.79 0 0 1-.12.13c-.12-.11-.35-.17-.38-.24-.27.06-.64.06-.8.2s-.09 0-.12-.06.1 0 .12 0c-.15 0-.45 0-.49.12-.19 0 .11-.09-.16-.07-.52-.12-.85.22-1.42.07h.07c-.66 0-1.36.07-2 0a.92.92 0 0 0-.32 0H230.7a2.29 2.29 0 0 0-.31 0h-.32.8s-.09 0 0 0h.07a.35.35 0 0 0 .18 0h.91c-.17.05.34 0 .3.08a4.49 4.49 0 0 1 .67 0h-.06a2.35 2.35 0 0 1 .24 0c0-.05.21-.05.32-.09s-.09.07-.05.12.27 0 .22-.08c.11.05.1 0 .16.08s.1 0 .2-.05 0 .08.23.06-.12.14-.12.14zm4.4-.05zm.37 0h-.16v-.06s.11.04.16.07zm-.78-.6h.09-.11a.05.05 0 0 1 .02.01zM238 451.69z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M244.01 396.14v-.03l-.03.03h.03z" />
                        <path className="cls-59" d="M273.57 452.06zM274.45 452.06zM275.13 452.06zM264.37 452.41c-.08.03-.04.02 0 0zM267.57 452.1h-.1c.06.06.1.06.1 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M260.8 396.27h-.02.02z" />
                        <path className="cls-59" d="M267.32 452.15a.19.19 0 0 0 .15 0 .26.26 0 0 0-.15 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M278.06 395.64h.03v-.01l-.03.01z" />
                        <path className="cls-59" d="M278.09 452zM278.2 452zM277.16 452zM276.89 452a1.85 1.85 0 0 0 .25 0 2.25 2.25 0 0 1-.25 0zM275.75 451.87h.23s-.09 0 0 0c-.27-.07.07.01-.23 0zM275.05 451.83c.12 0 0 0 0 0s-.05-.02 0 0zM269.94 451.73v-.08c-.08.01.06.03 0 .08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M268.96 395.84l.09.05.05-.08-.14.03zM268.39 395.19l.04-.01-.16.03.12-.02z"
                        />
                        <path className="cls-59" d="M259.81 451.43v.16c.09-.03.1-.2 0-.16zM256.1 451.58c0-.08-.14-.13-.2-.06s.16.08.2.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M245 395.06l.07-.05-.14.04.07.01z" />
                        <path className="cls-59" d="M265.67 475.83zM265.36 475.83h-.08.12-.04zM260.93 475.7zM258.18 475.58s-.01-.01 0 0zM257.71 475.43zM260.93 475.7h-.08s.04-.01.08 0zM264.75 475.89z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M262.14 419.32l.02.01.02-.03-.04.02z" />
                        <path className="cls-59" d="M263.07 475.69v.07a.05.05 0 0 1 .05 0s-.05-.05-.05-.07zM264.54 475.8zM261.47 475.62zM235.47 475.94s-.01 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M234.39 419.49h.02-.02z" />
                        <path className="cls-59" d="M256.85 475.25s.01 0 0 0zM249 475.25c.08.13-.15.16 0 .3-.06-.05.08-.22 0-.3zM264.73 475.89z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M248.96 419.21l.01.02-.01-.02z" />
                        <path className="cls-59" d="M254.87 475.28a.08.08 0 0 0 0 .05.06.06 0 0 0 0-.05zM256.34 475.48zM254.11 475.45h-.06s.03-.02.06 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M253.31 419.1l.01.03.03-.01-.04-.02z" />
                        <path className="cls-59" d="M237.89 476.09s-.15 0 0 0zM264.75 475.88zM254.07 476.5h-.12zM243.6 476.32s-.01.01 0 0zM253.57 476.51a.29.29 0 0 0-.07-.1zM237.85 476z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M237 476.11c.12 0 0-.06.08-.1s.06.06.11.1.16-.08.23-.07.28 0 .39-.06a.23.23 0 0 1 0-.11c.06 0 .1-.05.12 0h.06c0 .08-.08 0-.08.08a1 1 0 0 1 .32-.06c0 .09-.19 0-.08.1h-.13c.1.13-.08 0 0 .13s.19 0 .37 0V476c.25-.08.19.23.37.12s.07-.17.2-.11l-.05.11c.17 0 .1-.15.27-.07h-.1c.03 0 .08-.06.16-.05v.1c.18 0 .38-.07.57-.09v.1a1.58 1.58 0 0 1 .77.12l.09-.1V476.09a.05.05 0 0 1 0 .09c.16-.07.47-.17.64-.05.13.05.15-.22.27-.11.29.06.62 0 .84.15 0-.17.29.08.31-.16.17.13.12.17.35.26.07 0 .1-.15.18-.18v.13l.1-.13.06.15h.07a.12.12 0 0 1-.06-.1c.12-.05.28.1.29.17l.27-.1c0 .05-.06.07-.09.1.14-.13 0 .14.16 0v-.11a.32.32 0 0 0 .33.06v.09h.65c-.08-.05-.06-.22 0-.23v.15c0-.1-.07-.06 0-.17s.06.17 0 .21h.1v.13c0-.09.17.16.23 0a3.83 3.83 0 0 0 .51 0c0-.13.07-.1.13-.21a1.08 1.08 0 0 0 .44.14c.12-.06 0-.11.09-.19 0 .12.17.12.08.2a1.16 1.16 0 0 0 .5-.12c0-.05-.06-.07 0-.11s.1.05.09.11c.27-.18.64.37.86.11l.23-.14c.11 0-.06.1 0 .17.24-.21.38 0 .59-.1.15.37.55 0 .76.21v-.09c.06-.08.07.06.11.08s-.06-.08 0-.13a3.93 3.93 0 0 1 1.43.2c.18 0 .1-.45.32-.24l-.06.16c.35-.2.71 0 1.06-.17 0 0 0 .09-.06.09s.27 0 .27-.09v.13c0 .05.18-.15.22 0s.22 0 .17-.12c.13.06.25-.06.35 0 .07-.14.22.07.24-.14 0 .22.23.17.31.07 0 .07.07.07 0 .16s.17-.05.16-.16c.17.25.34-.21.44.11a4.32 4.32 0 0 1 .78-.24c0 .2-.28 0-.27.24.24-.1.38-.27.61-.23.06 0 0 .09-.06.13.24-.09.46 0 .67-.11l-.05.06c-.05.06.1 0 .1-.07-.07-.13.16-.27.17-.34-.07.25.2.06.09.38a.14.14 0 0 0 .06-.12s.05.05 0 .12c.15-.05.09-.14.23-.14s0 .06 0 .1.13-.16.25-.13 0 .06 0 .06c.19 0 .33-.22.54-.14-.06.17.08.05.09.2l.11-.05v-.07c.1 0 .18-.11.27-.06l-.07.06h.18l-.1-.05c.1-.08 0-.18.12-.15 0 0 .1 0 .15.09.05-.05.1-.09.18-.06s0 .15 0 .18.23 0 .29-.16a.17.17 0 0 0 0 .12v-.09c.05 0 .05 0 0 .09.14 0 0-.16.13-.09.17 0 .32-.06.48 0s-.14 0-.08.14a3.2 3.2 0 0 1 .67-.14c0-.17.16.08.26 0s0 .09 0 .07a1.46 1.46 0 0 0 .52-.1 1.16 1.16 0 0 0 .32 0s.08 0 .05-.09c.29.2.55-.11.8 0h-.05.22c0-.05 0 0-.07-.07a.17.17 0 0 1 .14-.06c-.1 0 0 .08 0 .11v-.05c0-.05 0-.1.17 0a1 1 0 0 1 .18 0c0 .06-.07 0-.07.07s.17-.1.25-.05a.53.53 0 0 1-.12 0 .18.18 0 0 0 .16.05h.15c.11-.13.22 0 .37-.11-.14.07 0 0 0 .09s.09 0 .08 0h.27c-.02 0 0 0 0 0h.53a2.41 2.41 0 0 1 .37-.07h-.05a1 1 0 0 0 .24 0h.14-.07.42-.12a2.2 2.2 0 0 0-.35 0h.05-.26c-.07 0 0 0 0 0h-.37c-.2 0 0 0-.17.08l-.11-.09h-.05c.01 0 0 0 0 0s-.28 0-.3-.05.09 0 0 .05-.13 0-.22 0 .12 0 0-.06-.18 0-.25 0h-.3c-.13 0-.25 0-.37-.08 0 .08-.15.06-.24.08a.09.09 0 0 1 .06-.09h-.08a.19.19 0 0 1-.1 0v-.06c-.12 0-.23.07-.38 0s.12.18 0 .22v-.11a.06.06 0 0 1-.07 0l.06-.05c-.07 0 0 .05-.09 0s0 0 0-.08.05 0 .07 0a.28.28 0 0 1-.16-.09.06.06 0 0 1 0 .08c-.12 0 0-.06-.11-.09s-.1 0-.1.07 0 0-.05-.06-.28 0-.21.09c-.19.08-.4-.05-.59 0-.11 0-.25 0-.33.08a.09.09 0 0 1-.07-.1c-.09 0-.1.06-.22 0 .09-.06 0-.05.09 0-.12 0-.14-.09-.26 0 0-.08-.09-.11-.14-.09l.08.07a.47.47 0 0 1-.17 0v-.11c-.23-.15-.42.23-.6 0-.06.08.13.06.07.16s-.22-.19-.25-.2-.14.18-.29.13a.15.15 0 0 1-.08.21c-.1 0-.13-.2-.06-.23s.08 0 0-.09c-.05 0-.2 0-.16-.13s0 .08 0 .1c-.14-.07-.21 0-.35-.05v.08c-.21-.06-.09.09-.24.11s0-.18-.11-.12 0-.13 0-.17c-.13.09-.24-.07-.32-.09h.07a.22.22 0 0 1-.11 0v.1s-.07 0-.07-.07 0 .17-.05.26-.16.05-.18-.09c.17.05 0-.13.12-.15a.09.09 0 0 1-.1 0c-.16-.12-.07.15-.24.14 0-.07 0-.14-.07-.12s0 .12 0 .18-.12 0-.18 0h.07c0 .08-.08.07-.15.09s.07 0 0-.07c-.08.14-.19-.14-.3 0s0-.15-.05-.18-.14-.11-.28 0c0 .1.05.08 0 .18l.23-.07-.15.15c.07 0 .15-.06.19 0s-.07.06 0 .15c-.09-.16-.18.09-.29 0v-.26c-.16-.12-.28.13-.49.06h.07c0 .11-.13 0-.2.05s0-.12-.06-.18-.15 0-.17.18l-.09-.13c-.17-.05-.19.26-.35.23.05-.1 0-.16.08-.24-.05 0-.1 0-.1.05s-.15.12-.2 0 0 .14-.09.13-.09.06 0 .17c-.17-.3-.46 0-.61-.24a2.29 2.29 0 0 1-.36.07s0-.05 0 0c-.15-.09-.09.27-.26.17s.09-.08 0-.14c0-.32-.2 0-.31-.14-.08-.11-.21.12-.35.09a.68.68 0 0 1-.41.26c0-.13.06-.07 0-.2s0 .21-.11.24-.12-.12-.13-.26h.11c-.06-.18-.15 0-.21 0v-.08c-.17 0-.18.22-.36.2v.06c-.11.2-.09-.11-.19 0v-.2a1.72 1.72 0 0 1-.36.23c.07-.15.21-.22.3-.31-.07 0-.23 0-.26.11s.06-.07.08 0a.34.34 0 0 1-.32.23c0-.38-.35-.09-.44-.39-.24.14-.47-.06-.75 0 .1.3-.08 0-.06.32h-.1l-.19-.18c0-.09.06-.07.06-.14s-.06-.12-.16-.2c0 .1 0 .15-.12.11l.11.14c-.2.16-.17-.25-.37-.09l.06-.1c-.1.06-.37 0-.47.25v-.14c-.24 0-.54.26-.72.11v-.07s-.07.14-.13.06 0-.07 0-.07-.12.13-.18.09l.05-.09c-.24-.09-.36.21-.56.26 0-.21-.19-.28-.28-.31-.27 0-.47.18-.72.26-.16-.21-.54-.08-.79-.19 0 0 0 .15-.05.17s-.17.14-.16 0c0-.17-.16-.12-.26-.12v.23c-.25-.33-.66.13-.8-.16-.06.06-.13.06-.19.12v-.12a1.18 1.18 0 0 0-.46 0l.05-.08c-.12 0-.15.33-.26.34v-.17c-.21 0-.41-.13-.61 0v-.08c0-.01-.37-.09-.34.12 0-.14-.21 0-.32.06v-.1c-.09.13-.1.16-.22.2s0-.08 0-.05-.08.09-.2 0v-.06c-.1 0-.1 0-.15.1a.17.17 0 0 1-.22-.1c0 .05-.07.12-.13.1a.07.07 0 0 1 0-.07c-.17-.05-.26.12-.38 0a.06.06 0 0 0 0-.05h.24c0-.08-.11-.09 0-.21-.09.07-.25.21-.36.18a.06.06 0 0 0-.07 0 .16.16 0 0 0-.09 0c0-.07-.13 0-.19 0s-.07.07 0 .14 0 0 .05 0h.16s-.09.08-.15 0l-.08.13c-.08-.11-.23-.17-.25-.24-.17.06-.4.05-.51.2s-.06 0-.08-.06.07 0 .08 0-.29 0-.31.12.07-.09-.1-.07c-.33-.12-.54.22-.91.07-.42-.05-.86.07-1.28 0a.35.35 0 0 0-.2 0h-.12c-.18 0-.3-.05-.53 0H234.4h.51s-.06 0 0 0-.06 0 0 0a.22.22 0 0 0 .12 0H235.62c-.11 0 .22 0 .19.08s.29 0 .43 0h.16s.13 0 .2-.09-.06.07 0 .12.17 0 .13-.08.07 0 .11.08.07 0 .13-.06 0 .09.14.07-.11.16-.11.16zm2.81-.05zm.24 0H240V476l.07.07zm-.5-.6h.05-.07zM239.5 475.58z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M260.96 419.37h-.01l.01.01v-.01zM243.34 420.03V420l-.02.03h.02z"
                        />
                        <path className="cls-59" d="M262.26 476zM262.83 475.94h.08zM263.26 476zM256.37 476.3s-.02.02 0 0zM258.42 476l-.06.05s.06 0 .06-.05zM258.26 476a.09.09 0 0 0 .1 0 .12.12 0 0 0-.1 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M265.14 419.53l.02-.01-.02.01z" />
                        <path className="cls-59" d="M265.16 475.86zM265.23 475.85zM264.56 475.89zM264.39 475.9a.76.76 0 0 0 .16 0s-.12-.01-.16 0zM263.66 475.76h.15s-.06 0 0 0c-.18-.07.04.01-.15 0zM263.21 475.72c.08 0 0 0 0 0s-.06-.02 0 0zM259.94 475.62v-.08c-.05.01.06.03 0 .08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M259.31 419.73l.06.05.03-.08-.09.03zM258.94 419.08l.03-.01-.1.03.07-.02z"
                        />
                        <path className="cls-59" d="M253.45 475.32v.16s.07-.2 0-.16zM251.08 475.47c0-.08-.09-.13-.13-.06s.1.08.13.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M243.97 418.95l.04-.05-.09.04.05.01z" />
                        <path className="cls-59" d="M234.39 451.94zM234.39 452.05s0 .05 0 0v.07zM234.26 453.69zM234.14 454.71zM234 454.88zM234.26 453.69s-.01.02 0 0zM234.45 452.28z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M234.22 396.91v-.01l-.02-.01.02.02z" />
                        <path className="cls-59" d="M234.25 452.9h.07zM234.36 452.36zM234.18 453.49z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M234.39 407.17z" />
                        <path className="cls-59" d="M233.81 458.12c.12 0 .16.05.3 0-.06.01-.22-.04-.3 0zM234.45 452.29z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M234.11 401.78h.01-.01z" />
                        <path className="cls-59" d="M233.83 455.93zM234 455.39zM234 456.22s0 .01 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M234 400.17h.03l-.01-.01-.02.01z" />
                        <path className="cls-59" d="M234.65 462.22h-.06s.05.05.06 0zM234.44 452.28zM235.06 456.23s0 .02 0 0zM234.88 460.1zM235.06 456.41h-.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M234.66 462.54c0-.05-.06 0-.09 0h.09c.04 0-.07-.06-.07-.09-.05 0 0-.1-.05-.14h-.09v-.05h.08c.08 0-.08-.09-.06-.12s0 .07.1 0v.05h.12c.12 0 0-.07 0-.13h-.11c-.08-.09.23-.07.12-.14s-.17 0-.11-.07h.1c0-.06-.14 0-.07-.1s0 .05.05 0-.06 0-.06-.07h.1c0-.07-.07-.14-.08-.21h.09c0-.1 0-.2.12-.29h-.09H234.8c.03 0-.18-.17-.06-.24.05-.05-.21-.06-.11-.11.06-.11 0-.23.14-.31-.17 0 .09-.11-.15-.11.12-.07.16 0 .25-.14s-.15 0-.17-.06h.13-.14.16a.14.14 0 0 1-.1 0c-.06 0 .1-.1.17-.1l-.11-.1h.11c-.14 0 .14 0 0-.06a.41.41 0 0 1-.11 0c.08 0 .09-.08.06-.12h.13v-.24a.36.36 0 0 1-.23 0h.15H234.97h-.05.08c-.1 0 .15-.07 0-.09h.05c0-.08-.05-.12-.05-.19s-.1 0-.21-.05c0-.05.15-.1.14-.16s-.11 0-.19 0c.12 0 .11-.07.2 0a.28.28 0 0 0-.12-.18h-.12.12c-.19-.11.37-.24.11-.32l-.13-.08h.17c-.21-.09 0-.14-.1-.21.37-.06 0-.21.21-.29H235.07h-.12c-.11-.18.13-.36.2-.53s-.46 0-.25-.12h.17c-.2-.13 0-.26-.17-.39h.09c.11 0 0-.1-.1-.1h.14c.05 0-.15-.06 0-.08h.05c-.06 0 0-.08-.12-.06.06-.05-.07-.09 0-.13-.15 0 .07-.08-.14-.09.22 0 .17-.08.07-.11h.16c.09 0-.05-.06-.16-.06.25-.06-.21-.12.11-.16a1.25 1.25 0 0 1-.25-.29c.21 0 0 .1.24.1-.09-.09-.26-.14-.22-.22s.09 0 .12 0 0-.17-.1-.25 0 0-.06 0c-.13 0-.27-.06-.34-.06.25 0 .06-.08.38 0h-.12.12c.12 0-.14 0-.15-.08h.11c-.08 0-.16-.05-.13-.1h.06c0-.07-.22-.12-.15-.2s.06 0 .2 0h-.07s-.11-.07-.06-.11h.06v-.07h-.19c.04 0 0 0 .08-.06s-.09 0 0-.07h.18c-.12 0 0-.09-.16-.11s0 0 .1 0-.17 0-.1-.05c0-.06-.06-.12 0-.18s0 .05.14 0-.16-.17-.14-.25c-.17 0 .08-.06 0-.1h.07c0-.06-.05-.11-.1-.19s0-.09 0-.12 0 0-.09 0c.2-.11-.11-.2 0-.3v-.08h-.07a.07.07 0 0 1 0-.06h.11c.08 0-.1 0 0-.07s-.05 0 0-.07 0 0 .07 0-.1-.07-.05-.1v.05c.06 0 0 0 .05-.06v-.05c-.12 0 0-.08-.1-.14s0 0 .09 0 0-.05 0-.08v-.19c0-.07-.06-.08-.08-.14a.13.13 0 0 0 0-.09v-.05a.19.19 0 0 1 0-.08.41.41 0 0 0 0-.1V452.57c0 .07 0 0 .07.06h-.08v.11c0 .01 0 0 0 0v.08c0 .08 0 0-.06 0s0 .07 0 .1v.11c0 .05 0 .09-.08.13.08 0 .06.06.07.09h-.08.05-.06s.07.08 0 .14.17-.05.22 0H234.33h.05-.08a.1.1 0 0 1-.08.06H234.22c-.06 0 0 .11.09.08.08.07-.05.15 0 .22s0 .09.08.12-.06 0-.1 0 .06 0 0 .08-.06 0 0 0-.09 0 0 .09c-.09 0-.11 0-.09.05h.07a.07.07 0 0 1 0 .06H234c-.16.08.23.15 0 .22.08 0 .06-.05.16 0s-.19.08-.2.09.18.05.13.11a.28.28 0 0 1 .2 0s-.19.05-.22 0a.09.09 0 0 0-.09 0h.05c-.05 0-.05.07-.12.06s.07 0 .1 0 0 .08-.06.13h.08c-.06.07.09 0 .1.08s-.17 0-.11 0h-.17c-.04 0-.06.09-.09.11h.03.25c.08 0 .06.06-.08.07.05-.07-.13 0-.15-.05-.12.06.15 0 .14.09s-.14 0-.13 0h.19c.06 0 0 0 0 .06.08 0 .07 0 .09.06s0 0-.07 0c.14 0-.14.07-.05.12h-.18c-.03 0-.12 0 0 .1a.25.25 0 0 1 .19 0l-.07-.08.15.06s-.07-.06-.05-.07a.26.26 0 0 0 .15 0c-.16 0 .09.07 0 .11h-.26c-.12.06.13.11.06.19h.05c.1 0 0 .05 0 .07a.74.74 0 0 0-.18 0c.07 0 0 .05.17.06h-.12c-.05.07.26.07.23.13s-.17 0-.24 0 .12.06 0 .07.14 0 .13 0a.34.34 0 0 0 .16 0c-.29.06 0 .17-.23.23a.25.25 0 0 1 .06.13s.27 0 .17.1-.08 0-.14 0c-.32 0 0 .07-.15.11-.11 0 .12.08.09.13h.03a.46.46 0 0 1 .27.15.67.67 0 0 0-.2 0h.24a2 2 0 0 1-.26.05c-.18 0 0 .05 0 .07h-.07c0 .06.22.07.2.13h.06c.19 0-.11 0 0 .07H234a1 1 0 0 1 .23.13 1.08 1.08 0 0 1-.31-.11s0 .08.11.1-.07 0 0 0 .23.08.23.12c-.38 0-.1.13-.39.17.14.09-.06.17 0 .27h.31l-.18.07h-.14c-.07 0-.13 0-.21.06h.26c.16.07-.26.06-.09.13h-.1c.06 0 0 .14.24.17h-.13c-.02 0 .26.2.11.27h-.07s.14 0 .06.05h-.07s.12 0 .08.06h-.08c-.09.09.2.14.25.21a.35.35 0 0 0-.3.1c0 .1.18.18.26.27-.22.06-.08.2-.2.29a.35.35 0 0 1 .18 0s.14.06 0 .06c-.17 0-.12.06-.12.1h.07c-.33.1.13.25-.16.3.06 0 .06 0 .12.07h-.12a.17.17 0 0 0 0 .17h-.08s.33.06.34.1h-.1c0 .07-.12.15 0 .22h-.08s-.09.14.12.12c-.14 0 0 .08.06.12h-.1c.13 0 .16 0 .2.09s-.08 0-.05 0 .09 0 0 .08h-.06l.1.06c.1.06 0 .07-.11.08.06 0 .13 0 .1.05h-.06c0 .06.11.09 0 .14v-.09h-.21c.07 0 .21.09.18.13s0 .05 0 .07.07 0 .14 0v-.05s.08 0 0 .06h.13c-.11 0-.17.08-.24.09s.05.15.19.19 0 0-.05 0 0 .1.12.11-.09 0-.07 0c-.11.12.23.2.08.34 0 .16.07.32 0 .48s0 0 0 .07v.05c0 .06-.06.11 0 .19s0 .09 0 .09V463.13a.11.11 0 0 0 0-.05v-.05-.05c0-.05 0 0 0 0v-.08-.08-.06c0-.06 0-.08.07-.07s0-.11 0-.16a.11.11 0 0 1 0-.05l-.09-.08c-.09-.08.07 0 .12 0s0-.06-.08 0h.08c-.08 0 0 0 0-.05s.07 0 .06-.05.11.24.11.24zm0-1zm0-.09h-.06zm-.59.18z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M234.14 405.28l.01.01.01-.01-.02-.01v.01zM234.93 403.86h-.03l.02.01.01-.01z"
                        />
                        <path className="cls-59" d="M234.51 453.2zM234.5 453z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M234.51 396.49h-.02.02z" />
                        <path className="cls-59" d="M234.85 455.38s.02.01 0 0zM234.54 454.62h0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M235.06 399.88v.01-.01z" />
                        <path className="cls-59" d="M234.6 454.68s-.02-.01 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M234.42 395.8v-.01.01z" />
                        <path className="cls-59" d="M234.42 452.13zM234.41 452.1zM234.45 452.35zM234.46 452.41v-.06s-.02.05 0 .06zM234.32 452.68v-.05s.01-.02 0 .05zM234.28 452.85s-.01.02 0 0zM234.18 454.06h-.08.08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M234.62 397.95l.06-.02-.09-.01.03.03zM233.98 398.09l-.01-.01.03.04-.02-.03z"
                        />
                        <path className="cls-59" d="M233.88 456.46h.12s-.16-.03-.12 0zM234 457.34c-.08 0-.13 0-.05.05s.05-.04.05-.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M233.85 403.63l-.05-.02.04.03.01-.01z" />
                        <path className="cls-59" d="M257.56 463.88zM257.57 464v-.06a.21.21 0 0 0 0 .08zM257.43 465.64zM257.32 466.66zM257.17 466.83s-.01 0 0 0zM257.43 465.64s0 .01 0 0zM257.62 464.22z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M257.4 408.85v-.01h-.03l.03.01z" />
                        <path className="cls-59" d="M257.43 464.85h.07zM257.54 464.3zM257.36 465.44z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M257.56 419.12v-.01.01z" />
                        <path className="cls-59" d="M257 470.06c.12 0 .16.06.3 0-.07.01-.23-.06-.3 0zM257.62 464.23z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M257.29 413.73l.01-.01-.01.01z" />
                        <path className="cls-59" d="M257 467.88zM257.22 467.33zM257.18 468.16s-.02.01 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M257.18 412.12l.02-.01v-.01l-.02.02z" />
                        <path className="cls-59" d="M257.83 474.16h-.06s.05.05.06 0zM257.61 464.22zM258.23 468.17v.05a.07.07 0 0 0 0-.05zM258.05 472.05zM258.24 468.36h-.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M257.84 474.48H257.83c.03 0-.07-.06-.06-.08-.05 0 0-.11-.05-.15h-.09s-.05 0 0 0h.09c.09 0-.09-.08-.06-.12s0 .08.09 0h.12c.12 0 0-.07 0-.14s-.07 0-.11 0 .22-.07.11-.13-.17 0-.1-.07h.1c0-.06-.15 0-.07-.1s0 .05.05 0-.06 0-.06-.06h.1c0-.06-.07-.14-.08-.21a.1.1 0 0 0 .09 0c0-.09 0-.19.12-.28h-.1.08H257.99c.03 0-.18-.18-.06-.24 0-.05-.22-.06-.11-.1.05-.11 0-.23.14-.31-.17 0 .08-.11-.15-.12.12-.06.16 0 .25-.13s-.15 0-.17-.06h.13-.14.16-.1c-.06 0 .1-.1.17-.1l-.11-.1a.15.15 0 0 1 .1 0c-.13-.06.15 0 0-.06a.19.19 0 0 1-.11 0c.08 0 .09-.07.05-.12h.1v-.24c0-.09-.21 0-.23 0h.15H258.11h-.05.12c-.09 0 .16-.06 0-.08v-.19c0-.07-.11 0-.21 0s.15-.11.14-.17-.11 0-.19 0c.12 0 .11-.06.2 0a.28.28 0 0 0-.12-.18.26.26 0 0 1-.12 0h.11c-.19-.1.37-.23.11-.32l-.13-.09h.17c-.21-.09 0-.15-.11-.22.38-.06 0-.21.22-.28H258.23h-.13c-.1-.17.13-.35.21-.53s-.46 0-.25-.12h.17c-.2-.13 0-.27-.17-.39h.08s0-.1-.09-.1h.14c.05 0-.16-.07 0-.08h.05c-.06 0 0-.08-.13-.07.07 0-.06-.09 0-.12-.15 0 .07-.09-.14-.09.21 0 .17-.09.07-.12h.15c.09 0 0-.07-.15-.06.25-.06-.21-.13.11-.16a1.21 1.21 0 0 1-.25-.29c.2 0 0 .1.24.09-.09-.08-.27-.13-.22-.22s.09 0 .12 0 0-.17-.1-.24 0 0-.06 0c-.12 0-.27-.06-.33-.06.25 0 .06-.08.37 0a.2.2 0 0 0-.11 0 .13.13 0 0 1 .11 0c0-.05-.14 0-.14-.08h.22c-.08 0-.17-.05-.13-.09h.05c0-.07-.21-.12-.14-.2s.05 0 .2 0l-.05-.05h-.07s-.1-.07-.06-.1h.06v-.07h-.05c-.07 0-.18 0-.14-.05s0 0 .08-.06-.09 0-.06-.06h.19c-.12 0 0-.09-.16-.11h.11-.09 0c0-.06-.07-.12 0-.17s0 0 .14 0c0-.09-.17-.17-.14-.25-.17 0 .08-.06 0-.1h.08c0-.05-.05-.11-.1-.19s0-.08 0-.12 0 0-.08 0c.19-.1-.11-.2 0-.29v-.08h-.13.11c.08 0-.1 0-.05-.06s-.05 0 0-.06 0 0 .07 0-.1-.06 0-.09 0 0 0 .05 0 0 .05-.06v-.06c-.12 0 0-.09-.1-.14s0 0 .08 0 0 0 0-.08v-.2c0-.07-.06-.08-.07-.14a.14.14 0 0 0 0-.09v-.14a.62.62 0 0 0 0-.1v.29c0 .08 0 0 .07.06h-.09s0 .1-.05.11 0 0 .05 0 0 0 0 .08 0-.05 0 0v.2c0 .04-.05.09-.08.14.07 0 .06.05.07.09s-.07 0-.08 0a.07.07 0 0 1 .05 0h-.06s.06.09 0 .14.18 0 .22 0h-.1c-.01 0 0 0 0 0h-.06-.07c-.07 0 0 0 0 0a.13.13 0 0 1-.08.06H257.39c-.06 0 0 .1.09.08.08.08-.06.15 0 .22 0 .05 0 .1.08.13s-.06 0-.1 0 .06 0 0 .08-.05 0 0 0-.08 0 0 .1c-.09 0-.12 0-.09.05h.06a.06.06 0 0 1 0 .06h-.12c-.15.09.24.16 0 .22.08 0 .06-.05.16 0s-.2.08-.2.09.18.05.13.11.16 0 .2 0-.19.05-.22 0 0 0-.08 0 0 .07-.12.06a.07.07 0 0 0 .1 0c-.07.05 0 .08-.05.13h.08c-.07.08.08 0 .1.09s-.17 0-.11 0a.2.2 0 0 1-.17 0c.09.05-.07.09-.09.12H257.08a1.09 1.09 0 0 1 .25 0c-.05 0 .05.06-.08.07.05-.06-.13 0-.15 0-.13.06.15 0 .14.09s-.14 0-.13 0h.18c.05 0 .05 0 0 .06.07 0 .06 0 .09.05s0 0-.07 0c.13 0-.14.07 0 .11h-.19c-.04 0-.11 0 0 .1s.08 0 .18 0l-.07-.08.16.05s-.07-.05 0-.07.06 0 .15 0c-.16 0 .09.07 0 .11h-.26c-.13.06.13.1.06.18.11 0 0 0 .06.07h-.18c.07 0 0 .06.17.06h-.12c-.05.06.26.07.23.13s-.17 0-.24 0h.05c.05 0 .12.05 0 .07s.14 0 .13 0h-.05.17c-.29.06 0 .17-.24.22a.23.23 0 0 1 .07.14s.28 0 .18.09-.08 0-.14 0c-.32 0 0 .07-.15.12-.11 0 .12.07.1.12h-.05a.43.43 0 0 1 .26.16H257.64a.76.76 0 0 1-.27.05c-.18 0 0 .06 0 .08h-.08c0 .07.22.07.21.14h.06c.19 0-.11 0 0 .07h-.19s.19.09.22.14a1.62 1.62 0 0 1-.3-.11s0 .08.11.09-.07 0 0 0 .23.07.23.12c-.38 0-.1.13-.4.16.15.09-.06.18 0 .28h.31l-.18.07h-.14c-.07 0-.13 0-.21.05.11 0 .16 0 .12.05h.14c.16.07-.26.06-.1.14h-.09c.05 0 0 .14.24.18h-.14c0 .09.26.2.12.27h-.3.06-.06s.13 0 .09.07h-.08c-.09.09.2.13.25.21-.21 0-.27.06-.31.1 0 .1.18.17.27.26-.22.06-.09.2-.2.3a.27.27 0 0 1 .18 0s.14.06 0 0c-.18 0-.13.06-.13.09h.23c-.32.09.14.24-.15.29.06 0 .06 0 .11.07H257a.15.15 0 0 0 0 .17s.34.05.35.09h-.17c0 .08-.13.15 0 .23h-.08c-.01 0-.09.14.12.13-.14 0 0 .07.06.12h-.1c.13 0 .16 0 .2.08h-.06c-.05 0 .1 0 .05.07h-.06l.1.05c.1.05 0 .08-.11.08s.12 0 .1.05a.06.06 0 0 1-.06 0c-.06.07.11.1 0 .14h-.05v-.09h-.21c.07 0 .21.09.17.13-.06 0 0 .05 0 .07s.07 0 .13 0v-.05s.08 0 0 .05h.14c-.12 0-.17.08-.24.09s.05.15.19.19 0 0-.06 0 0 .11.11.12-.08 0-.06 0c-.11.12.23.2.08.33 0 .15.07.32 0 .47s0 .05 0 .08c0 .07-.06.11 0 .2s0 .1 0 .09V475.07v-.05a.15.15 0 0 0 0-.06v-.06-.07c0-.01 0-.08.05-.08a.12.12 0 0 1 0-.07s0-.08.07-.07 0-.1 0-.16 0 0 .05-.06-.06-.05-.09-.07.07 0 .12 0 0-.07-.08-.05 0 0 .08 0 0 0-.06-.05.08 0 .07 0 .09.26.09.26zm0-1zm0-.09h-.06c.01 0-.01-.02.02-.04zm-.59.19z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M257.32 417.23l.02-.01h-.02v.01zM258.11 415.81h-.03.03z"
                        />
                        <path className="cls-59" d="M257.68 465.14zM257.68 464.94z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M257.68 408.44l-.02-.01.02.01z" />
                        <path className="cls-59" d="M258 467.32zM257.72 466.56s.06 0 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M258.24 411.83h-.01.01z" />
                        <path className="cls-59" d="M257.77 466.62s-.01-.01 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M257.6 407.74v-.01.01z" />
                        <path className="cls-59" d="M257.6 464.07zM257.59 464.05zM257.63 464.29zM257.64 464.36v-.06s-.02.04 0 .06zM257.5 464.63v-.06s.01-.01 0 .06zM257.46 464.79s-.02.03 0 0zM257.36 466h-.08.08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M257.8 409.9l.05-.03-.08-.01.03.04zM257.16 410.03l-.02-.01.03.04-.01-.03z"
                        />
                        <path className="cls-59" d="M257.06 468.4h.15s-.21-.02-.15 0zM257.2 469.28c-.08 0-.13 0-.05.05s.07-.04.05-.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M257.02 415.57l-.04-.01.04.03v-.02z" />
                        <path className="cls-59" d="M255.85 446zM255.85 446.07zM255.72 446.89zM255.61 447.4zM255.72 446.89zM255.91 446.18z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M255.69 390.32h-.03.03z" />
                        <path className="cls-59" d="M255.72 446.49zM255.65 446.79z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M255.85 395.46v-.01.01z" />
                        <path className="cls-59" d="M255.27 449.1h.3a3 3 0 0 0-.3 0zM255.91 446.19zM255.57 449.1zM255.3 448zM255.51 447.74zM255.47 448.15s-.02 0 0 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M255.47 391.96h.02v-.01l-.02.01z" />
                        <path className="cls-59" d="M256.11 451.15h-.05s.05.03.05 0zM255.9 446.18zM256.52 448.16zM256.34 450.09s.02 0 0 0zM256.53 448.25h-.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M256.13 451.31H256.12h-.06v-.07h-.1.08c.08 0-.08 0-.05-.06s0 0 .09 0h.12c.12 0 0 0 0-.07h-.12c-.07-.05.23 0 .12-.07s-.17 0-.1 0h.1-.07c.09 0 0 0 0 0h.1s-.07-.07-.09-.11h.1c0-.05 0-.1.12-.14h-.1.07H256.32c.03 0-.18-.08-.06-.12.05 0-.22 0-.11-.05.05-.05-.05-.11.14-.15-.17 0 .08-.06-.16-.06a.81.81 0 0 0 .26-.07h-.18.13-.13c-.06 0 .1-.05.16-.05l-.1-.05h.1c-.13 0 .15 0 0 0h-.1c.08 0 .08 0 .05-.06h.1v-.12h-.25a.54.54 0 0 1 .22 0h-.05.12c-.09 0 .16 0 0 0 0-.05 0-.06-.05-.1a1 1 0 0 1-.2 0s.15-.05.14-.08a.62.62 0 0 0-.19 0h.2c.09 0 0 0-.12-.09h-.12.11c-.19-.05.37-.11.11-.15h-.14.18c-.21 0 0-.07-.11-.11.38 0 0-.1.22-.14h-.15c-.11-.09.13-.18.21-.26s-.46 0-.25-.06h.16c-.19-.07 0-.13-.16-.2h.08c.12 0 0-.05-.09-.05h.13c.07 0-.15 0 0 0h.05-.13c.07 0-.06-.05 0-.07h-.14c.21 0 .17 0 .07-.06h0c.25 0-.21-.06.11-.08a1 1 0 0 1-.25-.14c.2 0 0 .05.24.05-.09-.05-.27-.07-.22-.11s.08 0 .12 0 0-.09-.11-.13h0a2.19 2.19 0 0 1-.33 0h.37-.11H256.06h.11-.13s-.21-.06-.14-.1.05 0 .2 0h-.07s-.1 0-.06-.05h.06-.19.08-.06.18c-.11 0 0 0-.15-.06h.12-.1s-.06-.06 0-.09 0 0 .15 0c0 0-.17-.08-.14-.12-.16 0 .08 0 0-.05h.08l-.1-.1v-.06h.1c.19 0-.12-.1 0-.15h-.13a.13.13 0 0 0 .11 0h-.05c.09 0-.1 0 0 0h.07c-.12 0 0 0-.1-.07s0 0 .08 0 0-.06 0-.1-.06 0-.07-.06 0 0 0 .06 0 0 .07 0h-.09v.06c0 .06 0 0 0 0v.05c0 .05 0 0 .05.06s-.05 0-.08.06c.07 0 .06 0 .07.05a.17.17 0 0 1-.09 0 .06.06 0 0 1 .05 0h-.06s.06 0 0 .06.18 0 .22 0h-.15s.05 0 0 0H255.75h.07-.09s0 .05.1 0c.08 0-.06.08 0 .11s0 .05.09.06h-.1s.06 0 0 0-.05 0 0 0-.08 0 0 .05h-.08.06-.12c-.15.05.23.08 0 .12h.16c.1 0-.2 0-.2.05s.18 0 .13.05a.68.68 0 0 1 .2 0 .54.54 0 0 1-.22 0h-.12a.16.16 0 0 0 .1 0c-.07 0 0 0-.06.07h.09-.18-.09H255.53a1.1 1.1 0 0 1 .25 0h-.08-.15c-.01 0 0 0 0 0-.13 0 .15 0 .14.05s-.15 0-.13 0h.18c-.06 0 .05 0 0 0a.22.22 0 0 1 .09 0h-.07c.13 0-.14 0-.06.06h-.18c.1 0-.11 0 0 .05a.36.36 0 0 1 .18 0h-.07.15s-.06 0 0 0h.15c-.16 0 .09 0 0 .05h-.27c-.12 0 .13.05.06.09h.06-.18.17-.12s.26 0 .23.07a1.54 1.54 0 0 1-.24 0s.13 0 0 0h.25c-.3 0 0 .09-.24.11a.45.45 0 0 1 .07.07c-.09 0 .28 0 .18.05s-.09 0-.15 0c-.31 0 0 0-.14.06-.11 0 .12 0 .1.07h-.05a.54.54 0 0 1 .26.07h-.19H255.7c-.17 0 0 0 0 0h-.08s.22 0 .21.06h.06c.19 0-.11 0 0 0h-.2a.88.88 0 0 1 .23.07l-.31-.06.12.05c.12.05-.07 0 0 0s.23 0 .23.06c-.39 0-.1.07-.4.09.14 0-.06.08 0 .13h.31-.53.25c.17 0-.25 0-.09.07h-.09s0 .07.24.08h-.14c0 .05.26.1.12.14h-.08.07-.08.09-.08c-.09 0 .2.07.25.11a.57.57 0 0 0-.31.05c0 .05.18.08.27.13-.22 0-.09.1-.2.15a.46.46 0 0 1 .17 0s.14 0 0 0c-.18 0-.13 0-.13.05h.23c-.32.05.14.12-.15.15h.11-.12v.08h-.09s.34 0 .34.05h-.16s-.13.07 0 .11h-.07s-.09.07.12.06c-.14 0 0 0 0 .06h-.1a.82.82 0 0 1 .21 0h-.06c-.05 0 .1 0 0 0h-.07 0 .1-.06c-.06 0 .11 0 0 .07h-.06a.72.72 0 0 1-.21 0c.07 0 .21 0 .17.07-.06 0 0 0 0 0h.13s.09 0 0 0h.14a2.08 2.08 0 0 1-.24.05c.05 0 .05.08.19.1h-.06s0 .06.11.06h-.06c-.11.06.23.1.08.17 0 .08.07.16 0 .23s0 0 .05 0-.06.06 0 .1 0 .05 0 .05H256.19c.07 0 0 0 0-.08s0 0 .05 0h-.05.08 0a.08.08 0 0 1-.14-.18zm-.05-.52zm0 0zm-.6.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M255.61 394.51h.02-.03.01z" />
                        <path className="cls-59" d="M255.74 446.88z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M256.39 393.8h-.02l.02.01v-.01z" />
                        <path className="cls-59" d="M256 446.64zM256 446.54z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M255.97 390.12h-.02.02z" />
                        <path className="cls-59" d="M256 447.35h0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M256.52 391.81v.01-.01z" />
                        <path className="cls-59" d="M256.06 447.38s-.06 0 0 0z" transform="translate(0 -56.34)"
                        />
                        <path className="cls-59" d="M255.89 389.77z" />
                        <path className="cls-59" d="M255.89 446.11zM255.88 446.09zM255.93 446.25s-.02-.01 0 0zM255.79 446.38s.01-.03 0 0zM255.75 446.47zM255.65 447.07z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M256.09 390.85l.05-.01-.08-.01.03.02zM255.44 390.92l-.01-.01.03.02-.02-.01z"
                        />
                        <path className="cls-59" d="M255.35 448.27zM255.49 448.71h-.05c.08 0 .07.01.05 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-59" d="M255.31 393.69l-.05-.01.05.01z" />
                        <path className="cls-33" d="M217.83 544.2a4.44 4.44 0 0 1 4.44 4.44 4.44 4.44 0 0 1-4.44-4.44z"
                        />
                        <path className="cls-33" d="M318.59 602.66a2.73 2.73 0 0 0-1.81-.49 2.62 2.62 0 0 0 .17-1.37 2.76 2.76 0 0 0-2.33 3.11 297.59 297.59 0 0 1 4-1.25z"
                            transform="translate(0 -56.34)" />
                        <rect className="cls-33" x="220.05" y="532.71" width="95.38" height="18.18"
                            rx="1.67" ry="1.67" />
                        <path className="cls-33" d="M269.31 588.46a2.6 2.6 0 0 1 2.57-.82 2.59 2.59 0 0 1-2 1.9 2.73 2.73 0 0 1 .06 1 2.59 2.59 0 0 1-2.24-2.9 2.55 2.55 0 0 1 1.61.82zM229.2 588a2.93 2.93 0 0 0-2.61-1.6 2.94 2.94 0 0 0 1.66 2.64 2.75 2.75 0 0 0-.34 1.07 3 3 0 0 0 3.26-2.6 3 3 0 0 0-1.97.49z"
                            transform="translate(0 -56.34)" />
                        <path fill="url(#linear-gradient-41)" d="M216.97 547.2h100.52v18.18H216.97z"
                        />
                        <path className="cls-33" d="M451.16 544.2a4.44 4.44 0 0 1 4.44 4.44 4.44 4.44 0 0 1-4.44-4.44z"
                        />
                        <path className="cls-33" d="M551.92 602.66a2.69 2.69 0 0 0-1.8-.49 2.73 2.73 0 0 0 .17-1.37 2.75 2.75 0 0 0-2.33 3.11 341.07 341.07 0 0 1 4-1.25z"
                            transform="translate(0 -56.34)" />
                        <rect className="cls-33" x="453.39" y="532.71" width="95.38" height="18.18"
                            rx="1.67" ry="1.67" />
                        <path className="cls-33" d="M502.64 588.46a2.61 2.61 0 0 1 2.57-.82 2.57 2.57 0 0 1-2 1.9 2.73 2.73 0 0 1 .07 1 2.59 2.59 0 0 1-2.24-2.9 2.52 2.52 0 0 1 1.6.82zM462.54 588a3 3 0 1 0 2-.49 3 3 0 0 0-2 .49z"
                            transform="translate(0 -56.34)" />
                        <path fill="url(#linear-gradient-42)" d="M450.31 547.2h100.52v18.18H450.31z"
                        />
                        <path fill="url(#linear-gradient-43)" d="M1288.78 258.04h412.1V578.6h-412.1z"
                        />
                        <path d="M1689 323.31V323h-392.81v.34h-.34v309h.68V465.05h43.27v167.29h.67V465.05h113.87v167.29h.68V465.05h43.27v167.29h.68V465.05h47.88v167.29h.68V465.05h43.27v167.29h.68V465.05h53.23v167.29h.68V465.05h43.27v167.29h.68v-309zm-348.53.34h113.87v70h-113.87zm-.67 70h-43.27v-70h43.27zm115.22-70h43.27v70H1455zm44 0h47.88v70H1499zm48.56 0h43.27v70h-43.27zm44 0h53.23v70h-53.23zm53.91 0h43.27v70h-43.27zm-348.96 140.73v-70h43.27v70zm43.94 0v-70h113.87v70zm114.55 0v-70h43.27v70zm44 0v-70h47.88v70zm48.56 0v-70h43.27v70zm44 0v-70h53.23v70zm53.91 0v-70h43.27v70z"
                            transform="translate(0 -56.34)" fill="url(#linear-gradient-44)" />
                        <path className="cls-29" d="M1212.54 575.84h266.24v2.82h-266.24z" />
                        <path className="cls-32" d="M1214.85 311.35h260.4v264.49h-260.4z" />
                        <path fill="url(#linear-gradient-45)" d="M1218.51 315.15h253.1v260.69h-253.1z"
                        />
                        <path className="cls-33" d="M1177.18 411.31h2.61v167.35h-2.61z" />
                        <path className="cls-40" d="M1174.15 411.31l-3.48-17.82h7.65v17.82h-4.17z"
                        />
                        <path className="cls-33" d="M1182.49 411.31l3.49-17.82h-7.66v17.82h4.17z"
                        />
                        <path className="cls-29" d="M1184.49 406.87h-12.34l2 4.44h8.34l2-4.44zM1168.27 393.49h20.11l-3.26-4.44h-13.59l-3.26 4.44z"
                        />
                        <path className="cls-25" d="M1177.09 389.05h2.47l-.4-2.22h-1.67l-.4 2.22z"
                        />
                        <circle className="cls-25" cx="1178.32" cy="386.27" r="1.27" />
                        <path className="cls-88" d="M1218.51 315.15v259.33M1246.82 315.15v259.33M1320.63 315.15v259.33M1348.95 315.15v259.33M1380.24 315.15v259.33M1408.55 315.15v259.33M1443.29 315.15v259.33M1471.61 315.15v259.33M1218.51 433.81h253.1M1218.51 315.15h253.1M1218.51 374.48h253.1"
                        />
                        <path id="_Rectangle_45" data-name="&lt;Rectangle&gt;" className="cls-33"
                            transform="rotate(-180 1280.15 532.71)" d="M1246.82 489.41h66.65v142.93h-66.65z"
                        />
                        <path id="_Rectangle_46" data-name="&lt;Rectangle&gt;" className="cls-40"
                            transform="rotate(-180 1280.15 535.65)" d="M1251.68 495.3h56.94v137.05h-56.94z"
                        />
                        <path transform="rotate(90 1308.315 535.395)" fill="url(#linear-gradient-46)"
                            d="M1214.07 537.77h132.16v51.59h-132.16z" />
                        <path fill="url(#linear-gradient-47)" d="M1256.09 443h48.12v128.45h-48.12z"
                        />
                        <path className="cls-62" d="M1256.09 588.5a44.76 44.76 0 0 1 21.31-9c3.45-.46 7.06-.54 10.16-2.27 4.66-2.63 7.1-8.41 11.24-11.94a24.55 24.55 0 0 1 5.41-3.33v-31.18l-.8.33c-5.38 2.28-11.05 4.29-15.34 8.53-5 4.93-7.8 12.59-13.82 15.82a31.39 31.39 0 0 1-7.29 2.3 33.49 33.49 0 0 0-10.87 4.6zM1256.09 518.21a13.68 13.68 0 0 0 3.74-1.37c4.66-2.63 7.1-8.41 11.24-12a25.66 25.66 0 0 1 5.87-3.53c1.27-.6 2.55-1.16 3.85-1.69h-24.7z"
                            transform="translate(0 -56.34)" />
                        <g id="_Group_8" data-name="&lt;Group&gt;">
                            <path id="_Rectangle_47" data-name="&lt;Rectangle&gt;" className="cls-33"
                                transform="rotate(-180 1303.785 532.57)" d="M1301.14 552.09h5.28v17.3h-5.28z"
                            />
                            <path id="_Rectangle_48" data-name="&lt;Rectangle&gt;" className="cls-40"
                                transform="rotate(-180 1303.785 524.205)" d="M1301.14 552.09h5.28v.56h-5.28z"
                            />
                        </g>
                        <path id="_Rectangle_49" data-name="&lt;Rectangle&gt;" className="cls-33"
                            d="M1313.58 433.07h66.65V576h-66.65z" />
                        <path id="_Rectangle_50" data-name="&lt;Rectangle&gt;" className="cls-40"
                            d="M1318.44 438.96h56.94v137.05h-56.94z" />
                        <path transform="rotate(90 1375.08 535.39)" fill="url(#linear-gradient-48)"
                            d="M1280.83 537.77h132.16v51.59h-132.16z" />
                        <path fill="url(#linear-gradient-49)" d="M1322.85 443h48.12v128.45h-48.12z"
                        />
                        <path className="cls-62" d="M1371 588.5a44.8 44.8 0 0 0-21.31-9c-3.45-.46-7.06-.54-10.16-2.27-4.66-2.63-7.1-8.41-11.24-11.94a24.78 24.78 0 0 0-5.41-3.33v-31.18l.79.33c5.39 2.28 11.06 4.29 15.35 8.53 5 4.93 7.8 12.59 13.82 15.82a31.46 31.46 0 0 0 7.28 2.3 33.45 33.45 0 0 1 10.88 4.6zM1371 518.21a13.86 13.86 0 0 1-3.75-1.37c-4.65-2.63-7.1-8.41-11.23-12a25.66 25.66 0 0 0-5.87-3.53c-1.27-.6-2.56-1.16-3.85-1.69h24.7z"
                            transform="translate(0 -56.34)" />
                        <g id="_Group_9" data-name="&lt;Group&gt;">
                            <path id="_Rectangle_51" data-name="&lt;Rectangle&gt;" className="cls-33"
                                d="M1320.63 495.75h5.28v17.3h-5.28z" />
                            <path id="_Rectangle_52" data-name="&lt;Rectangle&gt;" className="cls-40"
                                d="M1320.63 495.75h5.28v.56h-5.28z" />
                        </g>
                        <path className="cls-40" d="M1246.82 352.66h133.41v36.39h-133.41z" />
                        <path className="cls-33" d="M1246.82 352.66h1.96v36.39h-1.96zM1378.28 352.66h1.96v36.39h-1.96z"
                        />
                        <path className="cls-25" d="M1281.42 431.59a4.4 4.4 0 1 1 0-8.79 4.34 4.34 0 0 1 2.15.56 4 4 0 0 1 1.53 1.48L1283 426a1.44 1.44 0 0 0-.63-.64 2 2 0 0 0-1-.24 1.92 1.92 0 0 0-1.44.57 2 2 0 0 0-.55 1.47 2 2 0 0 0 .55 1.46 1.93 1.93 0 0 0 1.44.58 1.9 1.9 0 0 0 1-.24 1.43 1.43 0 0 0 .63-.66l2.09 1.2a4.08 4.08 0 0 1-1.53 1.5 4.44 4.44 0 0 1-2.14.59zM1295.3 430.32a4.58 4.58 0 0 1-6.33 0 4.43 4.43 0 0 1 0-6.25 4.58 4.58 0 0 1 6.33 0 4.43 4.43 0 0 1 0 6.25zm-4.64-1.67a2 2 0 0 0 1.47.59 2 2 0 1 0 0-4.08 2.06 2.06 0 0 0-1.47 3.49zM1308.77 423v8.4h-2.4v-4.1l-1.88 3.15h-.21l-1.87-3.15v4.1H1300V423h2.4l2 3.42 2-3.42zM1315.84 423a3.07 3.07 0 0 1 2.19.82 3.19 3.19 0 0 1 0 4.38 3.07 3.07 0 0 1-2.19.82h-1v2.38h-2.4V423zm0 3.69a.66.66 0 0 0 .47-.18.67.67 0 0 0 .2-.5.65.65 0 0 0-.2-.5.67.67 0 0 0-.47-.19h-1v1.37zM1326.29 431.4l-.29-1.08h-2.43l-.28 1.08h-2.58l2.67-8.4h2.81l2.68 8.4zm-2.2-3h1.39l-.69-2.58zM1336.42 423h2.4v8.4h-1.92l-2.64-3.84v3.84h-2.4V423h1.92l2.64 3.84zM1350 423l-2.84 5.2v3.2h-2.4v-3.2l-2.85-5.2h2.67l1.42 3 1.38-2.95z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-93" d="M1029.32 578.6h89.84a3.85 3.85 0 0 1 3.85 3.85V586a3.86 3.86 0 0 1-3.85 3.85h-1.84a3.85 3.85 0 0 1-3.85-3.85 3.85 3.85 0 0 1 3.85-3.85h.69"
                            transform="translate(0 -56.34)" />
                        <path className="cls-93" d="M1037 522.26v56.19M1046.09 522.48v56.19M1054.85 522.48v56.19M1063.02 522.48v56.19M1071.39 522.26v56.19M1080.48 522.48v56.19M1089.24 522.48v56.19M1097.41 522.48v56.19"
                        />
                        <path className="cls-29" d="M1369.79 253.33h13.08v4.72h-13.08z" />
                        <path className="cls-33" d="M1382.87 253.33h13.08v4.72h-13.08z" />
                        <path className="cls-29" d="M1395.95 253.33h13.08v4.72h-13.08z" />
                        <path className="cls-33" d="M1409.04 253.33h13.08v4.72h-13.08z" />
                        <path className="cls-29" d="M1422.12 253.33h13.08v4.72h-13.08zM1375.95 248.61h13.08v4.72h-13.08z"
                        />
                        <path className="cls-33" d="M1389.04 248.61h13.08v4.72h-13.08z" />
                        <path className="cls-29" d="M1382.87 243.89h13.08v4.72h-13.08z" />
                        <path className="cls-33" d="M1395.95 243.89h13.08v4.72h-13.08z" />
                        <path className="cls-29" d="M1402.12 248.61h13.08v4.72h-13.08z" />
                        <path className="cls-29" transform="rotate(-180 1671.22 283.855)" d="M1664.68 309.67h13.08v4.72h-13.08z"
                        />
                        <path className="cls-33" transform="rotate(-180 1658.135 283.855)" d="M1651.59 309.67h13.08v4.72h-13.08z"
                        />
                        <path className="cls-29" transform="rotate(-180 1645.055 283.855)" d="M1638.51 309.67h13.08v4.72h-13.08z"
                        />
                        <path className="cls-33" transform="rotate(-180 1631.97 283.855)" d="M1625.43 309.67h13.08v4.72h-13.08z"
                        />
                        <path className="cls-29" transform="rotate(-180 1618.885 283.855)" d="M1612.34 309.67h13.08v4.72h-13.08z"
                        />
                        <path className="cls-33" transform="rotate(-180 1605.805 283.855)" d="M1599.26 309.67h13.08v4.72h-13.08z"
                        />
                        <path className="cls-29" transform="rotate(-180 1592.72 283.855)" d="M1586.18 309.67h13.08v4.72h-13.08z"
                        />
                        <path className="cls-29" transform="rotate(-180 1665.055 279.14)" d="M1658.51 304.95h13.08v4.72h-13.08z"
                        />
                        <path className="cls-33" transform="rotate(-180 1651.97 279.14)" d="M1645.43 304.95h13.08v4.72h-13.08z"
                        />
                        <path className="cls-29" transform="rotate(-180 1658.135 274.42)" d="M1651.59 300.23h13.08v4.72h-13.08z"
                        />
                        <path className="cls-33" transform="rotate(-180 1645.055 274.42)" d="M1638.51 300.23h13.08v4.72h-13.08z"
                        />
                        <path className="cls-29" transform="rotate(-180 1652.54 269.705)" d="M1646 295.51h13.08v4.72H1646z"
                        />
                        <path className="cls-33" transform="rotate(-180 1639.46 269.705)" d="M1632.92 295.51H1646v4.72h-13.08z"
                        />
                        <path className="cls-29" transform="rotate(-180 1632.08 274.42)" d="M1625.54 300.23h13.08v4.72h-13.08z"
                        />
                        <path className="cls-33" transform="rotate(-180 1618.995 274.42)" d="M1612.45 300.23h13.08v4.72h-13.08z"
                        />
                        <path className="cls-29" transform="rotate(-180 1638.885 279.14)" d="M1632.34 304.95h13.08v4.72h-13.08z"
                        />
                        <path className="cls-33" transform="rotate(-180 1625.805 279.14)" d="M1619.26 304.95h13.08v4.72h-13.08z"
                        />
                        <path className="cls-29" transform="rotate(-180 1612.72 279.14)" d="M1606.18 304.95h13.08v4.72h-13.08z"
                        />
                        <path fill="url(#linear-gradient-50)" d="M615.15 518.33L594 523.01v55.65h21.15v-60.33z"
                        />
                        <path className="cls-29" d="M615.15 518.33l-25.08 5.66v-1.5l25.08-6v1.84z"
                        />
                        <path className="cls-29" d="M602.78 614.59a11.12 11.12 0 0 0-4 3.75 14.43 14.43 0 0 0-2.86 5 21.12 21.12 0 0 0-.42 3.08 16.74 16.74 0 0 0-.2 5.32c.39 1.75 1.89 3.47 3.67 3.31h11c-.33-.75.39-1.53.9-2.18a9.06 9.06 0 0 0 1.38-3 24.48 24.48 0 0 0 .78-9.29 6.9 6.9 0 0 0-.6-2.37c-.47-.9-1.17-1.13-1.93-1.66a16.9 16.9 0 0 0-2.38-1.71 6.43 6.43 0 0 0-5.34-.25z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M603.66 613.45a.34.34 0 0 1 .11-.33c.1-.07.23 0 .36 0a1.2 1.2 0 0 0 .74-.37.75.75 0 0 1 .81-.2c.19.11.26.34.42.48a1.88 1.88 0 0 0 .45.22.5.5 0 0 1 .34.32.45.45 0 0 1-.15.42 3.37 3.37 0 0 1-.37.29c-.36.3-.57.79-1 1-1.26.53-1.65-.83-1.71-1.83z"
                            transform="translate(0 -56.34)" />
                        <path d="M615.15 635h-15.9s-2.25-3.36 2.5-11.63c5.34-9.29 13.4-9.3 13.4-9.3z"
                            transform="translate(0 -56.34)" fill="#bfc9d8" />
                        <path className="cls-25" d="M613.38 611.54a.37.37 0 0 0-.19-.2c-.24-.07-.34.28-.49.47-.27.34-.81.18-1.17-.06a.5.5 0 0 0-.36-.13c-.27 0-.26.47-.46.65s-.83 0-1.06.27c-.08.09-.09.21-.15.31-.2.35-.82.34-.91.73a.51.51 0 0 0 .36.55 1.93 1.93 0 0 0 .72 0 4.36 4.36 0 0 1 2.32.56 6.53 6.53 0 0 0 .82.45c2.09.86.99-2.84.57-3.6z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-96" d="M610.67 613.54a5.91 5.91 0 0 1 1.14.33 1.24 1.24 0 0 1 .65.44M612.84 612.71c.16.44.31.88.44 1.34M611.69 612.5l.64.73"
                            transform="translate(0 -56.34)" />
                        <g clipPath="url(#clip-path-3)">
                            <path transform="rotate(-180 949.105 540.125)" fill="url(#linear-gradient-51)"
                                d="M946.98 565.33h4.25v5.92h-4.25z" />
                            <path className="cls-29" d="M945.46 513.08h2.03v-.5h-1.53v-2.02h1.53v-.5h-2.03v3.02z"
                            />
                            <path className="cls-25" d="M956.86 519.57h3.53v28.46h-3.53z" />
                            <path className="cls-29" d="M937.49 516.81h42.27v3.23h-42.27zM951.71 549.54h13.83l-.61-1.84h-12.61l-.61 1.84z"
                            />
                            <path className="cls-33" d="M978.39 589a.92.92 0 0 0 .92.92h14v-2.15h-14a.92.92 0 0 0-.92.92z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-29" d="M981.92 533.58h12.81v2.1h-12.81z" />
                            <path className="cls-29" d="M980.03 533.58v15.96h1.38l1.74-15.96h-3.12zM995.45 509.5h1.69l-1.69 24.3v15.74h-1.39l-1.74-15.96 3.13-24.08z"
                            />
                            <path className="cls-99" d="M995.45 565.84h-.61a1.23 1.23 0 0 0-1.22 1.08l-1.68 12.94a1.22 1.22 0 0 0 .57 1.21l.89.55z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-33" d="M938 589a.92.92 0 0 1-.92.92H923v-2.15h14a.92.92 0 0 1 .92.92z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-29" d="M921.61 533.58h12.81v2.1h-12.81z" />
                            <path className="cls-29" d="M936.31 533.58v15.96h-1.38l-1.74-15.96h3.12zM920.89 509.5h-1.69l1.69 24.3v15.74h1.38l1.75-15.96-3.13-24.08z"
                            />
                            <path className="cls-99" d="M920.89 565.84h.61a1.23 1.23 0 0 1 1.22 1.08l1.68 12.94a1.24 1.24 0 0 1-.57 1.21l-.89.55z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-29" transform="rotate(-30.54 877.267 529.36)" d="M978.53 554.16h3.9v6.73h-3.9z"
                            />
                            <path className="cls-1" d="M979 557.79c.48-.15 4.4-1.07 3.76-6.9-.7-6.24-2.79-7.84-6.54-7.09s-5.33 3.1-3.32 9.06 4.57 5.39 6.1 4.93z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M978.39 560.81c-.88 1.87-2.45 3-3.52 2.49s-1.22-2.42-.34-4.29 2.45-3 3.51-2.48 1.22 2.47.35 4.28z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M974.16 515.58l-2.93-2.24 2.96-9.67 3.88 1.46-3.91 10.45z"
                            />
                            <path className="cls-1" d="M983.98 502.86l-1.91-2.8-2.69 3.1.2 1.35-1.88 5.74 3.05-.39 3.23-7z"
                            />
                            <path className="cls-25" d="M990.2 579l-6.76.3-4.77-8.3s-1.6-2.74-1-4.41c.29-.79 1.32-2.92 2-4.37a6.18 6.18 0 0 1 2-2.34l1.85-1.28 1 1.89 1.33 2.43a6.32 6.32 0 0 1 .57 1.46z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M969.51 547.5l-3.14-.26 3.28-17.97 4.45 1.13-4.59 17.1z"
                            />
                            <path className="cls-25" d="M984.19 563.61a2.08 2.08 0 0 0-3.19-2.71l-6.55 8 3.32 2.48 6.24-7.67z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M972.39 532.24l-1.16-5.02 9.1-2.21 1.75 5.55-9.69 1.68z"
                            />
                            <path className="cls-40" d="M971.23 583.56c-1.67.36-1.39 2.05-1.81 3.34s1.84 1.53 1.84 1.53l2.18-.73z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M975.14 588.26l-1.3-5.41 9.6-3.58 6.67-.65s.51 1.14.71 1.65c1.7 4.17-.57 7.5-2.87 7.5-3.04 0-12.81.49-12.81.49z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M969.65 549.54v-2.33l-3.4-.18-3.83 2.51h7.23z"
                            />
                            <path className="cls-25" d="M971.23 569.67c-1.27 4.06 4.22 4.51 6.58 1.75 1.81-2.13-2.39-2.76-2.39-2.76l-1.25.29zM979.71 543.31c-5-1.15-8 1.52-8 4 0 1.78.45 1.71.45 1.71s.14-1.16.44-1.35a4.48 4.48 0 0 1 3.57-.19A7.92 7.92 0 0 1 979 551a1.42 1.42 0 0 1 1.81-1 1.54 1.54 0 0 1 .89 1.82 1.76 1.76 0 0 1-1.25 1.21 11.08 11.08 0 0 1 1.6 3.44c2.83-1.9 2.36-4 2.7-5.07s.39-6.84-5.04-8.09z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M981 545.76c.5-2.86 6.5-3.54 7.55 1.49 1.16 5.6-3.26 8.67-.95 12-3.19-.5-6.07-4.5-3.41-9.07 1.1-1.9-1.52-4-1.89-3.4z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-29" d="M922.89 504.75l3.57.2.71-6.7-3.89-.23-.39 6.73z"
                            />
                            <path className="cls-1" d="M926.4 557.39c-.47-.17-4.35-1-3.47-6.76 1-6.21 3.09-7.72 6.82-6.82s5.08 3.32 2.79 9.17c-2.19 5.6-5.15 4.76-6.14 4.41zM946 567.11c-1.83.95-2.88 2.57-2.33 3.61s2.46 1.12 4.29.17 2.88-2.57 2.34-3.61-2.44-1.12-4.3-.17z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M922.68 504.58l.41-3.35 3.61 1.44.64 1.37 4.31 4.24-2.9 1.06-6.07-4.76z"
                            />
                            <path className="cls-25" d="M926.19 580.68l7.89-2.06-1.28-9.62s.17-3.17-1.15-4.37c-.62-.56-2.52-2-3.81-3a6.13 6.13 0 0 0-2.87-1.16l-2.23-.29-.07 2.16-.07 2.74a6.34 6.34 0 0 0 .18 1.62z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M934.78 515.06l.52 3.99 10.17-3.84-1.25-3.01-9.44 2.86z"
                            />
                            <path className="cls-40" d="M942 547.21l3.22.68 5.12-15.8-3.93-2.69-4.41 17.81z"
                            />
                            <path className="cls-1" d="M925.39 567a2.07 2.07 0 0 1 0-2.93 2.11 2.11 0 0 1 2.8-.13l7.45 7.22-2.64 3.21-7.49-7.25z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M947.44 532.24l1.16-5.02-9.1-2.21-1.75 5.55 9.69 1.68z"
                            />
                            <path className="cls-40" d="M948.59 583.56c2.5 1 2.12 3.21 1.87 4.54s-2.34.48-2.34.48l-1.58-1.68z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M944.68 588.27l1.3-5.42-11.9-4.23-7.89 2.06c1.52 4.93 3.38 7.09 5.69 7.09 3.03 0 12.8.5 12.8.5z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M942 549.54v-2.33l3.4-.18 3.83 2.51H942z"
                            />
                            <path className="cls-25" d="M925.68 542.54c5-.94 8.53 2.48 8.43 5-.07 1.78-.51 1.7-.51 1.7s-.1-1.16-.39-1.37a4.52 4.52 0 0 0-3.57-.33 7.9 7.9 0 0 0-3 3.35 1.32 1.32 0 0 0-1.72-1c-.73.16-.9 1.49-.82 2 .15.94 1.39 1.84 1.94 2.08-.2.18-2.49 14.83-2.7 15.07a2.34 2.34 0 0 1-2.3-2.21c-.26-4.65-.85-15.2-.82-16.08.07-1.63-.01-7.18 5.46-8.21z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M933 574.37c.56.52 1 1.48 2.27 1s0-3.82 0-3.82zM973.24 552.38l-.2 3a.21.21 0 0 0 .25.22l1.6-.34zM932.36 552.21l.21 3a.21.21 0 0 1-.25.22l-1.6-.34z"
                                transform="translate(0 -56.34)" />
                            <path transform="rotate(-180 966.045 542.015)" fill="url(#linear-gradient-52)"
                                d="M963.92 567.22h4.25v5.92h-4.25z" />
                            <path className="cls-29" d="M962.4 514.97h2.03v-.5h-1.53v-2.02h1.53v-.5h-2.03v3.02z"
                            />
                            <path className="cls-25" d="M847.85 520.19h3.52v28.35h-3.52z" />
                            <path className="cls-29" d="M828.56 517.43h42.11v3.22h-42.11z" />
                            <path className="cls-1" d="M856.5 550.05h-13.78l.62-1.84h12.55l.61 1.84z"
                            />
                            <path className="cls-29" transform="rotate(-64.84 791.886 538.808)" d="M833.73 566.67h5v.61h-5z"
                            />
                            <path className="cls-29" d="M880.53 552.81s1 2.86 3.43 2.47c5.63-.89 8.1 4.24 4.33 7.77a6 6 0 0 1-10.21-4c-.3-5.32-.5-6.53-.5-6.53z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M879.92 556.4a1 1 0 0 1-.95-.87 1 1 0 0 1 .86-1c.68-.07.83-.42.85-.49a1 1 0 0 1 1.16-.66.94.94 0 0 1 .7 1.1 2.69 2.69 0 0 1-2.52 1.95z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-29" d="M871.06 551.44c.42 2.62 4.63 4.58 6.75 4.24s1.5-1.9 1.08-4.53-2.47-4.47-4.59-4.13a3.57 3.57 0 0 0-3.24 4.42z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-33" d="M878.29 560.39c-.92.15-1.62.6-1.76-.32l-.15-1-.28-1.73-.82-5.11 4-.64 1.18 7.44c.22 1.16-1.05 1.18-2.17 1.36z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-33" d="M872.28 552.75a4.44 4.44 0 1 0 3.68-5.09 4.44 4.44 0 0 0-3.68 5.09z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-29" d="M876.38 559.11l-.28-1.73 1.4-.23a2.18 2.18 0 0 1-1.12 1.96z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-33" d="M876.06 558.1a2.12 2.12 0 0 0 1.75-2.42l-.48-3-5.05.07.46 2.94a2.91 2.91 0 0 0 3.32 2.41z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-33" d="M872.56 553.71l-.73 1.56a.35.35 0 0 0 .4.47h1.14zM876.29 554.06a1.22 1.22 0 1 0 1-1.4 1.22 1.22 0 0 0-1 1.4z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-29" d="M873.11 550.28c.42 2.62 3.5 5.69 6.13 5.27s3.61-2.76 3.19-5.38a4.81 4.81 0 0 0-5.51-4c-2.62.42-4.22 1.48-3.81 4.11z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-33" d="M867.37 589.57a.92.92 0 0 0 .92.92h13.93v-2.14h-13.93a.92.92 0 0 0-.92.91z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M870.89 534.15h12.76v2.09h-12.76z" />
                            <path className="cls-1" d="M869 534.15v15.9h1.38l1.74-15.9H869z" />
                            <path className="cls-29" d="M884.36 510.16h1.69l-1.69 24.21v15.68h-1.37l-1.74-15.9 3.11-23.99z"
                            />
                            <path className="cls-99" d="M884.36 566.5h-.6a1.23 1.23 0 0 0-1.22 1.07l-1.67 12.9a1.21 1.21 0 0 0 .57 1.2l.88.54z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-29" transform="rotate(-47.04 798.606 540.503)" d="M858.31 568.38h10.18v.61h-10.18z"
                            />
                            <path className="cls-1" d="M867.1 567.2c1.62 1.27 2.34 3 1.62 4s-2.62.64-4.24-.63-2.34-3-1.62-4 2.62-.64 4.24.63z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M881.29 504.52l-.83-3.21-4.4 2.26-.18 1.97-2.78 4.01 3.01.6 5.18-5.63z"
                            />
                            <path className="cls-25" d="M880.89 580.88l-6.39-1.19-1.89-9.33s-.64-3.09.48-4.47c.53-.65 2.18-2.34 3.32-3.48a6.11 6.11 0 0 1 2.64-1.58l2.15-.62.4 2.12.48 2.69a6.27 6.27 0 0 1 .07 1.62z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M877.33 517.13l-1.25 3.81-9.25-5.62 1.78-2.72 8.72 4.53zM859.45 548.01l-3.13-.26 3.27-17.9 4.43 1.13-4.57 17.03z"
                            />
                            <path className="cls-1" d="M880.64 565.37a2.06 2.06 0 0 0-1.92-2.19 2.09 2.09 0 0 0-2.2 1.72l-.9 10.29 4.08.72.91-10.34z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M862.32 532.81l-1.16-5 9.07-2.21 1.74 5.53-9.65 1.68z"
                            />
                            <path className="cls-25" d="M865.06 588.84l-1.29-5.4 10.73-3.75 6.39 1.19c1.72 4.58-.77 7.47-3.07 7.47-3.03 0-12.76.49-12.76.49z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M859.59 550.05v-2.33l-3.39-.17-3.81 2.5h7.2z"
                            />
                            <path className="cls-1" d="M876.08 577.28c1.61.91 3.43.76 3.62-1.37s-2.93-1.89-2.93-1.89z"
                                transform="translate(0 -56.34)" />
                            <path fill="#b0bbcc" d="M831.62 495.42l-10.54-1.23-1.21-1.13.36-.91 3.01-.77 6.79.06 3.14 1.14.56.7-2.11 2.14z"
                            />
                            <path className="cls-1" d="M821.9 560.37l-.38-.15a2.49 2.49 0 0 1-1.38-3.23l3.41-8.45 4.58 1.84-3.57 8.86a2 2 0 0 1-2.66 1.13z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-29" d="M824.16 554.7a3.17 3.17 0 0 0 .68 3.85l.62-1.55z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M831.55 551.76a5.37 5.37 0 1 1-3-7 5.37 5.37 0 0 1 3 7z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M825.46 557.51a2.56 2.56 0 0 1-1.42-3.32l1.93-4.77 5.61 2.26-1.58 3.89a3.5 3.5 0 0 1-4.54 1.94z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M831 552.81l.45 2.05a.43.43 0 0 1-.6.43l-1.36-.27z"
                                transform="translate(0 -56.34)" />
                            <g clipPath="url(#clip-path-4)">
                                <path className="cls-25" d="M826.18 552.12a4.23 4.23 0 0 0 2.35-3.84s3.41 1.85 4.68.93c0 0-.54-7.32-7.29-6.55s-6.76 8.12-6.76 8.12l4.05 3.16z"
                                    transform="translate(0 -56.34)" />
                            </g>
                            <path className="cls-1" d="M826.46 552.22a1.47 1.47 0 1 1-.81-1.92 1.47 1.47 0 0 1 .81 1.92z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M822.25 551.42l-.84 2.42s2.34 1.62 3.29-.74l-1.64-.34z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-29" d="M832.09 549.34l-.11-4.42a.7.7 0 0 0-.32-.56c-1.12-.65-5.06-2.63-9.15-.86a.63.63 0 0 0-.38.5l-.62 3.85z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-33" d="M832.12 548.66l-.07-1.94a26.27 26.27 0 0 0-10.36-.76l-.29 2.04z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-29" d="M818.12 548.91c1.68-3.74 16.22-1.62 17.22.65.56 1.27-3.72 2.2-3.72 2.2s1-1.22-.22-1.72-7.78-2.07-10.19-.58a.76.76 0 0 0-.13 1.07s-3.42-.53-2.96-1.62z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-33" d="M829.93 589.57a.92.92 0 0 1-.92.92h-13.94v-2.14H829a.92.92 0 0 1 .92.91z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M813.64 534.15h12.76v2.09h-12.76z" />
                            <path className="cls-1" d="M828.29 534.15v15.9h-1.38l-1.73-15.9h3.11z"
                            />
                            <path className="cls-29" d="M812.93 510.16h-1.68l1.68 24.21v15.68h1.38l1.73-15.9-3.11-23.99z"
                            />
                            <path className="cls-99" d="M812.93 566.5h.61a1.23 1.23 0 0 1 1.21 1.07l1.68 12.9a1.24 1.24 0 0 1-.58 1.2l-.88.54z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-25" transform="rotate(-62.6 790.991 536.246)" d="M836.63 563.01h1.42v2.81h-1.42z"
                            />
                            <path className="cls-29" d="M825.58 561.48l-6.3-1.87a.74.74 0 0 1-.5-.9l.36-1.36a.77.77 0 0 1 .38-.48.7.7 0 0 1 .6 0l4.84 2a.72.72 0 0 1 .45.62z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M827.85 510.89l-2.27-5.75-1-.7-.6 1.16 3.87 5.29z"
                            />
                            <path className="cls-25" d="M826.55 580.58l12.33 1.2c2.87.33 4 1 4.79 2.21a6.51 6.51 0 0 1 .94 3.94c0 3.86-1.41 16.41-1.41 16.41l-5.61-.09.84-15.32s-14.79-.5-18.28-.5c-4.06 0-3.93-4.36-3.93-8.39z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M825 562.12l-7.09-2.42.47-1.76a.71.71 0 0 1 .38-.48.75.75 0 0 1 .62 0l5 2a.73.73 0 0 1 .46.62z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-29" d="M827 582.51a2.27 2.27 0 0 1-2.37 2.12l-8.37-.42-.26-19.32a6 6 0 0 1 .74-2.95l.56-1a2.23 2.23 0 0 1 2.28-1.14l3.45 1.2a2.29 2.29 0 0 1 1.06.78l3.27 4.43a2.25 2.25 0 0 1 .43 1.44l-.39 8.36z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-29" d="M816.89 505.4l1.17-2.69 2.23.98-3.4 1.71z"
                            />
                            <path className="cls-25" d="M821.36 578.37L826 576l-2.45-11a2.85 2.85 0 0 0-1.32-1.83 2.89 2.89 0 0 0-2.24-.3 2.93 2.93 0 0 0-2 3.62z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M835.44 571.85c1.91-1.48 2.85-3.44 2.1-4.39s-2.91-.5-4.82 1-2.85 3.44-2.1 4.38 2.91.48 4.82-.99z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M838.17 572h-6.32c0 1 2.62 1.73 3.57 1.73h5.49c1 0 3.57-.77 3.57-1.73z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M834.28 516.37l-2.5-3.59-9.97 7.29 1.95 3.63 10.52-7.33z"
                            />
                            <path className="cls-29" d="M837.6 547.91l.03 2.14h9.14L843.2 548l-5.6-.09z"
                            />
                            <path className="cls-25" d="M821.29 578.1c.46 1.56 1.21 2.83 2.47 1.94 1.48-1 1-4.07 1-4.07l-1.35-.84z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M860.43 572h-6.32c0 1 2.61 1.73 3.57 1.73h5.49c1 0 3.57-.77 3.57-1.73z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M861.16 584.15c-1.66.36-1.38 2-1.8 3.32s1.83 1.53 1.83 1.53l2.18-.73z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-29" d="M841.77 528h6.5v21.89h-6.5zM850.82 528h6.5v21.89h-6.5z"
                            />
                            <path className="cls-29" d="M850.82 548.38h6.5v1.51h-6.5zM841.77 548.38h6.5v1.51h-6.5z"
                            />
                            <path className="cls-1" d="M844.37 553.06s-.87.94-1.3-1.29-.44-3.66.38-3.93a.48.48 0 0 1 .66.27zM846.16 555.87v1.68a2.05 2.05 0 0 0 .74 1.58l1.47 1.19a2 2 0 0 0 2.56 0l1.49-1.2a2.07 2.07 0 0 0 .75-1.59v-1.83z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M853.69 557.52l-.59-.43-3.46.78-3.48-.78-.59.43a1.23 1.23 0 0 0-.5 1v2.77a4.06 4.06 0 0 0 .6 2.11l2.71 4.46.25.41h2l.29-.48 2.67-4.39a4.07 4.07 0 0 0 .6-2.12v-2.76a1.23 1.23 0 0 0-.5-1z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M854.9 553.06s.87.94 1.3-1.29.44-3.66-.38-3.93a.49.49 0 0 0-.67.27z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M849.6 556.75c3.2 0 6.19-3.63 6.19-8.82 0-6.47-4.37-7-6.19-7s-6.2.5-6.2 7c0 5.19 2.99 8.82 6.2 8.82zM857.32 584.64a4.07 4.07 0 0 1-4.08 4.08h-7.39a4.07 4.07 0 0 1-4.08-4.08v-2.38h15.55z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M859.27 562.53a2 2 0 0 0-.59-.57l-4.55-2.82-4.31.61a1.7 1.7 0 0 1-.45 0l-4.31-.61-4.55 2.86a1.93 1.93 0 0 0-.57.53s-5.14 6.66-5.14 9.43 1.64 3.59 3.34 3.59 3.63-2.94 3.63-2.94v10.59h15.55v-11s1.3 3.28 3.72 3.28 3.34-.81 3.34-3.59-4.72-8.89-5.11-9.36z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M843.23 534.15h12.76v2.09h-12.76z" />
                            <path className="cls-1" d="M842.71 534.15v15.9h1.16l1.45-15.9h-2.61z"
                            />
                            <path className="cls-33" d="M857 588.35h-14.73c-1.1 0-1.09 2.14 0 2.14H857c1.05 0 1.05-2.14 0-2.14z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M856.51 534.15v15.9h-1.15l-1.45-15.9h2.6z"
                            />
                            <path className="cls-99" d="M843.64 510.89h11.79v13.81h-11.79z" />
                            <path className="cls-29" d="M842.72 534.15l.3-23.99h1.59l.71 23.99h-2.6zM856.51 534.15l-.3-23.99h-1.59l-.71 23.99h2.6z"
                            />
                            <path className="cls-29" d="M843.64 510.16h11.79v1.42h-11.79zM843.64 523.99h11.79v1.42h-11.79z"
                            />
                            <path className="cls-29" d="M846.87 511.27h1.76v12.72h-1.76zM850.59 511.27h1.76v12.72h-1.76z"
                            />
                            <circle className="cls-33" cx="876.67" cy="498.2" r="0.94" />
                            <path className="cls-29" d="M960.75 423.93h1.79v26.98h-1.79z" />
                            <circle className="cls-20" cx="961.64" cy="458.29" r="4.11" />
                            <path className="cls-29" d="M961.64 441.58l-9.81 17h19.63l-9.82-17zM899.27 423.93h1.79v26.98h-1.79z"
                            />
                            <circle className="cls-20" cx="900.17" cy="458.29" r="4.11" />
                            <path className="cls-29" d="M900.17 441.58l-9.82 17h19.63l-9.81-17zM834.55 423.93h1.79v26.98h-1.79z"
                            />
                            <circle className="cls-20" cx="835.44" cy="458.29" r="4.11" />
                            <path className="cls-29" d="M835.44 441.58l-9.81 17h19.62l-9.81-17z" />
                        </g>
                        <path fill="url(#linear-gradient-53)" stroke="#d9e1ed" opacity="0.25"
                            strokeMiterlimit="10" d="M734.76 423.9h280.61v102.23H734.76z" />
                        <path className="cls-33" d="M729.94 526.17h290.25v3.65H729.94z" />
                        <path opacity="0.4" fill="url(#linear-gradient-54)" d="M734.75 423.9h280.61v102.22H734.75z"
                        />
                        <path className="cls-105" d="M904.56 483.68a93.76 93.76 0 0 0-16.22 42.23c-.83 6.84-1 14-4.09 20.13-4.72 9.24-15.14 14.07-21.5 22.27a49.77 49.77 0 0 0-6 10.72h-56.12l.61-1.57c4.1-10.67 7.72-21.91 15.36-30.41 8.87-9.87 22.66-15.45 28.47-27.38 2.2-4.51 3-9.55 4.14-14.44 1.71-7.54 4.22-15 8.29-21.55zM772.08 483.68a29.32 29.32 0 0 1-2.48 7.42c-4.72 9.23-15.14 14.07-21.5 22.27a52.11 52.11 0 0 0-6.37 11.63c-1.07 2.52-2.09 5.06-3 7.63v-48.95z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1020.44 516.05h-10.15l2 10.15h6.15l2-10.15z"
                        />
                        <circle className="cls-33" cx="1015.37" cy="503.98" r="8.72" />
                        <path className="cls-106" d="M1015.37 516.05v-12.91M1015.37 509.59l3.63-2.52M1015.37 506.51l-2.5-2.41"
                        />
                        <path className="cls-33" transform="rotate(-180 410.385 348.565)" d="M399.25 376.16h22.26v1.14h-22.26z"
                        />
                        <path className="cls-25" d="M397.56 307.36h18.13l1.69 12.46h-18.12l-1.7-12.46z"
                        />
                        <path className="cls-40" d="M406.71 370a3.23 3.23 0 0 0 0 .44c.09.72.55 1.26 1 1.21s.78-.69.69-1.41-.53-1.27-1-1.2h-.07a.8.8 0 0 1-.24.83.6.6 0 0 1-.38.13zM408.85 368.2s-.57 0-.84.77c-.01.03.65.11.84-.77z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-32" transform="rotate(-180 419.45 348.565)" d="M417.38 376.16h4.13v1.14h-4.13z"
                        />
                        <path className="cls-25" d="M332.23 381.16h16.09v1.63h-16.63a.55.55 0 0 1-.55-.55 1.08 1.08 0 0 1 1.09-1.08z"
                        />
                        <path className="cls-40" d="M341.62 431.91l-6.59 2v5.19h17.37c1.18-5.26-3.24-8.29-8.46-7.73a12.33 12.33 0 0 0-2.32.54z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M347.36 449.14a5.69 5.69 0 0 1-1.26-.15 3.35 3.35 0 0 1-2.91-2.88 3.87 3.87 0 0 1 2.22-3.76 3.25 3.25 0 0 1 3.84 1.06.66.66 0 1 1-1 .88 2 2 0 0 0-2.33-.74 2.57 2.57 0 0 0-1.42 2.45c.08.87.74 1.46 1.89 1.72a3 3 0 0 0 2.82-.55c2.52-2.19 2-8.78 2-8.85a.66.66 0 0 1 .61-.71.65.65 0 0 1 .7.6c0 .3.58 7.32-2.45 9.95a4 4 0 0 1-2.71.98z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M334.3 381.16h16.09v1.63h-16.63a.55.55 0 0 1-.55-.55 1.08 1.08 0 0 1 1.09-1.08z"
                        />
                        <path className="cls-40" d="M335.3 432.67l1.75-1.27c.21-.16.56 0 .53.22l-.22 2zM333.8 432.6l-1.59-.93a.19.19 0 0 0-.29.16v1.85z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M339.12 435.83c0 2.2-1.79 2.48-4 2.48s-4-.28-4-2.48a4 4 0 0 1 8 0z"
                            transform="translate(0 -56.34)" />
                        <circle className="cls-33" cx="335" cy="381.01" r="1.33" />
                        <path className="cls-25" d="M334.67 437.74a.41.41 0 0 1-.41-.41.08.08 0 0 1 .08-.07.07.07 0 0 1 .07.07.26.26 0 0 0 .52 0 .07.07 0 1 1 .14 0 .4.4 0 0 1-.4.41z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M335.33 437.74a.4.4 0 0 1-.4-.41.07.07 0 1 1 .14 0 .26.26 0 0 0 .52 0 .07.07 0 0 1 .07-.07.08.08 0 0 1 .08.07.41.41 0 0 1-.41.41zM335 436.8c-.07 0-.13-.16-.17-.21s-.21-.14-.18-.2.26 0 .35 0 .31-.08.35 0-.13.15-.17.2-.11.21-.18.21zM334.1 436.3c-.32.06-.65.08-1 .13s-.65.05-1 0c.32-.05.64-.08 1-.12s.67-.01 1-.01zM334.06 436.63c-.2.09-.4.15-.59.25s-.39.17-.6.25a3.49 3.49 0 0 1 .57-.32 3.17 3.17 0 0 1 .62-.18zM334.12 436c-.22 0-.43-.1-.65-.13s-.43-.08-.64-.13a3.14 3.14 0 0 1 1.29.26zM336 436.45c.31.11.63.18.94.27s.64.15 1 .2c-.31-.11-.63-.18-.95-.27s-.72-.15-.99-.2zM335.94 436.78c.18.11.37.21.55.33s.36.23.54.34a3.25 3.25 0 0 0-.5-.4 3.15 3.15 0 0 0-.59-.27zM336 436.18h1.31a3.6 3.6 0 0 0-.66-.05 3.53 3.53 0 0 0-.65.05zM336.06 434.92a.36.36 0 0 1-.35-.36.07.07 0 0 1 .07-.07.08.08 0 0 1 .08.07.2.2 0 0 0 .2.21.21.21 0 0 0 .21-.21.07.07 0 0 1 .08-.07.07.07 0 0 1 .07.07.36.36 0 0 1-.36.36zM333.94 434.92a.36.36 0 0 1-.36-.36.07.07 0 0 1 .07-.07.07.07 0 0 1 .08.07.21.21 0 0 0 .21.21.2.2 0 0 0 .2-.21.08.08 0 0 1 .08-.07.07.07 0 0 1 .07.07.36.36 0 0 1-.35.36z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M341.52 439.13a1.46 1.46 0 0 1 1.46-1.46h2.57a3.28 3.28 0 0 1 3.28-3.28h1a4.07 4.07 0 0 0-3.66.39 2.7 2.7 0 0 0-1 2.67l-2.27-.1a1.68 1.68 0 0 0-1.77 1.78h.34z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M546.67 238.96h4v85.11h-4z" />
                        <path className="cls-31" d="M278.34 308.26h214.18v1.23H278.34z" />
                        <path className="cls-107" d="M288.69 309.49v12.85M305.79 309.49v12.85M324.13 309.49v12.85M341.23 309.49v12.85M358.88 309.49v12.85M375.98 309.49v12.85M394.32 309.49v12.85M411.42 309.49v12.85M428.41 309.49v12.85M445.51 309.49v12.85M463.85 309.49v12.85M480.95 309.49v12.85"
                        />
                        <path className="cls-29" d="M278.53 238.43h214v1.73h-214z" />
                        <path className="cls-33" d="M515.34 294.77v85.64h42.22v-85.64zM534 377.85h-15.14v-36.79H534zm0-42.77h-15.14V298.3H534zm19.33 42.77H538.2v-36.79h15.17zm0-42.77H538.2V298.3h15.17z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 554.62 288.52)" fill="url(#linear-gradient-55)"
                            opacity="0.25" d="M508.05 309.1h36.79v15.17h-36.79z" />
                        <path fill="url(#linear-gradient-56)" opacity="0.25" d="M519.37 242.47h14.15v35.76h-14.15z"
                        />
                        <path className="cls-105" d="M533.52 323.63a13.53 13.53 0 0 0-6.27-2.51 8.58 8.58 0 0 1-3-.63c-1.37-.73-2.09-2.34-3.31-3.32a7.44 7.44 0 0 0-1.59-.93v-8.68l.23.1a13.68 13.68 0 0 1 4.52 2.37c1.46 1.37 2.29 3.51 4.06 4.4a9.42 9.42 0 0 0 2.14.64 10.25 10.25 0 0 1 3.2 1.29zM533.52 304.07a4.37 4.37 0 0 1-1.1-.39c-1.37-.73-2.09-2.34-3.3-3.32a7.21 7.21 0 0 0-1.73-1c-.37-.17-.75-.33-1.13-.47h7.26z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 573.95 288.52)" fill="url(#linear-gradient-57)"
                            opacity="0.25" d="M527.39 309.1h36.79v15.17h-36.79z" />
                        <path fill="url(#linear-gradient-58)" opacity="0.25" d="M538.71 242.47h14.15v35.76h-14.15z"
                        />
                        <path className="cls-105" d="M552.86 323.63a13.61 13.61 0 0 0-6.27-2.51 8.59 8.59 0 0 1-3-.63c-1.37-.73-2.09-2.34-3.3-3.32a7.69 7.69 0 0 0-1.59-.93v-8.68l.23.1a13.73 13.73 0 0 1 4.51 2.37c1.47 1.37 2.3 3.51 4.07 4.4a9.27 9.27 0 0 0 2.14.64 10.25 10.25 0 0 1 3.2 1.29zM552.86 304.07a4.37 4.37 0 0 1-1.1-.39c-1.37-.73-2.09-2.34-3.31-3.32a7.35 7.35 0 0 0-1.72-1c-.38-.17-.76-.33-1.14-.47h7.27z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 554.615 331.285)" fill="url(#linear-gradient-59)"
                            opacity="0.25" d="M508.05 351.87h36.79v15.17h-36.79z" />
                        <path fill="url(#linear-gradient-60)" opacity="0.25" d="M519.37 285.24h14.15V321h-14.15z"
                        />
                        <path className="cls-105" d="M533.52 366.39a13.62 13.62 0 0 0-6.27-2.5 8.58 8.58 0 0 1-3-.63c-1.37-.73-2.09-2.35-3.31-3.33a7 7 0 0 0-1.59-.92v-8.68l.23.09a13.89 13.89 0 0 1 4.52 2.38c1.46 1.37 2.29 3.5 4.06 4.4a9.42 9.42 0 0 0 2.14.64 10 10 0 0 1 3.2 1.28zM533.52 346.83a4.35 4.35 0 0 1-1.1-.38c-1.37-.73-2.09-2.34-3.3-3.33a8 8 0 0 0-1.73-1c-.37-.17-.75-.32-1.13-.47h7.26z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 573.955 331.285)" fill="url(#linear-gradient-61)"
                            opacity="0.25" d="M527.39 351.87h36.79v15.17h-36.79z" />
                        <path fill="url(#linear-gradient-62)" opacity="0.25" d="M538.71 285.24h14.15V321h-14.15z"
                        />
                        <path className="cls-105" d="M552.86 366.39a13.71 13.71 0 0 0-6.27-2.5 8.59 8.59 0 0 1-3-.63c-1.37-.73-2.09-2.35-3.3-3.33a7.23 7.23 0 0 0-1.59-.92v-8.68l.23.09a13.94 13.94 0 0 1 4.51 2.38c1.47 1.37 2.3 3.5 4.07 4.4a9.27 9.27 0 0 0 2.14.64 10 10 0 0 1 3.2 1.28zM552.86 346.83a4.35 4.35 0 0 1-1.1-.38c-1.37-.73-2.09-2.34-3.31-3.33a8.13 8.13 0 0 0-1.72-1c-.38-.17-.76-.32-1.14-.47h7.27z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M227.16 294.77v85.64h42.22v-85.64zm18.7 83.08h-15.18v-36.79h15.18zm0-42.77h-15.18V298.3h15.18zm19.33 42.77H250v-36.79h15.17zm0-42.77H250V298.3h15.17z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 266.44 288.52)" fill="url(#linear-gradient-63)"
                            opacity="0.25" d="M219.88 309.1h36.79v15.17h-36.79z" />
                        <path fill="url(#linear-gradient-64)" opacity="0.25" d="M231.19 242.47h14.15v35.76h-14.15z"
                        />
                        <path className="cls-105" d="M245.35 323.63a13.61 13.61 0 0 0-6.27-2.51 8.59 8.59 0 0 1-3-.63c-1.37-.73-2.09-2.34-3.31-3.32a7.44 7.44 0 0 0-1.59-.93v-8.68l.24.1a13.73 13.73 0 0 1 4.51 2.37c1.46 1.37 2.29 3.51 4.06 4.4a9.35 9.35 0 0 0 2.15.64 10.35 10.35 0 0 1 3.2 1.29zM245.35 304.07a4.31 4.31 0 0 1-1.11-.39c-1.37-.73-2.08-2.34-3.3-3.32a7.21 7.21 0 0 0-1.73-1c-.37-.17-.75-.33-1.13-.47h7.27z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 285.775 288.525)" fill="url(#linear-gradient-65)"
                            opacity="0.25" d="M239.21 309.1H276v15.17h-36.79z" />
                        <path fill="url(#linear-gradient-66)" opacity="0.25" d="M250.53 242.47h14.15v35.76h-14.15z"
                        />
                        <path className="cls-105" d="M264.68 323.63a13.53 13.53 0 0 0-6.27-2.51 8.58 8.58 0 0 1-3-.63c-1.38-.73-2.09-2.34-3.31-3.32a7.44 7.44 0 0 0-1.59-.93v-8.68l.23.1a13.78 13.78 0 0 1 4.52 2.37c1.46 1.37 2.29 3.51 4.06 4.4a9.42 9.42 0 0 0 2.14.64 10.25 10.25 0 0 1 3.2 1.29zM264.68 304.07a4.37 4.37 0 0 1-1.1-.39c-1.37-.73-2.09-2.34-3.31-3.32a7.35 7.35 0 0 0-1.72-1c-.38-.17-.75-.33-1.13-.47h7.26z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 266.435 331.285)" fill="url(#linear-gradient-67)"
                            opacity="0.25" d="M219.88 351.87h36.79v15.17h-36.79z" />
                        <path fill="url(#linear-gradient-68)" opacity="0.25" d="M231.19 285.24h14.15V321h-14.15z"
                        />
                        <path className="cls-105" d="M245.35 366.39a13.71 13.71 0 0 0-6.27-2.5 8.59 8.59 0 0 1-3-.63c-1.37-.73-2.09-2.35-3.31-3.33a7 7 0 0 0-1.59-.92v-8.68l.24.09a13.94 13.94 0 0 1 4.51 2.38c1.46 1.37 2.29 3.5 4.06 4.4a9.35 9.35 0 0 0 2.15.64 10.08 10.08 0 0 1 3.2 1.28zM245.35 346.83a4.29 4.29 0 0 1-1.11-.38c-1.37-.73-2.08-2.34-3.3-3.33a8 8 0 0 0-1.73-1c-.37-.17-.75-.32-1.13-.47h7.27z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 285.775 331.285)" fill="url(#linear-gradient-69)"
                            opacity="0.25" d="M239.21 351.87H276v15.17h-36.79z" />
                        <path fill="url(#linear-gradient-70)" opacity="0.25" d="M250.53 285.24h14.15V321h-14.15z"
                        />
                        <path className="cls-105" d="M264.68 366.39a13.62 13.62 0 0 0-6.27-2.5 8.58 8.58 0 0 1-3-.63c-1.38-.73-2.09-2.35-3.31-3.33a7 7 0 0 0-1.59-.92v-8.68l.23.09a14 14 0 0 1 4.52 2.38c1.46 1.37 2.29 3.5 4.06 4.4a9.42 9.42 0 0 0 2.14.64 10 10 0 0 1 3.2 1.28zM264.68 346.83a4.35 4.35 0 0 1-1.1-.38c-1.37-.73-2.09-2.34-3.31-3.33a8.13 8.13 0 0 0-1.72-1c-.38-.17-.75-.32-1.13-.47h7.26z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M492.52 294.77v85.64h42.22v-85.64zm18.7 83.08H496v-36.79h15.18zm0-42.77H496V298.3h15.18zm19.33 42.77h-15.17v-36.79h15.17zm0-42.77h-15.17V298.3h15.17z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 531.8 288.52)" fill="url(#linear-gradient-71)"
                            opacity="0.25" d="M485.24 309.1h36.79v15.17h-36.79z" />
                        <path fill="url(#linear-gradient-72)" opacity="0.25" d="M496.56 242.47h14.15v35.76h-14.15z"
                        />
                        <path className="cls-105" d="M510.71 323.63a13.53 13.53 0 0 0-6.27-2.51 8.69 8.69 0 0 1-3-.63c-1.37-.73-2.08-2.34-3.3-3.32a7.44 7.44 0 0 0-1.59-.93v-8.68l.23.1a13.73 13.73 0 0 1 4.52 2.34c1.47 1.37 2.3 3.51 4.07 4.4a9.42 9.42 0 0 0 2.14.64 10.25 10.25 0 0 1 3.2 1.29zM510.71 304.07a4.37 4.37 0 0 1-1.1-.39c-1.37-.73-2.09-2.34-3.31-3.32a7.35 7.35 0 0 0-1.72-1c-.38-.17-.75-.33-1.14-.47h7.27z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 551.14 288.52)" fill="url(#linear-gradient-73)"
                            opacity="0.25" d="M504.58 309.1h36.79v15.17h-36.79z" />
                        <path fill="url(#linear-gradient-74)" opacity="0.25" d="M515.89 242.47h14.15v35.76h-14.15z"
                        />
                        <path className="cls-105" d="M530.05 323.63a13.61 13.61 0 0 0-6.27-2.51 8.59 8.59 0 0 1-3-.63c-1.37-.73-2.09-2.34-3.31-3.32a7.44 7.44 0 0 0-1.59-.93v-8.68l.24.1a13.73 13.73 0 0 1 4.51 2.37c1.46 1.37 2.29 3.51 4.06 4.4a9.35 9.35 0 0 0 2.15.64 10.35 10.35 0 0 1 3.2 1.29zM530.05 304.07a4.31 4.31 0 0 1-1.11-.39c-1.37-.73-2.08-2.34-3.3-3.32a7.21 7.21 0 0 0-1.73-1c-.37-.17-.75-.33-1.13-.47h7.27z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 531.805 331.285)" fill="url(#linear-gradient-75)"
                            opacity="0.25" d="M485.24 351.87h36.79v15.17h-36.79z" />
                        <path fill="url(#linear-gradient-76)" opacity="0.25" d="M496.56 285.24h14.15V321h-14.15z"
                        />
                        <path className="cls-105" d="M510.71 366.39a13.62 13.62 0 0 0-6.27-2.5 8.69 8.69 0 0 1-3-.63c-1.37-.73-2.08-2.35-3.3-3.33a7 7 0 0 0-1.59-.92v-8.68l.23.09a13.94 13.94 0 0 1 4.51 2.38c1.47 1.37 2.3 3.5 4.07 4.4a9.42 9.42 0 0 0 2.14.64 10 10 0 0 1 3.2 1.28zM510.71 346.83a4.35 4.35 0 0 1-1.1-.38c-1.37-.73-2.09-2.34-3.31-3.33a8.13 8.13 0 0 0-1.72-1c-.38-.17-.75-.32-1.14-.47h7.27z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 551.135 331.285)" fill="url(#linear-gradient-77)"
                            opacity="0.25" d="M504.58 351.87h36.79v15.17h-36.79z" />
                        <path fill="url(#linear-gradient-78)" opacity="0.25" d="M515.89 285.24h14.15V321h-14.15z"
                        />
                        <path className="cls-105" d="M530.05 366.39a13.71 13.71 0 0 0-6.27-2.5 8.59 8.59 0 0 1-3-.63c-1.37-.73-2.09-2.35-3.31-3.33a7 7 0 0 0-1.59-.92v-8.68l.24.09a13.94 13.94 0 0 1 4.51 2.38c1.46 1.37 2.29 3.5 4.06 4.4a9.35 9.35 0 0 0 2.15.64 10.08 10.08 0 0 1 3.2 1.28zM530.05 346.83a4.29 4.29 0 0 1-1.11-.38c-1.37-.73-2.08-2.34-3.3-3.33a8 8 0 0 0-1.73-1c-.37-.17-.75-.32-1.13-.47h7.27z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M236.31 294.77v85.64h42.22v-85.64zM255 377.85h-15.17v-36.79H255zm0-42.77h-15.17V298.3H255zm19.33 42.77h-15.16v-36.79h15.17zm0-42.77h-15.16V298.3h15.17z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 275.59 288.52)" fill="url(#linear-gradient-79)"
                            opacity="0.25" d="M229.02 309.1h36.79v15.17h-36.79z" />
                        <path fill="url(#linear-gradient-80)" opacity="0.25" d="M240.34 242.47h14.15v35.76h-14.15z"
                        />
                        <path className="cls-105" d="M254.49 323.63a13.53 13.53 0 0 0-6.26-2.51 8.59 8.59 0 0 1-3-.63c-1.37-.73-2.09-2.34-3.31-3.32a7.44 7.44 0 0 0-1.59-.93v-8.68l.23.1a13.68 13.68 0 0 1 4.52 2.37c1.46 1.37 2.29 3.51 4.06 4.4a9.42 9.42 0 0 0 2.14.64 10.25 10.25 0 0 1 3.2 1.29zM254.49 304.07a4.37 4.37 0 0 1-1.1-.39c-1.37-.73-2.09-2.34-3.3-3.32a7.21 7.21 0 0 0-1.73-1c-.37-.17-.75-.33-1.13-.47h7.26z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 294.92 288.52)" fill="url(#linear-gradient-81)"
                            opacity="0.25" d="M248.36 309.1h36.79v15.17h-36.79z" />
                        <path fill="url(#linear-gradient-82)" opacity="0.25" d="M259.68 242.47h14.15v35.76h-14.15z"
                        />
                        <path className="cls-105" d="M273.83 323.63a13.61 13.61 0 0 0-6.27-2.51 8.64 8.64 0 0 1-3-.63c-1.37-.73-2.09-2.34-3.3-3.32a7.69 7.69 0 0 0-1.59-.93v-8.68l.23.1a13.73 13.73 0 0 1 4.51 2.37c1.47 1.37 2.3 3.51 4.07 4.4a9.27 9.27 0 0 0 2.14.64 10.25 10.25 0 0 1 3.2 1.29zM273.83 304.07a4.37 4.37 0 0 1-1.1-.39c-1.37-.73-2.09-2.34-3.31-3.32a7.35 7.35 0 0 0-1.72-1c-.38-.17-.76-.33-1.14-.47h7.27z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 275.585 331.285)" fill="url(#linear-gradient-83)"
                            opacity="0.25" d="M229.02 351.87h36.79v15.17h-36.79z" />
                        <path fill="url(#linear-gradient-84)" opacity="0.25" d="M240.34 285.24h14.15V321h-14.15z"
                        />
                        <path className="cls-105" d="M254.49 366.39a13.63 13.63 0 0 0-6.26-2.5 8.59 8.59 0 0 1-3-.63c-1.37-.73-2.09-2.35-3.31-3.33a7 7 0 0 0-1.59-.92v-8.68l.23.09a13.89 13.89 0 0 1 4.52 2.38c1.46 1.37 2.29 3.5 4.06 4.4a9.42 9.42 0 0 0 2.14.64 10 10 0 0 1 3.2 1.28zM254.49 346.83a4.35 4.35 0 0 1-1.1-.38c-1.37-.73-2.09-2.34-3.3-3.33a8 8 0 0 0-1.73-1c-.37-.17-.75-.32-1.13-.47h7.26z"
                            transform="translate(0 -56.34)" />
                        <path transform="rotate(90 294.925 331.285)" fill="url(#linear-gradient-85)"
                            opacity="0.25" d="M248.36 351.87h36.79v15.17h-36.79z" />
                        <path fill="url(#linear-gradient-86)" opacity="0.25" d="M259.68 285.24h14.15V321h-14.15z"
                        />
                        <path className="cls-105" d="M273.83 366.39a13.71 13.71 0 0 0-6.27-2.5 8.64 8.64 0 0 1-3-.63c-1.37-.73-2.09-2.35-3.3-3.33a7.23 7.23 0 0 0-1.59-.92v-8.68l.23.09a13.94 13.94 0 0 1 4.51 2.38c1.47 1.37 2.3 3.5 4.07 4.4a9.27 9.27 0 0 0 2.14.64 10 10 0 0 1 3.2 1.28zM273.83 346.83a4.35 4.35 0 0 1-1.1-.38c-1.37-.73-2.09-2.34-3.31-3.33a8.13 8.13 0 0 0-1.72-1c-.38-.17-.76-.32-1.14-.47h7.27z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M278.53 322.34h214v1.73h-214z" />
                        <path fill="url(#linear-gradient-87)" d="M220.52 330.67h337.53v32.28H220.52z"
                        />
                        <path id="_Path_47" data-name="&lt;Path&gt;" className="cls-40" d="M382.07 459.09A46.92 46.92 0 0 0 336 506.81l2.37 125.74 93.82-1.63-2.39-125.74a46.91 46.91 0 0 0-47.73-46.09z"
                            transform="translate(0 -56.34)" />
                        <ellipse cx="1075.48" cy="460.06" rx="15.96" ry="9.94" transform="rotate(-30.05 970.55 431.893)"
                            fill="url(#linear-gradient-88)" />
                        <path className="cls-29" d="M1080.11 453.88a6 6 0 0 0-1.95.83 7.19 7.19 0 0 0-1.91 2.62 19.18 19.18 0 0 1-1.81 2.89 13.18 13.18 0 0 1-5.24 3.81 25.45 25.45 0 0 1-6.32 1.63 3.81 3.81 0 0 0 3 .55c3-.32 6-1 8.2-3a15.78 15.78 0 0 0 3.29-5.17 6.32 6.32 0 0 1 1.23-2 4.49 4.49 0 0 1 1.6-.92c.81-.29 7.33-.88 7.35-1.55.03-1.34-6.75.13-7.44.31z"
                            transform="translate(0 -56.34)" />
                        <ellipse cx="1071" cy="455.99" rx="15.96" ry="9.94" transform="rotate(-59.2 1021.451 427.813)"
                            fill="url(#linear-gradient-89)" />
                        <path className="cls-29" d="M1072.05 448.34a5.74 5.74 0 0 0-1.31 1.67 7.23 7.23 0 0 0-.4 3.21 17.64 17.64 0 0 1-.16 3.41 13.23 13.23 0 0 1-2.72 5.88 25.23 25.23 0 0 1-4.73 4.5 3.78 3.78 0 0 0 2.88-1c2.42-1.72 4.77-3.82 5.68-6.64a15.73 15.73 0 0 0 .36-6.12 6.4 6.4 0 0 1 .1-2.35 4.34 4.34 0 0 1 1-1.58c.56-.65 6-4.34 5.67-4.93-.66-1.14-5.87 3.45-6.37 3.95z"
                            transform="translate(0 -56.34)" />
                        <path id="_Rectangle_53" data-name="&lt;Rectangle&gt;" className="cls-1"
                            d="M343.53 572.07h76.82v6.65h-76.82z" />
                        <path id="_Rectangle_54" data-name="&lt;Rectangle&gt;" className="cls-1"
                            d="M343.53 558.89h76.82v6.65h-76.82z" />
                        <path id="_Rectangle_55" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M343.53 565.38h76.82v6.65h-76.82z" />
                        <path id="_Rectangle_56" data-name="&lt;Rectangle&gt;" fill="url(#linear-gradient-90)"
                            d="M420.34 509.59h22.57v69.11h-22.57z" />
                        <path id="_Rectangle_57" data-name="&lt;Rectangle&gt;" className="cls-25"
                            d="M383.67 415.82a36.68 36.68 0 0 1 36.68 36.68v106.25H347V452.5a36.68 36.68 0 0 1 36.67-36.68z"
                        />
                        <path id="_Rectangle_58" data-name="&lt;Rectangle&gt;" className="cls-29"
                            d="M383.67 421.71A31.33 31.33 0 0 1 415 453v105.75h-62.67V453a31.33 31.33 0 0 1 31.33-31.33z"
                        />
                        <circle cx="431.63" cy="497.65" r="11.29" fill="url(#linear-gradient-91)"
                        />
                        <path id="_Rectangle_59" data-name="&lt;Rectangle&gt;" className="cls-33"
                            d="M417.75 496.31h27.77v13.29h-27.77z" />
                        <path id="_Rectangle_60" data-name="&lt;Rectangle&gt;" fill="url(#linear-gradient-92)"
                            d="M324.42 509.59h22.57v69.11h-22.57z" />
                        <circle cx="335.7" cy="497.65" r="11.29" fill="url(#linear-gradient-93)"
                        />
                        <path id="_Rectangle_61" data-name="&lt;Rectangle&gt;" className="cls-33"
                            d="M321.82 496.31h27.77v13.29h-27.77z" />
                        <path className="cls-33" d="M363 550.49a2.83 2.83 0 0 1-2.83 2.83 2.61 2.61 0 0 1-.69-.09 2.82 2.82 0 0 1 0-5.48 2.61 2.61 0 0 1 .69-.09 2.83 2.83 0 0 1 2.83 2.83z"
                            transform="translate(0 -56.34)" />
                        <ellipse className="cls-40" cx="359.45" cy="494.15" rx="2.14" ry="2.74"
                        />
                        <path className="cls-40" d="M439.54 425.27h26.1v27.57h-26.1z" />
                        <path className="cls-1" d="M448.1 456.43l-3.48-17.82h7.65v17.82h-4.17z"
                        />
                        <path className="cls-33" d="M456.44 456.43l3.49-17.82h-7.66v17.82h4.17z"
                        />
                        <path className="cls-29" d="M458.44 451.99H446.1l2 4.44h8.34l2-4.44zM442.22 438.61h20.1l-3.25-4.44h-13.59l-3.26 4.44z"
                        />
                        <path className="cls-25" d="M451.04 434.17h2.47l-.4-2.22h-1.67l-.4 2.22z"
                        />
                        <circle className="cls-25" cx="452.27" cy="431.39" r="1.27" />
                        <path className="cls-33" d="M441.87 427.37h21.75v5.51h-21.75z" />
                        <path className="cls-40" d="M298.24 425.27h26.1v27.57h-26.1z" />
                        <path className="cls-1" d="M306.81 456.43l-3.49-17.82h7.66v17.82h-4.17z"
                        />
                        <path className="cls-33" d="M315.15 456.43l3.48-17.82h-7.65v17.82h4.17z"
                        />
                        <path className="cls-29" d="M317.15 451.99h-12.34l2 4.44h8.34l2-4.44zM300.92 438.61h20.11l-3.26-4.44h-13.59l-3.26 4.44z"
                        />
                        <path className="cls-25" d="M309.74 434.17h2.47l-.4-2.22h-1.67l-.4 2.22z"
                        />
                        <circle className="cls-25" cx="310.98" cy="431.39" r="1.27" />
                        <path className="cls-33" d="M300.57 427.37h21.75v5.51h-21.75z" />
                        <path className="cls-147" d="M1662.99 423.23l-148.78 79.1M1514.21 423.23l148.78 79.1"
                        />
                        <path className="cls-148" d="M1662.99 502.33l-148.78 76.01M1514.21 502.33l148.78 76.01"
                        />
                        <path className="cls-29" d="M1503.12 553.68a23.87 23.87 0 0 0-7.62-17.52 8.26 8.26 0 0 1-2.64-6.06 35.81 35.81 0 0 0-39.56-35.61c-18.34 1.87-32.06 17.75-32 36.19a16.24 16.24 0 0 1-3.06 9.34 23.94 23.94 0 0 0 2.06 29.94 6.44 6.44 0 0 1 1.78 4.39v.32a24 24 0 0 0 24 24c.5 0 1 0 1.5-.05a107.39 107.39 0 0 1 20.51.77 24 24 0 0 0 26.83-20.47c.05-.41.1-.83.14-1.24a18.79 18.79 0 0 1 3.46-9.69 23.81 23.81 0 0 0 4.6-14.31z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M1418 457.74a6 6 0 0 1 6 6 6 6 0 0 1-6-6z"
                        />
                        <path className="cls-29" d="M1492.83 511.54a3.89 3.89 0 0 0-2.57-.68 3.89 3.89 0 0 0 .24-1.95 3.91 3.91 0 0 0-3.32 4.42 3.77 3.77 0 0 0 1.16-.38 3.9 3.9 0 0 0 4.49-1.41zM1497.3 572.85a4 4 0 0 1-1.15 4 3.49 3.49 0 0 0-2-4.91 4 4 0 0 1 5.61-.35 3.92 3.92 0 0 1-2.46 1.26zM1459.09 493.76a4.92 4.92 0 0 0-4.42-2.58 4.9 4.9 0 0 0 2.87 4.34 4.89 4.89 0 0 0-.53 1.8 4.92 4.92 0 0 0 5.34-4.46 4.86 4.86 0 0 0-3.26.9z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1471.01 550.64h-27.91l5.5 27.91h16.92l5.49-27.91z"
                        />
                        <path className="cls-149" d="M1457.06 550.64v-89.62M1457.06 500.2l21.16-14.67M1457.06 516.57l-11.6-11.25"
                        />
                        <path className="cls-25" d="M1510.43 500.95h156.33v1.38h-156.33zM1510.43 423.23h156.33v1.38h-156.33z"
                        />
                        <path className="cls-33" d="M1514.21 395.73h2.56V578.6h-2.56zM1660.43 395.73h2.56V578.6h-2.56z"
                        />
                        <path className="cls-25" d="M1542.03 576.77h22.74v1.89h-22.74zM1542.03 543.52h22.74v1.89h-22.74z"
                        />
                        <path className="cls-29" d="M1544.04 545.42h18.71v31.35h-18.71z" />
                        <path className="cls-29" d="M1538.83 552.17h10.42v11.05h-10.42z" />
                        <path className="cls-29" d="M1535.66 554.05h4.62v7.29h-4.62z" />
                        <path className="cls-25" d="M1537.97 550.49h3.26v14.42h-3.26z" />
                        <path className="cls-29" transform="rotate(180 1562.41 585.865)" d="M1557.2 608.51h10.42v11.05h-10.42z"
                        />
                        <path className="cls-29" transform="rotate(180 1568.48 585.865)" d="M1566.17 610.39h4.62v7.29h-4.62z"
                        />
                        <path className="cls-25" transform="rotate(180 1566.85 585.865)" d="M1565.22 606.83h3.26v14.42h-3.26z"
                        />
                        <path className="cls-29" d="M1553.4 533.16a9.35 9.35 0 0 1 9.35 9.35v1H1544v-1a9.35 9.35 0 0 1 9.35-9.35z"
                        />
                        <path className="cls-25" d="M1551.35 530.84h4.09v3.27h-4.09z" />
                        <path className="cls-29" d="M1549.59 530.05h7.6v1.59h-7.6z" />
                        <circle className="cls-25" cx="1553.4" cy="557.7" r="7.21" />
                        <circle className="cls-29" cx="1553.4" cy="557.7" r="3.64" />
                        <circle className="cls-29" cx="380.44" cy="272.58" r="7.12" />
                        <circle className="cls-40" cx="380.44" cy="272.58" r="6.36" />
                        <path className="cls-25" d="M380.44 329.17a.25.25 0 0 1-.25-.25v-4.64a.25.25 0 0 1 .5 0v4.64a.25.25 0 0 1-.25.25z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M383.06 331.53a.27.27 0 0 1-.17-.06l-2.62-2.37a.24.24 0 0 1 0-.35.25.25 0 0 1 .35 0l2.62 2.37a.25.25 0 0 1 0 .35.27.27 0 0 1-.18.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M1519.08 317.88l-.54-17.22-11.12.68-.08 15.53 11.74 1.01z"
                        />
                        <path className="cls-35" d="M1546.48 422.24s-.87 1.09-1 1.27a3.26 3.26 0 0 0-.12 1.44 3.89 3.89 0 0 0 .48 1.66.59.59 0 0 0 .48.15 1.2 1.2 0 0 0 .55-.2.72.72 0 0 0 .68-.1.61.61 0 0 0 .65-.21.51.51 0 0 0 .55-.14 4 4 0 0 1 .1-.81 12.53 12.53 0 0 0-.29-2.63s-.06-1.34-2.08-.43z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M1547.4 421.89a4.13 4.13 0 0 1-.84.7c-.39.22 2 1.25 2 1.25s.19-1 .32-1.83c.12-.63-1.48-.12-1.48-.12z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1547.08 431.73a3.46 3.46 0 1 1 3.33-3.13 3.24 3.24 0 0 1-3.33 3.13zm.64-6.58a3.21 3.21 0 1 0 2.43 3.43 3 3 0 0 0-2.43-3.43z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-38" d="M1548.86 422.92l-2.83-.48s-1.08-7.91-1.11-11.23c0-.07-.13-1.4-.28-2.8-.07-.69-.15-1.4-.21-2-.08-.76-.14-1.3-.14-1.3s-2.17-7.19 1.24-6.31c0 0 .92.06 1.88 2.92a17.26 17.26 0 0 1 .9 4.38 51.23 51.23 0 0 1 .54 5.75c0 .57 0 1.49.07 4.48.02 1.33-.06 6.59-.06 6.59z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" transform="rotate(5.57 2125.867 404.613)" d="M1543.84 428.74h6.26v8.22h-6.26z"
                        />
                        <path className="cls-31" transform="rotate(5.57 2125.82 405.748)" d="M1543.73 431.04h6.26v5.92h-6.26z"
                        />
                        <path className="cls-33" transform="rotate(5.57 2125.543 408.543)" d="M1543.46 436.62h6.26v.32h-6.26z"
                        />
                        <path className="cls-38" d="M1512.6 325.19l-.32-.03.12-1.41 7.33-.47.28-3.31-1.24-.1.02-.32 1.57.13-.33 3.9-7.33.47-.1 1.14z"
                        />
                        <path className="cls-33" transform="rotate(4.9 2172.646 347.702)" d="M1507.17 373.71h11.78v3.68h-11.78z"
                        />
                        <path className="cls-29" transform="rotate(5.57 2090.857 358.408)" d="M1511.14 381.23h1.61V392h-1.61z"
                        />
                        <path className="cls-40" d="M1528.63 452.65s.26 1.65.29 1.9 2.65-.17 2.65-.17l.19-2a15.28 15.28 0 0 0-3.13.27z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1528.89 454.34a7 7 0 0 1-1.62 1.45c-.8.44-3.75.83-4.22 1.28s-.89 1.65 3.8 1.48c3.34-.12 5 .15 5.3-.39s-.56-4-.56-4a6.23 6.23 0 0 1-2.7.18z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1523.5 423.2l-.03-75.33h1.18l.03 75.34-1.18-.01zM1542.54 423.23l-.03-75.34h1.17l.03 75.34h-1.17z"
                        />
                        <path className="cls-25" d="M1524.06 350.62v-1.16l19.04.02v1.17l-19.04-.03zM1524.07 359.4v-1.17l19.03.02v1.17l-19.03-.02zM1524.07 368.17V367l19.04.03v1.17l-19.04-.03zM1524.07 376.95v-1.17l19.04.02v1.17l-19.04-.02zM1524.08 385.72v-1.17l19.03.03v1.17l-19.03-.03zM1524.08 394.5v-1.17l19.04.02v1.17l-19.04-.02zM1524.08 403.27v-1.17l19.04.03v1.16l-19.04-.02zM1524.09 412.04v-1.16l19.03.02v1.17l-19.03-.03zM1524.09 420.82v-1.17l19.04.03v1.16l-19.04-.02z"
                        />
                        <path className="cls-40" d="M1509.81 387.37a1.83 1.83 0 0 0 .37.42s.31.15.52.27l.16.1a3.22 3.22 0 0 0 .85.56c.43.17 2.36.8 2.36.8l.57-1.11.42-.91a19.8 19.8 0 0 0-2-2.72h-.11a4.5 4.5 0 0 0-.83-.16c-.06 0-.75-.16-.92 0a.68.68 0 0 0-.29.59 1.65 1.65 0 0 0-.5.75 1 1 0 0 0-.36.82s-.35.3-.24.59z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-38" d="M1543 427.8l-.21-6.82c-.07-2.74-.1-5.28 0-5.83.22-1.33.67-3.22 1.08-4.82l2-11.31c-1-.88-4.49-2.05-5.81-2.45l-4.08-.4s-2.62.52-4.7 1.14l-1 .29a5.29 5.29 0 0 0-.6.23 4.94 4.94 0 0 0-2.88 3.55c0 .26-.17.71-.32 1.28.81.51 1.55 1 2.13 1.4.37.26.68.5.91.7l.2 2.51c0 2.45-.4 6-.38 6.49 0 .77-4 14.94-4 15.35s8.89-.28 12.37-.32c1.09 0 2 0 2.75-.06 1.64 0 2.46-.12 2.46-.12s.08-.31.08-.81z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-38" d="M1529.46 404.64a26.67 26.67 0 0 0-2.92-2 110.06 110.06 0 0 1-8.81-6.7c-1.3-.89-5.12-6.56-5.12-6.56.3-.77 2.51-2.15 2.51-2.15s6 6.8 7.32 7.7c1.17.77 7.2 2 8.86 2.36l.43.08c1.52 2.55-1.35 7.99-2.27 7.27z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1528.21 418.19s-2.42 6.89-2.88 9-1.83 7.88-2.09 9.22 4.08 14.94 4.44 17.35l5.18-.31s-4.06-14.11-2.36-17c2.53-4.28 2.79-4.12 4.79-7.66s5.79-3.25 7.47-10c0 0-12.97-2.64-14.55-.6z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M1541.12 386s-3.27-1.58-5.09.82-2.16 7.55-.51 8.34 4.25.72 5.28-.79a12.83 12.83 0 0 0 2.16-5.31 3.42 3.42 0 0 0-1.84-3.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M1536.11 395.09a2.82 2.82 0 0 1-.22 1.31c-.27.41 4.22.86 4.22.86a28.36 28.36 0 0 1 1.48-4.25c.89-1.93-5.48 2.08-5.48 2.08z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1541.59 393s-.36.47-1.61.15-2.62-2.14-3.13-2.37-.49-.54-.49-.54l-.38.44h-.56s.66-1.44-.06-2.12 1.28-4.76 5.2-2.95c0 0 3 1.15 2.75 2.9a9.88 9.88 0 0 1-1.72 4.49z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M1536.51 389.62c.1-.29.93-1.06 1.14-.13s-.65 2.07-1 1.93-.4-1.07-.14-1.8z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1542.9 420s-3.62 1.16-14.9-.92c0 0-2.4 9-2.7 10.73l17.89-.83a49.27 49.27 0 0 0-.29-8.98z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-38" d="M1542.93 390.7a11.61 11.61 0 0 0-8-2.34s.72-5.38 5.61-4c4.63 1.24 2.61 5.75 2.39 6.34z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-38" d="M1535.43 387.63s-1.42.08-1.36.59c0 .34 1.11.2 1.11.2zM1536 396.15s2.83-.37 4.33.31l.22.24s.38.94-1.41.85-4.6-.25-3.14-1.4z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M1540.54 461.43s.26 1.65.29 1.9 2.65-.17 2.65-.17l.19-2a15.28 15.28 0 0 0-3.13.27z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1544.39 462.77l-4.82.08s-1.45-17.26-2-19.06c-.39-1.26-1.68-7.77-2.43-12.1-.14-.75-.25-1.44-.34-2a13.58 13.58 0 0 1-.21-1.8c0-1.4 8.17-9.08 8.17-9.08a53.7 53.7 0 0 1 .47 7.74c-.09 3.54 0 7.45 0 11.17 0 4.14.54 10.89.39 13.09s.77 11.96.77 11.96z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M1540.8 463.12a7 7 0 0 1-1.62 1.45c-.79.44-3.75.83-4.22 1.28s-.89 1.65 3.8 1.48c3.34-.12 5 .15 5.3-.39s-.56-4-.56-4a6.23 6.23 0 0 1-2.7.18z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1542.76 418.79a27.54 27.54 0 0 1 .73-7 15.17 15.17 0 0 0 .79-4.38c.08-.51-.88-3.41-1-4.53 0 0-2.47-.83-8.84-.87 0 0-.78 4.4-4.7 4.94 0 0-.42 6.08-.61 7.12s-1.3 5.13-1.3 5.13z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1543.3 402.9a28.57 28.57 0 0 0 0-5.23 2.77 2.77 0 0 0-1.22-.46 26.76 26.76 0 0 1-.2 6.17c-.32 1.74 1.42-.48 1.42-.48zM1534.46 402s.21-3.29-1.92-5.08a1.46 1.46 0 0 1 1.24-.31 7.78 7.78 0 0 1 2.06 5.41c.16 3.7-1.38-.02-1.38-.02z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1545.82 426.43s0-1.73.25-1.77a.46.46 0 0 1 .41.11l.32-.72s.47-.36.73.27c0 0 .41-.39.59.25 0 0 .38-.14.52.14a6 6 0 0 1 .11 1.4s-.12.23-.55.14a.6.6 0 0 1-.65.21.68.68 0 0 1-.68.1s-.58.49-1 .05a1.11 1.11 0 0 1-.05-.18z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M1545.48 423.56a5.75 5.75 0 0 0 1.13 1.49c.13.1.27.17.41.09s.2-.38 0-.85a4.36 4.36 0 0 1-.29-1.17s-.4-.42-1.25.44z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1544.64 408.41c-.07-.69-.15-1.4-.21-2s.4-3.47.4-4.36a17.66 17.66 0 0 1-.19 6.36z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-30" d="M1539.37 424.82c-.06.09-4 5.9-4.23 6.87-.14-.75-.25-1.44-.34-2a19.24 19.24 0 0 1 1.53-2.25c.44-.44 2.78-2.39 3.04-2.62z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-31" d="M1629.59 526.43h46.37v23.93h-46.37z" />
                        <path className="cls-33" d="M1629.59 550.36H1676v1.93a3.94 3.94 0 0 1-3.94 3.94h-38.5a3.94 3.94 0 0 1-3.94-3.94v-1.93h-.03z"
                        />
                        <path className="cls-33" d="M1665.86 569.55h-26.16s-10.11 10-10.11 13.22H1676c0-3.27-10.14-13.22-10.14-13.22z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1665.85 567.28h-26.15a1.18 1.18 0 0 0 0 2.27h26.15a1.18 1.18 0 0 0 0-2.27z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1625.46 528.29h54.63v7.26h-54.63zM1619.83 528.29h2.74v7.26h-2.74z"
                        />
                        <path className="cls-29" d="M1625.46 562.38h54.63v3.63h-54.63z" />
                        <path className="cls-29" d="M1622.58 524.52h3.2v53.01h-3.2zM1679.8 524.52h3.2v41.49h-3.2z"
                        />
                        <path className="cls-31" d="M1699.18 601.53a1.89 1.89 0 0 1-1.88 1.89h-12.41a1.89 1.89 0 0 1-1.89-1.89v-26a1.89 1.89 0 0 1 1.89-1.89h5a6.76 6.76 0 0 1 6.41 4.63l1.94 5.87a18.4 18.4 0 0 1 .94 5.84z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-31" d="M1618.77 577.53h10.83v2.72h-10.83z" />
                        <circle className="cls-33" cx="1681.4" cy="626.05" r="10.55" transform="rotate(-46.43 1615.61 597.884)"
                        />
                        <circle className="cls-31" cx="1681.4" cy="569.71" r="5.66" />
                        <circle className="cls-25" cx="1689.08" cy="532.19" r="1.78" />
                        <circle className="cls-25" cx="1693.79" cy="532.19" r="1.78" />
                        <path className="cls-40" d="M1694.63 593.12h-6.86a1 1 0 0 0-.88 1h8.61a1 1 0 0 0-.87-1zM1694.63 595.29h-6.86a1 1 0 0 0-.88 1h8.61a1 1 0 0 0-.87-1zM1694.63 597.45h-6.86a1 1 0 0 0-.88 1h8.61a1 1 0 0 0-.87-1z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1618.46 565.17c-.76 0-1.37.33-1.37.74v44.71c0 .41.61.74 1.37.74s1.37-.33 1.37-.74v-44.71c0-.41-.61-.74-1.37-.74z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1572.25 409.91h12.25v13.3h-12.25z" />
                        <path className="cls-29" d="M1572.25 412.54h12.25v4.44h-12.25z" />
                        <path className="cls-25" d="M1584.5 476.24a6.17 6.17 0 0 1-4.71-1.87c-2.42-2.58-2.18-6.86-2.16-7a.23.23 0 0 1 .26-.24.25.25 0 0 1 .23.27s-.24 4.25 2 6.67a5.69 5.69 0 0 0 4.35 1.71.25.25 0 0 1 0 .5z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1587.33 413.71h8.75v9.5h-8.75z" />
                        <path className="cls-32" d="M1587.33 415.58h8.75v3.17h-8.75z" />
                        <path className="cls-25" d="M1595.12 470.05a1.22 1.22 0 0 0-.71.82.28.28 0 0 1-.06.16.28.28 0 0 1-.14.1.54.54 0 0 1-.44.07 2.14 2.14 0 0 1-.19-.13.48.48 0 0 0-.58.16 3.58 3.58 0 0 0-.34.57 3.27 3.27 0 0 1-.57.67.72.72 0 0 1-.2.14.49.49 0 0 1-.21 0 2.15 2.15 0 0 1-1-.26 1.45 1.45 0 0 1-.67-.83 1.29 1.29 0 0 0-.1-.35.3.3 0 0 0-.29-.18.68.68 0 0 0-.17.09.51.51 0 0 1-.61-.15 4 4 0 0 1-.19-.48c-.07-.14-.37-.27-.27-.43z"
                            transform="translate(0 -56.34)" />
                    </g>
                    
                    {/* Our Work here, to detect the selected character */}
                    <g id="Characters" className={show}>
                        <path className="cls-38" d="M734.47 554.33l-6.7 33.28h1.72l8.72-30.76-3.74-2.52z"
                        />
                        <path fill="url(#linear-gradient-94)" d="M778.89 532.11h16.92l8.56-26.03-29.35-23.27-6.55 49.3h10.42z"
                        />
                        <path d="M747.2 612.54a19.54 19.54 0 0 1-19.2-15.69l-4.87-24.25a1.43 1.43 0 0 0-1.69-1.12 1.43 1.43 0 0 0-1.12 1.68l5 24.64a21.92 21.92 0 0 0 21.5 17.6H772a1.43 1.43 0 0 0 1.43-1.43 1.43 1.43 0 0 0-1.43-1.43z"
                            transform="translate(0 -56.34)" fill="#aab3c1" />

                        <path className="cls-38" d="M769.46 559.06l5.74 28.55h-1.72l-8.09-28.55h4.07z"
                        />

                        <path className="cls-30" d="M799.45 584.41h51.74a2.16 2.16 0 0 1 2.16 2.16v.35h-56.06v-.35a2.16 2.16 0 0 1 2.16-2.16z"
                        />
                        <path className="cls-20" d="M822.29 534.46h6.06v49.97h-6.06z" />
                        <path className="cls-30" d="M764.88 533.55h120.87v3.76H764.88z" />

                        {/* Scalable Charachter */}
                        <g className={"scalable-bw  " + (currentWord === 3 ? 'active' : '')}>
                            <path className="cls-40" d="M1379.72 518.11a15.6 15.6 0 0 0 .78-1.59 7.08 7.08 0 0 1 2.34-1.91 29.12 29.12 0 0 0 3.32-3 1.9 1.9 0 0 1 .79-.5.67.67 0 0 1 .79.35c.12.34-.15.68-.39.94l-1 1a1.21 1.21 0 0 0-.37.58 1.11 1.11 0 0 0 .1.64 5.88 5.88 0 0 1 .64 2.39 4.27 4.27 0 0 1-.78 1.85 3.26 3.26 0 0 1-.52.7 4.21 4.21 0 0 1-1.64.81 13.12 13.12 0 0 0-4.18 2.4 9.64 9.64 0 0 1-1.36-1.35c-.23-.28-1-1.1-1-1.49.17-.69 2.02-1.21 2.48-1.82z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-20" d="M1377.54 519.47l1.61-1.13a3.51 3.51 0 0 1 2.4 3.34l-2 1.41z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-30" d="M1378.27 518.76c1.3.2 2.61 2.88 2.32 3.6s-2 1.78-3 2.61c-3.62 3.08-7.38 5.71-11 8.78-6.39 5.4-13.11 11-21.41 13.24a5.68 5.68 0 0 1-2.58.27 4.78 4.78 0 0 1-2.38-1.42 7.36 7.36 0 0 1-2.35-4.29c-.42-3.77 3-4.43 5.95-5.68 4-1.65 7.88-3.4 11.75-5.22q11.64-5.46 22.7-11.89z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-20" d="M1377.54 519.47l1.61-1.13a3.51 3.51 0 0 1 2.4 3.34l-2 1.41z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-30" d="M1378.27 518.76c1.3.2 2.61 2.88 2.32 3.6s-2 1.78-3 2.61c-3.62 3.08-7.38 5.71-11 8.78-6.39 5.4-13.11 11-21.41 13.24a5.68 5.68 0 0 1-2.58.27 4.78 4.78 0 0 1-2.38-1.42 7.36 7.36 0 0 1-2.35-4.29c-.42-3.77 3-4.43 5.95-5.68 4-1.65 7.88-3.4 11.75-5.22q11.64-5.46 22.7-11.89z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M1342.78 578.77l-.16 7.82 5.79-1 .1-7.25-5.73.43z"
                            />
                            <path className="cls-25" d="M1351.94 521.57l-17.02-.13 9.68 26.22-1.98 34.77 5.84-.35 5.48-34.67-2-25.84z"
                            />
                            <path className="cls-25" d="M1341.91 640.66a.56.56 0 0 1 .86-.24 4.37 4.37 0 0 0 3.12.88 2.51 2.51 0 0 0 2.4-1.51.56.56 0 0 1 .75-.33l4.93 3.08c.59.26 5.68 2 5.91 2.56a.83.83 0 0 1-.81 1.13l-16.54-.55a1.13 1.13 0 0 1-1.1-1.23l.27-3.19a.83.83 0 0 1 0-.15z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M1347.53 518.66v16.14a3.85 3.85 0 0 1-3.85 3.84A4.67 4.67 0 0 1 1339 534v-15.34z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M1347.53 528.75v2.84a4.38 4.38 0 0 1-4-3.53l-1.71-8.69 3.58-.71h.15z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M1348.11 530.09a4.4 4.4 0 0 1-5.16-3.47l-1.71-8.7 10.23-2 1.39 7.09a6 6 0 0 1-4.75 7.08z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M1351.4 517l2.56 2.54a.73.73 0 0 1-.45 1.19l-2.22.88z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M1351.5 516.06a9.26 9.26 0 1 1-10.87-7.3 9.25 9.25 0 0 1 10.87 7.3z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M1334.3 513.72s-4 3-.44 8.57 4.34 3.16 5.17 7.37c0 0 9.65-8.43 2.4-16s-7.13.06-7.13.06z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-20" d="M1337.51 537.62v-4.52s9.28-1.62 12.68 2.89l-5 6.23z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M1333.47 577.86l-.81 7.78 5.86-.52.7-7.22-5.75-.04z"
                            />
                            <path className="cls-30" d="M1334.23 575.68l.81 25a25.17 25.17 0 0 1 0 3.58l-2.18 34.39 5.93-.4 6.63-34.36 5.92-28.17zM1332.15 639.65a.55.55 0 0 1 .87-.17 4.32 4.32 0 0 0 3 1.14 2.48 2.48 0 0 0 2.51-1.31.56.56 0 0 1 .78-.26l4.66 3.48c.56.31 5.49 2.43 5.67 3a.84.84 0 0 1-.9 1.07l-16.44-1.93a1.14 1.14 0 0 1-1-1.32l.54-3.15a.42.42 0 0 1 0-.15z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-29" d="M1352.92 552.37l.95 28a54.19 54.19 0 0 1-19.86.5l-1.5-34.25a18.13 18.13 0 0 1 .81-6.57c1.49-4.38 4.29-6 8.16-6a10.16 10.16 0 0 1 1.63.23c6.36 1.37 8.73 7 9.31 10.71 0 .25.06.49.09.72a10.66 10.66 0 0 1 0 1.07v.35z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M1376.88 564.75a7.51 7.51 0 0 1 1.5.19 6.06 6.06 0 0 1 1.84.86 42.41 42.41 0 0 0 4.35 2.87 5 5 0 0 0 5-.09.66.66 0 0 0 .27-.33.64.64 0 0 0-.11-.46c-1-1.8-3.19-2.57-4.5-4.14a1.53 1.53 0 0 1 1.24-.69c.45 0 1 .15 1.25-.23s-.21-.88-.62-1.13c-1.82-1.14-3.84-2.33-6-2-.48.07-.94.21-1.42.31a16.74 16.74 0 0 1-6.15.11c.26 1.36.76 2.27 1 3.62s1.14.92 2.35 1.11z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-20" d="M1372.76 503.58l4.1.09.87 4.81-3.43-.22-1.54-4.68z"
                            />
                            <path className="cls-30" d="M1375.12 559.78l-21.37-1.23-6.29-17.33a5.62 5.62 0 0 0-1.46-2.31l-.21-.21a5.68 5.68 0 0 0-9.35 2.42 5.73 5.73 0 0 0 .57 4.64l8.33 13.69c1.73 3.34 2.48 5.88 8.84 5.71h.08l21.82-.45z"
                            transform="translate(0 -56.34)" />
                            <circle className="cls-25" cx="1349.92" cy="460.1" r="0.44" />
                            <path className="cls-38" d="M1334.3 513.72s-1.45-2.79 1.84-4.62c5-2.76 11.42 1.24 14.78-2.36 0 0 .68 5.55-10.09 10s-6.53-3.02-6.53-3.02z"
                            transform="translate(0 -56.34)" />
                            <circle className="cls-38" cx="1341.47" cy="462.6" r="4.74" />
                            <path className="cls-40" d="M1346.11 521.52a1.78 1.78 0 1 1-2.09-1.4 1.78 1.78 0 0 1 2.09 1.4z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-20" d="M1352.44 524.33a.36.36 0 0 0-.11-.1 1.76 1.76 0 0 0-1.2-.12h-.1a.14.14 0 0 0 0 .11 1.26 1.26 0 0 0 .28.71.8.8 0 0 0 .78.41.58.58 0 0 0 .39-.44.8.8 0 0 0-.04-.57z"
                            transform="translate(0 -56.34)" />

                        </g>
                        <g className={"scalable " + (currentWord === 3 ? 'active' : '')}>
                            <g className={"floating-icon-3 " + (currentWord === 3 ? 'active-3' : '')}>
                                <g className="c" transform="matrix(1, 0, 0, 1, 444, 426)">
                                    <path className="a" d="M936,435.567v37.809a3.55,3.55,0,0,0,3.531,3.567h11.442a3.516,3.516,0,0,1,2.5,1.044l5.457,5.513a3.507,3.507,0,0,0,4.995,0l5.457-5.513a3.517,3.517,0,0,1,2.5-1.044h11.442a3.55,3.55,0,0,0,3.531-3.567V435.567A3.55,3.55,0,0,0,983.319,432H939.531A3.549,3.549,0,0,0,936,435.567Z" transform="translate(-918 -422)" /></g><g transform="translate(469.095 441.076)"><path className="b" d="M606.825,530.263l2.895-8.685a.863.863,0,0,0-1.091-1.091l-8.685,2.9a.863.863,0,0,0-.337,1.428l.913.913a.862.862,0,0,1,0,1.22l-6.15,6.15h0l-2.135,2.135a.862.862,0,0,0,0,1.22l2.135,2.135,2.135,2.135a.863.863,0,0,1,0,1.22l-7.015,7.015a.862.862,0,0,0,0,1.22l1.525,1.525a.862.862,0,0,0,1.22,0l7.625-7.625,2.135-2.135a.863.863,0,0,0,0-1.22l-4.27-4.27a.863.863,0,0,1,0-1.22l5.54-5.54a.863.863,0,0,1,1.22,0l.913.913A.863.863,0,0,0,606.825,530.263Z" transform="translate(-499.21 -595.999) rotate(8)" />
                                </g>
                            </g>
                            <path className="cls-150" d="M1379.72 518.11a15.6 15.6 0 0 0 .78-1.59 7.08 7.08 0 0 1 2.34-1.91 29.12 29.12 0 0 0 3.32-3 1.9 1.9 0 0 1 .79-.5.67.67 0 0 1 .79.35c.12.34-.15.68-.39.94l-1 1a1.21 1.21 0 0 0-.37.58 1.11 1.11 0 0 0 .1.64 5.88 5.88 0 0 1 .64 2.39 4.27 4.27 0 0 1-.78 1.85 3.26 3.26 0 0 1-.52.7 4.21 4.21 0 0 1-1.64.81 13.12 13.12 0 0 0-4.18 2.4 9.64 9.64 0 0 1-1.36-1.35c-.23-.28-1-1.1-1-1.49.17-.69 2.02-1.21 2.48-1.82z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-20" d="M1377.54 519.47l1.61-1.13a3.51 3.51 0 0 1 2.4 3.34l-2 1.41z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-151" d="M1378.27 518.76c1.3.2 2.61 2.88 2.32 3.6s-2 1.78-3 2.61c-3.62 3.08-7.38 5.71-11 8.78-6.39 5.4-13.11 11-21.41 13.24a5.68 5.68 0 0 1-2.58.27 4.78 4.78 0 0 1-2.38-1.42 7.36 7.36 0 0 1-2.35-4.29c-.42-3.77 3-4.43 5.95-5.68 4-1.65 7.88-3.4 11.75-5.22q11.64-5.46 22.7-11.89z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-150" d="M1342.78 578.77l-.16 7.82 5.79-1 .1-7.25-5.73.43z"
                            />
                            <path fill="#2b3a42" d="M1351.94 521.57l-17.02-.13 9.68 26.22-1.98 34.77 5.84-.35 5.48-34.67-2-25.84z"
                            />
                            <path d="M1341.91 640.66a.56.56 0 0 1 .86-.24 4.37 4.37 0 0 0 3.12.88 2.51 2.51 0 0 0 2.4-1.51.56.56 0 0 1 .75-.33l4.93 3.08c.59.26 5.68 2 5.91 2.56a.83.83 0 0 1-.81 1.13l-16.54-.55a1.13 1.13 0 0 1-1.1-1.23l.27-3.19a.83.83 0 0 1 0-.15z"
                                transform="translate(0 -56.34)" fill="#092533" />
                            <path className="cls-150" d="M1347.53 518.66v16.14a3.85 3.85 0 0 1-3.85 3.84A4.67 4.67 0 0 1 1339 534v-15.34z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-153" d="M1347.53 528.75v2.84a4.38 4.38 0 0 1-4-3.53l-1.71-8.69 3.58-.71h.15z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-150" d="M1348.11 530.09a4.4 4.4 0 0 1-5.16-3.47l-1.71-8.7 10.23-2 1.39 7.09a6 6 0 0 1-4.75 7.08z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-150" d="M1351.4 517l2.56 2.54a.73.73 0 0 1-.45 1.19l-2.22.88z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-150" d="M1351.5 516.06a9.26 9.26 0 1 1-10.87-7.3 9.25 9.25 0 0 1 10.87 7.3z"
                                transform="translate(0 -56.34)" />
                            <path d="M1334.3 513.72s-4 3-.44 8.57 4.34 3.16 5.17 7.37c0 0 9.65-8.43 2.4-16s-7.13.06-7.13.06z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-20" d="M1337.51 537.62v-4.52s9.28-1.62 12.68 2.89l-5 6.23z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-150" d="M1333.47 577.86l-.81 7.78 5.86-.52.7-7.22-5.75-.04z"
                            />
                            <path className="cls-160" d="M1334.23 575.68l.81 25a25.17 25.17 0 0 1 0 3.58l-2.18 34.39 5.93-.4 6.63-34.36 5.92-28.17z"
                                transform="translate(0 -56.34)" />
                            <path d="M1332.15 639.65a.55.55 0 0 1 .87-.17 4.32 4.32 0 0 0 3 1.14 2.48 2.48 0 0 0 2.51-1.31.56.56 0 0 1 .78-.26l4.66 3.48c.56.31 5.49 2.43 5.67 3a.84.84 0 0 1-.9 1.07l-16.44-1.93a1.14 1.14 0 0 1-1-1.32l.54-3.15a.42.42 0 0 1 0-.15z"
                                transform="translate(0 -56.34)" fill="#0c2c40" />
                            <path d="M1352.92 552.37l.95 28a54.19 54.19 0 0 1-19.86.5l-1.5-34.25a18.13 18.13 0 0 1 .81-6.57c1.49-4.38 4.29-6 8.16-6a10.16 10.16 0 0 1 1.63.23c6.36 1.37 8.73 7 9.31 10.71 0 .25.06.49.09.72a10.66 10.66 0 0 1 0 1.07v.35z"
                                transform="translate(0 -56.34)" fill="#4893d8" />
                            <path className="cls-150" d="M1376.88 564.75a7.51 7.51 0 0 1 1.5.19 6.06 6.06 0 0 1 1.84.86 42.41 42.41 0 0 0 4.35 2.87 5 5 0 0 0 5-.09.66.66 0 0 0 .27-.33.64.64 0 0 0-.11-.46c-1-1.8-3.19-2.57-4.5-4.14a1.53 1.53 0 0 1 1.24-.69c.45 0 1 .15 1.25-.23s-.21-.88-.62-1.13c-1.82-1.14-3.84-2.33-6-2-.48.07-.94.21-1.42.31a16.74 16.74 0 0 1-6.15.11c.26 1.36.76 2.27 1 3.62s1.14.92 2.35 1.11z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-20" d="M1372.76 503.58l4.1.09.87 4.81-3.43-.22-1.54-4.68z"
                            />
                            <path className="cls-151" d="M1375.12 559.78l-21.37-1.23-6.29-17.33a5.62 5.62 0 0 0-1.46-2.31l-.21-.21a5.68 5.68 0 0 0-9.35 2.42 5.73 5.73 0 0 0 .57 4.64l8.33 13.69c1.73 3.34 2.48 5.88 8.84 5.71h.08l21.82-.45z"
                                transform="translate(0 -56.34)" />
                            <circle className="cls-161" cx="1349.92" cy="460.1" r="0.44" />
                            <path d="M1334.3 513.72s-1.45-2.79 1.84-4.62c5-2.76 11.42 1.24 14.78-2.36 0 0 .68 5.55-10.09 10s-6.53-3.02-6.53-3.02z"
                                transform="translate(0 -56.34)" />
                            <path d="M1336.5 511a2.84 2.84 0 0 0 .23.66 5.43 5.43 0 0 0 .35.57c.24.38.53.73.8 1.19a2.14 2.14 0 0 1-.69-.35 2.36 2.36 0 0 1-.53-.56 1.45 1.45 0 0 1-.16-1.51z"
                                transform="translate(0 -56.34)" />
                            <path d="M1337.84 513.44a1.52 1.52 0 0 0-.51-.05 2 2 0 0 0-.49 0c-.34 0-.66.14-1 .16a1.49 1.49 0 0 1 .45-.34 2 2 0 0 1 .54-.18 1.08 1.08 0 0 1 1.01.41z"
                                transform="translate(0 -56.34)" />
                            <circle cx="1341.47" cy="462.6" r="4.74" />
                            <path className="cls-150" d="M1346.11 521.52a1.78 1.78 0 1 1-2.09-1.4 1.78 1.78 0 0 1 2.09 1.4z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-20" d="M1352.44 524.33a.36.36 0 0 0-.11-.1 1.76 1.76 0 0 0-1.2-.12h-.1a.14.14 0 0 0 0 .11 1.26 1.26 0 0 0 .28.71.8.8 0 0 0 .78.41.58.58 0 0 0 .39-.44.8.8 0 0 0-.04-.57z"
                                transform="translate(0 -56.34)" />
                        </g>

                        {/* Addictive Charachter */}
                        <g className={"addictive-bw  " + (currentWord === 0 ? 'active' : '')}>
                            <path className="cls-30" d="M967.17 538.22l8-34.26 5.17.65-8.72 34.55-4.45-.94z"
                            />
                            <path className="cls-30" d="M969.06 594.21a2.28 2.28 0 0 1-1.19.94 1.56 1.56 0 0 1-.67.15 1.93 1.93 0 0 1-1.2-.69 1.2 1.2 0 0 0-.61.77 3.88 3.88 0 0 1-.36 1 .75.75 0 0 1-.87.34.7.7 0 0 1-.37-.67 2.19 2.19 0 0 1 .23-.78l.43-1a3.47 3.47 0 0 1 .72-1.18 3.15 3.15 0 0 1 1.89-.67c1.04-.13 2.76.39 2 1.79z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M964.16 544.46v-5.1l6.82 1.41v3.69" />
                            <path className="cls-33" d="M955.73 544.46h22.29v30.92h-22.29z" />
                            <path className="cls-35" d="M966.24 593.69a.9.9 0 0 0-.46.12.94.94 0 0 0-.26.44c-.29.81-.55 1.63-.77 2.46a2.51 2.51 0 0 0-.12 1 1.82 1.82 0 0 0 1.24 1.28 12.65 12.65 0 0 0 1.83.38 4.87 4.87 0 0 0 2 .22 2.32 2.32 0 0 0 1.57-1.74 6.89 6.89 0 0 0 .06-2.44.65.65 0 0 0-.11-.34c-.12-.15-.36-.14-.55-.19-.59-.16-1-.71-1.61-.9a8.06 8.06 0 0 0-2.82-.29z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-29" d="M955.73 544.46h1.68v30.92h-1.68z" />
                            <path className="cls-25" d="M955.73 575.38l1.68-1.91v1.91h-1.68z" />
                            <path className="cls-40" d="M983.51 617.08l6.18 11.5 23.31 30.33 5.18-1.44-10.21-18.25s-4.17-12.51-11.93-15.1l-.77-12.07z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M975.4 601.66L965.74 625l-6.39 35 3.91 1.95s13.55-24.78 9.38-31.83l12.41-16.56z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M975 580.17s-5.09 15.72-5.42 20.63-3.41 14.7-3.41 14.7 18.1 15 37.09-.16c0 0-9.22-20.79-11.39-34.41z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M945.4 659.88a1.87 1.87 0 0 0-.08 2c.71.89 2.37 2.43 7.65 2.52s4.71 2.81 8.31 3 3.42-1.69 3.42-1.69z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M945.4 659.88s22.4 3.88 18.94 6.42c-3.06 2.25-6.19-2.21-11.47-2.62-5.68-.43-8.02-1.78-7.47-3.8z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M958.79 658.38a7.92 7.92 0 0 1-2.25.52l-5.39.71a9.55 9.55 0 0 1-2.92.08 5.22 5.22 0 0 0-1.3-.18 1 1 0 0 0-1 .75 1.26 1.26 0 0 0 .57 1.07 8 8 0 0 0 4.32 1.48 29.34 29.34 0 0 1 4.6.55 32.45 32.45 0 0 1 5.28 2.47 2.91 2.91 0 0 0 2.47.3 2.29 2.29 0 0 0 1.06-2 24.15 24.15 0 0 0-.28-2.4 6.49 6.49 0 0 1 .47-3.08l-2.4-.67a3.52 3.52 0 0 1-1.72-1 3.43 3.43 0 0 1-1.51 1.4z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-30" d="M948.23 659.69s3.72.23 3.76 3.92h.4s1.01-3.94-4.16-3.92z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M1004.93 670.34s.36 1.35 1.49 1.4 3.39-.2 6.91-4.13 5.21-1.73 7.71-4.32 1-3.69 1-3.69z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M1004.93 670.34s17.6-14.38 17.26-10.11c-.31 3.79-5.73 3.24-9.5 7-4.05 3.97-6.59 4.86-7.76 3.11z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M1012.56 659.25a7.84 7.84 0 0 1-1.08 2l-3 4.53a9.43 9.43 0 0 1-1.85 2.26 5.15 5.15 0 0 0-1 .87 1 1 0 0 0-.06 1.22 1.25 1.25 0 0 0 1.18.26 8 8 0 0 0 4-2.29 28 28 0 0 1 3.43-3.11 31.83 31.83 0 0 1 5.32-2.38c.78-.35 1.63-.84 1.84-1.67a2.27 2.27 0 0 0-.85-2.14 21.3 21.3 0 0 0-2-1.36 6.4 6.4 0 0 1-2-2.37l-2.08 1.37a3.61 3.61 0 0 1-1.88.65 3.49 3.49 0 0 1 .03 2.16z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-30" d="M1006.64 668.08s2.61-2.66 5.42-.28l.29-.28s-2.35-3.35-5.71.56zM985.39 564.07l-.22-11c-.12-3.07-1.5-4.48-3.87-4.71-1.94-.23-3.71 1-4.7 3.87l-3.53 9.27z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M985.83 548.35l1.95.25c2.58.34 5.17.44 6.63 2.6 2 2.89 1.68 7.74 1.14 11.12l-3.66 18.61-16.89-.76 1.75-13.3a5 5 0 0 1-3-5.71A34.66 34.66 0 0 1 978 550.4a6.09 6.09 0 0 1 7.82-2z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M988.28 548.83s-3 6.82-7.81 5.25c-2.88-.94.57-5.25.57-5.25z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-31" d="M1002.26 571.91s4.79 14.58-10.52 15.3-11.16-14.46-11.16-14.46z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M1002.26 571.91l-21.68.84s.55 10.56 11.92 10.59 9.76-11.43 9.76-11.43z"
                            transform="translate(0 -56.34)" />
                            <circle className="cls-40" cx="994.34" cy="526.9" r="1.36" />
                            <path className="cls-25" d="M1002.26 571.91s-3.69-21.38-8-21.73-13.73 22.57-13.73 22.57h1.31s8.88-20.91 12.25-20.94 6.78 20.2 6.78 20.2z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M994.48 561.71L985.6 578l-.14.25a3.19 3.19 0 0 1-2.1 1.59l-20.13 3.93-1.26-3 19.5-7.74-2.24 1.84L987 558z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-30" d="M993.48 565.84l2.6-9.88a7.15 7.15 0 0 0 .22-2.83 4 4 0 0 0-3.39-3.54c-2-.49-3.1 1.19-4.5 4l-4.47 9z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M961.09 578a.72.72 0 0 0-.23-.2.73.73 0 0 0-.33 0 21 21 0 0 0-3 .39 1.94 1.94 0 0 0 2.08 1.33 6.18 6.18 0 0 0 1.19 1.88 1 1 0 0 0 .32.24.73.73 0 0 0 .33 0c.84-.07 1.78-.19 1.25-1.18a14.85 14.85 0 0 0-1.61-2.46z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M960.06 582.2l-3.29-10.05a.67.67 0 0 0-.54-.46l-5.2-.79a.68.68 0 0 0-.74.92l4.47 11.51a.68.68 0 0 0 .75.43l4-.67a.68.68 0 0 0 .55-.89z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M961 580.29a3.42 3.42 0 0 0-1.18.18l-4.45 1.25c-.18 0-.4.13-.44.32a.55.55 0 0 0 0 .28l.56 1.58a3 3 0 0 0 .29.66 2.77 2.77 0 0 0 2.15 1 11.29 11.29 0 0 0 5.33-.79 1 1 0 0 0 .39-.24.89.89 0 0 0 .15-.68 4.88 4.88 0 0 0-1.29-2.39c-.35-.55-.7-1.1-1.51-1.17z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M992.47 522.13a5.67 5.67 0 0 1 6.31 2.63 7.58 7.58 0 0 1 .08 7.08 19 19 0 0 0-1.3 2.64 2.69 2.69 0 0 0 .5 2.75 1.93 1.93 0 0 0 3-.74 2.36 2.36 0 0 1 .68 3 3.49 3.49 0 0 1-2.81 1.69 6.7 6.7 0 0 1-3.3-.74 7.74 7.74 0 0 1-3.77-3.34 9.67 9.67 0 0 1-.74-2.36 43.59 43.59 0 0 1-.94-7.64c-.08-2.03-.05-4.24 2.29-4.97z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M990.49 533.75l-2-4-3.38-1.89-2.82-.16h-2.4l-2 .55-1.62 6.59s-5.85-4.56 2-11.22c4.88-4.15 11.78-1.46 15.36 3.75"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" transform="rotate(180 984.66 514.955)" d="M981.04 537.42h7.24v11.41h-7.24z"
                            />
                            <path className="cls-38" d="M988.28 543.41a5.32 5.32 0 0 1-4.36 3.45 2.63 2.63 0 0 1-2.65-1.23 1.76 1.76 0 0 1-.23-.84c0-1.2 3.37-2.85 3.37-2.85z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M983.39 545.16a7.71 7.71 0 0 0 7.71-7.71v-3.84a7.71 7.71 0 0 0-7.71-7.71 7.71 7.71 0 0 0-7.71 7.71v3.84a7.71 7.71 0 0 0 7.71 7.71z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M990.36 536.2s-11.86-3.52-12-9.27c0 0 8.26-3.52 12.24 1a5.66 5.66 0 0 1-.24 8.27z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M989 536.73a2.07 2.07 0 1 0 2.07-2.07 2.07 2.07 0 0 0-2.07 2.07z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M987.57 478.36l1.59 3.65.45-3.49-2.04-.16z"
                            />
                            <circle className="cls-38" cx="981.94" cy="479.28" r="0.34" />
                            <circle className="cls-38" cx="978.3" cy="479.28" r="0.34" />
                            <path className="cls-35" d="M990.43 524.08s3.42 2.68 4.11 5.21c0 0 .73-5.21-4.11-5.21z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M980.86 539.87h-1a.81.81 0 0 1-.64-.31.78.78 0 0 1-.16-.69l.51-2.2a.25.25 0 1 1 .48.12l-.5 2.19a.33.33 0 0 0 .06.27.3.3 0 0 0 .25.12h1a.25.25 0 0 1 0 .5z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M991.68 482.01h.09v1.31h-.09z" />
                            <circle className="cls-38" cx="991.73" cy="483.52" r="0.61" />
                            <circle className="cls-40" cx="991.73" cy="483.52" r="0.44" />
                            <path className="cls-38" d="M981.28 542.63a2.56 2.56 0 0 0 2.22-1.63.24.24 0 0 0-.13-.31.25.25 0 0 0-.31.13 2.07 2.07 0 0 1-1.78 1.32.23.23 0 0 0-.24.23.24.24 0 0 0 .24.26z"
                            transform="translate(0 -56.34)" />
                        </g>
                        <g className={"addictive " + (currentWord === 0 ? 'active' : '')}>
                            <g className={"floating-icon-0 " + (currentWord === 0 ? 'active-0' : '')}>
                                <g className="i" transform="matrix(1, 0, 0, 1, 444, 426)">
                                    <path className="h" d="M936,435.567v37.809a3.55,3.55,0,0,0,3.531,3.567h11.442a3.516,3.516,0,0,1,2.5,1.044l5.457,5.513a3.507,3.507,0,0,0,4.995,0l5.457-5.513a3.517,3.517,0,0,1,2.5-1.044h11.442a3.55,3.55,0,0,0,3.531-3.567V435.567A3.55,3.55,0,0,0,983.319,432H939.531A3.549,3.549,0,0,0,936,435.567Z" transform="translate(-918 -422)" />
                                </g>
                                <g transform="translate(470.095 441.076)">
                                    <path className="b" d="M812.957,552.237a6.614,6.614,0,0,0-8-1.53,3.621,3.621,0,0,1-3.311,0,6.615,6.615,0,0,0-8,1.53,6.762,6.762,0,0,0,.461,9.189l6.593,6.593a3.674,3.674,0,0,0,5.195,0l6.594-6.593A6.763,6.763,0,0,0,812.957,552.237Z" transform="translate(-786.698 -540.599)" />
                                </g>
                            </g>
                            <path className="cls-153" d="M967.17 538.22l8-34.26 5.17.65-8.72 34.55-4.45-.94z"
                            />
                            <path className="cls-153" d="M969.06 594.21a2.28 2.28 0 0 1-1.19.94 1.56 1.56 0 0 1-.67.15 1.93 1.93 0 0 1-1.2-.69 1.2 1.2 0 0 0-.61.77 3.88 3.88 0 0 1-.36 1 .75.75 0 0 1-.87.34.7.7 0 0 1-.37-.67 2.19 2.19 0 0 1 .23-.78l.43-1a3.47 3.47 0 0 1 .72-1.18 3.15 3.15 0 0 1 1.89-.67c1.04-.13 2.76.39 2 1.79z"
                                transform="translate(0 -56.34)" />
                            <path stroke="#333745" strokeWidth="0.5" strokeMiterlimit="10" fill="none"
                                d="M964.16 544.46v-5.1l6.82 1.41v3.69" />
                            <path fill="#f67280" d="M955.73 544.46h22.29v30.92h-22.29z" />
                            <path d="M966.24 593.69a.9.9 0 0 0-.46.12.94.94 0 0 0-.26.44c-.29.81-.55 1.63-.77 2.46a2.51 2.51 0 0 0-.12 1 1.82 1.82 0 0 0 1.24 1.28 12.65 12.65 0 0 0 1.83.38 4.87 4.87 0 0 0 2 .22 2.32 2.32 0 0 0 1.57-1.74 6.89 6.89 0 0 0 .06-2.44.65.65 0 0 0-.11-.34c-.12-.15-.36-.14-.55-.19-.59-.16-1-.71-1.61-.9a8.06 8.06 0 0 0-2.82-.29z"
                                transform="translate(0 -56.34)" fill="#feddca" />
                            <path fill="#d86878" d="M955.73 544.46h1.68v30.92h-1.68z" />
                            <path fill="#c15f72" d="M955.73 575.38l1.68-1.91v1.91h-1.68z" />
                            <path className="cls-159" d="M983.51 617.08l6.18 11.5 23.31 30.33 5.18-1.44-10.21-18.25s-4.17-12.51-11.93-15.1l-.77-12.07z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M975.4 601.66L965.74 625l-6.39 35 3.91 1.95s13.55-24.78 9.38-31.83l12.41-16.56z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-160" d="M975 580.17s-5.09 15.72-5.42 20.63-3.41 14.7-3.41 14.7 18.1 15 37.09-.16c0 0-9.22-20.79-11.39-34.41zM945.4 659.88a1.87 1.87 0 0 0-.08 2c.71.89 2.37 2.43 7.65 2.52s4.71 2.81 8.31 3 3.42-1.69 3.42-1.69z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-161" d="M945.4 659.88s22.4 3.88 18.94 6.42c-3.06 2.25-6.19-2.21-11.47-2.62-5.68-.43-8.02-1.78-7.47-3.8z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M958.79 658.38a7.92 7.92 0 0 1-2.25.52l-5.39.71a9.55 9.55 0 0 1-2.92.08 5.22 5.22 0 0 0-1.3-.18 1 1 0 0 0-1 .75 1.26 1.26 0 0 0 .57 1.07 8 8 0 0 0 4.32 1.48 29.34 29.34 0 0 1 4.6.55 32.45 32.45 0 0 1 5.28 2.47 2.91 2.91 0 0 0 2.47.3 2.29 2.29 0 0 0 1.06-2 24.15 24.15 0 0 0-.28-2.4 6.49 6.49 0 0 1 .47-3.08l-2.4-.67a3.52 3.52 0 0 1-1.72-1 3.43 3.43 0 0 1-1.51 1.4z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-162" d="M948.23 659.69s3.72.23 3.76 3.92h.4s1.01-3.94-4.16-3.92z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-160" d="M1004.93 670.34s.36 1.35 1.49 1.4 3.39-.2 6.91-4.13 5.21-1.73 7.71-4.32 1-3.69 1-3.69z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-161" d="M1004.93 670.34s17.6-14.38 17.26-10.11c-.31 3.79-5.73 3.24-9.5 7-4.05 3.97-6.59 4.86-7.76 3.11z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M1012.56 659.25a7.84 7.84 0 0 1-1.08 2l-3 4.53a9.43 9.43 0 0 1-1.85 2.26 5.15 5.15 0 0 0-1 .87 1 1 0 0 0-.06 1.22 1.25 1.25 0 0 0 1.18.26 8 8 0 0 0 4-2.29 28 28 0 0 1 3.43-3.11 31.83 31.83 0 0 1 5.32-2.38c.78-.35 1.63-.84 1.84-1.67a2.27 2.27 0 0 0-.85-2.14 21.3 21.3 0 0 0-2-1.36 6.4 6.4 0 0 1-2-2.37l-2.08 1.37a3.61 3.61 0 0 1-1.88.65 3.49 3.49 0 0 1 .03 2.16z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-162" d="M1006.64 668.08s2.61-2.66 5.42-.28l.29-.28s-2.35-3.35-5.71.56z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-163" d="M985.39 564.07l-.22-11c-.12-3.07-1.5-4.48-3.87-4.71-1.94-.23-3.71 1-4.7 3.87l-3.53 9.27z"
                                transform="translate(0 -56.34)" />
                            <path d="M985.83 548.35l1.95.25c2.58.34 5.17.44 6.63 2.6 2 2.89 1.68 7.74 1.14 11.12l-3.66 18.61-16.89-.76 1.75-13.3a5 5 0 0 1-3-5.71A34.66 34.66 0 0 1 978 550.4a6.09 6.09 0 0 1 7.82-2z"
                                transform="translate(0 -56.34)" fill="#0fe0c7" />
                            <path className="cls-159" d="M988.28 548.83s-3 6.82-7.81 5.25c-2.88-.94.57-5.25.57-5.25z"
                                transform="translate(0 -56.34)" />
                            <path d="M1002.26 571.91s4.79 14.58-10.52 15.3-11.16-14.46-11.16-14.46z"
                                transform="translate(0 -56.34)" fill="#1e2d51" />
                            <path className="cls-161" d="M1002.26 571.91l-21.68.84s.55 10.56 11.92 10.59 9.76-11.43 9.76-11.43z"
                                transform="translate(0 -56.34)" />
                            <circle cx="994.34" cy="526.9" r="1.36" fill="#ffc235" />
                            <path className="cls-161" d="M1002.26 571.91s-3.69-21.38-8-21.73-13.73 22.57-13.73 22.57h1.31s8.88-20.91 12.25-20.94 6.78 20.2 6.78 20.2z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M994.48 561.71L985.6 578l-.14.25a3.19 3.19 0 0 1-2.1 1.59l-20.13 3.93-1.26-3 19.5-7.74-2.24 1.84L987 558z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-163" d="M993.48 565.84l2.6-9.88a7.15 7.15 0 0 0 .22-2.83 4 4 0 0 0-3.39-3.54c-2-.49-3.1 1.19-4.5 4l-4.47 9z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M961.09 578a.72.72 0 0 0-.23-.2.73.73 0 0 0-.33 0 21 21 0 0 0-3 .39 1.94 1.94 0 0 0 2.08 1.33 6.18 6.18 0 0 0 1.19 1.88 1 1 0 0 0 .32.24.73.73 0 0 0 .33 0c.84-.07 1.78-.19 1.25-1.18a14.85 14.85 0 0 0-1.61-2.46z"
                                transform="translate(0 -56.34)" />
                            <path d="M960.06 582.2l-3.29-10.05a.67.67 0 0 0-.54-.46l-5.2-.79a.68.68 0 0 0-.74.92l4.47 11.51a.68.68 0 0 0 .75.43l4-.67a.68.68 0 0 0 .55-.89z"
                                transform="translate(0 -56.34)" fill="#000102" />
                            <path className="cls-159" d="M961 580.29a3.42 3.42 0 0 0-1.18.18l-4.45 1.25c-.18 0-.4.13-.44.32a.55.55 0 0 0 0 .28l.56 1.58a3 3 0 0 0 .29.66 2.77 2.77 0 0 0 2.15 1 11.29 11.29 0 0 0 5.33-.79 1 1 0 0 0 .39-.24.89.89 0 0 0 .15-.68 4.88 4.88 0 0 0-1.29-2.39c-.35-.55-.7-1.1-1.51-1.17z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-161" d="M992.47 522.13a5.67 5.67 0 0 1 6.31 2.63 7.58 7.58 0 0 1 .08 7.08 19 19 0 0 0-1.3 2.64 2.69 2.69 0 0 0 .5 2.75 1.93 1.93 0 0 0 3-.74 2.36 2.36 0 0 1 .68 3 3.49 3.49 0 0 1-2.81 1.69 6.7 6.7 0 0 1-3.3-.74 7.74 7.74 0 0 1-3.77-3.34 9.67 9.67 0 0 1-.74-2.36 43.59 43.59 0 0 1-.94-7.64c-.08-2.03-.05-4.24 2.29-4.97z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-161" d="M990.49 533.75l-2-4-3.38-1.89-2.82-.16h-2.4l-2 .55-1.62 6.59s-5.85-4.56 2-11.22c4.88-4.15 11.78-1.46 15.36 3.75"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" transform="rotate(180 984.66 514.955)" d="M981.04 537.42h7.24v11.41h-7.24z"
                            />
                            <path className="cls-153" d="M988.28 543.41a5.32 5.32 0 0 1-4.36 3.45 2.63 2.63 0 0 1-2.65-1.23 1.76 1.76 0 0 1-.23-.84c0-1.2 3.37-2.85 3.37-2.85z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M983.39 545.16a7.71 7.71 0 0 0 7.71-7.71v-3.84a7.71 7.71 0 0 0-7.71-7.71 7.71 7.71 0 0 0-7.71 7.71v3.84a7.71 7.71 0 0 0 7.71 7.71z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-161" d="M990.36 536.2s-11.86-3.52-12-9.27c0 0 8.26-3.52 12.24 1a5.66 5.66 0 0 1-.24 8.27z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M989 536.73a2.07 2.07 0 1 0 2.07-2.07 2.07 2.07 0 0 0-2.07 2.07z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-161" d="M987.57 478.36l1.59 3.65.45-3.49-2.04-.16z"
                            />
                            <circle className="cls-161" cx="981.94" cy="479.28" r="0.34" />
                            <circle className="cls-161" cx="978.3" cy="479.28" r="0.34" />
                            <path className="cls-168" d="M990.43 524.08s3.42 2.68 4.11 5.21c0 0 .73-5.21-4.11-5.21z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-153" d="M980.86 539.87h-1a.81.81 0 0 1-.64-.31.78.78 0 0 1-.16-.69l.51-2.2a.25.25 0 1 1 .48.12l-.5 2.19a.33.33 0 0 0 .06.27.3.3 0 0 0 .25.12h1a.25.25 0 0 1 0 .5z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-169" d="M991.68 482.01h.09v1.31h-.09z" />
                            <circle className="cls-169" cx="991.73" cy="483.52" r="0.61" />
                            <circle className="cls-168" cx="991.73" cy="483.52" r="0.44" />
                            <path className="cls-170" d="M981.28 542.63a2.56 2.56 0 0 0 2.22-1.63.24.24 0 0 0-.13-.31.25.25 0 0 0-.31.13 2.07 2.07 0 0 1-1.78 1.32.23.23 0 0 0-.24.23.24.24 0 0 0 .24.26z"
                                transform="translate(0 -56.34)" />
                        </g>

                        {/* Profitable Charachter */}
                        <g className={"profitable-bw  " + (currentWord === 1 ? 'active' : '')}>
                            <path className="cls-25" d="M796.91 533.32l8.81-26.79-1.35-.45-8.56 26.03h-27.34v1.42h28.34l.03.01v-.01h.07v-.21z"
                            />
                            <path fill="url(#linear-gradient-94)" d="M778.89 532.11h16.92l8.56-26.03-29.35-23.27-6.55 49.3h10.42z"
                            />
                            
                            <path d="M747.2 612.54a19.54 19.54 0 0 1-19.2-15.69l-4.87-24.25a1.43 1.43 0 0 0-1.69-1.12 1.43 1.43 0 0 0-1.12 1.68l5 24.64a21.92 21.92 0 0 0 21.5 17.6H772a1.43 1.43 0 0 0 1.43-1.43 1.43 1.43 0 0 0-1.43-1.43z"
                            transform="translate(0 -56.34)" fill="#aab3c1" />
                            <path className="cls-40" d="M758.49 564.45a8.35 8.35 0 0 0 2.29-.27 2.8 2.8 0 0 0 1.76-1.4c.41-.87.23-2 1-2.66a2.31 2.31 0 0 1 .84-.39c.89-.28 1.8-.51 2.72-.71a1.84 1.84 0 0 1 1.39.08c.4.26.45 1 0 1.14a1.79 1.79 0 0 1 2.16.38 4.65 4.65 0 0 1 1 2.09c.21.74.74 1.57.42 2.26a2.28 2.28 0 0 1-1.15 1c-3.52 1.7-7.63 1.63-11.39 2.61-.33-1.1-.69-3.08-1.04-4.13z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-20" d="M763.19 568.13l-11.42 3.23L746 573l-3.11.88a8.86 8.86 0 0 1-1.23.23 6.88 6.88 0 0 1-4-.9c.2-.22.39-.45.59-.7.62-.85 1.21-1.72 1.79-2.59l2.66-3.92.65-.1 7.28-1 10.78-1.55z"
                            transform="translate(0 -56.34)" />
                            <path d="M750.63 564.85l1.14 6.51L746 573l-3.11.88a8.86 8.86 0 0 1-1.23.23 6.88 6.88 0 0 1-4-.9c.2-.22.39-.45.59-.7.62-.85 1.21-1.72 1.79-2.59l2.66-3.92.65-.1z"
                            transform="translate(0 -56.34)" style={{ mixBlendMode: 'multiply' }} fill="#eff5ff"
                            />
                            <path className="cls-33" d="M771.41 499l.35 3.91.36 4 .35 3.91-6.17 1.08-.84-3.18-.16-.61-.15-.57-.72-2.7-.16-.61-.15-.56-.85-3.24 8.14-1.43z"
                            />
                            <path className="cls-32" d="M771.76 502.91l.36 4-6.82 1.2-1.03-3.88 7.49-1.32z"
                            />
                            <path className="cls-25" d="M768.06 561.9a2.68 2.68 0 0 1-2.18 3.12 3.13 3.13 0 0 1-.42 0l-.16-.61-.15-.57-.72-2.7-.16-.61-.15-.57a2.8 2.8 0 0 1 .83-.28 2.68 2.68 0 0 1 3.11 2.22z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-31" d="M766.93 562.1a1.53 1.53 0 0 1-1.25 1.78 1.19 1.19 0 0 1-.53 0l-.72-2.7a1.49 1.49 0 0 1 .72-.33 1.54 1.54 0 0 1 1.78 1.25z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M770.9 497.59l-7.55 1.33-.73 1.63 9.52-1.67-1.24-1.29z"
                            />
                            <path className="cls-25" d="M763.68 499.25l.02-1.31 6.6-.51.11.64-6.73 1.18z"
                            />
                            <path className="cls-40" d="M763.46 559.55a4.77 4.77 0 0 1 1.41-.65c.49-.17.84-.79 1.35-.74.34 0 .36.62.26.94a1.17 1.17 0 0 1-.28.38 4.12 4.12 0 0 1-1.24.82.22.22 0 0 0-.13.1.25.25 0 0 0 0 .12 6.93 6.93 0 0 1 0 1.64 2.08 2.08 0 0 1-.25.9.86.86 0 0 1-.79.43.84.84 0 0 1-.58-.41 1.83 1.83 0 0 1-.24-.69c-.18-.95-.37-2.15.49-2.84zM771.25 559.86a1.15 1.15 0 0 0-.32.14.75.75 0 0 0-.2.3 3.45 3.45 0 0 0-.05 1.63l.39 3.12a1.1 1.1 0 0 0 .2.6 1.06 1.06 0 0 0 1 .2.7.7 0 0 0 .37-.14.75.75 0 0 0 .16-.63 47.6 47.6 0 0 0-.46-4.92c-.11-.75-.53-.45-1.09-.3z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-1" d="M778.72 573.48l-.11 4.44 4.02.56.88-4.53-4.79-.47z"
                            />
                            <path className="cls-38" d="M778.81 633.6l3.74 1.09s4.21 4.19 9.53 5.29a.82.82 0 0 1 .67.77.82.82 0 0 1-.76.88c-2 .13-5.78 1.13-9.23-.79a4.46 4.46 0 0 0-2.36-.57l-3.29-1.27a1 1 0 0 1-.53-1.47z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M774.72 575.17l-1.11 4.3 3.79 1.45 1.88-4.22-4.56-1.53z"
                            />
                            <path className="cls-40" d="M746.18 555.78l-11.42-5.6a.44.44 0 0 1-.3-.56l6.39-20.46 3.43 2.78 1 12.13v.59l.32 4 .07.85z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M745.69 549.55c-5.42-2.35-2.46-7.92-2.46-7.92l2.07 3 .32 4z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M756 535.33a10.14 10.14 0 0 1-12.69 6.67 10 10 0 0 1-2.66-1.29l-.22-.14a10.14 10.14 0 1 1 15.93-9.63 9.9 9.9 0 0 1-.36 4.39z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M745.42 547.06a4.8 4.8 0 0 1-3.16-6l2.89-9.27 10.9 3.41-2.36 7.55a6.6 6.6 0 0 1-8.27 4.31z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M755.05 537.4l1.14 3.78a.8.8 0 0 1-1.06.91l-2.6-.31z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M749.81 529.24a8 8 0 0 1-3.85 7.57l-5.31 3.89-.22-.14a10.14 10.14 0 1 1 15.93-9.63 20.94 20.94 0 0 1-6.55-1.69z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M738.46 536.11l-1.21 4.68s4.64 2.68 6.08-1.91l-3.14-.38zM739.87 524.5c.08 0-.5-3.9 4.58-4.1 4.13-.16 9.57 3.79 11.42 7.52 1.52 3.07-11.26-2.31-11.26-2.31z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M739.87 524.5a4.5 4.5 0 0 0-4.55 3.91c-.76 3.92-.32 8.84 1.93 12.38l5.08-14.27z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M745.94 537.55a2.14 2.14 0 1 1-1.4-2.68 2.14 2.14 0 0 1 1.4 2.68z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M754.84 526.28s2.86 3.84 5.61 2.36c0 0-1.59 8.48-12.47 1.56zM787 599.2a8.06 8.06 0 0 0-4.86-1.89l-32-1.29-3.14 1.84c.17.09.35.15.52.25l.89.5a8.73 8.73 0 0 1 2.81 2.44c4.12-.41 8.3-1.24 11.17-1.11 6.3.29 8.81 5.87 7.83 10.66l8.9-1.15-.85 20.84 5.5 1.32 5.89-24.3a8.12 8.12 0 0 0-2.66-8.11z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-35" d="M746.18 494.56l-.11 3.54-2.44-1.27 2.55-2.27z"
                            />
                            <path className="cls-20" d="M750.28 592.49a4.84 4.84 0 0 1-3.9 4.65c-4.28.83-6.14 5.65-11.94 3.69-2.14-.72-4.83.44-6.86-5.66l-1.72-13.47a55.34 55.34 0 0 1 .62-18.38 33.63 33.63 0 0 1 2.32-7.42c2.12-4.47 4.61-7.3 7.42-7.3h.5c6.91 0 9.15 5.6 9.15 12.51z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M745.84 552.7h-1.93a.29.29 0 0 0-.28.42l2.09 3.84s1.54-2.07.44-4a.4.4 0 0 0-.32-.26z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M745.37 497.92l.98 33.44 3.93 4.96.7-5.32-4.87-29.9-.74-3.18"
                            />
                            <path className="cls-30" d="M728 596.85s2.63 14.32 17.55 15.86c12.61 1.31 29.67-1.21 29.67-1.21l-1.5 21.77 5.28 2 9-23.27a8.1 8.1 0 0 0-1.58-8.38 8.12 8.12 0 0 0-4.58-2.51l-31.69-5z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M750.29 594.14c-.09 1.26-.14 2-.14 2L728 597s-.18-.64-.46-1.8z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M751.29 544.91a2.58 2.58 0 0 1-2.23-1.61.24.24 0 0 1 .13-.31.25.25 0 0 1 .31.13 2.08 2.08 0 0 0 1.79 1.32.23.23 0 0 1 .23.23.23.23 0 0 1-.23.24z"
                            transform="translate(0 -56.34)" />
                            <circle className="cls-25" cx="753.58" cy="479.77" r="0.49" />
                            <path className="cls-30" d="M773.25 635.81l4.15 1.45s4.49 4.91 10.43 6.46a.93.93 0 0 1 .71.9.92.92 0 0 1-.91.93c-2.22 0-6.6.89-10.38-1.45a5 5 0 0 0-2.63-.77l-3.62-1.59a1.14 1.14 0 0 1-.5-1.66z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M750.35 596.29h-1.62l-.16-2.16 1.7-.12a.26.26 0 0 1 .27.23.26.26 0 0 1-.23.27l-1.21.08.09 1.2h1.16a.25.25 0 0 1 0 .5z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M750.29 595.28H750a.13.13 0 0 1-.13-.13.12.12 0 0 1 .13-.15h.31a.12.12 0 0 1 .13.12.13.13 0 0 1-.15.16z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-30" d="M729.5 540.88l-.45-2.11.88-.04.45 2.15h-.88zM740.72 538.23l-1.06.05.53 2.23h.84l-.31-2.28z"
                            />
                            <path className="cls-40" d="M771.6 574.72a10.12 10.12 0 0 1 2.44-1.51 6.14 6.14 0 0 1 2.53-.17 29.49 29.49 0 0 1 6 1.35c.57.18 1.24.51 1.25 1.1a1.13 1.13 0 0 1-.28.71 4.44 4.44 0 0 1-2.19 1.51 10.91 10.91 0 0 1-2.66.46.83.83 0 0 0-.47.13 1.33 1.33 0 0 0-.29.41 1.53 1.53 0 0 1-1.14.62 6.72 6.72 0 0 1-1.34-.06 17.27 17.27 0 0 0-5.77.86s-1.6-4-1.33-4.37.86-.12 1.23-.15a4.69 4.69 0 0 0 2.02-.89z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-20" d="M769.54 575.17l-19 1.32-9.19-17.78a5.44 5.44 0 0 0-7.25-2.36 5.43 5.43 0 0 0-2.25 7.59l9.75 16.67a7.09 7.09 0 0 0 7.77 3.95l21.57-4.2z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-35" d="M734.14 556.35a5.55 5.55 0 0 0-2.26 2.54 5.34 5.34 0 0 0-.32 3.29 5.07 5.07 0 0 0 .62 1.52l.92 1.5 1.83 3c2.41 4 4.77 8.09 7 12.2a6.76 6.76 0 0 0 3 3.26 7.18 7.18 0 0 0 4.45.86 7 7 0 0 1-4.67-.42 7.41 7.41 0 0 1-3.45-3.37c-2.48-4-4.86-8-7.19-12.11l-1.74-3.07-.84-1.55a6 6 0 0 1-.6-1.77 5.5 5.5 0 0 1 3.25-5.88zM734.72 551.85l-.83-3.6 9.26 2.35.27 3.66-1.66.32a8 8 0 0 1-7-2.73z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-20" d="M732.29 550.54l3.21-5.6 10.68 6-1.55 3.69-1.89-.29a28.71 28.71 0 0 1-10.45-3.76z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M769.46 559.06l5.74 28.55h-1.72l-8.09-28.55h4.07z"
                            />
                            <path className="cls-30" d="M799.45 584.41h51.74a2.16 2.16 0 0 1 2.16 2.16v.35h-56.06v-.35a2.16 2.16 0 0 1 2.16-2.16z"
                            />
                            <path className="cls-33" d="M725.93 567.33h35.66a1.86 1.86 0 0 1 1.86 1.86v21.74a3.05 3.05 0 0 1-3.05 3.07h-33.28a3.05 3.05 0 0 1-3.05-3.05V569.2a1.86 1.86 0 0 1 1.86-1.87z"
                            />
                            <path className="cls-25" d="M727.87 567.33h31.78v11.55a1.78 1.78 0 0 1-1.78 1.78h-28.22a1.78 1.78 0 0 1-1.78-1.78v-11.55z"
                            />
                            <path strokeWidth="1.16" strokeLinejoin="round" strokeLinecap="round"
                            stroke="#a2b5d2" fill="none" d="M738.54 568.96v-5.68h10.44v5.68" />
                            <path className="cls-40" d="M752.89 578.82h1.83v3.69h-1.83zM732.8 578.82h1.83v3.69h-1.83z"
                            />
                        </g>
                        <g className={"profitable " + (currentWord === 1 ? 'active' : '')}>
                            <g className={"floating-icon-1 " + (currentWord === 1 ? 'active-1' : '')}>
                                <g className="g" transform="matrix(1, 0, 0, 1, 444, 426)">
                                    <path className="f" d="M936,435.567v37.809a3.55,3.55,0,0,0,3.531,3.567h11.442a3.516,3.516,0,0,1,2.5,1.044l5.457,5.513a3.507,3.507,0,0,0,4.995,0l5.457-5.513a3.517,3.517,0,0,1,2.5-1.044h11.442a3.55,3.55,0,0,0,3.531-3.567V435.567A3.55,3.55,0,0,0,983.319,432H939.531A3.549,3.549,0,0,0,936,435.567Z" transform="translate(-918 -422)" />
                                </g>
                                <g transform="translate(470.095 441.076)">
                                    <rect className="b" width="3.83" height="30.248" rx="1.915" transform="translate(15.213 3.83)" />
                                    <g transform="translate(7.625 7.266)">
                                        <path className="b" d="M740.85,456.381a.855.855,0,0,1,.838.714,4.579,4.579,0,0,0,.832,2.068q1.4,1.754,4.856,1.754a7.275,7.275,0,0,0,3.62-.877,2.9,2.9,0,0,0,1.564-2.711,2.312,2.312,0,0,0-1.25-2.116,15,15,0,0,0-3.155-1.028l-2.929-.726a14.416,14.416,0,0,1-4.137-1.532,4.566,4.566,0,0,1-2.377-4.072,6.186,6.186,0,0,1,2.237-4.959,9,9,0,0,1,6.015-1.9q4.943,0,7.129,2.862a6.342,6.342,0,0,1,1.268,2.93.856.856,0,0,1-.844.981h-1.8a.868.868,0,0,1-.832-.675,4.179,4.179,0,0,0-.774-1.551q-1.28-1.422-4.436-1.423a5.408,5.408,0,0,0-3.188.783,2.436,2.436,0,0,0-1.084,2.07,2.537,2.537,0,0,0,1.425,2.249,8.627,8.627,0,0,0,2.422.886l2.444.584a19.126,19.126,0,0,1,5.34,1.835,4.857,4.857,0,0,1,2.117,4.375,6.635,6.635,0,0,1-2.214,4.979q-2.215,2.1-6.746,2.1-4.875,0-6.907-2.187a8.021,8.021,0,0,1-2.086-4.457.849.849,0,0,1,.846-.956Z" transform="translate(-738.186 -441)" />
                                    </g>
                                </g>
                            </g>
                            <path className="cls-47" d="M796.91 533.32l8.81-26.79-1.35-.45-8.56 26.03h-27.34v1.42h28.34l.03.01v-.01h.07v-.21z"
                            />
                            <path className="cls-150" d="M758.49 564.45a8.35 8.35 0 0 0 2.29-.27 2.8 2.8 0 0 0 1.76-1.4c.41-.87.23-2 1-2.66a2.31 2.31 0 0 1 .84-.39c.89-.28 1.8-.51 2.72-.71a1.84 1.84 0 0 1 1.39.08c.4.26.45 1 0 1.14a1.79 1.79 0 0 1 2.16.38 4.65 4.65 0 0 1 1 2.09c.21.74.74 1.57.42 2.26a2.28 2.28 0 0 1-1.15 1c-3.52 1.7-7.63 1.63-11.39 2.61-.33-1.1-.69-3.08-1.04-4.13z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-20" d="M763.19 568.13l-11.42 3.23L746 573l-3.11.88a8.86 8.86 0 0 1-1.23.23 6.88 6.88 0 0 1-4-.9c.2-.22.39-.45.59-.7.62-.85 1.21-1.72 1.79-2.59l2.66-3.92.65-.1 7.28-1 10.78-1.55z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-53" d="M750.63 564.85l1.14 6.51L746 573l-3.11.88a8.86 8.86 0 0 1-1.23.23 6.88 6.88 0 0 1-4-.9c.2-.22.39-.45.59-.7.62-.85 1.21-1.72 1.79-2.59l2.66-3.92.65-.1z"
                                transform="translate(0 -56.34)" />
                            <path fill="#f5e9be" d="M771.41 499l.35 3.91.36 4 .35 3.91-6.17 1.08-.84-3.18-.16-.61-.15-.57-.72-2.7-.16-.61-.15-.56-.85-3.24 8.14-1.43z"
                            />
                            <path fill="#c69c6d" d="M771.76 502.91l.36 4-6.82 1.2-1.03-3.88 7.49-1.32z"
                            />
                            <path d="M768.06 561.9a2.68 2.68 0 0 1-2.18 3.12 3.13 3.13 0 0 1-.42 0l-.16-.61-.15-.57-.72-2.7-.16-.61-.15-.57a2.8 2.8 0 0 1 .83-.28 2.68 2.68 0 0 1 3.11 2.22z"
                                transform="translate(0 -56.34)" fill="#534741" />
                            <path d="M766.93 562.1a1.53 1.53 0 0 1-1.25 1.78 1.19 1.19 0 0 1-.53 0l-.72-2.7a1.49 1.49 0 0 1 .72-.33 1.54 1.54 0 0 1 1.78 1.25z"
                                transform="translate(0 -56.34)" fill="#c7b299" />
                            <path className="cls-169" d="M770.9 497.59l-7.55 1.33-.73 1.63 9.52-1.67-1.24-1.29z"
                            />
                            <path className="cls-169" d="M763.68 499.25l.02-1.31 6.6-.51.11.64-6.73 1.18z"
                            />
                            <path className="cls-150" d="M763.46 559.55a4.77 4.77 0 0 1 1.41-.65c.49-.17.84-.79 1.35-.74.34 0 .36.62.26.94a1.17 1.17 0 0 1-.28.38 4.12 4.12 0 0 1-1.24.82.22.22 0 0 0-.13.1.25.25 0 0 0 0 .12 6.93 6.93 0 0 1 0 1.64 2.08 2.08 0 0 1-.25.9.86.86 0 0 1-.79.43.84.84 0 0 1-.58-.41 1.83 1.83 0 0 1-.24-.69c-.18-.95-.37-2.15.49-2.84zM771.25 559.86a1.15 1.15 0 0 0-.32.14.75.75 0 0 0-.2.3 3.45 3.45 0 0 0-.05 1.63l.39 3.12a1.1 1.1 0 0 0 .2.6 1.06 1.06 0 0 0 1 .2.7.7 0 0 0 .37-.14.75.75 0 0 0 .16-.63 47.6 47.6 0 0 0-.46-4.92c-.11-.75-.53-.45-1.09-.3z"
                                transform="translate(0 -56.34)" />
                            <path fill="#efd0bf" d="M778.72 573.48l-.11 4.44 4.02.56.88-4.53-4.79-.47z"
                            />
                            <path className="cls-177" d="M778.81 633.6l3.74 1.09s4.21 4.19 9.53 5.29a.82.82 0 0 1 .67.77.82.82 0 0 1-.76.88c-2 .13-5.78 1.13-9.23-.79a4.46 4.46 0 0 0-2.36-.57l-3.29-1.27a1 1 0 0 1-.53-1.47z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M774.72 575.17l-1.11 4.3 3.79 1.45 1.88-4.22-4.56-1.53z"
                            />
                            <path className="cls-159" d="M746.18 555.78l-11.42-5.6a.44.44 0 0 1-.3-.56l6.39-20.46 3.43 2.78 1 12.13v.59l.32 4 .07.85z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-153" d="M745.69 549.55c-5.42-2.35-2.46-7.92-2.46-7.92l2.07 3 .32 4z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M756 535.33a10.14 10.14 0 0 1-12.69 6.67 10 10 0 0 1-2.66-1.29l-.22-.14a10.14 10.14 0 1 1 15.93-9.63 9.9 9.9 0 0 1-.36 4.39z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M745.42 547.06a4.8 4.8 0 0 1-3.16-6l2.89-9.27 10.9 3.41-2.36 7.55a6.6 6.6 0 0 1-8.27 4.31z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M755.05 537.4l1.14 3.78a.8.8 0 0 1-1.06.91l-2.6-.31z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-178" d="M749.81 529.24a8 8 0 0 1-3.85 7.57l-5.31 3.89-.22-.14a10.14 10.14 0 1 1 15.93-9.63 20.94 20.94 0 0 1-6.55-1.69z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-178" d="M738.46 536.11l-1.21 4.68s4.64 2.68 6.08-1.91l-3.14-.38zM739.87 524.5c.08 0-.5-3.9 4.58-4.1 4.13-.16 9.57 3.79 11.42 7.52 1.52 3.07-11.26-2.31-11.26-2.31z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-178" d="M739.87 524.5a4.5 4.5 0 0 0-4.55 3.91c-.76 3.92-.32 8.84 1.93 12.38l5.08-14.27z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M745.94 537.55a2.14 2.14 0 1 1-1.4-2.68 2.14 2.14 0 0 1 1.4 2.68z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-178" d="M754.84 526.28s2.86 3.84 5.61 2.36c0 0-1.59 8.48-12.47 1.56z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-177" d="M787 599.2a8.06 8.06 0 0 0-4.86-1.89l-32-1.29-3.14 1.84c.17.09.35.15.52.25l.89.5a8.73 8.73 0 0 1 2.81 2.44c4.12-.41 8.3-1.24 11.17-1.11 6.3.29 8.81 5.87 7.83 10.66l8.9-1.15-.85 20.84 5.5 1.32 5.89-24.3a8.12 8.12 0 0 0-2.66-8.11z"
                                transform="translate(0 -56.34)" />
                            <path fill="#ccc" d="M746.18 494.56l-.11 3.54-2.44-1.27 2.55-2.27z" />
                            <path className="cls-20" d="M750.28 592.49a4.84 4.84 0 0 1-3.9 4.65c-4.28.83-6.14 5.65-11.94 3.69-2.14-.72-4.83.44-6.86-5.66l-1.72-13.47a55.34 55.34 0 0 1 .62-18.38 33.63 33.63 0 0 1 2.32-7.42c2.12-4.47 4.61-7.3 7.42-7.3h.5c6.91 0 9.15 5.6 9.15 12.51z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-180" d="M745.84 552.7h-1.93a.29.29 0 0 0-.28.42l2.09 3.84s1.54-2.07.44-4a.4.4 0 0 0-.32-.26z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-180" d="M745.37 497.92l.98 33.44 3.93 4.96.7-5.32-4.87-29.9-.74-3.18"
                            />
                            <path className="cls-181" d="M728 596.85s2.63 14.32 17.55 15.86c12.61 1.31 29.67-1.21 29.67-1.21l-1.5 21.77 5.28 2 9-23.27a8.1 8.1 0 0 0-1.58-8.38 8.12 8.12 0 0 0-4.58-2.51l-31.69-5z"
                                transform="translate(0 -56.34)" />
                            <path d="M750.29 594.14c-.09 1.26-.14 2-.14 2L728 597s-.18-.64-.46-1.8z"
                                transform="translate(0 -56.34)" fill="#754c24" />
                            <path className="cls-170" d="M751.29 544.91a2.58 2.58 0 0 1-2.23-1.61.24.24 0 0 1 .13-.31.25.25 0 0 1 .31.13 2.08 2.08 0 0 0 1.79 1.32.23.23 0 0 1 .23.23.23.23 0 0 1-.23.24z"
                                transform="translate(0 -56.34)" />
                            <circle className="cls-161" cx="753.58" cy="479.77" r="0.49" />
                            <path className="cls-181" d="M773.25 635.81l4.15 1.45s4.49 4.91 10.43 6.46a.93.93 0 0 1 .71.9.92.92 0 0 1-.91.93c-2.22 0-6.6.89-10.38-1.45a5 5 0 0 0-2.63-.77l-3.62-1.59a1.14 1.14 0 0 1-.5-1.66z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-183" d="M750.35 596.29h-1.62l-.16-2.16 1.7-.12a.26.26 0 0 1 .27.23.26.26 0 0 1-.23.27l-1.21.08.09 1.2h1.16a.25.25 0 0 1 0 .5z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-183" d="M750.29 595.28H750a.13.13 0 0 1-.13-.13.12.12 0 0 1 .13-.15h.31a.12.12 0 0 1 .13.12.13.13 0 0 1-.15.16z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-181" d="M729.5 540.88l-.45-2.11.88-.04.45 2.15h-.88zM740.72 538.23l-1.06.05.53 2.23h.84l-.31-2.28z"
                            />
                            <path className="cls-159" d="M771.6 574.72a10.12 10.12 0 0 1 2.44-1.51 6.14 6.14 0 0 1 2.53-.17 29.49 29.49 0 0 1 6 1.35c.57.18 1.24.51 1.25 1.1a1.13 1.13 0 0 1-.28.71 4.44 4.44 0 0 1-2.19 1.51 10.91 10.91 0 0 1-2.66.46.83.83 0 0 0-.47.13 1.33 1.33 0 0 0-.29.41 1.53 1.53 0 0 1-1.14.62 6.72 6.72 0 0 1-1.34-.06 17.27 17.27 0 0 0-5.77.86s-1.6-4-1.33-4.37.86-.12 1.23-.15a4.69 4.69 0 0 0 2.02-.89z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-20" d="M769.54 575.17l-19 1.32-9.19-17.78a5.44 5.44 0 0 0-7.25-2.36 5.43 5.43 0 0 0-2.25 7.59l9.75 16.67a7.09 7.09 0 0 0 7.77 3.95l21.57-4.2z"
                                transform="translate(0 -56.34)" />
                            <path d="M734.14 556.35a5.55 5.55 0 0 0-2.26 2.54 5.34 5.34 0 0 0-.32 3.29 5.07 5.07 0 0 0 .62 1.52l.92 1.5 1.83 3c2.41 4 4.77 8.09 7 12.2a6.76 6.76 0 0 0 3 3.26 7.18 7.18 0 0 0 4.45.86 7 7 0 0 1-4.67-.42 7.41 7.41 0 0 1-3.45-3.37c-2.48-4-4.86-8-7.19-12.11l-1.74-3.07-.84-1.55a6 6 0 0 1-.6-1.77 5.5 5.5 0 0 1 3.25-5.88z"
                                transform="translate(0 -56.34)" fill="#f2f2f2" />
                            <path d="M734.72 551.85l-.83-3.6 9.26 2.35.27 3.66-1.66.32a8 8 0 0 1-7-2.73z"
                                transform="translate(0 -56.34)" fill="#e6e6e6" />
                            <path className="cls-20" d="M732.29 550.54l3.21-5.6 10.68 6-1.55 3.69-1.89-.29a28.71 28.71 0 0 1-10.45-3.76z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-181" d="M725.93 567.33h35.66a1.86 1.86 0 0 1 1.86 1.86v21.74a3.05 3.05 0 0 1-3.05 3.07h-33.28a3.05 3.05 0 0 1-3.05-3.05V569.2a1.86 1.86 0 0 1 1.86-1.87z"
                            />
                            <path className="cls-177" d="M727.87 567.33h31.78v11.55a1.78 1.78 0 0 1-1.78 1.78h-28.22a1.78 1.78 0 0 1-1.78-1.78v-11.55z"
                            />
                            <path strokeLinejoin="round" stroke="#1e2128" strokeWidth="1.16" strokeLinecap="round"
                                fill="none" d="M738.54 568.96v-5.68h10.44v5.68" />
                            <path className="cls-183" d="M752.89 578.82h1.83v3.69h-1.83zM732.8 578.82h1.83v3.69h-1.83z"
                            />
                        </g>


                        {/* Professional Charachter */}
                        <g className={"profissional-bw  " + (currentWord === 2 ? 'active' : '')}>
                            <path className="cls-33" d="M459.15 590.33l.54 6.58h1.45l-1.99-6.58z"
                            />
                            <path className="cls-25" d="M459.37 646.43a.23.23 0 0 0-.22.24c0 1 .17 5.65 2.36 9a3 3 0 0 0 2.05 1.6 1.37 1.37 0 0 0 1.73-1.11 20.89 20.89 0 0 0-2.6-9.66.38.38 0 0 0-.36-.2z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-33" d="M443.27 649.24V654h-.89s.12-3.86.89-4.76z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M442.74 646.82a1.59 1.59 0 0 0-.6-.14 5.72 5.72 0 0 0-2.26.07c-.4.18-.44 1.2-.55 1.64a81.42 81.42 0 0 1-1.38 4.61c-.27.83-.56 1.67-.87 2.5a2.29 2.29 0 0 0-.19.77.75.75 0 0 0 .33.68 1 1 0 0 0 .45.1 7.91 7.91 0 0 0 2.87-.21 2.92 2.92 0 0 0 2-2 7.93 7.93 0 0 0 .07-1.38 3.28 3.28 0 0 1 .5-1.6l.24-.68a4.79 4.79 0 0 0-.4-4.08.78.78 0 0 0-.21-.28z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M439.09 639.38l.42 8a11.43 11.43 0 0 1 3.12.33c.38-1.75 1.33-6.28 1.69-7.83"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M439.55 647.09a28 28 0 0 1-.5 3.2 20.78 20.78 0 0 0-1 3.81c.08.35.65 1.55 2.43-.3 1.94-2 2.19-6.73 2.19-6.73a2.65 2.65 0 0 0-3.12.02z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M443.27 654a29 29 0 0 0 .34-4.88l-1 .75z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M457.55 638.76l1.73 7.84a11.65 11.65 0 0 1 3.13-.19c.09-1.78.29-6.4.38-8"
                            transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M436.33 611.73c.72 2.08 2.6 32 2.6 32h5.46s2.14-23.57 1.72-25.73c-.57-3-2.47-8.56-2.47-8.56.21-1.16.52-23.83.52-23.83l1.44-.12s4.53 24.88 5.87 27.77 6.53 29.36 6.53 29.36h5.35s-1-21.29-1.13-23c-.25-3.33-4.53-11.57-4.53-11.57s.2-22.1 0-25.45v-.36c0-.5-.09-1-.16-1.52v-.29c0-.1 0-.21-.05-.32s0-.27-.07-.4l-.06-.34c-.18-1-.41-2-.66-2.89-.07-.24-.13-.47-.2-.7s-.08-.29-.13-.43l-.09-.31c-.17-.53-.33-1-.51-1.55l-.09-.28-.11-.29v-.18c-.05-.13-.1-.26-.14-.39-.11-.3-.22-.58-.33-.86s-.21-.54-.32-.8c-.15-.37-.29-.72-.43-1l-.09-.2c-.14-.33-.27-.63-.4-.91l-.09-.2c-.27-.58-.5-1.06-.67-1.4a.93.93 0 0 0-.1-.2.39.39 0 0 0 0-.09l-.18-.35h-16.27s-.11.45-.27 1.21c0 .22-.1.47-.16.74s-.09.41-.13.63-.09.43-.14.67c-.26 1.21-.56 2.67-.86 4.22-.65 3.25-1.32 6.91-1.64 9.53-.72 5.83 2.27 26.31 2.99 28.39z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M461 651.66a6.84 6.84 0 0 0 1 1.43 1.94 1.94 0 0 0 1 .66.49.49 0 0 0 .39-.06c.66-.46.72-1.68.63-2.55a30.67 30.67 0 0 0-1.56-4.93c-.64-.08-2.84-.37-3.08.3s1.32 4.56 1.62 5.15z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M447 514.53s5.39 0 6.64 3.82 0 7.28 2 11.44 6 8 3.79 13.06-3.94 12.1-3.09 14.35.6 11.15-5.29 12.7-18.36 1.55-18.78-2.45-5.38-14.82-2-19.85a14.13 14.13 0 0 0 1.84-11.66c-.43-1.49-3.7-5.13-2-8.92s-.7-10.36 4.91-14 12.27-2.16 11.98 1.51z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M430.92 558.58s4.17-17.26 1.25-22.17c0 0-6.67.63-6.51 22.17"
                            transform="translate(0 -56.34)" />
                            <path className="cls-30" d="M454.83 561.39c-2.23-6.78-.95-6.14.29-16.64l-3.82-9.28-6.3-1.23-7.24.37-5.6 1.8s-5 7.21.74 18.29c2.36 4.56 3.27 8.08 2.76 12.29l-.78 6.93a31.57 31.57 0 0 0 18.73.11l4-1.22a64.67 64.67 0 0 0-2.78-11.42z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M445 525.54v8.17a4.26 4.26 0 0 1-3.13 4.11 3.24 3.24 0 0 1-4.11-3.13v-9.15z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-38" d="M445 527.23v4.29a7.74 7.74 0 0 1-4.24 1.83 4.25 4.25 0 0 1-3-.74v-4.35a18.07 18.07 0 0 1 2.54-1.72c.7-.4 1.21-.65 1.21-.65l1.7.65z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M441.39 532.25a7.71 7.71 0 0 0 7.71-7.71v-3.84a7.71 7.71 0 0 0-7.71-7.71 7.71 7.71 0 0 0-7.71 7.71v3.84a7.71 7.71 0 0 0 7.71 7.71z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M447 523.81a2.07 2.07 0 1 0 2.07-2.07 2.08 2.08 0 0 0-2.07 2.07z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M446.78 515.17s-3 4.22-7.53 4c-6.34-.33-6.31 9.12-6.31 9.12s-1.75-5.81 0-10.49c1.86-4.99 7.4-8.69 13.84-2.63z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-25" d="M445.59 513.84s-.64 7.52 3.51 7.9-1.92-8.07-3.51-7.9z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M443.25 567.34l-2.35.75c-1-.34-2-.71-2.88-1.11l-.31-.13-.88-.4a50 50 0 0 1-10.2-6.33 2.64 2.64 0 0 1-1-2.07c0-1.18 0-2.3.08-3.35a9.12 9.12 0 0 0 5.36 3.09l-.19.8a56.5 56.5 0 0 1 9.13 6.06l.94.76c1.43 1.14 2.3 1.93 2.3 1.93z"
                            transform="translate(0 -56.34)" />
                            <circle className="cls-25" cx="441.75" cy="467.86" r="0.34" />
                            <circle className="cls-25" cx="438.11" cy="467.86" r="0.34" />
                            <path className="cls-38" d="M440.37 527.46h-.32a.84.84 0 0 1-.64-.31.88.88 0 0 1-.16-.7l.51-2.19a.25.25 0 0 1 .3-.19.25.25 0 0 1 .19.3l-.51 2.19a.32.32 0 0 0 .06.27.33.33 0 0 0 .25.13h.32a.25.25 0 0 1 .25.25.25.25 0 0 1-.25.25zM441.08 530.21a2.57 2.57 0 0 0 2.23-1.61.23.23 0 0 0-.13-.3.24.24 0 0 0-.31.13 2.09 2.09 0 0 1-1.79 1.31.23.23 0 0 0-.23.24.23.23 0 0 0 .23.23z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-32" d="M441 565.41a26.58 26.58 0 0 0-3 1.57l-.3-.14-.89-.39a7.29 7.29 0 0 1 3.16-1.83h.05z"
                            transform="translate(0 -56.34)" />
                            <ellipse className="cls-33" cx="439.23" cy="509.18" rx="1.6" ry="0.9"
                            />
                            <path className="cls-33" d="M437.63 509.18v-.48h.65v.89l-.65-.41zM440.82 509.18v-.48h-.75l.55.55.2-.07z"
                            />
                            <ellipse className="cls-25" cx="439.23" cy="508.7" rx="1.6" ry="0.9" />
                            <ellipse className="cls-20" cx="439.23" cy="508.7" rx="1.37" ry="0.77"
                            />
                            <path className="cls-25" d="M439.33 508.69l-1.06-.07.01-.09 1.05.07.61-.14.01.09-.62.14z"
                            />
                            <path className="cls-40" d="M455.08 578.63a8.42 8.42 0 0 0 3.28.18.76.76 0 0 0 .35-.1.52.52 0 0 0 .13-.21 2.29 2.29 0 0 0-.15-1.54 1.71 1.71 0 0 0-.57-.82 2.44 2.44 0 0 0-1.28-.33 8 8 0 0 0-3.13.51c-.34.13-1.13.35-1 .72a2.5 2.5 0 0 0 .91.92 4.92 4.92 0 0 0 1.46.67z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-29" d="M464.15 500.62l-16.9 2.7 2.63 18.81 15.63-4.01-1.36-17.5z"
                            />
                            <path className="cls-35" d="M447.25 503.32l-.58.26 2.58 18.68.63-.13-2.63-18.81z"
                            />
                            <path className="cls-20" d="M457.62 565.63a.88.88 0 0 0-.36.06 1.12 1.12 0 0 0-.59 1.13 2.15 2.15 0 0 0 1 1.79 1.52 1.52 0 0 0 1.91-.32 1.9 1.9 0 0 0 .27-.53 2.32 2.32 0 0 0 .09-1.25 1.33 1.33 0 0 0-.8-.92 1 1 0 0 0-.78.07c-.14.06-.16.13-.29.13s-.29-.16-.45-.16zM458.23 563.74s.13-.11.19-.07a.16.16 0 0 1 0 .07c.12.26.21 1.4-.29 1.34s-.08-1.08.1-1.34z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M451.3 535.47s6.95-.64 8.24 6.57c1 5.91 4.5 14.17 4.52 16.29s-4 18.59-4.88 19.79l-3.15.34s2-10.54 2.44-15.21a26.42 26.42 0 0 1 .93-6s-6.4-12.75-7.4-17.42-.7-4.36-.7-4.36z"
                            transform="translate(0 -56.34)" />
                            <path className="cls-40" d="M454.63 576.31a1.3 1.3 0 0 0-.55.81 1.18 1.18 0 0 0 .56 1.07 2.69 2.69 0 0 0 1.18.34 10.86 10.86 0 0 0 2.28 0 1.34 1.34 0 0 0 1.2-.6 1 1 0 0 0 0-.71 1.76 1.76 0 0 0-1.05-1 5 5 0 0 0-1.08-.23c-.27 0-.5-.15-.76-.19a2.44 2.44 0 0 0-1.78.51z"
                            transform="translate(0 -56.34)" />
                            <circle className="cls-29" cx="449.71" cy="469.98" r="0.61" />
                            <circle className="cls-32" cx="449.71" cy="469.37" r="0.44" />
                            <path className="cls-40" d="M443.76 571.74a1.77 1.77 0 0 1-.5-.28s-.23-.27-.4-.45l-.13-.14a3.12 3.12 0 0 1-.77-.72c-.27-.38-1.39-2.19-1.39-2.19l1-.8.77-.61a20.25 20.25 0 0 1 3.22 1.3l.08.09a4.32 4.32 0 0 1 .35.8c0 .06.35.71.26.91a.69.69 0 0 1-.53.43 1.66 1.66 0 0 1-.62.68 1 1 0 0 1-.74.55s-.28.47-.6.43z"
                            transform="translate(0 -56.34)" />
                        </g>
                        <g className={"profissional " + (currentWord === 2 ? 'active' : '')}>
                            <g className={"floating-icon-2 " + (currentWord === 2 ? 'active-2' : '')}>
                                <g className="e" transform="matrix(1, 0, 0, 1, 444, 426)">
                                    <path className="d" d="M936,435.567v37.809a3.55,3.55,0,0,0,3.531,3.567h11.442a3.516,3.516,0,0,1,2.5,1.044l5.457,5.513a3.507,3.507,0,0,0,4.995,0l5.457-5.513a3.517,3.517,0,0,1,2.5-1.044h11.442a3.55,3.55,0,0,0,3.531-3.567V435.567A3.55,3.55,0,0,0,983.319,432H939.531A3.549,3.549,0,0,0,936,435.567Z" transform="translate(-918 -422)" />
                                </g>
                                <g transform="translate(470.095 441.076)">
                                    <path className="b" d="M459.937,437.182l1.266-1.266a1.963,1.963,0,0,0,0-2.777l-2.221-2.221a1.963,1.963,0,0,0-2.777,0l-2.221,2.221a1.963,1.963,0,0,0,0,2.777l1.266,1.266a1.963,1.963,0,0,1,.435,2.117l-4.678,11.695a1.964,1.964,0,0,0,.435,2.117l4.764,4.764a1.963,1.963,0,0,0,2.777,0l4.764-4.764a1.964,1.964,0,0,0,.435-2.117L459.5,439.3A1.963,1.963,0,0,1,459.937,437.182Z" transform="translate(-440.13 -425.907)" />
                                </g>
                            </g>
                            <path className="cls-191" d="M459.15 590.33l.54 6.58h1.45l-1.99-6.58z"
                            />
                            <path className="cls-192" d="M459.37 646.43a.23.23 0 0 0-.22.24c0 1 .17 5.65 2.36 9a3 3 0 0 0 2.05 1.6 1.37 1.37 0 0 0 1.73-1.11 20.89 20.89 0 0 0-2.6-9.66.38.38 0 0 0-.36-.2z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-191" d="M443.27 649.24V654h-.89s.12-3.86.89-4.76z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-192" d="M442.74 646.82a1.59 1.59 0 0 0-.6-.14 5.72 5.72 0 0 0-2.26.07c-.4.18-.44 1.2-.55 1.64a81.42 81.42 0 0 1-1.38 4.61c-.27.83-.56 1.67-.87 2.5a2.29 2.29 0 0 0-.19.77.75.75 0 0 0 .33.68 1 1 0 0 0 .45.1 7.91 7.91 0 0 0 2.87-.21 2.92 2.92 0 0 0 2-2 7.93 7.93 0 0 0 .07-1.38 3.28 3.28 0 0 1 .5-1.6l.24-.68a4.79 4.79 0 0 0-.4-4.08.78.78 0 0 0-.21-.28z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-150" d="M439.09 639.38l.42 8a11.43 11.43 0 0 1 3.12.33c.38-1.75 1.33-6.28 1.69-7.83"
                                transform="translate(0 -56.34)" />
                            <path className="cls-150" d="M439.55 647.09a28 28 0 0 1-.5 3.2 20.78 20.78 0 0 0-1 3.81c.08.35.65 1.55 2.43-.3 1.94-2 2.19-6.73 2.19-6.73a2.65 2.65 0 0 0-3.12.02z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-192" d="M443.27 654a29 29 0 0 0 .34-4.88l-1 .75z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-150" d="M457.55 638.76l1.73 7.84a11.65 11.65 0 0 1 3.13-.19c.09-1.78.29-6.4.38-8"
                                transform="translate(0 -56.34)" />
                            <path className="cls-44" d="M436.33 611.73c.72 2.08 2.6 32 2.6 32h5.46s2.14-23.57 1.72-25.73c-.57-3-2.47-8.56-2.47-8.56.21-1.16.52-23.83.52-23.83l1.44-.12s4.53 24.88 5.87 27.77 6.53 29.36 6.53 29.36h5.35s-1-21.29-1.13-23c-.25-3.33-4.53-11.57-4.53-11.57s.2-22.1 0-25.45v-.36c0-.5-.09-1-.16-1.52v-.29c0-.1 0-.21-.05-.32s0-.27-.07-.4l-.06-.34c-.18-1-.41-2-.66-2.89-.07-.24-.13-.47-.2-.7s-.08-.29-.13-.43l-.09-.31c-.17-.53-.33-1-.51-1.55l-.09-.28-.11-.29v-.18c-.05-.13-.1-.26-.14-.39-.11-.3-.22-.58-.33-.86s-.21-.54-.32-.8c-.15-.37-.29-.72-.43-1l-.09-.2c-.14-.33-.27-.63-.4-.91l-.09-.2c-.27-.58-.5-1.06-.67-1.4a.93.93 0 0 0-.1-.2.39.39 0 0 0 0-.09l-.18-.35h-16.27s-.11.45-.27 1.21c0 .22-.1.47-.16.74s-.09.41-.13.63-.09.43-.14.67c-.26 1.21-.56 2.67-.86 4.22-.65 3.25-1.32 6.91-1.64 9.53-.72 5.83 2.27 26.31 2.99 28.39z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-150" d="M461 651.66a6.84 6.84 0 0 0 1 1.43 1.94 1.94 0 0 0 1 .66.49.49 0 0 0 .39-.06c.66-.46.72-1.68.63-2.55a30.67 30.67 0 0 0-1.56-4.93c-.64-.08-2.84-.37-3.08.3s1.32 4.56 1.62 5.15z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-193" d="M447 514.53s5.39 0 6.64 3.82 0 7.28 2 11.44 6 8 3.79 13.06-3.94 12.1-3.09 14.35.6 11.15-5.29 12.7-18.36 1.55-18.78-2.45-5.38-14.82-2-19.85a14.13 14.13 0 0 0 1.84-11.66c-.43-1.49-3.7-5.13-2-8.92s-.7-10.36 4.91-14 12.27-2.16 11.98 1.51z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M430.92 558.58s4.17-17.26 1.25-22.17c0 0-6.67.63-6.51 22.17"
                                transform="translate(0 -56.34)" />
                            <path className="cls-192" d="M454.83 561.39c-2.23-6.78-.95-6.14.29-16.64l-3.82-9.28-6.3-1.23-7.24.37-5.6 1.8s-5 7.21.74 18.29c2.36 4.56 3.27 8.08 2.76 12.29l-.78 6.93a31.57 31.57 0 0 0 18.73.11l4-1.22a64.67 64.67 0 0 0-2.78-11.42z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M445 525.54v8.17a4.26 4.26 0 0 1-3.13 4.11 3.24 3.24 0 0 1-4.11-3.13v-9.15z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-153" d="M445 527.23v4.29a7.74 7.74 0 0 1-4.24 1.83 4.25 4.25 0 0 1-3-.74v-4.35a18.07 18.07 0 0 1 2.54-1.72c.7-.4 1.21-.65 1.21-.65l1.7.65z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M441.39 532.25a7.71 7.71 0 0 0 7.71-7.71v-3.84a7.71 7.71 0 0 0-7.71-7.71 7.71 7.71 0 0 0-7.71 7.71v3.84a7.71 7.71 0 0 0 7.71 7.71z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M447 523.81a2.07 2.07 0 1 0 2.07-2.07 2.08 2.08 0 0 0-2.07 2.07z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-193" d="M446.78 515.17s-3 4.22-7.53 4c-6.34-.33-6.31 9.12-6.31 9.12s-1.75-5.81 0-10.49c1.86-4.99 7.4-8.69 13.84-2.63z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-193" d="M445.59 513.84s-.64 7.52 3.51 7.9-1.92-8.07-3.51-7.9z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M443.25 567.34l-2.35.75c-1-.34-2-.71-2.88-1.11l-.31-.13-.88-.4a50 50 0 0 1-10.2-6.33 2.64 2.64 0 0 1-1-2.07c0-1.18 0-2.3.08-3.35a9.12 9.12 0 0 0 5.36 3.09l-.19.8a56.5 56.5 0 0 1 9.13 6.06l.94.76c1.43 1.14 2.3 1.93 2.3 1.93z"
                                transform="translate(0 -56.34)" />
                            <circle className="cls-161" cx="441.75" cy="467.86" r="0.34" />
                            <circle className="cls-161" cx="438.11" cy="467.86" r="0.34" />
                            <path className="cls-153" d="M440.37 527.46h-.32a.84.84 0 0 1-.64-.31.88.88 0 0 1-.16-.7l.51-2.19a.25.25 0 0 1 .3-.19.25.25 0 0 1 .19.3l-.51 2.19a.32.32 0 0 0 .06.27.33.33 0 0 0 .25.13h.32a.25.25 0 0 1 .25.25.25.25 0 0 1-.25.25z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-192" d="M441.08 530.21a2.57 2.57 0 0 0 2.23-1.61.23.23 0 0 0-.13-.3.24.24 0 0 0-.31.13 2.09 2.09 0 0 1-1.79 1.31.23.23 0 0 0-.23.24.23.23 0 0 0 .23.23z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-44" d="M441 565.41a26.58 26.58 0 0 0-3 1.57l-.3-.14-.89-.39a7.29 7.29 0 0 1 3.16-1.83h.05z"
                                transform="translate(0 -56.34)" />
                            <ellipse cx="439.23" cy="509.18" rx="1.6" ry="0.9" />
                            <path d="M437.63 509.18v-.48h.65v.89l-.65-.41zM440.82 509.18v-.48h-.75l.55.55.2-.07z"
                            />
                            <ellipse className="cls-47" cx="439.23" cy="508.7" rx="1.6" ry="0.9" />
                            <ellipse className="cls-20" cx="439.23" cy="508.7" rx="1.37" ry="0.77"
                            />
                            <path className="cls-192" d="M439.33 508.69l-1.06-.07.01-.09 1.05.07.61-.14.01.09-.62.14z"
                            />
                            <path className="cls-159" d="M455.08 578.63a8.42 8.42 0 0 0 3.28.18.76.76 0 0 0 .35-.1.52.52 0 0 0 .13-.21 2.29 2.29 0 0 0-.15-1.54 1.71 1.71 0 0 0-.57-.82 2.44 2.44 0 0 0-1.28-.33 8 8 0 0 0-3.13.51c-.34.13-1.13.35-1 .72a2.5 2.5 0 0 0 .91.92 4.92 4.92 0 0 0 1.46.67z"
                                transform="translate(0 -56.34)" />
                            <path fill="#bdd4de" d="M464.15 500.62l-16.9 2.7 2.63 18.81 15.63-4.01-1.36-17.5z"
                            />
                            <path fill="#efefef" d="M447.25 503.32l-.58.26 2.58 18.68.63-.13-2.63-18.81z"
                            />
                            <path className="cls-20" d="M457.62 565.63a.88.88 0 0 0-.36.06 1.12 1.12 0 0 0-.59 1.13 2.15 2.15 0 0 0 1 1.79 1.52 1.52 0 0 0 1.91-.32 1.9 1.9 0 0 0 .27-.53 2.32 2.32 0 0 0 .09-1.25 1.33 1.33 0 0 0-.8-.92 1 1 0 0 0-.78.07c-.14.06-.16.13-.29.13s-.29-.16-.45-.16zM458.23 563.74s.13-.11.19-.07a.16.16 0 0 1 0 .07c.12.26.21 1.4-.29 1.34s-.08-1.08.1-1.34z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M451.3 535.47s6.95-.64 8.24 6.57c1 5.91 4.5 14.17 4.52 16.29s-4 18.59-4.88 19.79l-3.15.34s2-10.54 2.44-15.21a26.42 26.42 0 0 1 .93-6s-6.4-12.75-7.4-17.42-.7-4.36-.7-4.36z"
                                transform="translate(0 -56.34)" />
                            <path className="cls-159" d="M454.63 576.31a1.3 1.3 0 0 0-.55.81 1.18 1.18 0 0 0 .56 1.07 2.69 2.69 0 0 0 1.18.34 10.86 10.86 0 0 0 2.28 0 1.34 1.34 0 0 0 1.2-.6 1 1 0 0 0 0-.71 1.76 1.76 0 0 0-1.05-1 5 5 0 0 0-1.08-.23c-.27 0-.5-.15-.76-.19a2.44 2.44 0 0 0-1.78.51z"
                                transform="translate(0 -56.34)" />
                            <circle className="cls-44" cx="449.71" cy="469.98" r="0.61" />
                            <circle className="cls-192" cx="449.71" cy="469.37" r="0.44" />
                            <path className="cls-159" d="M443.76 571.74a1.77 1.77 0 0 1-.5-.28s-.23-.27-.4-.45l-.13-.14a3.12 3.12 0 0 1-.77-.72c-.27-.38-1.39-2.19-1.39-2.19l1-.8.77-.61a20.25 20.25 0 0 1 3.22 1.3l.08.09a4.32 4.32 0 0 1 .35.8c0 .06.35.71.26.91a.69.69 0 0 1-.53.43 1.66 1.66 0 0 1-.62.68 1 1 0 0 1-.74.55s-.28.47-.6.43z"
                                transform="translate(0 -56.34)" />
                        </g>
                    </g>
                    
                    {/* Fixed ! [Cars Shapes] */}
                    <g id="Cars" className={show}>
                        <path className="cls-40" d="M1434.42 515.52l.18 1.15.37 2.64.64 4.32.06.42.34 2.27.42 2.9.22 1.48a3.28 3.28 0 0 0 3.73 2.77l.66-.1a4 4 0 0 0 3.36-4.52l-.7-4.78-.43-2.91-1-6.78-4.09.59-3.07.45z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M1428.57 516.38a8.63 8.63 0 1 0 7.28-9.78 8.63 8.63 0 0 0-7.28 9.78z"
                            transform="translate(0 -56.34)" />
                        <path d="M1435.67 524.05l.34 2.27.42 2.9a8.55 8.55 0 0 0 2.24-5.62 1.76 1.76 0 0 0 0-.4l-1.93.55z"
                            transform="translate(0 -56.34)" opacity="0.5" fill="#d9e1ed" />
                        <path className="cls-40" d="M1428.55 516.24l.06.36.3 2 .43 3c0 .2.07.39.12.59a5.63 5.63 0 0 0 5.08 4.21 5.88 5.88 0 0 0 1.18-.06h.29a4.15 4.15 0 0 0 2.6-1.85 3.9 3.9 0 0 0 .42-.93 4.12 4.12 0 0 0 .15-1.82l-.11-.71-.26-1.77-.43-2.91-.19-1.36v-.13l-3 .43z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M1429.1 518.25l-1.46 3a.68.68 0 0 0 .77.91l2.22.09z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1437.7 518l-1.51 1.37a.84.84 0 0 1-1.25-.12c-.5-.69-.9-2 .26-4a2 2 0 0 0-.25-2.48 1.93 1.93 0 0 0-2.14-.38c-1.25.7-2.24 1.39-4.24.55-1.67-4.33 2.44-6.59 4.61-7.12l2.82-.69s9-1.76 10.66 5.66c1.62 7.2-2.27 8.51-2.52 12.54a.91.91 0 0 1-.84.86l-1.9.11a1.06 1.06 0 0 1-1.08-.78l-1-3.69z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M1436.34 519a2.37 2.37 0 1 0 2-2.69 2.36 2.36 0 0 0-2 2.69z"
                            transform="translate(0 -56.34)" />
                        <path d="M1432.42 466.23a2.06 2.06 0 0 1-1.12 1" strokeWidth="0.33" stroke="#d9e1ed"
                            strokeMiterlimit="10" strokeLinecap="round" fill="none" />
                        <circle className="cls-25" cx="1429.95" cy="461.39" r="0.37" />
                        <path className="cls-25" d="M1427.23 507.7s5.77 10.75 20.52 11.83c0 0-6.95-10.84-20.52-11.83z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1429 508.15s4.59-7.86 12.62-4.38 5 14.33 5 14.33-13-3.03-17.62-9.95z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1429.79 507.11l2.59-5.19a18.17 18.17 0 0 1 6.52 1.86 19.8 19.8 0 0 0-9.11 3.33zM1423 555.14s-1.07-1-1.91-.79-.34.74-1.5-.48c0 0-1.22-.32-1.07 1.35s1.53 2.85 4.23 1z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1424.41 497.5l-2.61.55.07 2.36 3.59-.39-1.05-2.52z"
                        />
                        <path className="cls-33" d="M1418.64 575.68s-11.6-8.46-15-33.24c0 0 8.09 1.66 14.43.34 0 0 3.17 18.75 5.23 24.16a42.39 42.39 0 0 0-4.66 8.74z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1422.56 554l9.58-2.17L1436 539a4.21 4.21 0 0 1 5.23-2.11 3.73 3.73 0 0 1 2.49 5.13l-7.08 12.98a3.7 3.7 0 0 1-3.92 2.07l-9.7.71z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M1433.72 585.82l-.18 7.65-6.66-.92.22-7.52 6.62.79z"
                        />
                        <path className="cls-25" d="M1425.83 571.53l-2.78 35.63a15.76 15.76 0 0 0 0 2.38l3.85 34.59 6.77 1 4.1-43.56 2.08-16.71c.4-1.31 4-7.87 4.31-9.26a18.7 18.7 0 0 0-.24-8l-1.24-5.16zM1434.36 648.23a.66.66 0 0 0-1-.31 5 5 0 0 1-3.64.92A2.92 2.92 0 0 1 1427 647a.64.64 0 0 0-.86-.4l-11.23 4.66a2.79 2.79 0 0 0-1.51 1.51 1 1 0 0 0 .91 1.34l19.18-.09a1.31 1.31 0 0 0 1.3-1.39l-.21-3.7a.57.57 0 0 0 0-.18z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M1438.53 589.61l-.18 7.64-6.66-.92.22-7.52 6.62.8z"
                        />
                        <path className="cls-33" d="M1426.34 566.76l.85 42.58 4.08 37.41 7.26.35 1.08-38.26 4-20.17c.4-1.32 4-7.88 4.31-9.27a18.87 18.87 0 0 0-.24-7.95l-1.24-5.16zM1439.17 652a.65.65 0 0 0-1-.31 5.09 5.09 0 0 1-3.65.93 2.91 2.91 0 0 1-2.72-1.84.67.67 0 0 0-.87-.4l-11.23 4.66a2.83 2.83 0 0 0-1.51 1.51 1 1 0 0 0 .91 1.35l19.18-.1a1.32 1.32 0 0 0 1.31-1.39l-.22-3.7a.57.57 0 0 0 0-.18z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M1424 568.21a4.65 4.65 0 0 0 3.17 4.93c4 1.33 12.3 3 18.11 1.86a4.75 4.75 0 0 0 3.75-4.5l1.12-15c.7-5.54.67-14.42-1.07-19.72-1.5-4.55-3.53-7.57-6.23-7.91l-.48-.06c-6.63-.85-9.47 4.25-10.31 10.88z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M1410.55 559.06a1.5 1.5 0 0 0-1.16-.84 8.31 8.31 0 0 0-1.39-.22.55.55 0 0 0-.31 0 .42.42 0 0 0-.16.28.77.77 0 0 0 .22.63 1.26 1.26 0 0 0 .62.28 6.66 6.66 0 0 0 .89.17 1.91 1.91 0 0 0 0 .63.74.74 0 0 0 .32.53 1 1 0 0 0 .61.08c.33 0 .72-.12.78-.51a1.73 1.73 0 0 0-.42-1.03z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1418.64 575.68s1.57.39 2.71-1.84c0 0-14.67-7.71-17.72-31.4 0 0 3.23 27.81 15.01 33.24z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M1445.36 473.65l.48-3.78-11.64 2.12.27 3.86 7.2 1.29 3.69-3.49z"
                        />
                        <path className="cls-40" d="M1412.53 560.33s-1.46-1.39-2.59-1.07-.46 1-2-.66c0 0-1.65-.43-1.44 1.84.23 2.43 2.07 3.84 5.72 1.34z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M1414.41 502.23l-3.54.74.1 3.2 4.85-.54-1.41-3.4z"
                        />
                        <path className="cls-25" d="M1428.83 572.22c0 1.24.09 2.42.21 3.49a22.82 22.82 0 0 0 .44 2.83s14.78 2.62 19.62-3.15l.17-1.12c.13-.89.33-2.28.54-4q.14-1.08.27-2.34c.15-1.22.29-2.53.4-3.93 1.34-14.13 1.91-36.22-7.67-35h-.49a10.44 10.44 0 0 0-9.85 8.67 264.26 264.26 0 0 0-3.49 27.55c-.07 1.19-.12 2.35-.14 3.47s-.04 2.42-.01 3.53z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M1411.44 558.33l19.45-4.87 5.23-17.3a5.7 5.7 0 0 1 7.08-2.86c3.15 1 4.7 4.24 3.36 6.93l-9.58 17.5a5 5 0 0 1-5.31 2.8l-19.86 2.57z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M1428.84 568.73c8.23 1.78 16.33.44 21.24-.82.15-1.22.29-2.53.4-3.93-10.57 2.68-17.8 2-21.5 1.28-.07 1.19-.12 2.35-.14 3.47zM1428.83 572.22c0 1.24.09 2.42.21 3.49a46.5 46.5 0 0 0 20.23-1.44c.13-.89.33-2.28.54-4-10.3 2.95-17.39 2.55-20.98 1.95z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1421.56 554.21a1.13 1.13 0 0 0-.85-.63 7.65 7.65 0 0 0-1-.17.36.36 0 0 0-.23 0 .26.26 0 0 0-.11.21.51.51 0 0 0 .16.46 1 1 0 0 0 .45.21l.66.12a1.48 1.48 0 0 0 0 .47.51.51 0 0 0 .24.39.73.73 0 0 0 .44.06c.25 0 .54-.09.58-.38a1.24 1.24 0 0 0-.34-.74z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M1426.66 582.83a58.66 58.66 0 0 0 16.68 6.93l-.72 3.7s-9.92-2.69-15.88-6.84z"
                            transform="translate(0 -56.34)" />
                        <rect className="cls-25" x="1431.66" y="583.87" width="4.45" height="9.1"
                            rx="0.5" ry="0.5" transform="rotate(167.94 1436.85 560.273)" />
                        <rect className="cls-25" x="1433.32" y="579.66" width="0.74" height="5.12"
                            rx="0.34" ry="0.34" transform="rotate(167.94 1436.666 554.075)" />
                        <rect className="cls-25" x="1431.43" y="583.21" width="2.69" height="2.33"
                            rx="0.47" ry="0.47" transform="rotate(167.94 1435.747 556.218)" />
                        <rect className="cls-35" x="1431.76" y="584.66" width="3.17" height="2.57"
                            rx="0.22" ry="0.22" transform="rotate(167.94 1436.314 557.79)" />
                        <rect className="cls-25" x="1432.26" y="585.12" width="1.88" height="0.28"
                            rx="0.13" ry="0.13" transform="rotate(167.94 1436.168 557.111)" />
                        <rect className="cls-25" x="1432.41" y="585.8" width="1.88" height="0.28"
                            rx="0.13" ry="0.13" transform="rotate(167.94 1436.314 557.79)" />
                        <rect className="cls-25" x="1432.55" y="586.48" width="1.88" height="0.28"
                            rx="0.13" ry="0.13" transform="rotate(167.94 1436.46 558.472)" />
                        <rect className="cls-25" x="1431.35" y="587.64" width="0.67" height="2.33"
                            rx="0.17" ry="0.17" transform="rotate(167.94 1434.657 560.653)" />
                        <path className="cls-20" d="M518.17 680.21l2.91-8.33 5.45 1.33-.67 5.64-7.69 1.36z"
                        />
                        <path className="cls-29" d="M516.76 674.74s13.84 27 14.77 28.67-12.08 26.37-12.08 26.37l8.07 1.82s11.18-25.89 11.34-27.52-8.26-27.74-8.26-27.74z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M517.54 739.82h19.25s-.08-2.58-1.09-3.27-8.28-2.45-9.29-2.63-2.9 1.48-5 1.48-2.51-1.55-3.11-2.09-1.73 4.69-.76 6.51z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-32" d="M497.16 694.75A27.21 27.21 0 1 0 524.37 722a27.21 27.21 0 0 0-27.21-27.25zm0 48.75a21.55 21.55 0 1 1 21.55-21.5 21.54 21.54 0 0 1-21.55 21.5z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M497.16 694.05A27.91 27.91 0 1 0 525.07 722a27.91 27.91 0 0 0-27.91-27.95zm0 51.11A23.21 23.21 0 1 1 520.37 722a23.2 23.2 0 0 1-23.21 23.16zM565.7 687.37a1.07 1.07 0 0 1-1-.69c-.49-1.27-2.54-7.67-3.14-9.77a4.24 4.24 0 0 1 .51-3.6 3.28 3.28 0 0 1 2.79-1.26h5.29a1.07 1.07 0 0 1 0 2.14h-5.29c-.78 0-1 .31-1.08.41a2.09 2.09 0 0 0-.16 1.72c.55 1.92 2.62 8.41 3.08 9.6a1.06 1.06 0 0 1-.62 1.38 1 1 0 0 1-.38.07z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M579.3 716.21a5.75 5.75 0 1 0 5.64 5.75 5.7 5.7 0 0 0-5.64-5.75z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-32" d="M579.3 694.75A27.21 27.21 0 1 0 606.51 722a27.21 27.21 0 0 0-27.21-27.25zm0 48.75a21.55 21.55 0 1 1 21.54-21.5 21.54 21.54 0 0 1-21.54 21.5z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M579.3 694.05A27.91 27.91 0 1 0 607.21 722a27.91 27.91 0 0 0-27.91-27.95zm0 51.11A23.21 23.21 0 1 1 602.5 722a23.2 23.2 0 0 1-23.2 23.16z"
                            transform="translate(0 -56.34)" />
                        <path d="M531.17 727.18a1.62 1.62 0 1 1-1.61-1.62 1.61 1.61 0 0 1 1.61 1.62z"
                            transform="translate(0 -56.34)" fill="#798787" />
                        <rect className="cls-25" x="517.88" y="630.22" width="47.98" height="2.6"
                            rx="0.75" ry="0.75" />
                        <path className="cls-25" d="M563.45 686.89a.75.75 0 0 1 1.06 0l.81.74a.76.76 0 0 1 .06 1.06l-31.23 34.43a.75.75 0 0 1-1.06 0l-.82-.74a.75.75 0 0 1 0-1.06zM530.49 726.71a.75.75 0 0 1-.53.92l-1.07.28a.75.75 0 0 1-.92-.53l-13.74-49.31a.76.76 0 0 1 .54-.92l1.06-.28a.76.76 0 0 1 .92.53z"
                            transform="translate(0 -56.34)" />
                        <rect className="cls-25" x="570.9" y="682.49" width="2.6" height="41.77"
                            rx="0.75" ry="0.75" transform="rotate(-20.7 417.967 675.217)" />
                        <path className="cls-25" d="M527.09 677.29c-3.52 0-7.1 2.76-11.39 2.76s-8.84-2.7-9.47-5 2.28-3.73 4.42-2.62 3.66 2.35 7 2.35 7-.21 8.46.14a1.48 1.48 0 0 1 .98 2.37zM579.3 720.1a1.86 1.86 0 1 0 1.82 1.86 1.84 1.84 0 0 0-1.82-1.86z"
                            transform="translate(0 -56.34)" />
                        <rect className="cls-25" x="528.92" y="655.34" width="10.97" height="2"
                            rx="0.61" ry="0.61" />
                        <rect className="cls-25" x="520.86" y="683.61" width="10.97" height="2"
                            rx="0.61" ry="0.61" />
                        <path className="cls-25" d="M526.52 684.62h-1.32l3.68-13.08h1.31l-3.67 13.08z"
                        />
                        <path className="cls-29" d="M498.18 717.35l30.29 3.48-1 12.35-29.26-6.29v-9.54m-1-1.14v11.5l31.2 6.71 1.2-14.48-32.4-3.73z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M530.61 670.08h-1.32l3.68-13.08h1.31l-3.67 13.08z"
                        />
                        <path className="cls-25" d="M498.24 722.86a.75.75 0 0 1-1 .23l-.93-.6a.74.74 0 0 1-.23-1l21.12-33.74a.76.76 0 0 1 1-.23l.92.6a.74.74 0 0 1 .23 1z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M496.3 723.47a.75.75 0 0 1-.62-.86l.17-1.09a.75.75 0 0 1 .86-.62l33.16 5a.75.75 0 0 1 .62.86l-.17 1.09a.75.75 0 0 1-.86.62z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-31" d="M535.29 668.21l-.92-1.43-4.23 2.73v-5.03h-1.7v5.03l-4.22-2.73-.92 1.43 4.43 2.86-4.43 2.86.92 1.43 4.22-2.73v5.03h1.7v-5.03l4.23 2.73.92-1.43-4.43-2.86 4.43-2.86z"
                        />
                        <path className="cls-31" d="M531.87 727.18a2.32 2.32 0 1 1-2.31-2.32 2.3 2.3 0 0 1 2.31 2.32z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M530.6 727.18a1 1 0 0 1-2.09 0 1 1 0 1 1 2.09 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M529.56 719.94a7.24 7.24 0 1 0 7.24 7.24 7.24 7.24 0 0 0-7.24-7.24zm0 13a5.74 5.74 0 1 1 5.73-5.73 5.73 5.73 0 0 1-5.73 5.7z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M557.81 577.17l-3.38 1.73-2.77 1.43-1.96 1.01-1.32-7.35 5.71-2.07 3.72 5.25z"
                        />
                        <path className="cls-33" d="M571.52 665.62c-.46.06-5.14-.51-5.75-.54s-16.23-1.86-18.31-1.72c0 0 1.62-14.11 1.43-18.46l-8.7.26s.21 14.54.78 17.89 1 4 3 4.51 21.63 1.11 21.63 1.11.43 2.54 2.07 2.86a15 15 0 0 0 3.21.24s2.18.53 2.66-.68-1.54-5.52-2.02-5.47z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M540 648.35l9.51-1.27s1.82-13.3-5.17-12.26-4.34 13.53-4.34 13.53z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M526.81 650.1l4.05-5.91 5.83 1.27-3.44 7.4-6.44-2.76z"
                        />
                        <path className="cls-33" d="M526.23 711.68h19.26s-.08-2.58-1.1-3.28-8.27-2.45-9.29-2.62-2.89 1.47-5 1.47-2-1.26-2.62-1.8-2.22 4.35-1.25 6.23zM528.51 701.29l8.27 2.79s19.22-17.62 21.84-20.48 2.75-5.76 0-6.74-28.62-11.18-30.05-11.31-21.49 2.8-21.49 2.8.22 6 3.8 7.71c11.48 5.45 34.55 7.54 34.55 7.54z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M529.28 665.72s-11.12 4.1-22 4c-3.94 0-3.21-1.52-3.21-1.52.1-1.11 3.35-20.77 22.27-31.28a61.47 61.47 0 0 1 22-7s2.72 10.66 0 14.89-8.1 2.19-19.06 20.91z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M547.13 629.94l1.46-.31a47 47 0 0 1 1.45 7.94l-.55 1z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M528.62 666a39.88 39.88 0 0 0 7.66-10.54 25.57 25.57 0 0 1 2.44-2.74l1.74-1.49a45.65 45.65 0 0 1-8.22 15.94z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M538.27 646.1s1 15.83 1.76 19.44 1.28 4.32 3.39 4.75 22.44 0 22.44 0 .58 2.74 2.3 3a14.42 14.42 0 0 0 3.33.08s2.29.46 2.72-.89-2-5.93-2.43-5.84-5.35-.27-6-.27-16.89-1.11-19-.85c0 0 .93-15.46.5-20.19z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M572.51 672.84a2.55 2.55 0 1 1-2.55-2.55 2.55 2.55 0 0 1 2.55 2.55z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M571.28 672.84a1.32 1.32 0 1 1-1.32-1.33 1.32 1.32 0 0 1 1.32 1.33z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M537.55 648.92l10.26-1.15s2.85-13.09-4.21-12.92-6.05 14.07-6.05 14.07z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M497.16 716.21a5.75 5.75 0 1 0 5.64 5.79 5.7 5.7 0 0 0-5.64-5.79z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M497.16 720.71a1.25 1.25 0 0 0 0 2.49 1.25 1.25 0 0 0 0-2.49z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M554.43 635.24l-2.77 1.43a6.38 6.38 0 0 1 2.42-5.47z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M568.71 628.86a9.94 9.94 0 1 1-2.77-13.78 9.94 9.94 0 0 1 2.77 13.78z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M555.51 637a4.73 4.73 0 0 1-1.32-6.55l5.28-7.92 9.33 6.2-4.3 6.46a6.49 6.49 0 0 1-8.99 1.81z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M567.24 630.55v3.87a.78.78 0 0 1-1.24.58l-2.36-1z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-2" d="M552.78 629.68a9.73 9.73 0 0 0 2.14 2 9.93 9.93 0 0 0 13.79-2.77 9.65 9.65 0 0 0 1.55-4 9.94 9.94 0 1 0-17.48 4.86z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M552.15 617.85a9.94 9.94 0 0 1 18.11 7 20.54 20.54 0 0 1-5.7-3.4 7.83 7.83 0 0 1-5.71 6.08l-2.72 1c-1.87 4.22-6.09 1.2-6.09 1.2l.05-.13a10.51 10.51 0 0 0 .47-5 9.92 9.92 0 0 1 1.59-6.75z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M558.91 627.69a2.15 2.15 0 1 1-.6-3 2.15 2.15 0 0 1 .6 3z"
                            transform="translate(0 -56.34)" />
                        <path d="M560.21 577.27a2.32 2.32 0 0 0 .83 2.3" strokeWidth="0.54" stroke="#d9e1ed"
                            strokeMiterlimit="10" strokeLinecap="round" fill="none" />
                        <circle className="cls-25" cx="566.34" cy="572.56" r="0.48" />
                        <path className="cls-29" d="M564.56 621.42s3.28 6.81 8.23 2.84c0 0-1.47.42-2.85-3.82z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M550 626.5l22.75-4.43s-3.54-14.43-17.13-8.66S550 626.5 550 626.5z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M559.42 569.64l-1.32 12.11h.66l1.41-12.11h-.75z"
                        />
                        <path className="cls-25" d="M558.87 568.22l.08 1.79h1.73l.62-2.18-2.43.39z"
                        />
                        <rect className="cls-25" x="557.54" y="581.41" width="1.84" height="0.72"
                            rx="0.36" ry="0.36" />
                        <path className="cls-1" d="M1171.46 551.47l5.27 2.32-2.94 3.94-4.83-2.23 2.5-4.03z"
                        />
                        <path className="cls-33" d="M1175 608.63h-.11l-.34.09a.43.43 0 0 0-.27.62 3.61 3.61 0 0 1 .25 2.48 2 2 0 0 1-1.35 1.66.44.44 0 0 0-.32.54 16.12 16.12 0 0 1 1.81 6.55 1.92 1.92 0 0 0 1.25 1.67h.07a.38.38 0 0 0 .51-.31l1.52-12.21a.84.84 0 0 0-.74-1z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1160.79 569.64l.17 6.3-5.27-1.07-.06-5.82 5.16.59z"
                        />
                        <path className="cls-33" d="M1153.19 569.76l-5.63 22.24a11 11 0 0 0 1.12 8.35l.06.09a10.9 10.9 0 0 0 4.77 4.19l17 7.92 1.76-4.44-15.61-12.22 9.17-23.16z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M1152 568.52l3.51 58.33 5.58.32.94-28.73 5.8-21.89a30.66 30.66 0 0 0 .62-3.2 13.45 13.45 0 0 0-.68-6.09l-1.34-3.9zM1161.31 631.56a.43.43 0 0 0 0-.12l-.14-.36a.47.47 0 0 0-.71-.21 3.92 3.92 0 0 1-2.66.61 2.13 2.13 0 0 1-2-1.24.5.5 0 0 0-.63-.28 17.34 17.34 0 0 1-6.86 2.87 2.09 2.09 0 0 0-1.65 1.58v.08a.42.42 0 0 0 .4.51h13.47a.93.93 0 0 0 1-.94z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M1138 538.8c-1.36-1.86-1.94-4.12-3.8-2.76s-3.15 4.39-1.79 6.25 4.54 3.3 6.4 1.94.58-3.57-.81-5.43z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M1137.66 484.13l8.09 5.11-3.03 3.43-6.86-4.81 1.8-3.73z"
                        />
                        <path className="cls-33" d="M1139.48 547.71s4.92 7.42 18.51 11.12c2 .54 3.89-7.35 3.89-7.35l-20-8.32z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1151.33 569.24l17.36.73.4-24.87c-.47-6.56-3-12.6-6.75-12.61l-5.17.8c-3.83.6-4 9.5-4.15 11.09-.02 0-1.02 14.93-1.69 24.86z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1166.24 537.58c-1.69-2-5.26-1-6.48 1.3a4.35 4.35 0 0 0-.14 3.62c2.11 5.88 4.41 11.17 4.41 11.17l.8 2.43-6.49 11.7 4 4.18s9.05-10 8.9-15.44c-.1-4.66-1.79-15.07-5-18.96z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1141.92 486.82l-1.6-.95-2.84 4.21 2 1.29 2.44-4.55zM1158.34 511.46l-1.06 1.96 3.71 3.67 1.38-1.45-4.03-4.18z"
                        />
                        <path className="cls-20" d="M1157.28 569.76l-.61 1.39s-.67 2.3 2.08 4.55l2.24-2.27z"
                            transform="translate(0 -56.34)" />
                        <path d="M1156 514.14a7.5 7.5 0 0 0 3.41 5.62" strokeWidth="0.5" strokeLinejoin="round"
                            stroke="#c7d3e5" strokeLinecap="round" fill="none" />
                        <path className="cls-29" d="M1131.82 534.31l2.81 8.66a.54.54 0 0 0 .83.28l3-2a.55.55 0 0 0 .22-.63l-2.8-8.49a.55.55 0 0 0-.81-.3l-3 1.87a.55.55 0 0 0-.25.61z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-31" d="M1135.47 476.27l-2.76 1.77 2.44 7.71 2.79-1.86-2.47-7.62z"
                        />
                        <path className="cls-20" d="M1163 532.4l-7.37 2.65a2.26 2.26 0 0 1 0-.45l-.33-6.57 7.15-1.51z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1159.34 529.19a4.82 4.82 0 0 1-3.79 4.27l-.12-2.26z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M1149.6 522a7.75 7.75 0 1 0 6.39-8.92 7.76 7.76 0 0 0-6.39 8.92z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M1156.38 532a3.68 3.68 0 0 0 3-4.24l-1.21-7.32-8.62 1.42 1 6a5.06 5.06 0 0 0 5.83 4.14z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M1150.11 523.69l-1.27 2.74a.61.61 0 0 0 .71.8h2z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-2" d="M1160.67 527.7a7.73 7.73 0 0 1-11.07-5.7 7.62 7.62 0 0 1 .19-3.37 7.75 7.75 0 1 1 10.88 9.06z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1164.9 519.49a7.75 7.75 0 0 0-15.11-.85 16.07 16.07 0 0 0 5.15-.58 6.09 6.09 0 0 0 2.11 6.14l1.62 1.57c0 3.6 3.94 2.8 3.94 2.8v-.1a8.21 8.21 0 0 1 1.26-3.7 7.67 7.67 0 0 0 1.03-5.28z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M1157 524.32a1.68 1.68 0 1 0 1.38-1.93 1.67 1.67 0 0 0-1.38 1.93z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-201" d="M1154.13 528.11a1.81 1.81 0 0 1-1.33 1.37"
                            transform="translate(0 -56.34)" />
                        <circle className="cls-25" cx="1151.27" cy="466.46" r="0.37" />
                        <path className="cls-25" d="M1154.94 518.06s-4.51 3.78-6.76-.63c0 0 .9.77 3.25-1.8z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-202" d="M1155.59 535.05l1.06-1.94a4 4 0 0 1 .83 3.55s-.48-2.14-1.89-1.61z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1156.65 533.11a39.83 39.83 0 0 0 6.58-2s.16-.09.23 1.64c0 0-.32 3.17-6 3.94a6.21 6.21 0 0 0-.81-3.58z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M1139.11 539.49a1.32 1.32 0 0 0-.21-.67 1.2 1.2 0 0 0-.45-.29 14.56 14.56 0 0 0-1.91-.7.45.45 0 0 0-.28 0 .42.42 0 0 0-.25.4 1.28 1.28 0 0 0 .59 1.08 3.84 3.84 0 0 0 1.2.49 3.11 3.11 0 0 0-.13 1.29 1.47 1.47 0 0 0 .33.85.71.71 0 0 0 .84.19c.72-.41.33-2.01.27-2.64z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M1155 535s.34-.5.66-.4l-.25-.72a5.5 5.5 0 0 0-.41 1.12z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-202" d="M1155.59 535.05a9 9 0 0 0-.06-1.94c-.11-.33-.74.73-.58 1.89.05 0 .29-1.42.64.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M212.16 564.09l12.5 12.19.23.23a3.05 3.05 0 0 0 1.82.85l18 .66 1.45-3.12-18.43-4.51 2.05 1.08-11.35-13.28z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M214.06 567.52l-6.9-8.4a5.59 5.59 0 0 1 1-7.47 5 5 0 0 1 7 .68l6.3 8.9z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M231.14 582.28a1.63 1.63 0 0 1 .45-.33 1.27 1.27 0 0 1 .84 0 8.09 8.09 0 0 1 2.25 1.14.23.23 0 0 1 .1.12c0 .07 0 .16-.07.23a3.77 3.77 0 0 1-1 1 2.39 2.39 0 0 1-1.55.3 3.65 3.65 0 0 1-1.85-.84c-.6-.64.38-1.17.83-1.62z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M216.26 549.82h.05a.28.28 0 0 0 .22-.33l-2.86-13.85a.28.28 0 1 0-.54.11L216 549.6a.27.27 0 0 0 .26.22z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M190.34 537c-.59-1.78 1.84-4.53 5.55-7.37a75.51 75.51 0 0 1 16.43-9.26c4-1.57 7.17-2.23 8.1-1.21 3.92 4.34-28.21 23.55-30.08 17.84z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M214.52 524.76s7.9-1.64 5.49 5c-2.55 7-7.93 1.78-7.93 1.78z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M208.66 547.64a17.19 17.19 0 0 1-4.32-.77l.19-14.62 7.38.09-.2 15.63z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M212.22 542.11a3.8 3.8 0 0 1-3.76-3.86l.07-5.49 9.05-1.19-.07 5.38a5.22 5.22 0 0 1-5.29 5.16z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M217.33 533.36L219 536a.63.63 0 0 1-.59.93l-2 .36z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M217.58 531.57a8 8 0 1 1-7.92-8.12 8 8 0 0 1 7.92 8.12z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M209 535s9.62-6.16 7.07-10.2c-4.7-7.46-12.39-.16-12.39-.16z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M203.7 524.62s-5.29.26-4.11 5.25c1 4.24.35 3.38-1.82 5.19l-.07.05a4.61 4.61 0 0 0 3 8.06l5.35.07a4.11 4.11 0 0 0 3.67-2c.74-1.34.9-3.35-1.38-6 0 0-.2-4.18 2.87-4.7z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M210.2 534.75a1.78 1.78 0 1 1-1.75-1.8 1.77 1.77 0 0 1 1.75 1.8z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-201" d="M213.72 538.12a1.81 1.81 0 0 0 1.32 1.37"
                            transform="translate(0 -56.34)" />
                        <circle className="cls-25" cx="216.57" cy="476.47" r="0.37" />
                        <path className="cls-25" d="M212.32 520.4a75.51 75.51 0 0 0-16.43 9.26 9.07 9.07 0 0 1 3.56-10.1c5.04-3.81 9.88-1.5 12.87.84z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M215.33 523.35l-17.7 10.31a13.87 13.87 0 0 1-1.74-4 75.51 75.51 0 0 1 16.43-9.26 18.88 18.88 0 0 1 3.01 2.95z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M178.6 586.71l-4.63 5.53 5.28 3.49 4.53-5.45-5.18-3.57z"
                        />
                        <path className="cls-40" d="M208.41 602.11l.18 7.2 6.27-.87-.21-7.08-6.24.75z"
                        />
                        <path className="cls-25" d="M214.44 594.79L211 613.44a32.91 32.91 0 0 1-3.9 10.61L181.82 649l-4.28-4.66 21.19-30.46 4-32zM174.37 646.94a.61.61 0 0 1 .89.4 4.73 4.73 0 0 0 2 2.92 2.74 2.74 0 0 0 3.07.4.61.61 0 0 1 .86.26l5 10.29a2.62 2.62 0 0 1 .12 2 .91.91 0 0 1-1.47.39l-13.5-12a1.24 1.24 0 0 1-.06-1.8l2.45-2.49a.71.71 0 0 1 .14-.1z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-38" d="M215.82 580.78l4.27 38.48-5.23 40-6.42.39-1-41.06-7.81-17.13c-.38-1.24-3.81-7.42-4.06-8.73a17.69 17.69 0 0 1 .23-7.49l1.17-4.86zM207.81 664.16a.61.61 0 0 1 .93-.29 4.78 4.78 0 0 0 3.43.87 2.75 2.75 0 0 0 2.57-1.73.61.61 0 0 1 .81-.38l10.58 4.37a2.59 2.59 0 0 1 1.42 1.43.91.91 0 0 1-.85 1.26l-18.07-.09a1.24 1.24 0 0 1-1.23-1.31l.2-3.48a.47.47 0 0 1 0-.17z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M215.82 580.78l-18.89-.44.74-25.68c0-4.22 2.68-9.12 6.9-9.12h.43a11.39 11.39 0 0 1 11.4 11.4z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M203.19 489.39l.21-2.5 9.88 4.13.12 4.39-7.99-1.79-2.22-4.23z"
                        />
                        <path className="cls-25" d="M230 604c2.48 0 5.19-1.54 8.09-4.61 4.57-4.83 6.33-8.6 5.24-11.23-1.36-3.29-6.64-3.46-6.87-3.47a.27.27 0 0 0-.27.27.28.28 0 0 0 .27.29s5.14.17 6.37 3.13c1 2.4-.73 6-5.13 10.62-3.88 4.1-7.35 5.37-10.3 3.76-7.34-4-9.94-25.41-7.37-36.07a23 23 0 0 0 .19-11.39 11.58 11.58 0 0 0-2.83-4.91c-5-5.34-8.07-14.68-8.1-14.77a.27.27 0 0 0-.35-.18.29.29 0 0 0-.18.35c0 .09 3.14 9.55 8.22 15a11 11 0 0 1 2.71 4.67 22.62 22.62 0 0 1-.19 11.12c-2.63 10.84-.14 32.47 7.63 36.69a6 6 0 0 0 2.87.73z"
                            transform="translate(0 -56.34)" />
                        <rect className="cls-25" x="224.14" y="584.06" width="14.85" height="6.39"
                            rx="0.51" ry="0.51" transform="rotate(-22.4 89.37 559.197)" />
                        <path className="cls-40" d="M203.15 561.4l7.45 15.8.14.3a3.08 3.08 0 0 0 1.4 1.43l16.65 6.93 2.46-2.42-15.69-10.67 1.54 1.72-6-16.41z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-33" d="M203.73 565.29L200.22 555a5.58 5.58 0 0 1 3.56-6.64 5 5 0 0 1 6.35 3.1l2.79 10.54z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M247.6 574.54a12.52 12.52 0 0 1 3.05.23 1.07 1.07 0 0 1 .7.32 1 1 0 0 1 .11.61 3.81 3.81 0 0 1-.94 2.57 3.5 3.5 0 0 1-1.17.71 7.73 7.73 0 0 1-3 .59 2.37 2.37 0 0 1-2-.75 1.86 1.86 0 0 1-.21-1.61 3.8 3.8 0 0 1 3.46-2.67z"
                            transform="translate(0 -56.34)" />
                        <path d="M305.82 571.26L250 517.81s-9.08 2.93-7.25 7.18 6.75-6.16 6.75-6.16"
                            strokeWidth="0.5" stroke="#c7d3e5" strokeMiterlimit="10" fill="none" />
                        <path className="cls-20" d="M247.53 573.25a3.1 3.1 0 0 1 1.21.07 6.14 6.14 0 0 1 1.48.55 1.89 1.89 0 0 1 .84.74.82.82 0 0 1-.18 1 .9.9 0 0 1-.9 0 5.27 5.27 0 0 1-.76-.58.28.28 0 0 0-.22-.03c-.1 0-.16.1-.22.18a1.89 1.89 0 0 1-1.7.66 5 5 0 0 1-1.78-.63c-1-.52 0-.77.56-1.08a5.69 5.69 0 0 1 1.67-.88z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M227.14 585.36a.67.67 0 0 0-.34.23.71.71 0 0 0-.1.35 5.29 5.29 0 0 0 1 2.77l1.44 2.47c.2.35.45.74.85.82a1.45 1.45 0 0 0 .62-.07l2.59-.66a2.28 2.28 0 0 0 1.37-.73 2.46 2.46 0 0 0 .28-.8 6.92 6.92 0 0 0 .19-1.29 6.66 6.66 0 0 0-.9-3 7.79 7.79 0 0 0-1-1.63c-.29-.34-.88-.92-1.37-.89s-.91.6-1.28.83a24.92 24.92 0 0 1-3.35 1.6z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M305.48 646.18l10.36 4.14-3.73 8.16s-2.49-2.49-1-4.15a14.22 14.22 0 0 0 2.08-2.76l-13.19-1.8zM318.73 625.4l1.77-7.66.64 1a7.55 7.55 0 0 1 .91 6.62c-.09.25-.16.4-.19.38s-3.13-.34-3.13-.34zM283.79 644.24a20.34 20.34 0 0 1-.56 6.22c-.83 3-.69 10.36 1.52 11.75a11.79 11.79 0 0 0 3.73 1.65s0 1.11-1.79 1.25-8.57-6.63-8.57-6.63.55-5-.28-6.08-8.29-5.95-8.29-5.95l2.35-5.25 3.73-2.07z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M260.85 654.88s3.87-3.87 3.59-5.8-2.44-14.23 3.87-17.08 34.13-2.49 35.23-2.49 13.68-5.53 13.68-5.53l.56-6.49s4.55 3 2.21 7.18c0 0 5.38 2.21 5.66 2.77a24.76 24.76 0 0 1 .83 2.35l3.48 1.13a2.51 2.51 0 0 1 1.63.52c1.52 1.66-3.73 4.15-3.73 4.15l-7.18-.28s-4.84 6.36-8.71 9.54a96.7 96.7 0 0 1-9.67 6.63l-.83 9.12 2.76 3.18s3.46 1 3.6 1.38-1.52 1.1-3.18 1.1-5.53-4.42-5.53-4.42l-2.35-10.09s-11.46-3-14.92-5.11-5.8.56-7.6 3.18-9.53 6.77-9.53 6.77l-2.07 7.19s2.07.69 2.07 1.65-4 .42-4 .42z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-29" d="M271.21 634.3s-7.32-8.16-6.22-10.78 4.29-8.43 4.29-8.43-11.61.55-10.92 10.22 12.85 8.99 12.85 8.99z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-40" d="M312 644.8a73.87 73.87 0 0 1-6.24 4.47 6.88 6.88 0 0 1-.72-6.36 16.46 16.46 0 0 1 4-5.79c2.42-2.51 4.44-5.15 7.25-7.23a17.14 17.14 0 0 1 5.82.63 2.55 2.55 0 0 0 1.44-2.53 4.93 4.93 0 0 0-.71-2.15 11.27 11.27 0 0 1 2.84 1.55 24.76 24.76 0 0 1 .83 2.35l3.48 1.13a2.51 2.51 0 0 1 1.63.52c1.52 1.66-3.73 4.15-3.73 4.15l-7.18-.28s-4.87 6.36-8.71 9.54z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-35" d="M267.91 615.25c-1.3 1.82-3.44 3.23-4.42 5.44-1.41 3.19-1.48 7.12.47 10a7 7 0 0 1 1.38 2.48v.35c-3.23-1-6.65-3.21-7-8.22-.52-7.59 6.53-9.55 9.57-10.05z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M329.62 630.76l.34.11a2.51 2.51 0 0 1 1.63.52c.68.74 0 1.64-.94 2.42z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M307.84 570.52l9.04 14.47-1.26 1.81-11.22-15.02 3.44-1.26z"
                        />
                        <circle className="cls-25" cx="325.09" cy="572.44" r="0.37" />
                        <path className="cls-201" d="M326.38 633.09a1.81 1.81 0 0 0 1.32 1.37"
                            transform="translate(0 -56.34)" />
                        <path d="M1407.56 677.55s8.9 10 11 21.9c-.04 0-18.93-8.09-11-21.9z" transform="translate(0 -56.34)"
                            fill="url(#GradientFill_3)" fillRule="evenodd" />
                        <path fillRule="evenodd" fill="#ccc" d="M1407.25 622.8l6.82 9.36-2.7-2.22.96 2.7 1.43.95.95 1.59v1.74h-.64l1.58.95v.96l-.31.47h-2.06l-1.43-1.58-2.38-1.75-2.38-2.54v-2.54l-.79-2.85.95-5.24z"
                        />
                        <path className="cls-206" d="M1423.4 742.85l8.18-.48-11.49-37.37-41.77-17.47-38.57 1.47-168.17.71-47.49 7.5-8 45.66z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-207" d="M1367.46 658.93s-11.15-8.76-27.65-3.6a69.11 69.11 0 0 0-26.17 14.84s45.63-2.17 53.82-11.24z"
                            transform="translate(0 -56.34)" />
                        <ellipse className="cls-147" cx="1335.68" cy="654.58" rx="9.58" ry="4.87"
                            transform="rotate(-72.49 1297.174 626.426)" />
                        <path className="cls-207" d="M1341.09 649.83s-1.6 2.42-3.19 2-1.54-1.15-3.65 0-2.33-1-2.33-1-2.23 5.12-1.69 7.89 10.1-2.71 10.1-2.71 1.14-4.3.76-6.18z"
                            transform="translate(0 -56.34)" />
                        <path d="M1303.17 622.45l-8.13 1.94-3.93 2.5s22.58 4.58 45.78 37.79l32.86-3.93s-20.52-23.66-66.58-38.3z"
                            transform="translate(0 -56.34)" fill="url(#linear-gradient-95)" fillRule="evenodd"
                            opacity="0.8" />
                        <path className="cls-207" d="M1147.33 642.4s9.85 6.5 11.08 26.5h-19.27z"
                            transform="translate(0 -56.34)" />
                        <path fill="url(#linear-gradient-96)" fillRule="evenodd" opacity="0.5"
                            d="M1205.63 663.46h-28.43l-15.3 15.3h-46.61v-39.95h90.34v24.65z" />
                        <path className="cls-38" d="M1234.39 586.15h1.2v14.32h-1.2zM1230.54 587.36h1.2v15.1h-1.2z"
                        />
                        <path className="cls-207" d="M1234.4 703.63h16.8s3.3-45.28-11.4-51-23.81 7.2-20.75 25.49 3.35 25.51 15.35 25.51zM1226.66 647.43s12 1.93 13.2 0 .3-11.83-6.6-10.63-8.1 1.76-6.6 10.63z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-38" d="M1255.85 584.75h1v11.94h-1zM1252.65 585.76h1v12.59h-1z"
                        />
                        <path className="cls-207" d="M1255.86 692.05h14s2.75-37.74-9.5-42.49-19.84 6-17.3 21.25 2.8 21.24 12.8 21.24zM1249.41 645.21s10 1.6 11 0 .25-9.86-5.5-8.86-6.75 1.46-5.5 8.86z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-207" d="M1190.51 648.33l-31.54 13.33v1.8l32.25-13.43-.71-1.7zM1187.27 645.08l-31.55 13.33v1.81l32.26-13.44-.71-1.7z"
                        />
                        <path className="cls-207" d="M1125.35 649.64l-1.94-1.08c-3.53-.19-15.72 28.24-10.55 32.46 0-.02 16.77-16.74 12.49-31.38z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-207" d="M1162.35 640.76h-24.11v24.11h8.22v11.96h8.33v-11.96h7.56v-24.11z"
                        />
                        <path fill="url(#linear-gradient-97)" fillRule="evenodd" opacity="0.5"
                            d="M1334.57 663.46H1363l15.3 15.3h46.61v-39.95h-90.34v24.65z" />
                        <path className="cls-207" d="M1349.69 648.33l31.54 13.33v1.8l-32.25-13.43.71-1.7zM1352.93 645.08l31.55 13.33v1.81l-32.26-13.44.71-1.7z"
                        />
                        <path className="cls-207" d="M1377.85 640.76h24.11v24.11h-8.22v11.96h-8.33v-11.96h-7.56v-24.11z"
                        />
                        <path className="cls-206" d="M1437.65 727.6l.21-15.87a43.16 43.16 0 0 0-19.21-36.65c-13.56-9-31.53-12.31-48.54-16.15l-32.11 3.56c-13.93-27.13-42.93-38.1-42.93-38.1l8.14-1.94c-66.77-17.5-175.63 0-175.63 0-2.17 3 9.34 3.61 7.25 7.56-15.71 16.43-23.92 60-23.92 60 0 6.07-3.57 12.5-3.57 12.5 1.07 9.64 6.07 40.7 6.07 40.7l5 1.43s-4.69-39.06 29.12-40.32c40.33-1.63 36.93 36 36.93 36h170.75s-.36-37.1 34.63-36c36.86-.42 34.83 39.5 34.83 39.5a36.37 36.37 0 0 0 7.26-1.14c2.41-.56 4.32-1.13 4.32-1.13a5.41 5.41 0 0 0 3.84-4.79l.45-6.28zm-206.07-63.44h-86.47c1.64-10.26 4.54-34 15.19-34.89 8.82-3.36 35.24-4.83 55.2-5.46 6.39-.21 12.12-.33 16.4-.4l4-.06zm5 0l2.86-40.84c7.18-.05 14.54 0 21.93.29a80.81 80.81 0 0 1 28.21 5.95 76.35 76.35 0 0 1 11.83 6.14 81.35 81.35 0 0 1 26.92 28.46z"
                            transform="translate(0 -56.34)" />
                        <path d="M1441.17 725.27l-1 11.47a5.54 5.54 0 0 1-3.91 4.79s-7.66 2.27-11.58 2.27c0 0 2-39.92-34.83-39.5-35-1.07-34.63 36-34.63 36h-170.79s3.4-37.66-36.93-36c-33.81 1.26-29.12 40.32-29.12 40.32l-8.36-2.08s-1.81-11.57-3.52-22.62a68.56 68.56 0 0 1 7.82-1.14c5.73-18.16 18.69-21.76 34.47-22.28 31.73-1 42.59 21 45.52 36.9l149.93-.75c9.39-53 73.41-42.37 87-13.78 0 0 2.36.18 5 .42a5.5 5.5 0 0 1 4.93 5.98z"
                            transform="translate(0 -56.34)" fillRule="evenodd" fill="#c7d3e5" />
                        <path d="M1301.37 635.75a76.35 76.35 0 0 0-11.83-6.14 81.21 81.21 0 0 0-28.21-6c-7.38-.26-14.75-.34-21.92-.29l-2.87 40.84h91.75a81.25 81.25 0 0 0-26.92-28.41zm-69.5-12.28c-4.27.07-10 .18-16.39.39-20 .64-46.38 2.1-55.21 5.46-10.65.93-13.54 24.64-15.18 34.89h86.47l4.34-40.81z"
                            transform="translate(0 -56.34)" opacity="0.75" fill="url(#linear-gradient-98)"
                            fillRule="evenodd" />
                        <path className="cls-207" d="M1319.62 657s-4.29 7.85 1.43 14.28c0 .02 19.95-7.83-1.43-14.28z"
                            transform="translate(0 -56.34)" />
                        <path d="M1430 692.61c-3.74-8.07-9.18-12-16.44-15.77a8.32 8.32 0 0 0-5.4-.88c-5.2 1-4.87 6.31-1.89 11.28s14.93 14.55 21.9 11a4.25 4.25 0 0 0 1.83-5.63z"
                            transform="translate(0 -56.34)" fill="url(#linear-gradient-99)" fillRule="evenodd"
                        />
                        <path className="cls-214" d="M1237.65 675.38v-1.27a1.9 1.9 0 0 1 1.6-2.11l19-.11a1.92 1.92 0 0 1 1.62 2.1v1.26zM1198.56 675.9v-1.26c0-1.17.72-2.12 1.6-2.12l19-.11a1.91 1.91 0 0 1 1.62 2.1v1.26zM1132.13 754.74a26.73 26.73 0 1 0-.19-37.8 26.74 26.74 0 0 0 .19 37.8zm32.65-5.29a19.48 19.48 0 1 1-.14-27.54 19.47 19.47 0 0 1 .14 27.54z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-215" d="M1155.76 740.52a6.78 6.78 0 1 0-9.58 0 6.77 6.77 0 0 0 9.58 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1165.08 672.92l-2.28-3.52-10.41 6.73v-12.4h-4.2v12.4l-10.41-6.73-2.28 3.52 10.93 7.06-10.93 7.06 2.28 3.53 10.41-6.73v12.4h4.2v-12.4l10.41 6.73 2.28-3.53-10.92-7.06 10.92-7.06z"
                        />
                        <path className="cls-40" d="M1156.65 735.75a5.71 5.71 0 1 1-5.71-5.71 5.71 5.71 0 0 1 5.71 5.71z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1153.52 735.75a2.58 2.58 0 1 1-2.58-2.58 2.58 2.58 0 0 1 2.58 2.58z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M1150.94 717.89a17.86 17.86 0 1 0 17.85 17.86 17.86 17.86 0 0 0-17.85-17.86zm0 32a14.14 14.14 0 1 1 14.14-14.13 14.12 14.12 0 0 1-14.14 14.12z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-214" d="M1370.34 754.74a26.73 26.73 0 1 0-.19-37.8 26.74 26.74 0 0 0 .19 37.8zm32.65-5.29a19.48 19.48 0 1 1-.14-27.54 19.47 19.47 0 0 1 .15 27.54z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-215" d="M1394 740.52a6.77 6.77 0 1 0-9.58 0 6.77 6.77 0 0 0 9.58 0z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-1" d="M1403.29 672.92l-2.28-3.52-10.41 6.73v-12.4h-4.2v12.4l-10.41-6.73-2.28 3.52 10.92 7.06-10.92 7.06 2.28 3.53 10.41-6.73v12.4h4.2v-12.4l10.41 6.73 2.28-3.53-10.93-7.06 10.93-7.06z"
                        />
                        <path className="cls-40" d="M1394.86 735.75a5.71 5.71 0 1 1-5.71-5.71 5.71 5.71 0 0 1 5.71 5.71z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-25" d="M1391.73 735.75a2.58 2.58 0 1 1-2.58-2.58 2.59 2.59 0 0 1 2.58 2.58z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-20" d="M1389.15 717.89a17.86 17.86 0 1 0 17.85 17.86 17.86 17.86 0 0 0-17.85-17.86zm0 32a14.14 14.14 0 1 1 14.13-14.13 14.12 14.12 0 0 1-14.13 14.12z"
                            transform="translate(0 -56.34)" />
                        <path className="cls-216" d="M1300 656.17c0 2.91-1.25 5.55-2.93 8h-17.35a18.4 18.4 0 0 0 1.73-2.69 4.66 4.66 0 0 0 .67-3.46c-1-3.29-6.43-1.7-9.1-3.88-2.87-2.37-.76-7 1.74-9.79 4.54-5 9.69-10 14.84-14.78a76.24 76.24 0 0 1 11.82 6.14c-.62.55-1.26 1.08-1.9 1.61-5.11 4.18-11 8.08-13.38 14.25 3.39 1.35 7.33-2.11 10.72-.77 2.02.8 3.07 3.2 3.14 5.37zM1231.89 623.41a4.94 4.94 0 0 1-1 2 77.71 77.71 0 0 1-11.76 11.95c-5.1 4.18-11 8.08-13.37 14.25 3.39 1.35 7.32-2.11 10.72-.77 2 .81 3.1 3.18 3.14 5.38.05 2.9-1.25 5.54-2.92 8h-17.4a18.4 18.4 0 0 0 1.73-2.69 4.62 4.62 0 0 0 .68-3.46c-1-3.29-6.43-1.7-9.11-3.88-2.87-2.37-.75-7 1.74-9.79a288.84 288.84 0 0 1 21.16-20.53c6.39-.27 12.12-.39 16.39-.46z"
                            transform="translate(0 -56.34)" />
                    </g>
                </g>
            </svg>
        );
    };
}

export default Illustration;