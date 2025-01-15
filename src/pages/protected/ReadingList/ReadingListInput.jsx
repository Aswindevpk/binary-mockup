import React, { useEffect, useState } from "react";
import { api } from "@services/api";
import { toast } from "sonner";

function ReadingListInput({ id }) {
  const [note, setNote] = useState(null);
  const [isActive, setIsActive] = useState(false);
  let [loading, setLoading] = useState(false);


  if (loading) {
    return <div>loading..</div>;
  }



  return (
    <form
      className={`flex justify-between items-center border-l-4 rounded-sm ${
        note ? "border-secondary" : "border-border"
      }`}
    >
      <input
        className="ml-4 max-w-lg focus:outline-none focus:border-secondary  p-2 rounded-md text-sm bg-neutral italic"
        type="text"
        placeholder="Add a note..."
        value={note}
        name="note"
        onFocus={() => setIsActive(true)}
        onChange={(e) => {
          setNote(e.target.value);
        }}
      />
      {isActive && (
        <div className="flex gap-4">
          <input
            type="button"
            className="text-secondary cursor-pointer text-sm"
            onClick={() => setIsActive(false)}
            value="Cancel"
          />
          <input
            type="submit"
            className="text-green-500 cursor-pointer text-sm"
            value="Done"
            onClick={() => {
              setIsActive(false);
            }}
          />
        </div>
      )}
    </form>
  );
}

export default ReadingListInput;
