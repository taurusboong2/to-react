import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const ArticleUpdate = ({ match }) => {
  const history = useHistory();
  const id = match.params.id;
  console.log(match);

  const [inputs, setInputs] = useState({
    type: '',
    title: '',
    description: '',
    author: '',
  });

  const { type, title, description, author } = inputs;

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    // console.log(name, ':', value);
  };

  const updateData = async () => {
    // console.log(inputs);
    try {
      const response = await axios.put(`http://localhost:1337/api/articles/${id}`, {
        data: {
          ...inputs,
        },
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
    history.goBack();
    console.log(`인풋후`, inputs);
  };

  return (
    <div>
      <header id="update_header">
        <h1>Article Update</h1>
      </header>
      <main>
        <div id="ud_wrap">
          <label htmlFor="type">
            type를 선택 해주세요.<b>*필수</b>
          </label>
          <select name="type" id="ud_type" value={type} onChange={onChange}>
            <option value="notice">notice</option>
            <option value="question">question</option>
            <option value="talking">talking</option>
            <option value="etc">etc</option>
          </select>
          <label htmlFor="title">
            title을 수정 해주세요. <b>*필수</b>
          </label>
          <input type="text" name="title" id="ud_title" placeholder="title 수정" value={title} onChange={onChange} />
          <label htmlFor="des">
            des 수정 해주세요. <b>*생략 가능</b>
          </label>
          <textarea
            name="description"
            id="ud_des"
            cols="30"
            rows="5"
            placeholder="des 수정"
            value={description}
            onChange={onChange}
          />
          <label htmlFor="author">
            author을 수정 해주세요. <b>*필수</b>
          </label>
          <input
            type="text"
            name="author"
            id="ud_author"
            placeholder="author 수정"
            value={author}
            onChange={onChange}
          />
        </div>
        <div id="udbtn_wrap">
          <input type="button" id="ud_btn" value="수정하기" onClick={updateData} />
        </div>
      </main>
    </div>
  );
};

export default ArticleUpdate;
