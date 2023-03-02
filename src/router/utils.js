export function produceRoutes() {
  const requireViews = require.context('../views', true, /index.vue$/)
  const routes = []
  requireViews.keys().forEach((fileName) => {
    const componentConfig = requireViews(fileName)
    const componentName = fileName
      .replace(/\.\/(\w+Page).*/, '$1')
      .toLowerCase()
      .replace('page', '')
    routes.push({
      path: componentName.includes('home') ? '/' : `/${componentName}`,
      name: componentName,
      component: componentConfig.default || componentConfig,
    })
  })

  return routes
}

export function injectRouteInfo(name, info = {}, routes = []) {
  const route = routes.find((route) => route.name === name)
  if (!route) return
  for (const key of Object.keys(info)) {
    route[key] = info[key]
  }
}
