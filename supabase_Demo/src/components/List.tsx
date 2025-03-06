import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://kcfanhjycumnnyuwhihc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjZmFuaGp5Y3Vtbm55dXdoaWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2MjQ1NzgsImV4cCI6MjA1MzIwMDU3OH0.0PmVwdtTEJq_4hlEhYcZ1dZkx7CvZeTtg0DaGu9nsn4"
);

function App({reload}: {reload: Boolean}) {

  type Homework = {
    created_at: Date,
    description: string,
    due: Date,
    id: number,
    subject: string
  };
  const empty:Error = new Error("Response Empty");

  const [homework, setHomework] = useState<Homework[]>([]);

  useEffect(() => {
    getHomework().then((data) => setHomework(data));
    getHomework()
    .catch((e) => {
      if (e==empty) {
        alert(e.message);
      } else {
        alert("Unable to get Homework")
      }
    });
  }, [reload]);

  async function getHomework():Promise<Homework[]> {
    const {data:hw, error} = await supabase.from("homework").select("*");

    if (error != null) {
      throw error;
    }

    let converted:Homework[];
    if (hw != null) {
      converted = convertToHomework(hw);
    } else {
      throw empty;
    }
    return converted;
  }

  function convertToHomework(toConv:any[]):Homework[] {

    let converted:Homework[] = [];
    for (let i = 0; i < toConv.length; i++) {

      converted[i] = {
        created_at: new Date(toConv[i].created_at),
        description: toConv[i].description,
        due: new Date(toConv[i].due),
        id: toConv[i].id,
        subject: toConv[i].subject
      };
    }

    return converted;
  }

  return (
    <ul className="text-white font-medium p-4 px-5">
      {homework.map((hw:Homework) => (
        <li key={hw.id} className="border-b-3 border-neutral-800 last:border-none last:pb-0 first:pt-0 py-3">
          <h2 className="text-xl leading-none font-semibold pb-1.5"> {hw.subject} </h2>
          <div className="text-xs font-semibold text-zinc-400">Fällig am {hw.due.toLocaleDateString()}</div>
          {hw.description}
        </li>
      ))}
    </ul>
  );
}

export default App;