import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NotePage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  const getNote = async () => {
    let response = await fetch(`/api/notes/${id}/`);
    let data = await response.json();
    console.info(data, "this is data");
    setNote(data);
  };

  useEffect(() => {
    getNote();
  }, [id]);

  return (
    <div>
      <h5>This is note page</h5>
      <h5>{note?.body}</h5>
      {/* {note.map((item) => (
      ))} */}
    </div>
  );
};

export default NotePage;
