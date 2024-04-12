import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={225}
        height={2376}
        fill="none"
        ref={ref}
        {...props}
    >
        <path fill="#1E1E1E" d="M0 0h225v2376H0z" />
        <g clipPath="url(#a)">
            <path
                fill="#A35318"
                d="M151.942 211.412s19.257 32.717 24.938 34.035c5.682 1.317-10.029 12.532-11.523 10.438l-23.616-33.083 10.201-11.39ZM50.924 209.846s14.58 35.329 20.019 37.431c5.44 2.104-11.81 10.771-12.994 8.489L39.22 219.688l11.704-9.842ZM214.306 147.953s1.092 27.72-29.778 27.14c-4.052-.964 0-11.769 0-11.769l29.778-15.371Z"
            />
            <path
                fill="#391F0A"
                d="M39.434 188.407s-8.702-13.373-14.684-26.88c-2.315 10.227 5.422 37.105 5.422 37.105l9.262-10.225Z"
            />
            <path
                fill="#533420"
                d="M201.257 171.565c-2.479 0-8.238-.39-9.971-3.897l.863-.426c1.896 3.842 10.099 3.334 10.185 3.334l.063.959c-.074.005-.497.03-1.14.03Z"
            />
            <path
                fill="#603814"
                d="M214.306 147.953s-22.254.899-36.531-16.464c-5.595-5.211-8.875-4.116-17.751-1.286-8.876 2.829-22.999 22.961-24.331 40.39-1.33 17.428-85.26 10.159-95.809 16.27-10.548 6.111-14.74 19.155-15.89 25.587-1.148 6.432-18.501 40.004-17.985 43.864.516 3.86 20.46 8.312 16.602 3.938-3.859-4.375 13.93-24.57 26.793-31.518 12.862-6.945 66.629 9.004 93.385 7.975.773 4.973-16.378 16.912-15.862 21.543.515 4.631 23.524 4.478 19.666-.667-3.859-5.145 15.491-23.707 17.549-28.593 2.057-4.889 18.008-18.008 22.895-63.179 9.775-1.138 27.269-17.86 27.269-17.86Z"
            />
            <path
                fill="#2D1306"
                d="M188.635 144.292c1.857.815 2.646 3.114 1.759 5.138-.887 2.018-3.109 2.996-4.965 2.184-1.859-.816-2.646-3.112-1.76-5.134.884-2.022 3.107-3.001 4.966-2.188Z"
            />
            <path
                fill="#FDFEFF"
                d="M186.141 144.455c1.121.489 1.599 1.879 1.063 3.104-.534 1.219-1.88 1.81-3.003 1.318-1.121-.49-1.599-1.881-1.063-3.102.536-1.221 1.881-1.813 3.003-1.32Z"
            />
            <path
                fill="#391F0A"
                d="M207.054 147.813c2.378-.801 10.563-.259 10.604 1.063.039 1.326-5.537 5.491-6.93 5.335-1.391-.152-5.285-6.127-3.674-6.398Z"
            />
            <path
                fill="#409F91"
                d="M168.063 189.586c3.062.342 11.614.186 16.677-.09 5.064-.279 3.683-12.598.541-12.059-.516 1.223-.942 4.062-.942 4.062-28.284 1.431-45.375-18.779-46.919-21.268-1.541-2.499-7.863 2.586-5.62 6.331 2.239 3.75 9.967 20.088 36.263 23.024Z"
            />
            <path
                fill="#46260F"
                d="M174.236 135.432c5.402-11.521-24.695-12.416-28.812 3.583-4.117 16.001-9.262 58.396 12.21 65.82 20.976 4.557 11.2-57.883 16.602-69.403Z"
            />
            <path
                fill="#A35318"
                d="M167.311 474.499s-4.938 37.641-1.268 42.174c3.671 4.533-15.615 3.714-15.506 1.144l1.725-40.611 15.049-2.707ZM62.6 473.621s-4.185 37.99-.424 42.445c3.761 4.458-15.532 3.774-15.475 1.203l.905-40.64 14.994-3.008ZM214.13 410.945s1.092 27.72-29.778 27.14c-4.052-.964 0-11.769 0-11.769l29.778-15.371Z"
            />
            <path
                fill="#391F0A"
                d="M39.258 451.399s-16.4-12.928-22.382-26.435c-2.315 10.227 13.12 36.66 13.12 36.66l9.262-10.225Z"
            />
            <path
                fill="#533420"
                d="M201.081 434.558c-2.479 0-8.238-.39-9.971-3.897l.863-.426c1.896 3.842 10.099 3.334 10.185 3.334l.063.959c-.074.004-.496.03-1.14.03Z"
            />
            <path
                fill="#603814"
                d="M214.13 410.945s-22.254.899-36.531-16.464c-5.595-5.211-8.875-4.116-17.751-1.286-8.876 2.829-22.999 22.961-24.331 40.39-1.33 17.428-85.26 10.159-95.809 16.27-10.548 6.111-14.74 19.155-15.89 25.587-1.148 6.432-18.501 40.004-17.985 43.864.516 3.86 20.46 8.312 16.602 3.938-3.859-4.375 13.93-24.57 26.793-31.518 12.862-6.945 66.629 9.004 93.385 7.975.773 4.973-16.378 16.912-15.862 21.543.515 4.631 23.524 4.478 19.666-.667-3.859-5.145 15.491-23.707 17.549-28.593 2.057-4.889 18.008-18.008 22.895-63.179 9.776-1.137 27.269-17.86 27.269-17.86Z"
            />
            <path
                fill="#2D1306"
                d="M188.459 407.284c1.857.815 2.646 3.114 1.759 5.138-.887 2.018-3.109 2.996-4.965 2.184-1.859-.816-2.646-3.112-1.76-5.134.884-2.021 3.108-3 4.966-2.188Z"
            />
            <path
                fill="#FDFEFF"
                d="M185.965 407.447c1.121.489 1.599 1.879 1.063 3.104-.534 1.219-1.88 1.81-3.003 1.318-1.121-.49-1.599-1.881-1.063-3.102.536-1.22 1.881-1.812 3.003-1.32Z"
            />
            <path
                fill="#391F0A"
                d="M206.878 410.806c2.378-.801 10.563-.259 10.604 1.063.039 1.326-5.537 5.491-6.93 5.335-1.391-.152-5.284-6.127-3.674-6.398Z"
            />
            <path
                fill="#409F91"
                d="M167.888 452.579c3.062.342 11.614.186 16.677-.09 5.064-.279 3.683-12.598.541-12.059-.516 1.223-.942 4.062-.942 4.062-28.284 1.431-45.375-18.779-46.919-21.268-1.541-2.499-7.863 2.586-5.62 6.331 2.238 3.75 9.966 20.088 36.263 23.024Z"
            />
            <path
                fill="#46260F"
                d="M174.061 398.425c5.402-11.521-24.695-12.416-28.812 3.583-4.117 16.001-9.262 58.396 12.21 65.82 20.976 4.557 11.199-57.884 16.602-69.403Z"
            />
            <path
                fill="#A35318"
                d="M161.935 748.048s-26.329 27.35-26.069 33.176c.261 5.827-14.769-6.287-13.154-8.289l25.509-31.648 13.714 6.761ZM50.022 752.446s-30.382 23.187-31.013 28.983c-.631 5.798-13.449-8.638-11.549-10.371l30.039-27.387 12.523 8.775ZM214.827 676.019s1.092 27.72-29.778 27.14c-4.052-.964 0-11.769 0-11.769l29.778-15.371Z"
            />
            <path
                fill="#391F0A"
                d="M39.955 716.473s-21.724-5.497-27.705-19.003c-2.315 10.227 18.443 29.229 18.443 29.229l9.262-10.226Z"
            />
            <path
                fill="#533420"
                d="M201.778 699.631c-2.479 0-8.238-.39-9.971-3.897l.863-.426c1.896 3.842 10.099 3.334 10.185 3.334l.063.959c-.073.004-.496.03-1.14.03Z"
            />
            <path
                fill="#603814"
                d="M214.827 676.019s-22.254.899-36.531-16.464c-5.595-5.211-8.875-4.116-17.751-1.286-8.876 2.829-22.999 22.961-24.331 40.39-1.33 17.428-85.26 10.159-95.809 16.27-10.548 6.111-14.74 19.155-15.89 25.587-1.148 6.432 1.225 41.752 1.74 45.612.515 3.86 21.867 4.375 18.009 0-3.859-4.375-7.203-22.381 5.66-29.328 12.862-6.945 66.629 9.004 93.385 7.975.773 4.973 2.828 16.723 3.344 21.354.515 4.631 20.451 4.758 16.593-.387-3.859-5.145-.642-23.797 1.416-28.684 2.057-4.889 18.008-18.008 22.895-63.179 9.777-1.138 27.27-17.86 27.27-17.86Z"
            />
            <path
                fill="#2D1306"
                d="M189.156 672.357c1.857.815 2.646 3.114 1.759 5.138-.887 2.018-3.109 2.996-4.965 2.184-1.859-.816-2.646-3.112-1.76-5.134.884-2.021 3.108-3 4.966-2.188Z"
            />
            <path
                fill="#FDFEFF"
                d="M186.662 672.521c1.121.489 1.599 1.879 1.063 3.104-.534 1.219-1.88 1.81-3.003 1.318-1.121-.49-1.599-1.881-1.063-3.102.536-1.221 1.881-1.813 3.003-1.32Z"
            />
            <path
                fill="#391F0A"
                d="M207.575 675.879c2.378-.801 10.563-.259 10.604 1.063.039 1.326-5.537 5.491-6.93 5.335-1.391-.152-5.284-6.127-3.674-6.398Z"
            />
            <path
                fill="#409F91"
                d="M168.585 717.652c3.062.342 11.614.186 16.677-.09 5.064-.279 3.683-12.598.541-12.059-.516 1.223-.942 4.062-.942 4.062-28.284 1.431-45.375-18.779-46.919-21.268-1.541-2.499-7.863 2.586-5.62 6.331 2.239 3.75 9.966 20.088 36.263 23.024Z"
            />
            <path
                fill="#46260F"
                d="M174.758 663.498c5.402-11.521-24.695-12.416-28.812 3.583-4.117 16.001-9.262 58.396 12.21 65.82 20.976 4.557 11.199-57.883 16.602-69.403Z"
            />
            <path
                fill="#A35318"
                d="M160.36 1016.4s-26.369 27.32-26.118 33.14c.252 5.83-14.759-6.31-13.142-8.31l25.555-31.61 13.705 6.78ZM54.876 1016.13s-26.284 27.75-25.979 33.57c.304 5.82-14.658-6.38-13.059-8.39 1.601-2.02 25.272-31.84 25.272-31.84l13.766 6.66ZM213.749 941.894s1.092 27.72-29.778 27.14c-4.052-.964 0-11.769 0-11.769l29.778-15.371Z"
            />
            <path
                fill="#391F0A"
                d="M38.877 982.348s-16.4-12.928-22.382-26.435c-2.315 10.227 13.12 36.66 13.12 36.66l9.262-10.225Z"
            />
            <path
                fill="#533420"
                d="M200.7 965.506c-2.479 0-8.238-.39-9.971-3.897l.863-.426c1.896 3.842 10.099 3.334 10.185 3.334l.063.959c-.073.005-.496.03-1.14.03Z"
            />
            <path
                fill="#603814"
                d="M213.749 941.894s-22.254.899-36.531-16.464c-5.595-5.211-8.875-4.116-17.751-1.286-8.876 2.829-22.999 22.961-24.331 40.39-1.33 17.428-85.26 10.159-95.809 16.27-10.548 6.111-15.926 29.016-17.075 35.446-1.148 6.43 24.535 32.15 20.047 37.31-2.555 2.94 26.818-.84 22.96-5.21-3.859-4.38-19.901-20.47-7.038-27.42 12.862-6.94 57.255 10.75 84.011 9.72.773 4.97 24.182 14.97 24.697 19.6.515 4.64 21.544 3.24 17.686-1.9-3.859-5.15-23.088-20.53-21.03-25.42 2.057-4.89 18.008-18.01 22.895-63.178 9.776-1.135 27.269-17.858 27.269-17.858Z"
            />
            <path
                fill="#2D1306"
                d="M188.078 938.233c1.857.815 2.646 3.114 1.759 5.138-.887 2.018-3.109 2.996-4.965 2.184-1.859-.816-2.646-3.112-1.76-5.134.884-2.021 3.108-3.001 4.966-2.188Z"
            />
            <path
                fill="#FDFEFF"
                d="M185.584 938.396c1.121.489 1.599 1.879 1.063 3.104-.534 1.219-1.88 1.81-3.003 1.318-1.121-.49-1.599-1.881-1.063-3.102.536-1.22 1.881-1.812 3.003-1.32Z"
            />
            <path
                fill="#391F0A"
                d="M206.497 941.754c2.378-.801 10.563-.259 10.604 1.063.039 1.326-5.537 5.491-6.93 5.335-1.391-.152-5.284-6.126-3.674-6.398Z"
            />
            <path
                fill="#409F91"
                d="M167.507 983.528c3.062.342 11.614.186 16.677-.09 5.064-.279 3.683-12.598.541-12.059-.516 1.223-.942 4.062-.942 4.062-28.284 1.431-45.375-18.779-46.919-21.268-1.541-2.499-7.863 2.586-5.62 6.331 2.238 3.749 9.966 20.087 36.263 23.024Z"
            />
            <path
                fill="#46260F"
                d="M173.68 929.374c5.402-11.521-24.695-12.416-28.812 3.583-4.117 16.001-9.262 58.396 12.21 65.82 20.976 4.553 11.199-57.884 16.602-69.403Z"
            />
            <path
                fill="#A35318"
                d="M173.873 1267.96s-3.336 37.82.522 42.19c3.859 4.38-15.443 4.38-15.443 1.81v-40.65l14.921-3.35ZM61.709 1269.77s-3.336 38.07.522 42.44c3.859 4.38-15.444 4.12-15.444 1.55v-40.65l14.922-3.34ZM213.749 1207.25s1.092 27.72-29.778 27.14c-4.052-.96 0-11.77 0-11.77l29.778-15.37Z"
            />
            <path
                fill="#391F0A"
                d="M38.877 1247.71s-9.768-15.34-15.75-28.84c-2.315 10.22 6.488 39.06 6.488 39.06l9.262-10.22Z"
            />
            <path
                fill="#533420"
                d="M200.7 1230.86c-2.479 0-8.238-.39-9.971-3.89l.863-.43c1.896 3.84 10.099 3.34 10.185 3.34l.063.95c-.073.01-.496.03-1.14.03Z"
            />
            <path
                fill="#603814"
                d="M213.749 1207.25s-22.254.9-36.531-16.46c-5.595-5.21-8.875-4.12-17.751-1.29-8.876 2.83-22.999 22.96-24.331 40.39-1.33 17.43-85.26 10.16-95.809 16.27-10.548 6.11-14.74 19.16-15.89 25.59-1.148 6.43 1.225 41.75 1.74 45.61.515 3.86 21.867 4.38 18.009 0-3.859-4.37-7.203-22.38 5.66-29.33 12.862-6.94 66.629 9.01 93.385 7.98.773 4.97 2.828 16.72 3.344 21.35.515 4.63 20.451 4.76 16.593-.39-3.859-5.14-.642-23.79 1.416-28.68 2.057-4.89 18.008-18.01 22.895-63.18 9.777-1.13 27.27-17.86 27.27-17.86Z"
            />
            <path
                fill="#2D1306"
                d="M188.078 1203.59c1.857.82 2.646 3.12 1.759 5.14-.887 2.02-3.109 3-4.965 2.18-1.859-.81-2.646-3.11-1.76-5.13.884-2.02 3.108-3 4.966-2.19Z"
            />
            <path
                fill="#FDFEFF"
                d="M185.584 1203.75c1.121.49 1.599 1.88 1.063 3.11-.534 1.22-1.88 1.81-3.003 1.32-1.121-.49-1.599-1.88-1.063-3.11.536-1.22 1.881-1.81 3.003-1.32Z"
            />
            <path
                fill="#391F0A"
                d="M206.497 1207.11c2.378-.8 10.563-.26 10.604 1.06.039 1.33-5.537 5.5-6.93 5.34-1.391-.15-5.284-6.13-3.674-6.4Z"
            />
            <path
                fill="#409F91"
                d="M167.507 1248.89c3.062.34 11.614.18 16.677-.09 5.064-.28 3.683-12.6.541-12.06-.516 1.22-.942 4.06-.942 4.06-28.284 1.43-45.375-18.78-46.919-21.27-1.541-2.5-7.863 2.59-5.62 6.33 2.238 3.75 9.966 20.09 36.263 23.03Z"
            />
            <path
                fill="#46260F"
                d="M173.68 1194.73c5.402-11.52-24.695-12.41-28.812 3.58-4.117 16.01-9.262 58.4 12.21 65.82 20.976 4.56 11.199-57.88 16.602-69.4Z"
            />
            <path
                fill="#A35318"
                d="M151.954 1532.84s19.257 32.72 24.938 34.04c5.682 1.31-10.029 12.53-11.523 10.43-1.494-2.09-23.616-33.08-23.616-33.08l10.201-11.39ZM50.936 1531.27s14.58 35.33 20.019 37.44c5.44 2.1-11.81 10.77-12.994 8.48-1.187-2.28-18.729-36.07-18.729-36.07l11.704-9.85ZM214.317 1469.38s1.092 27.72-29.778 27.14c-4.052-.96 0-11.77 0-11.77l29.778-15.37Z"
            />
            <path
                fill="#391F0A"
                d="M39.445 1509.84s-16.4-12.93-22.382-26.44c-2.315 10.23 13.12 36.66 13.12 36.66l9.262-10.22Z"
            />
            <path
                fill="#533420"
                d="M201.269 1492.99c-2.479 0-8.238-.39-9.971-3.89l.863-.43c1.896 3.84 10.099 3.34 10.185 3.34l.063.95c-.074.01-.497.03-1.14.03Z"
            />
            <path
                fill="#603814"
                d="M214.317 1469.38s-22.254.9-36.531-16.46c-5.595-5.21-8.875-4.12-17.751-1.29-8.876 2.83-22.999 22.96-24.331 40.39-1.33 17.43-85.26 10.16-95.809 16.27-10.548 6.11-14.74 19.16-15.89 25.59-1.148 6.43-18.501 40-17.985 43.86.516 3.86 20.46 8.32 16.602 3.94-3.859-4.37 13.93-24.57 26.793-31.52 12.862-6.94 66.629 9.01 93.385 7.98.773 4.97-16.378 16.91-15.862 21.54.515 4.63 23.524 4.48 19.666-.66-3.859-5.15 15.491-23.71 17.549-28.6 2.057-4.89 18.008-18.01 22.895-63.18 9.776-1.13 27.269-17.86 27.269-17.86Z"
            />
            <path
                fill="#2D1306"
                d="M188.646 1465.72c1.857.82 2.646 3.12 1.759 5.14-.887 2.02-3.109 3-4.965 2.18-1.859-.81-2.646-3.11-1.76-5.13.884-2.02 3.108-3 4.966-2.19Z"
            />
            <path
                fill="#FDFEFF"
                d="M186.152 1465.88c1.121.49 1.599 1.88 1.063 3.11-.534 1.22-1.88 1.81-3.003 1.32-1.121-.49-1.599-1.88-1.063-3.11.537-1.22 1.881-1.81 3.003-1.32Z"
            />
            <path
                fill="#391F0A"
                d="M207.065 1469.24c2.378-.8 10.563-.26 10.604 1.07.039 1.32-5.537 5.49-6.93 5.33-1.39-.15-5.284-6.13-3.674-6.4Z"
            />
            <path
                fill="#409F91"
                d="M168.075 1511.02c3.062.34 11.614.18 16.677-.09 5.064-.28 3.683-12.6.541-12.06-.516 1.22-.942 4.06-.942 4.06-28.284 1.43-45.375-18.78-46.919-21.27-1.541-2.5-7.863 2.59-5.62 6.33 2.239 3.75 9.966 20.09 36.263 23.03Z"
            />
            <path
                fill="#46260F"
                d="M174.248 1456.86c5.402-11.52-24.695-12.42-28.812 3.58-4.117 16-9.262 58.4 12.21 65.82 20.976 4.56 11.2-57.88 16.602-69.4Z"
            />
            <path
                fill="#A35318"
                d="M167.498 1798.44s-4.938 37.65-1.268 42.18c3.671 4.53-15.615 3.71-15.506 1.14l1.725-40.61 15.049-2.71ZM62.787 1797.57s-4.185 37.99-.424 42.44c3.761 4.46-15.532 3.78-15.475 1.21l.905-40.64 14.994-3.01ZM214.317 1734.89s1.092 27.72-29.778 27.14c-4.052-.96 0-11.77 0-11.77l29.778-15.37Z"
            />
            <path
                fill="#391F0A"
                d="M39.445 1775.35s-20.214-3.34-26.195-16.85c-2.315 10.23 16.934 27.07 16.934 27.07l9.261-10.22Z"
            />
            <path
                fill="#533420"
                d="M201.269 1758.51c-2.479 0-8.238-.39-9.971-3.9l.863-.43c1.896 3.84 10.099 3.34 10.185 3.34l.063.96c-.074 0-.497.03-1.14.03Z"
            />
            <path
                fill="#603814"
                d="M214.317 1734.89s-22.254.9-36.531-16.46c-5.595-5.21-8.875-4.12-17.751-1.29-8.876 2.83-22.999 22.96-24.331 40.39-1.33 17.43-85.26 10.16-95.809 16.27-10.548 6.11-14.74 19.16-15.89 25.59-1.148 6.43-18.501 40-17.985 43.86.516 3.86 20.46 8.31 16.602 3.94-3.859-4.37 13.93-24.57 26.793-31.52 12.862-6.94 66.629 9.01 93.385 7.98.773 4.97-16.378 16.91-15.862 21.54.515 4.63 23.524 4.48 19.666-.67-3.859-5.14 15.491-23.7 17.549-28.59 2.057-4.89 18.008-18.01 22.895-63.18 9.776-1.14 27.269-17.86 27.269-17.86Z"
            />
            <path
                fill="#2D1306"
                d="M188.646 1731.23c1.857.82 2.646 3.11 1.759 5.14-.887 2.02-3.109 2.99-4.965 2.18-1.859-.81-2.646-3.11-1.76-5.13.884-2.02 3.108-3 4.966-2.19Z"
            />
            <path
                fill="#FDFEFF"
                d="M186.152 1731.39c1.121.49 1.599 1.88 1.063 3.11-.534 1.22-1.88 1.81-3.003 1.32-1.121-.49-1.599-1.88-1.063-3.11.537-1.22 1.881-1.81 3.003-1.32Z"
            />
            <path
                fill="#391F0A"
                d="M207.065 1734.75c2.378-.8 10.563-.26 10.604 1.07.039 1.32-5.537 5.49-6.93 5.33-1.39-.15-5.284-6.13-3.674-6.4Z"
            />
            <path
                fill="#409F91"
                d="M168.075 1776.53c3.062.34 11.614.18 16.677-.09 5.064-.28 3.683-12.6.541-12.06-.516 1.22-.942 4.06-.942 4.06-28.284 1.43-45.375-18.78-46.919-21.27-1.541-2.5-7.863 2.59-5.62 6.33 2.239 3.75 9.966 20.09 36.263 23.03Z"
            />
            <path
                fill="#46260F"
                d="M174.248 1722.37c5.402-11.52-24.695-12.41-28.812 3.59-4.117 16-9.262 58.39 12.21 65.82 20.976 4.55 11.2-57.89 16.602-69.41Z"
            />
            <path
                fill="#A35318"
                d="M161.675 2068.95s-26.329 27.35-26.069 33.17c.261 5.83-14.769-6.28-13.154-8.29 1.614-2 25.509-31.64 25.509-31.64l13.714 6.76ZM49.763 2073.34s-30.382 23.19-31.013 28.99c-.631 5.79-13.449-8.64-11.549-10.37 1.902-1.74 30.039-27.39 30.039-27.39l12.523 8.77ZM214.567 1996.92s1.092 27.72-29.778 27.14c-4.052-.97 0-11.77 0-11.77l29.778-15.37Z"
            />
            <path
                fill="#391F0A"
                d="M39.695 2037.37s-16.4-12.93-22.382-26.43c-2.315 10.22 13.12 36.65 13.12 36.65l9.262-10.22Z"
            />
            <path
                fill="#533420"
                d="M201.519 2020.53c-2.479 0-8.238-.39-9.971-3.9l.863-.43c1.896 3.85 10.099 3.34 10.185 3.34l.063.96c-.074 0-.497.03-1.14.03Z"
            />
            <path
                fill="#603814"
                d="M214.567 1996.92s-22.254.9-36.531-16.47c-5.595-5.21-8.875-4.11-17.751-1.28-8.876 2.83-22.999 22.96-24.331 40.39-1.33 17.42-85.26 10.16-95.809 16.27-10.548 6.11-14.74 19.15-15.89 25.58-1.148 6.44 1.225 41.76 1.74 45.61.515 3.86 21.867 4.38 18.009 0-3.859-4.37-7.203-22.38 5.66-29.32 12.862-6.95 66.629 9 93.385 7.97.773 4.98 2.828 16.72 3.344 21.36.515 4.63 20.451 4.75 16.593-.39-3.859-5.15-.642-23.8 1.416-28.68 2.057-4.89 18.008-18.01 22.895-63.18 9.777-1.14 27.27-17.86 27.27-17.86Z"
            />
            <path
                fill="#2D1306"
                d="M188.896 1993.26c1.857.81 2.646 3.11 1.759 5.13s-3.109 3-4.965 2.19c-1.859-.82-2.646-3.11-1.76-5.14.884-2.02 3.108-3 4.966-2.18Z"
            />
            <path
                fill="#FDFEFF"
                d="M186.402 1993.42c1.121.49 1.599 1.88 1.063 3.1-.534 1.22-1.88 1.81-3.003 1.32-1.121-.49-1.599-1.88-1.063-3.1.537-1.22 1.881-1.81 3.003-1.32Z"
            />
            <path
                fill="#391F0A"
                d="M207.315 1996.78c2.378-.81 10.563-.26 10.604 1.06.039 1.32-5.537 5.49-6.93 5.33-1.39-.15-5.284-6.12-3.674-6.39Z"
            />
            <path
                fill="#409F91"
                d="M168.325 2038.55c3.062.34 11.614.19 16.677-.09 5.064-.28 3.683-12.6.541-12.06-.516 1.22-.942 4.06-.942 4.06-28.284 1.43-45.375-18.78-46.919-21.27-1.541-2.49-7.863 2.59-5.62 6.34 2.239 3.74 9.966 20.08 36.263 23.02Z"
            />
            <path
                fill="#46260F"
                d="M174.498 1984.4c5.402-11.53-24.695-12.42-28.812 3.58-4.117 16-9.262 58.4 12.21 65.82 20.976 4.56 11.2-57.89 16.602-69.4Z"
            />
            <path
                fill="#A35318"
                d="M160.101 2337.3s-26.369 27.31-26.118 33.14c.252 5.83-14.759-6.31-13.142-8.31l25.555-31.61 13.705 6.78ZM54.616 2337.03s-26.284 27.74-25.979 33.57c.304 5.82-14.658-6.38-13.059-8.39 1.601-2.02 25.272-31.84 25.272-31.84l13.766 6.66ZM213.489 2262.79s1.092 27.72-29.778 27.14c-4.052-.96 0-11.77 0-11.77l29.778-15.37Z"
            />
            <path
                fill="#391F0A"
                d="M38.617 2303.25s-16.4-12.93-22.382-26.44c-2.315 10.23 13.12 36.66 13.12 36.66l9.262-10.22Z"
            />
            <path
                fill="#533420"
                d="M200.44 2286.4c-2.479 0-8.238-.39-9.971-3.89l.863-.43c1.896 3.84 10.099 3.34 10.185 3.34l.063.95c-.073.01-.496.03-1.14.03Z"
            />
            <path
                fill="#603814"
                d="M213.489 2262.79s-22.254.9-36.531-16.46c-5.595-5.21-8.875-4.12-17.751-1.29-8.876 2.83-22.999 22.96-24.331 40.39-1.33 17.43-85.26 10.16-95.809 16.27-10.548 6.11-15.926 29.02-17.075 35.45-1.148 6.43 24.535 32.15 20.047 37.31-2.555 2.94 26.818-.84 22.96-5.22-3.859-4.37-19.901-20.47-7.038-27.41 12.862-6.95 57.255 10.74 84.011 9.72.773 4.97 24.182 14.97 24.697 19.6.515 4.63 21.544 3.24 17.686-1.91-3.859-5.14-23.088-20.52-21.03-25.41 2.057-4.89 18.008-18.01 22.895-63.18 9.776-1.14 27.269-17.86 27.269-17.86Z"
            />
            <path
                fill="#2D1306"
                d="M187.818 2259.13c1.857.82 2.646 3.11 1.759 5.14-.887 2.02-3.109 2.99-4.965 2.18-1.859-.81-2.646-3.11-1.76-5.13.884-2.02 3.108-3 4.966-2.19Z"
            />
            <path
                fill="#FDFEFF"
                d="M185.324 2259.29c1.121.49 1.599 1.88 1.063 3.11-.534 1.22-1.88 1.81-3.003 1.32-1.121-.49-1.599-1.89-1.063-3.11s1.881-1.81 3.003-1.32Z"
            />
            <path
                fill="#391F0A"
                d="M206.237 2262.65c2.378-.8 10.563-.26 10.604 1.07.039 1.32-5.537 5.49-6.93 5.33-1.39-.15-5.284-6.13-3.674-6.4Z"
            />
            <path
                fill="#409F91"
                d="M167.247 2304.43c3.062.34 11.614.18 16.677-.09 5.064-.28 3.683-12.6.541-12.06-.516 1.22-.942 4.06-.942 4.06-28.284 1.43-45.375-18.78-46.919-21.27-1.541-2.5-7.863 2.59-5.62 6.33 2.239 3.75 9.966 20.09 36.263 23.03Z"
            />
            <path
                fill="#46260F"
                d="M173.42 2250.27c5.402-11.52-24.695-12.42-28.812 3.58-4.117 16-9.262 58.4 12.21 65.83 20.976 4.55 11.2-57.89 16.602-69.41Z"
            />
        </g>
        {/* <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h224.334v2375.5H0z" />
            </clipPath>
        </defs> */}
    </svg>
)
const ForwardRefDogWalk = forwardRef(SvgComponent)
const DogWalk = memo(ForwardRefDogWalk)
export default DogWalk
