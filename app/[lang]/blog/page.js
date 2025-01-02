
import BlogPost from '@/components/blog/BlogPost'
import Layout from "@/components/layout/Layout"
export default function Blog() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} headerCls="header-style-2 header-style-4" >
                <section className="section-box box-content-blog">
                    <div className="container">
                        <div className="text-center blog-head"><span className="icon-1 shape-1" /><span className="icon-2 shape-2" /><span className="icon-3 shape-3" /><span className="btn btn-brand-4-sm">Our Inside</span>
                            <h2 className="heading-2 mb-20 mt-15">Blog  Resources</h2>
                            <p className="text-lg">Explore our blog and resources for valuable insights, expert opinions, and up-to-<br className="d-none d-lg-block" />date information on the latest trends in the industry.</p>

                        </div>
                        <div className="box-list-news mt-100">
                            <div className="row">
                                <BlogPost showItem={6} style={1} showPagination />

                            </div>
                        </div>

                    </div>
                </section>

            </Layout>
        </>
    )
}