import { writable } from "svelte/store"

const data = [
  {
    album:'',
    artist:'',
    img:''
  },
  {
    album:'',
    artist:'',
    img:''
  },
  {
    album:'',
    artist:'',
    img:''
  },
  {
    album:'',
    artist:'',
    img:''
  },

]

const albumCovers = writable(data)

export default albumCovers