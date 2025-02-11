interface MenuItem {
  name: string;
  routePath: string;
}

interface MenuColumn {
  id: number;
  title: string;
  menuList: MenuItem[];
}

interface MegaMenu {
  id: number;
  menuCol: {
    id: number;
    megaBanner: string;
    title: string;
    btnText: string;
    btnRoute: string;
    menuItems: MenuColumn[];
  }[];
}

interface MobileMenu {
  id: number;
  title: string;
  menuItems: MenuColumn[];
}

export const homeItems: MenuItem[] = [
  { name: "Home 01", routePath: "/" },
  { name: "Home 02", routePath: "/home_2" },
  { name: "Home 03", routePath: "/home_3" },
  { name: "Home 04", routePath: "/home_4" },
  { name: "Home 05", routePath: "/home_5" },
  { name: "Home 06", routePath: "/home_6" },
  { name: "Home 07", routePath: "/home_7" },
  { name: "Home 08", routePath: "/home_8" },
  { name: "Home 09", routePath: "/home_9" },
  { name: "Home 10", routePath: "/home_10" },
];

export const travelItems: MenuItem[] = [
  { name: "여행지 찾기", routePath: "/list" },
  { name: "여행지 순위", routePath: "/list/rank" },
  { name: "축제 달력", routePath: "/list/festival" },
  { name: "신규 여행지 등록", routePath: "/list/new" },
];

export const pageItems: MenuItem[] = [
  { name: "404", routePath: "/404" },
  { name: "About", routePath: "/about" },
  { name: "Become Expert", routePath: "/become-expert" },
  { name: "Help Center", routePath: "/help-center" },
  { name: "Login", routePath: "/login" },
  { name: "Register", routePath: "/signup" },
  { name: "Terms", routePath: "/terms" },
  { name: "Invoice", routePath: "/invoice" },
];

export const dashboardItems: MenuItem[] = [
  { name: "Dashboard", routePath: "/dashboard/db-dashboard" },
  { name: "Booking History", routePath: "/dashboard/db-booking" },
  { name: "Wishlist", routePath: "/dashboard/db-wishlist" },
  { name: "Settings", routePath: "/dashboard/db-settings" },
  { name: "Vendor Dashboard", routePath: "/vendor-dashboard/dashboard" },
  { name: "Vendor Add Hotel", routePath: "/vendor-dashboard/add-hotel" },
  { name: "Vendor Booking", routePath: "/vendor-dashboard/booking" },
  { name: "Vendor Hotels", routePath: "/vendor-dashboard/hotels" },
  { name: "Vendor Recovery", routePath: "/vendor-dashboard/recovery" },
  { name: "Logout", routePath: "/login" },
];

export const categorieMegaMenuItems: MegaMenu[] = [
  {
    id: 1,
    menuCol: [
      {
        id: 1,
        megaBanner: "/img/backgrounds/7.png",
        title: "Things to do on your hotel",
        btnText: "See Hotel",
        btnRoute: "/hotel-list-v1",
        menuItems: [
          {
            id: 1,
            title: "Hotel List",
            menuList: [
              { name: "Hotel List v1", routePath: "/hotel-list-v1" },
              { name: "Hotel List v2", routePath: "/hotel-list-v2" },
              { name: "Hotel List v3", routePath: "/hotel-list-v3" },
              { name: "Hotel List v4", routePath: "/hotel-list-v4" },
              { name: "Hotel List v5", routePath: "/hotel-list-v5" },
            ],
          },
          {
            id: 2,
            title: "Hotel Single",
            menuList: [
              { name: "Hotel Single v1", routePath: "/hotel-single-v1/5" },
              { name: "Hotel Single v2", routePath: "/hotel-single-v2/3" },
            ],
          },
          {
            id: 3,
            title: "Hotel Booking",
            menuList: [{ name: "Booking Page", routePath: "/booking-page" }],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    menuCol: [
      {
        id: 1,
        megaBanner: "/img/backgrounds/8.png",
        title: "Things to do on your tour",
        btnText: "See Tour",
        btnRoute: "/tour-list-v1",
        menuItems: [
          {
            id: 1,
            title: "Tour List",
            menuList: [
              { name: "Tour List v1", routePath: "/tour-list-v1" },
              { name: "Tour List v2", routePath: "/tour-list-v2" },
            ],
          },
          {
            id: 2,
            title: "Tour Pages",
            menuList: [
              { name: "Tour Map", routePath: "/tour-list-v3" },
              { name: "Tour Single", routePath: "/tour-single/5" },
            ],
          },
        ],
      },
    ],
  },
  // 더 많은 MegaMenu 항목들이 여기 나열됩니다.
];

export const categorieMobileItems: MobileMenu[] = [
  {
    id: 1,
    title: "Hotel",
    menuItems: [
      {
        id: 1,
        title: "Hotel List",
        menuList: [
          { name: "Hotel List v1", routePath: "/hotel-list-v1" },
          { name: "Hotel List v2", routePath: "/hotel-list-v2" },
          { name: "Hotel List v3", routePath: "/hotel-list-v3" },
          { name: "Hotel List v4", routePath: "/hotel-list-v4" },
          { name: "Hotel List v5", routePath: "/hotel-list-v5" },
        ],
      },
      {
        id: 2,
        title: "Hotel Single",
        menuList: [
          { name: "Hotel Single v1", routePath: "/hotel-single-v1/5" },
          { name: "Hotel Single v2", routePath: "/hotel-single-v2/5" },
        ],
      },
      {
        id: 3,
        title: "Hotel Booking",
        menuList: [{ name: "Booking Page", routePath: "/booking-page" }],
      },
    ],
  },
  {
    id: 2,
    title: "Tour",
    menuItems: [
      {
        id: 1,
        title: "Tour List",
        menuList: [
          { name: "Tour List v1", routePath: "/tour-list-v1" },
          { name: "Tour List v2", routePath: "/tour-list-v2" },
        ],
      },
      {
        id: 2,
        title: "Tour Pages",
        menuList: [
          { name: "Tour Map", routePath: "/tour-list-v3" },
          { name: "Tour Single", routePath: "/tour-single/5" },
        ],
      },
    ],
  },
  // 더 많은 MobileMenu 항목들이 여기 나열됩니다.
];
