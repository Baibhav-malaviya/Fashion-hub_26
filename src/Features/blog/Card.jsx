function Card({ blog }) {
	return (
		<div className="blog-box ">
			<div className="blog-img">
				<img className="" src={blog.img} alt="" />
			</div>
			<div className="blog-details">
				<h4>{blog.h4}</h4>
				<p>{blog.p}</p>
				<a href="#">CONTINUE READING</a>
			</div>
			<h1>13/01</h1>
		</div>
	);
}

export default Card;
