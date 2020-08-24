import Query from "../components/Query";
import ARTICLE_CATEGORIES_QUERY from "../apollo/queries/articleCategories";

const Home = () => {
	return (
		<div>
			<Query query={ARTICLE_CATEGORIES_QUERY} id={null}>
				{({data: {articleCategories}}) => {
					console.log(articleCategories);
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

export default Home;