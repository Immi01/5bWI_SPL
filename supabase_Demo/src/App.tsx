import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://kcfanhjycumnnyuwhihc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjZmFuaGp5Y3Vtbm55dXdoaWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2MjQ1NzgsImV4cCI6MjA1MzIwMDU3OH0.0PmVwdtTEJq_4hlEhYcZ1dZkx7CvZeTtg0DaGu9nsn4"
);

function App() {

  type Homework = {
    created_at: Date,
    description: string,
    due: Date,
    id: number,
    subject: string
  };

  const [homework, setHomework] = useState<Homework[]>([]);

  useEffect(() => {
    getHomework().then((data) => setHomework(data));
    getHomework();
  }, []);

  async function getHomework():Promise<Homework[]> {
    const data = await supabase.from("homework").select("*");
    let converted:Homework[] = [];
    if (data.data != null) {
      for (let i = 0; i < data.data.length; i++) {
        converted[i] = {
          created_at: new Date(data.data[i].created_at),
          description: data.data[i].description,
          due: new Date(data.data[i].due),
          id: data.data[i].id,
          subject: data.data[i].subject
        };
      }
      converted = data.data;
      console.log(converted[0].created_at);
    }
    return converted;
  }

  return (
    <ul>
      {homework.map((hw:Homework) => (
        <li key={hw.id}>{hw.subject}</li>
      ))}
    </ul>
  );
}

export default App;