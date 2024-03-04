export default function Card({ title, description, usedTech, url }) {
  return (
    <article
      id="card"
      className=" bg-white dark:bg-gray-900 flex flex-col p-12 max-w-72 h-80 shadow dark:shadow-white rounded-lg"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
        {title}
      </h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        {description}
      </p>
      <hr />
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Tech Stack:
        <br />
        {usedTech}
      </p>
      <a href={url} className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Link to project
      </a>
    </article>
  );
}
