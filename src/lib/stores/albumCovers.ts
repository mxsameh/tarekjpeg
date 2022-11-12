import { writable } from "svelte/store"

const data = [
  {
    name:'alomek',
    artist:'marwan moussa',
    img:'/mm.jpg'
  },
  {
    name:'free',
    artist:'marwan pablo',
    img:'/mp.jpg'
  },
  {
    name:'pubg',
    artist:'wegz',
    img:'/wegz.jpg'
  },

]

const albums = writable(data)

export default albums