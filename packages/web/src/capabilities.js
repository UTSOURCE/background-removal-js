export const bigInt = () =>
    (async (e) => {
      try {
        return (
          (await WebAssembly.instantiate(e)).instance.exports.b(BigInt(0)) ===
          BigInt(0)
        );
      } catch (e) {
        return !1;
      }
    })(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1, 126, 1, 126, 3, 2, 1, 0, 7,
        5, 1, 1, 98, 0, 0, 10, 6, 1, 4, 0, 32, 0, 11
      ])
    ),
  bulkMemory = () =>
    WebAssembly.validate(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0,
        1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11
      ])
    ),
  exceptions = () =>
    WebAssembly.validate(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6,
        0, 6, 64, 25, 11, 11
      ])
    ),
  extendedConst = () =>
    WebAssembly.validate(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 5, 3, 1, 0, 1, 11, 9, 1, 0, 65, 1, 65, 2,
        106, 11, 0
      ])
    ),
  gc = () =>
    WebAssembly.validate(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 10, 2, 95, 1, 125, 0, 96, 0, 1, 107, 0,
        3, 2, 1, 1, 10, 12, 1, 10, 0, 67, 0, 0, 0, 0, 251, 7, 0, 11
      ])
    ),
  memory64 = () =>
    WebAssembly.validate(
      new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 5, 3, 1, 4, 1])
    ),
  multiValue = () =>
    WebAssembly.validate(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 0, 2, 127, 127, 3, 2, 1, 0,
        10, 8, 1, 6, 0, 65, 0, 65, 0, 11
      ])
    ),
  mutableGlobals = () =>
    WebAssembly.validate(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 2, 8, 1, 1, 97, 1, 98, 3, 127, 1, 6, 6, 1,
        127, 1, 65, 0, 11, 7, 5, 1, 1, 97, 3, 1
      ])
    ),
  referenceTypes = () =>
    WebAssembly.validate(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 7, 1, 5,
        0, 208, 112, 26, 11
      ])
    ),
  relaxedSimd = () =>
    WebAssembly.validate(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 15,
        1, 13, 0, 65, 1, 253, 15, 65, 2, 253, 15, 253, 128, 2, 11
      ])
    ),
  saturatedFloatToInt = () =>
    WebAssembly.validate(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 12, 1,
        10, 0, 67, 0, 0, 0, 0, 252, 0, 26, 11
      ])
    ),
  signExtensions = () =>
    WebAssembly.validate(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6,
        0, 65, 0, 192, 26, 11
      ])
    ),
  simd = () =>
    WebAssembly.validate(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10,
        1, 8, 0, 65, 0, 253, 15, 253, 98, 11
      ])
    ),
  streamingCompilation = () =>
    (async () => 'compileStreaming' in WebAssembly)(),
  tailCall = async () =>
    WebAssembly.validate(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 6, 1, 4,
        0, 18, 0, 11
      ])
    ),
  threads = () =>
    (async (e) => {
      try {
        return (
          'undefined' != typeof MessageChannel &&
            new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),
          WebAssembly.validate(e)
        );
      } catch (e) {
        return !1;
      }
    })(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3,
        1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11
      ])
    );

export const webgpu = async () => {
  if (navigator.gpu === undefined) return false;
  const adapter = await navigator.gpu.requestAdapter();
  return adapter !== null;
};
export const maxNumThreads = () => navigator.hardwareConcurrency ?? 4;
