import { Link, Outlet, useNavigation } from "react-router-dom";

export default function Root() {
  const navigation = useNavigation();

  return (
    <>
      {/* Sidebar */}
      <div
        id="sidebar"
        className="w-88 bg-gray-100 border-r border-gray-300 flex flex-col px-8"
      >
        <h1 className="text-base font-medium flex items-center m-0 py-4 px-8 border-t border-gray-300 order-1 leading-none">
          Workshop Exercises
        </h1>

        {/* Examples Section */}
        <h2 className="text-lg font-semibold mt-4 mb-2">Examples</h2>
        <nav className="flex-1 overflow-auto">
          <ul className="list-none p-0 m-0">
            <li className="my-1">
              <Link
                to={`/example-1-configuration-component`}
                className="flex items-center justify-between whitespace-pre py-2.5 px-2 rounded-lg text-inherit no-underline gap-4 hover:bg-gray-300"
              >
                {"Example 1: <Select> Configuration Component"}
              </Link>
            </li>
            <li className="my-1">
              <Link
                to={`/example-1-render-props`}
                className="flex items-center justify-between whitespace-pre py-2.5 px-2 rounded-lg text-inherit no-underline gap-4 hover:bg-gray-300"
              >
                {"Example 1: <Select> Render Props"}
              </Link>
            </li>
            <li className="my-1">
              <Link
                to={`/example-1-compound-component`}
                className="flex items-center justify-between whitespace-pre py-2.5 px-2 rounded-lg text-inherit no-underline gap-4 hover:bg-gray-300"
              >
                {"Example 1: <Select> Compound Component"}
              </Link>
            </li>
            <li className="my-1">
              <Link
                to={`/example-2-context-compound-component`}
                className="flex items-center justify-between whitespace-pre py-2.5 px-2 rounded-lg text-inherit no-underline gap-4 hover:bg-gray-300"
              >
                {"Example 2: <Tabs> Context Driven Compound Component"}
              </Link>
            </li>
            <li className="my-1">
              <Link
                to={`/example-2-context-and-children-compound-component`}
                className="flex items-center justify-between whitespace-pre py-2.5 px-2 rounded-lg text-inherit no-underline gap-4 hover:bg-gray-300"
              >
                {"Example 2: <Tabs> Context And Children Compound Component"}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Exercises Section */}
        <h2 className="text-lg font-semibold mt-4 mb-2">Exercises</h2>
        <nav className="flex-1 overflow-auto">
          <ul className="list-none p-0 m-0">
            <li className="my-1">
              <Link
                to={`/exercise-1-configuration-component`}
                className="flex items-center justify-between whitespace-pre py-2.5 px-2 rounded-lg text-inherit no-underline gap-4 hover:bg-gray-300"
              >
                {"Exercise 1: <Breadcrumbs> Configuration Component"}
              </Link>
            </li>
            <li className="my-1">
              <Link
                to={`/exercise-1-render-props`}
                className="flex items-center justify-between whitespace-pre py-2.5 px-2 rounded-lg text-inherit no-underline gap-4 hover:bg-gray-300"
              >
                {"Exercise 1: <Breadcrumbs> Render Props"}
              </Link>
            </li>
            <li className="my-1">
              <Link
                to={`/exercise-1-compound-component`}
                className="flex items-center justify-between whitespace-pre py-2.5 px-2 rounded-lg text-inherit no-underline gap-4 hover:bg-gray-300"
              >
                {"Exercise 1: <Breadcrumbs> Compound Component"}
              </Link>
            </li>
            <li className="my-1">
              <Link
                to={`/exercise-2-solution-compound-component`}
                className="flex items-center justify-between whitespace-pre py-2.5 px-2 rounded-lg text-inherit no-underline gap-4 hover:bg-gray-300"
              >
                {
                  "Exercise 2: <Breadcrumbs> Compound Component using React.Children"
                }
              </Link>
            </li>
            <li className="my-1">
              <Link
                to={`/exercise-3-solution-compound-component`}
                className="flex items-center justify-between whitespace-pre py-2.5 px-2 rounded-lg text-inherit no-underline gap-4 hover:bg-gray-300"
              >
                {
                  "Exercise 2: <Accordion> Compound Component using Context & React.Children"
                }
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Detail Section */}
      <div
        id="detail"
        className={`flex-1 px-8 py-4 w-full ${
          navigation.state === "loading" ? "opacity-25 transition-opacity" : ""
        }`}
      >
        <Outlet />
      </div>
    </>
  );
}
