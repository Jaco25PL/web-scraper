// trying with article-stractor
import { extract } from "@extractus/article-extractor"

const input = 'html article here'

try {
  const article = await extract(input)
  console.log(article)
} catch (err) {
  console.error(err)
}

