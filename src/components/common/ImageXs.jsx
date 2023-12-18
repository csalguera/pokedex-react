// mui components
import { Box } from "@mui/material"

const ImageXs = ({ src, alt, width }) => {
  return (
    <Box
      component='img'
      sx={{
        display: {
          xs: 'flex',
          md: 'none'
        },
        mr: 1
      }}
      src={src}
      alt={alt || ''}
      width={width}
    />
  )
}

export default ImageXs