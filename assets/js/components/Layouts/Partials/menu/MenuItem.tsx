interface SubItem {
  id: string;
  label: string;
  i18: string;
}

interface MenuItem {
  id: string;
  label: string;
  i18: string;
  icon: string;
  subItems: SubItem[];
}

const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    i18: "Dashboard",
    icon: "ti-smart-home",
    subItems: [
      { id: "analytics", label: "Analytics", i18: "Analytics" },
      { id: "crm", label: "CRM", i18: "CRM" },
      { id: "ecommerce", label: "eCommerce", i18: "eCommerce" },
    ],
  },
  {
    id: "rolesPerms",
    label: "Roles & Permissions",
    i18: "Roles & Permissions",
    icon: "ti-settings",
    subItems: [
      { id: "roles", label: "Roles", i18: "Roles" },
      { id: "permissions", label: "Permissions", i18: "Permissions" },
    ],
  },
];

export default menuItems;
