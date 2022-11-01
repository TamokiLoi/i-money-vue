<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <AuthForm v-model="user" :isSignUp="true" @submitForm="onSubmit" />

      <AuthDirectBtn
        :msg="`I'm ready a member.`"
        :route="ROUTE_NAME.LOGIN"
        title="Sign In"
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
    const { error, signUp } = useAuth();

    const user = reactive({
      fullName: "",
      email: "",
      password: "",
    });

    async function onSubmit() {
      if (user.email && user.password && user.fullName) {
        await signUp(user.email, user.password, user.fullName);
        if (!error.value) router.push({ name: ROUTE_NAME.PROFILE, params: {} });
      }
    }

    return { ROUTE_NAME, user, onSubmit };
  },
};
</script>
