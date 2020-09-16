const Key = 'munu'

export function getMenu() {
  console.log(window.localStorage.getItem(Key))
  return JSON.parse(window.localStorage.getItem(Key) || '[]')
}

export function setMenu(menuList) {
  return window.localStorage.setItem(Key, JSON.stringify(menuList))
}

export function removeMenu() {
  return window.localStorage.removeItem(Key)
}
