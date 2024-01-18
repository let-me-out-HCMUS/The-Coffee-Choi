import ProductList from "../features/Dashboard/ProductList/ProductList"
import CloudTeaIntro from "../features/Dashboard/CloudTeaIntro/CloudTeaIntro"
import BlogHome from "../features/Dashboard/BlogHome/BlogHome"

const DashBoard = () => {

  return (
    <div className="max-w-7xl mx-auto">
      <ProductList />
      <CloudTeaIntro />
      <BlogHome />
    </div>
  )
}

export default DashBoard