import React from 'react';

const ArticleCreate = () => {
  return (
    <div>
      <header id="create_header">
        <h1>Article Detail</h1>
      </header>
      <div id="form_wrap">
        <form method="POST">
          <label htmlFor="title">
            title을 입력 해주세요. <b>*필수</b>
          </label>
          <input type="text" name="title" id="title" placeholder="title 입력" />
          <label htmlFor="des">
            des 입력 해주세요. <b>*생략 가능</b>
          </label>
          <textarea name="des" id="des" cols="30" rows="5" placeholder="des 입력" />
          <label htmlFor="author">
            author을 입력 해주세요. <b>*필수</b>
          </label>
          <input type="text" name="author" id="author" placeholder="author 입력" />
          <label htmlFor="type">
            type를 선택 해주세요.<b>*필수</b>
          </label>
          <div id="radio_box">
            <input type="radio" id="notice" name="type" value="notice" />
            <label htmlFor="notice">notice</label>
            <input type="radio" id="question" name="type" value="question" />
            <label htmlFor="question">question</label>
            <input type="radio" id="talking" name="type" value="talking" />
            <label htmlFor="talking">talking</label>
            <input type="radio" id="etc" name="type" value="etc" />
            <label htmlFor="etc">etc</label>
          </div>
          <input id="submit_btn" type="button" value="생성" />
        </form>
      </div>
    </div>
  );
};

export default ArticleCreate;
