import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import 'antd/dist/reset.css';
import { QueryClient, QueryClientProvider } from "react-query";
import ConfigProvider from "antd/es/config-provider";
import { Provider } from "react-redux";
import { componentsPrimaryTheme, primaryTheme } from "./components/style/primaryTheme";
import store from "./store/Store";
import Router from "./router/router";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
})
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  
    <ConfigProvider
    theme={{
      token: primaryTheme,
      components: componentsPrimaryTheme,
    }}
  >
    <Provider store={store}>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </StrictMode>
    </Provider>
  </ConfigProvider>
  
);
