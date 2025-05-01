interface ArrowIconProps {
    width?: number;
    height?: number;
}

const Arrow: React.FC<ArrowIconProps> = ({ width, height, }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
        width={width} 
        height={height}
        viewBox="0 0 44 56" 
        fill="none">
            <path d="M22 54L42 34.5M22 54L2 34.5M22 54L22 19.875M22 2L22 10.125" stroke="#08E6F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )

}

export default Arrow