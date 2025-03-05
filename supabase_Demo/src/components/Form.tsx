import { createClient } from "@supabase/supabase-js";
import { FormEvent } from "react";

const supabase = createClient(
  "https://kcfanhjycumnnyuwhihc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjZmFuaGp5Y3Vtbm55dXdoaWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2MjQ1NzgsImV4cCI6MjA1MzIwMDU3OH0.0PmVwdtTEJq_4hlEhYcZ1dZkx7CvZeTtg0DaGu9nsn4"
);

function App() {

  const form = document.getElementById("insert") as HTMLFormElement;

  async function handleSubmit(e:FormEvent) {
    e.preventDefault();
    let data;
    data = new FormData(form);
    if(!data.get("subject") || !data.get("due") || !data.get("description")) {
      alert("Please fill all input fields.")
      return;
    }

    let today  = new Date();
    let dueString = data.get("due")?.toString();
    let due;
    if (dueString) {
      due = new Date(dueString);
      if (due < today) {
        alert("Please select a date in the future.")
        return;
      }
    }

    insertHw(e,data);

  }

  async function insertHw(e:FormEvent, data:FormData) {
    const { error } = await supabase
    .from('homework')
    .insert([
      { subject: data.get("subject"),
        due: data.get("due"),
        description: data.get("description")
      },
    ])
    .select();

    if (error != null) {
      alert(error.message);
    } else {
      alert("Data successfully transmitted")
    }

  }

  return (
    <div className="text-white font-medium p-4 px-5">
      <h2 className="text-xl leading-none font-semibold pb-1.5"> Insert Homework </h2>
      <form className="grid grid-cols-2 gap-y-2" id="insert" onSubmit={(e) => {handleSubmit(e)}}>
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject" className="pl-1.5 bg-white rounded-md text-black"/>
        <label htmlFor="due" >Due</label>
        <input type="date" name="due" id="due"/>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" className="pl-1.5 bg-white rounded-md text-black"></textarea>
        <div className="placeholder"></div>
        <input type="submit" className="font-semibold bg-gradient-to-b from-blue-700 to-blue-500 rounded-md"/>
      </form>
    </div>
  );
}

export default App;