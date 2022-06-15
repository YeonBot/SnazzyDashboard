## 부트 스트랩 일부 css를 react css module 을 이용해 수정하는데 우선순위 문제로 인해 적용이 안되는 이슈.

아래 해결법들을 찾아봤지만,
1. !import
2. 부트스트램 sass 파일을 찾아 커스텀 하는법 -> 원하는 방법이 아님
3. css적용 우선순위를 변경하는 방법. -> id 값을 부여해 사용하는 방법.

이 경우는 index.tsx에서 import 'bootstrap.css' 라인을 app 상단으로 올려주면 해결 되는 문제 였음.