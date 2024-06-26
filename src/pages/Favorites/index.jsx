import Recipe from "../../components/Recipe";
import { useFavoriteContext } from "../../contexts/Favorite";

export default function Favorites() {
  const { favorite } = useFavoriteContext();

  return (
    <div className="flex flex-col mt-0 gap-10 items-left shadow-md p-10 rounded-3xl bg-slate-50 h-full w-full">
      <div className="favorites-recipies">
        {favorite.length > 0 ? (
          <section className="space-y-4">
            {favorite.map((fav) => {
              return (
                <Recipe
                  showElipse={true}
                  imgDisplay={false}
                  {...fav}
                  key={fav.id}
                />
              );
            })}
          </section>
        ) : (
          <div>Selecione um favorito no feed de receitas!</div>
        )}
      </div>
    </div>
  );
}
