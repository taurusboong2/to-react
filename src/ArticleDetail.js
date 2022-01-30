import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const ArticleDetail = ({ match }) => {
  const [type, setType] = useState(null);
  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [des, setDes] = useState(null);
  const [create, setCreate] = useState(null);
  const [update, setUpdate] = useState(null);

  const history = useHistory();

  const id = match.params.id;
  console.log(match.params);

  const putData = async () => {
    try {
      const response = await axios.get(`http://localhost:1337/api/articles/${id}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  putData().then(res => {
    const data = res.data.attributes;
    setType(data.type);
    setTitle(data.title);
    setAuthor(data.author);
    setDes(data.description);
    setCreate(data.createdAt);
    setUpdate(data.updatedAt);
  });

  const deleteData = async () => {
    try {
      const response = await axios.delete(`http://localhost:1337/api/articles/${id}`);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
    history.goBack();
  };

  return (
    <div>
      <header id="detail_header">
        <h1>Article Detail</h1>
      </header>
      <main>
        <div id="detail_wrap">
          <p id="detail_type">{type}</p>
          <h2 id="detail_title">{title}</h2>
          <h3 id="detail_author">{author}</h3>
          <p id="detail_des">{des}</p>
          <div id="time_wrap">
            <p id="detail_create">
              생성시간:{create}
              <b id="create_data" />
            </p>
            <p id="detail_update">
              수정시간:{update}
              <b id="update_data" />
            </p>
          </div>
        </div>
        <div id="btn_wrap">
          <div id="delete_btn" onClick={deleteData}>
            삭제
          </div>
          <Link
            id="update_btn"
            to={{
              pathname: `/update/${id}`,
            }}
          >
            수정
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ArticleDetail;
