// Define the menu structure
const menuItems = [
  {
    title: "home",
    submenus: ["About Us"],
  },

  {
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
