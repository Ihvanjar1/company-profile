const About = () => {
  const experiences = [
    {
      year: "2023 - Sekarang",
      title: "Pengembang Full-Stack",
      company: "Perusahaan Teknologi",
      description:
        "Mengembangkan aplikasi web modern menggunakan React, Next.js, dan Node.js.",
    },
    {
      year: "2022 - 2023",
      title: "Pengembang Frontend",
      company: "Startup Inc",
      description:
        "Membangun antarmuka pengguna responsif dan meningkatkan pengalaman pengguna.",
    },
    {
      year: "2021 - 2022",
      title: "Pengembang Junior",
      company: "Agensi Digital",
      description: "Belajar dan menerapkan praktik pengembangan web modern.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tentang Kami
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pelajari lebih lanjut tentang perusahaan kami, keahlian, dan
            komitmen untuk memberikan solusi web yang luar biasa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Cerita Kami
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Famuhi Solutions adalah perusahaan pengembangan web profesional
                yang bersemangat dalam menciptakan solusi perangkat lunak
                inovatif. Perjalanan kami di bidang teknologi dimulai dengan
                rasa ingin tahu tentang cara kerja situs web, dan telah
                berkembang menjadi perusahaan yang berdedikasi untuk membangun
                pengalaman digital yang bermakna.
              </p>
              <p>
                Kami spesialis dalam teknologi dan kerangka kerja web modern,
                selalu mengikuti tren dan praktik terbaik terkini. Tim kami
                berkomitmen untuk memberikan solusi berkualitas tinggi yang
                memenuhi kebutuhan klien dan melampaui ekspektasi mereka.
              </p>
              <p>
                Kami percaya pada penulisan kode yang bersih dan dapat
                dipelihara serta menciptakan aplikasi yang tidak hanya berfungsi
                dengan baik tetapi juga memberikan pengalaman pengguna yang luar
                biasa. Kami selalu bersemangat untuk mengambil tantangan baru
                dan berkolaborasi dengan bisnis yang berpikir maju.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Pengalaman
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <span className="text-sm text-blue-600 font-medium">
                      {exp.year}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">
                Proyek Selesai
              </div>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-300">
                Tahun Pengalaman
              </div>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">
                Kepuasan Klien
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
