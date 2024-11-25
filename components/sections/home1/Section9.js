import CounterUp from '@/components/elements/CounterUp'


export default function Section9() {
    return (
        <>

            <section className="section-box box-why-trusted box-why-trusted-black">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-4 mb-30">
                            <h2 className="text-32-bold">See why we are<br className="d-none d-lg-block" /> trusted the world over
                            </h2>
                        </div>
                        <div className="col-lg-8 mb-30">
                            <div className="box-numbers">
                                <div className="item-number">
                                    <h3 className="heading-2"><CounterUp count={469} />k</h3>
                                    <p className="text-xl neutral-700">Social followers</p>
                                </div>
                                <div className="item-number">
                                    <h3 className="heading-2"><CounterUp count={25} />k+</h3>
                                    <p className="text-xl neutral-700">Happy Clients</p>
                                </div>
                                <div className="item-number">
                                    <h3 className="heading-2"><CounterUp count={756} />+</h3>
                                    <p className="text-xl neutral-700">Projects Done</p>
                                </div>
                                <div className="item-number">
                                    <h3 className="heading-2"><CounterUp count={100} />+</h3>
                                    <p className="text-xl neutral-700">Global branches</p>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </section >
        </>
    )
}
