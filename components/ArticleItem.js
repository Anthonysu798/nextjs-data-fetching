import Link from 'next/link'
import articleStyles from '@/styles/Article.module.css'

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/articles/${article.id}`} legacyBehavior>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  )
}

export default ArticleItem
