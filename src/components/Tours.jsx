import { tours } from "../data";
import Tour from "./Tour";
import Title from "./Title";

const Tours = () => {
  return (
    <article className="tours" id="tours">
        <Title title='featured' subtitle='tours' />
        <div className="cards">
            {tours.map((tour) => (
            <Tour key={tour.id} {...tour} />
            ))}
{/* key= {item.id} {...data} object destructuring to pass all properties as individual props to the child component i.e. Tour */}
        </div>
    </article>
  );
};

export default Tours