export default function Informasi() {
  const informasiList = [
    {
      id: 1,
      title: "Pengumuman Kegiatan Gotong Royong",
      date: "15 Juni 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
    {
      id: 2,
      title: "Pendaftaran Bantuan Sosial",
      date: "10 Juni 2024",
      content: "Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor."
    },
    {
      id: 3,
      title: "Jadwal Posyandu Bulan Juni",
      date: "5 Juni 2024",
      content: "Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Nunc nulla."
    },
    {
      id: 4,
      title: "Pembangunan Jalan Desa",
      date: "1 Juni 2024",
      content: "Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Donec venenatis vulputate lorem."
    }
  ]

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h1 className="display-4 fw-bold mb-4 my-5">Informasi Desa</h1>
          <div className="divider mb-4"></div>
          
          <div className="row">
            {informasiList.map(item => (
              <div key={item.id} className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title fw-bold">{item.title}</h3>
                    <p className="text-muted small mb-3">{item.date}</p>
                    <p className="card-text">{item.content}</p>
                    <button className="btn btn-outline-primary">Baca Selengkapnya</button>
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