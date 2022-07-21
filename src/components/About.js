import { FcAbout } from "react-icons/fc";
export default function About() {
  return (
    <div>
      <h2 className="text-center mt-16 text-black flex items-center justify-center text-2xl font-bold">
        <FcAbout className="mr-2.5 h-8 w-8" />
        About The App
      </h2>
      <p className="text-center mt-8 text-xl">
        This App is a kind of app that generally used to maintain our day-to-day
        tasks or list everything that we have to do, with the most important
        tasks at the top of the list, and the least important tasks at the
        bottom. It is helpful in planning our daily schedules. We can add more
        tasks at any time and delete a task that is completed. <br />
      </p>
      <p className="text-center mt-8 text-lg font-bold">
        Command: Double-Click on Task to set Reminder
      </p>
    </div>
  );
}
