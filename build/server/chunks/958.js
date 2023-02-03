"use strict";
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XT": () => (/* binding */ getPageAllMongkol),
/* harmony export */   "dU": () => (/* binding */ getScoreBySlug)
/* harmony export */ });
/* unused harmony export fetchAPI */
const API_URL = process.env.WORDPRESS_API_URL;
async function fetchAPI(query = "") {
    const headers = {
        "Content-Type": "application/json"
    };
    if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
        headers["Authorization"] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
    }
    // WPGraphQL Plugin must be enabled
    const res = await fetch(API_URL, {
        headers,
        method: "POST",
        body: JSON.stringify({
            query
        })
    });
    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error("Failed to fetch API");
    }
    return json.data;
}
async function getPageAllMongkol() {
    const data = await fetchAPI(`
  {
    pages(where: {nameIn: ["peak-mongkol-header", "peak-mongkol-faq"]}) {
      edges {
        node {
          content
        }
      }
    }
  }
  `);
    return data?.pages;
}
async function getScoreBySlug(slugName) {
    const data = await fetchAPI(`
  {
      score(id: "${slugName}", idType: SLUG) {
      scoreData {
          avgDays
          avgDaysRank
          group
          invoices
          isFast
          isSure
          merchants
          payRank
          payRate
          point
          score
          topsis
      }
      }
  }
  `);
    return data?.score;
}


/***/ }),

