import logo from '../logo.svg';

function Home() {
  return (
    <div>
        {/* <!-- Content !--> */}
        <section id="home_one_banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner_one_text">
                            <h2>Programming is <span className="color_big">something</span></h2>
                            <h2>I'm deeply <span className="color_big">passionate</span> about.</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner_one_img">
                            <img src="assets/img/andaru.webp" className="rounded" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* <!-- About !--> */}
        <section id="about_area" className="section_padding_bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-5">
                        <div className="about_area_img">
                            <img src="assets/img/gallery/gallery_2.webp" alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about_area_main_text">
                            <div className="about_area_heading_two">
                                <h2>Kenapa <span className="color_big_heading">menjadi</span> <br />
                                    programmer ?</h2>
                            </div>
                            <div className="about_area_para">
                                <p>Menjadi seorang programmer sering kali melibatkan pemecahan masalah dan pengembangan solusi kreatif untuk berbagai tantangan teknis. Saya menyukai tantangan intelektual dan ingin terus meningkatkan skill problem solving saya, seorang programmer mungkin merupakan pilihan yang baik untuk saya.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* <!-- Skills !--> */}
        <section id="upcoming_events" className="section_padding_bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12 text-center mb-5">
                        <h2>Skills</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-4 col-3">
                        <div className="case_boxed_wrapper causes_boxed_two">
                            <div className="case_boxed_img">
                                <a href="https://getbootstrap.com" target="_blank">
                                    <img src="assets/img/skill/bootstrap.webp" alt="img" loading="lazy" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-3">
                        <div className="case_boxed_wrapper causes_boxed_two">
                            <div className="case_boxed_img">
                                <a href="https://jquery.com" target="_blank">
                                    <img src="assets/img/skill/jquery.webp" alt="img" loading="lazy" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-3">
                        <div className="case_boxed_wrapper causes_boxed_two">
                            <div className="case_boxed_img">
                                <a href="https://api.jquery.com/jQuery.ajax" target="_blank">
                                    <img src="assets/img/skill/ajax.webp" alt="img" loading="lazy" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-3">
                        <div className="case_boxed_wrapper causes_boxed_two">
                            <div className="case_boxed_img">
                                <a href="https://codeigniter.com" target="_blank">
                                    <img src="assets/img/skill/codeigniter.webp" alt="img" loading="lazy" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-3">
                        <div className="case_boxed_wrapper causes_boxed_two">
                            <div className="case_boxed_img">
                                <a href="https://laravel.com" target="_blank">
                                    <img src="assets/img/skill/laravel.webp" alt="img" loading="lazy" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-3 mt-2">
                        <div className="case_boxed_wrapper causes_boxed_two">
                            <div className="case_boxed_img">
                                <a href="https://mysql.com" target="_blank">
                                    <img src="assets/img/skill/mysql.webp" alt="img" loading="lazy" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* <!-- Wise Words !--> */}
        <section id="about_area" className="section_padding_bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about_area_main_text">
                            <div className="about_area_heading_two">
                                <h2>Tumbuhan <span className="color_big_heading">&</span>
                                    Teknologi</h2>
                            </div>
                            <div className="about_area_para">
                                <p>Teknologi memungkinkan kita untuk menyerap dan mengelola informasi dari berbagai sumber. Layaknya cabang yang berkembang, manusia menggunakan teknologi untuk mengembangkan cabang-cabang ilmu pengetahuan, kreativitas, dan inovasi. Dengan demikian, kita menjadi lebih adaptif dan responsif terhadap perubahan lingkungan, mirip dengan bagaimana tumbuhan beradaptasi terhadap perubahan cuaca dan habitatnya.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-5">
                        <div className="about_area_img">
                            <img src="assets/img/gallery/gallery_3.webp" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        
        {/* <!-- Big Thank's to !--> */}
        <section id="upcoming_events" className="section_padding_bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="section_heading">
                            <h2>Thank's To</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-1 col-md-2 col-sm-4 col-3">
                        <div className="case_boxed_wrapper causes_boxed_two">
                            <a href="https://smkpbs2-jkt.sch.id/" target="_blank">
                                <img src="assets/img/icon/smkpbs2.webp" alt="img" loading="lazy" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-4 col-3">
                        <div className="case_boxed_wrapper causes_boxed_two">
                            <a href="https://bsi.ac.id" target="_blank">
                                <img src="assets/img/icon/ubsi.webp" alt="img" loading="lazy" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-4 col-3">
                        <div className="case_boxed_wrapper causes_boxed_two">
                            <a href="https://codepolitan.com" target="_blank">
                                <img src="assets/img/icon/codepolitan.webp" alt="img" loading="lazy" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-4 col-3">
                        <div className="case_boxed_wrapper causes_boxed_two">
                            <a href="https://buildwithangga.com" target="_blank">
                                <img src="assets/img/icon/bwa.webp" alt="img" loading="lazy" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-4 col-3">
                        <div className="case_boxed_wrapper causes_boxed_two">
                            <a href="https://www.youtube.com/c/webprogrammingunpas" target="_blank">
                                <img src="assets/img/icon/wpu.webp" alt="img" className="img-fluid" loading="lazy" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-4 col-3">
                        <div className="case_boxed_wrapper causes_boxed_two">
                            <a href="https://kelas.work" target="_blank">
                                <img src="assets/img/icon/kelas.webp" alt="img" className="img-fluid" loading="lazy" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Home;
