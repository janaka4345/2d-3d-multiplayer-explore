import MySvgRaw from '@/public/layered-waves-haikei.svg'
export const MySvg = ({ width, height, fill }) => (
    <svg width={width} height={height} fill={fill}>
        {MySvgRaw}
    </svg>
)
