import { useState } from "react";
import IssuesList from "../components/IssuesList";
import LabelList from "../components/LabelList";
export default function Issues() {
  const [labels, setlabels] = useState([]);
  return (
    <div>
      <main>
        <section>
          <h1>Issues</h1>
          <IssuesList labels={labels} />
        </section>
        <aside>
          <LabelList
            selected={labels}
            toggle={(currentLabel) => {
              setlabels((prevState) =>
                prevState.includes(currentLabel)
                  ? prevState.filter((prevLabel) => prevLabel !== currentLabel)
                  : prevState.concat(currentLabel)
              );
            }}
          />
        </aside>
      </main>
    </div>
  );
}
