const lerp = (v0 : number, v1 : number, t : number) : number =>
{
  let v = v0 + (v1-v0) * t
  return v
}

export default lerp