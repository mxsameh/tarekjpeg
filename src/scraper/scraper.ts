import express from "express"
import * as cheerio from "cheerio"
import axios from 'axios'
import fs from 'fs'

const port = 3300
const app = express()

const url = 'https://www.tarekjpeg.com'
axios(url)
.then(res => 
  {
    const html = res.data

    const $ = cheerio.load(html)
    const imgs : string[] = []

    $('.thumb img').each(function(this:any){
      const imgSrc = $(this).data('src')
      imgs.push(imgSrc)
    })

    // Create a file
    const data = JSON.stringify(imgs)
    fs.writeFileSync('viralImgs.json', data)


  })



app.listen(port, () => 
{
  console.log( `We are now running on port: ${port}` );
})
