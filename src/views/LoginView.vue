<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <AuthForm v-model="user" @submitForm="onSubmit" />

      <AuthDirectBtn
        :msg="`I'm a new user.`"
        :route="ROUTE_NAME.REGISTER"
        title="Sign Up"
      />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";

import AuthForm from "@/components/auth/AuthForm.vue";
import AuthDirectBtn from "@/components/auth/AuthDirectBtn.vue";
import { ROUTE_NAME } from "@/consts/route.const";
import { useAuth } from "@/composables/useAuth";

export default {
  components: { AuthForm, AuthDirectBtn },
  setup() {
    const router = useRouter();
    const { error, signIn } = useAuth();

    const user = reactive({
      email: "",
      password: "",
    });

    async function onSubmit() {
      if (user.email && user.password) {
        await signIn(user.email, user.password);
        if (!error.value) router.push({ name: ROUTE_NAME.PROFILE, params: {} });
      }
    }

    return { ROUTE_NAME, user, onSubmit };
  },
};
</script>
