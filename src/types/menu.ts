export interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

export interface MenuCategory {
  name: string;
  icon: string;
  items: MenuItem[];
}

export interface MenuData {
  categories: MenuCategory[];
}
