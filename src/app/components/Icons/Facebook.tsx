import React from "react";

interface FacebookIconProp {
    width?: number;
    height?: number;
    fill?: string;
};

const Facebook: React.FC<FacebookIconProp> = ({width, height, fill}) => {
    return (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={width} 
        height={height}
        viewBox="0 0 104 104" 
        fill="none">
            <path 
            d="M89.375 11.375H14.625C12.8273 11.375 11.375 12.8273 11.375 14.625V89.375C11.375 91.1727 12.8273 92.625 14.625 92.625H89.375C91.1727 92.625 92.625 91.1727 92.625 89.375V14.625C92.625 12.8273 91.1727 11.375 89.375 11.375ZM86.125 86.125H67.4273V61.1609H77.9898L79.5742 48.9023H67.4273V41.0719C67.4273 37.5172 68.4125 35.1 73.5008 35.1H79.9906V24.1313C78.8633 23.9789 75.0141 23.6438 70.525 23.6438C61.1609 23.6438 54.7523 29.3617 54.7523 39.8531V48.8922H44.1695V61.1508H54.7625V86.125H17.875V17.875H86.125V86.125Z" 
            fill={fill}
            />
        </svg>
    )
}

export default Facebook