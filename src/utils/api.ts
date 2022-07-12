import http from "@/utils/http";

export function getCosApi(lastId: string) {
  return http.get("/photo/cos/" + lastId);
}
export function getTongrenApi(lastId: string) {
  return http.get("/photo/tongren/" + lastId);
}
