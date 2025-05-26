import {
  HomeMaxRounded,
  ProductionQuantityLimitsRounded,
  CookieRounded,
  NoteRounded,
} from "@mui/icons-material";

export const menuLists = [
  {
    name: "Home",
    path: "/",
    icon: <HomeMaxRounded fontSize="medium" color="info" />,
  },
  {
    name: "Products",
    path: "/products",
    icon: <ProductionQuantityLimitsRounded fontSize="medium" color="info" />,
  },
  {
    name: "Recipes",
    path: "/recipes",
    icon: <CookieRounded fontSize="medium" color="info" />,
  },
  {
    name: "Notes",
    path: "/notes",
    icon: <NoteRounded fontSize="medium" color="info" />,
  },
];
