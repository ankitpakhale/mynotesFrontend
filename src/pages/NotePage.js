import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

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
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to={"/"}>
            <ArrowLeft />
          </Link>
        </h3>
      </div>
      <textarea defaultValue={note?.body}></textarea>
    </div>
  );
};

export default NotePage;
