(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{518:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"complex-transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#complex-transactions"}},[t._v("#")]),t._v(" Complex transactions")]),t._v(" "),a("p",[t._v("Up till now we have focussed on the base operation of transactions. There are however some more complex operations that deserve some more information, for instance when doing either democracy proposals or executing sudo calls, in both these cases the transaction wraps a call or proposal to be evaluated.")]),t._v(" "),a("h2",{attrs:{id:"sudo-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sudo-use"}},[t._v("#")]),t._v(" Sudo use")]),t._v(" "),a("p",[t._v("When running a development chain (Polkadot/Substrate with a "),a("code",[t._v("--dev")]),t._v(" flag), or in certain testnets a sudo module is available - just like the sudo command found on some systems, it allows root-level access to perform actions. For instance, we can perform a "),a("code",[t._v("setBalance(<accountId>, <free>, <reserved>)")]),t._v(" on an account -")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the current sudo key in the system")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sudoKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sudo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Lookup from keyring (assuming we have added all, on --dev this would be `//Alice`)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sudoPair "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" keyring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPair")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sudoKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Send the actual sudo transaction")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" unsub "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sudo\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("balances"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBalance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("678")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("signAndSend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sudoPair"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("The above is really quite straight-forward, the "),a("code",[t._v("sudo.sudo(<call>)")]),t._v(" call takes 1 parameter, which is a "),a("code",[t._v("Call")]),t._v(". We construct this via the "),a("code",[t._v("api.tx")]),t._v(" and pass it through. The only difference is that the nested call has no actual "),a("code",[t._v(".signAndSend")]),t._v(" on it, rather it is only used as a container for data.")]),t._v(" "),a("p",[t._v("Exactly the same would apply to the standard "),a("code",[t._v("democracy.propose(<proposal>, <value>)")]),t._v(", for instance we can just swap the above sudo wrapper with a proposal and add the correct fees for the proposal.")]),t._v(" "),a("h2",{attrs:{id:"complex-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#complex-types"}},[t._v("#")]),t._v(" Complex types")]),t._v(" "),a("p",[t._v("As indicated in previous sections (we will cover types in more detail next), the API will format the inputs into the actual type required for submission. For primitives such as numbers, this is quite understandable, but it is worth spending at least one example on cases where an object is provided as an input. For instance, making a call to validate -")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" txHash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("staking"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  validatorPayment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("In the above example, all we need to provide is a the fields for the "),a("code",[t._v("ValidatorPrefs")]),t._v(" object. (Any fields not defined will be set to the default for that type, i.e. all zero). This object maps through to what is defined on the Polkadot/Substrate side, with the "),a("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/master/packages/types/src/interfaces/staking/definitions.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("@polkadot/types version"),a("OutboundLink")],1),t._v(" mapping all fields.")]),t._v(" "),a("h2",{attrs:{id:"understanding-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#understanding-types"}},[t._v("#")]),t._v(" Understanding types")]),t._v(" "),a("p",[t._v("As has been very apparent in all the preceding sections, the management of types is what allows the API to communicate with the node. Most values are in a "),a("a",{attrs:{href:"https://github.com/paritytech/parity-scale-codec",target:"_blank",rel:"noopener noreferrer"}},[t._v("binary SCALE-encoded format"),a("OutboundLink")],1),t._v(" and it is the responsibility of the API is to encode and decode these. In the next section we will "),a("router-link",{attrs:{to:"/start/types.basics.html"}},[t._v("take a look at what interfaces the API provides around types")]),t._v(".")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);