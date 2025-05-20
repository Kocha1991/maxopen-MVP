import Link from "next/link";
import { useTranslation } from 'react-i18next';


export default function BlogCardCustom({ item, btnText }) {
  const { t } = useTranslation();
  if (!item) return null;
  return (
    <Link href={`/blog/${item?.slug ?? ""}`}>
      <div className="blog-card-custom">
        <div className="card-image">
         
            <img 
              src={item?.img?.full_url} 
              alt={item?.title || "Default title"} 
              className="img-fluid" 
            />
         
        </div>
        <div className="card-info">
          <div>
            <div className="card-title maxOpen__subtitle">
              {item?.title || "No title"}
            </div>
            <div className="card-meta">
              <span className="date-post">{item?.date || "16 October 2023"}</span>
            </div>
            <div className="card-descr maxOpen-services__descr">
              {item?.description || "No description available."}
            </div>
          </div>
          <div className="card-more">
            <button className="btn btn-brand-4-medium hover-up">
              {item?.category || btnText}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
