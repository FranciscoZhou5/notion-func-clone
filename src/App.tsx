import Editor from "./components/Editor";

function App() {
  return (
    <div className="text-zinc-50  bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 min-h-screen w-full p-8">
      <div className="bg-zinc-900 max-w-[1200px] min-h-[720px] mx-auto rounded-md border border-black/20 shadow-sm">
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  );
}

export default App;