/***/ 261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BF": () => (/* binding */ MongkolFormPath2),
/* harmony export */   "J5": () => (/* binding */ MongkolForm),
/* harmony export */   "Jc": () => (/* binding */ pdfMongkol),
/* harmony export */   "PZ": () => (/* binding */ MongkolButton)
/* harmony export */ });
///** MONKOL FORM **///
function MongkolButton() {
    var alldata = document.querySelector(".mongkol-form").elements;
    var phone = alldata.p_number.value;
    var name = alldata.firtname.value;
    var bussinessName = alldata.buss_name.value;
    var bussiness = alldata.business.value;
    var concernt = alldata.concernt;
    var count_phone = phone.toString().split("").length;
    if (count_phone != 10 && count_phone != 9) {
        alert("กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้องด้วยครับ");
    } else if (phone == "" || name == "" || bussinessName == "" || bussiness == "") {
        alert("กรุณากรอกข้อมูลให้ครบ");
    } else if (concernt.checked == false) {
        alert("โปรดกดให้ความยินยอม เพื่อดำเนินการต่อไป");
    }
}
function MongkolForm(e) {
    e.preventDefault();
    var alldata = e.target.elements;
    var device = navigator.userAgent;
    var data = "";
    var dataAsana = {};
    var phone = alldata.p_number.value;
    var name = alldata.firtname.value;
    var bussinessName = alldata.buss_name.value;
    var bussiness = alldata.business.value;
    dataAsana.phoneNumber = phone;
    dataAsana.fullName = name;
    dataAsana.organization = bussinessName;
    dataAsana.organizationType = bussiness;
    dataAsana.annualIncom = "-";
    dataAsana.durationOrganization = "-";
    dataAsana.customerType = "-";
    dataAsana.numberEmployees = "-";
    dataAsana.accountingSoftware = "-";
    dataAsana.email = "-";
    GetGoogleSheetToken(data, function(token, data) {
        var sheetID = "17tqjYMtPq-N4yvl5coVPebvZDwdYZmLexTuIZKVha5Q";
        var sheetName = "Sheet1";
        var today = new Date();
        var pdfReques = "No";
        var ip = localStorage.getItem("ipAddress");
        var dataSent = JSON.stringify({
            values: [
                [
                    "",
                    phone,
                    name,
                    bussinessName,
                    bussiness,
                    pdfReques,
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ip,
                    device,
                    "https://whatismyipaddress.com/ip/" + ip,
                    window.location.hostname,
                    today
                ]
            ]
        });
        UpdateGoogleSheetPartner(token, sheetID, sheetName, dataSent, function(res) {
            var result = JSON.parse(res);
            var mkData = {
                no: "",
                phone: phone,
                fullName: name,
                bussName: bussinessName,
                buss: bussiness,
                pdf: pdfReques,
                email: "",
                income: "",
                customerType: "",
                close: "",
                employeeNumber: "",
                program: "",
                ip: ip,
                device: device,
                province: "https://whatismyipaddress.com/ip/" + ip,
                web: window.location.hostname,
                time: today
            };
            localStorage.setItem("SheetColumn", result.updates.updatedRange);
            localStorage.setItem("MonkolData", JSON.stringify(mkData));
        });
        updateMonkolToAsana(dataAsana);
    });
    ProcessMongkol(phone, name, bussinessName, bussiness);
}
function pdfMongkol() {
    var pdfData = document.querySelector(".form-request-pdf").elements;
    var email, income, customerType, yearOfBussiness, employeeNumber, app;
    email = pdfData.email.value;
    income = pdfData.income.value;
    customerType = pdfData.customerType.value;
    yearOfBussiness = pdfData.yearOfBussiness.value;
    employeeNumber = pdfData.employeeNumber.value;
    app = pdfData.app.value;
    if (isValidEmail(email) == true) {
        if (income != "" && customerType != "" && yearOfBussiness != "" && employeeNumber != "" && app != "") {
            document.querySelectorAll(".form-pdf").forEach((content)=>{
                content.style.display = "none";
            });
            document.querySelectorAll("#receive").forEach((content)=>{
                content.style.display = "";
            });
        } else {
            alert("กรุณากรอกข้อมูลให้ครบ");
        }
    } else {
        alert("กรุณากรอกอีเมลให้ถูกต้อง");
    }
}
function MongkolFormPath2(e) {
    e.preventDefault();
    var alldata = e.target.elements;
    var data;
    var sheetCloumnId = localStorage.getItem("SheetColumn");
    var monkolData = JSON.parse(localStorage.getItem("MonkolData"));
    GetGoogleSheetToken(data, function(token, data) {
        var sheetID = "17tqjYMtPq-N4yvl5coVPebvZDwdYZmLexTuIZKVha5Q";
        var sheetName = sheetCloumnId;
        var today = new Date();
        var dataAsana = {};
        if (alldata.email.value != "") {
            var dataSent = JSON.stringify({
                values: [
                    [
                        "",
                        monkolData.phone,
                        monkolData.fullName,
                        monkolData.bussName,
                        monkolData.buss,
                        "Yes",
                        alldata.email.value,
                        alldata.income.value,
                        alldata.customerType.value,
                        alldata.yearOfBussiness.value,
                        alldata.employeeNumber.value,
                        alldata.app.value,
                        alldata.natureofbusiness.value,
                        monkolData.ip,
                        monkolData.device,
                        monkolData.province,
                        window.location.hostname,
                        today
                    ]
                ]
            });
            dataAsana.phoneNumber = monkolData.phone;
            dataAsana.fullName = monkolData.fullName;
            dataAsana.organization = monkolData.bussName;
            dataAsana.organizationType = monkolData.buss;
            dataAsana.annualIncom = alldata.income.value;
            dataAsana.durationOrganization = alldata.yearOfBussiness.value;
            dataAsana.customerType = alldata.customerType.value;
            dataAsana.numberEmployees = alldata.employeeNumber.value;
            dataAsana.accountingSoftware = alldata.app.value;
            dataAsana.email = alldata.email.value;
            UpdateGoogleSheetByLogData(token, sheetID, sheetName, dataSent, function(res) {
                var result = JSON.parse(res);
            });
            updateMonkolToAsana(dataAsana);
        }
    });
    SentPDFtoEmail(alldata);
}
function SentPDFtoEmail(alldata) {
    var formData = new FormData();
    var ajaxRequest = new XMLHttpRequest();
    var monkolData = JSON.parse(localStorage.getItem("MonkolData"));
    var point = document.querySelector(".monkol-point");
    var score = document.querySelector(".monkol-score");
    formData.append("action", "monkol_sent_pdf_to_email");
    formData.append("email", alldata.email.value);
    formData.append("fullname", monkolData.fullName);
    formData.append("company", monkolData.bussName);
    formData.append("sum_phone", point.innerHTML);
    formData.append("score", score.innerHTML);
    ajaxRequest.open("POST", "https://peak.todsorb.app/wp-admin/admin-ajax.php", true);
    ajaxRequest.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            //var result = JSON.parse(this.response);
            console.log("success");
        } else {
            console.log("error " + this.status);
        }
    };
    ajaxRequest.send(formData);
}
function updateMonkolToAsana(data) {
    var data = JSON.stringify({
        phoneNumber: data.phoneNumber,
        fullName: data.fullName,
        organization: data.organization,
        organizationType: data.organizationType,
        annualIncom: data.annualIncom,
        durationOrganization: data.durationOrganization,
        customerType: data.customerType,
        numberEmployees: data.numberEmployees,
        accountingSoftware: data.accountingSoftware,
        email: data.email
    });
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });
    xhr.open("POST", "https://peakfunction.azurewebsites.net/api/MongkolDatateller?code=Gp9HdEHoEZP3agjPacHDOqePcvVa7vVkHvMHSk3zjoXBs05deO6lSg==");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function sum(array) {
    return array.reduce(function(a, b) {
        return a + b;
    }, 0);
}
function formatTelephoneNumber(number) {
    return number.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
}
function ProcessMongkol(phone, firstName, bussName, bussType) {
    var score;
    window.scrollTo(0, 0);
    document.querySelectorAll(".unactive").forEach((content)=>{
        content.classList.remove("unactive");
    });
    document.querySelectorAll(".active").forEach((content)=>{
        content.classList.add("unactive");
    });
    score = sum(phone.toString().split("").map(function(i) {
        return parseInt(i);
    }));
    var tel_fomat = formatTelephoneNumber(phone);
    if (score > 72 || score < 8 || score == 11 || score == 12 || score == 13) {
        var tel = document.querySelector(".tel");
        tel.innerHTML = tel_fomat;
        var element = document.querySelector(".score");
        element.innerHTML = 'ผลรวม เท่ากับ <mark class="gb-highlight">' + score + "</mark>";
        setTimeout(function() {
            window.scrollTo(0, 0);
            document.querySelectorAll(".mongkol-home").forEach((content)=>{
                content.classList.add("unactive");
            });
            document.querySelectorAll(".unactive-no").forEach((content)=>{
                content.classList.remove("unactive-no");
            });
        }, 3000);
    } else {
        setTimeout(function() {
            window.location.href = "/mongkol/score/" + score + "?tel=" + tel_fomat;
        }, 3000);
    }
}
///** Googlle Sheet **///
function GetGoogleSheetToken(data, callback) {
    const clientId = "224421666611-826k0hfse4tuk2esh6j8pld5phloh3p5.apps.googleusercontent.com";
    const clientSecret = "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";
    const refreshToken = "1%2F%2F0dwkB28FVoCsbCgYIARAAGA0SNwF-L9Iry_ggeDL40i9BoU0wytz6zsVAJCgp11WeATcN1gtM2PW2Onua6FnOXUkfPv5BFgKX_ls";
    const dataGetToken = "client_id=" + clientId + "&client_secret=" + clientSecret + "&refresh_token=" + refreshToken + "&grant_type=refresh_token";
    const rqToken = new XMLHttpRequest();
    rqToken.withCredentials = false;
    rqToken.addEventListener("readystatechange", function() {
        if (this.readyState === 4 && this.status == 200) {
            callback(this.response, data);
        }
    });
    rqToken.open("POST", "https://accounts.google.com/o/oauth2/token");
    rqToken.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    rqToken.send(dataGetToken);
}
function UpdateGoogleSheetPartner(token, sheetID, sheetName, dataSent, callback) {
    var tokenData = JSON.parse(token);
    var udSheet = new XMLHttpRequest();
    udSheet.withCredentials = false;
    udSheet.addEventListener("readystatechange", function() {
        if (this.readyState === 4 && this.status == 200) {
            callback(this.response);
        }
    });
    udSheet.open("POST", "https://sheets.googleapis.com/v4/spreadsheets/" + sheetID + "/values/" + sheetName + ":append?&valueInputOption=RAW");
    udSheet.setRequestHeader("Authorization", "Bearer " + tokenData.access_token);
    udSheet.setRequestHeader("Accept", "application/json");
    udSheet.setRequestHeader("Content-Type", "application/json");
    udSheet.send(dataSent);
}
function UpdateGoogleSheetByLogData(token, sheetID, sheetName, dataSent, callback) {
    var tokenData = JSON.parse(token);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            callback(this.responseText);
        }
    });
    xhr.open("PUT", "https://sheets.googleapis.com/v4/spreadsheets/" + sheetID + "/values/" + sheetName + "?valueInputOption=RAW");
    xhr.setRequestHeader("Authorization", "Bearer " + tokenData.access_token);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(dataSent);
}


/***/ })

};
;