import { Link, Outlet, useNavigation } from "react-router-dom";

export default function Root() {
  const navigation = useNavigation();

  return (
    <>
      <div id="sidebar">
        <h1>Workshop Exercises</h1>
        <h2>Examples</h2>
        <nav>
          <ul>
            <li>
              <Link to={`/example-1-configuration-component`}>
                Example 1: Configuration Component
              </Link>
            </li>
            <li>
              <Link to={`/example-1-render-props`}>
                Example 1: Render Props
              </Link>
            </li>
            <li>
              <Link to={`/example-1-compound-component`}>
                Example 1: Compound Component
              </Link>
            </li>
            <li>
              <Link to={`/example-2-controlled-compound-component`}>
                Example 2: Controlled Compound Component
              </Link>
            </li>
            <li>
              <Link to={`/example-2-uncontrolled-compound-component`}>
                Example 2: Uncontrolled Compound Component
              </Link>
            </li>
          </ul>
        </nav>
        <h2>Exercises</h2>
        <nav>
          <ul>
            <li>
              <Link to={`/exercise-1-configuration-component`}>
                Exercise 1: Configuration Component
              </Link>
            </li>
            <li>
              <Link to={`/exercise-1-render-props`}>
                Exercise 1: Render Props
              </Link>
            </li>
            <li>
              <Link to={`/exercise-1-compound-component`}>
                Exercise 1: Compound Component
              </Link>
            </li>
            <li>
              <Link to={`/exercise-2-compound-component`}>
                Exercise 2: Compound Component
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}
