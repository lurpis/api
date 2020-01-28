[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["submittable/Result"](../modules/_submittable_result_.md) › [SubmittableResult](_submittable_result_.submittableresult.md)

# Class: SubmittableResult

## Hierarchy

* **SubmittableResult**

## Implements

* SubmittableResultImpl

## Index

### Constructors

* [constructor](_submittable_result_.submittableresult.md#constructor)

### Properties

* [events](_submittable_result_.submittableresult.md#events)
* [status](_submittable_result_.submittableresult.md#status)

### Accessors

* [isCompleted](_submittable_result_.submittableresult.md#iscompleted)
* [isError](_submittable_result_.submittableresult.md#iserror)
* [isFinalized](_submittable_result_.submittableresult.md#isfinalized)

### Methods

* [filterRecords](_submittable_result_.submittableresult.md#filterrecords)
* [findRecord](_submittable_result_.submittableresult.md#findrecord)

## Constructors

###  constructor

\+ **new SubmittableResult**(`__namedParameters`: object): *[SubmittableResult](_submittable_result_.submittableresult.md)*

*Defined in [submittable/Result.ts:11](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/api/src/submittable/Result.ts#L11)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`events` | undefined &#124; EventRecord‹›[] |
`status` | ExtrinsicStatus‹› |

**Returns:** *[SubmittableResult](_submittable_result_.submittableresult.md)*

## Properties

###  events

• **events**: *EventRecord[]*

*Defined in [submittable/Result.ts:9](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/api/src/submittable/Result.ts#L9)*

___

###  status

• **status**: *ExtrinsicStatus*

*Defined in [submittable/Result.ts:11](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/api/src/submittable/Result.ts#L11)*

## Accessors

###  isCompleted

• **get isCompleted**(): *boolean*

*Defined in [submittable/Result.ts:18](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/api/src/submittable/Result.ts#L18)*

**Returns:** *boolean*

___

###  isError

• **get isError**(): *boolean*

*Defined in [submittable/Result.ts:22](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/api/src/submittable/Result.ts#L22)*

**Returns:** *boolean*

___

###  isFinalized

• **get isFinalized**(): *boolean*

*Defined in [submittable/Result.ts:26](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/api/src/submittable/Result.ts#L26)*

**Returns:** *boolean*

## Methods

###  filterRecords

▸ **filterRecords**(`section`: string, `method`: string): *EventRecord[]*

*Defined in [submittable/Result.ts:33](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/api/src/submittable/Result.ts#L33)*

**`description`** Filters EventRecords for the specified method & section (there could be multiple)

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** *EventRecord[]*

___

###  findRecord

▸ **findRecord**(`section`: string, `method`: string): *EventRecord | undefined*

*Defined in [submittable/Result.ts:42](https://github.com/polkadot-js/api/blob/cba34b4b65/packages/api/src/submittable/Result.ts#L42)*

**`description`** Finds an EventRecord for the specified method & section

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** *EventRecord | undefined*