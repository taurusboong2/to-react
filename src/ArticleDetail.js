import React from 'react';

const ArticleDetail = ({ match }) => {
  console.log(match.params);
  return (
    <div>
      <header id="detail_header">
        <h1>Article Detail</h1>
      </header>
      <main>
        <div id="detail_wrap">
          <p id="detail_type" />
          <h2 id="detail_title" />
          <h3 id="detail_author" />
          <p id="detail_des" />
          <div id="time_wrap">
            <p id="detail_create">
              생성시간:
              <b id="create_data" />
            </p>
            <p id="detail_update">
              수정시간:
              <b id="update_data" />
            </p>
          </div>
        </div>
        <div id="btn_wrap">
          <div id="delete_btn" onClick="deleteData()">
            삭제
          </div>
          <a id="update_btn" href="">
            수정
          </a>
        </div>
      </main>
    </div>
  );
};

export default ArticleDetail;
