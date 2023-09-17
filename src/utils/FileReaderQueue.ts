export type QueueFile = {
  file: File;
  customFileName: string;
  loadHandler?: (file: QueueFile, event: ProgressEvent<FileReader>) => void;
  fileBase64?: string;
} & (
  | {
      read: true;
    }
  | {
      read: false;
    }
);

export class FileReaderQueue {
  private readonly _readFiles: {
    [fileName: string]: QueueFile;
  } = {};

  private readonly _fileQueue: QueueFile[] = [];
  private _fileReader = new FileReader();

  public onLoad?: (file: QueueFile, event: ProgressEvent<FileReader>) => void;
  public onLoadEnd?: (files: typeof this._readFiles) => void;

  constructor() {
    this._fileReader.onload = (event) => {
      const currentFile = this._fileQueue[0];

      const queueFile: QueueFile = {
        ...currentFile,
        read: true,
        fileBase64: event.target!.result as string,
      };

      this._readFiles[currentFile.customFileName] = queueFile;

      currentFile.loadHandler?.(currentFile, event);
      this.onLoad?.(currentFile, event);

      this._fileQueue.shift();

      this.readQueue();
    };
  }

  addFileToQueue(
    file: File,
    customFileName: string,
    loadHandler?: (file: QueueFile, event: ProgressEvent<FileReader>) => void
  ) {
    const queueFile: QueueFile = {
      file,
      read: false,
      customFileName,
      loadHandler,
    };

    this._fileQueue.push(queueFile);
  }

  readQueue() {
    if (!this._fileQueue.length) {
      this.onLoadEnd?.(this._readFiles);
      return;
    }

    const currentQueueFile = this._fileQueue[0];
    this._fileReader.readAsDataURL(currentQueueFile.file);
  }
}
