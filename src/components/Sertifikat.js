import logo from '../logo.svg';
import jsonData from './sertifikat.json';

function Sertifikat() {
  return (
    <div>
        <section id="gallery_grid_area" classNamee="section_padding contactMargin">
            <div className="container mb-4">
                <h2 className="mb-3 text-center" id="sertifikat">Sertifikat</h2>
                <div className="row mx-auto">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <div className="row popup-gallery">
                        {jsonData.map((item) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 col-6 mt-2" key={item.id}>
                            <div className="card shadow">
                            <div className="card-body text-center">
                                <div className="gallery_item">
                                <img src={item.picture} alt="img" className="imgUrl" />
                                </div>
                                <a href={item.url} className="btn btn-sm btn-primary mb-2"><i className="fab fa-github"></i> Project</a>
                            </div>
                            </div>
                        </div>
                        ))}
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Sertifikat;
