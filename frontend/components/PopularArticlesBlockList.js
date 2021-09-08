import React from 'react'
import Article from './Article'

export default function PopularArticlesBlockList({ articles }) {
    return (
        <div classNamess='flex justify-center'>
            <div className='flex flex-col'>
                <div className={`flex justify-center text-4xl fonts-title_popular-block`}>Популярное</div>
                <div className='flex '>
                    {articles.map((article) => <Article key={article.id} article={article} />)}
                </div>
            </div>
        </div>
    )
}