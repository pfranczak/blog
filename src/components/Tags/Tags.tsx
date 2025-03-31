import "./Tags.css";
import { Tag } from "@/components/Tags/Tag";
import { getCategories } from "@/services/caterogies";

export async function Tags() {
  const { categories } = await getCategories();

  return (
    <div className="flex justify-around flex-wrap px-2 gap-y-2 mt-5">
      {categories.map((category) => (
        <Tag key={category.slug} slug={category.slug}>{category.name}</Tag>
      ))}
    </div>
  );
}