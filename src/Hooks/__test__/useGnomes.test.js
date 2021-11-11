import { render, waitFor, screen } from "@testing-library/react";
import useGnomes from "../useGnomes";

describe("useGnomes", () => {
  const Test = () => {
    const gnomes = useGnomes();
    if (!gnomes.length) {
      return <p>Loading...</p>;
    }
    // else
    return (
      <div>
        <h1>DATA!</h1>
        <div>
          {gnomes.map((gnome) => (
            <p key={gnome.id}>{gnome.id}</p>
          ))}
        </div>
      </div>
    );
  };
  test("it fetches gnomes", async () => {
    render(<Test />);
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
    expect(screen.queryByText("DATA!")).toBeNull();
    // after fetch completes..
    // await waitFor will wait here for this to be true; if it doesn't happen after about five seconds the test fails
    await waitFor(() => expect(screen.getByText("DATA!")).toBeInTheDocument());
    expect(screen.queryByText(/Loading/)).toBeNull();
  });
});
