import { AiFillHome } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

// Define the menu structure
const menuItems = [
  {
    icon: <AiFillHome></AiFillHome>,
    title: "home",
    submenus: ["About Us"],
  },

  {
    icon: <RiCustomerService2Fill></RiCustomerService2Fill>,

    title: "services",
    submenus: [
      "Score Simulation",
      "Score Analysis",
      "Score Optimization Tips",
      "Program Guidance",
      "Score Tracking",
      "Government Portals",
    ],
  },

  {
    icon: <AiOutlineDeliveredProcedure></AiOutlineDeliveredProcedure>,
    title: "procedures",
    submenus: ["How2CreateAccount", "Simulation"],
  },
];

// Function to reverse submenus for Arabic language
export function reverseSubmenusForArabic(menuItems, isArabicLanguage) {
  if (isArabicLanguage) {
    return menuItems
      .map((item) => ({
        ...item,
        submenus: item.submenus.reverse(),
      }))
      .reverse();
  }
  return menuItems;
}

export default menuItems;
