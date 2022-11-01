import { LOCAL_STORAGE } from "@/consts/local_storage.const";

function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getItem(key) {
  const data = localStorage.getItem(key);
  return JSON.parse(data) || "";
}

function removeItem(key) {
  localStorage.removeItem(key);
}

function getUserInfo() {
  return getItem(LOCAL_STORAGE.USER.toString());
}

export function userLocalStorage() {
  return { setItem, getItem, removeItem, getUserInfo };
}
