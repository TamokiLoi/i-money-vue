import { defineAsyncComponent } from "vue";

export function registerGlobalComponent(app) {
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/DefaultLayout"))
  );

  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/AuthLayout"))
  );
}
