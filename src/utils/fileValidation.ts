export const MAX_FILE_SIZE_MB = 2;
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const verifyFileType = (
  file: File,
  mimeTypeList: string[] = ACCEPTED_IMAGE_TYPES
) => {
  return mimeTypeList.indexOf(file.type) > -1;
};

export const verifyFileSize = (
  file: File,
  sizeLimitMB: number = MAX_FILE_SIZE_MB
) => {
  return file.size < sizeLimitMB * 1000000;
};
