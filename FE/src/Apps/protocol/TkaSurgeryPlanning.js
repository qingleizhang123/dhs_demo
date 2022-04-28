/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict';

var $protobuf = require('protobufjs/minimal');

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {});

$root.DHS = (function () {
  /**
   * Namespace DHS.
   * @exports DHS
   * @namespace
   */
  var DHS = {};

  DHS.ProtoBuf = (function () {
    /**
     * Namespace ProtoBuf.
     * @memberof DHS
     * @namespace
     */
    var ProtoBuf = {};

    ProtoBuf.File = (function () {
      /**
       * Properties of a File.
       * @memberof DHS.ProtoBuf
       * @interface IFile
       * @property {string} filename File filename
       * @property {number|Long} size File size
       * @property {Uint8Array} data File data
       * @property {string} md5 File md5
       */

      /**
       * Constructs a new File.
       * @memberof DHS.ProtoBuf
       * @classdesc Represents a File.
       * @implements IFile
       * @constructor
       * @param {DHS.ProtoBuf.IFile=} [properties] Properties to set
       */
      function File(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * File filename.
       * @member {string} filename
       * @memberof DHS.ProtoBuf.File
       * @instance
       */
      File.prototype.filename = '';

      /**
       * File size.
       * @member {number|Long} size
       * @memberof DHS.ProtoBuf.File
       * @instance
       */
      File.prototype.size = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

      /**
       * File data.
       * @member {Uint8Array} data
       * @memberof DHS.ProtoBuf.File
       * @instance
       */
      File.prototype.data = $util.newBuffer([]);

      /**
       * File md5.
       * @member {string} md5
       * @memberof DHS.ProtoBuf.File
       * @instance
       */
      File.prototype.md5 = '';

      /**
       * Creates a new File instance using the specified properties.
       * @function create
       * @memberof DHS.ProtoBuf.File
       * @static
       * @param {DHS.ProtoBuf.IFile=} [properties] Properties to set
       * @returns {DHS.ProtoBuf.File} File instance
       */
      File.create = function create(properties) {
        return new File(properties);
      };

      /**
       * Encodes the specified File message. Does not implicitly {@link DHS.ProtoBuf.File.verify|verify} messages.
       * @function encode
       * @memberof DHS.ProtoBuf.File
       * @static
       * @param {DHS.ProtoBuf.IFile} message File message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      File.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.filename);
        writer.uint32(/* id 2, wireType 0 =*/ 16).uint64(message.size);
        writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message.data);
        writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.md5);
        return writer;
      };

      /**
       * Encodes the specified File message, length delimited. Does not implicitly {@link DHS.ProtoBuf.File.verify|verify} messages.
       * @function encodeDelimited
       * @memberof DHS.ProtoBuf.File
       * @static
       * @param {DHS.ProtoBuf.IFile} message File message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      File.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a File message from the specified reader or buffer.
       * @function decode
       * @memberof DHS.ProtoBuf.File
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {DHS.ProtoBuf.File} File
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      File.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.DHS.ProtoBuf.File();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.filename = reader.string();
              break;
            case 2:
              message.size = reader.uint64();
              break;
            case 3:
              message.data = reader.bytes();
              break;
            case 4:
              message.md5 = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        if (!message.hasOwnProperty('filename'))
          throw $util.ProtocolError("missing required 'filename'", {
            instance: message
          });
        if (!message.hasOwnProperty('size'))
          throw $util.ProtocolError("missing required 'size'", {
            instance: message
          });
        if (!message.hasOwnProperty('data'))
          throw $util.ProtocolError("missing required 'data'", {
            instance: message
          });
        if (!message.hasOwnProperty('md5'))
          throw $util.ProtocolError("missing required 'md5'", {
            instance: message
          });
        return message;
      };

      /**
       * Decodes a File message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof DHS.ProtoBuf.File
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {DHS.ProtoBuf.File} File
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      File.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a File message.
       * @function verify
       * @memberof DHS.ProtoBuf.File
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      File.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (!$util.isString(message.filename))
          return 'filename: string expected';
        if (
          !$util.isInteger(message.size) &&
          !(
            message.size &&
            $util.isInteger(message.size.low) &&
            $util.isInteger(message.size.high)
          )
        )
          return 'size: integer|Long expected';
        if (
          !(
            (message.data && typeof message.data.length === 'number') ||
            $util.isString(message.data)
          )
        )
          return 'data: buffer expected';
        if (!$util.isString(message.md5)) return 'md5: string expected';
        return null;
      };

      /**
       * Creates a File message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof DHS.ProtoBuf.File
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {DHS.ProtoBuf.File} File
       */
      File.fromObject = function fromObject(object) {
        if (object instanceof $root.DHS.ProtoBuf.File) return object;
        var message = new $root.DHS.ProtoBuf.File();
        if (object.filename != null) message.filename = String(object.filename);
        if (object.size != null)
          if ($util.Long)
            (message.size = $util.Long.fromValue(object.size)).unsigned = true;
          else if (typeof object.size === 'string')
            message.size = parseInt(object.size, 10);
          else if (typeof object.size === 'number') message.size = object.size;
          else if (typeof object.size === 'object')
            message.size = new $util.LongBits(
              object.size.low >>> 0,
              object.size.high >>> 0
            ).toNumber(true);
        if (object.data != null)
          if (typeof object.data === 'string')
            $util.base64.decode(
              object.data,
              (message.data = $util.newBuffer(
                $util.base64.length(object.data)
              )),
              0
            );
          else if (object.data.length) message.data = object.data;
        if (object.md5 != null) message.md5 = String(object.md5);
        return message;
      };

      /**
       * Creates a plain object from a File message. Also converts values to other types if specified.
       * @function toObject
       * @memberof DHS.ProtoBuf.File
       * @static
       * @param {DHS.ProtoBuf.File} message File
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      File.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.filename = '';
          if ($util.Long) {
            var long = new $util.Long(0, 0, true);
            object.size =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                ? long.toNumber()
                : long;
          } else object.size = options.longs === String ? '0' : 0;
          if (options.bytes === String) object.data = '';
          else {
            object.data = [];
            if (options.bytes !== Array)
              object.data = $util.newBuffer(object.data);
          }
          object.md5 = '';
        }
        if (message.filename != null && message.hasOwnProperty('filename'))
          object.filename = message.filename;
        if (message.size != null && message.hasOwnProperty('size'))
          if (typeof message.size === 'number')
            object.size =
              options.longs === String ? String(message.size) : message.size;
          else
            object.size =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.size)
                : options.longs === Number
                ? new $util.LongBits(
                    message.size.low >>> 0,
                    message.size.high >>> 0
                  ).toNumber(true)
                : message.size;
        if (message.data != null && message.hasOwnProperty('data'))
          object.data =
            options.bytes === String
              ? $util.base64.encode(message.data, 0, message.data.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.data)
              : message.data;
        if (message.md5 != null && message.hasOwnProperty('md5'))
          object.md5 = message.md5;
        return object;
      };

      /**
       * Converts this File to JSON.
       * @function toJSON
       * @memberof DHS.ProtoBuf.File
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      File.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return File;
    })();

    ProtoBuf.Files = (function () {
      /**
       * Properties of a Files.
       * @memberof DHS.ProtoBuf
       * @interface IFiles
       * @property {Array.<DHS.ProtoBuf.IFile>|null} [file] Files file
       */

      /**
       * Constructs a new Files.
       * @memberof DHS.ProtoBuf
       * @classdesc Represents a Files.
       * @implements IFiles
       * @constructor
       * @param {DHS.ProtoBuf.IFiles=} [properties] Properties to set
       */
      function Files(properties) {
        this.file = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Files file.
       * @member {Array.<DHS.ProtoBuf.IFile>} file
       * @memberof DHS.ProtoBuf.Files
       * @instance
       */
      Files.prototype.file = $util.emptyArray;

      /**
       * Creates a new Files instance using the specified properties.
       * @function create
       * @memberof DHS.ProtoBuf.Files
       * @static
       * @param {DHS.ProtoBuf.IFiles=} [properties] Properties to set
       * @returns {DHS.ProtoBuf.Files} Files instance
       */
      Files.create = function create(properties) {
        return new Files(properties);
      };

      /**
       * Encodes the specified Files message. Does not implicitly {@link DHS.ProtoBuf.Files.verify|verify} messages.
       * @function encode
       * @memberof DHS.ProtoBuf.Files
       * @static
       * @param {DHS.ProtoBuf.IFiles} message Files message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Files.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.file != null && message.file.length)
          for (var i = 0; i < message.file.length; ++i)
            $root.DHS.ProtoBuf.File.encode(
              message.file[i],
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
        return writer;
      };

      /**
       * Encodes the specified Files message, length delimited. Does not implicitly {@link DHS.ProtoBuf.Files.verify|verify} messages.
       * @function encodeDelimited
       * @memberof DHS.ProtoBuf.Files
       * @static
       * @param {DHS.ProtoBuf.IFiles} message Files message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Files.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a Files message from the specified reader or buffer.
       * @function decode
       * @memberof DHS.ProtoBuf.Files
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {DHS.ProtoBuf.Files} Files
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Files.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.DHS.ProtoBuf.Files();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              if (!(message.file && message.file.length)) message.file = [];
              message.file.push(
                $root.DHS.ProtoBuf.File.decode(reader, reader.uint32())
              );
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a Files message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof DHS.ProtoBuf.Files
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {DHS.ProtoBuf.Files} Files
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Files.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a Files message.
       * @function verify
       * @memberof DHS.ProtoBuf.Files
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Files.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.file != null && message.hasOwnProperty('file')) {
          if (!Array.isArray(message.file)) return 'file: array expected';
          for (var i = 0; i < message.file.length; ++i) {
            var error = $root.DHS.ProtoBuf.File.verify(message.file[i]);
            if (error) return 'file.' + error;
          }
        }
        return null;
      };

      /**
       * Creates a Files message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof DHS.ProtoBuf.Files
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {DHS.ProtoBuf.Files} Files
       */
      Files.fromObject = function fromObject(object) {
        if (object instanceof $root.DHS.ProtoBuf.Files) return object;
        var message = new $root.DHS.ProtoBuf.Files();
        if (object.file) {
          if (!Array.isArray(object.file))
            throw TypeError('.DHS.ProtoBuf.Files.file: array expected');
          message.file = [];
          for (var i = 0; i < object.file.length; ++i) {
            if (typeof object.file[i] !== 'object')
              throw TypeError('.DHS.ProtoBuf.Files.file: object expected');
            message.file[i] = $root.DHS.ProtoBuf.File.fromObject(
              object.file[i]
            );
          }
        }
        return message;
      };

      /**
       * Creates a plain object from a Files message. Also converts values to other types if specified.
       * @function toObject
       * @memberof DHS.ProtoBuf.Files
       * @static
       * @param {DHS.ProtoBuf.Files} message Files
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Files.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.file = [];
        if (message.file && message.file.length) {
          object.file = [];
          for (var j = 0; j < message.file.length; ++j)
            object.file[j] = $root.DHS.ProtoBuf.File.toObject(
              message.file[j],
              options
            );
        }
        return object;
      };

      /**
       * Converts this Files to JSON.
       * @function toJSON
       * @memberof DHS.ProtoBuf.Files
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Files.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Files;
    })();

    ProtoBuf.BEHandleResult = (function () {
      /**
       * Properties of a BEHandleResult.
       * @memberof DHS.ProtoBuf
       * @interface IBEHandleResult
       * @property {DHS.ProtoBuf.ResultType} type BEHandleResult type
       * @property {boolean} result BEHandleResult result
       * @property {string|null} [ErrorInfo] BEHandleResult ErrorInfo
       */

      /**
       * Constructs a new BEHandleResult.
       * @memberof DHS.ProtoBuf
       * @classdesc Represents a BEHandleResult.
       * @implements IBEHandleResult
       * @constructor
       * @param {DHS.ProtoBuf.IBEHandleResult=} [properties] Properties to set
       */
      function BEHandleResult(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * BEHandleResult type.
       * @member {DHS.ProtoBuf.ResultType} type
       * @memberof DHS.ProtoBuf.BEHandleResult
       * @instance
       */
      BEHandleResult.prototype.type = 0;

      /**
       * BEHandleResult result.
       * @member {boolean} result
       * @memberof DHS.ProtoBuf.BEHandleResult
       * @instance
       */
      BEHandleResult.prototype.result = false;

      /**
       * BEHandleResult ErrorInfo.
       * @member {string} ErrorInfo
       * @memberof DHS.ProtoBuf.BEHandleResult
       * @instance
       */
      BEHandleResult.prototype.ErrorInfo = '';

      /**
       * Creates a new BEHandleResult instance using the specified properties.
       * @function create
       * @memberof DHS.ProtoBuf.BEHandleResult
       * @static
       * @param {DHS.ProtoBuf.IBEHandleResult=} [properties] Properties to set
       * @returns {DHS.ProtoBuf.BEHandleResult} BEHandleResult instance
       */
      BEHandleResult.create = function create(properties) {
        return new BEHandleResult(properties);
      };

      /**
       * Encodes the specified BEHandleResult message. Does not implicitly {@link DHS.ProtoBuf.BEHandleResult.verify|verify} messages.
       * @function encode
       * @memberof DHS.ProtoBuf.BEHandleResult
       * @static
       * @param {DHS.ProtoBuf.IBEHandleResult} message BEHandleResult message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      BEHandleResult.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.type);
        writer.uint32(/* id 2, wireType 0 =*/ 16).bool(message.result);
        if (
          message.ErrorInfo != null &&
          Object.hasOwnProperty.call(message, 'ErrorInfo')
        )
          writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.ErrorInfo);
        return writer;
      };

      /**
       * Encodes the specified BEHandleResult message, length delimited. Does not implicitly {@link DHS.ProtoBuf.BEHandleResult.verify|verify} messages.
       * @function encodeDelimited
       * @memberof DHS.ProtoBuf.BEHandleResult
       * @static
       * @param {DHS.ProtoBuf.IBEHandleResult} message BEHandleResult message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      BEHandleResult.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a BEHandleResult message from the specified reader or buffer.
       * @function decode
       * @memberof DHS.ProtoBuf.BEHandleResult
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {DHS.ProtoBuf.BEHandleResult} BEHandleResult
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      BEHandleResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.DHS.ProtoBuf.BEHandleResult();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.type = reader.int32();
              break;
            case 2:
              message.result = reader.bool();
              break;
            case 3:
              message.ErrorInfo = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        if (!message.hasOwnProperty('type'))
          throw $util.ProtocolError("missing required 'type'", {
            instance: message
          });
        if (!message.hasOwnProperty('result'))
          throw $util.ProtocolError("missing required 'result'", {
            instance: message
          });
        return message;
      };

      /**
       * Decodes a BEHandleResult message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof DHS.ProtoBuf.BEHandleResult
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {DHS.ProtoBuf.BEHandleResult} BEHandleResult
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      BEHandleResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a BEHandleResult message.
       * @function verify
       * @memberof DHS.ProtoBuf.BEHandleResult
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      BEHandleResult.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        switch (message.type) {
          default:
            return 'type: enum value expected';
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
            break;
        }
        if (typeof message.result !== 'boolean')
          return 'result: boolean expected';
        if (message.ErrorInfo != null && message.hasOwnProperty('ErrorInfo'))
          if (!$util.isString(message.ErrorInfo))
            return 'ErrorInfo: string expected';
        return null;
      };

      /**
       * Creates a BEHandleResult message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof DHS.ProtoBuf.BEHandleResult
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {DHS.ProtoBuf.BEHandleResult} BEHandleResult
       */
      BEHandleResult.fromObject = function fromObject(object) {
        if (object instanceof $root.DHS.ProtoBuf.BEHandleResult) return object;
        var message = new $root.DHS.ProtoBuf.BEHandleResult();
        switch (object.type) {
          case 'RENDER':
          case 0:
            message.type = 0;
            break;
          case 'CSW':
          case 1:
            message.type = 1;
            break;
          case 'FTP_UPLOAD':
          case 2:
            message.type = 2;
            break;
          case 'FILE_VERIFICATION':
          case 3:
            message.type = 3;
            break;
          case 'FILE_RECEIVE':
          case 4:
            message.type = 4;
            break;
        }
        if (object.result != null) message.result = Boolean(object.result);
        if (object.ErrorInfo != null)
          message.ErrorInfo = String(object.ErrorInfo);
        return message;
      };

      /**
       * Creates a plain object from a BEHandleResult message. Also converts values to other types if specified.
       * @function toObject
       * @memberof DHS.ProtoBuf.BEHandleResult
       * @static
       * @param {DHS.ProtoBuf.BEHandleResult} message BEHandleResult
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      BEHandleResult.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.type = options.enums === String ? 'RENDER' : 0;
          object.result = false;
          object.ErrorInfo = '';
        }
        if (message.type != null && message.hasOwnProperty('type'))
          object.type =
            options.enums === String
              ? $root.DHS.ProtoBuf.ResultType[message.type]
              : message.type;
        if (message.result != null && message.hasOwnProperty('result'))
          object.result = message.result;
        if (message.ErrorInfo != null && message.hasOwnProperty('ErrorInfo'))
          object.ErrorInfo = message.ErrorInfo;
        return object;
      };

      /**
       * Converts this BEHandleResult to JSON.
       * @function toJSON
       * @memberof DHS.ProtoBuf.BEHandleResult
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      BEHandleResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return BEHandleResult;
    })();

    ProtoBuf.Progress = (function () {
      /**
       * Properties of a Progress.
       * @memberof DHS.ProtoBuf
       * @interface IProgress
       * @property {DHS.ProtoBuf.ProgressType} type Progress type
       * @property {number} progress Progress progress
       */

      /**
       * Constructs a new Progress.
       * @memberof DHS.ProtoBuf
       * @classdesc Represents a Progress.
       * @implements IProgress
       * @constructor
       * @param {DHS.ProtoBuf.IProgress=} [properties] Properties to set
       */
      function Progress(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Progress type.
       * @member {DHS.ProtoBuf.ProgressType} type
       * @memberof DHS.ProtoBuf.Progress
       * @instance
       */
      Progress.prototype.type = 0;

      /**
       * Progress progress.
       * @member {number} progress
       * @memberof DHS.ProtoBuf.Progress
       * @instance
       */
      Progress.prototype.progress = 0;

      /**
       * Creates a new Progress instance using the specified properties.
       * @function create
       * @memberof DHS.ProtoBuf.Progress
       * @static
       * @param {DHS.ProtoBuf.IProgress=} [properties] Properties to set
       * @returns {DHS.ProtoBuf.Progress} Progress instance
       */
      Progress.create = function create(properties) {
        return new Progress(properties);
      };

      /**
       * Encodes the specified Progress message. Does not implicitly {@link DHS.ProtoBuf.Progress.verify|verify} messages.
       * @function encode
       * @memberof DHS.ProtoBuf.Progress
       * @static
       * @param {DHS.ProtoBuf.IProgress} message Progress message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Progress.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.type);
        writer.uint32(/* id 2, wireType 5 =*/ 21).float(message.progress);
        return writer;
      };

      /**
       * Encodes the specified Progress message, length delimited. Does not implicitly {@link DHS.ProtoBuf.Progress.verify|verify} messages.
       * @function encodeDelimited
       * @memberof DHS.ProtoBuf.Progress
       * @static
       * @param {DHS.ProtoBuf.IProgress} message Progress message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Progress.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a Progress message from the specified reader or buffer.
       * @function decode
       * @memberof DHS.ProtoBuf.Progress
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {DHS.ProtoBuf.Progress} Progress
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Progress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.DHS.ProtoBuf.Progress();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.type = reader.int32();
              break;
            case 2:
              message.progress = reader.float();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        if (!message.hasOwnProperty('type'))
          throw $util.ProtocolError("missing required 'type'", {
            instance: message
          });
        if (!message.hasOwnProperty('progress'))
          throw $util.ProtocolError("missing required 'progress'", {
            instance: message
          });
        return message;
      };

      /**
       * Decodes a Progress message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof DHS.ProtoBuf.Progress
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {DHS.ProtoBuf.Progress} Progress
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Progress.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a Progress message.
       * @function verify
       * @memberof DHS.ProtoBuf.Progress
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Progress.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        switch (message.type) {
          default:
            return 'type: enum value expected';
          case 0:
            break;
        }
        if (typeof message.progress !== 'number')
          return 'progress: number expected';
        return null;
      };

      /**
       * Creates a Progress message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof DHS.ProtoBuf.Progress
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {DHS.ProtoBuf.Progress} Progress
       */
      Progress.fromObject = function fromObject(object) {
        if (object instanceof $root.DHS.ProtoBuf.Progress) return object;
        var message = new $root.DHS.ProtoBuf.Progress();
        switch (object.type) {
          case 'IMPORT':
          case 0:
            message.type = 0;
            break;
        }
        if (object.progress != null) message.progress = Number(object.progress);
        return message;
      };

      /**
       * Creates a plain object from a Progress message. Also converts values to other types if specified.
       * @function toObject
       * @memberof DHS.ProtoBuf.Progress
       * @static
       * @param {DHS.ProtoBuf.Progress} message Progress
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Progress.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.type = options.enums === String ? 'IMPORT' : 0;
          object.progress = 0;
        }
        if (message.type != null && message.hasOwnProperty('type'))
          object.type =
            options.enums === String
              ? $root.DHS.ProtoBuf.ProgressType[message.type]
              : message.type;
        if (message.progress != null && message.hasOwnProperty('progress'))
          object.progress =
            options.json && !isFinite(message.progress)
              ? String(message.progress)
              : message.progress;
        return object;
      };

      /**
       * Converts this Progress to JSON.
       * @function toJSON
       * @memberof DHS.ProtoBuf.Progress
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Progress.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Progress;
    })();

    /**
     * ResultType enum.
     * @name DHS.ProtoBuf.ResultType
     * @enum {number}
     * @property {number} RENDER=0 RENDER value
     * @property {number} CSW=1 CSW value
     * @property {number} FTP_UPLOAD=2 FTP_UPLOAD value
     * @property {number} FILE_VERIFICATION=3 FILE_VERIFICATION value
     * @property {number} FILE_RECEIVE=4 FILE_RECEIVE value
     */
    ProtoBuf.ResultType = (function () {
      var valuesById = {},
        values = Object.create(valuesById);
      values[(valuesById[0] = 'RENDER')] = 0;
      values[(valuesById[1] = 'CSW')] = 1;
      values[(valuesById[2] = 'FTP_UPLOAD')] = 2;
      values[(valuesById[3] = 'FILE_VERIFICATION')] = 3;
      values[(valuesById[4] = 'FILE_RECEIVE')] = 4;
      return values;
    })();

    /**
     * ProgressType enum.
     * @name DHS.ProtoBuf.ProgressType
     * @enum {number}
     * @property {number} IMPORT=0 IMPORT value
     */
    ProtoBuf.ProgressType = (function () {
      var valuesById = {},
        values = Object.create(valuesById);
      values[(valuesById[0] = 'IMPORT')] = 0;
      return values;
    })();

    return ProtoBuf;
  })();

  return DHS;
})();

module.exports = $root;
