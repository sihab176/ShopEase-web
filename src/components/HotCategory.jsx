const HotCategory=()=> {
  const deals = [
    {
      id: 1,
      title: "UNDER $99 STORE",
      subtitle: "HOT DEALS",
      btn: "SHOP NOW",
      image:
        "/game.jpg",
      bg: "bg-[#ffcad4]",
    },
    {
      id: 2,
      title: "EXTRA 5% OFF ON $50",
      subtitle: "HOT DEALS",
      btn: "SHOP NOW",
      image:
        "/headPhone-removebg-preview.png",
      bg: "bg-[#ffe5d9]",
    },
    {
      id: 3,
      title: "EXTRA $55 OFF",
      subtitle: "HOT DEALS",
      btn: "ORDER NOW",
      image:
        "/iphone-removebg-preview.png",
      bg: "bg-[#d8e2dc]",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        🔥 Hot Deals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className={`relative overflow-hidden rounded-xl  shadow-md group ${deal.bg}`}
          >
            {/* Image */}
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-64 opacity-70 group-hover:scale-110 duration-500"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <span className="text-xl uppercase tracking-widest font-semibold " >
                {deal.subtitle}
              </span>
              <h3 className="text-2xl font-bold mt-2">{deal.title}</h3>
              <button className="mt-4 px-5 py-2 bg-white text-gray-800 font-medium rounded-md shadow hover:bg-gray-200 transition">
                {deal.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default HotCategory
