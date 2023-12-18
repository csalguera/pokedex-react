// mui components
import { Box } from "@mui/material"

const ImageMd = ({ src, alt, width }) => {
  return (
    <Box
      component='img'
      sx={{
        display: {
          xs: 'none',
          md: 'flex'
        },
        mr: 1,
      }}
      src={src}
      alt={alt || ''}
      width={width}
    />
  )
}

export default ImageMd