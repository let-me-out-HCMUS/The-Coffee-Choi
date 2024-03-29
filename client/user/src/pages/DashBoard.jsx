import ProductList from "../features/Dashboard/ProductList/ProductList"
import CloudTeaIntro from "../features/Dashboard/CloudTeaIntro/CloudTeaIntro"
import BlogHome from "../features/Dashboard/BlogHome/BlogHome"
import CarouselBanner from "../features/Dashboard/CarouselBanner/CarouselBann"

const DashBoard = () => {

  return (
    <div>
      <CarouselBanner />
      <ProductList />
      <CloudTeaIntro />
      <BlogHome />
    </div>
  )
}

export default DashBoard