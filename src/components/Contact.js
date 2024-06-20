import logo from '../logo.svg';

function Contact() {
  return (
    <div>
        <section id="contact_arae_main" classNamee="section_padding contactMargin">
            <div class="container">
                <div class="row">
                    <h2 class="mb-3 text-center" id="contact">Kontak</h2>
                    <div class="col-lg-2"></div>
                    <div class="col-lg-4">
                        <div class="contact_area_left">
                            <div class="contact_left_item">
                                <div class="contact_left_icon">
                                    <img src="assets/img/icon/email.webp" alt="icon" width="50" />
                                </div>
                                <div class="contact_left_text">
                                    <h3>Email</h3>
                                    <a href="mailto:andarutr@gmail.com" target="_blank">andarutr@gmail.com</a>
                                </div>
                            </div>
                            <div class="contact_left_item">
                                <div class="contact_left_icon">
                                    <img src="assets/img/icon/call.webp" alt="icon" width="50" />
                                </div>
                                <div class="contact_left_text">
                                    <h3>No.Handphone</h3>
                                    <a href="https://wa.me/6289668764457" target="_blank">+62 896-6876-4457 (WA)</a>
                                </div>
                            </div>
                            <div class="contact_left_item">
                                <div class="contact_left_icon">
                                    <img src="assets/img/icon/github.webp" alt="icon" width="50" />
                                </div>
                                <div class="contact_left_text">
                                    <h3>Github</h3>
                                    <a href="https://github.com/andarutr" target="_blank">github.com/andarutr</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="contact_left_item">
                            <div class="contact_left_icon">
                                <img src="assets/img/icon/linkedin.webp" alt="icon" width="40" />
                            </div>
                            <div class="contact_left_text">
                                <h3>Linkedin</h3>
                                <a href="https://linkedin.com/in/andaru-triadi" target="_blank">in/andaru-triadi</a>
                            </div>
                        </div>
                        <div class="contact_left_item">
                            <div class="contact_left_icon">
                                <img src="assets/img/icon/instagram.webp" alt="icon" width="50" />
                            </div>
                            <div class="contact_left_text">
                                <h3>Instagram</h3>
                                <a href="https://instagram.com/andarutr" target="_blank">intagram.com/andarutr</a>
                            </div>
                        </div>
                        <div class="contact_left_item">
                            <div class="contact_left_icon">
                                <img src="assets/img/icon/cv.webp" alt="icon" width="40" />
                            </div>
                            <div class="contact_left_text">
                                <h3>Curriculum Vitae</h3>
                                <a href="assets/CV Andaru Triadi.pdf" target="_blank">Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2"></div>
                    <div class="col-lg-12 text-center mb-3">
                        <p>Current Job : Programmer di PT. Prakarsa Alam Segar (PAS).</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Contact;
