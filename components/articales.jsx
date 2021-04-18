import React from 'react'
import Link from 'next/link'
function Article({ articles, num }) {
    return (
      <ul>
        {articles.slice(0,num).map((articale) => (
          <Link href="/article/[id]" as={`/article/${articale.id}`}><a><li>{articale.title}</li></a></Link>
        ))}
      </ul>
    )
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
 
  
  export default Article