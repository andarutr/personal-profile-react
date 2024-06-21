import { useState } from 'react';
import jsonData from './portfolio.json';
import moment from 'moment';

function Portfolio() {
    const itemsPerPage = 3; 
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = jsonData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <div>
        <section id="trending_causes_main" classNamee="section_padding contactMargin">
            <div className="container">
                <h2 className="mb-3 text-center">Portfolio</h2>
                <div className="row">
                    {currentItems.map((item, index) => (
                    <div key={index} className="col-lg-8 mb-5 mx-auto">
                        <div className="details_wrapper_area">
                            <div className="details_text_wrapper">
                                <a href="javascript:;" className="tags_noted">{moment(item.created_at).format('D MMMM YYYY')}</a>
                                <h2>{item.title}</h2>
                                <img src={`assets/img/portfolio/${item.picture}`} className="img-fluid rounded imgUrl mt-3 mb-3" alt="img" />
                                <span className="badge bg-primary">Bootstrap</span>
                                <span className="badge bg-danger">Laravel</span>
                                <span className="badge bg-warning">MySQL</span>
                                <h3>Deskripsi</h3>
                                <div dangerouslySetInnerHTML={{ __html: item.description_id }}></div>
                                <h3>Status</h3>
                                <p>{item.status}</p>
                                <h3>Screenshot</h3>
                                <div className="row popup-gallery">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="details_small_img">
                                            <div className="gallery_item">
                                                <img src={`assets/img/portfolio/${item.ss_1}`} alt="img" className="imgUrl" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="details_small_img">
                                            <div className="gallery_item">
                                                <img src={`assets/img/portfolio/${item.ss_2}`} alt="img" className="imgUrl" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="details_small_img">
                                            <div className="gallery_item">
                                                <img src={`assets/img/portfolio/${item.ss_3}`} alt="img" className="imgUrl" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="details_small_img">
                                            <div className="gallery_item">
                                                <img src={`assets/img/portfolio/${item.ss_4}`} alt="img" className="imgUrl" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {item.url ? (
                                    <center>
                                        <a href={item.url} className="btn btn-primary" target="_blank">Link</a>
                                    </center>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    ))}
                    <hr />
                </div>
                <div className="pagination-wrapper mb-5 mt-4">
                    <ul className="pagination justify-content-center">
                    {Array.from({ length: Math.ceil(jsonData.length / itemsPerPage) }).map((_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                        <button onClick={() => paginate(index + 1)} className="page-link">
                            {index + 1}
                        </button>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Portfolio;
