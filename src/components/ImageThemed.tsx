import {Box} from "@mui/material";


interface ImageProps {
    src: string,
    alt: string,
    width?: number,
    height?: number,
    theme: 'light' | 'dark' | 'auto',
}

export const ImageThemed = ({src, alt, width = 300, height = 300, theme}: ImageProps) => {
    return (
        <Box
            component={"img"}
            src={src}
            alt={alt}
            sx={{
                width: width ? `${width}px` : 'auto',
                height: height ? `${height}px` : 'auto',
                filter: theme === 'light' ? 'invert(1)' : theme === 'dark' ? 'invert(0)' : 'invert(1)',
                '@media (prefers-color-scheme: dark)': {
                    filter: theme === 'auto' ? 'invert(0)' : undefined,
                },
            }}
        />
    )
}