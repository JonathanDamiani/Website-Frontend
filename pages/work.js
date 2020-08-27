import React from 'react';
import { Query } from "../components/";
import ARTICLE_CATEGORIES_QUERY from "../apollo/queries/articleCategories";
const Work = () => {
    return (
        <div>
            <Query query={ARTICLE_CATEGORIES_QUERY} id={null}>
				{({data: {articleCategories}}) => {
					console.log(articleCategories)
					return (
						<div>
							Done
						</div>
					)
				}}
			</Query>
        </div>
    )
}

export default Work;
