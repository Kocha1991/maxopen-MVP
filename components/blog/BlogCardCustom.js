import Link from "next/link";

export default function BlogCardCustom({ item }) {
  return (
    <div className="blog-card-custom">
      <div className="card-image">
        <Link href={`/blog-maxOpen/${item.slug || "article"}`}>
          <img 
            src={item.img?.full_url || "/assets/imgs/template/UxArticle.jpg"} 
            alt={item.title} 
            className="img-fluid" 
          />
        </Link>
      </div>
      <div className="card-info">
        <div>
          <div className="card-title maxOpen__subtitle">
            {item.title}
          </div>
          <div className="card-meta">
            <span className="date-post">{item.date || "16 October 2023"}</span>
          </div>
          <div className='card-descr maxOpen-services__descr'>
            {item.description}
          </div>
        </div>
        <div className="card-more">
          <Link className="btn btn-brand-4-medium hover-up" href={`/blog/${item.category || "article"}`}>
            {item.category || "Design"}
          </Link>
        </div>
      </div>
    </div>
  );
}
