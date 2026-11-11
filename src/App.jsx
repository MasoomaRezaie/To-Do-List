import Header from "./components/Header"
import Progress from "./components/Progress"
import ProgressGraph from "./components/ProgressGraph"
import Tasks from "./components/Tasks"
import { TaskProvider } from "./context/TaskContext";
import { DarkmodeProvider, useDarkmode } from "./context/DarkmodeContext";

function AppContent() {
  const { isDarkMode } = useDarkmode();

  return (
    <div className={`${isDarkMode ? "dark" : ""} min-h-screen h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
     dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
      <main className="px-10 py-5">
        <Header/>
        <TaskProvider>
          <Progress />
          <div className="flex gap-3">
            <ProgressGraph/>
            <Tasks />
          </div>
        </TaskProvider>
      </main>
    </div>
  )
}

function App() {
  return (
    <DarkmodeProvider>
      <AppContent />
    </DarkmodeProvider>
  );
}

export default App