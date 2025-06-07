export default function UMKM() {
  const umkmList = [
    {
      id: 1,
      name: "Kerajinan Bambu Kelor",
      owner: "Bapak Sutrisno",
      description: "Menyediakan berbagai kerajinan tangan dari bambu seperti tempat tisu, vas bunga, dan furniture.",
      image: "/images/umkm1.jpg"
    },
    {
      id: 2,
      name: "Tahu Bacem Kelor",
      owner: "Ibu Siti",
      description: "Produksi tahu bacem dengan resep turun temurun yang khas dari Desa Kelor Lor.",
      image: "/images/umkm2.jpg"
    },
    {
      id: 3,
      name: "Tenun Lurik Kelor",
      owner: "Kelompok Ibu PKK",
      description: "Menghasilkan kain tenun lurik dengan motif tradisional khas Gunungkidul.",
      image: "/images/umkm3.jpg"
    },
    {
      id: 4,
      name: "Madu Kelor",
      owner: "Bapak Joko",
      description: "Madu asli dari lebah yang diternakkan di hutan sekitar Desa Kelor Lor.",
      image: "/images/umkm4.jpg"
    }
  ]

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h1 className="display-4 fw-bold mb-4 my-5">UMKM Desa Kelor Lor</h1>
          <div className="divider mb-4"></div>
          
          <div className="row">
            {umkmList.map(item => (
              <div key={item.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img src={item.image} className="card-img-top" alt={item.name} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h3 className="card-title fw-bold">{item.name}</h3>
                    <p className="text-muted small">Pemilik: {item.owner}</p>
                    <p className="card-text">{item.description}</p>
                    <button className="btn btn-outline-primary">Hubungi</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}