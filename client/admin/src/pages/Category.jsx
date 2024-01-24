import DashboardLayout from "../features/dashboard/DashboardLayout";
import Row from "../features/dashboard/Row";
import ItemCategory from "../features/dashboard/category/ItemCategory";

import {
  faCookieBite,
  faCookie,
  faMugHot,
  faMugSaucer,
  faSeedling,
  faCannabis,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  {
    name: "Cà phê",
    slug: "ca-phe",
    icon: faMugHot,
  },

  {
    name: "Trà",
    slug: "tra",
    icon: faSeedling,
  },
  {
    name: "Cloud",
    slug: "cloud",
    icon: faMugHot,
  },
  {
    name: "Hi-Tea Healthy",
    slug: "hi-tea-healthy",
    icon: faCannabis,
  },
  {
    name: "Trà - Chocolate",
    slug: "tra-xanh-chocolate",
    icon: faCookie,
  },
  {
    name: "Thức uống đá xay",
    slug: "thuc-uong-da-xay",
    icon: faMugSaucer,
  },
  {
    name: "Bánh & Snack",
    slug: "banh-snack",
    icon: faCookieBite,
  },
];

export default function Category() {
  return (
    <DashboardLayout>
      <Row
        sx={{
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: 1,
        }}
      >
        {categories.map((category) => (
          <ItemCategory key={category.slug} category={category} />
        ))}
      </Row>
    </DashboardLayout>
  );
}
