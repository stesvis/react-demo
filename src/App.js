import "./App.css";

import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

function App() {
  return (
    <div>
      <ButtonComponent type="button" cssClass="btn btn-primary">
        Syncfusion Button
      </ButtonComponent>
      <br />
      <br />

      <button type="button" className="btn btn-primary">
        Theme button
      </button>
    </div>
  );
}

export default App;
