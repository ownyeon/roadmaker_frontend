interface MenuItem {
  name: string;
  routePath: string;
  check:boolean;
}

interface MenuColumn {
  id: number;
  title: string;
  menuList: MenuItem[];
}



export const travelItems: MenuItem[] = [
  { name: "여행지 찾기", routePath: "/list" , check:false},
  { name: "여행지 순위", routePath: "/list/rank" ,check:false},
  { name: "축제 달력", routePath: "/list/festival" ,check:false},
  { name: "신규 여행지 등록", routePath: "/list/new" ,check:false},
];


