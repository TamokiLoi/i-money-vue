import { storageRef } from "@/configs/firebase";
import { uploadBytes, getDownloadURL } from "firebase/storage";
import { useUser } from "@/composables/useUser";
import { ref } from "vue";

const useStorage = (name) => {
  const { user } = useUser();
  const error = ref(null);
  const filePath = ref(null);
  const url = ref(null);

  async function uploadFile(file) {
    filePath.value = `${name}/${user.value.uid}/${file?.name}`;
    error.value = null;
    try {
      const res = await uploadBytes(storageRef(filePath), file);
      url.value = await getDownloadURL(res.ref);
      return url;
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  }

  return {
    error,
    filePath,
    uploadFile,
  };
};

export default useStorage;
