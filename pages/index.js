import ArticleList from '../components/ArticleList'
import { server } from '../config'

// any meta tags or anything like that should be changed within this component as it is the next.head component

function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()
  return {
    props: {
      articles,
    },
  }
}
export default Home
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()
//   return {
//     props: {
//       articles,
//     },
//   }
// }
