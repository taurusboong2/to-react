import React, { useState } from 'react';
import axios from 'axios';

// axios.defaults.withCredentials = true;

const ArticleCreate = () => {
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    author: '',
    type: '',
  });

  const { title, des, author, type } = inputs;

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const sendData = async () => {
    const db = JSON.stringify(inputs);
    const header = { headers: { 'Content-Type': `application/json; charset=utf-8` } };
    console.log(db);
    console.log(inputs);
    try {
      const response = await axios.post('http://localhost:1337/api/articles', {
        data: {
          ...inputs,
        },
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
    console.log(1111);
  };

  return (
    <div>
      <header id="create_header">
        <h1>Article Create</h1>
      </header>
      <div id="form_wrap">
        <form>
          <label htmlFor="title">
            title을 입력 해주세요. <b>*필수</b>
          </label>
          <input type="text" name="title" id="title" placeholder="title 입력" value={title} onChange={onChange} />
          <label htmlFor="des">
            des 입력 해주세요. <b>*생략 가능</b>
          </label>
          <textarea name="des" id="des" cols="30" rows="5" placeholder="des 입력" value={des} onChange={onChange} />
          <label htmlFor="author">
            author을 입력 해주세요. <b>*필수</b>
          </label>
          <input type="text" name="author" id="author" placeholder="author 입력" value={author} onChange={onChange} />
          <label htmlFor="type">
            type를 선택 해주세요.<b>*필수</b>
          </label>
          <div id="radio_box" onChange={onChange}>
            <input type="radio" id="notice" name="type" value="notice" />
            <label htmlFor="notice">notice</label>
            <input type="radio" id="question" name="type" value="question" />
            <label htmlFor="question">question</label>
            <input type="radio" id="talking" name="type" value="talking" />
            <label htmlFor="talking">talking</label>
            <input type="radio" id="etc" name="type" value="etc" />
            <label htmlFor="etc">etc</label>
          </div>
          <input id="submit_btn" type="button" value="생성" onClick={sendData} />
        </form>
      </div>
    </div>
  );
};

export default ArticleCreate;
