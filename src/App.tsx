import Editor from "./editor";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-200">
      <div className="mb-2 w-full max-w-5xl">
        <h4 className="text-3xl font-extrabold text-left w-full">
          Rich Text Editors
        </h4>
      </div>
      <div className="w-full max-w-5xl bg-white p-4">
        <Editor />
      </div>
    </div>
  );
}

export default App;
