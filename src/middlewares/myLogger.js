const myLogger = store => next => action => {
  console.log('action ::', action);

  const result = next(action);

  // 업데이트 이후의 상태를 조회
  console.log('\t', store.getState());

  return result;
}

export default myLogger;