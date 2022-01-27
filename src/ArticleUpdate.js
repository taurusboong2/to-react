import React from 'react';

const ArticleUpdate = () => {
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
          <select name="ud_type" id="ud_type" onChange="">
            <option value="notice" selected>
              notice
            </option>
            <option value="question">question</option>
            <option value="talking">talking</option>
            <option value="etc">etc</option>
          </select>
          <label htmlFor="title">
            title을 수정 해주세요. <b>*필수</b>
          </label>
          <input type="text" name="title" id="ud_title" placeholder="title 수정" />
          <label htmlFor="des">
            des 수정 해주세요. <b>*생략 가능</b>
          </label>
          <textarea name="ud_des" id="ud_des" cols="30" rows="5" placeholder="des 수정" />
          <label htmlFor="author">
            author을 수정 해주세요. <b>*필수</b>
          </label>
          <input type="text" name="author" id="ud_author" placeholder="author 수정" />
        </div>
        <div id="udbtn_wrap">
          <input type="button" id="ud_btn" value="수정하기" onClick="updateData()" />
        </div>
      </main>
    </div>
  );
};

export default ArticleUpdate;
