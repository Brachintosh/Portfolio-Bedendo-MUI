import { Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React from 'react'

const StarRating = ({stars}) => {
  return (
    <div>
      <Box component='fieldset' borderColor='transparent' >
        <Rating name='read' readOnly value={stars} size='small' />
      </Box>
    </div>
  )
}

export default StarRating;
