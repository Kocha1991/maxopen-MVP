import Link from "next/link"

export default function BlogCardCustom({ item }) {
  return (
    <div className="blog-card-custom">
        <div className="card-image">
          <Link href={`/blog-maxOpen/article`}>
            <img src={`/assets/imgs/template/UxArticle.jpg`} alt="img" className="img-fluid" />
          </Link>
        </div>
        <div className="card-info">
          <div className="card-title maxOpen__subtitle">
            UX review presentations
          </div>
          <div className="card-meta">
            <span className="date-post">16 October 2023</span>
          </div>
          <div className='card-descr maxOpen-services__descr'>
            How do you create compelling presentations that wow your colleagues and impress your managers?
          </div>
          <div className="card-more">
            <Link className="btn btn-brand-4-medium hover-up" href={`/blog-maxOpen/article`}>
              Design
            </Link>
          </div>
        </div>
    </div>
  )
}
