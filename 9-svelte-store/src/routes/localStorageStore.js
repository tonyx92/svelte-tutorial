import { writable } from 'svelte/store'

export function localStorageStore(key, initial) {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(initial))
  }

  let saved = JSON.parse(localStorage.getItem(key))
  let { subscribe, set, update } = writable(saved)

  return {
    subscribe,
    set: (value) => {
      localStorage.setItem(key, JSON.stringify(value))
      return set(value)
    },
    update
  }
}
