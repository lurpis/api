[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["type/HeaderExtended"](../modules/_type_headerextended_.md) › [HeaderExtended](_type_headerextended_.headerextended.md)

# Class: HeaderExtended <**S, T, V, E**>

**`name`** HeaderExtended

**`description`** 
A [[Block]] header with an additional `author` field that indicates the block author

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* Header

  ↳ **HeaderExtended**

## Implements

* Codec

## Index

### Constructors

* [constructor](_type_headerextended_.headerextended.md#constructor)

### Properties

* [digest](_type_headerextended_.headerextended.md#digest)
* [extrinsicsRoot](_type_headerextended_.headerextended.md#extrinsicsroot)
* [number](_type_headerextended_.headerextended.md#number)
* [parentHash](_type_headerextended_.headerextended.md#parenthash)
* [registry](_type_headerextended_.headerextended.md#registry)
* [size](_type_headerextended_.headerextended.md#size)
* [stateRoot](_type_headerextended_.headerextended.md#stateroot)

### Accessors

* [Type](_type_headerextended_.headerextended.md#type)
* [author](_type_headerextended_.headerextended.md#author)
* [encodedLength](_type_headerextended_.headerextended.md#encodedlength)
* [hash](_type_headerextended_.headerextended.md#hash)
* [isEmpty](_type_headerextended_.headerextended.md#isempty)

### Methods

* [clear](_type_headerextended_.headerextended.md#clear)
* [delete](_type_headerextended_.headerextended.md#delete)
* [eq](_type_headerextended_.headerextended.md#eq)
* [forEach](_type_headerextended_.headerextended.md#foreach)
* [get](_type_headerextended_.headerextended.md#get)
* [getAtIndex](_type_headerextended_.headerextended.md#getatindex)
* [has](_type_headerextended_.headerextended.md#has)
* [set](_type_headerextended_.headerextended.md#set)
* [toArray](_type_headerextended_.headerextended.md#toarray)
* [toHex](_type_headerextended_.headerextended.md#tohex)
* [toJSON](_type_headerextended_.headerextended.md#tojson)
* [toRawType](_type_headerextended_.headerextended.md#torawtype)
* [toString](_type_headerextended_.headerextended.md#tostring)
* [toU8a](_type_headerextended_.headerextended.md#tou8a)
* [typesToMap](_type_headerextended_.headerextended.md#static-typestomap)
* [with](_type_headerextended_.headerextended.md#static-with)

## Constructors

###  constructor

\+ **new HeaderExtended**(`registry`: Registry, `header?`: Header, `sessionValidators?`: AccountId[]): *[HeaderExtended](_type_headerextended_.headerextended.md)*

*Overrides void*

*Defined in [packages/api-derive/src/type/HeaderExtended.ts:20](https://github.com/polkadot-js/api/blob/4c328964d5/packages/api-derive/src/type/HeaderExtended.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`header?` | Header |
`sessionValidators?` | AccountId[] |

**Returns:** *[HeaderExtended](_type_headerextended_.headerextended.md)*

## Properties

###  digest

• **digest**: *Digest*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[digest](_type_headerextended_.headerextended.md#digest)*

*Defined in [packages/types/src/interfaces/runtime/types.ts:143](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/interfaces/runtime/types.ts#L143)*

Digest

___

###  extrinsicsRoot

• **extrinsicsRoot**: *Hash*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[extrinsicsRoot](_type_headerextended_.headerextended.md#extrinsicsroot)*

*Defined in [packages/types/src/interfaces/runtime/types.ts:141](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/interfaces/runtime/types.ts#L141)*

Hash

___

###  number

• **number**: *Compact‹BlockNumber›*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[number](_type_headerextended_.headerextended.md#number)*

*Defined in [packages/types/src/interfaces/runtime/types.ts:137](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/interfaces/runtime/types.ts#L137)*

Compact<BlockNumber>

___

###  parentHash

• **parentHash**: *Hash*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[parentHash](_type_headerextended_.headerextended.md#parenthash)*

*Defined in [packages/types/src/interfaces/runtime/types.ts:135](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/interfaces/runtime/types.ts#L135)*

Hash

___

###  registry

• **registry**: *Registry*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[registry](_type_headerextended_.headerextended.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/codec/Struct.ts#L34)*

___

###  size

• **size**: *number*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[size](_type_headerextended_.headerextended.md#size)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

###  stateRoot

• **stateRoot**: *Hash*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[stateRoot](_type_headerextended_.headerextended.md#stateroot)*

*Defined in [packages/types/src/interfaces/runtime/types.ts:139](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/interfaces/runtime/types.ts#L139)*

Hash

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[Type](_type_headerextended_.headerextended.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  author

• **get author**(): *AccountId | undefined*

*Defined in [packages/api-derive/src/type/HeaderExtended.ts:53](https://github.com/polkadot-js/api/blob/4c328964d5/packages/api-derive/src/type/HeaderExtended.ts#L53)*

**`description`** Convenience method, returns the author for the block

**Returns:** *AccountId | undefined*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[encodedLength](_type_headerextended_.headerextended.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[hash](_type_headerextended_.headerextended.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[isEmpty](_type_headerextended_.headerextended.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  clear

▸ **clear**(): *void*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[clear](_type_headerextended_.headerextended.md#clear)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: keyof S): *boolean*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[delete](_type_headerextended_.headerextended.md#delete)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[eq](_type_headerextended_.headerextended.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/codec/Struct.ts#L189)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[forEach](_type_headerextended_.headerextended.md#foreach)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: Codec, `key`: keyof S, `map`: Map‹keyof S, Codec›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Codec |
`key` | keyof S |
`map` | Map‹keyof S, Codec› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`name`: keyof S): *Codec | undefined*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[get](_type_headerextended_.headerextended.md#get)*

*Overrides void*

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/codec/Struct.ts#L197)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *Codec | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *Codec*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[getAtIndex](_type_headerextended_.headerextended.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

___

###  has

▸ **has**(`key`: keyof S): *boolean*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[has](_type_headerextended_.headerextended.md#has)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  set

▸ **set**(`key`: keyof S, `value`: Codec): *this*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[set](_type_headerextended_.headerextended.md#set)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |
`value` | Codec |

**Returns:** *this*

___

###  toArray

▸ **toArray**(): *Codec[]*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[toArray](_type_headerextended_.headerextended.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[toHex](_type_headerextended_.headerextended.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject*

*Overrides void*

*Defined in [packages/api-derive/src/type/HeaderExtended.ts:60](https://github.com/polkadot-js/api/blob/4c328964d5/packages/api-derive/src/type/HeaderExtended.ts#L60)*

**`description`** Creates the JSON representation

**Returns:** *AnyJsonObject*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[toRawType](_type_headerextended_.headerextended.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[toString](_type_headerextended_.headerextended.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *Uint8Array*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[toU8a](_type_headerextended_.headerextended.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/codec/Struct.ts#L266)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: Registry, `Types`: Record‹string, Constructor›): *Record‹string, string›*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[typesToMap](_type_headerextended_.headerextended.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/codec/Struct.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`Types` | Record‹string, Constructor› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *Constructor‹Struct‹S››*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[with](_type_headerextended_.headerextended.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/4c328964d5/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹Struct‹S››*
