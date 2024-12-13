export interface MenuItem {
  title: string;
  path?: string;
  items?: SubMenuItem[];
}

export interface SubMenuItem {
  title: string;
  path: string;
}