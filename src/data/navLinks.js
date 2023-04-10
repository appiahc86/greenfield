export const navLinks = [
  {
    routeName: "Home",
    path: "/",
    hasChildren: false,
  },
  {
      routeName: "Products and services",
    path: "/",
    hasChildren: false, 
  },
   {
      routeName: "Social impact",
    path: "/",
    hasChildren: false, 
  }, {
      routeName: "Gallery",
    path: "/",
    hasChildren: false, 
  }, {
      routeName: "Our programs",
    path: "/",
    hasChildren: true,
     children: [
        {
            routeName: "Programs",
            path: ""
        },
        {
            routeName: "Programs",
            path: ""
        },
     ],
  }, {
      routeName: "Careers",
    path: "/",
    hasChildren: false, 
  }, {
      routeName: "About",
    path: "/",
    hasChildren: true,
    children: [{
        path: "/",
        routeName: "Some name",
    }] 
  }, {
      routeName: "Contact",
    path: "/",
    hasChildren: false, 
  }
];
