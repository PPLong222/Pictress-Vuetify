/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/AddPage': RouteRecordInfo<'/AddPage', '/AddPage', Record<never, never>, Record<never, never>>,
    '/board/[id]': RouteRecordInfo<'/board/[id]', '/board/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/BoardPage': RouteRecordInfo<'/BoardPage', '/BoardPage', Record<never, never>, Record<never, never>>,
    '/FriendPage': RouteRecordInfo<'/FriendPage', '/FriendPage', Record<never, never>, Record<never, never>>,
    '/LoginPage': RouteRecordInfo<'/LoginPage', '/LoginPage', Record<never, never>, Record<never, never>>,
    '/MyWorksPage': RouteRecordInfo<'/MyWorksPage', '/MyWorksPage', Record<never, never>, Record<never, never>>,
    '/pin/[id]': RouteRecordInfo<'/pin/[id]', '/pin/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/search/[keyword]': RouteRecordInfo<'/search/[keyword]', '/search/:keyword', { keyword: ParamValue<true> }, { keyword: ParamValue<false> }>,
    '/SignupPage': RouteRecordInfo<'/SignupPage', '/SignupPage', Record<never, never>, Record<never, never>>,
    '/StreamPage': RouteRecordInfo<'/StreamPage', '/StreamPage', Record<never, never>, Record<never, never>>,
  }
}
