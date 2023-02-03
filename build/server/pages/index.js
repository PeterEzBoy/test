"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MongkolPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./lib/api.tsx
var api = __webpack_require__(900);
// EXTERNAL MODULE: ./lib/mongkols.js
var mongkols = __webpack_require__(261);
;// CONCATENATED MODULE: external "react-select"
const external_react_select_namespaceObject = require("react-select");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/index.tsx





function MongkolPage({ header , faqs  }) {
    const options = [
        {
            value: "ธุรกิจซื้อมาขายไป",
            label: "ธุรกิจซื้อมาขายไป"
        },
        {
            value: "ธุรกิจให้บริการ",
            label: "ธุรกิจให้บริการ"
        },
        {
            value: "ธุรกิจอสังหาริมทรัพย์",
            label: "ธุรกิจอสังหาริมทรัพย์"
        },
        {
            value: "ธุรกิจผลิต",
            label: "ธุรกิจผลิต"
        },
        {
            value: "สำนักงานบัญชี",
            label: "สำนักงานบัญชี"
        },
        {
            value: "ธุรกิจอื่น ๆ",
            label: "ธุรกิจอื่น ๆ"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Peak Mongkol"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: ""
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: header
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: mongkols/* MongkolForm */.J5,
                className: "mongkol-form active",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: "mongkol-number",
                        type: "number",
                        placeholder: "0xx-xxx-xxxx",
                        name: "p_number",
                        id: "p_n",
                        required: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: "mongkol-input",
                        type: "text",
                        placeholder: "ชื่อ-นามสกุล*",
                        name: "firtname",
                        id: "f_name",
                        required: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: "mongkol-input",
                        type: "text",
                        placeholder: "ชื่อกิจการ*",
                        name: "buss_name",
                        id: "bass_name",
                        required: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mongkol-select",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_select_default()), {
                            options: options,
                            name: "business",
                            className: "mongkol-select",
                            classNamePrefix: "mongkol-select",
                            instanceId: "mongkol-buss",
                            placeholder: "ประเภทธุรกิจ",
                            required: true
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "concern-flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "checkbox",
                                id: "concern",
                                name: "concernt",
                                value: "",
                                required: true
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        children: "ให้ความยินยอม เก็บ รวมรวมใช้ และเปิดเผยเพื่อการตลาด"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "openModal btn-consent",
                                        children: "อ่านเพิ่มเติม"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn-submit mongkol-btn",
                        onClick: mongkols/* MongkolButton */.PZ,
                        children: "ประมวลผลข้อมูล"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "modal",
                className: "alignfull",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "modal-content consent _h",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "close",
                            children: "\xd7"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "การให้ความยินยอมในการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลเพื่อการตลาด"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "_indent",
                            children: "เพื่อให้เป็นไปตามข้อกำหนดทางกฎหมายที่เกี่ยวข้องกับการคุ้มครองข้อมูลส่วนบุคคล บริษัท พี ยู ยู เอ็น อินเทลลิเจนท์ จำกัด (บริษัท) จึงขอให้ท่านให้ความยินยอมในการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลตามเนื้อหาที่แจ้งแก่ท่านดังต่อไปนี้"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "ข้อมูลที่ทางบริษัทจะเก็บรวบรวม ใช้ และเปิดเผยเผื่อวัตถุประสงค์ทางการตลาดได้แก่"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "First Name (ชื่อ)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Last Name (นามสกุล)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Email (อีเมล)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Phone (หมายเลขโทรศัพท์)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Company Name (ชื่อบริษัทหรือหน่วยงานที่ท่านสังกัด)"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "วัตถุประสงค์ของการให้ความยินยอม"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "เพื่อวิจัย ทำข้อมูลสถิติ พัฒนา วิเคราะห์ ผลิตภัณฑ์ บริการ หรือสิทธิประโยชน์เพื่อตอบสนองความต้องการของท่าน"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "เพื่อการเสนอผลิตภัณฑ์ บริการ และสิทธิบัตรประโยชน์ที่เหมาะสมแก่ท่าน"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "ผู้ที่จะเข้าถึงข้อมูลของท่านตามความยินยอมนี้ได้แก่"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "บริษัท และ พนักงานของบริษัทที่ทำหน้าที่อันเกี่ยวข้องกับการทำการตลาด"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "_indent",
                            children: "กรณีที่ท่านไม่ให้ความยินยอม หรือได้ขอใช้สิทธิเพิกถอนความยินยอมในภายหลัง ท่านจะพลาดโอกาสในการได้รับข้อเสนอ เกี่ยวกับ ผลิตภัณฑ์ บริการ และสิทธิประโยชน์ที่เหมาะสมกับความต้องการของท่านโดยเฉพาะจากบริษัท บุคคลอื่นที่ทางบริษัทได้แจ้งต่อท่านไว้ภายใต้ความยินยอมนี้"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "_indent",
                            children: "ทั้งนี้การให้ความยินยอมแก่บริษัทในครั้งนี้ จะไม่ส่งผลกระทบ หรือเป็นการแก้ไขความยินยอมใดๆ ที่ท่านให้ไว้แก่บริษัทก่อนหน้าความยินยอมนี้"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "_indent",
                            children: "ท่านสามารถอ่านข้อกำหนดเพิ่มเติมเกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคลของท่าน หรือการขอใช้สิทธิในฐานะเจ้าของข้อมูลส่วนบุคคลได้ที่ dpo@peakengine.com"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "_indent",
                            children: "การกด “ยินยอม” จะเป็นการยินยอมให้บริษัท นำข้อมูลของท่านตามที่ระบุไว้ในความยินยอมนี้ ไปใช้ตามวัตถุประสงค์และเปิดเผยต่อบุคคลตามที่ได้กำหนดไว้ความยินยอมนี้"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: faqs
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "wp-block-template-part",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "is-layout-constrained wp-block-group p-footer-alt",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-footer alignfull",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "s-container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "",
                                    children: " \xa9 2022 PUUN Intelligent Co., Ltd. All rights reserved."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "",
                                    children: "Privacy Policy"
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}
async function getServerSideProps() {
    try {
        const data = await (0,api/* getPageAllMongkol */.XT)();
        const head = data.edges[0].node.content;
        const faq = data.edges[1].node.content;
        return {
            props: {
                header: head,
                faqs: faq
            }
        };
    } catch (error) {
        throw new Error("Fail fecth data to propps!");
    }
}


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [958], () => (__webpack_exec__(995)));
module.exports = __webpack_exports__;

})();