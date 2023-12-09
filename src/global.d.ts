// global.d.ts
declare namespace chrome {
    namespace runtime {
      function sendMessage(message: any, responseCallback?: (response: any) => void): void;
    }
  }

  // telling the typescript that wer are using the cho