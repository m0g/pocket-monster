import { useForm, SubmitHandler } from "react-hook-form";
import fetchGraphQL from "../fetchGraphQL";

type Inputs = {
  query: string;
  example: string;
  exampleRequired: string;
};

export default function SearchForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetchGraphQL(
      `query ExampleQuery($allPokemonLimit: Int) {
        allPokemon(limit: $allPokemonLimit) {
        id
        name
        types {
            name
        }
        sprites {
            front_default
        }
        }
    }`,
      {}
    ).then((response) => console.log(response));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("query")} />
      {errors.query && <span>This field is required</span>}
      <input type="submit" value="search" />
    </form>
  );
}
