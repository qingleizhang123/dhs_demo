import * as $protobuf from 'protobufjs';
/** Namespace DHS. */
export namespace DHS {
  /** Namespace ProtoBuf. */
  namespace ProtoBuf {
    /** Properties of a File. */
    interface IFile {
      /** File filename */
      filename: string;

      /** File size */
      size: number | Long;

      /** File data */
      data: Uint8Array;

      /** File md5 */
      md5: string;
    }

    /** Represents a File. */
    class File implements IFile {
      /**
       * Constructs a new File.
       * @param [properties] Properties to set
       */
      constructor(properties?: DHS.ProtoBuf.IFile);

      /** File filename. */
      public filename: string;

      /** File size. */
      public size: number | Long;

      /** File data. */
      public data: Uint8Array;

      /** File md5. */
      public md5: string;

      /**
       * Creates a new File instance using the specified properties.
       * @param [properties] Properties to set
       * @returns File instance
       */
      public static create(properties?: DHS.ProtoBuf.IFile): DHS.ProtoBuf.File;

      /**
       * Encodes the specified File message. Does not implicitly {@link DHS.ProtoBuf.File.verify|verify} messages.
       * @param message File message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: DHS.ProtoBuf.IFile,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified File message, length delimited. Does not implicitly {@link DHS.ProtoBuf.File.verify|verify} messages.
       * @param message File message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: DHS.ProtoBuf.IFile,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a File message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns File
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): DHS.ProtoBuf.File;

      /**
       * Decodes a File message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns File
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): DHS.ProtoBuf.File;

      /**
       * Verifies a File message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a File message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns File
       */
      public static fromObject(object: { [k: string]: any }): DHS.ProtoBuf.File;

      /**
       * Creates a plain object from a File message. Also converts values to other types if specified.
       * @param message File
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: DHS.ProtoBuf.File,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this File to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a Files. */
    interface IFiles {
      /** Files file */
      file?: DHS.ProtoBuf.IFile[] | null;
    }

    /** Represents a Files. */
    class Files implements IFiles {
      /**
       * Constructs a new Files.
       * @param [properties] Properties to set
       */
      constructor(properties?: DHS.ProtoBuf.IFiles);

      /** Files file. */
      public file: DHS.ProtoBuf.IFile[];

      /**
       * Creates a new Files instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Files instance
       */
      public static create(
        properties?: DHS.ProtoBuf.IFiles
      ): DHS.ProtoBuf.Files;

      /**
       * Encodes the specified Files message. Does not implicitly {@link DHS.ProtoBuf.Files.verify|verify} messages.
       * @param message Files message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: DHS.ProtoBuf.IFiles,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Files message, length delimited. Does not implicitly {@link DHS.ProtoBuf.Files.verify|verify} messages.
       * @param message Files message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: DHS.ProtoBuf.IFiles,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Files message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Files
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): DHS.ProtoBuf.Files;

      /**
       * Decodes a Files message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Files
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): DHS.ProtoBuf.Files;

      /**
       * Verifies a Files message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a Files message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Files
       */
      public static fromObject(object: {
        [k: string]: any;
      }): DHS.ProtoBuf.Files;

      /**
       * Creates a plain object from a Files message. Also converts values to other types if specified.
       * @param message Files
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: DHS.ProtoBuf.Files,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Files to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a BEHandleResult. */
    interface IBEHandleResult {
      /** BEHandleResult type */
      type: DHS.ProtoBuf.ResultType;

      /** BEHandleResult result */
      result: boolean;

      /** BEHandleResult ErrorInfo */
      ErrorInfo?: string | null;
    }

    /** Represents a BEHandleResult. */
    class BEHandleResult implements IBEHandleResult {
      /**
       * Constructs a new BEHandleResult.
       * @param [properties] Properties to set
       */
      constructor(properties?: DHS.ProtoBuf.IBEHandleResult);

      /** BEHandleResult type. */
      public type: DHS.ProtoBuf.ResultType;

      /** BEHandleResult result. */
      public result: boolean;

      /** BEHandleResult ErrorInfo. */
      public ErrorInfo: string;

      /**
       * Creates a new BEHandleResult instance using the specified properties.
       * @param [properties] Properties to set
       * @returns BEHandleResult instance
       */
      public static create(
        properties?: DHS.ProtoBuf.IBEHandleResult
      ): DHS.ProtoBuf.BEHandleResult;

      /**
       * Encodes the specified BEHandleResult message. Does not implicitly {@link DHS.ProtoBuf.BEHandleResult.verify|verify} messages.
       * @param message BEHandleResult message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: DHS.ProtoBuf.IBEHandleResult,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified BEHandleResult message, length delimited. Does not implicitly {@link DHS.ProtoBuf.BEHandleResult.verify|verify} messages.
       * @param message BEHandleResult message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: DHS.ProtoBuf.IBEHandleResult,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a BEHandleResult message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns BEHandleResult
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): DHS.ProtoBuf.BEHandleResult;

      /**
       * Decodes a BEHandleResult message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns BEHandleResult
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): DHS.ProtoBuf.BEHandleResult;

      /**
       * Verifies a BEHandleResult message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a BEHandleResult message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns BEHandleResult
       */
      public static fromObject(object: {
        [k: string]: any;
      }): DHS.ProtoBuf.BEHandleResult;

      /**
       * Creates a plain object from a BEHandleResult message. Also converts values to other types if specified.
       * @param message BEHandleResult
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: DHS.ProtoBuf.BEHandleResult,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this BEHandleResult to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a Progress. */
    interface IProgress {
      /** Progress type */
      type: DHS.ProtoBuf.ProgressType;

      /** Progress progress */
      progress: number;
    }

    /** Represents a Progress. */
    class Progress implements IProgress {
      /**
       * Constructs a new Progress.
       * @param [properties] Properties to set
       */
      constructor(properties?: DHS.ProtoBuf.IProgress);

      /** Progress type. */
      public type: DHS.ProtoBuf.ProgressType;

      /** Progress progress. */
      public progress: number;

      /**
       * Creates a new Progress instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Progress instance
       */
      public static create(
        properties?: DHS.ProtoBuf.IProgress
      ): DHS.ProtoBuf.Progress;

      /**
       * Encodes the specified Progress message. Does not implicitly {@link DHS.ProtoBuf.Progress.verify|verify} messages.
       * @param message Progress message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: DHS.ProtoBuf.IProgress,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Progress message, length delimited. Does not implicitly {@link DHS.ProtoBuf.Progress.verify|verify} messages.
       * @param message Progress message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: DHS.ProtoBuf.IProgress,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Progress message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Progress
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): DHS.ProtoBuf.Progress;

      /**
       * Decodes a Progress message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Progress
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): DHS.ProtoBuf.Progress;

      /**
       * Verifies a Progress message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a Progress message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Progress
       */
      public static fromObject(object: {
        [k: string]: any;
      }): DHS.ProtoBuf.Progress;

      /**
       * Creates a plain object from a Progress message. Also converts values to other types if specified.
       * @param message Progress
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: DHS.ProtoBuf.Progress,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Progress to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** ResultType enum. */
    enum ResultType {
      RENDER = 0,
      CSW = 1,
      FTP_UPLOAD = 2,
      FILE_VERIFICATION = 3,
      FILE_RECEIVE = 4
    }

    /** ProgressType enum. */
    enum ProgressType {
      IMPORT = 0
    }
  }
}
