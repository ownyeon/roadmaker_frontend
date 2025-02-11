interface MenuItem {
  routePath: string;
  items?: MenuItem[]; // 이 부분은 메뉴 항목에 다른 항목들이 있을 때를 고려한 타입
}

// is active parent check
export const isActiveParent = (data: MenuItem[] = [], path: string): boolean => {
  if (data?.length !== 0) {
    return data.some(({ items }) =>
      items?.some(
        (menu) =>
          menu.routePath.replace(/\/\d+/, "") === path.replace(/\/\d+/, ""),
      ),
    );
  }
  return false;
};

// is active parent child check
export const isActiveParentChild = (data: MenuItem[] = [], path: string): boolean => {
  if (data?.length !== 0) {
    return data.some(
      (menu) =>
        menu.routePath.replace(/\/\d+/, "") === path.replace(/\/\d+/, ""),
    );
  }
  return false;
};

// is active link check
export const isActiveLink = (menuPath: string, routePath: string): boolean => {
  if (menuPath && routePath) {
    return menuPath.replace(/\/\d+/, "") === routePath.replace(/\/\d+/, "");
  }
  return false;
};
