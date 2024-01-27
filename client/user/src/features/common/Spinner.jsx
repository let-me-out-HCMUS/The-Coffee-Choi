import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <CircularProgress />
    </div>
  )
}

export default Spinner