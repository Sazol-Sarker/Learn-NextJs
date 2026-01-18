import Link from "next/link";

const servicesPage = () => {
  const data = [
    {
      id: 1,
      service_name: "Web Development",
      image: "/images/service1.jpg",
      description:
        "Full-stack web development services using modern technologies to build fast, responsive, and secure websites.",
    },
    {
      id: 2,
      service_name: "Mobile App Development",
      image: "/images/service2.jpg",
      description:
        "Custom Android and iOS apps focused on providing seamless user experiences and powerful features.",
    },
    {
      id: 3,
      service_name: "UI/UX Design",
      image: "/images/service3.jpg",
      description:
        "Creative and user-centered design solutions to enhance the visual appeal and usability of digital products.",
    },
    {
      id: 4,
      service_name: "Digital Marketing",
      image: "/images/service1.jpg",
      description:
        "Complete digital marketing strategies including SEO, SEM, SMM, and content marketing to grow your brand.",
    },
    {
      id: 5,
      service_name: "E-commerce Solutions",
      image: "/images/service2.jpg",
      description:
        "Custom e-commerce platforms with secure payment gateways, product management, and order tracking.",
    },
    {
      id: 6,
      service_name: "Cloud Integration",
      image: "/images/service3.jpg",
      description:
        "Cloud setup and integration services including AWS, Firebase, and other scalable cloud technologies.",
    },
    {
      id: 7,
      service_name: "Cybersecurity",
      image: "/images/service1.jpg",
      description:
        "Security auditing, threat monitoring, and protection solutions to safeguard your digital infrastructure.",
    },
    {
      id: 8,
      service_name: "Data Analytics",
      image: "/images/service2.jpg",
      description:
        "Actionable data insights through analytics dashboards, reporting, and business intelligence tools.",
    },
    {
      id: 9,
      service_name: "SEO Optimization",
      image: "/images/service3.jpg",
      description:
        "On-page and off-page SEO strategies designed to increase your website’s search engine ranking.",
    },
    {
      id: 10,
      service_name: "Branding & Identity",
      image: "/images/service1.jpg",
      description:
        "Brand identity development including logo design, color themes, and brand guideline creation.",
    },
  ];

  return (
    <div>
      <p className="text-amber-800 font-bold">This is services page</p>
      <div className="grid grid-cols-3 space-x-2 space-y-5">
        {data.map((d) => {
          return (
            <Link href={`/services/${d.id}`} key={d.id}>
              <div className="border-2 border-amber-500 p-2 m-2">
                <p>Service no: {d.id}</p>
                <p>Service name: {d.service_name}</p>
                <img src={d.image} alt={d.service_name} className="w-72 h-72" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default servicesPage;
