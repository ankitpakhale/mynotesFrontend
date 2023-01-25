import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = () => {
  const navigate = useNavigate();

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

  const updateNote = async () => {
    fetch(`/api/notes/${note.id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const handleSubmit = () => {
    updateNote();
    navigate("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={() => handleSubmit()} />
        </h3>
      </div>
      <textarea
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        defaultValue={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
