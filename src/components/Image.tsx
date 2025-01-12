import '../styles/Image.css'


interface ImageProps {
    src: string,
    alt: string,
    width?: number,
    height?: number,
    theme: 'light' | 'dark'
}

export const ImageThemed = ({src, alt, width = 300, height = 300, theme}: ImageProps) => {
    return (
        <img
            src={src}
            alt={alt}
            className={theme}
            style={{width: width ? `${width}px` : 'auto', height: height ? `${height}px` : 'auto'}}
        />
    )
}