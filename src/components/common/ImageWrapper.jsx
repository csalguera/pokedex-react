// mui components
import { Box } from "@mui/material"

const ImageWrapper = ({ sx, src, alt, width }) => {
  return (
    <Box
      component='img'
      sx={sx}
      src={src}
      alt={alt || ''}
      width={width}
    />
  )
}

export default ImageWrapper