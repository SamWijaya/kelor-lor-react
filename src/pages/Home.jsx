import { Carousel } from 'react-bootstrap'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = 'Kelor Lor - Beranda'
  }, [])

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div className="position-relative">
        <img 
          src="/images/main.jpg" 
          alt="Desa Kelor Lor" 
          className="object-fit-cover d-none d-lg-block w-100" 
          style={{ height: '70vh', filter: 'brightness(50%)' }} 
        />
        <div className="container position-absolute top-50 start-50 translate-middle text-white text-center">
          <h2 className="display-4 fw-bold">Selamat Datang di Kelor Lor</h2>
          <p className="mt-2">Kemadang, Kec. Tanjungsari, Kabupaten Gunungkidul, DIY</p>
        </div>
      </div>

      {/* Sejarah Section */}
      <div className="container mt-5 align-content-center" style={{ height: '80vh' }}>
        <div className="row align-items-center">
          <div className="d-none d-md-block col-md-6">
            <div className="container-image mx-auto">
              <img 
                src="/images/dokumentasi1.jpg" 
                alt="Dokumentasi Desa" 
                className="images object-fit-cover d-block img-fluid" 
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <p className="mb-0" style={{ opacity: '60%' }}>Kelor Lor</p>
            <h2 className="display-4 fw-bold">Sejarah</h2>
            <div className="divider"></div>
            <p className="mt-2 fs-6">
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
              Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
              Maecenas eget condimentum velit, sit amet feugiat lectus.
            </p>
            <p className="mt-2 fs-6">
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
              Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
              Maecenas eget condimentum velit, sit amet feugiat lectus.
            </p>
          </div>
        </div>
      </div>

      {/* Kondisi Desa Section */}
      <div className="container text-center mb-5 position-relative align-content-center" style={{ width: '100%', height: '60vh' }}>
        <h2 className="display-6 fw-semibold mb-3">Kondisi Desa</h2>
        <div className="divider mx-auto"></div>
        <p className="mt-3 fs-6">
          Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
          Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
          Maecenas eget condimentum velit, sit amet feugiat lectus. Norem ipsum dolor sit amet, consectetur adipiscing elit. 
          Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, 
          ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
        </p>
      </div>

      {/* Gallery Carousel */}
      <div className="carousel slide mb-5" style={{ height: '50vh', overflow: 'hidden' }}>
        <h2 className="display-6 fw-semibold mb-3 text-center">Galeri</h2>
        <Carousel indicators={false}>
          {[...Array(10)].map((_, i) => (
            <Carousel.Item key={i}>
              <img 
                src={`/images/image${i+1}.jpg`} 
                className="d-block w-100" 
                style={{ height: '50vh', objectFit: 'cover', filter: 'brightness(50%)' }} 
                alt={`Image ${i+1}`} 
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Testimonial Section */}
      <div className="container text-center mb-5 position-relative align-content-center" style={{ width: '100%', height: '60vh' }}>
        <div className="">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star fs-3"></i>
          <i className="fa-solid fa-star fs-1"></i>
          <i className="fa-solid fa-star fs-3"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <h2 className="display-6 fw-semibold mb-3">Norem ipsum dolor sit amet</h2>
        <p className="mt-3 fs-6">
          Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
          Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
          Maecenas eget condimentum velit, sit amet feugiat lectus.
        </p>
      </div>

      {/* Lokasi Section */}
      <div className="w-100">
        <h2 className="display-6 fw-semibold mb-3 text-center">Lokasi</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7900.2249009488805!2d110.56933744498862!3d-8.090013645660816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb0f40539bcb1%3A0x315a8f71c2ad9602!2sKelor%20Lor%2C%20Kemadang%2C%20Kec.%20Tanjungsari%2C%20Kabupaten%20Gunungkidul%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1746644716729!5m2!1sid!2sid" 
          className="w-100" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}