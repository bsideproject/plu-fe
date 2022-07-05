interface Message {
  type: string;
  data?: any;
}

export const sendRNMessage = (message: Message) => {
  const { type, data } = message;

  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(JSON.stringify({ type, data }));
  }
};
