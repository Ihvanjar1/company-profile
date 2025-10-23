const Skills = () => {
  const skillCategories = [
    {
      title: "Paket Standar",
      harga: "Rp. 1.000.000",
      skills: [
        { name: "Free Domain", level: "my.id / web.id" },
        { name: "SSL / HTTPS", level: "Free" },
        { name: "Revisi Website", level: "1x" },
        { name: "Halaman Website", level: "3" },
        { name: "Responsive Design", level: "Yes" },
        { name: "Contact Form", level: "Yes" },
        { name: "Tahun Berikutnya", level: "Rp. 700.000" },
      ],
    },
    {
      title: "Paket Medium",
      harga: "Rp. 1.700.000",
      skills: [
        { name: "Free Domain", level: ".com / co.id / web.id /.id" },
        { name: "SSL / HTTPS", level: "Free" },
        { name: "Revisi Website", level: "1x" },
        { name: "Halaman Website", level: "5-10" },
        { name: "Responsive Design", level: "Yes" },
        { name: "Halaman Admin", level: "Yes" },
        { name: "Contact Form", level: "Yes" },
        { name: "Google Maps Integration", level: "Yes" },
        { name: "Tombol Whatsapp", level: "Yes" },
        { name: "Tahun Berikutnya", level: "Rp. 900.000" },
      ],
    },
    {
      title: "Paket Custom",
      harga: "Mulai Rp. 2.500.000",
      skills: [
        { name: "Free Domain", level: ".com / .co.id / .id / sch.id / .org" },
        { name: "SSL / HTTPS", level: "Free" },
        { name: "Custom Website", level: "Yes" },
        { name: "Halaman Admin", level: "Yes" },
        { name: "Responsive Design", level: "Yes" },
        { name: "Contact Form", level: "Yes" },
        { name: "Free Logo Design", level: "Yes" },
        { name: "Free Maintenance 1 Bulan", level: "Yes" },
        { name: "Google Maps Integration", level: "Yes" },
        { name: "Tombol Whatsapp", level: "Yes" },
        { name: "Tahun Berikutnya", level: "Rp. 1.500.000" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Harga Layanan Kami
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold dark:text-white mb-6 text-center bg-blue-600 text-white py-2 rounded">
                {category.title}
              </h3>
              <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-7">
                {category.harga}
              </h1>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200rounded-full h-2">
                      <div style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
