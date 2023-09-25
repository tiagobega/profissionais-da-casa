export const previewUrl = async (fileList: FileList) => {
  const base64 = await convertBase64(fileList[0]);
  return base64;
};

const convertBase64 = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };

    fileReader.onerror = () => {
      reject("error");
    };
  });
};
