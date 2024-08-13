import BlogCard from "@/components/Cards/BlogCard";
import RecipeCard from "@/components/Cards/RecipeCard";
import { mockBlogs } from "@/mock/blogs";
import { mockTrendingFoods } from "@/mock/trending";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="py-12 flex md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Discover Delicious Recipes
          </h1>
          <p className="mb-8 leading-relaxed">
            Explore a world of flavors with our curated selection of
            mouth-watering recipes.
          </p>
          <div className="flex justify-center">
            <Link
              href="/recipe"
              className="inline-flex text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-accent rounded text-lg"
            >
              View Recipes
            </Link>
          </div>
        </div>
      </div>

      <section className="overflow-hidden py-12 ">
        {/* <div className="mx-auto"> */}
        <h2 className="text-4xl font-bold text-white m-2">Recent Blogs</h2>
        <div className="flex">
          {mockBlogs.map((recipe) => (
            <BlogCard {...recipe} key={recipe.id} />
          ))}
        </div>
        {/* </div> */}
      </section>

      <section className="overflow-hidden py-12 ">
        {/* <div className="mx-auto"> */}
        <h2 className="text-4xl font-bold text-white m-2">Trending</h2>
        <div className="flex">
          {mockTrendingFoods.map((trending) => (
            <Link href={`/recipe/${trending.id}`} key={trending.id}>
              <RecipeCard {...trending} />
            </Link>
          ))}
        </div>
        {/* </div> */}
      </section>
    </main>
  );
}
