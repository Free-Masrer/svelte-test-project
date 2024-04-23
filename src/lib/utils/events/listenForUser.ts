export type UserInfo = {
  name: string;
};

function isCustomEvent(event: Event): event is CustomEvent {
  return "detail" in event;
}

/**
 * Interface can be redefined in future and mb even splitted
 */
export function listenForUser(callback: (userInfo: UserInfo) => void) {
  function listenerCallback(event: Event) {
    //  mb add one more guard for UserInfo type
    if (isCustomEvent(event)) {
      const userInfo: UserInfo = event.detail;
      callback(userInfo);
    }
  }

  window.document.addEventListener("updateUser", listenerCallback);

  return window.document.removeEventListener.bind(
    window.document,
    "updateUser",
    listenerCallback,
  );
}
