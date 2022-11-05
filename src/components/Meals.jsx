import { useGlobalContext } from "../context/context";
import { AiOutlineHeart } from "react-icons/ai";

const Meals = () => {
  const { loading, meals, selectMeal, addToFavorites } = useGlobalContext();

  if (loading) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (meals.length < 1) {
    return (
      <section className="section">
        <h4>No meals matched your search term. Please try again.</h4>
      </section>
    );
  }

  return (
    <section className="section-center">
      {meals.map((singleMeal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
        return (
          <article key={idMeal} className="single-meal">
            <img
              src={image}
              className="img"
              onClick={() => selectMeal(idMeal)}
              alt="meal"
            />
            <footer>
              <h5>{title}</h5>
              <button
                className="like-btn"
                onClick={() => addToFavorites(idMeal)}
              >
                <AiOutlineHeart />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};
export default Meals;
