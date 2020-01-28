[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Generic/Event"](../modules/_primitive_generic_event_.md) › [Event](_primitive_generic_event_.event.md)

# Class: Event <**S, T, V, E**>

**`name`** Event

**`description`** 
A representation of a system event. These are generated via the [[Metadata]] interfaces and
specific to a specific Substrate runtime

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **Event**

## Implements

* Codec

## Index

### Constructors

* [constructor](_primitive_generic_event_.event.md#constructor)

### Properties

* [registry](_primitive_generic_event_.event.md#registry)

### Accessors

* [Type](_primitive_generic_event_.event.md#type)
* [data](_primitive_generic_event_.event.md#data)
* [encodedLength](_primitive_generic_event_.event.md#encodedlength)
* [hash](_primitive_generic_event_.event.md#hash)
* [index](_primitive_generic_event_.event.md#index)
* [isEmpty](_primitive_generic_event_.event.md#isempty)
* [meta](_primitive_generic_event_.event.md#meta)
* [method](_primitive_generic_event_.event.md#method)
* [section](_primitive_generic_event_.event.md#section)
* [typeDef](_primitive_generic_event_.event.md#typedef)

### Methods

* [eq](_primitive_generic_event_.event.md#eq)
* [get](_primitive_generic_event_.event.md#get)
* [getAtIndex](_primitive_generic_event_.event.md#getatindex)
* [toArray](_primitive_generic_event_.event.md#toarray)
* [toHex](_primitive_generic_event_.event.md#tohex)
* [toJSON](_primitive_generic_event_.event.md#tojson)
* [toRawType](_primitive_generic_event_.event.md#torawtype)
* [toString](_primitive_generic_event_.event.md#tostring)
* [toU8a](_primitive_generic_event_.event.md#tou8a)
* [decodeEvent](_primitive_generic_event_.event.md#static-decodeevent)
* [typesToMap](_primitive_generic_event_.event.md#static-typestomap)
* [with](_primitive_generic_event_.event.md#static-with)

## Constructors

###  constructor

\+ **new Event**(`registry`: Registry, `_value?`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *[Event](_primitive_generic_event_.event.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/Event.ts:72](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/primitive/Generic/Event.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`_value?` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[Event](_primitive_generic_event_.event.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/codec/Struct.ts#L34)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  data

• **get data**(): *[EventData](_primitive_generic_event_.eventdata.md)*

*Defined in [packages/types/src/primitive/Generic/Event.ts:105](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/primitive/Generic/Event.ts#L105)*

**`description`** The wrapped [EventData](_primitive_generic_event_.eventdata.md)

**Returns:** *[EventData](_primitive_generic_event_.eventdata.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  index

• **get index**(): *EventId*

*Defined in [packages/types/src/primitive/Generic/Event.ts:112](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/primitive/Generic/Event.ts#L112)*

**`description`** The [EventId](../interfaces/_interfaceregistry_.interfaceregistry.md#eventid), identifying the raw event

**Returns:** *EventId*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  meta

• **get meta**(): *EventMetadataLatest*

*Defined in [packages/types/src/primitive/Generic/Event.ts:119](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/primitive/Generic/Event.ts#L119)*

**`description`** The [[EventMetadata]] with the documentation

**Returns:** *EventMetadataLatest*

___

###  method

• **get method**(): *string*

*Defined in [packages/types/src/primitive/Generic/Event.ts:126](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/primitive/Generic/Event.ts#L126)*

**`description`** The method string identifying the event

**Returns:** *string*

___

###  section

• **get section**(): *string*

*Defined in [packages/types/src/primitive/Generic/Event.ts:133](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/primitive/Generic/Event.ts#L133)*

**`description`** The section string identifying the event

**Returns:** *string*

___

###  typeDef

• **get typeDef**(): *TypeDef[]*

*Defined in [packages/types/src/primitive/Generic/Event.ts:140](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/primitive/Generic/Event.ts#L140)*

**`description`** The [[TypeDef]] for the event

**Returns:** *TypeDef[]*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/codec/Struct.ts#L189)*

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

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/codec/Struct.ts#L197)*

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

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

___

###  toArray

▸ **toArray**(): *Codec[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject | string*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonObject | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/codec/Struct.ts#L266)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` decodeEvent

▸ **decodeEvent**(`registry`: Registry, `value`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *object*

*Defined in [packages/types/src/primitive/Generic/Event.ts:84](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/primitive/Generic/Event.ts#L84)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | Registry | - |
`value` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | new Uint8Array() |

**Returns:** *object*

* **DataType**: *Constructor‹[Null](_primitive_null_.null.md)› | Constructor‹[EventData](_primitive_generic_event_.eventdata.md)›*

* **value**? : *undefined | object*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: Registry, `Types`: Record‹string, Constructor›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/codec/Struct.ts#L238)*

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

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/15158b763c/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹[Struct](_codec_struct_.struct.md)‹S››*
