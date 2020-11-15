# Johnyworld UI

This is UI library for johnyworld 2021 web portfolio site!

## Install

### Required dependencies

> 이 패키지를 사용하려는 프로젝트에 반드시 설치되어 있어야합니다.

- react
- styled-components
- typescript
- @types/react
- @types/styled-components

### Publish for development to test

> 패키지를 테스트하기 위해 약간의 귀찮은 과정이 필요합니다.

```
yarn pack
```

위 명령어로 생성된 tgz 파일을 원하는 위치에 압축해제 한 다음,
이 패키지를 테스트 할 프로젝트에서 해당 폴더를 인스톨합니다.

```
example)
yarn add ../package
```

### Publish to NPM repository

> 새로 만든 모듈 index 에 import & export 했는지 꼭 확인!

1. `package.json` 버전 올리기
2. `CHANGELOG.md` 작성
3. `yarn build`
4. `git commit -m "..."`
5. `npm publish`
