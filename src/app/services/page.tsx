import Headline from "../../components/headline";
import services from '../../utils/services';
import Image from "next/image";

export default function Page() {
  return (
    <div className="services">
      <Headline
        title="Services"
        description="Lorem, ipsum dolor 
        sit amet consectetur adipisicing elit. Inventore ratione 
        iste minima placeat dolores sit ipsam eius eum quibusdam. 
        Tenetur magnam perspiciatis repellendus nostrum fuga autem 
        facere cupiditate quisquam illum."
      />

      <div className="container-services">
        {services.map((service) => (
            <div key={service.service} className="service">
                <Image 
                className="icon"
                width="48" 
                height="48" 
                src="/icons/draw.png" 
                alt="artist-palette"
                />
                <h3>{service.description}</h3>
                <a href="#" className="learn-more">Learn-more</a>
            </div>
        ))}
      </div>

      <div className="client-testimonials">
        <img src="/images/mountain.jpg" alt="mountain" />
        <div className="content">
            m iddasdjasdkjasdhaskdh
        </div>
      </div>

      <div className="questions">
        <div className="content">
          frequently asked questions
        </div>
        <div className="questions-list">
          <ul>
            <li>mivida es negra?</li>
            <li>su vieja es negra?</li>
            <li>esos malditos americanos?</li>
            <li>yo te amo, pero mi pistola no</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
