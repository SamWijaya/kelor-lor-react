export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="fs-5 fw-bold mb-4">
                <img src="/images/logo.png" alt="logo" width="30" height="24" className="d-inline-block align-text-top" />
                Kelor Lor
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="fw-bold mb-4 fs-5">Contact</h6>
              <p><i className="fa-solid fa-location-pin me-3"></i>Dsn. Kelor-lor, Kanigoro, Kemadang, Kec. Tanjungsari, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta 55881</p>
              <p><i className="fas fa-envelope me-3"></i>KelorLor@gmail.com</p>
              <p><i className="fas fa-phone me-3"></i>+62 812-6806-5625</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4">
        Copyright ©2024 All right reverved to kelompok 57
      </div>
    </footer>
  )
}