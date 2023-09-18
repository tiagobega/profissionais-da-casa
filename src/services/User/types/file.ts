export type SendFileData = {
  filename: string;
  content: string;
  contentType: string;
  contentEncoding?: string;
  acl?:
    | "private"
    | "public-read"
    | "public-read-write"
    | "aws-exec-read"
    | "authenticated-read"
    | "bucket-owner-read"
    | "bucket-owner-full-control"
    | "log-delivery-write";
};
