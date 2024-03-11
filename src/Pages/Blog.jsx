import Card from "../Features/blog/Card";

const blogs = [
	{
		img: "blog1.jpg",
		h4: "The Cotton-Jersey Zip-Up Hoodie",
		p: "Kickstarter man braid godard coloring book. Raclette waistcoat selfiesyr wolf chatreuse hexagon irony, godard",
	},
	{
		img: "blog2.jpg",
		h4: "The Cotton-Jersey Zip-Up Hoodie",
		p: "Kickstarter man braid godard coloring book. Raclette waistcoat selfiesyr wolf chatreuse hexagon irony, godard",
	},
	{
		img: "blog3.jpg",
		h4: "The Cotton-Jersey Zip-Up Hoodie",
		p: "Kickstarter man braid godard coloring book. Raclette waistcoat selfiesyr wolf chatreuse hexagon irony, godard",
	},
	{
		img: "blog4.jpg",
		h4: "The Cotton-Jersey Zip-Up Hoodie",
		p: "Kickstarter man braid godard coloring book. Raclette waistcoat selfiesyr wolf chatreuse hexagon irony, godard",
	},
];
function Blog() {
	return (
		<div>
			<section id="page-header" className="blog-header">
				{/* <h2>#readmore</h2>
				<p>Read all case studies about our products!</p> */}
			</section>
			<section id="blog">
				{blogs.map((blog, idx) => (
					<Card blog={blog} key={idx} />
				))}
			</section>
		</div>
	);
}

export default Blog;
