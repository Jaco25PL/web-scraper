const express = require('express')
const axios = require("axios")
const cheerio = require("cheerio")

const PORT = 5000

const app = express()

const url = "https://www.theguardian.com/uk"

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []  // <- here we're gonna save the scraped data

        $('.dcr-11dhrb2' , html).each( function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href') // get the tag 'a' and the attribute 'href' (the link)
            articles.push({
                title,
                url
            })
        })

        console.log(articles)

    }).catch( err => console.error(err))

app.listen(PORT , () => console.log(`server running on port ${PORT}`))
