document.addEventListener(
    "click",
    function (e) {
      // NAV
      if (e.target.closest(".p-toggle")) {
        document.body.classList.toggle("modal-active");
        e.target.classList.toggle("active");
        document.querySelector(".p-nav").classList.toggle("active");
      }
      if (e.target.matches(".has-sub > .i-down")) {
        e.target.parentNode.classList.toggle("active");
      }
      if (e.target.closest(".p-nav a")) {
        document.body.classList.remove("modal-active");
        document.querySelector(".p-toggle").classList.remove("active");
        document.querySelector(".p-nav").classList.remove("active");
        document.querySelector(".p-nav").classList.add("hiding");
        setTimeout(function () {
          document.querySelector(".p-nav").classList.remove("hiding");
        }, 500);
      }
  
      //modal
      if (e.target.closest(".close")) {
        if( document.getElementById("modal") != null ){
          document.getElementById("modal").style.display = "none";
        }
        if( document.getElementById("exit-modal") != null ){
          document.getElementById("exit-modal").style.display = "none";
        }
      }
      // TAB
      if (e.target.closest(".tabnav-item")) {
        tabsContent(e.target.dataset.tabsTarget);
        e.target.classList.add("active");
      }
      // COLLABSE
      if (e.target.closest(".s-collapse > .toggle")) {
        e.target.parentNode.classList.toggle("active");
      }
      if (e.target.closest(".s-collapse-toggle")) {
        e.target.parentNode.parentNode.classList.toggle("active");
      }
      // PACKAGE
      if (e.target.closest(".p-btn-1")) {
        tabsPackage(1);
      }
      if (e.target.closest(".p-btn-2")) {
        tabsPackage(2);
      }
      if (e.target.closest(".p-btn-3")) {
        tabsPackage(3);
      }
      if (e.target.closest(".p-btn-4")) {
        tabsPackage(4);
      }
      if (e.target.closest(".p-btn-5")) {
        tabsPackage(5);
      }
      if (e.target.closest(".p-btn-6")) {
        tabsPackage(6);
      }
    },
    false
  );
  
  function tabsPackage(n) {
    // btn = button, cnt = content
    document.querySelectorAll(".p-cnt").forEach((content) => {
      content.classList.remove("active");
    });
    document.querySelectorAll(".p-cnt-" + n).forEach((content) => {
      content.classList.add("active");
    });
    document.querySelectorAll(".p-btn").forEach((content) => {
      content.classList.remove("active");
    });
    document.querySelectorAll(".p-btn-" + n).forEach((content) => {
      content.classList.add("active");
    });
  }
  
  const tabnav_link = document.querySelectorAll(".tabnav-item");
  const contents = document.querySelectorAll(".tab-content");
  function tabsContent(id) {
    tabnav_link.forEach((e) => {
      e.classList.remove("active");
    });
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.querySelector(id);
    element.classList.add("active");
  }
  
  // SCROLL https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
  let pos = 0;
  let addfixed = false;
  function fixed_header(scrollPos) {
    if( document.querySelector(".p-header") != null ){
        if (150 < scrollPos) {
            document.querySelector(".p-header").classList.add("active");
        } else {
        document.querySelector(".p-header").classList.remove("active");
        }
    }
  }
  document.addEventListener("scroll", (e) => {
    pos = window.scrollY;
    if (!addfixed) {
      window.requestAnimationFrame(() => {
        fixed_header(pos);
        addfixed = false;
      });
      addfixed = true;
    }
  });
  
  // Headtable PRICING PACKAGE
  
  var sticky = document.querySelector(".sticky-headtable");
  if (sticky) {
    if (sticky.style.position !== "sticky-headtable") {
      var stickyTop = sticky.offsetTop;
      document.addEventListener("scroll", function () {
        if (window.scrollY >= stickyTop) {
          sticky.classList.add("fixed");
        } else if (window.scrollY <= stickyTop - 100) {
          sticky.classList.remove("fixed");
        }
      });
    }
  }
  
  // search-partner()
  var loadmore = document.getElementById("btnload");
  
  const selectzone = document.querySelector(".zone-partner");
  if (selectzone) {
    selectzone.addEventListener("change", (event) => {
      loadmore.style.display = "none";
      document.querySelectorAll(".loadmore").forEach((content) => {
        content.classList.remove("loadmore");
      });
      selecttier.selectedIndex = 0;
      document.querySelectorAll(".box-partner").forEach((partner) => {
        var zone = partner.querySelector("#zone");
        var th_zone = document.querySelector(".zone-partner").value;
        if (zone.innerHTML !== th_zone) {
          // console.log(partner);
          partner.style.display = "none";
        } else {
          partner.style.display = "";
        }
      });
    });
  }
  let zoneSelect = document.querySelector(".zone-partner");
  let provinceSelect = document.querySelector(".province-partner");
  let provinces = {
    ภาคเหนือ: [
      { text: "เชียงราย", value: "เชียงราย" },
      { text: "เชียงใหม่", value: "เชียงใหม่" },
      { text: "น่าน", value: "น่าน" },
      { text: "พะเยา", value: "พะเยา" },
      { text: "แพร่", value: "แพร่" },
      { text: "แม่ฮ่องสอน", value: "แม่ฮ่องสอน" },
      { text: "ลำปาง", value: "ลำปาง" },
      { text: "ลำพูน", value: "ลำพูน" },
      { text: "อุตรดิตถ์", value: "อุตรดิตถ์" },
    ],
    ภาคตะวันออกเฉียงเหนือ: [
      { text: "กาฬสินธุ์", value: "กาฬสินธุ์" },
      { text: "ขอนแก่น", value: "ขอนแก่น" },
      { text: "ชัยภูมิ", value: "ชัยภูมิ" },
      { text: "นครพนม", value: "นครพนม" },
      { text: "นครราชสีมา", value: "นครราชสีมา" },
      { text: "บึงกาฬ", value: "บึงกาฬ" },
      { text: "บุรีรัมย์", value: "บุรีรัมย์" },
      { text: "มหาสารคาม", value: "มหาสารคาม" },
      { text: "มุกดาหาร", value: "มุกดาหาร" },
      { text: "ยโสธร", value: "ยโสธร" },
      { text: "ร้อยเอ็ด", value: "ร้อยเอ็ด" },
      { text: "เลย", value: "เลย" },
      { text: "สกลนคร", value: "สกลนคร" },
      { text: "สุรินทร์", value: "สุรินทร์" },
      { text: "ศรีสะเกษ", value: "ศรีสะเกษ" },
      { text: "หนองคาย", value: "หนองคาย" },
      { text: "หนองบัวลำภู", value: "หนองบัวลำภู" },
      { text: "อุดรธานี", value: "อุดรธานี" },
      { text: "อุบลราชธานี", value: "อุบลราชธานี" },
      { text: "อำนาจเจริญ", value: "อำนาจเจริญ" },
    ],
    ภาคกลาง: [
      { text: "กรุงเทพมหานคร", value: "กรุงเทพมหานคร" },
      { text: "กำแพงเพชร", value: "กำแพงเพชร" },
      { text: "ชัยนาท", value: "ชัยนาท" },
      { text: "นครนายก", value: "นครนายก" },
      { text: "นครปฐม", value: "นครปฐม" },
      { text: "นครสวรรค์", value: "นครสวรรค์" },
      { text: "นนทบุรี", value: "นนทบุรี" },
      { text: "ปทุมธานี", value: "ปทุมธานี" },
      { text: "พระนครศรีอยุธยา", value: "พระนครศรีอยุธยา" },
      { text: "พิจิตร", value: "พิจิตร" },
      { text: "พิษณุโลก", value: "พิษณุโลก" },
      { text: "เพชรบูรณ์", value: "เพชรบูรณ์" },
      { text: "ลพบุรี", value: "ลพบุรี" },
      { text: "สมุทรปราการ", value: "สมุทรปราการ" },
      { text: "สมุทรสงคราม", value: "สมุทรสงคราม" },
      { text: "สมุทรสาคร", value: "สมุทรสาคร" },
      { text: "สระบุรี", value: "สระบุรี" },
      { text: "สิงห์บุรี", value: "สิงห์บุรี" },
      { text: "สุโขทัย", value: "สุโขทัย" },
      { text: "สุพรรณบุรี", value: "สุพรรณบุรี" },
      { text: "อ่างทอง", value: "อ่างทอง" },
      { text: "อุทัยธานี", value: "อุทัยธานี" },
    ],
    ภาคตะวันออก: [
      { text: "จันทบุรี", value: "จันทบุรี" },
      { text: "ฉะเชิงเทรา", value: "ฉะเชิงเทรา" },
      { text: "ชลบุรี", value: "ชลบุรี" },
      { text: "ตราด", value: "ตราด" },
      { text: "ปราจีนบุรี", value: "ปราจีนบุรี" },
      { text: "ระยอง", value: "ระยอง" },
      { text: "สระแก้ว", value: "สระแก้ว" },
    ],
    ภาคตะวันตก: [
      { text: "กาญจนบุรี", value: "กาญจนบุรี" },
      { text: "ตาก", value: "ตาก" },
      { text: "ประจวบคีรีขันธ์", value: "ประจวบคีรีขันธ์" },
      { text: "เพชรบุรี", value: "เพชรบุรี" },
      { text: "	ราชบุรี", value: "	ราชบุรี" },
    ],
    ภาคใต้: [
      { text: "กระบี่", value: "กระบี่" },
      { text: "ชุมพร", value: "ชุมพร" },
      { text: "ตรัง", value: "ตรัง" },
      { text: "นครศรีธรรมราช", value: "นครศรีธรรมราช" },
      { text: "นราธิวาส", value: "นราธิวาส" },
      { text: "ปัตตานี", value: "ปัตตานี" },
      { text: "พังงา", value: "พังงา" },
      { text: "พัทลุง", value: "พัทลุง" },
      { text: "ภูเก็ต", value: "ภูเก็ต" },
      { text: "ยะลา", value: "ยะลา" },
      { text: "ระนอง", value: "ระนอง" },
      { text: "สงขลา", value: "สงขลา" },
      { text: "สตูล", value: "สตูล" },
      { text: "สุราษฎร์ธานี", value: "สุราษฎร์ธานี" },
    ],
  };
  
  if (zoneSelect) {
    zoneSelect.addEventListener("change", function () {
      while (provinceSelect.options.length) {
        provinceSelect.remove(0);
      }
  
      let selectedZone = this.value;
      provinceSelect.innerHTML +=
        '<option value="" disabled selected >จังหวัด</option>';
      provinces[selectedZone].forEach(function (province) {
        let newOption = document.createElement("option");
        newOption.text = province.text;
        newOption.value = province.value;
        provinceSelect.appendChild(newOption);
      });
    });
  }
  
  const selectprovince = document.querySelector(".province-partner");
  if (selectprovince) {
    selectprovince.addEventListener("change", (event) => {
      selecttier.selectedIndex = 0;
      loadmore.style.display = "none";
      document.querySelectorAll(".loadmore").forEach((content) => {
        content.classList.remove("loadmore");
      });
      const parentDivs = document.querySelectorAll(".box-partner");
      parentDivs.forEach(function (parentDiv) {
        const childElements = parentDiv.querySelectorAll("p");
        let hasKeyword = false;
        childElements.forEach(function (element) {
          if (element.textContent.includes(event.target.value)) {
            hasKeyword = true;
            parentDiv.style.display = "";
          }
        });
        if (!hasKeyword) {
          const styles = window.getComputedStyle(parentDiv);
          if (styles.getPropertyValue("display") == "none") {
          } else {
            parentDiv.style.display = "none";
          }
        }
      });
    });
  }
  
  const searchpartner = document.querySelector(".searchBox");
  if (searchpartner) {
    searchpartner.addEventListener("keyup", (event) => {
      loadmore.style.display = "none";
      document.querySelectorAll(".loadmore").forEach((content) => {
        content.classList.remove("loadmore");
      });
      const parentDivs = document.querySelectorAll(".box-partner");
      parentDivs.forEach(function (parentDiv) {
        const childElements = parentDiv.querySelectorAll("h5");
        let hasKeyword = false;
        childElements.forEach(function (element) {
          if (element.textContent.includes(event.target.value)) {
            hasKeyword = true;
            parentDiv.style.display = "";
          }
        });
        if (!hasKeyword) {
          const styles = window.getComputedStyle(parentDiv);
          if (styles.getPropertyValue("display") == "none") {
          } else {
            parentDiv.style.display = "none";
          }
        }
      });
    });
  }
  
  const selecttier = document.querySelector(".tier-partner");
  if (selecttier) {
    selecttier.addEventListener("change", (event) => {
      loadmore.style.display = "none";
      document.querySelectorAll(".loadmore").forEach((content) => {
        content.classList.remove("loadmore");
      });
      document.querySelectorAll(".box-partner").forEach((partner) => {
        var zone = partner.querySelector("#zone");
        var prov = partner.querySelector("#p");
        if (selectzone.value !== "") {
          if (selectprovince.value !== "") {
            if (prov.innerHTML !== selectprovince.value) {
              partner.style.display = "none";
            } else {
              if (!partner.classList.contains(event.target.value)) {
                partner.style.display = "none";
              } else {
                partner.style.display = "";
              }
            }
          } else {
            if (zone.innerHTML !== selectzone.value) {
              partner.style.display = "none";
            } else {
              if (!partner.classList.contains(event.target.value)) {
                partner.style.display = "none";
              } else {
                partner.style.display = "";
              }
            }
          }
        } else {
          if (!partner.classList.contains(event.target.value)) {
            partner.style.display = "none";
          } else {
            partner.style.display = "";
          }
        }
      });
  
      // const parentDivs = document.querySelectorAll(".box-partner");
      // parentDivs.forEach(function (parentDiv) {
      //   const childElements = parentDiv.querySelectorAll("p");
      //   let hasKeyword = false;
      //   childElements.forEach(function (element) {
      //     if (element.textContent.includes(selectzone.value)) {
      //       if (element.textContent.includes(selectprovince.value)) {
      //         hasKeyword = true;
      //         parentDiv.style.display = "";
      //       }
      //     }
      //   });
      //   if (!hasKeyword) {
      //     const styles = window.getComputedStyle(parentDiv);
      //     if (styles.getPropertyValue("display") == "none") {
      //     } else {
      //       parentDiv.style.display = "none";
      //     }
      //   }
      // });
    });
  }
  var reset = document.getElementById("reset");
  
  if (reset) {
    reset.addEventListener("click", myFunction);
    function myFunction() {
      selectprovince.selectedIndex = 0;
      selecttier.selectedIndex = 0;
      selectzone.selectedIndex = 0;
      searchpartner.value = "";
      document.querySelectorAll(".box-partner").forEach((content) => {
        content.style.display = "";
      });
      let divs = document.querySelectorAll(".box-partner");
      let sixthAndAbove = Array.prototype.slice.call(divs, 9);
      sixthAndAbove.forEach(function (div) {
        div.classList.add("loadmore");
      });
      loadmore.style.display = "";
      loadmore.innerHTML = "โหลดเพิ่มเติม";
      while (provinceSelect.options.length) {
        provinceSelect.remove(0);
      }
      let options = [
        "นครราชสีมา",
        "เชียงใหม่",
        "กาญจนบุรี",
        "ตาก",
        "อุบลราชธานี",
        "สุราษฎร์ธานี",
        "ชัยภูมิ",
        "แม่ฮ่องสอน",
        "เพชรบูรณ์",
        "ลำปาง",
        "อุดรธานี",
        "เชียงราย",
        "น่าน",
        "เลย",
        "ขอนแก่น",
        "พิษณุโลก",
        "บุรีรัมย์",
        "นครศรีธรรมราช",
        "สกลนคร",
        "นครสวรรค์",
        "ศรีสะเกษ",
        "กำแพงเพชร",
        "ร้อยเอ็ด",
        "สุรินทร์",
        "อุตรดิตถ์",
        "สงขลา",
        "สระแก้ว",
        "กาฬสินธุ์",
        "อุทัยธานี",
        "สุโขทัย",
        "แพร่",
        "ประจวบคีรีขันธ์",
        "จันทบุรี",
        "พะเยา",
        "เพชรบุรี",
        "ลพบุรี",
        "ชุมพร",
        "นครพนม",
        "สุพรรณบุรี",
        "ฉะเชิงเทรา",
        "มหาสารคาม",
        "ราชบุรี",
        "ตรัง",
        "ปราจีนบุรี",
        "กระบี่",
        "พิจิตร",
        "ยะลา",
        "ลำพูน",
        "นราธิวาส",
        "ชลบุรี",
        "มุกดาหาร",
        "บึงกาฬ",
        "พังงา",
        "ยโสธร",
        "หนองบัวลำภู",
        "สระบุรี",
        "ระยอง",
        "พัทลุง",
        "ระนอง",
        "อำนาจเจริญ",
        "หนองคาย",
        "ตราด",
        "พระนครศรีอยุธยา",
        "สตูล",
        "ชัยนาท",
        "นครปฐม",
        "นครนายก",
        "ปัตตานี",
        "กรุงเทพมหานคร",
        "ปทุมธานี",
        "สมุทรปราการ",
        "อ่างทอง",
        "สมุทรสาคร",
        "สิงห์บุรี",
        "นนทบุรี",
        "ภูเก็ต",
        "สมุทรสงคราม",
      ];
      provinceSelect.innerHTML +=
        '<option value="" disabled selected >จังหวัด</option>';
      options.forEach(function (option) {
        let newOption = document.createElement("option");
        newOption.text = option;
        newOption.value = option;
        provinceSelect.appendChild(newOption);
      });
    }
  }
  
  //var loadmore = document.getElementById("btnload");
  var fade = document.querySelectorAll("#fade");
  let area = document.querySelector(".partner-area");
  if (loadmore) {
    loadmore.addEventListener("click", function () {
      let buttonText = loadmore.textContent;
      if (buttonText == "โหลดเพิ่มเติม") {
        document.querySelectorAll(".loadmore").forEach((content) => {
          content.classList.remove("loadmore");
        });
        document.querySelectorAll(".fade-loademore").forEach((content) => {
          content.classList.remove("fade-loademore");
        });
        area.style.maxHeight = "";
        loadmore.innerHTML = "โหลดลดลง";
      } else {
        let divs = document.querySelectorAll(".box-partner");
        loadmore.innerHTML = "โหลดเพิ่มเติม";
        if (fade.length > 0) {
          fade.forEach((element) => {
            element.classList.add("fade-loademore");
          });
          area.style.maxHeight = "500px";
          fade.classList.add("fade-loademore");
          let sixthAndAbove = Array.prototype.slice.call(divs, 12);
          sixthAndAbove.forEach(function (div) {
            div.classList.add("loadmore");
          });
        } else {
          let sixthAndAbove = Array.prototype.slice.call(divs, 9);
          sixthAndAbove.forEach(function (div) {
            div.classList.add("loadmore");
          });
        }
      }
    });
  }
  
  var loadmongkol = document.querySelector(".btn-loadfade");
  if (loadmongkol) {
    loadmongkol.addEventListener("click", function () {
      let buttonText = loadmongkol.textContent;
      if (buttonText == "แสดงเพิ่มเติม") {
        document.querySelectorAll(".fade").forEach((content) => {
          console.log(content.classList);
          content.classList.remove("fade-loademore");
        });
        document.querySelectorAll(".faq").forEach((content) => {
          content.classList.remove("faq-mongkol");
        });
        document.querySelectorAll(".faq").forEach((content) => {
          content.classList.remove("faq-privilege");
        });
        loadmongkol.innerHTML = "แสดงลดลง";
      } else {
        loadmongkol.innerHTML = "แสดงเพิ่มเติม";
        document.querySelectorAll(".fade").forEach((content) => {
          console.log(content.classList);
          content.classList.add("fade-loademore");
        });
        document.querySelectorAll(".faq").forEach((content) => {
          content.classList.add("faq-mongkol");
        });
        document.querySelectorAll(".faq").forEach((content) => {
          content.classList.add("faq-privilege");
        });
      }
    });
  }
  
  var more = document.querySelectorAll(".more-box");
  var less = document.querySelectorAll(".less-box");
  
  if (more) {
    more.forEach((e) => {
      e.addEventListener("click", (event) => {
        document.querySelectorAll(".box1").forEach((content) => {
          content.style.height = "310px";
        });
        document.querySelectorAll(".box1 span").forEach((content) => {
          content.style.top = "31.5%";
        });
        document.querySelectorAll(".box2").forEach((content) => {
          content.style.height = "310px";
        });
        document.querySelectorAll(".box2 span").forEach((content) => {
          content.style.top = "31.5%";
        });
        document.querySelectorAll(".box3").forEach((content) => {
          content.style.height = "310px";
        });
        document.querySelectorAll(".box3 span").forEach((content) => {
          content.style.top = "31.5%";
        });
        document.querySelectorAll(".box4").forEach((content) => {
          content.style.height = "310px";
        });
        document.querySelectorAll(".box4 span").forEach((content) => {
          content.style.top = "31.5%";
        });
        document.querySelectorAll(".box5").forEach((content) => {
          content.style.height = "310px";
        });
        document.querySelectorAll(".box5 span").forEach((content) => {
          content.style.top = "31.5%";
        });
        document.querySelectorAll(".more-box").forEach((content) => {
          content.style.display = "none";
        });
        document.querySelectorAll(".less-box").forEach((content) => {
          content.style.display = "";
        });
        document.querySelectorAll(".more-box2").forEach((content) => {
          content.style.display = "none";
        });
        document.querySelectorAll(".less-box2").forEach((content) => {
          content.style.display = "";
        });
      });
    });
  }
  
  if (less) {
    less.forEach((e) => {
      e.addEventListener("click", (event) => {
        document.querySelectorAll(".box1").forEach((content) => {
          content.style.height = "";
        });
        document.querySelectorAll(".box1 span").forEach((content) => {
          content.style.top = "";
        });
        document.querySelectorAll(".box2").forEach((content) => {
          content.style.height = "";
        });
        document.querySelectorAll(".box2 span").forEach((content) => {
          content.style.top = "";
        });
        document.querySelectorAll(".box3").forEach((content) => {
          content.style.height = "";
        });
        document.querySelectorAll(".box3 span").forEach((content) => {
          content.style.top = "";
        });
        document.querySelectorAll(".box4").forEach((content) => {
          content.style.height = "";
        });
        document.querySelectorAll(".box4 span").forEach((content) => {
          content.style.top = "";
        });
        document.querySelectorAll(".box5").forEach((content) => {
          content.style.height = "";
        });
        document.querySelectorAll(".box5 span").forEach((content) => {
          content.style.top = "";
        });
        document.querySelectorAll(".more-box").forEach((content) => {
          content.style.display = "";
        });
        document.querySelectorAll(".less-box").forEach((content) => {
          content.style.display = "none";
        });
        document.querySelectorAll(".more-box2").forEach((content) => {
          content.style.display = "";
        });
        document.querySelectorAll(".less-box2").forEach((content) => {
          content.style.display = "none";
        });
      });
    });
  }
  
  // modal
  var modal = document.getElementById("modal");
  var btn = document.getElementsByClassName("openModal");
  
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      modal.style.display = "block";
    });
  }
  
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  
  var exitmodal = document.getElementById("exit-modal");
  var btnexit = document.getElementsByClassName("openexitModal");
  
  for (var i = 0; i < btnexit.length; i++) {
    btnexit[i].addEventListener("click", function () {
      exitmodal.style.display = "block";
    });
  }
  
  window.onclick = function (event) {
    if (event.target == modal) {
      exitmodal.style.display = "none";
    }
  };

///** MONKOL FORM **///
window.onload = () => {
  var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        localStorage.setItem('ipAddress', this.responseText);
      }
    });

    xhr.open("GET", "https://api.ipify.org");
    xhr.send();
};