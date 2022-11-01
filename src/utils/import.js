import { defineAsyncComponent } from "vue";

export function registerGlobalComponent(app) {
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/components/layouts/DefaultLayout"))
  );

  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/components/layouts/AuthLayout"))
  );
}
