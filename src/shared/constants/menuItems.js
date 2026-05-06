import { v4 as uuid } from "uuid";

const menuItems = [
  {
    id: uuid(),
    href: "/",
    text: "Main Page",
  },
  {
    id: uuid(),
    href: "/categories",
    text: "Categories",
  },
  {
    id: uuid(),
    href: "/all-products",
    text: "All products",
  },
  {
    id: uuid(),
    href: "/all-sales",
    text: "All sales",
  },
];

export default menuItems;
