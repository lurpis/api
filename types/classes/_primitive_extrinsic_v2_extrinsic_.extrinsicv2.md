[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/v2/Extrinsic"](../modules/_primitive_extrinsic_v2_extrinsic_.md) › [ExtrinsicV2](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)

# Class: ExtrinsicV2 <**S, T, V, E**>

**`name`** ExtrinsicV2

**`description`** 
The second generation of compact extrinsics

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **ExtrinsicV2**

## Implements

* Codec
* IExtrinsicImpl

## Index

### Constructors

* [constructor](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#constructor)

### Properties

* [registry](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#registry)

### Accessors

* [Type](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#type)
* [encodedLength](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#encodedlength)
* [hash](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#hash)
* [isEmpty](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#isempty)
* [method](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#method)
* [signature](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#signature)
* [version](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#version)

### Methods

* [addSignature](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#addsignature)
* [eq](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#eq)
* [get](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#get)
* [getAtIndex](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#getatindex)
* [sign](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#sign)
* [signFake](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#signfake)
* [toArray](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#toarray)
* [toHex](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#tohex)
* [toJSON](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#tojson)
* [toRawType](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#torawtype)
* [toString](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#tostring)
* [toU8a](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#tou8a)
* [decodeExtrinsic](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#static-decodeextrinsic)
* [typesToMap](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#static-typestomap)
* [with](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicV2**(`registry`: Registry, `value?`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | [ExtrinsicValueV2](../interfaces/_primitive_extrinsic_v2_extrinsic_.extrinsicvaluev2.md) | Call, `__namedParameters`: object): *[ExtrinsicV2](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts:27](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts#L27)*

**Parameters:**

▪ **registry**: *Registry*

▪`Optional`  **value**: *[Uint8Array](_codec_raw_.raw.md#static-uint8array) | [ExtrinsicValueV2](../interfaces/_primitive_extrinsic_v2_extrinsic_.extrinsicvaluev2.md) | Call*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`isSigned` | undefined &#124; false &#124; true |

**Returns:** *[ExtrinsicV2](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/codec/Struct.ts#L34)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts:59](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts#L59)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *Call*

*Defined in [packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts:66](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts#L66)*

**`description`** The [Call](_primitive_generic_call_.call.md) this extrinsic wraps

**Returns:** *Call*

___

###  signature

• **get signature**(): *[ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts:73](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts#L73)*

**`description`** The [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)

**Returns:** *[ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)*

___

###  version

• **get version**(): *number*

*Defined in [packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts:80](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts#L80)*

**`description`** The version for the signature

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `payload`: ExtrinsicPayloadValue | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string): *[ExtrinsicV2](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts:87](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts#L87)*

**`description`** Add an [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) to the extrinsic (already generated)

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`signature` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`payload` | ExtrinsicPayloadValue &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[ExtrinsicV2](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/codec/Struct.ts#L189)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *Codec | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides [BTreeMap](_codec_btreemap_.btreemap.md).[get](_codec_btreemap_.btreemap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/codec/Struct.ts#L197)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *Codec | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *Codec*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

___

###  sign

▸ **sign**(`account`: IKeyringPair, `options`: SignatureOptions): *[ExtrinsicV2](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts:96](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts#L96)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair |
`options` | SignatureOptions |

**Returns:** *[ExtrinsicV2](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)*

___

###  signFake

▸ **signFake**(`signer`: Address | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `options`: SignatureOptions): *[ExtrinsicV2](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts:105](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts#L105)*

**`describe`** Adds a fake signature to the extrinsic

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`options` | SignatureOptions |

**Returns:** *[ExtrinsicV2](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)*

___

###  toArray

▸ **toArray**(): *Codec[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject | string*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonObject | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/codec/Struct.ts#L266)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` decodeExtrinsic

▸ **decodeExtrinsic**(`registry`: Registry, `value?`: Call | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | [ExtrinsicValueV2](../interfaces/_primitive_extrinsic_v2_extrinsic_.extrinsicvaluev2.md), `isSigned`: boolean): *[ExtrinsicValueV2](../interfaces/_primitive_extrinsic_v2_extrinsic_.extrinsicvaluev2.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts:35](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/primitive/Extrinsic/v2/Extrinsic.ts#L35)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | Registry | - |
`value?` | Call &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; [ExtrinsicValueV2](../interfaces/_primitive_extrinsic_v2_extrinsic_.extrinsicvaluev2.md) | - |
`isSigned` | boolean | false |

**Returns:** *[ExtrinsicValueV2](../interfaces/_primitive_extrinsic_v2_extrinsic_.extrinsicvaluev2.md)*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: Registry, `Types`: Record‹string, Constructor›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/codec/Struct.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`Types` | Record‹string, Constructor› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *Constructor‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹[Struct](_codec_struct_.struct.md)‹S››*