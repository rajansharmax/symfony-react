interface SubItem {
  id: string;
  label: string;
  i18: string;
  url: string;
}

interface MenuItem {
  id: string;
  label: string;
  i18: string;
  icon: string;
  url: string;
  subItems: SubItem[];
}

const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    i18: "Dashboard",
    icon: "ti-smart-home",
    url: "dashboard",
    subItems: [
      { id: "analytics", label: "Analytics", i18: "Analytics", url: "analytics" },
      { id: "crm", label: "CRM", i18: "CRM", url: "crm" },
      { id: "ecommerce", label: "eCommerce", i18: "eCommerce", url: "ecommerce" },
    ],
  },
  {
    id: "rolesPerms",
    label: "Roles & Permissions",
    i18: "Roles & Permissions",
    icon: "ti-settings",
    url: "rolesPerms",
    subItems: [
      { id: "roles", label: "Roles", i18: "Roles", url: "roles" },
      { id: "permissions", label: "Permissions", i18: "Permissions", url: "permissions" },
    ],
  },
];

export default menuItems;
