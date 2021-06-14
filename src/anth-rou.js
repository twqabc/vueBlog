
export const asyncRoute = [
    {
      path: '/users',
      name: 'Users',
      component: () => import('@/views/Users'),
      meta: {
               title:'User Management',
        icon: 'user'
      }
    }
]  


let rs = routes
if (+id === 1) {// When id is 1, the user has all permissions
  rs = routes.concat(asyncRoute)
}
