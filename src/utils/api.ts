import http from "@/utils/http";

export function getCosApi(lastId: string) {
  return http.get(`/mihoyo/post/wapi/getForumPostList?forum_id=49&gids=2&is_good=false&is_hot=false&last_id=${lastId}&page_size=20&sort_type=1`);
}
export function getTongrenApi(lastId: string) {
  return http.get(`/mihoyo/post/wapi/getForumPostList?forum_id=29&gids=2&is_good=false&is_hot=false&last_id=${lastId}&page_size=20&sort_type=1`);
}
