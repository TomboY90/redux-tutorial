const sleep = n => new Promise(resolve => setTimeout(resolve), n);

// dummy data
const posts = [
  {
    id: 1,
    title: 'learn about redux middleware',
    body: '리덕스 미들웨어를 직접 만들어 보면 이해하기 쉽습니다.'
  },
  {
    id: 2,
    title: 'how to use redux thunk',
    body: 'redux-thunk를 사용해서 비동기 작업을 처리해 보겠습니다.'
  },
  {
    id: 3,
    title: 'learn about redux-saga',
    body: '나중에 redux-sage를 사용해서 비동기 작업을 처리하는 방법도 알아봅시다.'
  },
]

export const getPosts = async() => {
  await sleep(500);
  return posts;
}

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async id => {
  await sleep(500);
  return posts.find(post => post.id === id);
};