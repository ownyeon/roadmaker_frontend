interface MenuItem {
    routePath: string;
    items?: MenuItem[];
  }
  
  // is active parent check
  export const isActiveParent = (data: MenuItem[] = [], path: string) => {
    if (data?.length !== 0) {
      return data?.some(({ items }) =>
        items?.some(
          (menu) =>
            menu.routePath.replace(/\/\d+/, "") === path.replace(/\/\d+/, "")
        )
      );
    }
  };
  
  // is active parent childe check
  export const isActiveParentChaild = (data: MenuItem[] = [], path:string) => {
    if (data?.length !== 0) {
      return data?.some(
        (menu) =>
          menu.routePath.replace(/\/\d+/, "") === path.replace(/\/\d+/, "")
      );
    }
  };
  
  // is active link check
  export const isActiveLink = (menuPath:string, routePath:string) => {
    if (menuPath && routePath) {
      return menuPath.replace(/\/\d+/, "") === routePath.replace(/\/\d+/, "");
    }
  };