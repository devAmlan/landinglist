import { nanoid } from "nanoid";
import {
  FaWebflow,
  FiFramer,
  RiNextjsFill,
  FaBrain,
  MdLocalOffer,
  FaShoppingBag,
  RiNotionFill,
  RiTailwindCssFill,
  MdKeyboardCommandKey,
  IoMdMedical,
  PiUsersFill,
} from "@/icons";

export const FilterArray = [
  {
    id: nanoid(),
    icon: MdLocalOffer,
    label: "Free",
    value: "free",
  },
  {
    id: nanoid(),
    icon: FiFramer,
    label: "Framer",
    value: "framer",
  },
  {
    id: nanoid(),
    icon: FaWebflow,
    label: "Webflow",
    value: "webflow",
  },
  {
    id: nanoid(),
    icon: RiNextjsFill,
    label: "Next JS",
    value: "next js",
  },
  {
    id: nanoid(),
    icon: RiTailwindCssFill,
    label: "Tailwind CSS",
    value: "tailwind css",
  },
  {
    id: nanoid,
    icon: PiUsersFill,
    label: "Portfolio",
    value: "portfolio",
  },
  {
    id: nanoid(),
    icon: FaBrain,
    label: "AI",
    value: "ai",
  },
  {
    id: nanoid(),
    icon: FaShoppingBag,
    label: "Ecommerce",
    value: "ecommerce",
  },
  {
    id: nanoid(),
    icon: MdKeyboardCommandKey,
    label: "SAAS",
    value: "saas",
  },
  {
    id: nanoid(),
    icon: RiNotionFill,
    label: "Notion",
    value: "notion",
  },
  {
    id: nanoid(),
    icon: IoMdMedical,
    label: "Health Tech",
    value: "health tech",
  },
];
