import React from 'react'
import Article from './Article'

export default function PopularArticlesBlockList({ articles }) {
    return (
        <section className='flex justify-center'>
            <div className='flex flex-col'>
                <h1 className={`flex justify-center text-4xl fonts-title_popular-block`}>Популярное</h1>
                <div className='flex '>
                    {articles.map((article) => <Article key={article.id} article={article} />)}
                </div>
            </div>
        </section>
    )
}