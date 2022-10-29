import { HubConnectionBuilder, LogLevel } from "@aspnet/signalr";

export default {
  install(app: any, options: any) {
    // Provide methods to connect/disconnect from the SignalR hub
    let connection: any;
    let startedPromise: any;
    let manuallyClosed = false;

    const chatsHub: any = {
      startSignalR: () => {
        console.log("starting SignalR");

        connection = new HubConnectionBuilder()
          .withUrl("https://localhost:5001/chat-hub/")
          .configureLogging(LogLevel.Information)
          .build();

        // You need to call connection.start() to establish the connection but the client wont handle reconnecting for you!
        // Docs recommend listening onclose and handling it there.
        // This is the simplest of the strategies
        function start() {
          startedPromise = connection.start().catch(() => {
            return new Promise((resolve, reject) =>
              setTimeout(() => start().then(resolve).catch(reject), 5000)
            );
          });
          return startedPromise;
        }
        connection.onclose(() => {
          if (!manuallyClosed) start();
        });

        // Start everything
        manuallyClosed = false;
        start();

        console.log("started SignalR");
      },

      stopSignalR: () => {
        console.log("stoping SignalR");

        if (!startedPromise) return;

        manuallyClosed = true;
        return startedPromise
          .then(() => connection.stop())
          .then(() => {
            startedPromise = null;
          });
      },

      onUpdateChats: (doIt: any) => {
        // Forward hub events through the event, so we can listen for them in the Vue components
        connection.on("NovoChat", doIt);
      },
    };

    app.prototype.$chatsHub = chatsHub;
  },
};
