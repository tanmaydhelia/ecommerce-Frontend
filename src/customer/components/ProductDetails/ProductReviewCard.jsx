import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div className='text-left'>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155fd"}}>R</Avatar>    
                </Box>    
            </Grid> 

            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Tanmay</p>
                        <p className='opacity-70'>December 23, 2023</p>
                    </div>
                </div>
                
                <Rating name='half-rating' value={4.5} precision={0.5} readOnly/>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, itaque.</p>
             </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard