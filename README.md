# MARVEL HEROES GALLERY

[![example workflow](https://github.com/xandrlev/aston-react-project/actions/workflows/cdci.yml/badge.svg)](https://github.com/xandrlev/aston-react-project/actions) [![Netlify Status](https://api.netlify.com/api/v1/badges/bb393d79-a0be-4a50-b12b-ae7a722ca5f4/deploy-status)](https://app.netlify.com/sites/marvelsheroes/deploys)

- Использованное API: [MARVEL API](https://developer.marvel.com/)
- Деплой: [marvelsheroes.netlify.app](https://marvelsheroes.netlify.app/)

---

## 1 уровень (обязательный - необходимый минимум)

- [x] Реализованы Требования к функциональности
- [ ] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем LocalStorage (в качестве БД используется [FireBase](https://github.com/xandrlev/aston-react-project/blob/main/src/firebase.ts))

### React

- [x] Пишем функциональные компоненты c хуками в приоритете над классовыми [Components](https://github.com/xandrlev/aston-react-project/tree/main/src/components), [Pages](https://github.com/xandrlev/aston-react-project/tree/main/src/pages)
- [x] Есть разделение на умные и глупые компоненты: [Умный](https://github.com/xandrlev/aston-react-project/blob/main/src/components/Search/Search.tsx), [Глупый](https://github.com/xandrlev/aston-react-project/blob/main/src/pages/NotFound/NotFound.tsx)
- [x] Есть рендеринг списков: [List](https://github.com/xandrlev/aston-react-project/blob/main/src/components/List/List.tsx)
- [x] Реализована хотя бы одна форма: [Form](https://github.com/xandrlev/aston-react-project/blob/main/src/components/Form/Form.tsx)
- [x] Есть применение Контекст API: [ThemeProvider](https://github.com/xandrlev/aston-react-project/blob/main/src/pages/providers/ThemeProvider.tsx)
- [x] Есть применение предохранителя: [ErrorBoundary](https://github.com/xandrlev/aston-react-project/blob/main/src/components/ErrorBoundary/ErrorBoundary.tsx)
- [x] Есть хотя бы один кастомный хук: [useSaveGetData](https://github.com/xandrlev/aston-react-project/blob/main/src/hooks/useSaveGetData.ts), [useHistory](https://github.com/xandrlev/aston-react-project/blob/main/src/hooks/useHistory.ts), [useFavorite](https://github.com/xandrlev/aston-react-project/blob/main/src/hooks/useFavorite.ts)
- [x] Хотя бы несколько компонентов используют PropTypes: [Button](https://github.com/xandrlev/aston-react-project/blob/main/src/components/Button/GoBack/GoBack.tsx), [Form](https://github.com/xandrlev/aston-react-project/blob/main/src/components/Form/Form.tsx)
- [x] Поиск не должен триггерить много запросов к серверу (debounce): [useDebounce](https://github.com/xandrlev/aston-react-project/blob/main/src/hooks/useDebounce.ts)
- [x] Есть применение lazy + Suspense: [AppRoutes](https://github.com/xandrlev/aston-react-project/blob/main/src/Routes/AppRoutes.tsx)

### Redux

- [x] Используем Modern Redux with Redux Toolkit: [store](https://github.com/xandrlev/aston-react-project/blob/main/src/store/store.ts)
- [x] Используем слайсы: [userSlice](https://github.com/xandrlev/aston-react-project/blob/main/src/store/slices/userSlice.ts)
- [x] Есть хотя бы одна кастомная мидлвара или createListenerMiddleware: [Logger](https://github.com/xandrlev/aston-react-project/blob/main/src/store/middleware/userLoginLoggerMiddleware.ts)
- [x] Используется RTK Query: [heroesApi](https://github.com/xandrlev/aston-react-project/blob/main/src/store/api/heroesApi.ts)
- [x] Используется Transforming Responses: [heroesApi](https://github.com/xandrlev/aston-react-project/blob/main/src/store/api/heroesApi.ts)

---

## 2 уровень (необязательный)

- [x] Используется [TypeScript](https://github.com/xandrlev/aston-react-project/blob/main/src/types/heroes.ts)
- [x] Настроен [CI/CD](https://github.com/xandrlev/aston-react-project/blob/main/.github/workflows/cdci.yml)
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем [FireBase](https://github.com/xandrlev/aston-react-project/blob/main/src/firebase.ts)

### Дополнительные библиотеки:

- [Axios](https://github.com/axios/axios?ysclid=lu0w51artn196107802)
- [SASS](https://github.com/sass/sass?ysclid=lu0w0kfp055117541)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Spinners](https://github.com/davidhu2000/react-spinners)
- [vite-plugin-webpackchunkname](https://github.com/CaptainLiao/vite-plugin-webpackchunkname?ysclid=lu0w3v1anh551508666)
