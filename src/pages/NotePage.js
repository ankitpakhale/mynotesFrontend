import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState(null);

  const getNote = async () => {
    if (id === "new") return;

    let response = await fetch(`/api/notes/${id}/`);
    let data = await response.json();
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

  const createNote = async () => {
    fetch("/api/posts/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    console.info("new note added successfully");
    navigate("/");
  };

  const deleteNote = async () => {
    fetch(`/api/notes/${note.id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.info("data deleted successfully");
    navigate("/");
  };

  const handleSubmit = () => {
    if (id !== "new" && note.body === "") {
      deleteNote();
    } else if (id !== "new") {
      updateNote();
    } else if (id === "new" && note !== null) {
      createNote();
    }
    navigate("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={() => handleSubmit()} />
        </h3>
        {id === "new" ? (
          <button onClick={() => handleSubmit()}>Done</button>
        ) : (
          <button onClick={() => deleteNote()}>Delete</button>
        )}
      </div>
      <button onClick={() => console.info(note.body)}>Show data</button>
      <textarea
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
