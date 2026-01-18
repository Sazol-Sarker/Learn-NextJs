const serviceDetails = ({ params }) => {
  const { id } = params;
  console.log("params id=>", id);
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

  const singleData = data.find((d) => d.id == id);

  return (
    <div className="border-2 border-amber-500 mx-2 my-5 p-2">
      <p>Service details page</p>
      <p>Service no: {singleData.id}</p>
      <img
        src={singleData.image}
        alt={singleData.service_name}
        className="w-72 h-72"
      />
    </div>
  );
};

export default serviceDetails;
