import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


const BreadcrumbsProduct = ({productName}) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
        <Link
            underline='none'
            color="black"
            href="/"
            fontSize={15}
            fontWeight={700}
        >
            Menu
        </Link>
        <Link
            underline='none'
            color="black"
            href="/"
            fontSize={15}
            fontWeight={700}
        >
            Sản phẩm hot trang chủ
        </Link>
            <Typography color="text.primary" fontSize={15}>{productName}</Typography>
        </Breadcrumbs>
  )
}

export default BreadcrumbsProduct