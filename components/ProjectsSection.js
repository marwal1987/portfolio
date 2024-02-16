import Card from "./Card";

export default function ProjectsSection() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white m-4">
        My Projects
      </h2>
      <div className="container flex flex-row flex-wrap gap-12 justify-center items-center">
        <Card
          title="Project 1"
          description="Description 1"
          usedTech="HTML CSS React Tailwind"
          url="website"
        />
        <Card
          title="Project 2"
          description="Description 2"
          usedTech="HTML CSS React Tailwind"
          url="website"
        />
        <Card
          title="Project 3"
          description="Description 3"
          usedTech="HTML CSS React Tailwind"
          url="website"
        />
        <Card
          title="Project 4"
          description="Description 4"
          usedTech="HTML CSS React Tailwind"
          url="website"
        />
        <Card
          title="Project 5"
          description="Description 5"
          usedTech="HTML CSS React Tailwind"
          url="website"
        />
        <Card
          title="Project 6"
          description="Description 6"
          usedTech="HTML CSS React Tailwind"
          url="website"
        />
      </div>
    </section>
  );
}
