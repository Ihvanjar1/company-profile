const About = () => {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Full-Stack Developer",
      company: "Tech Company",
      description:
        "Developing modern web applications using React, Next.js, and Node.js.",
    },
    {
      year: "2022 - 2023",
      title: "Frontend Developer",
      company: "Startup Inc",
      description:
        "Built responsive user interfaces and improved user experience.",
    },
    {
      year: "2021 - 2022",
      title: "Junior Developer",
      company: "Digital Agency",
      description: "Learned and applied modern web development practices.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn more about our company, expertise, and commitment to
            delivering exceptional web solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Famuhi Solutions is a professional web development company
                passionate about creating innovative software solutions. Our
                journey in tech started with curiosity about how websites work,
                and it has evolved into a company dedicated to building
                meaningful digital experiences.
              </p>
              <p>
                We specialize in modern web technologies and frameworks, always
                staying up-to-date with the latest trends and best practices.
                Our team is committed to delivering high-quality solutions that
                meet our clients` needs and exceed their expectations.
              </p>
              <p>
                We believe in writing clean, maintainable code and creating
                applications that not only work well but also provide excellent
                user experiences. We are always excited to take on new
                challenges and collaborate with forward-thinking businesses.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Experience
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
                Projects Completed
              </div>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-300">
                Years Experience
              </div>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
